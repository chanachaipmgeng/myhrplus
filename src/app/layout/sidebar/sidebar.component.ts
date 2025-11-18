import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MenuService, MenuItem } from '../../core/services/menu.service';
import { AuthService } from '../../core/services/auth.service';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';

interface NestedMenuItem {
  text: string;
  id: string;
  iconCss?: string;
  route?: string;
  badge?: string;
  badgeColor?: string;
  child?: NestedMenuItem[];
}

interface MainModule {
  id: string;
  name: string;
  iconCss: string;
  menuItems: NestedMenuItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('listview') listview!: ListViewComponent;
  
  menuItems: MenuItem[] = [];
  mainModules: MainModule[] = [];
  selectedModule: string | null = null;
  selectedModuleData: MainModule | null = null;
  listViewFields: any = {
    id: 'id',
    text: 'text',
    iconCss: 'iconCss',
    child: 'child'
  };
  activeRoute: string = '';
  private destroy$ = new Subject<void>();

  currentUser: any = null;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService
  ) {
    // Subscribe to current user
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      // Reload menu when user changes
      if (user) {
        this.loadMenu();
      }
    });
  }

  ngOnInit(): void {
    // Get current user
    this.currentUser = this.authService.getCurrentUser();
    
    // Load menu from service
    this.loadMenu();

    // Track active route
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: any) => {
        this.activeRoute = event.url;
        // Update selected module based on current route
        this.updateSelectedModuleFromRoute();
      });
  }

  private loadMenu(): void {
    this.menuService.loadMenu().subscribe(menu => {
      // Menu is already filtered by permissions in MenuService
      this.menuItems = menu;
      this.groupMenuByModule();
      // Auto-select first module if available
      if (this.mainModules.length > 0 && !this.selectedModule) {
        this.selectModule(this.mainModules[0].id);
      }
    });
  }

  private groupMenuByModule(): void {
    // Group menu items by module
    const moduleMap = new Map<string, MainModule>();

    this.menuItems.forEach(item => {
      const moduleCode = this.getModuleCodeFromRoute(item.route || item.path || '');
      const moduleId = moduleCode || 'other';

      if (!moduleMap.has(moduleId)) {
        moduleMap.set(moduleId, {
          id: moduleId,
          name: this.getModuleName(moduleCode),
          iconCss: this.getModuleIcon(moduleCode),
          menuItems: []
        });
      }

      const module = moduleMap.get(moduleId)!;
      const menuItem: NestedMenuItem = {
        text: item.edesc || item.name || '',
        id: item.route || `menu-${moduleId}-${module.menuItems.length}`,
        iconCss: this.getIconClass(item.icon || 'folder'),
        route: item.route
      };

      // Add children if exists
      if (this.hasChildren(item) && item.children) {
        menuItem.child = item.children.map((child, childIndex) => ({
          text: child.edesc || child.name || '',
          id: child.route || `child-${moduleId}-${module.menuItems.length}-${childIndex}`,
          iconCss: this.getIconClass(child.icon || 'folder'),
          route: child.route
        }));
      }

      module.menuItems.push(menuItem);
    });

    this.mainModules = Array.from(moduleMap.values());
  }

  private getModuleCodeFromRoute(route: string): string {
    if (!route) return 'other';
    
    // Extract module code from route
    // Examples: /dashboard -> dashboard, /ta/leave -> ta, /personal/profile -> personal
    const match = route.match(/\/([^\/]+)/);
    return match ? match[1] : 'other';
  }

  private getModuleName(moduleCode: string | null): string {
    const moduleNames: { [key: string]: string } = {
      'dashboard': 'Overview',
      'home': 'Overview',
      'ta': 'Time Attendance',
      'personal': 'Personal',
      'payroll': 'Payroll',
      'training': 'Training',
      'welfare': 'Welfare',
      'recruit': 'Recruitment',
      'empview': 'Employee View',
      'other': 'Other'
    };
    return moduleNames[moduleCode || 'other'] || moduleCode || 'Other';
  }

  private getModuleIcon(moduleCode: string | null): string {
    const moduleIcons: { [key: string]: string } = {
      'dashboard': 'e-icons e-home',
      'home': 'e-icons e-home',
      'ta': 'e-icons e-clock',
      'personal': 'e-icons e-user',
      'payroll': 'e-icons e-briefcase',
      'training': 'e-icons e-book',
      'welfare': 'e-icons e-favorite',
      'recruit': 'e-icons e-people',
      'empview': 'e-icons e-folder',
      'other': 'e-icons e-folder'
    };
    return moduleIcons[moduleCode || 'other'] || 'e-icons e-folder';
  }

  selectModule(moduleId: string): void {
    this.selectedModule = moduleId;
    this.selectedModuleData = this.mainModules.find(m => m.id === moduleId) || null;
  }

  private updateSelectedModuleFromRoute(): void {
    if (!this.activeRoute) return;
    
    const moduleCode = this.getModuleCodeFromRoute(this.activeRoute);
    if (moduleCode && moduleCode !== this.selectedModule) {
      const module = this.mainModules.find(m => m.id === moduleCode);
      if (module) {
        this.selectModule(moduleCode);
      }
    }
  }

  private getIconClass(iconName: string): string {
    // Map icon names to Syncfusion icon classes
    const iconMap: { [key: string]: string } = {
      'menu': 'e-icons e-menu',
      'home': 'e-icons e-home',
      'dashboard': 'e-icons e-dashboard',
      'folder': 'e-icons e-folder',
      'settings': 'e-icons e-settings',
      'user': 'e-icons e-user',
      'logout': 'e-icons e-logout',
      'business_center': 'e-icons e-folder',
      'work': 'e-icons e-briefcase',
      'event': 'e-icons e-calendar',
      'receipt': 'e-icons e-receipt',
      'access_time': 'e-icons e-clock',
      'person': 'e-icons e-user',
      'arrow_forward': 'e-icons e-arrow-right'
    };
    return iconMap[iconName.toLowerCase()] || 'e-icons e-folder';
  }

  onMenuItemSelect(args: any): void {
    if (args.item && args.item.route) {
      this.router.navigate([args.item.route]);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isActive(route: string): boolean {
    if (!route) return false;
    return this.activeRoute.startsWith(route);
  }

  hasChildren(item: MenuItem): boolean {
    return !!(item.children && item.children.length > 0);
  }

  navigate(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  toggleChildren(item: MenuItem): void {
    // Toggle children visibility if needed
    // This can be enhanced with expand/collapse functionality
  }
}
