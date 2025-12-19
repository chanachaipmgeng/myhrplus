import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelfareRoutingModule } from './welfare-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    WelfareRoutingModule,
    // SharedModule
  ]
})
export class WelfareModule { }

