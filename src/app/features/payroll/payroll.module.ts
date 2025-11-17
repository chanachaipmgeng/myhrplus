import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { PayrollRoutingModule } from './payroll-routing.module';
import { PayslipViewerComponent } from './payslip-viewer/payslip-viewer.component';
import { TaxInformationComponent } from './tax-information/tax-information.component';
import { DeductionManagementComponent } from './deduction-management/deduction-management.component';
import { PayrollReportsComponent } from './payroll-reports/payroll-reports.component';

@NgModule({
  declarations: [
    PayslipViewerComponent,
    TaxInformationComponent,
    DeductionManagementComponent,
    PayrollReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }

