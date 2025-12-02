import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing payroll module
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // 1. Transaction (PR03A)
  {
    path: 'transaction',
    children: [
      {
        path: '',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      // 1.1 Before Processing
      {
        path: 'before-processing',
        children: [
          {
            path: '',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'employee-working-hour',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'irregular-income-deduction',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'other-incomes-deductions',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'generate-salary-retroact',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'fixed-income-deduction',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'irregular-income-deduction-emp',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          },
          {
            path: 'transfer-employee-info',
            redirectTo: '/payroll/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.2 Run Processing
      {
        path: 'run-processing',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      // 1.3 After Processing
      {
        path: 'after-processing',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. E-Payslip
  {
    path: 'e-payslip',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // 3. Text File Transfer
  {
    path: 'text-file-transfer',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // 4. Options
  {
    path: 'options',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // 5. Setup
  {
    path: 'setup',
    redirectTo: '/payroll/home',
    pathMatch: 'full'
  },
  // 6. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/payroll/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate payroll module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
