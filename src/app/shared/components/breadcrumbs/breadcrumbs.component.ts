import { Component, ChangeDetectionStrategy, input, inject, computed, signal, effect } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  route?: string;
  icon?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  items = input<BreadcrumbItem[]>([]);
  separator = input<string>('/');
  showHome = input<boolean>(true);
  homeIcon = input<string>('home');
  autoGenerate = input<boolean>(false);
  maxItems = input<number>(5);

  // Reactive router events
  private navigationEnd = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(null)
    )
  );

  // Computed breadcrumbs
  breadcrumbs = computed(() => {
    // Trigger re-calculation on navigation end
    this.navigationEnd();

    if (!this.autoGenerate()) {
      return this.items();
    }

    const breadcrumbs: BreadcrumbItem[] = [];

    if (this.showHome()) {
      breadcrumbs.push({
        label: 'หน้าแรก',
        route: '/dashboard',
        icon: this.homeIcon()
      });
    }

    let route = this.activatedRoute.root;
    let url = '';

    do {
      const childrenRoutes = route.children;
      route = null as any;

      childrenRoutes.forEach(childRoute => {
        if (childRoute.outlet === 'primary') {
          const routeSnapshot = childRoute.snapshot;
          url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');

          const routeData = routeSnapshot.data;

          // Check for breadcrumbs array first (new format)
          if (routeData && routeData['breadcrumbs'] && Array.isArray(routeData['breadcrumbs'])) {
            routeData['breadcrumbs'].forEach((item: any) => {
              breadcrumbs.push({
                label: item.label || item.title,
                route: item.route || item.url,
                icon: item.icon
              });
            });
          }
          // Fallback to breadcrumb (singular) for backward compatibility
          else if (routeData && routeData['breadcrumb']) {
            breadcrumbs.push({
              label: routeData['breadcrumb'],
              route: url,
              icon: routeData['icon']
            });
          }
          // Fallback to urls array (old format) for backward compatibility
          else if (routeData && routeData['urls'] && Array.isArray(routeData['urls'])) {
            routeData['urls'].forEach((item: any) => {
              breadcrumbs.push({
                label: item.title || item.label,
                route: item.url || item.route,
                icon: item.icon
              });
            });
          }

          route = childRoute;
        }
      });
    } while (route);

    // Limit items if maxItems is set
    const max = this.maxItems();
    if (max > 0 && breadcrumbs.length > max) {
      const start = breadcrumbs.length - max;
      return [
        ...breadcrumbs.slice(0, 1),
        { label: '...', route: '' },
        ...breadcrumbs.slice(start)
      ];
    }

    return breadcrumbs;
  });

  navigate(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  isLast(index: number): boolean {
    return index === this.breadcrumbs().length - 1;
  }
}


