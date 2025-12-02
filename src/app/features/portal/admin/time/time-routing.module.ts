import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing ta module
    redirectTo: '/ta/home',
    pathMatch: 'full'
  }
  // TODO: Migrate ta module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }

