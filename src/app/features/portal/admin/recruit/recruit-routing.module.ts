import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing recruit module
    redirectTo: '/recruit/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'job-postings',
    children: [
      {
        path: '',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'create',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'candidates',
    children: [
      {
        path: '',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'evaluate',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'recruitment',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'candidates',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate recruit module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }

