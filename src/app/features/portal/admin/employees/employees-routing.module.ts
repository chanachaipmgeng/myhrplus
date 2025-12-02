import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing personal module
    redirectTo: '/personal/home',
    pathMatch: 'full'
  }
  // TODO: Migrate personal module content to here
  // {
  //   path: 'list',
  //   component: EmployeesListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

