import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { EmpviewRoutingModule } from './empview-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { PayslipViewerComponent } from './payslip-viewer/payslip-viewer.component';
import { TimeAttendanceViewComponent } from './time-attendance-view/time-attendance-view.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PersonalInfoComponent,
    LeaveManagementComponent,
    PayslipViewerComponent,
    TimeAttendanceViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    EmpviewRoutingModule
  ]
})
export class EmpviewModule { }

