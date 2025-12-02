import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing appraisal module
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 1. Appraisal Type (AS03A)
  {
    path: 'appraisal-type',
    children: [
      {
        path: '',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'appraisal-type-table',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Appraisal Grade (AS04A)
  {
    path: 'appraisal-grade',
    children: [
      {
        path: '',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'appraisal-grade',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'grade-table',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'score-deduct-criteria',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'group-grade-salary-adjustment',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 3. Appraisal Topic (AS05A)
  {
    path: 'appraisal-topic',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 4. Appraisal Form (AS06A)
  {
    path: 'appraisal-form',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 5. Appraisal Form Type (AS08A)
  {
    path: 'appraisal-form-type',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 6. Appraisal Document (AS07A)
  {
    path: 'appraisal-document',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 7. Other Data Setup
  {
    path: 'other-data-setup',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 8. Appraisal Period
  {
    path: 'appraisal-period',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 9. Admin
  {
    path: 'admin',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 10. OKR Appraisal
  {
    path: 'okr-appraisal',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // 11. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate appraisal module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }
