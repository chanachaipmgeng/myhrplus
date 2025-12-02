import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing welfare module
    redirectTo: '/welfare/home',
    pathMatch: 'full'
  }
  // TODO: Migrate welfare module content to here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelfareRoutingModule { }

