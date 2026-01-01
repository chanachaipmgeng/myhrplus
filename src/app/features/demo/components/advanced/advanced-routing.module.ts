import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'file-upload',
    pathMatch: 'full'
  },
  {
    path: 'file-upload',
    loadComponent: () => import('../file-upload-demo/file-upload-demo.component').then(m => m.FileUploadDemoComponent)
  },
  {
    path: 'image-upload',
    loadComponent: () => import('../image-upload-demo/image-upload-demo.component').then(m => m.ImageUploadDemoComponent)
  },
  {
    path: 'autocomplete',
    loadComponent: () => import('../autocomplete-demo/autocomplete-demo.component').then(m => m.AutocompleteDemoComponent)
  },
  {
    path: 'smart-textarea',
    loadComponent: () => import('../smart-textarea-demo/smart-textarea-demo.component').then(m => m.SmartTextAreaDemoComponent)
  },
  {
    path: 'ai-assist-view',
    loadComponent: () => import('../ai-assist-view-demo/ai-assist-view-demo.component').then(m => m.AIAssistViewDemoComponent)
  },
  {
    path: 'contextual-help',
    loadComponent: () => import('../contextual-help-demo/contextual-help-demo.component').then(m => m.ContextualHelpDemoComponent)
  },
  {
    path: 'progressive-disclosure',
    loadComponent: () => import('../progressive-disclosure-demo/progressive-disclosure-demo.component').then(m => m.ProgressiveDisclosureDemoComponent)
  },
  {
    path: 'omni-search',
    loadComponent: () => import('../omni-search-demo/omni-search-demo.component').then(m => m.OmniSearchDemoComponent)
  },
  {
    path: 'context-switcher',
    loadComponent: () => import('../context-switcher-demo/context-switcher-demo.component').then(m => m.ContextSwitcherDemoComponent)
  },
  {
    path: 'nested-menu-accordion',
    loadComponent: () => import('../nested-menu-accordion-demo/nested-menu-accordion-demo.component').then(m => m.NestedMenuAccordionDemoComponent)
  },
  {
    path: 'fullscreen',
    loadComponent: () => import('../fullscreen-demo/fullscreen-demo.component').then(m => m.FullscreenDemoComponent)
  },
  {
    path: 'sweetalert2',
    loadComponent: () => import('../sweetalert2-demo/sweetalert2-demo.component').then(m => m.SweetAlert2DemoComponent)
  },
  {
    path: 'migration-guide',
    loadComponent: () => import('../migration-guide-demo/migration-guide-demo.component').then(m => m.MigrationGuideDemoComponent)
  },
  {
    path: 'stagger',
    loadComponent: () => import('../stagger-demo/stagger-demo.component').then(m => m.StaggerDemoComponent)
  },
  {
    path: 'ng-select',
    loadComponent: () => import('../ng-select-demo/ng-select-demo.component').then(m => m.NgSelectDemoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }

