# 📊 Pivot Table Component Guide

**วันที่สร้าง**: 2024-12-20  
**Component**: `app-pivot-table`  
**Library**: Syncfusion PivotView

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

`PivotTableComponent` เป็น wrapper component สำหรับ Syncfusion PivotView ที่ให้ความสามารถในการวิเคราะห์ข้อมูลแบบ Pivot Table พร้อม Glass Morphism styling และ Gemini theme support

### Features
- ✅ Pivot Table analysis
- ✅ Toolbar with export options
- ✅ Grouping Bar
- ✅ Field List
- ✅ Calculated Fields
- ✅ Conditional Formatting
- ✅ Drill Through
- ✅ Virtual Scrolling
- ✅ Glass Morphism styling
- ✅ Dark Mode support
- ✅ Gemini Theme support
- ✅ Responsive design

---

## 📦 Installation

### Dependencies
Component นี้ใช้ Syncfusion PivotView ซึ่งติดตั้งแล้วในโปรเจค:
```json
"@syncfusion/ej2-angular-pivotview": "^29.2.10"
```

### Import
Component เป็น standalone component สามารถ import ได้โดยตรง:

```typescript
import { PivotTableComponent } from '../../shared/components/pivot-table/pivot-table.component';

@Component({
  imports: [PivotTableComponent]
})
```

---

## 🚀 Basic Usage

### Simple Example

```html
<app-pivot-table
  [dataSource]="pivotData"
  [width]="'100%'"
  [height]="'600px'">
</app-pivot-table>
```

```typescript
import { Component } from '@angular/core';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-example',
  template: `
    <app-pivot-table
      [dataSource]="pivotData"
      [width]="'100%'"
      [height]="'600px'">
    </app-pivot-table>
  `
})
export class ExampleComponent {
  pivotData: IDataOptions = {
    dataSource: [
      { Country: 'USA', Product: 'Laptop', Sales: 1000 },
      { Country: 'USA', Product: 'Mobile', Sales: 2000 },
      { Country: 'UK', Product: 'Laptop', Sales: 1500 },
      { Country: 'UK', Product: 'Mobile', Sales: 1800 }
    ],
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Product' }],
    values: [{ name: 'Sales', caption: 'Total Sales' }]
  };
}
```

---

## ⚙️ Configuration

### Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dataSource` | `IDataOptions \| null` | `null` | Data source configuration |
| `dataSourceSettings` | `IDataOptions \| null` | `null` | Alternative data source settings |
| `width` | `string` | `'100%'` | Component width |
| `height` | `string` | `'600px'` | Component height |
| `showToolbar` | `boolean` | `true` | Show toolbar |
| `showGroupingBar` | `boolean` | `true` | Show grouping bar |
| `showFieldList` | `boolean` | `false` | Show field list |
| `allowCalculatedField` | `boolean` | `true` | Allow calculated fields |
| `allowConditionalFormatting` | `boolean` | `true` | Allow conditional formatting |
| `allowDrillThrough` | `boolean` | `true` | Allow drill through |
| `enableVirtualization` | `boolean` | `false` | Enable virtual scrolling |
| `gridSettings` | `any` | `{}` | Grid settings |
| `toolbarSettings` | `ToolbarSettings` | `{}` | Toolbar settings |
| `groupingBarSettings` | `GroupingBarSettings` | `{}` | Grouping bar settings |
| `customClass` | `string` | `''` | Custom CSS class |

---

## 📚 API Reference

### Methods

#### `updateDataSource(dataSource: IDataOptions): void`
อัพเดท data source และ refresh pivot table

```typescript
const newDataSource: IDataOptions = {
  dataSource: newData,
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Product' }],
  values: [{ name: 'Sales' }]
};

pivotTableComponent.updateDataSource(newDataSource);
```

#### `refresh(): void`
Refresh pivot table

```typescript
pivotTableComponent.refresh();
```

#### `exportToExcel(): void`
Export to Excel

```typescript
pivotTableComponent.exportToExcel();
```

#### `exportToPDF(): void`
Export to PDF

```typescript
pivotTableComponent.exportToPDF();
```

#### `exportToCSV(): void`
Export to CSV

```typescript
pivotTableComponent.exportToCSV();
```

#### `print(): void`
Print pivot table

```typescript
pivotTableComponent.print();
```

#### `getPivotViewInstance(): PivotViewComponent | null`
Get Syncfusion PivotView instance

```typescript
const pivotView = pivotTableComponent.getPivotViewInstance();
if (pivotView) {
  // Access Syncfusion methods
}
```

---

## 💡 Examples

### Example 1: Basic Pivot Table

```typescript
import { Component } from '@angular/core';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-sales-report',
  template: `
    <app-pivot-table
      [dataSource]="salesData"
      [showToolbar]="true"
      [showGroupingBar]="true">
    </app-pivot-table>
  `
})
export class SalesReportComponent {
  salesData: IDataOptions = {
    dataSource: [
      { Region: 'North', Product: 'Laptop', Year: 2023, Sales: 50000 },
      { Region: 'North', Product: 'Mobile', Year: 2023, Sales: 30000 },
      { Region: 'South', Product: 'Laptop', Year: 2023, Sales: 45000 },
      { Region: 'South', Product: 'Mobile', Year: 2023, Sales: 35000 }
    ],
    rows: [{ name: 'Region' }, { name: 'Product' }],
    columns: [{ name: 'Year' }],
    values: [{ name: 'Sales', caption: 'Total Sales' }],
    formatSettings: [{ name: 'Sales', format: 'C0' }]
  };
}
```

### Example 2: With Field List

```html
<app-pivot-table
  [dataSource]="pivotData"
  [showFieldList]="true"
  [showToolbar]="true"
  [width]="'100%'"
  [height]="'700px'">
</app-pivot-table>
```

### Example 3: Custom Toolbar Settings

```typescript
toolbarSettings: ToolbarSettings = {
  items: ['New', 'Save', 'Load', 'Rename', 'Remove', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList']
};
```

### Example 4: Using ViewChild

```typescript
import { Component, ViewChild } from '@angular/core';
import { PivotTableComponent } from '../../shared/components/pivot-table/pivot-table.component';

@Component({
  selector: 'app-example',
  template: `
    <app-pivot-table
      #pivotTable
      [dataSource]="pivotData">
    </app-pivot-table>
    <button (click)="exportExcel()">Export Excel</button>
  `
})
export class ExampleComponent {
  @ViewChild('pivotTable') pivotTable!: PivotTableComponent;

  exportExcel(): void {
    this.pivotTable.exportToExcel();
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
<app-pivot-table
  [dataSource]="pivotData"
  customClass="my-custom-pivot">
</app-pivot-table>
```

```scss
.my-custom-pivot {
  // Custom styles
}
```

---

## 📱 Responsive

Component รองรับ responsive design โดยอัตโนมัติ:
- Mobile: ปรับ toolbar และ grouping bar
- Tablet: ปรับขนาดและ spacing
- Desktop: Full features

---

## 🔗 Related Documentation

- [Syncfusion PivotView Documentation](https://ej2.syncfusion.com/angular/documentation/pivotview/getting-started/)
- [Data Table Component](./data-table/README.md)
- [UI Kit Guide](../UI_KIT_GUIDE.md)

---

**Last Updated**: 2024-12-20  
**Version**: 1.0.0

