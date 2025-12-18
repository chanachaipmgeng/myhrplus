import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveStatisticComponent } from './leave-statistic/leave-statistic.component';
import { OtStatisticComponent } from './ot-statistic/ot-statistic.component';
import { EditTimeStatisticComponent } from './edit-time-statistic/edit-time-statistic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leave',
    pathMatch: 'full'
  },
  {
    path: 'leave',
    component: LeaveStatisticComponent,
    data: {
      title: 'สถิติการลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สถิติ', route: '/portal/self-service/statistics' },
        { label: 'สถิติการลา', route: '/portal/self-service/statistics/leave' }
      ]
    }
  },
  {
    path: 'ot',
    component: OtStatisticComponent,
    data: {
      title: 'สถิติ OT',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สถิติ', route: '/portal/self-service/statistics' },
        { label: 'สถิติ OT', route: '/portal/self-service/statistics/ot' }
      ]
    }
  },
  {
    path: 'edit-time',
    component: EditTimeStatisticComponent,
    data: {
      title: 'สถิติแก้ไขเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สถิติ', route: '/portal/self-service/statistics' },
        { label: 'สถิติแก้ไขเวลา', route: '/portal/self-service/statistics/edit-time' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }

