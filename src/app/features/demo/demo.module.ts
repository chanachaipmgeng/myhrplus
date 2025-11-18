import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { SharedModule } from '../../shared/shared.module';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../shared/components/glass-button/glass-button.component';
import { GlassInputComponent } from '../../shared/components/glass-input/glass-input.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { StatisticsCardComponent } from '../../shared/components/statistics-card/statistics-card.component';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { RatingComponent } from '../../shared/components/rating/rating.component';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    GlassCardComponent,
    GlassButtonComponent,
    GlassInputComponent,
    EmptyStateComponent,
    LoadingComponent,
    StatisticsCardComponent,
    TabsComponent,
    ProgressBarComponent,
    RatingComponent,
    TooltipComponent,
    ModalComponent,
    PageLayoutComponent
  ]
})
export class DemoModule { }

