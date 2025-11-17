import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { TimeEditRequestComponent } from './time-edit-request/time-edit-request.component';
import { ShiftChangeRequestComponent } from './shift-change-request/shift-change-request.component';
import { ExchangeShiftRequestComponent } from './exchange-shift-request/exchange-shift-request.component';
import { OvertimeRequestComponent } from './overtime-request/overtime-request.component';
import { ManagerApprovalsComponent } from './manager-approvals/manager-approvals.component';
import { TaReportsComponent } from './reports/ta-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'leave',
        pathMatch: 'full'
      },
      {
        path: 'leave',
        component: LeaveRequestComponent
      },
      {
        path: 'leave-history',
        loadChildren: () => import('../../features/empview/empview.module').then(m => m.EmpviewModule)
      },
      {
        path: 'time-edit',
        component: TimeEditRequestComponent
      },
      {
        path: 'shift-change',
        component: ShiftChangeRequestComponent
      },
      {
        path: 'exchange-shift',
        component: ExchangeShiftRequestComponent
      },
      {
        path: 'overtime',
        component: OvertimeRequestComponent
      },
      {
        path: 'approvals',
        component: ManagerApprovalsComponent
      },
      {
        path: 'reports',
        component: TaReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaRoutingModule { }
