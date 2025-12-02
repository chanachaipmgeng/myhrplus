import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'request',
    pathMatch: 'full'
  },
  {
    path: 'request',
    component: LeaveRequestComponent,
    data: {
      title: 'ลาพักผ่อน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลาพักผ่อน', route: '/portal/self-service/leave' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }

