import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing personal module
    redirectTo: '/personal/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'dashboard',
    redirectTo: '/personal/home',
    pathMatch: 'full'
  },
  {
    path: 'master',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'family',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'work-history',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'education',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'training',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'statistics',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'processing',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'data',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'reports',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate personal module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

