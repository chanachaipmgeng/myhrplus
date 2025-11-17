import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface MenuItem {
  name: string;
  path: string;
  id: string;
  tdesc: string;
  edesc: string;
  classAuthen?: string;
  icon?: string;
  children?: MenuItem[];
  route?: string; // Angular route path
}

export interface MenuConfig {
  base_url: string;
  menu: MenuItem[];
  api: any[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuConfig: MenuConfig | null = null;
  private menuCache: MenuItem[] = [];

  constructor(private http: HttpClient) {}

  loadMenu(): Observable<MenuItem[]> {
    if (this.menuCache.length > 0) {
      return of(this.menuCache);
    }

    // Try to load from JSON file first, then fallback to API
    return this.http.get<MenuConfig>('/assets/menu-config.json').pipe(
      map(config => {
        this.menuConfig = config;
        this.menuCache = this.transformMenuItems(config.menu || []);
        return this.menuCache;
      }),
      catchError(() => {
        // Fallback to API
        return this.http.get<MenuConfig>(`${environment.apiBaseUrl}${environment.apiEndpoints.unsecure}/menu`).pipe(
          map(config => {
            this.menuConfig = config;
            this.menuCache = this.transformMenuItems(config.menu || []);
            return this.menuCache;
          }),
          catchError(() => {
            // Return default menu if both fail
            return of(this.getDefaultMenu());
          })
        );
      })
    );
  }

  getMenu(): MenuItem[] {
    return this.menuCache.length > 0 ? this.menuCache : this.getDefaultMenu();
  }

  private transformMenuItems(items: MenuItem[]): MenuItem[] {
    return items.map(item => {
      const transformed: MenuItem = {
        ...item,
        route: this.convertJspPathToRoute(item.path),
        icon: this.getIconForMenu(item.name, item.id)
      };

      if (item.children) {
        transformed.children = this.transformMenuItems(item.children);
      }

      return transformed;
    });
  }

  private convertJspPathToRoute(jspPath: string): string {
    // Convert JSP paths to Angular routes
    // Example: /hr/PERSONAL/PWF001.jsp -> /personal/workflow/2001
    // Example: /hr/TA/TAU_CSCWF_001.jsp -> /ta/leave
    
    if (!jspPath) return '';

    // Remove /hr prefix and .jsp extension
    let route = jspPath.replace('/hr/', '').replace('.jsp', '');

    // Map common paths
    if (route.includes('PERSONAL/PWF001')) return '/personal/workflow/certificate';
    if (route.includes('PERSONAL/PWF014')) return '/personal/workflow/update';
    if (route.includes('TA/TAU_CSCWF_001')) return '/ta/leave';
    if (route.includes('TA/TAU_CSCWF_005')) return '/ta/time-edit';
    if (route.includes('TA/TAU_CSCWF_007')) return '/ta/shift-change';
    if (route.includes('TA/TAU_CSCWF_009')) return '/ta/exchange-shift';
    if (route.includes('TA/TAU_CSCWF_021')) return '/ta/overtime';
    if (route.includes('TRAINING/TRAWF_004')) return '/training/external';
    if (route.includes('TRAINING/TRAWF_009')) return '/training/internal';
    if (route.includes('WELFARE/WELWF001')) return '/welfare/request';

    // Generic conversion
    route = route.toLowerCase().replace(/\//g, '/');
    return `/${route}`;
  }

  private getIconForMenu(name: string, id: string): string {
    const iconMap: { [key: string]: string } = {
      '2001': 'description', // Certificate
      '2014': 'edit', // Update Employee
      '8001': 'event', // Leave
      '8005': 'schedule', // Edit Time
      '8007': 'swap_horiz', // Shift Change
      '8009': 'swap_calls', // Exchange Shift
      '8021': 'access_time', // Overtime
      '7004': 'school', // External Training
      '7009': 'book', // Internal Training
      '3001': 'favorite', // Welfare
      '8013': 'cancel' // Cancellation
    };

    return iconMap[id] || 'folder';
  }

  private getDefaultMenu(): MenuItem[] {
    return [
      {
        name: 'Dashboard',
        path: '/dashboard',
        id: 'dashboard',
        tdesc: 'แดชบอร์ด',
        edesc: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard'
      },
      {
        name: 'Personal',
        path: '/personal',
        id: 'personal',
        tdesc: 'ข้อมูลส่วนบุคคล',
        edesc: 'Personal',
        icon: 'person',
        route: '/personal',
        children: [
          {
            name: 'Profile',
            path: '/personal/profile',
            id: 'personal-profile',
            tdesc: 'ข้อมูลส่วนตัว',
            edesc: 'Profile',
            icon: 'person',
            route: '/personal/profile'
          },
          {
            name: 'Documents',
            path: '/personal/documents',
            id: 'personal-documents',
            tdesc: 'เอกสาร',
            edesc: 'Documents',
            icon: 'folder',
            route: '/personal/documents'
          }
        ]
      },
      {
        name: 'Time Attendance',
        path: '/ta',
        id: 'ta',
        tdesc: 'ลงเวลา',
        edesc: 'Time Attendance',
        icon: 'access_time',
        route: '/ta'
      },
      {
        name: 'Payroll',
        path: '/payroll',
        id: 'payroll',
        tdesc: 'เงินเดือน',
        edesc: 'Payroll',
        icon: 'account_balance_wallet',
        route: '/payroll'
      }
    ];
  }

  clearCache(): void {
    this.menuCache = [];
    this.menuConfig = null;
  }
}

