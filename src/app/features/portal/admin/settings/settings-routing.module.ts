import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing setting module
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'general',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  {
    path: 'modules',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      {
        path: 'create',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'permissions',
    children: [
      {
        path: '',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      {
        path: 'manage',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      {
        path: 'roles',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate setting module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

