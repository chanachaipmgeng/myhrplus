import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService, ThemeMode, ThemeColor } from '@core/services';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface ComponentGroup {
  name: string;
  icon: string;
  components: ComponentInfo[];
}

interface ComponentInfo {
  name: string;
  route: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-demo-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SyncfusionModule,
    TranslateModule,
    GlassCardComponent,
    GlassButtonComponent
  ],
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.scss']
})
export class DemoLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar') sidebar!: SidebarComponent;

  // Sidebar state
  sidebarOpen = false;
  currentRoute = '';

  // Language
  currentLang = 'th';
  availableLangs = [
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  // Theme
  currentTheme: { mode: ThemeMode; color: ThemeColor; primaryColor: string } = { mode: 'light', color: 'blue', primaryColor: '#3b82f6' };
  showColorPicker = false;
  customPrimaryColor = '#3b82f6';
  themeModes: { value: ThemeMode; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'auto', label: 'Auto', icon: '🔄' }
  ];
  themeColors: { value: ThemeColor; label: string; color: string }[] = [
    { value: 'blue', label: 'Blue', color: '#3b82f6' },
    { value: 'indigo', label: 'Indigo', color: '#6366f1' },
    { value: 'purple', label: 'Purple', color: '#a855f7' },
    { value: 'green', label: 'Green', color: '#22c55e' },
    { value: 'orange', label: 'Orange', color: '#f97316' },
    { value: 'red', label: 'Red', color: '#ef4444' },
    { value: 'teal', label: 'Teal', color: '#14b8a6' },
    { value: 'pink', label: 'Pink', color: '#ec4899' }
  ];

  // Component groups
  componentGroups: ComponentGroup[] = [
    {
      name: 'Glass Components',
      icon: '🪟',
      components: [
        { name: 'Glass Card', route: 'glass-card', description: 'Glass morphism card component with variants', icon: '🪟' },
        { name: 'Glass Button', route: 'glass-button', description: 'Glass morphism button with variants and states', icon: '🔘' },
        { name: 'Glass Input', route: 'glass-input', description: 'Glass morphism input field with validation', icon: '📝' },
        { name: 'Glass Select', route: 'glass-select', description: 'Glass morphism select dropdown with search and multi-select', icon: '📋' },
        { name: 'Glass Checkbox', route: 'glass-checkbox', description: 'Glass morphism checkbox with validation', icon: '☑️' },
        { name: 'Glass Radio', route: 'glass-radio', description: 'Glass morphism radio button with validation', icon: '🔘' },
        { name: 'Glass Textarea', route: 'glass-textarea', description: 'Glass morphism textarea with auto-resize and counter', icon: '📄' },
        { name: 'Glass Switch', route: 'glass-switch', description: 'Glass morphism toggle switch component', icon: '🔀' }
      ]
    },
    {
      name: 'Layout',
      icon: '📐',
      components: [
        { name: 'Page Layout', route: 'page-layout', description: 'Standard page layout with header, breadcrumb, and actions', icon: '📄' },
        { name: 'Page Header', route: 'page-header', description: 'Page header with title, subtitle, breadcrumbs, and actions', icon: '📋' },
        { name: 'Tabs', route: 'tabs', description: 'Tab navigation component', icon: '📑' },
        { name: 'Breadcrumbs', route: 'breadcrumbs', description: 'Breadcrumb navigation', icon: '🍞' },
        { name: 'Stepper', route: 'stepper', description: 'Step-by-step navigation component', icon: '👣' },
        { name: 'Progressive Disclosure', route: 'progressive-disclosure', description: 'Expand/collapse component with animations', icon: '📖' },
        { name: 'Context Switcher', route: 'context-switcher', description: 'Context switcher for switching between menu contexts', icon: '🔄' },
        { name: 'Nested Menu Accordion', route: 'nested-menu-accordion', description: 'Nested menu accordion with expand/collapse functionality', icon: '📋' },
        { name: 'Accordion', route: 'accordion', description: 'Accordion component for collapsible content sections', icon: '📑' },
        { name: 'Divider', route: 'divider', description: 'Divider component for separating content sections', icon: '➖' }
      ]
    },
    {
      name: 'Data Display',
      icon: '📊',
      components: [
        { name: 'Statistics Card', route: 'statistics-card', description: 'Card for displaying statistics with icons', icon: '📊' },
        { name: 'Statistics Grid', route: 'statistics-grid', description: 'Grid layout for statistics cards', icon: '📈' },
        { name: 'Data Grid', route: 'data-grid', description: 'Enterprise data grid with advanced features (Syncfusion)', icon: '📊' },
        { name: 'Pivot Table', route: 'pivot-table', description: 'Pivot table for data analysis (Syncfusion)', icon: '📊' },
        { name: 'Timeline', route: 'timeline', description: 'Timeline component for displaying events', icon: '⏱️' },
        { name: 'Calendar', route: 'calendar', description: 'Calendar component with events management', icon: '📅' },
        { name: 'Scheduler', route: 'scheduler', description: 'Scheduler component for calendar and events (Syncfusion)', icon: '📆' },
        { name: 'Chart', route: 'chart', description: 'Chart component for data visualization (Syncfusion)', icon: '📈' },
        { name: 'Tree Grid', route: 'tree-grid', description: 'Hierarchical tree grid component with expand/collapse (Syncfusion)', icon: '🌳' },
        { name: 'Spreadsheet', route: 'spreadsheet', description: 'Excel-like spreadsheet component with formulas, charts, and formatting (Syncfusion)', icon: '📊' },
        { name: 'PDF Viewer', route: 'pdf-viewer', description: 'PDF viewer component with annotation, form filling, and text search (Syncfusion)', icon: '📄' },
        { name: 'Diagrams', route: 'diagrams', description: 'Diagram component for flowcharts, organizational charts, and network diagrams (Syncfusion)', icon: '📊' },
        { name: 'Carousel', route: 'carousel', description: 'Carousel component for displaying slides with navigation and autoplay (Syncfusion)', icon: '🎠' },
        { name: 'Gantt Chart', route: 'gantt', description: 'Project management Gantt chart component with timeline, dependencies, and progress tracking (Syncfusion)', icon: '📊' },
        { name: 'File Manager', route: 'file-manager', description: 'File management component for browsing, uploading, downloading, and managing files and folders (Syncfusion)', icon: '📁' },
        { name: 'Pagination', route: 'pagination', description: 'Pagination component for navigating through large datasets', icon: '📄' }
      ]
    },
    {
      name: 'Form & Input',
      icon: '📝',
      components: [
        { name: 'Progress Bar', route: 'progress-bar', description: 'Progress bar with variants', icon: '📊' },
        { name: 'Rating', route: 'rating', description: 'Star and heart rating component', icon: '⭐' },
        { name: 'Date Range Picker', route: 'date-range-picker', description: 'Date range picker component', icon: '📅' },
        { name: 'Rich Text Editor', route: 'rich-text-editor', description: 'Rich text editor component (Syncfusion)', icon: '✏️' },
        { name: 'Query Builder', route: 'query-builder', description: 'Query builder component for creating filter conditions (Syncfusion)', icon: '🔍' },
        { name: 'Document Editor', route: 'document-editor', description: 'Word-like document editor component (Syncfusion)', icon: '📄' },
        { name: 'Speech to Text', route: 'speech-to-text', description: 'Speech to text conversion component (Syncfusion)', icon: '🎤' },
        { name: 'Image Editor', route: 'image-editor', description: 'Image editing component with crop, filter, transform (Syncfusion)', icon: '🖼️' },
        { name: 'Signature', route: 'signature', description: 'Digital signature pad component for capturing signatures (Syncfusion)', icon: '✍️' },
        { name: 'Syncfusion Uploader', route: 'syncfusion-uploader', description: 'File upload component with drag & drop, progress tracking, pause/resume, and multiple file support (Syncfusion)', icon: '📤' },
        { name: 'Autocomplete', route: 'autocomplete', description: 'Autocomplete input component with filtering, highlighting, and customizable suggestions (Syncfusion)', icon: '🔍' },
        { name: 'Smart TextArea', route: 'smart-textarea', description: 'Intelligent textarea component with AI-powered suggestions and customizable features (Syncfusion)', icon: '💬' },
        { name: 'AI Assist View', route: 'ai-assist-view', description: 'AI-powered assistant interface component with suggestions, prompt handling, and interactive chat features (Syncfusion)', icon: '🤖' },
        { name: 'Search Filter', route: 'search-filter', description: 'Search and filter component', icon: '🔍' },
        { name: 'File Upload', route: 'file-upload', description: 'File upload component', icon: '📁' },
        { name: 'Image Upload', route: 'image-upload', description: 'Image upload component', icon: '🖼️' },
        { name: 'Form Validation Messages', route: 'form-validation-messages', description: 'Form validation messages component', icon: '✅' },
        { name: 'Mask Toggle', route: 'mask-toggle', description: 'Toggle masked/unmasked display of sensitive data (PDPA/GDPR compliance)', icon: '👁️' },
        { name: 'Contextual Help', route: 'contextual-help', description: 'Contextual help component with tooltips', icon: '❓' },
        { name: 'NgSelect', route: 'ng-select', description: 'NgSelect dropdown component with search, multi-select, and custom templates', icon: '🔽' },
        { name: 'Bar Rating', route: 'bar-rating', description: 'Bar rating component with customizable options', icon: '⭐' },
        { name: 'Chip', route: 'chip', description: 'Chip component for displaying tags and removable items', icon: '🏷️' }
      ]
    },
    {
      name: 'Feedback',
      icon: '💬',
      components: [
        { name: 'Modal', route: 'modal', description: 'Modal dialog component', icon: '🪟' },
        { name: 'Notification', route: 'notification', description: 'Toast notification component', icon: '🔔' },
        { name: 'Tooltip', route: 'tooltip', description: 'Tooltip component', icon: '💡' },
        { name: 'Confirm Dialog', route: 'confirm-dialog', description: 'Confirmation dialog component', icon: '❓' },
        { name: 'Alert', route: 'alert', description: 'Inline alert component for displaying important messages', icon: '⚠️' },
        { name: 'SweetAlert2', route: 'sweetalert2', description: 'SweetAlert2 integration for beautiful alert dialogs', icon: '🎨' }
      ]
    },
    {
      name: 'Status',
      icon: '📌',
      components: [
        { name: 'Status Badge', route: 'status-badge', description: 'Status badge with variants', icon: '🏷️' },
        { name: 'Empty State', route: 'empty-state', description: 'Empty state component', icon: '📭' },
        { name: 'Error State', route: 'error-state', description: 'Error state component', icon: '❌' }
      ]
    },
    {
      name: 'Loading',
      icon: '⏳',
      components: [
        { name: 'Loading', route: 'loading', description: 'Loading component with message', icon: '⏳' },
        { name: 'Spinner', route: 'spinner', description: 'Spinner component with sizes', icon: '🌀' },
        { name: 'Loading Spinner', route: 'loading-spinner', description: 'Loading spinner component', icon: '⚙️' },
        { name: 'Skeleton Loader', route: 'skeleton-loader', description: 'Skeleton loading placeholder', icon: '💀' }
      ]
    },
    {
      name: 'Other',
      icon: '🎨',
      components: [
        { name: 'Icon', route: 'icon', description: 'Material Icons wrapper component', icon: '🎨' },
        { name: 'Avatar', route: 'avatar', description: 'Avatar component with status', icon: '👤' },
        { name: 'Theme Toggle', route: 'theme-toggle', description: 'Theme mode and color toggle', icon: '🎨' },
        { name: 'Back to Top', route: 'back-to-top', description: 'Back to top button component with smooth scroll', icon: '⬆️' },
        { name: 'Fullscreen', route: 'fullscreen', description: 'Fullscreen API component for entering/exiting fullscreen mode', icon: '⛶' },
        { name: 'Omni Search', route: 'omni-search', description: 'Universal search component for searching across menus and routes', icon: '🔍' },
        { name: 'Migration Guide', route: 'migration-guide', description: 'JSP to Angular migration guide with component mapping and best practices', icon: '📚' }
      ]
    }
  ];

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Get current language
    this.currentLang = this.translate.currentLang || 'th';

    // Subscribe to theme changes
    this.subscriptions.push(
      this.themeService.theme$.subscribe(theme => {
        this.currentTheme = { 
          mode: theme.mode, 
          color: theme.color,
          primaryColor: this.rgbToHex(theme.primaryColor)
        };
        this.customPrimaryColor = this.rgbToHex(theme.primaryColor);
      })
    );

    // Track current route
    this.subscriptions.push(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          const url = event.urlAfterRedirects;
          if (url === '/demo' || url === '/demo/') {
            this.currentRoute = '';
          } else {
            this.currentRoute = url.replace('/demo/', '');
          }
        })
    );

    // Set initial route
    const initialUrl = this.router.url;
    if (initialUrl === '/demo' || initialUrl === '/demo/') {
      this.currentRoute = '';
    } else {
      this.currentRoute = initialUrl.replace('/demo/', '');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Sidebar methods
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    if (this.sidebar) {
      if (this.sidebarOpen) {
        this.sidebar.show();
      } else {
        this.sidebar.hide();
      }
    }
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
    if (this.sidebar) {
      this.sidebar.hide();
    }
  }

  // Language methods
  changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', lang);
    }
  }

  // Theme methods
  changeThemeMode(mode: ThemeMode): void {
    this.themeService.setMode(mode);
  }

  changeThemeColor(color: ThemeColor): void {
    this.themeService.setColor(color);
    // Update custom color to match selected theme color
    const selectedColor = this.themeColors.find(c => c.value === color);
    if (selectedColor) {
      this.customPrimaryColor = selectedColor.color;
    }
  }

  toggleThemeMode(): void {
    this.themeService.toggleMode();
  }

  // Color picker methods
  toggleColorPicker(): void {
    this.showColorPicker = !this.showColorPicker;
  }

  onCustomColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let hexColor = input.value.trim();
    
    // Ensure hex color starts with #
    if (!hexColor.startsWith('#')) {
      hexColor = '#' + hexColor;
    }
    
    // Validate hex color format
    if (/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
      this.customPrimaryColor = hexColor;
      const rgb = this.hexToRgb(hexColor);
      if (rgb) {
        this.themeService.setPrimaryColor(rgb);
      }
    } else if (input.type === 'color') {
      // Color picker always returns valid hex
      this.customPrimaryColor = hexColor;
      const rgb = this.hexToRgb(hexColor);
      if (rgb) {
        this.themeService.setPrimaryColor(rgb);
      }
    }
  }

  // Convert hex color to RGB format (for ThemeService)
  private hexToRgb(hex: string): string | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `${r}, ${g}, ${b}`;
    }
    return null;
  }

  // Convert RGB format to hex color (for display)
  private rgbToHex(rgb: string): string {
    const parts = rgb.split(',').map(p => parseInt(p.trim(), 10));
    if (parts.length === 3) {
      const r = parts[0].toString(16).padStart(2, '0');
      const g = parts[1].toString(16).padStart(2, '0');
      const b = parts[2].toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }
    return '#3b82f6'; // Default blue
  }

  // Navigation
  navigateToComponent(route: string): void {
    if (route === '') {
      this.router.navigate(['/demo']);
    } else {
      this.router.navigate(['/demo', route]);
    }
    // Don't close sidebar when navigating
  }

  navigateToHome(): void {
    this.router.navigate(['/demo']);
    // Don't close sidebar when navigating
  }

  isActiveRoute(route: string): boolean {
    if (route === '') {
      return this.currentRoute === '' || this.currentRoute === '/demo';
    }
    return this.currentRoute === route || this.currentRoute.startsWith(route + '/');
  }

  // Close color picker when clicking outside
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.showColorPicker && !target.closest('.color-picker-container')) {
      this.showColorPicker = false;
    }
  }
}

