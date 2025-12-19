import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PayslipRoutingModule } from './payslip-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { PayslipViewComponent } from './payslip-view/payslip-view.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PayslipRoutingModule,
    // SharedModule,
    // Standalone components
    PayslipViewComponent
  ]
})
export class PayslipModule { }

