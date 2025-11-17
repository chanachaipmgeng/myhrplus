import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { WelfareRoutingModule } from './welfare-routing.module';
import { WelfareBenefitsComponent } from './welfare-benefits/welfare-benefits.component';
import { BenefitEnrollmentComponent } from './benefit-enrollment/benefit-enrollment.component';
import { BenefitHistoryComponent } from './benefit-history/benefit-history.component';
import { WelfareReportsComponent } from './welfare-reports/welfare-reports.component';
import { BenefitDetailsComponent } from './benefit-details/benefit-details.component';

@NgModule({
  declarations: [
    WelfareBenefitsComponent,
    BenefitEnrollmentComponent,
    BenefitHistoryComponent,
    WelfareReportsComponent,
    BenefitDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    WelfareRoutingModule
  ]
})
export class WelfareModule { }

