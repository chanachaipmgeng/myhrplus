/**
 * Visitors Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadComponent: () => import('./visitor-list/visitor-list.component').then(m => m.VisitorListComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./visitor-form/visitor-form.component').then(m => m.VisitorFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./visitor-detail/visitor-detail.component').then(m => m.VisitorDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule { }

