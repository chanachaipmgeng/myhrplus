/**
 * Biometric Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'face-enrollment'
  },
  {
    path: 'face-enrollment',
    loadComponent: () => import('./face-enrollment/face-enrollment.component').then(m => m.FaceEnrollmentComponent)
  },
  {
    path: 'biometric-data',
    loadComponent: () => import('./biometric-data/biometric-data.component').then(m => m.BiometricDataComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiometricRoutingModule { }

