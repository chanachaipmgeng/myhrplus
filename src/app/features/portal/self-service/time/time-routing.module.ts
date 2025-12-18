import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeWarningComponent } from './time-warning/time-warning.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timestamp',
    pathMatch: 'full'
  },
  {
    path: 'timestamp',
    component: TimestampComponent,
    data: {
      title: 'ลงเวลาเข้า-ออก',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลงเวลา', route: '/portal/self-service/time' },
        { label: 'ลงเวลาเข้า-ออก', route: '/portal/self-service/time/timestamp' }
      ]
    }
  },
  {
    path: 'time-warning',
    component: TimeWarningComponent,
    data: {
      title: 'แจ้งเตือนเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลงเวลา', route: '/portal/self-service/time' },
        { label: 'แจ้งเตือนเวลา', route: '/portal/self-service/time/time-warning' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }

