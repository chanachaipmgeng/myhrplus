import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveRoutingModule } from './leave-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    LeaveRoutingModule,
    SharedModule,
    // Standalone components
    LeaveRequestComponent
  ]
})
export class LeaveModule { }

