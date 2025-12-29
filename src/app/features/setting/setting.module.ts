import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@NgModule({
  declarations: [
    SettingHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    LayoutModule,
    SettingRoutingModule,
    GlassCardComponent,
    PageHeaderComponent
  ]
})
export class SettingModule { }














