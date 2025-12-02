import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { LeaveStatisticComponent } from './leave-statistic/leave-statistic.component';
import { OtStatisticComponent } from './ot-statistic/ot-statistic.component';
import { EditTimeStatisticComponent } from './edit-time-statistic/edit-time-statistic.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StatisticsRoutingModule,
    SharedModule,
    // Standalone components
    LeaveStatisticComponent,
    OtStatisticComponent,
    EditTimeStatisticComponent
  ]
})
export class StatisticsModule { }

