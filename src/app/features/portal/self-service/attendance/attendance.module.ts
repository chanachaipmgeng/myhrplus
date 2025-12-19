import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AttendanceRoutingModule,
    // SharedModule,
    // Standalone components
    AttendanceViewComponent
  ]
})
export class AttendanceModule { }

