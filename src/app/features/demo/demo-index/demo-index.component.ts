import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

interface ComponentInfo {
  name: string;
  route: string;
  description: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-demo-index',
  standalone: true,
  imports: [CommonModule, RouterModule, GlassCardComponent],
  templateUrl: './demo-index.component.html',
  styleUrls: ['./demo-index.component.scss']
})
export class DemoIndexComponent {
  components: ComponentInfo[] = [
    // ============================================
    // Glass Components (Custom)
    // ============================================
    { name: 'Glass Card', route: 'glass-card', description: 'Glass morphism card component with variants', category: 'Glass', icon: '🪟' },
    { name: 'Glass Button', route: 'glass-button', description: 'Glass morphism button with variants and states', category: 'Glass', icon: '🔘' },
    { name: 'Glass Input', route: 'glass-input', description: 'Glass morphism input field with validation', category: 'Glass', icon: '📝' },
    { name: 'Glass Select', route: 'glass-select', description: 'Glass morphism select dropdown with search and multi-select', category: 'Glass', icon: '📋' },
    { name: 'Glass Checkbox', route: 'glass-checkbox', description: 'Glass morphism checkbox with validation', category: 'Glass', icon: '☑️' },
    { name: 'Glass Radio', route: 'glass-radio', description: 'Glass morphism radio button with validation', category: 'Glass', icon: '🔘' },
    { name: 'Glass Textarea', route: 'glass-textarea', description: 'Glass morphism textarea with auto-resize and counter', category: 'Glass', icon: '📄' },
    { name: 'Glass Switch', route: 'glass-switch', description: 'Glass morphism toggle switch component', category: 'Glass', icon: '🔀' },

    // ============================================
    // Smart Components (Syncfusion)
    // ============================================
    { name: 'Smart TextArea', route: 'smart-textarea', description: 'Intelligent textarea component with AI-powered suggestions and customizable features (Syncfusion)', category: 'Smart Components', icon: '💬' },

    // ============================================
    // Grids (Syncfusion)
    // ============================================
    { name: 'Data Grid', route: 'data-grid', description: 'Enterprise data grid with advanced features (Syncfusion)', category: 'Grids', icon: '📊' },
    { name: 'Pivot Table', route: 'pivot-table', description: 'Pivot table for data analysis (Syncfusion)', category: 'Grids', icon: '📊' },
    { name: 'Tree Grid', route: 'tree-grid', description: 'Hierarchical tree grid component with expand/collapse (Syncfusion)', category: 'Grids', icon: '🌳' },

    // ============================================
    // Interactive Chat (Syncfusion)
    // ============================================
    { name: 'AI Assist View', route: 'ai-assist-view', description: 'AI-powered assistant interface component with suggestions, prompt handling, and interactive chat features (Syncfusion)', category: 'Interactive Chat', icon: '🤖' },
    { name: 'Chat UI', route: 'chat-ui', description: 'Chat UI component for building interactive chat interfaces with message history and file attachments (Syncfusion)', category: 'Interactive Chat', icon: '💬' },

    // ============================================
    // File Viewers & Editors (Syncfusion)
    // ============================================
    { name: 'Rich Text Editor', route: 'rich-text-editor', description: 'Rich text editor component (Syncfusion)', category: 'File Viewers & Editors', icon: '✏️' },
    { name: 'Image Editor', route: 'image-editor', description: 'Image editing component with crop, filter, transform (Syncfusion)', category: 'File Viewers & Editors', icon: '🖼️' },
    { name: 'Document Editor', route: 'document-editor', description: 'Word-like document editor component (Syncfusion)', category: 'File Viewers & Editors', icon: '📄' },
    { name: 'PDF Viewer', route: 'pdf-viewer', description: 'PDF viewer component with annotation, form filling, and text search (Syncfusion)', category: 'File Viewers & Editors', icon: '📄' },

    // ============================================
    // Layout (Syncfusion + Custom)
    // ============================================
    { name: 'ListView', route: 'listview', description: 'ListView component for displaying a list of items with selection support (Syncfusion)', category: 'Layout', icon: '📋' },
    { name: 'Splitter', route: 'splitter', description: 'Splitter component for dividing container into resizable panes (Syncfusion)', category: 'Layout', icon: '📐' },
    { name: 'TreeView', route: 'treeview', description: 'TreeView component for displaying hierarchical data in a tree structure (Syncfusion)', category: 'Layout', icon: '🌳' },
    { name: 'Dashboard Layout', route: 'dashboard-layout', description: 'Dashboard Layout component for creating customizable dashboard layouts with drag-and-drop panels (Syncfusion)', category: 'Layout', icon: '📊' },
    { name: 'Toolbar', route: 'toolbar', description: 'Toolbar component for displaying action buttons and controls (Syncfusion)', category: 'Layout', icon: '🔧' },
    { name: 'Context Menu', route: 'context-menu', description: 'Context menu component for displaying menu on right-click (Syncfusion)', category: 'Layout', icon: '📋' },
    { name: 'Menu Bar', route: 'menu-bar', description: 'Menu bar component for displaying horizontal or vertical menu bars (Syncfusion)', category: 'Layout', icon: '📋' },
    { name: 'Avatar', route: 'avatar', description: 'Avatar component with status', category: 'Layout', icon: '👤' },
    { name: 'Tabs', route: 'tabs', description: 'Tab navigation component', category: 'Layout', icon: '📑' },
    { name: 'Breadcrumbs', route: 'breadcrumbs', description: 'Breadcrumb navigation', category: 'Layout', icon: '🍞' },
    { name: 'Stepper', route: 'stepper', description: 'Step-by-step navigation component', category: 'Layout', icon: '👣' },
    { name: 'Accordion', route: 'accordion', description: 'Accordion component for collapsible content sections', category: 'Layout', icon: '📑' },
    { name: 'Carousel', route: 'carousel', description: 'Carousel component for displaying slides with navigation and autoplay (Syncfusion)', category: 'Layout', icon: '🎠' },
    { name: 'Timeline', route: 'timeline', description: 'Timeline component for displaying events', category: 'Layout', icon: '⏱️' },
    { name: 'File Manager', route: 'file-manager', description: 'File management component for browsing, uploading, downloading, and managing files and folders (Syncfusion)', category: 'Layout', icon: '📁' },
    { name: 'Tooltip', route: 'tooltip', description: 'Tooltip component', category: 'Layout', icon: '💡' },
    { name: 'Page Layout', route: 'page-layout', description: 'Standard page layout with header, breadcrumb, and actions', category: 'Layout', icon: '📄' },
    { name: 'Page Header', route: 'page-header', description: 'Page header with title, subtitle, breadcrumbs, and actions', category: 'Layout', icon: '📋' },
    { name: 'Progressive Disclosure', route: 'progressive-disclosure', description: 'Expand/collapse component with animations', category: 'Layout', icon: '📖' },
    { name: 'Context Switcher', route: 'context-switcher', description: 'Context switcher for switching between menu contexts', category: 'Layout', icon: '🔄' },
    { name: 'Nested Menu Accordion', route: 'nested-menu-accordion', description: 'Nested menu accordion with expand/collapse functionality', category: 'Layout', icon: '📋' },
    { name: 'Divider', route: 'divider', description: 'Divider component for separating content sections', category: 'Layout', icon: '➖' },

    // ============================================
    // Data Visualization (Syncfusion)
    // ============================================
    { name: 'Chart', route: 'chart', description: 'Chart component for data visualization (Syncfusion)', category: 'Data Visualization', icon: '📈' },
    { name: 'Diagrams', route: 'diagrams', description: 'Diagram component for flowcharts, organizational charts, and network diagrams (Syncfusion)', category: 'Data Visualization', icon: '📊' },

    // ============================================
    // Project Management (Syncfusion)
    // ============================================
    { name: 'Gantt Chart', route: 'gantt', description: 'Project management Gantt chart component with timeline, dependencies, and progress tracking (Syncfusion)', category: 'Project Management', icon: '📅' },
    { name: 'Kanban Board', route: 'kanban', description: 'Kanban Board component for managing tasks and workflows with drag and drop (Syncfusion)', category: 'Project Management', icon: '📋' },
    { name: 'Statistics Card', route: 'statistics-card', description: 'Card for displaying statistics with icons', category: 'Data Visualization', icon: '📊' },
    { name: 'Statistics Grid', route: 'statistics-grid', description: 'Grid layout for statistics cards', category: 'Data Visualization', icon: '📈' },
    { name: 'Pagination', route: 'pagination', description: 'Pagination component for navigating through large datasets', category: 'Data Visualization', icon: '📄' },

    // ============================================
    // Buttons (Syncfusion + Custom)
    // ============================================
    { name: 'Chip', route: 'chip', description: 'Chip component for displaying tags and removable items', category: 'Buttons', icon: '🏷️' },
    { name: 'Split Button', route: 'split-button', description: 'Split button component combining primary button with dropdown menu (Syncfusion)', category: 'Buttons', icon: '🔀' },

    // ============================================
    // Calendars (Syncfusion + Custom)
    // ============================================
    { name: 'Scheduler', route: 'scheduler', description: 'Scheduler component for calendar and events (Syncfusion)', category: 'Calendars', icon: '📆' },
    { name: 'Calendar', route: 'calendar', description: 'Calendar component with events management', category: 'Calendars', icon: '📅' },
    { name: 'Date Range Picker', route: 'date-range-picker', description: 'Date range picker component', category: 'Calendars', icon: '📅' },
    { name: 'DatePicker', route: 'datepicker', description: 'Date picker component for selecting dates (Syncfusion)', category: 'Calendars', icon: '📅' },
    { name: 'DateTime Picker', route: 'datetime-picker', description: 'Date and time picker component (Syncfusion)', category: 'Calendars', icon: '📅' },
    { name: 'TimePicker', route: 'timepicker', description: 'Time picker component for selecting time (Syncfusion)', category: 'Calendars', icon: '⏰' },

    // ============================================
    // Inputs (Syncfusion + Custom)
    // ============================================
    { name: 'Signature', route: 'signature', description: 'Digital signature pad component for capturing signatures (Syncfusion)', category: 'Inputs', icon: '✍️' },
    { name: 'Speech to Text', route: 'speech-to-text', description: 'Speech to text conversion component (Syncfusion)', category: 'Inputs', icon: '🎤' },
    { name: 'Rating', route: 'rating', description: 'Star and heart rating component', category: 'Inputs', icon: '⭐' },
    { name: 'Input Mask', route: 'input-mask', description: 'Input mask component for formatting input with predefined patterns (Syncfusion)', category: 'Inputs', icon: '🎭' },
    { name: 'Numeric TextBox', route: 'numeric-textbox', description: 'Numeric textbox component with spinner buttons and number formatting (Syncfusion)', category: 'Inputs', icon: '🔢' },
    { name: 'Color Picker', route: 'color-picker', description: 'Color picker component with Picker and Palette modes (Syncfusion)', category: 'Inputs', icon: '🎨' },
    { name: 'Slider', route: 'slider', description: 'Slider component for selecting numeric values by dragging (Syncfusion)', category: 'Inputs', icon: '🎚️' },
    { name: 'OTP Input', route: 'otp-input', description: 'OTP input component for entering one-time passwords (Syncfusion)', category: 'Inputs', icon: '🔐' },
    { name: 'File Upload', route: 'file-upload', description: 'File upload component', category: 'Inputs', icon: '📁' },
    { name: 'Image Upload', route: 'image-upload', description: 'Image upload component', category: 'Inputs', icon: '🖼️' },
    { name: 'Syncfusion Uploader', route: 'syncfusion-uploader', description: 'File upload component with drag & drop, progress tracking, pause/resume, and multiple file support (Syncfusion)', category: 'Inputs', icon: '📤' },
    { name: 'Search Filter', route: 'search-filter', description: 'Search and filter component', category: 'Inputs', icon: '🔍' },
    { name: 'Mask Toggle', route: 'mask-toggle', description: 'Toggle masked/unmasked display of sensitive data (PDPA/GDPR compliance)', category: 'Inputs', icon: '👁️' },

    // ============================================
    // Forms (Syncfusion + Custom)
    // ============================================
    { name: 'Query Builder', route: 'query-builder', description: 'Query builder component for creating filter conditions (Syncfusion)', category: 'Forms', icon: '🔍' },
    { name: 'Form Validation Messages', route: 'form-validation-messages', description: 'Form validation messages component', category: 'Forms', icon: '✅' },

    // ============================================
    // Dropdowns (Syncfusion)
    // ============================================
    { name: 'Autocomplete', route: 'autocomplete', description: 'Autocomplete input component with filtering, highlighting, and customizable suggestions (Syncfusion)', category: 'Dropdowns', icon: '🔍' },
    { name: 'ComboBox', route: 'combobox', description: 'ComboBox component combining text box and dropdown list with custom value support (Syncfusion)', category: 'Dropdowns', icon: '🔽' },
    { name: 'Dropdown List', route: 'dropdown-list', description: 'Dropdown list component for selecting a single value (Syncfusion)', category: 'Dropdowns', icon: '🔽' },
    { name: 'MultiSelect Dropdown', route: 'multiselect-dropdown', description: 'MultiSelect dropdown component for selecting multiple values (Syncfusion)', category: 'Dropdowns', icon: '🔽' },
    { name: 'NgSelect', route: 'ng-select', description: 'NgSelect dropdown component with search, multi-select, and custom templates', category: 'Dropdowns', icon: '🔽' },

    // ============================================
    // Navigation (Syncfusion + Custom)
    // ============================================
    // Already included in Layout section above

    // ============================================
    // Notifications (Syncfusion + Custom)
    // ============================================
    { name: 'Progress Bar', route: 'progress-bar', description: 'Progress bar with variants', category: 'Notifications', icon: '📊' },
    { name: 'Skeleton Loader', route: 'skeleton-loader', description: 'Skeleton loading placeholder', category: 'Notifications', icon: '💀' },
    { name: 'Message', route: 'message', description: 'Message component for displaying inline messages with severity types (Syncfusion)', category: 'Notifications', icon: '💬' },

    // ============================================
    // Feedback (Custom)
    // ============================================
    { name: 'Modal', route: 'modal', description: 'Modal dialog component', category: 'Feedback', icon: '🪟' },
    { name: 'Dialog', route: 'dialog', description: 'Dialog component for modal dialogs, alerts, and confirmations (Syncfusion)', category: 'Feedback', icon: '🪟' },
    { name: 'Notification', route: 'notification', description: 'Toast notification component', category: 'Feedback', icon: '🔔' },
    { name: 'Confirm Dialog', route: 'confirm-dialog', description: 'Confirmation dialog component', category: 'Feedback', icon: '❓' },
    { name: 'Alert', route: 'alert', description: 'Inline alert component for displaying important messages', category: 'Feedback', icon: '⚠️' },
    { name: 'SweetAlert2', route: 'sweetalert2', description: 'SweetAlert2 integration for beautiful alert dialogs', category: 'Feedback', icon: '🎨' },

    // ============================================
    // Status (Custom)
    // ============================================
    { name: 'Status Badge', route: 'status-badge', description: 'Status badge with variants', category: 'Status', icon: '🏷️' },
    { name: 'Empty State', route: 'empty-state', description: 'Empty state component', category: 'Status', icon: '📭' },
    { name: 'Error State', route: 'error-state', description: 'Error state component', category: 'Status', icon: '❌' },

    // ============================================
    // Loading (Custom)
    // ============================================
    { name: 'Loading', route: 'loading', description: 'Complete guide to all loading components (Local, Global, Spinner, Skeleton)', category: 'Loading', icon: '⏳' },
    { name: 'Spinner', route: 'spinner', description: 'Spinner component with sizes', category: 'Loading', icon: '🌀' },

    // ============================================
    // Other (Custom)
    // ============================================
    { name: 'Icon', route: 'icon', description: 'Material Icons wrapper component', category: 'Other', icon: '🎨' },
    { name: 'Theme Toggle', route: 'theme-toggle', description: 'Theme mode and color toggle', category: 'Other', icon: '🎨' },
    { name: 'Back to Top', route: 'back-to-top', description: 'Back to top button component with smooth scroll', category: 'Other', icon: '⬆️' },
    { name: 'Fullscreen', route: 'fullscreen', description: 'Fullscreen API component for entering/exiting fullscreen mode', category: 'Other', icon: '⛶' },
    { name: 'Omni Search', route: 'omni-search', description: 'Universal search component for searching across menus and routes', category: 'Other', icon: '🔍' },
    { name: 'Contextual Help', route: 'contextual-help', description: 'Contextual help component with tooltips', category: 'Other', icon: '❓' },
    { name: 'Migration Guide', route: 'migration-guide', description: 'JSP to Angular migration guide with component mapping and best practices', category: 'Other', icon: '📚' }
  ];

  get categories(): string[] {
    return [...new Set(this.components.map(c => c.category))];
  }

  getComponentsByCategory(category: string): ComponentInfo[] {
    return this.components.filter(c => c.category === category);
  }
}
