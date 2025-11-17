import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { RecruitRoutingModule } from './recruit-routing.module';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { InterviewSchedulingComponent } from './interview-scheduling/interview-scheduling.component';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { RecruitmentReportsComponent } from './recruitment-reports/recruitment-reports.component';

@NgModule({
  declarations: [
    JobPostingsComponent,
    JobDetailsComponent,
    ApplicationManagementComponent,
    InterviewSchedulingComponent,
    CandidateManagementComponent,
    CandidateDetailsComponent,
    RecruitmentReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    RecruitRoutingModule
  ]
})
export class RecruitModule { }

