import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    GlassCardComponent,
    PageHeaderComponent
  ]
})
export class CompanyModule { }
