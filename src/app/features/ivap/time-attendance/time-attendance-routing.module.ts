/**
 * Time & Attendance Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'timestamps'
  },
  {
    path: 'timestamps',
    loadComponent: () => import('./timestamp-list/timestamp-list.component').then(m => m.TimestampListComponent)
  },
  {
    path: 'shifts',
    loadComponent: () => import('./shift-list/shift-list.component').then(m => m.ShiftListComponent)
  },
  {
    path: 'leaves',
    loadComponent: () => import('./leave-list/leave-list.component').then(m => m.LeaveListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeAttendanceRoutingModule { }

