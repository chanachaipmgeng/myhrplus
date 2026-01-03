/**
 * QR Code & RFID Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'qr-codes'
  },
  {
    path: 'qr-codes',
    loadComponent: () => import('./qr-code-list/qr-code-list.component').then(m => m.QrCodeListComponent)
  },
  {
    path: 'rfid-cards',
    loadComponent: () => import('./rfid-card-list/rfid-card-list.component').then(m => m.RfidCardListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrRfidRoutingModule { }

