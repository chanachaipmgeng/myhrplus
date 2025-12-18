import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/training-dashboard.component').then(m => m.TrainingDashboardComponent),
    data: {
      title: 'Training Management',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'Training Management', route: '/portal/admin/training' }
      ]
    }
  },
  // 1. Setup (TR0101)
  {
    path: 'setup',
    children: [
      {
        path: '',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      // 1.1 Courses
      {
        path: 'courses',
        children: [
          {
            path: '',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'course-types',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'course-groups',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'course-categories',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'training-type-table',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'courses-program',
            redirectTo: '/training/home',
            pathMatch: 'full'
          },
          {
            path: 'dsd-training-type',
            redirectTo: '/training/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.2 Other Master
      {
        path: 'other-master',
        redirectTo: '/training/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Evaluation Process
  {
    path: 'evaluation-process',
    redirectTo: '/training/home',
    pathMatch: 'full'
  },
  // 3. Transaction
  {
    path: 'transaction',
    redirectTo: '/training/home',
    pathMatch: 'full'
  },
  // 4. History
  {
    path: 'history',
    redirectTo: '/training/home',
    pathMatch: 'full'
  },
  // 5. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/training/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate training module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
