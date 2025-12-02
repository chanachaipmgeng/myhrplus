import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing appraisal module
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'create',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  {
    path: 'list',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  {
    path: 'results',
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'appraisal',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      },
      {
        path: 'results',
        redirectTo: '/appraisal/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate appraisal module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }

