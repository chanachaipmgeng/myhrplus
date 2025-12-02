import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }

