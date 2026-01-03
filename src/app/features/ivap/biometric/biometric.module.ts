/**
 * IVAP Biometric Module
 * Module สำหรับจัดการ Biometric & Face Recognition
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { BiometricRoutingModule } from './biometric-routing.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BiometricRoutingModule,
    GlassCardComponent,
    PageHeaderComponent,
    IconComponent,
    StaggerDirective
  ]
})
export class BiometricModule { }

