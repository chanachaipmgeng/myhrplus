import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CompanyRoutingModule,
    SharedModule,
    GlassCardComponent,
    PageHeaderComponent,
    IconComponent,
    StaggerDirective
  ]
})
export class CompanyModule { }
