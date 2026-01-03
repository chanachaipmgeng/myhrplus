/**
 * Access Control Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'doors'
  },
  {
    path: 'doors',
    loadComponent: () => import('./door-list/door-list.component').then(m => m.DoorListComponent)
  },
  {
    path: 'rules',
    loadComponent: () => import('./access-rules/access-rules.component').then(m => m.AccessRulesComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule { }

