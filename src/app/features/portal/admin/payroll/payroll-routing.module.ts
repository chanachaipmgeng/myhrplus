import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing payroll module
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // Level 3-4 routes
  {
    path: 'calculate',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  {
    path: 'adjust',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  {
    path: 'payslip',
    children: [
      {
        path: '',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      {
        path: 'create',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      {
        path: 'view',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      {
        path: 'salary',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      {
        path: 'tax',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate payroll module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }

