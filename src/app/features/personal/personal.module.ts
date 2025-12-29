import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalHomeComponent } from './personal-home/personal-home.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@NgModule({
  declarations: [
    PersonalHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    PersonalRoutingModule,
    GlassCardComponent,
    PageHeaderComponent
  ]
})
export class PersonalModule { }

