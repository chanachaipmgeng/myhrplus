/**
 * Vehicles Routing Module
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
    loadComponent: () => import('./vehicle-list/vehicle-list.component').then(m => m.VehicleListComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./vehicle-form/vehicle-form.component').then(m => m.VehicleFormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }

