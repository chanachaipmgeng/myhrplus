import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@NgModule({
  declarations: [
    PortalHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
    SharedModule,
    GlassCardComponent,
    PageHeaderComponent,
    IconComponent
  ]
})
export class PortalModule { }

