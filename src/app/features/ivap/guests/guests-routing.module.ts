/**
 * Guests Routing Module
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
    loadComponent: () => import('./guest-list/guest-list.component').then(m => m.GuestListComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./guest-form/guest-form.component').then(m => m.GuestFormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }

