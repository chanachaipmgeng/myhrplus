/**
 * Verification Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sessions'
  },
  {
    path: 'sessions',
    loadComponent: () => import('./verification-sessions/verification-sessions.component').then(m => m.VerificationSessionsComponent)
  },
  {
    path: 'templates',
    loadComponent: () => import('./verification-templates/verification-templates.component').then(m => m.VerificationTemplatesComponent)
  },
  {
    path: 'config',
    loadComponent: () => import('./verification-config/verification-config.component').then(m => m.VerificationConfigComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }

