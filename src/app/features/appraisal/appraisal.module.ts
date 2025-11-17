import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { AppraisalRoutingModule } from './appraisal-routing.module';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
import { AppraisalHistoryComponent } from './appraisal-history/appraisal-history.component';
import { AppraisalReportsComponent } from './appraisal-reports/appraisal-reports.component';

@NgModule({
  declarations: [
    PerformanceAppraisalComponent,
    GoalSettingComponent,
    ReviewManagementComponent,
    AppraisalHistoryComponent,
    AppraisalReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    AppraisalRoutingModule
  ]
})
export class AppraisalModule { }

