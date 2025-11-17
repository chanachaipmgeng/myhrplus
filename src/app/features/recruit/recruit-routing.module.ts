import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { InterviewSchedulingComponent } from './interview-scheduling/interview-scheduling.component';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { RecruitmentReportsComponent } from './recruitment-reports/recruitment-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        component: JobPostingsComponent
      },
      {
        path: 'jobs/:jobId',
        component: JobDetailsComponent
      },
      {
        path: 'apply',
        component: ApplicationManagementComponent
      },
      {
        path: 'apply/:jobId',
        component: ApplicationManagementComponent
      },
      {
        path: 'applications',
        component: ApplicationManagementComponent
      },
      {
        path: 'applications/:applicationId',
        component: ApplicationManagementComponent
      },
      {
        path: 'interviews',
        component: InterviewSchedulingComponent
      },
      {
        path: 'interviews/:applicationId',
        component: InterviewSchedulingComponent
      },
      {
        path: 'candidates',
        component: CandidateManagementComponent
      },
      {
        path: 'candidates/:candidateId',
        component: CandidateDetailsComponent
      },
      {
        path: 'reports',
        component: RecruitmentReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }

