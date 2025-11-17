import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { WorkflowRoutingModule } from './workflow-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }

