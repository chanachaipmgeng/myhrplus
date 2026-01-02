import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scheduler',
    pathMatch: 'full'
  },
  {
    path: 'scheduler',
    loadComponent: () => import('../scheduler-demo/scheduler-demo.component').then(m => m.SchedulerDemoComponent)
  },
  {
    path: 'chart',
    loadComponent: () => import('../chart-demo/chart-demo.component').then(m => m.ChartDemoComponent)
  },
  {
    path: 'rich-text-editor',
    loadComponent: () => import('../rich-text-editor-demo/rich-text-editor-demo.component').then(m => m.RichTextEditorDemoComponent)
  },
  {
    path: 'query-builder',
    loadComponent: () => import('../query-builder-demo/query-builder-demo.component').then(m => m.QueryBuilderDemoComponent)
  },
  {
    path: 'document-editor',
    loadComponent: () => import('../document-editor-demo/document-editor-demo.component').then(m => m.DocumentEditorDemoComponent)
  },
  {
    path: 'speech-to-text',
    loadComponent: () => import('../speech-to-text-demo/speech-to-text-demo.component').then(m => m.SpeechToTextDemoComponent)
  },
  {
    path: 'image-editor',
    loadComponent: () => import('../image-editor-demo/image-editor-demo.component').then(m => m.ImageEditorDemoComponent)
  },
  {
    path: 'spreadsheet',
    loadComponent: () => import('../spreadsheet-demo/spreadsheet-demo.component').then(m => m.SpreadsheetDemoComponent)
  },
  {
    path: 'pdf-viewer',
    loadComponent: () => import('../pdf-viewer-demo/pdf-viewer-demo.component').then(m => m.PdfViewerDemoComponent)
  },
  {
    path: 'diagrams',
    loadComponent: () => import('../diagrams-demo/diagrams-demo.component').then(m => m.DiagramsDemoComponent)
  },
  {
    path: 'signature',
    loadComponent: () => import('../signature-demo/signature-demo.component').then(m => m.SignatureDemoComponent)
  },
  {
    path: 'carousel',
    loadComponent: () => import('../carousel-demo/carousel-demo.component').then(m => m.CarouselDemoComponent)
  },
  {
    path: 'gantt',
    loadComponent: () => import('../gantt-demo/gantt-demo.component').then(m => m.GanttDemoComponent)
  },
  {
    path: 'file-manager',
    loadComponent: () => import('../file-manager-demo/file-manager-demo.component').then(m => m.FileManagerDemoComponent)
  },
  {
    path: 'syncfusion-uploader',
    loadComponent: () => import('../syncfusion-uploader-demo/syncfusion-uploader-demo.component').then(m => m.SyncfusionUploaderDemoComponent)
  },
  {
    path: 'datepicker',
    loadComponent: () => import('../datepicker-demo/datepicker-demo.component').then(m => m.DatepickerDemoComponent)
  },
  {
    path: 'datetime-picker',
    loadComponent: () => import('../datetime-picker-demo/datetime-picker-demo.component').then(m => m.DatetimePickerDemoComponent)
  },
  {
    path: 'timepicker',
    loadComponent: () => import('../timepicker-demo/timepicker-demo.component').then(m => m.TimepickerDemoComponent)
  },
  {
    path: 'combobox',
    loadComponent: () => import('../combobox-demo/combobox-demo.component').then(m => m.ComboboxDemoComponent)
  },
  {
    path: 'dropdown-list',
    loadComponent: () => import('../dropdown-list-demo/dropdown-list-demo.component').then(m => m.DropdownListDemoComponent)
  },
  {
    path: 'multiselect-dropdown',
    loadComponent: () => import('../multiselect-dropdown-demo/multiselect-dropdown-demo.component').then(m => m.MultiselectDropdownDemoComponent)
  },
  {
    path: 'listview',
    loadComponent: () => import('../listview-demo/listview-demo.component').then(m => m.ListviewDemoComponent)
  },
  {
    path: 'splitter',
    loadComponent: () => import('../splitter-demo/splitter-demo.component').then(m => m.SplitterDemoComponent)
  },
  {
    path: 'dialog',
    loadComponent: () => import('../dialog-demo/dialog-demo.component').then(m => m.DialogDemoComponent)
  },
  {
    path: 'message',
    loadComponent: () => import('../message-demo/message-demo.component').then(m => m.MessageDemoComponent)
  },
  {
    path: 'input-mask',
    loadComponent: () => import('../input-mask-demo/input-mask-demo.component').then(m => m.InputMaskDemoComponent)
  },
  {
    path: 'numeric-textbox',
    loadComponent: () => import('../numeric-textbox-demo/numeric-textbox-demo.component').then(m => m.NumericTextboxDemoComponent)
  },
  {
    path: 'color-picker',
    loadComponent: () => import('../color-picker-demo/color-picker-demo.component').then(m => m.ColorPickerDemoComponent)
  },
  {
    path: 'slider',
    loadComponent: () => import('../slider-demo/slider-demo.component').then(m => m.SliderDemoComponent)
  },
  {
    path: 'otp-input',
    loadComponent: () => import('../otp-input-demo/otp-input-demo.component').then(m => m.OtpInputDemoComponent)
  },
  {
    path: 'split-button',
    loadComponent: () => import('../split-button-demo/split-button-demo.component').then(m => m.SplitButtonDemoComponent)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('../toolbar-demo/toolbar-demo.component').then(m => m.ToolbarDemoComponent)
  },
  {
    path: 'context-menu',
    loadComponent: () => import('../context-menu-demo/context-menu-demo.component').then(m => m.ContextMenuDemoComponent)
  },
  {
    path: 'menu-bar',
    loadComponent: () => import('../menu-bar-demo/menu-bar-demo.component').then(m => m.MenuBarDemoComponent)
  },
  {
    path: 'treeview',
    loadComponent: () => import('../treeview-demo/treeview-demo.component').then(m => m.TreeviewDemoComponent)
  },
  {
    path: 'kanban',
    loadComponent: () => import('../kanban-demo/kanban-demo.component').then(m => m.KanbanDemoComponent)
  },
  {
    path: 'chat-ui',
    loadComponent: () => import('../chat-ui-demo/chat-ui-demo.component').then(m => m.ChatUiDemoComponent)
  },
  {
    path: 'dashboard-layout',
    loadComponent: () => import('../dashboard-layout-demo/dashboard-layout-demo.component').then(m => m.DashboardLayoutDemoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncfusionRoutingModule { }

