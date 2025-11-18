import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { PayslipViewerComponent } from './payslip-viewer/payslip-viewer.component';
import { TimeAttendanceViewComponent } from './time-attendance-view/time-attendance-view.component';
import { EmployeeWorkInformationComponent } from './employee-work-information/employee-work-information.component';
import { EmployeeTimestampComponent } from './employee-timestamp/employee-timestamp.component';
import { EmployeeTimeWarningComponent } from './employee-time-warning/employee-time-warning.component';
import { EmployeeEdittimestatisticComponent } from './employee-edittimestatistic/employee-edittimestatistic.component';
import { WorkingHistoryDataComponent } from './working-history-data/working-history-data.component';
import { EmployeeOtstatisticComponent } from './employee-otstatistic/employee-otstatistic.component';
import { EmployeeTwi50Component } from './employee-twi50/employee-twi50.component';
import { EmployeePnd91Component } from './employee-pnd91/employee-pnd91.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'หน้าแรก', url: '/dashboard' }
          ]
        }
      },
      // EM02A01 - Employee Profile (Personal Profile)
      {
        path: 'employee-profile',
        component: PersonalInfoComponent,
        data: {
          title: 'Personal Profile',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-profile' }
          ]
        }
      },
      {
        path: 'employee-profile/:employeeId',
        component: PersonalInfoComponent,
        data: {
          title: 'Personal Profile',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-profile' }
          ]
        }
      },
      // EM02A03 - Employee Work Information
      {
        path: 'employee-work-information',
        component: EmployeeWorkInformationComponent,
        data: {
          title: 'Employee Information',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-work-information' }
          ]
        }
      },
      {
        path: 'employee-work-information/:employeeId',
        component: EmployeeWorkInformationComponent,
        data: {
          title: 'Employee Information',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-work-information' }
          ]
        }
      },
      // EM02A08 - Employee Timestamp (Working Hour Data)
      {
        path: 'employee-timestamp',
        component: EmployeeTimestampComponent,
        data: {
          title: 'Working Hour Data',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-timestamp' }
          ]
        }
      },
      // EM02A07 - Employee Time Warning (Punch In/Out Checking Data)
      {
        path: 'employee-time-warning',
        component: EmployeeTimeWarningComponent,
        data: {
          title: 'Punch In/Out Checking Data',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-time-warning' }
          ]
        }
      },
      // EM02A04 - Employee Attendance (Raw Data)
      {
        path: 'employee-attendance',
        component: TimeAttendanceViewComponent,
        data: {
          title: 'Raw Data',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-attendance' }
          ]
        }
      },
      // EM02A05 - Employee Leave Role (Privilege Leave)
      {
        path: 'employee-leaverole',
        component: LeaveManagementComponent,
        data: {
          title: 'Privilege Leave',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-leaverole' }
          ]
        }
      },
      // EM02A221 - Employee OT Statistic
      {
        path: 'employee-otstatistic',
        component: EmployeeOtstatisticComponent,
        data: {
          title: 'Statistic of OT Requisition',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-otstatistic' }
          ]
        }
      },
      // EM02A222 - Employee Leave Statistic
      {
        path: 'employee-leavestatistic',
        component: LeaveManagementComponent,
        data: {
          title: 'Statistic of Leave Requisition',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-leavestatistic' }
          ]
        }
      },
      // EM02A223 - Employee Edit Time Statistic
      {
        path: 'employee-edittimestatistic',
        component: EmployeeEdittimestatisticComponent,
        data: {
          title: 'Statistic of Change Requisition',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-edittimestatistic' }
          ]
        }
      },
      // EM02A09 - Working History Data
      {
        path: 'working-history-data',
        component: WorkingHistoryDataComponent,
        data: {
          title: 'Working History Data',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.working-history-data' }
          ]
        }
      },
      // EM02A21 - Employee Payslip (e-Payslip)
      {
        path: 'employee-payslip',
        component: PayslipViewerComponent,
        data: {
          title: 'e-Payslip',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-payslip' }
          ]
        }
      },
      // EM02A29 - Employee TWI50
      {
        path: 'employee-twi50',
        component: EmployeeTwi50Component,
        data: {
          title: '50Twi',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-twi50' }
          ]
        }
      },
      // EM02A30 - Employee PND91
      {
        path: 'employee-pnd91',
        component: EmployeePnd91Component,
        data: {
          title: 'PND91',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'menu.employee-pnd91' }
          ]
        }
      },
      // EM02A10 - PI Shift Plan
      {
        path: 'pi-shiftplan',
        component: TimeAttendanceViewComponent, // TODO: Create PiShiftplanComponent
        data: {
          title: 'Shift Plan',
          urls: [
            { title: 'menu.employee', url: '/dashboard' },
            { title: 'Shift Plan' }
          ]
        }
      },
      // Legacy routes for backward compatibility
      {
        path: 'personal-info',
        redirectTo: 'employee-profile',
        pathMatch: 'full'
      },
      {
        path: 'leave',
        redirectTo: 'employee-leaverole',
        pathMatch: 'full'
      },
      {
        path: 'payslip',
        redirectTo: 'employee-payslip',
        pathMatch: 'full'
      },
      {
        path: 'time-attendance',
        redirectTo: 'employee-attendance',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpviewRoutingModule { }
