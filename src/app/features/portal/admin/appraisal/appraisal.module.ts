import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppraisalRoutingModule } from './appraisal-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AppraisalRoutingModule,
    // SharedModule
  ]
})
export class AppraisalModule { }

