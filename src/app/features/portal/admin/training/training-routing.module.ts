import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing training module
    redirectTo: '/training/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'catalog',
    children: [
      {
        path: '',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'list',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'create',
        redirectTo: '/training/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'registration',
    children: [
      {
        path: '',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'register',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'history',
        redirectTo: '/training/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'training',
        redirectTo: '/training/home',
        pathMatch: 'full'
      },
      {
        path: 'participants',
        redirectTo: '/training/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate training module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }

