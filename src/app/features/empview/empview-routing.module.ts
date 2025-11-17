import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { PayslipViewerComponent } from './payslip-viewer/payslip-viewer.component';
import { TimeAttendanceViewComponent } from './time-attendance-view/time-attendance-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'leave',
        component: LeaveManagementComponent
      },
      {
        path: 'payslip',
        component: PayslipViewerComponent
      },
      {
        path: 'time-attendance',
        component: TimeAttendanceViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpviewRoutingModule { }
