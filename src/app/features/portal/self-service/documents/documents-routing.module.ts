import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pnd91Component } from './pnd91/pnd91.component';
import { Twi50Component } from './twi50/twi50.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pnd91',
    pathMatch: 'full'
  },
  {
    path: 'pnd91',
    component: Pnd91Component,
    data: {
      title: 'เอกสาร PND91',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ขอเอกสาร', route: '/portal/self-service/documents' },
        { label: 'PND91', route: '/portal/self-service/documents/pnd91' }
      ]
    }
  },
  {
    path: 'twi50',
    component: Twi50Component,
    data: {
      title: 'เอกสาร TWI50',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ขอเอกสาร', route: '/portal/self-service/documents' },
        { label: 'TWI50', route: '/portal/self-service/documents/twi50' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }

