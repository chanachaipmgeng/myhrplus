/**
 * Notifications Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'notifications'
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notification-list/notification-list.component').then(m => m.NotificationListComponent)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alert-list/alert-list.component').then(m => m.AlertListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }

