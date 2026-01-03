/**
 * Organization Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'companies'
  },
  {
    path: 'companies',
    loadComponent: () => import('./company-list/company-list.component').then(m => m.CompanyListComponent)
  },
  {
    path: 'departments',
    loadComponent: () => import('./department-list/department-list.component').then(m => m.DepartmentListComponent)
  },
  {
    path: 'positions',
    loadComponent: () => import('./position-list/position-list.component').then(m => m.PositionListComponent)
  },
  {
    path: 'employees',
    loadComponent: () => import('./employee-list/employee-list.component').then(m => m.EmployeeListComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./member-list/member-list.component').then(m => m.MemberListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }

