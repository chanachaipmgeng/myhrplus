import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentsRoutingModule } from './documents-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { Pnd91Component } from './pnd91/pnd91.component';
import { Twi50Component } from './twi50/twi50.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DocumentsRoutingModule,
    SharedModule,
    // Standalone components
    Pnd91Component,
    Twi50Component
  ]
})
export class DocumentsModule { }

