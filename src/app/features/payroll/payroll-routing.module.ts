import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { PayslipViewerComponent } from './payslip-viewer/payslip-viewer.component';
import { TaxInformationComponent } from './tax-information/tax-information.component';
import { DeductionManagementComponent } from './deduction-management/deduction-management.component';
import { PayrollReportsComponent } from './payroll-reports/payroll-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'payslip',
        pathMatch: 'full'
      },
      {
        path: 'payslip',
        component: PayslipViewerComponent
      },
      {
        path: 'payslip/:year/:month',
        component: PayslipViewerComponent
      },
      {
        path: 'tax',
        component: TaxInformationComponent
      },
      {
        path: 'deductions',
        component: DeductionManagementComponent
      },
      {
        path: 'reports',
        component: PayrollReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }

