# 📊 Data Grid Component Guide

**วันที่สร้าง**: 2024-12-20  
**Component**: `app-data-grid`  
**Library**: Syncfusion Grid

---

## 📋 สารบัญ

1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Configuration](#configuration)
5. [API Reference](#api-reference)
6. [Examples](#examples)
7. [Styling](#styling)

---

## 🎯 Overview

`DataGridComponent` เป็น wrapper component สำหรับ Syncfusion Grid ที่ให้ความสามารถในการแสดงข้อมูลแบบตารางพร้อม features ครบถ้วน พร้อม Glass Morphism styling และ Gemini theme support

### Features
- ✅ Data Grid with pagination
- ✅ Sorting & Filtering
- ✅ Grouping
- ✅ Selection (Single/Multiple)
- ✅ Resizing & Reordering
- ✅ Editing (Inline, Dialog, Batch)
- ✅ Export (Excel, PDF, CSV)
- ✅ Column Chooser
- ✅ Search
- ✅ Virtual Scrolling
- ✅ Glass Morphism styling
- ✅ Dark Mode support
- ✅ Gemini Theme support
- ✅ Responsive design

---

## 📦 Installation

### Dependencies
Component นี้ใช้ Syncfusion Grid ซึ่งติดตั้งแล้วในโปรเจค:
```json
"@syncfusion/ej2-angular-grids": "^29.2.11"
```

### Import
Component เป็น standalone component สามารถ import ได้โดยตรง:

```typescript
import { DataGridComponent } from '../../shared/components/data-grid/data-grid.component';

@Component({
  imports: [DataGridComponent]
})
```

---

## 🚀 Basic Usage

### Simple Example

```html
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  [allowPaging]="true"
  [allowSorting]="true">
</app-data-grid>
```

```typescript
import { Component } from '@angular/core';
import { DataGridColumn } from '../../shared/components/data-grid/data-grid.component';

@Component({
  selector: 'app-example',
  template: `
    <app-data-grid
      [dataSource]="gridData"
      [columns]="columns"
      [allowPaging]="true"
      [allowSorting]="true">
    </app-data-grid>
  `
})
export class ExampleComponent {
  columns: DataGridColumn[] = [
    { field: 'id', headerText: 'ID', width: 80, type: 'number' },
    { field: 'name', headerText: 'ชื่อ', width: 150, type: 'string' },
    { field: 'email', headerText: 'อีเมล', width: 200, type: 'string' }
  ];

  gridData: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
}
```

---

## ⚙️ Configuration

### Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dataSource` | `any[]` | `[]` | Data source array |
| `columns` | `DataGridColumn[]` | `[]` | Column definitions |
| `allowPaging` | `boolean` | `true` | Enable pagination |
| `allowSorting` | `boolean` | `true` | Enable sorting |
| `allowFiltering` | `boolean` | `true` | Enable filtering |
| `allowGrouping` | `boolean` | `false` | Enable grouping |
| `allowSelection` | `boolean` | `true` | Enable row selection |
| `allowResizing` | `boolean` | `true` | Enable column resizing |
| `allowReordering` | `boolean` | `true` | Enable column reordering |
| `allowEditing` | `boolean` | `false` | Enable editing |
| `allowExcelExport` | `boolean` | `true` | Enable Excel export |
| `allowPdfExport` | `boolean` | `true` | Enable PDF export |
| `showColumnChooser` | `boolean` | `false` | Show column chooser |
| `showToolbar` | `boolean` | `true` | Show toolbar |
| `pageSettings` | `any` | `{...}` | Page settings |
| `filterSettings` | `any` | `{...}` | Filter settings |
| `sortSettings` | `any` | `{...}` | Sort settings |
| `groupSettings` | `any` | `{...}` | Group settings |
| `selectionSettings` | `any` | `{...}` | Selection settings |
| `editSettings` | `any` | `{...}` | Edit settings |
| `toolbar` | `any[]` | `[...]` | Toolbar items |
| `height` | `string \| number` | `'600px'` | Grid height |
| `width` | `string \| number` | `'100%'` | Grid width |
| `customClass` | `string` | `''` | Custom CSS class |

### DataGridColumn Interface

```typescript
interface DataGridColumn {
  field: string;                    // Field name
  headerText?: string;              // Header text
  width?: string | number;          // Column width
  textAlign?: 'Left' | 'Center' | 'Right';
  format?: string;                  // Format string (e.g., 'C0', 'yMd')
  type?: 'string' | 'number' | 'boolean' | 'date' | 'datetime';
  template?: any;                   // Custom template
  visible?: boolean;                 // Column visibility
  allowSorting?: boolean;           // Allow sorting
  allowFiltering?: boolean;         // Allow filtering
  allowGrouping?: boolean;          // Allow grouping
  allowEditing?: boolean;          // Allow editing
  isPrimaryKey?: boolean;          // Primary key
  editType?: string;               // Edit type
  edit?: any;                      // Edit configuration
  commands?: any[];                // Command buttons
}
```

---

## 📚 API Reference

### Methods

#### `refresh(): void`
Refresh grid

```typescript
dataGridComponent.refresh();
```

#### `exportToExcel(): void`
Export to Excel

```typescript
dataGridComponent.exportToExcel();
```

#### `exportToPDF(): void`
Export to PDF

```typescript
dataGridComponent.exportToPDF();
```

#### `exportToCSV(): void`
Export to CSV

```typescript
dataGridComponent.exportToCSV();
```

#### `print(): void`
Print grid

```typescript
dataGridComponent.print();
```

#### `getSelectedRows(): any[]`
Get selected rows

```typescript
const selectedRows = dataGridComponent.getSelectedRows();
```

#### `clearSelection(): void`
Clear selection

```typescript
dataGridComponent.clearSelection();
```

#### `getGridInstance(): GridComponent | null`
Get Syncfusion Grid instance

```typescript
const grid = dataGridComponent.getGridInstance();
```

#### `updateDataSource(data: any[]): void`
Update data source

```typescript
dataGridComponent.updateDataSource(newData);
```

### Events

| Event | Type | Description |
|-------|------|-------------|
| `rowSelected` | `EventEmitter<any>` | Emitted when row is selected |
| `rowDeselected` | `EventEmitter<any>` | Emitted when row is deselected |
| `cellSave` | `EventEmitter<any>` | Emitted when cell is saved |
| `rowAdded` | `EventEmitter<any>` | Emitted when row is added |
| `rowDeleted` | `EventEmitter<any>` | Emitted when row is deleted |
| `dataBound` | `EventEmitter<any>` | Emitted when data is bound |
| `actionBegin` | `EventEmitter<any>` | Emitted when action begins |
| `actionComplete` | `EventEmitter<any>` | Emitted when action completes |

---

## 💡 Examples

### Example 1: Basic Grid

```typescript
columns: DataGridColumn[] = [
  { field: 'id', headerText: 'ID', width: 80, type: 'number' },
  { field: 'name', headerText: 'ชื่อ', width: 150, type: 'string' },
  { field: 'email', headerText: 'อีเมล', width: 200, type: 'string' }
];

gridData: any[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
```

```html
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  [allowPaging]="true"
  [allowSorting]="true">
</app-data-grid>
```

### Example 2: With Editing

```typescript
editSettings: any = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  mode: 'Normal'
};
```

```html
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  [allowEditing]="true"
  [editSettings]="editSettings"
  (cellSave)="onCellSave($event)">
</app-data-grid>
```

### Example 3: With Selection

```typescript
selectionSettings: any = {
  type: 'Multiple',
  mode: 'Row'
};
```

```html
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  [allowSelection]="true"
  [selectionSettings]="selectionSettings"
  (rowSelected)="onRowSelected($event)">
</app-data-grid>
```

### Example 4: Using ViewChild

```typescript
import { Component, ViewChild } from '@angular/core';
import { DataGridComponent } from '../../shared/components/data-grid/data-grid.component';

@Component({
  template: `
    <app-data-grid
      #dataGrid
      [dataSource]="gridData"
      [columns]="columns">
    </app-data-grid>
    <button (click)="exportExcel()">Export Excel</button>
  `
})
export class ExampleComponent {
  @ViewChild('dataGrid') dataGrid!: DataGridComponent;

  exportExcel(): void {
    this.dataGrid.exportToExcel();
  }
}
```

---

## 🎨 Styling

### Glass Morphism
Component ใช้ Glass Morphism styling โดยอัตโนมัติ

### Dark Mode
รองรับ Dark Mode โดยอัตโนมัติ

### Gemini Theme
รองรับ Gemini Theme โดยอัตโนมัติ

### Custom Styling
```html
<app-data-grid
  [dataSource]="gridData"
  [columns]="columns"
  customClass="my-custom-grid">
</app-data-grid>
```

```scss
.my-custom-grid {
  // Custom styles
}
```

---

## 📱 Responsive

Component รองรับ responsive design โดยอัตโนมัติ:
- Mobile: ปรับ toolbar และ column widths
- Tablet: ปรับขนาดและ spacing
- Desktop: Full features

---

## 🔗 Related Documentation

- [Syncfusion Grid Documentation](https://ej2.syncfusion.com/angular/documentation/grid/getting-started/)
- [Data Table Component](./data-table/README.md)
- [Pivot Table Component](./pivot-table/README.md)
- [UI Kit Guide](../UI_KIT_GUIDE.md)

---

**Last Updated**: 2024-12-20  
**Version**: 1.0.0

