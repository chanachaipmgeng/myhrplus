import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollHomeComponent } from './payroll-home/payroll-home.component';
import { ROUTES } from '@core/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PayrollHomeComponent,
    data: {
      title: 'Payroll Management Home',
      breadcrumbs: [
        { label: 'Payroll Management', route: ROUTES.LEGACY.PAYROLL.BASE },
        { label: 'Home' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
