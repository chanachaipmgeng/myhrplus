import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeRoutingModule } from './time-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeWarningComponent } from './time-warning/time-warning.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TimeRoutingModule,
    // SharedModule,
    // Standalone components
    TimestampComponent,
    TimeWarningComponent
  ]
})
export class TimeModule { }

