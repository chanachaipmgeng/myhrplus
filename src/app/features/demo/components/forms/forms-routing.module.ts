import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'glass-input',
    pathMatch: 'full'
  },
  {
    path: 'glass-input',
    loadComponent: () => import('../glass-input-demo/glass-input-demo.component').then(m => m.GlassInputDemoComponent)
  },
  {
    path: 'glass-select',
    loadComponent: () => import('../glass-select-demo/glass-select-demo.component').then(m => m.GlassSelectDemoComponent)
  },
  {
    path: 'glass-checkbox',
    loadComponent: () => import('../glass-checkbox-demo/glass-checkbox-demo.component').then(m => m.GlassCheckboxDemoComponent)
  },
  {
    path: 'glass-radio',
    loadComponent: () => import('../glass-radio-demo/glass-radio-demo.component').then(m => m.GlassRadioDemoComponent)
  },
  {
    path: 'glass-textarea',
    loadComponent: () => import('../glass-textarea-demo/glass-textarea-demo.component').then(m => m.GlassTextareaDemoComponent)
  },
  {
    path: 'glass-switch',
    loadComponent: () => import('../glass-switch-demo/glass-switch-demo.component').then(m => m.GlassSwitchDemoComponent)
  },
  {
    path: 'form-validation-messages',
    loadComponent: () => import('../form-validation-messages-demo/form-validation-messages-demo.component').then(m => m.FormValidationMessagesDemoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

