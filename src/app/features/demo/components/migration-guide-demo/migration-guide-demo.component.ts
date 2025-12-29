import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';

@Component({
  selector: 'app-migration-guide-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PageHeaderComponent,
    GlassCardComponent,
    GlassInputComponent,
    GlassButtonComponent,
    IconComponent,
    DataGridComponent,
    CodeViewerComponent
  ],
  templateUrl: './migration-guide-demo.component.html',
  styleUrls: ['./migration-guide-demo.component.scss']
})
export class MigrationGuideDemoComponent {
  demoValue = '';
  isLoading = false;

  inputCode = `<!-- Angular Glass Input -->
<app-glass-input
  label="Employee Name"
  placeholder="Enter name"
  [(ngModel)]="name">
</app-glass-input>`;

  buttonCode = `<!-- Angular Glass Buttons -->
<div class="flex gap-3">
  <app-glass-button variant="primary" icon="save">
    Save Changes
  </app-glass-button>

  <app-glass-button variant="secondary" icon="close">
    Cancel
  </app-glass-button>
</div>`;

  cardCode = `<!-- Glass Card Container -->
<app-glass-card padding="p-6" [animate]="'fade-in'">
  <div class="relative z-10">
    <!-- Your content here -->
    <h4 class="font-bold mb-2">Glass Card</h4>
    <p>Content adapts to glass theme...</p>
  </div>
</app-glass-card>`;

  loadingCode = `<!-- Skeleton Loader Pattern -->
@if (service.loading()) {
  <app-skeleton-loader type="table" [rows]="10" [columns]="5"></app-skeleton-loader>
} @else {
  <app-data-grid
    [dataSource]="(data$ | async) || []"
    [columns]="columns">
  </app-data-grid>
}`;

  backgroundCode = `<!-- ❌ BAD: Solid Background -->
<div class="p-6 bg-gray-50 dark:bg-slate-900">
  <!-- Content blocks theme gradient -->
</div>

<!-- ✅ GOOD: Transparent Background -->
<div class="p-6">
  <!-- Theme gradient shows through -->
  <app-glass-card padding="p-6">
    <!-- Content here -->
  </app-glass-card>
</div>`;

  layoutCode = `<!-- Standard List Page Layout -->
<app-page-header
  [title]="'module.title' | translate"
  [showBreadcrumbs]="true"
  [actions]="headerActions">
</app-page-header>

<div class="p-6 min-h-screen">
  @if (service.loading()) {
    <app-skeleton-loader type="table" [rows]="10"></app-skeleton-loader>
  } @else {
    <app-data-grid
      [dataSource]="(data$ | async) || []"
      [columns]="columns"
      (rowSelected)="onEdit($event)">
    </app-data-grid>
  }
</div>`;

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}

