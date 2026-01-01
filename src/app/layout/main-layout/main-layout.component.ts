import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { take, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-angular-navigations';
import { LayoutService, BreadcrumbItem } from '@core/services';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar') sidebar!: EjsSidebar;

  // Observables from LayoutService
  isHandset$: Observable<boolean>;
  sidebarOpen$: Observable<boolean>;
  hiddenHeader$: Observable<string | null>;
  breadcrumbs$: Observable<BreadcrumbItem[]>;

  // UI State
  sidebarWidth: string = '368px'; // 88px icon bar + 280px menu
  sidebarType: 'Over' | 'Push' | 'Slide' = 'Over';
  breadcrumbs: BreadcrumbItem[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.isHandset$ = this.layoutService.isHandset$;
    this.sidebarOpen$ = this.layoutService.sidebarOpen$;
    this.hiddenHeader$ = this.layoutService.hiddenHeader$;
    this.breadcrumbs$ = this.layoutService.breadcrumbs$;
  }

  ngOnInit(): void {
    // Subscribe to handset changes to adjust sidebar type
    this.isHandset$.subscribe(isHandset => {
      this.sidebarType = isHandset ? 'Over' : 'Push';
    });

    // Subscribe to breadcrumbs from LayoutService (set by sidebar)
    this.breadcrumbs$.pipe(takeUntil(this.destroy$)).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });

    // Subscribe to route changes to ensure breadcrumb updates when URL changes directly
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        // If breadcrumbs are empty or route changed, trigger sidebar to update breadcrumbs
        // Sidebar's route change handler will update breadcrumbs via LayoutService
        // This ensures breadcrumb updates even when navigating directly (not through sidebar)
        if (this.breadcrumbs.length === 0) {
          // If no breadcrumbs from sidebar, breadcrumb component will use autoGenerate
          // This is handled in the template with [autoGenerate]="breadcrumbs.length === 0"
        }
      });

    // Refresh config (in case of navigation updates)
    this.layoutService.refreshConfig();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSidebarClose(): void {
    this.layoutService.setSidebarState(false);
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  // Swipe Handlers
  onSwipeRight(): void {
    this.isHandset$.pipe(take(1)).subscribe(isHandset => {
      if (isHandset) {
        this.layoutService.setSidebarState(true);
      }
    });
  }

  onSwipeLeft(): void {
    this.isHandset$.pipe(take(1)).subscribe(isHandset => {
      if (isHandset) {
        this.layoutService.setSidebarState(false);
      }
    });
  }
}
