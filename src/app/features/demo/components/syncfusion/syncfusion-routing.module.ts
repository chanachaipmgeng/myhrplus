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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncfusionRoutingModule { }

