import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoIndexComponent } from './demo-index/demo-index.component';

/**
 * Demo Routing Module
 *
 * Main routing module for demo feature.
 * Uses lazy loading with sub-modules for better organization and performance.
 *
 * Structure:
 * - /forms/* - Form components (glass-input, glass-select, etc.)
 * - /ui/* - UI components (glass-card, modal, tabs, etc.)
 * - /data-display/* - Data display components (statistics, calendar, grids, etc.)
 * - /syncfusion/* - Syncfusion components (scheduler, chart, editors, etc.)
 * - /advanced/* - Advanced components (file-upload, ai-assist, etc.)
 */
const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: '',
        component: DemoIndexComponent
      },
      // Category-based routes (new structure)
      {
        path: 'forms',
        loadChildren: () => import('./components/forms/forms-routing.module').then(m => m.FormsRoutingModule)
      },
      {
        path: 'ui',
        loadChildren: () => import('./components/ui/ui-routing.module').then(m => m.UiRoutingModule)
      },
      {
        path: 'data-display',
        loadChildren: () => import('./components/data-display/data-display-routing.module').then(m => m.DataDisplayRoutingModule)
      },
      {
        path: 'syncfusion',
        loadChildren: () => import('./components/syncfusion/syncfusion-routing.module').then(m => m.SyncfusionRoutingModule)
      },
      {
        path: 'advanced',
        loadChildren: () => import('./components/advanced/advanced-routing.module').then(m => m.AdvancedRoutingModule)
      },
      // ============================================
      // Backward Compatibility: Legacy Route Redirects
      // ============================================
      // NOTE: These redirects maintain backward compatibility for old demo routes.
      // They redirect direct component routes to the new category-based structure.
      //
      // ⚠️ DEPRECATED: These redirects may be removed in the future.
      // Consider monitoring usage before removal.
      // If no external links or bookmarks use them, they can be safely removed.
      //
      // Forms
      { path: 'glass-input', redirectTo: 'forms/glass-input', pathMatch: 'full' },
      { path: 'glass-select', redirectTo: 'forms/glass-select', pathMatch: 'full' },
      { path: 'glass-checkbox', redirectTo: 'forms/glass-checkbox', pathMatch: 'full' },
      { path: 'glass-radio', redirectTo: 'forms/glass-radio', pathMatch: 'full' },
      { path: 'glass-textarea', redirectTo: 'forms/glass-textarea', pathMatch: 'full' },
      { path: 'glass-switch', redirectTo: 'forms/glass-switch', pathMatch: 'full' },
      { path: 'form-validation-messages', redirectTo: 'forms/form-validation-messages', pathMatch: 'full' },
      // UI Components
      { path: 'glass-card', redirectTo: 'ui/glass-card', pathMatch: 'full' },
      { path: 'glass-button', redirectTo: 'ui/glass-button', pathMatch: 'full' },
      { path: 'modal', redirectTo: 'ui/modal', pathMatch: 'full' },
      { path: 'tabs', redirectTo: 'ui/tabs', pathMatch: 'full' },
      { path: 'progress-bar', redirectTo: 'ui/progress-bar', pathMatch: 'full' },
      { path: 'rating', redirectTo: 'ui/rating', pathMatch: 'full' },
      { path: 'loading', redirectTo: 'ui/loading', pathMatch: 'full' },
      { path: 'empty-state', redirectTo: 'ui/empty-state', pathMatch: 'full' },
      { path: 'notification', redirectTo: 'ui/notification', pathMatch: 'full' },
      { path: 'tooltip', redirectTo: 'ui/tooltip', pathMatch: 'full' },
      { path: 'spinner', redirectTo: 'ui/spinner', pathMatch: 'full' },
      { path: 'theme-toggle', redirectTo: 'ui/theme-toggle', pathMatch: 'full' },
      { path: 'avatar', redirectTo: 'ui/avatar', pathMatch: 'full' },
      { path: 'status-badge', redirectTo: 'ui/status-badge', pathMatch: 'full' },
      { path: 'error-state', redirectTo: 'ui/error-state', pathMatch: 'full' },
      { path: 'confirm-dialog', redirectTo: 'ui/confirm-dialog', pathMatch: 'full' },
      { path: 'breadcrumbs', redirectTo: 'ui/breadcrumbs', pathMatch: 'full' },
      { path: 'stepper', redirectTo: 'ui/stepper', pathMatch: 'full' },
      { path: 'timeline', redirectTo: 'ui/timeline', pathMatch: 'full' },
      { path: 'search-filter', redirectTo: 'ui/search-filter', pathMatch: 'full' },
      { path: 'date-range-picker', redirectTo: 'ui/date-range-picker', pathMatch: 'full' },
      { path: 'skeleton-loader', redirectTo: 'ui/skeleton-loader', pathMatch: 'full' },
      { path: 'loading-spinner', redirectTo: 'ui/loading', pathMatch: 'full' },
      { path: 'page-header', redirectTo: 'ui/page-header', pathMatch: 'full' },
      { path: 'page-layout', redirectTo: 'ui/page-layout', pathMatch: 'full' },
      { path: 'icon', redirectTo: 'ui/icon', pathMatch: 'full' },
      { path: 'mask-toggle', redirectTo: 'ui/mask-toggle', pathMatch: 'full' },
      { path: 'back-to-top', redirectTo: 'ui/back-to-top', pathMatch: 'full' },
      { path: 'pagination', redirectTo: 'ui/pagination', pathMatch: 'full' },
      { path: 'chip', redirectTo: 'ui/chip', pathMatch: 'full' },
      { path: 'alert', redirectTo: 'ui/alert', pathMatch: 'full' },
      { path: 'accordion', redirectTo: 'ui/accordion', pathMatch: 'full' },
      { path: 'divider', redirectTo: 'ui/divider', pathMatch: 'full' },
      // Data Display
      { path: 'statistics-card', redirectTo: 'data-display/statistics-card', pathMatch: 'full' },
      { path: 'statistics-grid', redirectTo: 'data-display/statistics-grid', pathMatch: 'full' },
      { path: 'calendar', redirectTo: 'data-display/calendar', pathMatch: 'full' },
      { path: 'pivot-table', redirectTo: 'data-display/pivot-table', pathMatch: 'full' },
      { path: 'data-grid', redirectTo: 'data-display/data-grid', pathMatch: 'full' },
      { path: 'tree-grid', redirectTo: 'data-display/tree-grid', pathMatch: 'full' },
      // Syncfusion
      { path: 'scheduler', redirectTo: 'syncfusion/scheduler', pathMatch: 'full' },
      { path: 'chart', redirectTo: 'syncfusion/chart', pathMatch: 'full' },
      { path: 'rich-text-editor', redirectTo: 'syncfusion/rich-text-editor', pathMatch: 'full' },
      { path: 'query-builder', redirectTo: 'syncfusion/query-builder', pathMatch: 'full' },
      { path: 'document-editor', redirectTo: 'syncfusion/document-editor', pathMatch: 'full' },
      { path: 'speech-to-text', redirectTo: 'syncfusion/speech-to-text', pathMatch: 'full' },
      { path: 'image-editor', redirectTo: 'syncfusion/image-editor', pathMatch: 'full' },
      { path: 'spreadsheet', redirectTo: 'syncfusion/spreadsheet', pathMatch: 'full' },
      { path: 'pdf-viewer', redirectTo: 'syncfusion/pdf-viewer', pathMatch: 'full' },
      { path: 'diagrams', redirectTo: 'syncfusion/diagrams', pathMatch: 'full' },
      { path: 'signature', redirectTo: 'syncfusion/signature', pathMatch: 'full' },
      { path: 'carousel', redirectTo: 'syncfusion/carousel', pathMatch: 'full' },
      { path: 'gantt', redirectTo: 'syncfusion/gantt', pathMatch: 'full' },
      { path: 'file-manager', redirectTo: 'syncfusion/file-manager', pathMatch: 'full' },
      { path: 'syncfusion-uploader', redirectTo: 'syncfusion/syncfusion-uploader', pathMatch: 'full' },
      { path: 'datepicker', redirectTo: 'syncfusion/datepicker', pathMatch: 'full' },
      { path: 'datetime-picker', redirectTo: 'syncfusion/datetime-picker', pathMatch: 'full' },
      { path: 'timepicker', redirectTo: 'syncfusion/timepicker', pathMatch: 'full' },
      { path: 'combobox', redirectTo: 'syncfusion/combobox', pathMatch: 'full' },
      { path: 'dropdown-list', redirectTo: 'syncfusion/dropdown-list', pathMatch: 'full' },
      { path: 'multiselect-dropdown', redirectTo: 'syncfusion/multiselect-dropdown', pathMatch: 'full' },
      { path: 'listview', redirectTo: 'syncfusion/listview', pathMatch: 'full' },
      { path: 'splitter', redirectTo: 'syncfusion/splitter', pathMatch: 'full' },
      { path: 'dialog', redirectTo: 'syncfusion/dialog', pathMatch: 'full' },
      { path: 'message', redirectTo: 'syncfusion/message', pathMatch: 'full' },
      { path: 'input-mask', redirectTo: 'syncfusion/input-mask', pathMatch: 'full' },
      { path: 'numeric-textbox', redirectTo: 'syncfusion/numeric-textbox', pathMatch: 'full' },
      { path: 'color-picker', redirectTo: 'syncfusion/color-picker', pathMatch: 'full' },
      { path: 'slider', redirectTo: 'syncfusion/slider', pathMatch: 'full' },
      { path: 'otp-input', redirectTo: 'syncfusion/otp-input', pathMatch: 'full' },
      { path: 'split-button', redirectTo: 'syncfusion/split-button', pathMatch: 'full' },
      { path: 'toolbar', redirectTo: 'syncfusion/toolbar', pathMatch: 'full' },
      { path: 'context-menu', redirectTo: 'syncfusion/context-menu', pathMatch: 'full' },
      { path: 'menu-bar', redirectTo: 'syncfusion/menu-bar', pathMatch: 'full' },
      { path: 'treeview', redirectTo: 'syncfusion/treeview', pathMatch: 'full' },
      { path: 'kanban', redirectTo: 'syncfusion/kanban', pathMatch: 'full' },
      { path: 'chat-ui', redirectTo: 'syncfusion/chat-ui', pathMatch: 'full' },
      { path: 'dashboard-layout', redirectTo: 'syncfusion/dashboard-layout', pathMatch: 'full' },
      // Advanced
      { path: 'file-upload', redirectTo: 'advanced/file-upload', pathMatch: 'full' },
      { path: 'image-upload', redirectTo: 'advanced/image-upload', pathMatch: 'full' },
      { path: 'autocomplete', redirectTo: 'advanced/autocomplete', pathMatch: 'full' },
      { path: 'smart-textarea', redirectTo: 'advanced/smart-textarea', pathMatch: 'full' },
      { path: 'ai-assist-view', redirectTo: 'advanced/ai-assist-view', pathMatch: 'full' },
      { path: 'contextual-help', redirectTo: 'advanced/contextual-help', pathMatch: 'full' },
      { path: 'progressive-disclosure', redirectTo: 'advanced/progressive-disclosure', pathMatch: 'full' },
      { path: 'omni-search', redirectTo: 'advanced/omni-search', pathMatch: 'full' },
      { path: 'context-switcher', redirectTo: 'advanced/context-switcher', pathMatch: 'full' },
      { path: 'nested-menu-accordion', redirectTo: 'advanced/nested-menu-accordion', pathMatch: 'full' },
      { path: 'fullscreen', redirectTo: 'advanced/fullscreen', pathMatch: 'full' },
      { path: 'sweetalert2', redirectTo: 'advanced/sweetalert2', pathMatch: 'full' },
      { path: 'migration-guide', redirectTo: 'advanced/migration-guide', pathMatch: 'full' },
      { path: 'stagger', redirectTo: 'advanced/stagger', pathMatch: 'full' },
      { path: 'ng-select', redirectTo: 'advanced/ng-select', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }


