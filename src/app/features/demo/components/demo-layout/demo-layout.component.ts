import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { SyncfusionModule } from '../../../../shared/syncfusion/syncfusion.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService, ThemeMode, ThemeColor } from '../../../../core/services/theme.service';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../../../shared/components/glass-button/glass-button.component';
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
  currentTheme: { mode: ThemeMode; color: ThemeColor } = { mode: 'light', color: 'blue' };
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
        { name: 'Glass Card', route: 'glass-card', description: 'Glass morphism card', icon: '🪟' },
        { name: 'Glass Button', route: 'glass-button', description: 'Glass morphism button', icon: '🔘' },
        { name: 'Glass Input', route: 'glass-input', description: 'Glass morphism input', icon: '📝' }
      ]
    },
    {
      name: 'Layout',
      icon: '📐',
      components: [
        { name: 'Page Layout', route: 'page-layout', description: 'Standard page layout', icon: '📄' },
        { name: 'Tabs', route: 'tabs', description: 'Tab navigation', icon: '📑' },
        { name: 'Breadcrumbs', route: 'breadcrumbs', description: 'Breadcrumb navigation', icon: '🍞' },
        { name: 'Stepper', route: 'stepper', description: 'Step-by-step navigation', icon: '👣' },
        { name: 'Page Header', route: 'page-header', description: 'Page header with actions', icon: '📋' },
        { name: 'Progressive Disclosure', route: 'progressive-disclosure', description: 'Expand/collapse component', icon: '📖' }
      ]
    },
    {
      name: 'Data Display',
      icon: '📊',
      components: [
        { name: 'Statistics Card', route: 'statistics-card', description: 'Statistics card', icon: '📊' },
        { name: 'Statistics Grid', route: 'statistics-grid', description: 'Statistics grid', icon: '📈' },
        { name: 'Data Table', route: 'data-table', description: 'Data table', icon: '📋' },
        { name: 'Data Grid', route: 'data-grid', description: 'Enterprise data grid', icon: '📊' },
        { name: 'Pivot Table', route: 'pivot-table', description: 'Pivot table', icon: '📊' },
        { name: 'Timeline', route: 'timeline', description: 'Timeline component', icon: '⏱️' },
        { name: 'Calendar', route: 'calendar', description: 'Calendar component', icon: '📅' },
        { name: 'Scheduler', route: 'scheduler', description: 'Scheduler component', icon: '📆' },
        { name: 'Chart', route: 'chart', description: 'Chart component', icon: '📈' },
        { name: 'Tree Grid', route: 'tree-grid', description: 'Tree grid', icon: '🌳' },
        { name: 'Spreadsheet', route: 'spreadsheet', description: 'Spreadsheet', icon: '📊' },
        { name: 'PDF Viewer', route: 'pdf-viewer', description: 'PDF viewer', icon: '📄' },
        { name: 'Diagrams', route: 'diagrams', description: 'Diagrams', icon: '📊' },
        { name: 'Carousel', route: 'carousel', description: 'Carousel', icon: '🎠' },
        { name: 'Gantt Chart', route: 'gantt', description: 'Gantt chart', icon: '📊' },
        { name: 'File Manager', route: 'file-manager', description: 'File manager', icon: '📁' }
      ]
    },
    {
      name: 'Form & Input',
      icon: '📝',
      components: [
        { name: 'Progress Bar', route: 'progress-bar', description: 'Progress bar', icon: '📊' },
        { name: 'Rating', route: 'rating', description: 'Rating component', icon: '⭐' },
        { name: 'Date Range Picker', route: 'date-range-picker', description: 'Date range picker', icon: '📅' },
        { name: 'Rich Text Editor', route: 'rich-text-editor', description: 'Rich text editor', icon: '✏️' },
        { name: 'Query Builder', route: 'query-builder', description: 'Query builder', icon: '🔍' },
        { name: 'Document Editor', route: 'document-editor', description: 'Document editor', icon: '📄' },
        { name: 'Speech to Text', route: 'speech-to-text', description: 'Speech to text', icon: '🎤' },
        { name: 'Image Editor', route: 'image-editor', description: 'Image editor', icon: '🖼️' },
        { name: 'Signature', route: 'signature', description: 'Signature pad', icon: '✍️' },
        { name: 'Uploader', route: 'syncfusion-uploader', description: 'File uploader', icon: '📤' },
        { name: 'Autocomplete', route: 'autocomplete', description: 'Autocomplete', icon: '🔍' },
        { name: 'Smart TextArea', route: 'smart-textarea', description: 'Smart textarea', icon: '💬' },
        { name: 'AI Assist View', route: 'ai-assist-view', description: 'AI assistant', icon: '🤖' },
        { name: 'Search Filter', route: 'search-filter', description: 'Search filter', icon: '🔍' },
        { name: 'File Upload', route: 'file-upload', description: 'File upload', icon: '📁' },
        { name: 'Image Upload', route: 'image-upload', description: 'Image upload', icon: '🖼️' },
        { name: 'Form Validation', route: 'form-validation-messages', description: 'Form validation', icon: '✅' },
        { name: 'Mask Toggle', route: 'mask-toggle', description: 'Mask toggle', icon: '👁️' },
        { name: 'Contextual Help', route: 'contextual-help', description: 'Contextual help', icon: '❓' }
      ]
    },
    {
      name: 'Feedback',
      icon: '💬',
      components: [
        { name: 'Modal', route: 'modal', description: 'Modal dialog', icon: '🪟' },
        { name: 'Notification', route: 'notification', description: 'Notification', icon: '🔔' },
        { name: 'Tooltip', route: 'tooltip', description: 'Tooltip', icon: '💡' },
        { name: 'Confirm Dialog', route: 'confirm-dialog', description: 'Confirm dialog', icon: '❓' }
      ]
    },
    {
      name: 'Status',
      icon: '📌',
      components: [
        { name: 'Status Badge', route: 'status-badge', description: 'Status badge', icon: '🏷️' },
        { name: 'Empty State', route: 'empty-state', description: 'Empty state', icon: '📭' },
        { name: 'Error State', route: 'error-state', description: 'Error state', icon: '❌' }
      ]
    },
    {
      name: 'Loading',
      icon: '⏳',
      components: [
        { name: 'Loading', route: 'loading', description: 'Loading component', icon: '⏳' },
        { name: 'Spinner', route: 'spinner', description: 'Spinner', icon: '🌀' },
        { name: 'Loading Spinner', route: 'loading-spinner', description: 'Loading spinner', icon: '⚙️' },
        { name: 'Skeleton Loader', route: 'skeleton-loader', description: 'Skeleton loader', icon: '💀' }
      ]
    },
    {
      name: 'Other',
      icon: '🎨',
      components: [
        { name: 'Icon', route: 'icon', description: 'Material Icons', icon: '🎨' },
        { name: 'Avatar', route: 'avatar', description: 'Avatar', icon: '👤' },
        { name: 'Theme Toggle', route: 'theme-toggle', description: 'Theme toggle', icon: '🎨' },
        { name: 'Theme Switcher', route: 'theme-switcher', description: 'Theme switcher', icon: '🎨' },
        { name: 'Back to Top', route: 'back-to-top', description: 'Back to top', icon: '⬆️' }
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
        this.currentTheme = { mode: theme.mode, color: theme.color };
      })
    );

    // Track current route
    this.subscriptions.push(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          this.currentRoute = event.urlAfterRedirects.replace('/demo/', '');
        })
    );

    // Set initial route
    this.currentRoute = this.router.url.replace('/demo/', '');
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
  }

  toggleThemeMode(): void {
    this.themeService.toggleMode();
  }

  // Navigation
  navigateToComponent(route: string): void {
    this.router.navigate(['/demo', route]);
    this.closeSidebar();
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route || this.currentRoute.startsWith(route + '/');
  }
}

