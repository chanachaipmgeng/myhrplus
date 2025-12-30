import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header.component';
import { HomeRoutingModule } from './home-routing.module';
// Import standalone components
import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { StatisticsCardComponent } from '@shared/components/statistics-card/statistics-card.component';
import { StatisticsGridComponent } from '@shared/components/statistics-grid/statistics-grid.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { EmptyStateComponent } from '@shared/components/empty-state/empty-state.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { LazyImageDirective } from '@shared/directives/lazy-image.directive';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    HomeRoutingModule,
    // Standalone components
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    StatisticsCardComponent,
    StatisticsGridComponent,
    LoadingComponent,
    EmptyStateComponent,
    PageHeaderComponent,
    IconComponent,
    // Standalone directives
    LazyImageDirective,
    StaggerDirective
  ]
})
export class HomeModule { }

