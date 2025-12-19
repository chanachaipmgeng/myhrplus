import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyDashboardComponent
  },
  {
    path: 'human-resources',
    children: [
      {
        path: '',
        loadComponent: () => import('./human-resources/human-resources-list.component').then(m => m.HumanResourcesListComponent)
      },
      {
        path: 'company-type',
        loadComponent: () => import('./human-resources/company-type/company-type-list.component').then(m => m.CompanyTypeListComponent)
      },
      {
        path: 'company-group',
        loadComponent: () => import('./human-resources/company-group/company-group-list.component').then(m => m.CompanyGroupListComponent)
      },
      {
        path: 'bank-company',
        loadComponent: () => import('./human-resources/bank-company/bank-company-list.component').then(m => m.BankCompanyListComponent)
      },
      {
        path: 'company-asset',
        loadComponent: () => import('./human-resources/company-asset/asset-list.component').then(m => m.AssetListComponent)
      },
      {
        path: 'company-paper',
        loadComponent: () => import('./human-resources/company-paper/paper-list.component').then(m => m.PaperListComponent)
      },
      {
        path: 'branch-social-security',
        loadComponent: () => import('./human-resources/branch-social-security/branch-social-security-list.component').then(m => m.BranchSocialSecurityListComponent)
      },
      {
        path: 'division',
        loadComponent: () => import('./human-resources/division/division-list.component').then(m => m.DivisionListComponent)
      },
      {
        path: 'department',
        loadComponent: () => import('./human-resources/department/department-list.component').then(m => m.DepartmentListComponent)
      },
      {
        path: 'section',
        loadComponent: () => import('./human-resources/section/section-list.component').then(m => m.SectionListComponent)
      },
      {
        path: 'team',
        loadComponent: () => import('./human-resources/team/team-list.component').then(m => m.TeamListComponent)
      },
      {
        path: 't2',
        loadComponent: () => import('./human-resources/t2/t2-list.component').then(m => m.T2ListComponent)
      },
      {
        path: 't3',
        loadComponent: () => import('./human-resources/t3/t3-list.component').then(m => m.T3ListComponent)
      },
      {
        path: 't4',
        loadComponent: () => import('./human-resources/t4/t4-list.component').then(m => m.T4ListComponent)
      },
      {
        path: 'company',
        loadComponent: () => import('./human-resources/company/company-list.component').then(m => m.CompanyListComponent)
      },
      {
        path: 'branch',
        loadComponent: () => import('./human-resources/branch/branch-list.component').then(m => m.BranchListComponent)
      },
      {
        path: 'working-area',
        loadComponent: () => import('./human-resources/working-area/working-area-list.component').then(m => m.WorkingAreaListComponent)
      },
      {
        path: 'working-area-type',
        loadComponent: () => import('./human-resources/working-area-type/working-area-type-list.component').then(m => m.WorkingAreaTypeListComponent)
      },
      {
        path: 'pl',
        loadComponent: () => import('./human-resources/pl/pl-list.component').then(m => m.PLListComponent)
      },
      {
        path: 'approve-level',
        loadComponent: () => import('./human-resources/approve-level/approve-level-list.component').then(m => m.ApproveLevelListComponent)
      }
    ]
  },
  // Placeholder routes
  { path: 'approve', component: CompanyDashboardComponent },
  { path: 'ess-setup', component: CompanyDashboardComponent },
  { path: 'reports', component: CompanyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
