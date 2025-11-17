import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { TaRoutingModule } from './ta-routing.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { TimeEditRequestComponent } from './time-edit-request/time-edit-request.component';
import { ShiftChangeRequestComponent } from './shift-change-request/shift-change-request.component';
import { ExchangeShiftRequestComponent } from './exchange-shift-request/exchange-shift-request.component';
import { OvertimeRequestComponent } from './overtime-request/overtime-request.component';
import { ManagerApprovalsComponent } from './manager-approvals/manager-approvals.component';
import { TaReportsComponent } from './reports/ta-reports.component';

@NgModule({
  declarations: [
    LeaveRequestComponent,
    TimeEditRequestComponent,
    ShiftChangeRequestComponent,
    ExchangeShiftRequestComponent,
    OvertimeRequestComponent,
    ManagerApprovalsComponent,
    TaReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    TaRoutingModule
  ]
})
export class TaModule { }

