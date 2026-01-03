/**
 * System Administration Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'settings'
  },
  {
    path: 'settings',
    loadComponent: () => import('./system-settings/system-settings.component').then(m => m.SystemSettingsComponent)
  },
  {
    path: 'logs',
    loadComponent: () => import('./system-logs/system-logs.component').then(m => m.SystemLogsComponent)
  },
  {
    path: 'safety',
    loadComponent: () => import('./safety-dashboard/safety-dashboard.component').then(m => m.SafetyDashboardComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }

