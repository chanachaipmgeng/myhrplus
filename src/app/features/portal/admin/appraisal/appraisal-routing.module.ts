import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing appraisal module
    redirectTo: '/appraisal/home',
    pathMatch: 'full'
  }
  // TODO: Migrate appraisal module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }

