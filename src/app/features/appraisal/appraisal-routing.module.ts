import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
import { AppraisalHistoryComponent } from './appraisal-history/appraisal-history.component';
import { AppraisalReportsComponent } from './appraisal-reports/appraisal-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'appraisals',
        pathMatch: 'full'
      },
      {
        path: 'appraisals',
        component: PerformanceAppraisalComponent
      },
      {
        path: 'appraisals/:id',
        component: PerformanceAppraisalComponent
      },
      {
        path: 'goals',
        component: GoalSettingComponent
      },
      {
        path: 'goals/:appraisalId',
        component: GoalSettingComponent
      },
      {
        path: 'reviews',
        component: ReviewManagementComponent
      },
      {
        path: 'reviews/:appraisalId',
        component: ReviewManagementComponent
      },
      {
        path: 'history',
        component: AppraisalHistoryComponent
      },
      {
        path: 'reports',
        component: AppraisalReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }

