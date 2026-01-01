import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { take, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-angular-navigations';
import { LayoutService, BreadcrumbItem } from '@core/services';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
import { getBreadcrumbPathFromNavigation, getBreadcrumbIcon } from '@core/utils/breadcrumb.util';

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
  }

  ngOnInit(): void {
    // Subscribe to handset changes to adjust sidebar type
    this.isHandset$.subscribe(isHandset => {
      this.sidebarType = isHandset ? 'Over' : 'Push';
    });

    // Generate breadcrumbs from navigation constants when route changes
    // Main-layout is the single source of truth for breadcrumbs
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(event => {
        // Type guard: event is NavigationEnd after filter
        if (event instanceof NavigationEnd) {
          const currentUrl = event.urlAfterRedirects || event.url;
          console.log('[MainLayout] NavigationEnd - URL:', currentUrl, 'urlAfterRedirects:', event.urlAfterRedirects);
          
          // Generate breadcrumb path directly from navigation constants
          const breadcrumbPath = getBreadcrumbPathFromNavigation(currentUrl);

          if (breadcrumbPath.length > 0) {
            // Map to BreadcrumbItem format with icons
            const breadcrumbItems: BreadcrumbItem[] = breadcrumbPath.map(item => ({
              label: item.label,
              route: item.route,
              icon: item.icon || getBreadcrumbIcon(item.level || 1)
            }));

            this.breadcrumbs = breadcrumbItems;
            // Also update LayoutService for consistency
            this.layoutService.setBreadcrumbs(breadcrumbItems);
          } else {
            // If no breadcrumb found, clear breadcrumbs
            this.breadcrumbs = [];
            this.layoutService.setBreadcrumbs([]);
          }
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
