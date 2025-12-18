import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing ta module
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 1. Daily Attendance (TA01A051)
  {
    path: 'daily-attendance',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'daily',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'working-time-detail',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'working-time-detail-history',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Transaction (TA01A02)
  {
    path: 'transaction',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'forget-punch-time',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'working-hour-request',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'work-hour-request-by-supervisor',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  },
  // 3. Data Before Processing
  {
    path: 'data-before-processing',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 4. On Process
  {
    path: 'on-process',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 5. Data After Processing
  {
    path: 'data-after-processing',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 6. History
  {
    path: 'history',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 7. Options
  {
    path: 'options',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 8. Setup
  {
    path: 'setup',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 9. OT Scope
  {
    path: 'ot-scope',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 10. Roster
  {
    path: 'roster',
    redirectTo: '/ta/home',
    pathMatch: 'full'
  },
  // 11. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/ta/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate ta module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
