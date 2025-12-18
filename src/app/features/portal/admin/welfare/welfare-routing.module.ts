import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/welfare-dashboard.component').then(m => m.WelfareDashboardComponent),
    data: {
      title: 'Welfare Management',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'Welfare Management', route: '/portal/admin/welfare' }
      ]
    }
  },
  // 1. Master (WE01A01)
  {
    path: 'master',
    children: [
      {
        path: '',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'budget-group',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'budget-of-year',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'location-group',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'location',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'disease-accident',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'disease-accident-group',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'reference-document',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Nursing Room (WE05A)
  {
    path: 'nursing-room',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 3. Requisition (WE01A02)
  {
    path: 'requisition',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 4. History (WE01A03)
  {
    path: 'history',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 5. Process (WE01A04)
  {
    path: 'process',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 6. Webboard (WE02A)
  {
    path: 'webboard',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 7. Employee (WE03A)
  {
    path: 'employee',
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // 8. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate welfare module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelfareRoutingModule { }
