import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing company module
    redirectTo: '/company/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'profile',
    redirectTo: '/company/home',
    pathMatch: 'full'
  },
  {
    path: 'organization',
    redirectTo: '/company/home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    redirectTo: '/company/home',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'structure',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'positions',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'levels',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate company module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

