import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DataGridComponent, DataGridColumn } from '@shared/components/data-grid/data-grid.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';

@Component({
  selector: 'app-data-grid-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, DataGridComponent, GlassCardComponent, GlassButtonComponent, CodeViewerComponent],
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss']
})
export class DataGridDemoComponent {
  // Loading state for skeleton loader demo
  isLoading = signal(false);
  // Sample data
  gridData: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'IT', salary: 50000, joinDate: new Date('2023-01-15'), active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'HR', salary: 45000, joinDate: new Date('2023-02-20'), active: true },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', department: 'Finance', salary: 55000, joinDate: new Date('2023-03-10'), active: false },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', department: 'IT', salary: 60000, joinDate: new Date('2023-04-05'), active: true },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', department: 'Marketing', salary: 48000, joinDate: new Date('2023-05-12'), active: true },
    { id: 6, name: 'Diana Miller', email: 'diana@example.com', department: 'HR', salary: 52000, joinDate: new Date('2023-06-18'), active: true },
    { id: 7, name: 'Edward Lee', email: 'edward@example.com', department: 'Finance', salary: 58000, joinDate: new Date('2023-07-22'), active: false },
    { id: 8, name: 'Fiona Chen', email: 'fiona@example.com', department: 'IT', salary: 62000, joinDate: new Date('2023-08-30'), active: true }
  ];

  // Columns configuration
  columns: DataGridColumn[] = [
    { field: 'id', headerText: 'ID', width: 80, textAlign: 'Center', type: 'number', isPrimaryKey: true, allowEditing: false },
    { field: 'name', headerText: 'ชื่อ', width: 150, type: 'string', allowFiltering: true, allowSorting: true },
    { field: 'email', headerText: 'อีเมล', width: 200, type: 'string', allowFiltering: true },
    { field: 'department', headerText: 'แผนก', width: 120, type: 'string', allowFiltering: true, allowGrouping: true },
    { 
      field: 'salary', 
      headerText: 'เงินเดือน', 
      width: 120, 
      textAlign: 'Right', 
      type: 'number', 
      format: 'C0',
      allowFiltering: true,
      allowSorting: true
    },
    { 
      field: 'joinDate', 
      headerText: 'วันที่เข้างาน', 
      width: 150, 
      type: 'date', 
      format: 'yMd',
      allowFiltering: true,
      allowSorting: true
    },
    { 
      field: 'active', 
      headerText: 'สถานะ', 
      width: 100, 
      textAlign: 'Center', 
      type: 'boolean',
      allowFiltering: true
    }
  ];

  // Basic columns (simpler example)
  basicColumns: DataGridColumn[] = [
    { field: 'id', headerText: 'ID', width: 80, type: 'number' },
    { field: 'name', headerText: 'ชื่อ', width: 150, type: 'string' },
    { field: 'email', headerText: 'อีเมล', width: 200, type: 'string' },
    { field: 'department', headerText: 'แผนก', width: 120, type: 'string' }
  ];

  basicData: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'IT' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'HR' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', department: 'Finance' }
  ];

  // Event handlers
  onRowSelected(event: any): void {
    console.log('Row selected:', event);
  }

  onRowDeselected(event: any): void {
    console.log('Row deselected:', event);
  }

  onCellSave(event: any): void {
    console.log('Cell saved:', event);
  }

  onDataBound(event: any): void {
    console.log('Data bound:', event);
  }

  // Toggle loading state for demo
  toggleLoading(): void {
    this.isLoading.set(!this.isLoading());
    if (this.isLoading()) {
      setTimeout(() => {
        this.isLoading.set(false);
      }, 2000);
    }
  }

  // Code examples for display
  basicExample = `// TypeScript
import { DataGridColumn } from '@shared/components/data-grid/data-grid.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

columns: DataGridColumn[] = [
  { field: 'id', headerText: 'ID', width: 80, type: 'number' },
  { field: 'name', headerText: 'ชื่อ', width: 150, type: 'string' },
  { field: 'email', headerText: 'อีเมล', width: 200, type: 'string' }
];

gridData: any[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// HTML
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  [allowPaging]="true"
  [allowSorting]="true"
  [allowFiltering]="true"
  [showToolbar]="true"
  [height]="'600px'"
  (rowSelected)="onRowSelected($event)">
</app-data-grid>`;

  skeletonLoadingExample = `// HTML with Skeleton Loading (Best Practice)
// ใน production code ใช้ service.loading() จาก BaseApiService
@if (service.loading()) {
  <app-skeleton-loader type="table" [rows]="10" [columns]="columns.length"></app-skeleton-loader>
} @else {
  <app-data-grid
    [dataSource]="(data$ | async) || []"
    [columns]="columns"
    (rowSelected)="onEdit($event)">
  </app-data-grid>
}

// หรือใช้ signal สำหรับ local loading state
@if (isLoading()) {
  <app-skeleton-loader type="table" [rows]="10" [columns]="columns.length"></app-skeleton-loader>
} @else {
  <app-data-grid [dataSource]="gridData" [columns]="columns"></app-data-grid>
}`;
}

