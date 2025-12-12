import { Component, ChangeDetectionStrategy, computed, inject, DestroyRef } from '@angular/core';
import { NavService } from '../../../core/services/nav.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLayoutComponent {
  navService = inject(NavService);
  private router = inject(Router);

  // Reactive screen state
  screenWidth = toSignal(this.navService.screenWidth, { initialValue: window.innerWidth });
  isMobile = computed(() => this.screenWidth() < 768);

  constructor() {
    // Close sidebar on mobile when route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        if (this.isMobile()) {
          this.navService.closeSidebar();
        }
      });
  }

  clearToggle(): void {
    // Clear any toggle states
    this.navService.closeSidebar();
  }

  toggleSidebarBody(): void {
    // Toggle sidebar body
    if (this.isMobile()) {
      this.navService.toggleSidebar();
    }
  }

  closeMenu(): void {
    // Close menu states
    this.navService.closeSidebar();
  }
}










