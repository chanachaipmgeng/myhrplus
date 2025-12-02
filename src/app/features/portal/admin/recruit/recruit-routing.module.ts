import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing recruit module
    redirectTo: '/recruit/home',
    pathMatch: 'full'
  }
  // TODO: Migrate recruit module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }

