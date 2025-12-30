import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoIndexComponent } from './demo-index/demo-index.component';
import { CodeViewerComponent } from './shared/code-viewer/code-viewer.component';
import { PropsTableComponent } from './shared/props-table/props-table.component';

/**
 * Demo Module
 *
 * Main module for demo feature.
 *
 * Note: Demo components are now lazy-loaded via sub-routing modules:
 * - FormsRoutingModule - Form components
 * - UiRoutingModule - UI components
 * - DataDisplayRoutingModule - Data display components
 * - SyncfusionRoutingModule - Syncfusion components
 * - AdvancedRoutingModule - Advanced components
 *
 * This reduces initial bundle size and improves performance.
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DemoRoutingModule,
    DemoComponent,
    DemoIndexComponent,
    CodeViewerComponent,
    PropsTableComponent
    // ✅ Demo components are now lazy-loaded via routing modules
  ]
})
export class DemoModule { }
