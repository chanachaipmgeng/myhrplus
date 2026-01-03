/**
 * Parking Routing Module
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
    loadComponent: () => import('./parking-list/parking-list.component').then(m => m.ParkingListComponent)
  },
  {
    path: 'slots',
    loadComponent: () => import('./parking-slots/parking-slots.component').then(m => m.ParkingSlotsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }

