import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { EmpviewRoutingModule } from './empview-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// Import standalone components
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../shared/components/glass-button/glass-button.component';
import { StatisticsCardComponent } from '../../shared/components/statistics-card/statistics-card.component';
import { StatisticsGridComponent } from '../../shared/components/statistics-grid/statistics-grid.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@NgModule({
  declarations: [
    // DashboardComponent is now standalone
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    LayoutModule,
    DashboardComponent, // Import standalone component
    EmpviewRoutingModule,
    // Standalone components
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    StatisticsCardComponent,
    StatisticsGridComponent,
    LoadingComponent,
    EmptyStateComponent,
    ModalComponent
  ]
})
export class EmpviewModule { }

