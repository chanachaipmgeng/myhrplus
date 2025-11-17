import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingCatalogComponent } from './training-catalog/training-catalog.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingRegistrationComponent } from './training-registration/training-registration.component';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { TrainingCertificatesComponent } from './training-certificates/training-certificates.component';
import { TrainingReportsComponent } from './training-reports/training-reports.component';

@NgModule({
  declarations: [
    TrainingCatalogComponent,
    TrainingDetailsComponent,
    TrainingRegistrationComponent,
    TrainingHistoryComponent,
    TrainingCertificatesComponent,
    TrainingReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }

