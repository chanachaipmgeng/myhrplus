import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecruitRoutingModule } from './recruit-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RecruitRoutingModule,
    SharedModule
  ]
})
export class RecruitModule { }

