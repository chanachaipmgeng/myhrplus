import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowHomeComponent } from './workflow-home/workflow-home.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';

@NgModule({
  declarations: [
    WorkflowHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    WorkflowRoutingModule,
    GlassCardComponent
  ]
})
export class WorkflowModule { }

