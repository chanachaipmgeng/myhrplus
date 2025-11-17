import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TrainingCatalogComponent } from './training-catalog/training-catalog.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingRegistrationComponent } from './training-registration/training-registration.component';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { TrainingCertificatesComponent } from './training-certificates/training-certificates.component';
import { TrainingReportsComponent } from './training-reports/training-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full'
      },
      {
        path: 'catalog',
        component: TrainingCatalogComponent
      },
      {
        path: 'catalog/:id',
        component: TrainingDetailsComponent
      },
      {
        path: 'register',
        component: TrainingRegistrationComponent
      },
      {
        path: 'register/:id',
        component: TrainingRegistrationComponent
      },
      {
        path: 'history',
        component: TrainingHistoryComponent
      },
      {
        path: 'history/:id',
        component: TrainingDetailsComponent
      },
      {
        path: 'certificates',
        component: TrainingCertificatesComponent
      },
      {
        path: 'reports',
        component: TrainingReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }

