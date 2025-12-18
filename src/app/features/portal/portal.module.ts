import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PortalHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }

