import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubordinatesRoutingModule } from './subordinates-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { SubordinatesListComponent } from './subordinates-list/subordinates-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SubordinatesRoutingModule,
    SharedModule,
    // Standalone components
    SubordinatesListComponent
  ]
})
export class SubordinatesModule { }

