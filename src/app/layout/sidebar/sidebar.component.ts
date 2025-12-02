import { Component, OnInit, OnDestroy, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuService, MenuItem } from '../../core/services/menu.service';
import { AuthService, User } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { MenuContextService } from '../../core/services/menu-context.service';
import { MenuDataService } from '../../core/services/menu-data.service';
import { MenuContext, MenuGroup } from '../../core/models/menu.model';
import {
  NAVIGATION_ITEMS,
  NavigationItem,
  NavigationChild,
  getNavigationItemsByRoles
} from '../../core/constants/navigation.constant';
import { environment } from '../../../environments/environment';
import { MenuItemComponent } from '../../shared/components/menu-item/menu-item.component';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { ContextSwitcherComponent } from '../../shared/components/context-switcher/context-switcher.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { NestedMenuAccordionComponent } from '../../shared/components/nested-menu-accordion/nested-menu-accordion.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('listview') listview!: ListViewComponent;
  @ViewChild('userMenuContainer', { static: false }) userMenuContainer!: ElementRef;

  menuItems: MenuItem[] = [];
  mainModules: MainModule[] = []; // Legacy - keep for backward compatibility
  navigationItems: NavigationItem[] = []; // New navigation structure (Level 1)
  level2Items: NavigationChild[] = []; // Level 2 items for Rail (Left Icon Bar) - all Level 2 items from all Level 1
  allLevel2Items: NavigationChild[] = []; // All Level 2 items from all navigation items (for direct display in Rail)
  selectedModule: string | null = null;
  selectedModuleData: MainModule | null = null;
  selectedNavigationItem: NavigationItem | null = null; // Selected Level 1 item (ESS, Admin, etc.)
  selectedLevel2Item: NavigationChild | null = null; // Selected Level 2 item
  selectedLevel3Item: NavigationChild | null = null; // Selected Level 3 item
  selectedLevel4Item: NavigationChild | null = null; // Selected Level 4 item
  parentNavigationItem: NavigationItem | null = null; // Parent of selected Level 2 item

  // Expanded items tracking for accordion
  expandedLevel3Items: Set<string> = new Set();

  // Cached navigation children to prevent infinite loops
  private _cachedNavigationChildren: NavigationChild[] = [];
  private _cachedNavigationChildrenKey: string = '';

  // Public property for template use (computed from getNavigationChildren)
  get navigationChildren(): NavigationChild[] {
    return this.getNavigationChildren();
  }
  listViewFields: any = {
    id: 'id',
    text: 'text',
    iconCss: 'iconCss',
    child: 'child',
    badge: 'badge',
    badgeColor: 'badgeColor',
    route: 'route'
  };
  activeRoute: string = '';
  private destroy$ = new Subject<void>();
  isDarkMode: boolean = false;

  currentUser: any = null;

  // Search functionality
  searchQuery: string = '';
  filteredMenuItems: NestedMenuItem[] = [];
  isLoading: boolean = false;

  // User menu
  showUserMenu: boolean = false;
  avatarImageLoaded: boolean = false;

  // Context switching
  currentContext: MenuContext = 'personal';
  menuGroups: MenuGroup[] = [];
  displayMenuItems: NestedMenuItem[] = [];

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService,
    public themeService: ThemeService,
    private menuContextService: MenuContextService,
    private menuDataService: MenuDataService
  ) {
    // Subscribe to current user
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      // Reload menu when user changes
      if (user) {
        this.loadMenu();
        this.loadNavigationItems();
      } else {
        this.navigationItems = [];
        this.selectedNavigationItem = null;
      }
    });
  }

  ngOnInit(): void {
    // Get current user
    this.currentUser = this.authService.getCurrentUser();

    // Mock user data for testing if no user exists (development mode only)
    if (!this.currentUser && !environment.production) {
      this.currentUser = this.getMockUser();
    }

    // Subscribe to theme changes
    this.themeService.isDarkMode$.pipe(takeUntil(this.destroy$)).subscribe(isDark => {
      this.isDarkMode = isDark;
    });
    this.isDarkMode = this.themeService.isDarkMode();

    // Subscribe to context changes
    this.menuContextService.getCurrentContext()
      .pipe(
        takeUntil(this.destroy$),
        switchMap(context => {
          this.currentContext = context;
          return this.menuDataService.getMenuGroups(context);
        })
      )
      .subscribe(groups => {
        this.menuGroups = groups;
        this.buildDisplayMenuItems();
      });

    // Load menu from service (legacy)
    this.loadMenu();

    // Load new navigation structure
    this.loadNavigationItems();

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
    this.isLoading = true;
    this.menuService.loadMenu().subscribe({
      next: (menu) => {
        // Menu is already filtered by permissions in MenuService
        this.menuItems = menu;
        this.groupMenuByModule();
        // Auto-select first module if available
        if (this.mainModules.length > 0 && !this.selectedModule) {
          this.selectModule(this.mainModules[0].id);
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  /**
   * Load navigation items based on user roles
   * Default selects ESS and shows its Level 2 items
   */
  private loadNavigationItems(): void {
    if (!this.currentUser) {
      this.navigationItems = [];
      this.level2Items = [];
      this.allLevel2Items = [];
      console.log('[Sidebar] No current user, clearing navigation items');
      return;
    }

    // Get user roles
    const userRoles = this.getUserRoles();
    console.log('[Sidebar] Current user roles:', userRoles);

    // Filter navigation items by roles (Level 1: Home, ESS, Admin)
    this.navigationItems = getNavigationItemsByRoles(userRoles);
    console.log('[Sidebar] Loaded navigation items (Level 1):', this.navigationItems.map(item => ({
      id: item.id,
      label: item.label,
      icon: item.icon,
      childrenCount: item.children?.length || 0
    })));

    // Auto-select ESS (Empview) as default if available
    if (this.navigationItems.length > 0 && !this.selectedNavigationItem) {
      const essItem = this.navigationItems.find(item => item.id === 'ess');
      if (essItem) {
        // Default to ESS (Empview)
        console.log('[Sidebar] Auto-selecting ESS as default');
        this.selectNavigationItem('ess');
      } else {
        // Fallback to first available item
        console.log('[Sidebar] Auto-selecting first available item:', this.navigationItems[0].id);
        this.selectNavigationItem(this.navigationItems[0].id);
      }
    }
  }

  /**
   * Load Level 2 items for selected Level 1 item
   * Level 2 items are displayed in Rail for the selected Level 1
   */
  private loadLevel2Items(): void {
    if (!this.selectedNavigationItem || !this.selectedNavigationItem.children) {
      this.level2Items = [];
      console.log('[Sidebar] No Level 2 items available for:', this.selectedNavigationItem?.id);
      return;
    }

    // Get Level 2 items from selected Level 1 item
    this.level2Items = [...this.selectedNavigationItem.children];
    console.log('[Sidebar] Loaded Level 2 items for', this.selectedNavigationItem.id + ':', this.level2Items.map(item => ({
      label: item.label,
      icon: item.icon,
      route: item.route,
      childrenCount: item.children?.length || 0
    })));

    // Clear Level 2 selection when switching Level 1
    this.selectedLevel2Item = null;
    console.log('[Sidebar] Level 2 items will be shown in Rail for', this.selectedNavigationItem.id);
  }

  /**
   * Find parent navigation item for a Level 2 item
   * Public method for template use
   */
  findParentNavigationItem(level2Item: NavigationChild): NavigationItem | null {
    // Check if level2Item has parentId stored
    const parentId = (level2Item as any).parentId;
    if (parentId) {
      const parent = this.navigationItems.find(item => item.id === parentId);
      if (parent) {
        return parent;
      }
    }

    // Fallback: search by matching children
    for (const navItem of this.navigationItems) {
      if (navItem.children && navItem.children.some(child => child === level2Item || child.label === level2Item.label)) {
        return navItem;
      }
    }
    return null;
  }

  /**
   * Get user roles array
   */
  private getUserRoles(): string[] {
    if (!this.currentUser) {
      // Return default roles for testing
      return ['user'];
    }

    // Try different role properties
    const roles: string[] = [];

    if (this.currentUser.roles && Array.isArray(this.currentUser.roles)) {
      roles.push(...this.currentUser.roles);
    }

    if (this.currentUser.user_role) {
      roles.push(this.currentUser.user_role);
    }

    // Check if user is admin (you may need to adjust this logic based on your auth system)
    if (this.currentUser.user_level === 'admin' ||
        this.currentUser.role_level === 'admin' ||
        this.currentUser.emp_position === 'admin' ||
        roles.some(r => r.toLowerCase() === 'admin')) {
      roles.push('admin');
    }

    // If user has 'All' role, also add 'user' and 'admin' for compatibility
    if (roles.some(r => r.toLowerCase() === 'all')) {
      roles.push('user', 'admin');
    }

    // Default to 'user' if no roles found
    if (roles.length === 0) {
      roles.push('user');
    }

    const uniqueRoles = [...new Set(roles)]; // Remove duplicates
    console.log('[Sidebar] getUserRoles: Raw roles from user =', roles, '-> Unique =', uniqueRoles);
    return uniqueRoles;
  }

  /**
   * Select Level 1 item (Rail icon clicked - Home, ESS, Admin)
   */
  selectNavigationItem(itemId: string): void {
    console.log('[Sidebar] Selecting Level 1 item:', itemId);

    // Find the navigation item (Level 1)
    const navItem = this.navigationItems.find(item => item.id === itemId) || null;
    if (!navItem) {
      console.warn('[Sidebar] Navigation item not found:', itemId);
      return;
    }

    // Set selected Level 1 item
    this.selectedNavigationItem = navItem;
    this.selectedModule = itemId;
    console.log('[Sidebar] Selected Level 1:', {
      id: navItem.id,
      label: navItem.label,
      childrenCount: navItem.children?.length || 0
    });

    // Clear cache when switching items
    this._cachedNavigationChildren = [];
    this._cachedNavigationChildrenKey = '';

    // Load Level 2 items for this Level 1 item
    this.loadLevel2Items();

    // Clear search when switching items
    this.searchQuery = '';
  }

  /**
   * Select Level 2 item (Rail icon clicked - direct selection from Rail)
   */
  selectLevel2Item(level2Item: NavigationChild, parentNavItem: NavigationItem | null): void {
    // Find parent if not provided
    if (!parentNavItem) {
      parentNavItem = this.findParentNavigationItem(level2Item);
    }

    console.log('[Sidebar] Selecting Level 2 item:', {
      label: level2Item.label,
      route: level2Item.route,
      childrenCount: level2Item.children?.length || 0,
      parentId: parentNavItem?.id
    });

    // Set selected Level 2 item
    this.selectedLevel2Item = level2Item;

    // Set parent navigation item and selected navigation item
    this.parentNavigationItem = parentNavItem;
    if (parentNavItem) {
      this.selectedNavigationItem = parentNavItem;
      this.selectedModule = parentNavItem.id;
    }

    // Clear Level 3-4 selections when switching Level 2
    this.selectedLevel3Item = null;
    this.selectedLevel4Item = null;
    this.expandedLevel3Items.clear();

    // Clear cache when switching items
    this._cachedNavigationChildren = [];
    this._cachedNavigationChildrenKey = '';

    // Clear search when switching items
    this.searchQuery = '';
  }

  /**
   * Get navigation children for recursive menu component
   * Returns Level 3 items when Level 2 is selected
   * Uses caching to prevent infinite loops from change detection
   */
  getNavigationChildren(): NavigationChild[] {
    // Create cache key based on current state
    const cacheKey = `${this.selectedLevel2Item?.label || 'none'}`;

    // Return cached result if key matches
    if (this._cachedNavigationChildrenKey === cacheKey && this._cachedNavigationChildren.length >= 0) {
      return this._cachedNavigationChildren;
    }

    let result: NavigationChild[] = [];

    // If Level 2 is selected, return Level 3 items (children of Level 2)
    if (this.selectedLevel2Item && this.selectedLevel2Item.children) {
      result = [...this.selectedLevel2Item.children]; // Create new array to avoid reference issues
      console.log('[Sidebar] getNavigationChildren (Level 3):', result.map(item => ({
        label: item.label,
        route: item.route,
        childrenCount: item.children?.length || 0
      })));
    }
    else {
      result = [];
      console.log('[Sidebar] getNavigationChildren (no Level 2 selected or no children): []');
    }

    // Cache result
    this._cachedNavigationChildren = result;
    this._cachedNavigationChildrenKey = cacheKey;

    return result;
  }

  /**
   * Get breadcrumb path for current navigation
   */
  getBreadcrumbPath(): Array<{ label: string; route?: string; level: number }> {
    const path: Array<{ label: string; route?: string; level: number }> = [];

    // Level 1
    if (this.selectedNavigationItem) {
      path.push({
        label: this.selectedNavigationItem.label,
        level: 1
      });
    }

    // Level 2 (only for Admin, not for ESS)
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item) {
      path.push({
        label: this.selectedLevel2Item.label,
        route: this.selectedLevel2Item.route,
        level: 2
      });
    }

    // Level 3 (if active)
    if (this.selectedLevel3Item) {
      path.push({
        label: this.selectedLevel3Item.label,
        route: this.selectedLevel3Item.route,
        level: 3
      });
    }

    // Level 4 (if active)
    if (this.selectedLevel4Item) {
      path.push({
        label: this.selectedLevel4Item.label,
        route: this.selectedLevel4Item.route,
        level: 4
      });
    }

    return path;
  }

  /**
   * Navigate to breadcrumb item
   */
  navigateToBreadcrumb(item: { label: string; route?: string; level: number }): void {
    if (!item.route) {
      return;
    }

    // Reset selections based on level
    if (item.level === 2) {
      this.selectedLevel3Item = null;
      this.selectedLevel4Item = null;
    } else if (item.level === 3) {
      this.selectedLevel4Item = null;
    }

    // Navigate to route
    this.navigateToRoute(item.route);
  }

  /**
   * Handle accordion item click
   */
  onAccordionItemClick(item: NavigationChild): void {
    console.log('[Sidebar] Accordion item clicked:', {
      label: item.label,
      route: item.route,
      level: this.selectedNavigationItem?.id === 'ess' ? 2 : 3
    });

    if (item.route) {
      // Navigate to route
      this.navigateToRoute(item.route);

      // Update selected items based on route depth
      this.updateSelectedItemsFromRoute(item.route);
    }
  }

  /**
   * Handle accordion toggle expand
   */
  onAccordionToggleExpand(event: { item: NavigationChild; expanded: boolean }): void {
    // Expanded state is already managed by expandedLevel3Items Set
    // This method can be used for additional logic if needed
  }

  /**
   * Update selected items based on route
   * For ESS: Find in Level 2 children (Level 3-4)
   * For Admin: Find in Level 3 children (Level 4)
   */
  private updateSelectedItemsFromRoute(route: string): void {
    console.log('[Sidebar] updateSelectedItemsFromRoute: Searching for route =', route);

    // For ESS: Search in Level 2 items (selectedNavigationItem.children)
    if (this.selectedNavigationItem?.id === 'ess' && this.selectedNavigationItem.children) {
      console.log('[Sidebar] Searching in ESS Level 2 items');
      for (const level2Item of this.selectedNavigationItem.children) {
        if (level2Item.route === route) {
          // Direct Level 2 match
          console.log('[Sidebar] Found ESS Level 2 match:', level2Item.label);
          this.selectedLevel2Item = null; // ESS doesn't use Level 2 selection
          this.selectedLevel3Item = null;
          this.selectedLevel4Item = null;
          return;
        }

        // Check Level 3
        if (level2Item.children) {
          for (const level3Item of level2Item.children) {
            if (level3Item.route === route) {
              console.log('[Sidebar] Found ESS Level 3 match:', {
                level2Label: level2Item.label,
                level3Label: level3Item.label
              });
              this.selectedLevel2Item = null; // ESS doesn't use Level 2 selection
              this.selectedLevel3Item = level3Item;
              this.selectedLevel4Item = null;
              return;
            }

            // Check Level 4
            if (level3Item.children) {
              for (const level4Item of level3Item.children) {
                if (level4Item.route === route) {
                  console.log('[Sidebar] Found ESS Level 4 match:', {
                    level2Label: level2Item.label,
                    level3Label: level3Item.label,
                    level4Label: level4Item.label
                  });
                  this.selectedLevel2Item = null; // ESS doesn't use Level 2 selection
                  this.selectedLevel3Item = level3Item;
                  this.selectedLevel4Item = level4Item;
                  return;
                }
              }
            }
          }
        }
      }
      console.log('[Sidebar] No ESS match found for route:', route);
    }

    // For Admin: Search in Level 3 items (selectedLevel2Item.children)
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item && this.selectedLevel2Item.children) {
      console.log('[Sidebar] Searching in Admin Level 3 items');
      for (const level3Item of this.selectedLevel2Item.children) {
        if (level3Item.route === route) {
          console.log('[Sidebar] Found Admin Level 3 match:', level3Item.label);
          this.selectedLevel3Item = level3Item;
          this.selectedLevel4Item = null;
          return;
        }

        // Check Level 4
        if (level3Item.children) {
          for (const level4Item of level3Item.children) {
            if (level4Item.route === route) {
              console.log('[Sidebar] Found Admin Level 4 match:', {
                level3Label: level3Item.label,
                level4Label: level4Item.label
              });
              this.selectedLevel3Item = level3Item;
              this.selectedLevel4Item = level4Item;
              return;
            }
          }
        }
      }
      console.log('[Sidebar] No Admin match found for route:', route);
    }
  }

  /**
   * Go back to Level 2 (from Level 3+)
   * For ESS: Clear Level 3-4 selections (show Level 2 items)
   * For Admin: Clear Level 3-4 selections (show Level 3 items of selected Level 2)
   */
  goBackToLevel2(): void {
    this.selectedLevel3Item = null;
    this.selectedLevel4Item = null;
    this.expandedLevel3Items.clear();
    this.searchQuery = '';
  }

  private groupMenuByModule(): void {
    // Initialize predefined modules - Ordered as specified
    const predefinedModules: MainModule[] = [
      // 1. Home - หน้า home ของ home module
      {
        id: 'home',
        name: 'Home',
        iconCss: 'e-icons e-home',
        menuItems: [
          {
            text: 'หน้าแรก',
            id: 'home-dashboard',
            iconCss: 'e-icons e-home',
            route: '/home'
          }
        ]
      },
      // 2. Empview - Employee Self Service (ดึงจาก empview-routing.module.ts)
      // {
      //   id: 'empview',
      //   name: 'Employee Self Service',
      //   iconCss: 'e-icons e-user',
      //   menuItems: this.getEmpviewMenuItems()
      // },
      // // 3. Workflow - การขอเอกสาร
      // {
      //   id: 'workflow',
      //   name: 'Workflow',
      //   iconCss: 'e-icons e-flow',
      //   menuItems: this.getWorkflowMenuItems()
      // },
      // 4. Company Management (สำหรับ HR)
      {
        id: 'company',
        name: 'Company Management',
        iconCss: 'e-icons e-briefcase',
        menuItems: this.getCompanyMenuItems()
      },
      // 5. Personal Management (สำหรับ HR)
      {
        id: 'personal',
        name: 'Personal Management',
        iconCss: 'e-icons e-user',
        menuItems: this.getPersonalMenuItems()
      },
      // 6. Time Management (สำหรับ HR)
      {
        id: 'ta',
        name: 'Time Management',
        iconCss: 'e-icons e-clock',
        menuItems: this.getTaMenuItems()
      },
      // 7. Payroll Management (สำหรับ HR)
      {
        id: 'payroll',
        name: 'Payroll Management',
        iconCss: 'e-icons e-money',
        menuItems: this.getPayrollMenuItems()
      },
      // 8. Welfare Management (สำหรับ HR)
      {
        id: 'welfare',
        name: 'Welfare Management',
        iconCss: 'e-icons e-favorite',
        menuItems: this.getWelfareMenuItems()
      },
      // 9. Training Management (สำหรับ HR)
      {
        id: 'training',
        name: 'Training Management',
        iconCss: 'e-icons e-book',
        menuItems: this.getTrainingMenuItems()
      },
      // 10. Recruit Management (สำหรับ HR)
      {
        id: 'recruit',
        name: 'Recruit Management',
        iconCss: 'e-icons e-people',
        menuItems: this.getRecruitMenuItems()
      },
      // 11. Appraisal Management (สำหรับ HR)
      {
        id: 'appraisal',
        name: 'Appraisal Management',
        iconCss: 'e-icons e-chart',
        menuItems: this.getAppraisalMenuItems()
      },
      // 12. Setting Management (สำหรับ HR)
      {
        id: 'setting',
        name: 'Setting Management',
        iconCss: 'e-icons e-settings',
        menuItems: this.getSettingMenuItems()
      }
    ];

    // Create module map - preserve existing menuItems from predefined modules
    const moduleMap = new Map<string, MainModule>();
    predefinedModules.forEach(module => {
      moduleMap.set(module.id, { ...module, menuItems: [...module.menuItems] });
    });

    // Group menu items by module from MenuService
    this.menuItems.forEach(item => {
      const moduleCode = this.getModuleCodeFromRoute(item.route || item.path || '');
      const moduleId = this.mapRouteToModuleId(moduleCode);

      if (moduleMap.has(moduleId)) {
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
      }
    });

    // Always show all predefined modules (ordered) with merged menuItems
    this.mainModules = Array.from(moduleMap.values());

    // Initialize filtered menu items if module is already selected
    if (this.selectedModuleData) {
      this.filteredMenuItems = this.selectedModuleData.menuItems;
    }
  }

  // Get menu items from empview routing module
  // Note: empview module is lazy loaded at /dashboard, so routes should be /dashboard/...
  private getEmpviewMenuItems(): NestedMenuItem[] {
    const menuItems: NestedMenuItem[] = [
      {
        text: 'Dashboard',
        id: 'empview-dashboard',
        iconCss: 'e-icons e-dashboard',
        route: '/dashboard'
      },
      {
        text: 'Employee Profile',
        id: 'empview-profile',
        iconCss: 'e-icons e-user',
        route: '/dashboard/employee-profile'
      },
      {
        text: 'Employee Work Information',
        id: 'empview-work-info',
        iconCss: 'e-icons e-briefcase',
        route: '/dashboard/employee-work-information'
      },
      {
        text: 'Working Hour Data',
        id: 'empview-timestamp',
        iconCss: 'e-icons e-clock',
        route: '/dashboard/employee-timestamp'
      },
      {
        text: 'Punch In/Out Checking',
        id: 'empview-time-warning',
        iconCss: 'e-icons e-warning',
        route: '/dashboard/employee-time-warning'
      },
      {
        text: 'Raw Data',
        id: 'empview-attendance',
        iconCss: 'e-icons e-list',
        route: '/dashboard/employee-attendance'
      },
      {
        text: 'Privilege Leave',
        id: 'empview-leaverole',
        iconCss: 'e-icons e-calendar',
        route: '/dashboard/employee-leaverole'
      },
      {
        text: 'OT Statistic',
        id: 'empview-otstatistic',
        iconCss: 'e-icons e-chart',
        route: '/dashboard/employee-otstatistic'
      },
      {
        text: 'Leave Statistic',
        id: 'empview-leavestatistic',
        iconCss: 'e-icons e-chart',
        route: '/dashboard/employee-leavestatistic'
      },
      {
        text: 'Change Requisition',
        id: 'empview-edittimestatistic',
        iconCss: 'e-icons e-edit',
        route: '/dashboard/employee-edittimestatistic'
      },
      {
        text: 'Working History Data',
        id: 'empview-working-history',
        iconCss: 'e-icons e-history',
        route: '/dashboard/working-history-data'
      },
      {
        text: 'e-Payslip',
        id: 'empview-payslip',
        iconCss: 'e-icons e-receipt',
        route: '/dashboard/employee-payslip'
      },
      {
        text: '50Twi',
        id: 'empview-twi50',
        iconCss: 'e-icons e-file',
        route: '/dashboard/employee-twi50'
      },
      {
        text: 'PND91',
        id: 'empview-pnd91',
        iconCss: 'e-icons e-file',
        route: '/dashboard/employee-pnd91'
      }
    ];
    return menuItems;
  }

  // Get menu items from workflow routing module
  private getWorkflowMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'workflow-home',
        iconCss: 'e-icons e-home',
        route: '/workflow/home'
      }
    ];
  }

  // Get menu items from TA routing module
  private getTaMenuItems(): NestedMenuItem[] {
    // ดึงเมนูจาก routing module จริงๆ
    // ตอนนี้มีแค่ home route
    return [
      {
        text: 'หน้าแรก',
        id: 'ta-home',
        iconCss: 'e-icons e-home',
        route: '/ta/home'
      }
    ];
  }

  // Get menu items from other modules
  private getPayrollMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'payroll-home',
        iconCss: 'e-icons e-home',
        route: '/payroll/home'
      }
    ];
  }

  private getWelfareMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'welfare-home',
        iconCss: 'e-icons e-home',
        route: '/welfare/home'
      }
    ];
  }

  private getTrainingMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'training-home',
        iconCss: 'e-icons e-home',
        route: '/training/home'
      }
    ];
  }

  private getRecruitMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'recruit-home',
        iconCss: 'e-icons e-home',
        route: '/recruit/home'
      }
    ];
  }

  private getAppraisalMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'appraisal-home',
        iconCss: 'e-icons e-home',
        route: '/appraisal/home'
      }
    ];
  }

  private getPersonalMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'personal-home',
        iconCss: 'e-icons e-home',
        route: '/personal/home'
      }
    ];
  }

  private getCompanyMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'company-home',
        iconCss: 'e-icons e-home',
        route: '/company/home'
      }
    ];
  }

  private getSettingMenuItems(): NestedMenuItem[] {
    return [
      {
        text: 'หน้าแรก',
        id: 'setting-home',
        iconCss: 'e-icons e-home',
        route: '/setting/home'
      }
    ];
  }

  private mapRouteToModuleId(moduleCode: string): string {
    // Map route module codes to predefined module IDs
    const routeToModuleMap: { [key: string]: string } = {
      'home': 'home',
      'dashboard': 'empview',
      'empview': 'empview',
      'employee': 'empview',
      'workflow': 'workflow',
      'company': 'company',
      'personal': 'personal',
      'ta': 'ta',
      'time': 'ta',
      'payroll': 'payroll',
      'welfare': 'welfare',
      'training': 'training',
      'recruit': 'recruit',
      'appraisal': 'appraisal',
      'setting': 'setting',
      'settings': 'setting'
    };
    return routeToModuleMap[moduleCode.toLowerCase()] || 'home';
  }

  private getModuleCodeFromRoute(route: string): string {
    if (!route) return 'other';

    // Extract module code from route
    // Examples: /dashboard -> dashboard, /ta/leave -> ta, /personal/profile -> personal
    const match = route.match(/\/([^\/]+)/);
    return match ? match[1] : 'other';
  }


  selectModule(moduleId: string): void {
    this.selectedModule = moduleId;
    this.selectedModuleData = this.mainModules.find(m => m.id === moduleId) || null;
    // Clear search when switching modules
    this.searchQuery = '';
    // Filter menu items after module is selected
    if (this.selectedModuleData && this.selectedModuleData.menuItems) {
      // Ensure menuItems is an array and all items have required properties
      this.filteredMenuItems = (this.selectedModuleData.menuItems || []).map(item => ({
        text: item.text || '',
        id: item.id || `menu-${Date.now()}-${Math.random()}`,
        iconCss: item.iconCss || 'e-icons e-folder',
        route: item.route || '',
        badge: item.badge,
        badgeColor: item.badgeColor,
        child: item.child ? item.child.map(child => ({
          text: child.text || '',
          id: child.id || `child-${Date.now()}-${Math.random()}`,
          iconCss: child.iconCss || 'e-icons e-folder',
          route: child.route || ''
        })) : undefined
      }));
      // Don't navigate here - let routerLink handle navigation
      // RouterLink will automatically navigate to the route
    } else {
      this.filteredMenuItems = [];
    }
  }

  getModuleHomeRoute(moduleId: string): string {
    const moduleHomeRoutes: { [key: string]: string } = {
      'home': '/portal',
      'ess': '/portal/self-service/time',
      'admin': '/portal/admin/employees',
      'empview': '/dashboard',
      'workflow': '/workflow/home',
      'company': '/company/home',
      'personal': '/personal/home',
      'ta': '/ta/home',
      'payroll': '/payroll/home',
      'welfare': '/welfare/home',
      'training': '/training/home',
      'recruit': '/recruit/home',
      'appraisal': '/appraisal/home',
      'setting': '/setting/home',
      'portal-home': '/portal'
    };

    return moduleHomeRoutes[moduleId] || '/portal';
  }

  private navigateToModuleHome(moduleId: string): void {
    const homeRoute = this.getModuleHomeRoute(moduleId);
    if (homeRoute) {
      this.router.navigate([homeRoute]).catch(() => {});
    }
  }

  onSearchChange(): void {
    this.filterMenuItems();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filterMenuItems();
  }

  /**
   * Get icon class from icon name
   */
  private getIconClass(iconName: string): string {
    if (!iconName) return 'e-icons e-folder';

    // Map icon names to Syncfusion icon classes
    const iconMap: { [key: string]: string } = {
      'access_time': 'e-icons e-clock',
      'description': 'e-icons e-file',
      'people': 'e-icons e-user',
      'business': 'e-icons e-briefcase',
      'person_check': 'e-icons e-user-check',
      'work': 'e-icons e-briefcase',
      'folder': 'e-icons e-folder',
      'attach_money': 'e-icons e-money',
      'menu': 'e-icons e-menu',
      'home': 'e-icons e-home',
      'dashboard': 'e-icons e-dashboard',
      'settings': 'e-icons e-settings',
      'user': 'e-icons e-user',
      'logout': 'e-icons e-logout',
      'event': 'e-icons e-calendar',
      'receipt': 'e-icons e-receipt',
      'person': 'e-icons e-user',
      'arrow_forward': 'e-icons e-arrow-right',
      'favorite': 'e-icons e-heart',
      'bar_chart': 'e-icons e-chart',
      'school': 'e-icons e-book',
      'person_add': 'e-icons e-user-plus',
      'assessment': 'e-icons e-chart-line',
      'shield-check': 'e-icons e-shield',
      'shield_check': 'e-icons e-shield',
      'warning': 'e-icons e-warning',
      'login': 'e-icons e-login'
    };
    return iconMap[iconName.toLowerCase()] || 'e-icons e-folder';
  }

  /**
   * Build display menu items from menu groups (Level 2 only, Level 3 shown as tabs)
   */
  private buildDisplayMenuItems(): void {
    this.displayMenuItems = [];

    this.menuGroups.forEach(group => {
      group.items.forEach(item => {
        // Only add Level 2 items (children will be shown as tabs in content)
        const menuItem: NestedMenuItem = {
          text: item.name,
          id: `menu-${group.groupName}-${item.name}`,
          iconCss: this.getIconClass(item.icon),
          route: item.route || item.url || ''
        };

        // Note: We don't add children here - they'll be shown as tabs in content area
        this.displayMenuItems.push(menuItem);
      });
    });

    // Update filtered items
    this.filterMenuItems();
  }

  /**
   * Filter menu items based on search query
   */
  private filterMenuItems(): void {
    if (!this.searchQuery || this.searchQuery.trim() === '') {
      this.filteredMenuItems = [...this.displayMenuItems];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredMenuItems = this.displayMenuItems.filter(item =>
      item.text?.toLowerCase().includes(query)
    );
  }

  navigateToHome(): void {
    this.router.navigate(['/portal']).catch(() => {
      this.router.navigate(['/']).catch(() => {});
    });
  }

  // User Avatar Methods
  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  getInitials(): string {
    if (!this.currentUser) return 'U';

    const name = this.currentUser.fullname || this.currentUser.name || this.currentUser.username || '';
    if (!name) return 'U';

    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      // First letter of first name + first letter of last name
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts.length === 1) {
      // First two letters of name
      return name.substring(0, 2).toUpperCase();
    }

    return 'U';
  }

  getAvatarUrl(): string | null {
    if (!this.currentUser) return null;
    // Check if user has avatar/photo property
    return this.currentUser.avatar || this.currentUser.photo || this.currentUser.profileImage || null;
  }

  getAvatarColor(): string {
    if (!this.currentUser) return '#6366f1';

    const name = this.currentUser.fullname || this.currentUser.name || this.currentUser.username || 'User';
    // Generate consistent color based on name
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)'
    ];

    // Simple hash function to get consistent color
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  getUserDisplayName(): string {
    if (!this.currentUser) return 'ผู้ใช้';
    return this.currentUser.fullname || this.currentUser.name || this.currentUser.username || 'ผู้ใช้';
  }

  getUserRole(): string {
    if (!this.currentUser) return '';

    // Try different role properties
    if (this.currentUser.emp_position) {
      return this.currentUser.emp_position;
    }
    if (this.currentUser.job) {
      return this.currentUser.job;
    }
    if (this.currentUser.user_role) {
      return this.currentUser.user_role;
    }
    if (this.currentUser.roles && this.currentUser.roles.length > 0) {
      return this.currentUser.roles[0];
    }

    return '';
  }

  navigateToProfile(): void {
    this.showUserMenu = false;
    this.router.navigate(['/portal/self-service/profile']).catch(() => {
      this.router.navigate(['/portal']).catch(() => {});
    });
  }

  navigateToSettings(): void {
    this.showUserMenu = false;
    this.router.navigate(['/portal/admin/settings']).catch(() => {
      this.router.navigate(['/portal']).catch(() => {});
    });
  }

  logout(): void {
    this.showUserMenu = false;
    this.authService.logout();
  }

  onAvatarImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
      this.avatarImageLoaded = false;
    }
  }

  onAvatarImageLoad(): void {
    this.avatarImageLoaded = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.userMenuContainer && this.showUserMenu) {
      const clickedInside = this.userMenuContainer.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.showUserMenu = false;
      }
    }
  }

  private updateSelectedModuleFromRoute(): void {
    if (!this.activeRoute) {
      console.log('[Sidebar] updateSelectedModuleFromRoute: No active route');
      return;
    }

    console.log('[Sidebar] updateSelectedModuleFromRoute: Active route =', this.activeRoute);

    // Try to find matching navigation item first (including nested children up to 4 levels)
    for (const navItem of this.navigationItems) {
      if (!navItem.children) continue;

      for (const level2Item of navItem.children) {
        // Check Level 2 route
        if (level2Item.route && this.activeRoute.startsWith(level2Item.route)) {
          console.log('[Sidebar] Found Level 2 match:', {
            navItemId: navItem.id,
            level2Label: level2Item.label,
            route: level2Item.route
          });
          this.selectNavigationItem(navItem.id);
          this.selectLevel2Item(level2Item, navItem);
          this.updateSelectedItemsFromRoute(this.activeRoute);
          return;
        }

        // Check Level 3 routes
        if (level2Item.children) {
          for (const level3Item of level2Item.children) {
            if (level3Item.route && this.activeRoute.startsWith(level3Item.route)) {
              console.log('[Sidebar] Found Level 3 match:', {
                navItemId: navItem.id,
                level2Label: level2Item.label,
                level3Label: level3Item.label,
                route: level3Item.route
              });
              this.selectNavigationItem(navItem.id);
              this.selectLevel2Item(level2Item, navItem);
              this.updateSelectedItemsFromRoute(this.activeRoute);
              return;
            }

            // Check Level 4 routes
            if (level3Item.children) {
              for (const level4Item of level3Item.children) {
                if (level4Item.route && this.activeRoute.startsWith(level4Item.route)) {
                  console.log('[Sidebar] Found Level 4 match:', {
                    navItemId: navItem.id,
                    level2Label: level2Item.label,
                    level3Label: level3Item.label,
                    level4Label: level4Item.label,
                    route: level4Item.route
                  });
                  this.selectNavigationItem(navItem.id);
                  this.selectLevel2Item(level2Item, navItem);
                  this.updateSelectedItemsFromRoute(this.activeRoute);
                  return;
                }
              }
            }
          }
        }
      }
    }

    console.log('[Sidebar] No navigation match found for route:', this.activeRoute);

    // Fallback to legacy module selection
    const moduleCode = this.getModuleCodeFromRoute(this.activeRoute);
    const moduleId = this.mapRouteToModuleId(moduleCode);
    if (moduleId && moduleId !== this.selectedModule) {
      // Update selected module without navigating (routerLink already handled navigation)
      this.selectedModule = moduleId;
      this.selectedModuleData = this.mainModules.find(m => m.id === moduleId) || null;
      // Clear search when switching modules
      this.searchQuery = '';
      // Filter menu items after module is selected
      if (this.selectedModuleData && this.selectedModuleData.menuItems) {
        // Ensure menuItems is an array and all items have required properties
        this.filteredMenuItems = (this.selectedModuleData.menuItems || []).map(item => ({
          text: item.text || '',
          id: item.id || `menu-${Date.now()}-${Math.random()}`,
          iconCss: item.iconCss || 'e-icons e-folder',
          route: item.route || '',
          badge: item.badge,
          badgeColor: item.badgeColor,
          child: item.child ? item.child.map(child => ({
            text: child.text || '',
            id: child.id || `child-${Date.now()}-${Math.random()}`,
            iconCss: child.iconCss || 'e-icons e-folder',
            route: child.route || ''
          })) : undefined
        }));
      } else {
        this.filteredMenuItems = [];
      }
    }
  }

  onMenuItemSelect(args: any): void {
    if (!args) {
      return;
    }

    // Syncfusion ListView sends data in different formats:
    // - args.data (the selected item data with route) - MOST RELIABLE
    // - args.item (the selected item DOM element)
    // - args.text (the text of selected item)

    // Get route from args.data first (most reliable based on error log)
    let route = args.data?.route;

    // If still no route, try to find it in the filteredMenuItems by id or text
    if (!route) {
      const itemId = args.data?.id;
      const itemText = args.text || args.data?.text;

      if (itemId) {
        const menuItem = this.findMenuItemById(itemId);
        if (menuItem && menuItem.route) {
          route = menuItem.route;
        }
      } else if (itemText) {
        const menuItem = this.findMenuItemByText(itemText);
        if (menuItem && menuItem.route) {
          route = menuItem.route;
        }
      }
    }

    // Navigate to route if found
    if (route) {
      // Map legacy routes to new routes if needed
      const mappedRoute = this.mapLegacyRoute(route);
      this.navigateToRoute(mappedRoute);
    } else {
      // If no route found, check if it's a parent item with children (should expand instead)
      const hasChildren = args.data?.child && args.data.child.length > 0;
      if (hasChildren) {
        // This is a parent item, should expand/collapse instead of navigate
        // Syncfusion ListView handles this automatically, so we can ignore
        return;
      }

      // Log warning only if it's not a parent item
      console.warn('No route found for menu item:', {
        text: args.text || args.data?.text,
        id: args.data?.id,
        hasChildren: hasChildren,
        data: args.data
      });
    }
  }

  /**
   * Map legacy routes to new routes
   */
  private mapLegacyRoute(route: string): string {
    const routeMap: { [key: string]: string } = {
      '/home': '/portal',
      '/company/manage': '/portal/admin/company',
      '/company/home': '/portal/admin/company',
      '/personal/home': '/portal/admin/employees',
      '/ta/home': '/portal/admin/time',
      '/payroll/home': '/portal/admin/payroll',
      '/training/home': '/portal/admin/training',
      '/welfare/home': '/portal/admin/welfare',
      '/recruit/home': '/portal/admin/recruit',
      '/appraisal/home': '/portal/admin/appraisal',
      '/setting/home': '/portal/admin/settings',
      '/settings/home': '/portal/admin/settings'
    };

    return routeMap[route] || route;
  }

  private findMenuItemById(id: string): NestedMenuItem | null {
    if (!this.filteredMenuItems || this.filteredMenuItems.length === 0) {
      return null;
    }

    // Search in current filtered items
    for (const item of this.filteredMenuItems) {
      if (item.id === id) {
        return item;
      }
      // Search in children if exists
      if (item.child) {
        for (const child of item.child) {
          if (child.id === id) {
            return child;
          }
        }
      }
    }
    return null;
  }

  private findMenuItemByText(text: string): NestedMenuItem | null {
    if (!this.filteredMenuItems || this.filteredMenuItems.length === 0) {
      return null;
    }

    // Search in current filtered items
    for (const item of this.filteredMenuItems) {
      if (item.text === text) {
        return item;
      }
      // Search in children if exists
      if (item.child) {
        for (const child of item.child) {
          if (child.text === text) {
            return child;
          }
        }
      }
    }
    return null;
  }

  private navigateToRoute(route: string): void {
    if (!route) {
      return;
    }

    // Navigate to the route
    this.router.navigate([route]).then(
      (success) => {
        if (success) {
          // Update active route
          this.activeRoute = route;
          // Update selected module based on route
          this.updateSelectedModuleFromRoute();
        } else {
          // If navigation failed, try to find alternative route
          console.warn(`Navigation to ${route} failed, trying alternative routes...`);
          // Try redirecting to home if route doesn't exist
          if (route === '/home') {
            this.router.navigate(['/portal']).catch(() => {
              this.router.navigate(['/']).catch(() => {});
            });
          } else if (route === '/company/manage') {
            // Redirect to company home
            this.router.navigate(['/company/home']).catch(() => {
              this.router.navigate(['/portal/admin/company']).catch(() => {});
            });
          }
        }
      },
      (error) => {
        console.error('Navigation error:', error);
        // Try alternative routes
        if (route === '/home' || route === '/dashboard') {
          this.router.navigate(['/portal']).catch(() => {
            this.router.navigate(['/']).catch(() => {});
          });
        } else if (route === '/company/manage') {
          this.router.navigate(['/portal/admin/company']).catch(() => {
            this.router.navigate(['/portal']).catch(() => {});
          });
        }
      }
    );
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

  /**
   * Handle route change from menu item component
   */
  onRouteChange(route: string): void {
    this.activeRoute = route;
    // Update selected module based on route
    this.updateSelectedModuleFromRoute();
  }

  toggleChildren(item: MenuItem): void {
    // Toggle children visibility if needed
    // This can be enhanced with expand/collapse functionality
  }

  /**
   * Get mock user data for testing
   * Remove this method when real authentication is implemented
   */
  private getMockUser(): any {
    return {
      id: 'mock-user-001',
      username: 'testuser',
      name: 'Test User',
      fullname: 'Test User',
      email: 'test@example.com',
      roles: ['user', 'admin'], // Mock as admin to see all menus
      user_role: 'admin',
      role_level: 'admin',
      user_level: 'admin',
      emp_position: 'Manager',
      job: 'Manager',
      accountactive: 'Y',
      companyId: '001',
      companyName: 'Test Company'
    };
  }

  /**
   * Go to Home (switch back to ESS)
   */
  goToHome(): void {
    // Switch back to ESS
    const essItem = this.navigationItems.find(item => item.id === 'ess');
    if (essItem) {
      this.selectNavigationItem('ess');
    } else {
      // Fallback: clear selection
      this.selectedNavigationItem = null;
      this.level2Items = [];
      this.selectedLevel2Item = null;
    }
    this.searchQuery = '';
  }

  /**
   * Check if user has admin role
   */
  hasAdminRole(): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.some(role => role.toLowerCase() === 'admin' || role.toLowerCase() === 'all');
  }

  /**
   * Switch to Admin menu
   */
  switchToAdmin(): void {
    const adminItem = this.navigationItems.find(item => item.id === 'admin');
    if (adminItem) {
      this.selectNavigationItem('admin');
    }
  }
}
