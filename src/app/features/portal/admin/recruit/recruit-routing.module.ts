import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing recruit module
    redirectTo: '/recruit/home',
    pathMatch: 'full'
  },
  // 1. Setup (RE01A01)
  {
    path: 'setup',
    children: [
      {
        path: '',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'basic-config',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'interview-committee',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'skill-level-config',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'source-of-job',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'candidate-status',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'urgency-status',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Process (RE01A02)
  {
    path: 'process',
    redirectTo: '/recruit/home',
    pathMatch: 'full'
  },
  // 3. Jobboard
  {
    path: 'jobboard',
    redirectTo: '/recruit/home',
    pathMatch: 'full'
  },
  // 4. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/recruit/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate recruit module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }
