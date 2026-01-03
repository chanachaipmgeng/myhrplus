/**
 * Devices Routing Module
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
    loadComponent: () => import('./device-list/device-list.component').then(m => m.DeviceListComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./device-form/device-form.component').then(m => m.DeviceFormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }

