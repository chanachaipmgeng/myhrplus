import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PayrollRoutingModule } from './payroll-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PayrollRoutingModule,
    // SharedModule
  ]
})
export class PayrollModule { }

