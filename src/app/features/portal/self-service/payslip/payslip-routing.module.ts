import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayslipViewComponent } from './payslip-view/payslip-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: PayslipViewComponent,
    data: {
      title: 'สลิปเงินเดือน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สลิปเงินเดือน', route: '/portal/self-service/payslip' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayslipRoutingModule { }

