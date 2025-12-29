import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ROUTES } from './core/constants/routes.constant';

const routes: Routes = [
  // Auth Routes
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },

  // Main Layout with AuthGuard
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // Default redirect to portal
      {
        path: '',
        redirectTo: 'portal',
        pathMatch: 'full'
      },

      // ============================================
      // Portal Group (Primary Routes)
      // ============================================
      {
        path: 'portal',
        loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
      },

      // ============================================
      // Legacy Routes - Redirect to Portal Structure
      // ============================================
      // Home → Portal
      {
        path: 'home',
        redirectTo: '/portal',
        pathMatch: 'full'
      },
      // Personal → Admin/Employees
      {
        path: 'personal',
        redirectTo: '/portal/admin/employees',
        pathMatch: 'full'
      },
      // TA → Admin/Time
      {
        path: 'ta',
        redirectTo: '/portal/admin/time',
        pathMatch: 'full'
      },
      // Payroll → Admin/Payroll
      {
        path: 'payroll',
        redirectTo: '/portal/admin/payroll',
        pathMatch: 'full'
      },
      // Training → Admin/Training
      {
        path: 'training',
        redirectTo: '/portal/admin/training',
        pathMatch: 'full'
      },
      // Appraisal → Admin/Appraisal
      {
        path: 'appraisal',
        redirectTo: '/portal/admin/appraisal',
        pathMatch: 'full'
      },
      // Recruit → Admin/Recruit
      {
        path: 'recruit',
        redirectTo: '/portal/admin/recruit',
        pathMatch: 'full'
      },
      // Welfare → Admin/Welfare
      {
        path: 'welfare',
        redirectTo: '/portal/admin/welfare',
        pathMatch: 'full'
      },
      // Company → Admin/Company
      {
        path: 'company',
        redirectTo: '/portal/admin/company',
        pathMatch: 'full'
      },
      // Setting → Admin/Settings
      {
        path: 'setting',
        redirectTo: '/portal/admin/settings',
        pathMatch: 'full'
      },

      // ============================================
      // Other Routes (TBD - might stay or migrate)
      // ============================================
      {
        path: 'workflow',
        loadChildren: () => import('./features/workflow/workflow.module').then(m => m.WorkflowModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./features/demo/demo.module').then(m => m.DemoModule)
    // Removed AuthGuard to allow access without login for demo purposes
  },
  {
    path: '**',
    redirectTo: ROUTES.PORTAL.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
