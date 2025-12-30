import { Component, OnInit, OnDestroy, ViewChild, HostListener, ElementRef, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { MenuService, MenuItem } from '@core/services';
import { AuthService } from '@core/services';
import { ThemeService } from '@core/services';
import { LayoutService, BreadcrumbItem } from '@core/services';
import {
  NAVIGATION_ITEMS,
  NavigationItem,
  NavigationChild,
  getNavigationItemsByRoles
} from '@core/constants';
import { environment } from '../../../environments/environment';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { NestedMenuAccordionComponent } from '@shared/components/nested-menu-accordion/nested-menu-accordion.component';
import { PREDEFINED_MODULES, MODULE_ROUTE_MAP, NestedMenuItem, MainModule } from '@core/constants';

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

  private translate = inject(TranslateService);
  menuItems: MenuItem[] = [];
  mainModules: MainModule[] = []; // Legacy - keep for backward compatibility
  navigationItems: NavigationItem[] = []; // New navigation structure (Level 1)
  level2Items: NavigationChild[] = []; // Level 2 items for Rail (Left Icon Bar)
  selectedModule: string | null = null;
  selectedModuleData: MainModule | null = null;
  selectedNavigationItem: NavigationItem | null = null; // Selected Level 1 item (Home, Admin, etc.)
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

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService,
    public themeService: ThemeService,
    private layoutService: LayoutService
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
        // Update breadcrumbs
        this.getBreadcrumbPath();
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
   * Load navigation items - Auto-load Admin Level 2 items directly
   * No Level 1 selection needed - show Admin Level 2 items immediately
   */
  private loadNavigationItems(): void {
    // Always load all navigation items - admin by default
    // No role filtering - everyone sees admin menu
    this.navigationItems = getNavigationItemsByRoles([]);

    // Auto-select Admin and load Level 2 items directly
    const adminItem = this.navigationItems.find(item => item.id === 'admin');
    if (adminItem) {
      this.selectedNavigationItem = adminItem;
      this.selectedModule = 'admin';

      // Load Level 2 items directly
      if (adminItem.children && adminItem.children.length > 0) {
        this.level2Items = [...adminItem.children];
        console.log('[Sidebar] Auto-loaded Admin Level 2 items:', this.level2Items.map(item => ({
      label: item.label,
      icon: item.icon,
          route: item.route,
      childrenCount: item.children?.length || 0
    })));
      }
    }

    console.log('[Sidebar] Loaded navigation items - Admin Level 2 shown directly');
  }

  /**
   * Load Level 2 items for selected Level 1 item
   * Level 2 items are displayed in Rail for the selected Level 1
   * Home doesn't have Level 2 items
   */
  private loadLevel2Items(): void {
    if (!this.selectedNavigationItem) {
      this.level2Items = [];
      return;
    }

    // Home doesn't have Level 2 items
    if (this.selectedNavigationItem.id === 'home') {
      this.level2Items = [];
      console.log('[Sidebar] Home selected - no Level 2 items');
      return;
    }

    // Get Level 2 items from selected Level 1 item
    if (this.selectedNavigationItem.children && this.selectedNavigationItem.children.length > 0) {
    this.level2Items = [...this.selectedNavigationItem.children];
    console.log('[Sidebar] Loaded Level 2 items for', this.selectedNavigationItem.id + ':', this.level2Items.map(item => ({
      label: item.label,
      icon: item.icon,
      route: item.route,
      childrenCount: item.children?.length || 0
    })));
    } else {
      this.level2Items = [];
      console.log('[Sidebar] No Level 2 items available for:', this.selectedNavigationItem.id);
    }

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
   * Select Level 1 item (Rail icon clicked - Home, Admin)
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

    // Navigate to route if exists (for Home)
    if (navItem.route && navItem.id === 'home') {
      this.navigateToRoute(navItem.route);
    }

    // Update breadcrumbs
    this.getBreadcrumbPath();
  }

  /**
   * Select Level 2 item (Rail icon clicked - direct selection from Rail)
   * For Admin: This sets selectedLevel2Item and shows Level 3 items
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

    // For Admin: Set selected Level 2 item
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

    // For Admin: If Level 2 item has route, navigate to it immediately
    // If it has children, still navigate to the route (user can see Level 3 items in the menu)
    if (parentNavItem?.id === 'admin' && level2Item.route) {
      this.navigateToRoute(level2Item.route);
    }

    // Update breadcrumbs
    this.getBreadcrumbPath();
  }

  /**
   * Get navigation children for recursive menu component
   * For Admin: Returns Level 3 items (children of selected Level 2) - Admin requires Level 2 selection
   * For Home: Returns Level 2 items (children of selected Level 1)
   * Uses caching to prevent infinite loops from change detection
   */
  getNavigationChildren(): NavigationChild[] {
    // Create cache key based on current state
    const cacheKey = `${this.selectedNavigationItem?.id || 'none'}-${this.selectedLevel2Item?.label || 'none'}`;

    // Return cached result if key matches
    if (this._cachedNavigationChildrenKey === cacheKey && this._cachedNavigationChildren.length >= 0) {
      return this._cachedNavigationChildren;
    }

    let result: NavigationChild[] = [];

    // For Admin: Return Level 3 items (children of selected Level 2)
    // Admin requires Level 2 selection first
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item && this.selectedLevel2Item.children) {
      result = [...this.selectedLevel2Item.children];
      console.log('[Sidebar] getNavigationChildren (Admin - Level 3):', result.map(item => ({
        label: item.label,
        route: item.route,
        childrenCount: item.children?.length || 0
      })));
    }
    // For Home: Return Level 2 items (children of selected Level 1)
    else if (this.selectedNavigationItem?.id === 'home' && this.selectedNavigationItem.children) {
      result = [...this.selectedNavigationItem.children];
      console.log('[Sidebar] getNavigationChildren (Home - Level 2):', result.map(item => ({
        label: item.label,
        route: item.route,
        childrenCount: item.children?.length || 0
      })));
    }
    else {
      result = [];
      console.log('[Sidebar] getNavigationChildren: No items available');
    }

    // Cache result
    this._cachedNavigationChildren = result;
    this._cachedNavigationChildrenKey = cacheKey;

    return result;
  }

  /**
   * Translate navigation label
   * Converts label to translation key and returns translated text
   */
  translateLabel(label: string, navId?: string, level?: number): string {
    if (!label) return '';

    // Try to find translation key
    // Pattern: navigation.{navId}.{labelKey} or navigation.{labelKey}
    const labelKey = this.normalizeLabelToKey(label);
    let translationKey = '';

    if (navId && level) {
      // Try with navigation id and level
      translationKey = `navigation.${navId}.level${level}.${labelKey}`;
      const translated = this.translate.instant(translationKey);
      if (translated !== translationKey) return translated;
    }

    if (navId) {
      // Try with navigation id only
      translationKey = `navigation.${navId}.${labelKey}`;
      const translated = this.translate.instant(translationKey);
      if (translated !== translationKey) return translated;
    }

    // Try generic navigation key
    translationKey = `navigation.${labelKey}`;
    const translated = this.translate.instant(translationKey);
    if (translated !== translationKey) return translated;

    // If no translation found, return original label
    return label;
  }

  /**
   * Normalize label to translation key format
   * Converts "ลงเวลา (Time)" to "time" or "Self Service" to "selfService"
   */
  private normalizeLabelToKey(label: string): string {
    if (!label) return '';

    // First, try to extract English text from parentheses (e.g., "ลงเวลา (Time)" -> "Time")
    const parenthesesMatch = label.match(/\(([^)]+)\)/);
    if (parenthesesMatch && parenthesesMatch[1]) {
      const englishText = parenthesesMatch[1].trim();
      // Convert to camelCase
      return englishText
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map((word, index) => {
          if (index === 0) return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
    }

    // If no parentheses, process the whole label
    let key = label
      .replace(/\([^)]*\)/g, '') // Remove any remaining parentheses
      .trim();

    // Convert to camelCase
    key = key
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim()
      .split(' ')
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');

    return key;
  }

  /**
   * Get breadcrumb path for current navigation
   */
  getBreadcrumbPath(): Array<{ label: string; route?: string; level: number }> {
    const path: Array<{ label: string; route?: string; level: number }> = [];

    // Level 1
    if (this.selectedNavigationItem) {
      path.push({
        label: this.translateLabel(this.selectedNavigationItem.label, this.selectedNavigationItem.id, 1),
        route: this.selectedNavigationItem.route,
        level: 1
      });
    }

    // Level 2 (only for Admin)
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item) {
      path.push({
        label: this.translateLabel(this.selectedLevel2Item.label, this.selectedNavigationItem.id, 2),
        route: this.selectedLevel2Item.route,
        level: 2
      });
    }

    // Level 3 (if active)
    if (this.selectedLevel3Item) {
      path.push({
        label: this.translateLabel(this.selectedLevel3Item.label, this.selectedNavigationItem?.id, 3),
        route: this.selectedLevel3Item.route,
        level: 3
      });
    }

    // Level 4 (if active)
    if (this.selectedLevel4Item) {
      path.push({
        label: this.translateLabel(this.selectedLevel4Item.label, this.selectedNavigationItem?.id, 4),
        route: this.selectedLevel4Item.route,
        level: 4
      });
    }

    // Update breadcrumbs in LayoutService
    const breadcrumbItems: BreadcrumbItem[] = path.map(item => ({
      label: item.label,
      route: item.route,
      icon: this.getBreadcrumbIcon(item.level)
    }));
    this.layoutService.setBreadcrumbs(breadcrumbItems);

    return path;
  }

  /**
   * Get icon for breadcrumb item based on level
   */
  private getBreadcrumbIcon(level: number): string {
    const iconMap: { [key: number]: string } = {
      1: 'home',
      2: 'business',
      3: 'folder',
      4: 'description'
    };
    return iconMap[level] || 'folder';
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
   * For Admin: Level 3 items are shown in accordion (Level 4 as children)
   * NOTE: Items with routes now use routerLink, so this is only called for parent groups
   */
  onAccordionItemClick(item: NavigationChild): void {
    const level = 3; // Admin uses Level 3

    console.log('[Sidebar] Accordion item clicked:', {
      label: item.label,
      route: item.route,
      level: level
    });

    // Items with routes use routerLink directly, so this should only be called for parent groups
    if (item.children && item.children.length > 0 && !item.route) {
      // If item has children but no route, it's a parent group
      // Toggle expansion is handled by accordion component
      console.log('[Sidebar] Accordion item is a parent group, expansion handled by component');
    } else if (item.route) {
      // Fallback: If route exists, navigate (shouldn't happen with routerLink, but keep for safety)
      this.navigateToRoute(item.route);
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
   * For Admin: Find in Level 3 children (Level 4) - Admin requires Level 2 selection
   */
  private updateSelectedItemsFromRoute(route: string): void {
    console.log('[Sidebar] updateSelectedItemsFromRoute: Searching for route =', route);

    // For Admin: Search in Level 3 items (selectedLevel2Item.children)
    // IMPORTANT: Only search within current selectedLevel2Item - don't change it
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item && this.selectedLevel2Item.children) {
      console.log('[Sidebar] Searching in Admin Level 3 items (current Level 2:', this.selectedLevel2Item.label + ')');
      for (const level3Item of this.selectedLevel2Item.children) {
        if (level3Item.route && route.startsWith(level3Item.route)) {
          console.log('[Sidebar] Found Admin Level 3 match:', level3Item.label);
          // Don't change selectedLevel2Item - only update Level 3-4
          this.selectedLevel3Item = level3Item;
          this.selectedLevel4Item = null;
          // Update breadcrumbs
          this.getBreadcrumbPath();
          return;
        }

        // Check Level 4
        if (level3Item.children) {
          for (const level4Item of level3Item.children) {
            if (level4Item.route && route.startsWith(level4Item.route)) {
              console.log('[Sidebar] Found Admin Level 4 match:', {
                level3Label: level3Item.label,
                level4Label: level4Item.label
              });
              // Don't change selectedLevel2Item - only update Level 3-4
              this.selectedLevel3Item = level3Item;
              this.selectedLevel4Item = level4Item;
              // Update breadcrumbs
              this.getBreadcrumbPath();
              return;
            }
          }
        }
      }
      console.log('[Sidebar] No Admin match found for route:', route);
    }

      // For Home: Search in Level 2 items
    if (this.selectedNavigationItem?.id === 'home' && this.selectedNavigationItem.children) {
      for (const level2Item of this.selectedNavigationItem.children) {
          // Map portal routes to actual routes
          const mappedRoute = this.mapPortalRoute(level2Item.route || '');
          if (mappedRoute && route.startsWith(mappedRoute)) {
          console.log('[Sidebar] Found Home Level 2 match:', level2Item.label);
          this.selectedLevel3Item = null;
          this.selectedLevel4Item = null;
          // Update breadcrumbs
          this.getBreadcrumbPath();
          return;
        }
      }
    }

    // Update breadcrumbs after route update
    this.getBreadcrumbPath();
  }

  /**
   * Go back to Level 2 (from Level 3+)
   * For Admin: Clear Level 3-4 selections (show Level 3 items of selected Level 2)
   */
  goBackToLevel2(): void {
    this.selectedLevel3Item = null;
    this.selectedLevel4Item = null;
    this.expandedLevel3Items.clear();
    this.searchQuery = '';
  }

  private groupMenuByModule(): void {
    // Use predefined modules from constant
    const predefinedModules = [...PREDEFINED_MODULES];

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

  private mapRouteToModuleId(moduleCode: string): string {
    return MODULE_ROUTE_MAP[moduleCode.toLowerCase()] || 'home';
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
      'home': '/home',
      'admin': '/personal',
      // 'workflow': '/workflow/home', // Workflow module removed
      'company': '/company',
      'personal': '/personal',
      'ta': '/ta',
      'payroll': '/payroll',
      'welfare': '/welfare',
      'training': '/training',
      'recruit': '/recruit',
      'appraisal': '/appraisal',
      'setting': '/setting'
    };

    return moduleHomeRoutes[moduleId] || '/home';
  }

  private navigateToModuleHome(moduleId: string): void {
    const homeRoute = this.getModuleHomeRoute(moduleId);
    if (homeRoute) {
      this.router.navigate([homeRoute]).catch(() => {});
    }
  }

  onSearchChange(): void {
    // Search is handled by navigationChildren filtering in template
    // No need for separate filter method since we use navigation.constant.ts
  }

  clearSearch(): void {
    this.searchQuery = '';
    // Search is handled by navigationChildren filtering in template
    // No need for separate filter method since we use navigation.constant.ts
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
      'folder_open': 'material-icons',
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


  navigateToHome(): void {
    this.router.navigate(['/home']).catch(() => {
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
    if (!this.currentUser) return this.translate.instant('layout.sidebar.user');
    return this.currentUser.fullname || this.currentUser.name || this.currentUser.username || this.translate.instant('layout.sidebar.user');
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
    this.router.navigate(['/home']).catch(() => {
      this.router.navigate(['/']).catch(() => {});
    });
  }

  navigateToSettings(): void {
    this.showUserMenu = false;
    this.router.navigate(['/setting']).catch(() => {
      this.router.navigate(['/home']).catch(() => {});
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

    // For Admin: If Level 1 and Level 2 are already selected, only update Level 3-4
    if (this.selectedNavigationItem?.id === 'admin' && this.selectedLevel2Item) {
      console.log('[Sidebar] Admin Level 1 and Level 2 already selected, only updating Level 3-4');
      this.updateSelectedItemsFromRoute(this.activeRoute);
      return;
    }

    // Try to find matching navigation item first (including nested children up to 4 levels)
    // Only change Level 1 and Level 2 if they are not already selected
    for (const navItem of this.navigationItems) {
      if (!navItem.children) continue;

      // Check if route matches Level 1 item directly (for Home)
      if (navItem.id === 'home' && (this.activeRoute.startsWith('/home') || this.activeRoute === '/')) {
        if (this.selectedNavigationItem?.id !== navItem.id) {
          this.selectNavigationItem(navItem.id);
        }
        this.updateSelectedItemsFromRoute(this.activeRoute);
        return;
      }

      for (const level2Item of navItem.children) {
        // Check Level 2 route
        if (level2Item.route && this.activeRoute.startsWith(level2Item.route)) {
          console.log('[Sidebar] Found Level 2 match:', {
            navItemId: navItem.id,
            level2Label: level2Item.label,
            route: level2Item.route
          });

          // For Admin: Set both Level 1 and Level 2
          if (navItem.id === 'admin') {
            if (this.selectedNavigationItem?.id !== navItem.id) {
              this.selectNavigationItem(navItem.id);
            }
            if (this.selectedLevel2Item !== level2Item) {
              this.selectLevel2Item(level2Item, navItem);
            }
            this.updateSelectedItemsFromRoute(this.activeRoute);
            return;
          }
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

              // For Admin: Set both Level 1 and Level 2
              if (navItem.id === 'admin') {
                if (this.selectedNavigationItem?.id !== navItem.id) {
                  this.selectNavigationItem(navItem.id);
                }
                if (this.selectedLevel2Item !== level2Item) {
                  this.selectLevel2Item(level2Item, navItem);
                }
                this.updateSelectedItemsFromRoute(this.activeRoute);
                return;
              }
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

                  // For Admin: Set both Level 1 and Level 2
                  if (navItem.id === 'admin') {
                    if (this.selectedNavigationItem?.id !== navItem.id) {
                      this.selectNavigationItem(navItem.id);
                    }
                    if (this.selectedLevel2Item !== level2Item) {
                      this.selectLevel2Item(level2Item, navItem);
                    }
                    this.updateSelectedItemsFromRoute(this.activeRoute);
                    return;
                  }
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
      '/portal': '/home',
      '/portal/self-service': '/ta',
      '/portal/self-service/time': '/ta',
      '/portal/self-service/profile': '/home',
      '/portal/admin/company': '/company',
      '/portal/admin/employees': '/personal',
      '/portal/admin/time': '/ta',
      '/portal/admin/payroll': '/payroll',
      '/portal/admin/training': '/training',
      '/portal/admin/welfare': '/welfare',
      '/portal/admin/recruit': '/recruit',
      '/portal/admin/appraisal': '/appraisal',
      '/portal/admin/settings': '/setting',
      '/company/manage': '/company',
      '/company/home': '/company',
      '/personal/home': '/personal',
      '/ta/home': '/ta',
      '/payroll/home': '/payroll',
      '/training/home': '/training',
      '/welfare/home': '/welfare',
      '/recruit/home': '/recruit',
      '/appraisal/home': '/appraisal',
      '/setting/home': '/setting',
      '/settings/home': '/setting'
    };

    return routeMap[route] || route;
  }

  /**
   * Map portal routes to actual routes
   */
  private mapPortalRoute(route: string): string {
    return this.mapLegacyRoute(route);
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
          if (route === '/home' || route === '/portal') {
            this.router.navigate(['/home']).catch(() => {
              this.router.navigate(['/']).catch(() => {});
            });
          } else if (route === '/company/manage') {
            // Redirect to company
            this.router.navigate(['/company']).catch(() => {
              this.router.navigate(['/home']).catch(() => {});
            });
          }
        }
      },
      (error) => {
        console.error('Navigation error:', error);
        // Try alternative routes
        if (route === '/home' || route === '/dashboard' || route === '/portal') {
          this.router.navigate(['/home']).catch(() => {
            this.router.navigate(['/']).catch(() => {});
          });
        } else if (route === '/company/manage') {
          this.router.navigate(['/company']).catch(() => {
            this.router.navigate(['/home']).catch(() => {});
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

}
