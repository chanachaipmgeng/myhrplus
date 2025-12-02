import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: AttendanceViewComponent,
    data: {
      title: 'การลงเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'การลงเวลา', route: '/portal/self-service/attendance' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }

