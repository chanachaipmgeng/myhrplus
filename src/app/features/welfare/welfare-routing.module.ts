import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { WelfareBenefitsComponent } from './welfare-benefits/welfare-benefits.component';
import { BenefitEnrollmentComponent } from './benefit-enrollment/benefit-enrollment.component';
import { BenefitHistoryComponent } from './benefit-history/benefit-history.component';
import { WelfareReportsComponent } from './welfare-reports/welfare-reports.component';
import { BenefitDetailsComponent } from './benefit-details/benefit-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'benefits',
        pathMatch: 'full'
      },
      {
        path: 'benefits',
        component: WelfareBenefitsComponent
      },
      {
        path: 'benefits/:benefitId',
        component: BenefitDetailsComponent
      },
      {
        path: 'enroll',
        component: BenefitEnrollmentComponent
      },
      {
        path: 'enroll/:benefitId',
        component: BenefitEnrollmentComponent
      },
      {
        path: 'history',
        component: BenefitHistoryComponent
      },
      {
        path: 'reports',
        component: WelfareReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelfareRoutingModule { }

