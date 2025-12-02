import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing ta module
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'attendance',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'edit',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'leave',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'approve',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'history',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'overtime',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'approve',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'reports',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'attendance',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'leave',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate ta module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }

