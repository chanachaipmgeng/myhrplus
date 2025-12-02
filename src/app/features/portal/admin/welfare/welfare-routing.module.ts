import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing welfare module
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'benefits',
    children: [
      {
        path: '',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'manage',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'benefits',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      },
      {
        path: 'usage',
        redirectTo: '/welfare/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate welfare module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelfareRoutingModule { }

