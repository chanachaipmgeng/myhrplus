/**
 * IVAP Video Analytics & AI Module
 * Module สำหรับจัดการ Video Analytics และ AI Models
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VideoAiRoutingModule } from './video-ai-routing.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    VideoAiRoutingModule,
    GlassCardComponent,
    PageHeaderComponent,
    IconComponent,
    StaggerDirective,
    NgxEchartsModule
  ]
})
export class VideoAiModule { }

