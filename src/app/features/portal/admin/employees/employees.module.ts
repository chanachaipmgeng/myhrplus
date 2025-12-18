import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }

