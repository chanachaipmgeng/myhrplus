import { Component, OnInit, OnDestroy, ViewChild, HostListener, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-angular-navigations';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar') sidebar!: EjsSidebar;
  @ViewChild('mainWrapper', { static: false }) mainWrapper!: ElementRef<HTMLElement>;

  isHandset$!: Observable<boolean>;
  sidebarOpen = false;
  sidebarWidth: string = '368px'; // Wider for two-layer design (88px icon bar + 280px menu)
  sidebarType: 'Over' | 'Push' | 'Slide' = 'Over';
  hiddenHeader: string | null = null;

  // Swipe gesture state
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;
  private readonly SWIPE_THRESHOLD = 50; // Minimum distance for swipe
  private readonly SWIPE_VELOCITY_THRESHOLD = 0.3; // Minimum velocity for swipe

  private storageSubscription?: Subscription;
  private storageEventSubscription?: () => void;
  private intervalId?: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    // Check sessionStorage for hiddenHeader
    this.checkHiddenHeader();

    // Watch for storage changes
    this.watchStorageChanges();

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

    // Auto-open sidebar on desktop
    this.isHandset$.subscribe(isHandset => {
      if (!isHandset) {
        this.sidebarOpen = true;
        this.sidebarType = 'Push';
        this.sidebarWidth = '368px'; // Two-layer: 88px icon bar + 280px menu
      } else {
        this.sidebarOpen = false;
        this.sidebarType = 'Over';
        this.sidebarWidth = '368px'; // Two-layer: 88px icon bar + 280px menu
      }
    });
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    if (this.storageEventSubscription) {
      window.removeEventListener('storage', this.storageEventSubscription);
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Check sessionStorage for hiddenHeader flag
   */
  private checkHiddenHeader(): void {
    this.hiddenHeader = this.storage.getSessionItem<string>('hiddenHeader');
  }

  /**
   * Watch for storage changes (cross-tab communication)
   */
  private watchStorageChanges(): void {
    // Listen to storage events (for cross-tab communication)
    this.storageEventSubscription = () => {
      this.checkHiddenHeader();
    };
    window.addEventListener('storage', this.storageEventSubscription);

    // Also check periodically for same-tab changes
    // (since storage event only fires for other tabs)
    this.intervalId = window.setInterval(() => {
      const currentValue = this.storage.getSessionItem<string>('hiddenHeader');
      if (currentValue !== this.hiddenHeader) {
        this.hiddenHeader = currentValue;
      }
    }, 100);
  }

  /**
   * Handle touch start for swipe gestures (mobile)
   */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  /**
   * Handle touch end for swipe gestures (mobile)
   */
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.handleSwipe();
  }

  /**
   * Handle swipe gesture
   */
  private handleSwipe(): void {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Only handle horizontal swipes (ignore vertical scrolling)
    if (absDeltaX > absDeltaY && absDeltaX > this.SWIPE_THRESHOLD) {
      // Swipe right to open sidebar (only on mobile)
      if (deltaX > 0) {
        this.isHandset$.subscribe(isHandset => {
          if (isHandset && !this.sidebarOpen) {
            this.toggleSidebar();
          }
        }).unsubscribe();
      }
      // Swipe left to close sidebar (only on mobile)
      else if (deltaX < 0) {
        this.isHandset$.subscribe(isHandset => {
          if (isHandset && this.sidebarOpen) {
            this.closeSidebar();
          }
        }).unsubscribe();
      }
    }
  }

  toggleSidebar(): void {
    if (this.sidebar) {
      this.sidebar.toggle();
    } else {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }

  onSidebarClose(): void {
    this.sidebarOpen = false;
  }

  closeSidebar(): void {
    if (this.sidebar) {
      this.sidebar.hide();
    } else {
      this.sidebarOpen = false;
    }
  }
}
