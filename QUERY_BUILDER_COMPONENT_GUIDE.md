# 🔍 Query Builder Component Guide

**วันที่สร้าง**: 2024-12-20  
**Component**: `app-query-builder`  
**Library**: Syncfusion QueryBuilder

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

`QueryBuilderComponent` เป็น wrapper component สำหรับ Syncfusion QueryBuilder ที่ให้ความสามารถในการสร้าง query conditions แบบ visual พร้อม Glass Morphism styling และ Gemini theme support

### Features
- ✅ Visual Query Builder
- ✅ Multiple Data Types (String, Number, Boolean, Date, DateTime)
- ✅ Multiple Operators (Equal, Not Equal, Contains, Greater Than, etc.)
- ✅ Group Conditions (AND/OR)
- ✅ Rule Validation
- ✅ SQL Query Generation
- ✅ Not Condition Support
- ✅ Horizontal/Vertical Display Modes
- ✅ Glass Morphism styling
- ✅ Dark Mode support
- ✅ Gemini Theme support
- ✅ Responsive design

---

## 📦 Installation

### Dependencies
Component นี้ใช้ Syncfusion QueryBuilder ซึ่งติดตั้งแล้วในโปรเจค:
```json
"@syncfusion/ej2-angular-querybuilder": "^29.2.10"
```

### Import
Component เป็น standalone component สามารถ import ได้โดยตรง:

```typescript
import { QueryBuilderComponent } from '../../shared/components/query-builder/query-builder.component';

@Component({
  imports: [QueryBuilderComponent]
})
```

---

## 🚀 Basic Usage

### Simple Example

```html
<app-query-builder
  [dataSource]="sampleData"
  [columns]="columns"
  [width]="'100%'"
  [height]="'500px'">
</app-query-builder>
```

```typescript
import { Component } from '@angular/core';
import { QueryBuilderColumn } from '../../shared/components/query-builder/query-builder.component';

@Component({
  selector: 'app-example',
  template: `...`
})
export class ExampleComponent {
  sampleData: any[] = [
    { EmployeeID: 1, EmployeeName: 'John Doe', Salary: 50000 },
    { EmployeeID: 2, EmployeeName: 'Jane Smith', Salary: 60000 }
  ];

  columns: QueryBuilderColumn[] = [
    {
      field: 'EmployeeName',
      label: 'Employee Name',
      type: 'string'
    },
    {
      field: 'Salary',
      label: 'Salary',
      type: 'number'
    }
  ];
}
```

---

## 📋 Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dataSource` | `any[]` | `[]` | Data source for query builder |
| `columns` | `QueryBuilderColumn[]` | `[]` | Column definitions |
| `rule` | `RuleModel` | `{ condition: 'and', rules: [] }` | Initial rule |
| `width` | `string \| number` | `'100%'` | Component width |
| `height` | `string \| number` | `'600px'` | Component height |
| `allowValidation` | `boolean` | `true` | Enable validation |
| `enableNotCondition` | `boolean` | `true` | Enable NOT condition |
| `maxGroupCount` | `number` | `5` | Maximum group count |
| `separator` | `string` | `','` | Separator for values |
| `displayMode` | `'Horizontal' \| 'Vertical'` | `'Horizontal'` | Display mode |
| `showButtons` | `boolean` | `true` | Show action buttons |
| `customClass` | `string` | `''` | Custom CSS class |

---

## 🔧 Methods

### `getSqlFromRules(): string`
Get SQL query from current rules

### `getRules(): RuleModel`
Get current rules

### `setRules(rule: RuleModel): void`
Set rules

### `addGroups(groups: RuleModel[], groupID: string): void`
Add groups to query builder

### `addRules(rules: RuleModel[], groupID: string): void`
Add rules to query builder

### `deleteGroups(groupIDs: string[]): void`
Delete groups from query builder

### `refresh(): void`
Refresh query builder

### `getQueryBuilderInstance(): SyncfusionQueryBuilderComponent | null`
Get Syncfusion QueryBuilder instance

---

## 📝 QueryBuilderColumn Interface

```typescript
interface QueryBuilderColumn {
  field: string;              // Field name
  label: string;              // Display label
  type: 'string' | 'number' | 'boolean' | 'date' | 'datetime';
  operators?: any[];          // Custom operators
  template?: any;             // Custom template
  format?: string;            // Format string (for dates)
  values?: any[];             // Predefined values
  [key: string]: any;         // Additional properties
}
```

---

## 🎨 Examples

### Basic Example

```html
<app-query-builder
  [dataSource]="data"
  [columns]="columns"
  [width]="'100%'"
  [height]="'500px'">
</app-query-builder>
```

### With Initial Rule

```typescript
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';

initialRule: RuleModel = {
  condition: 'and',
  rules: [
    {
      label: 'Employee Name',
      field: 'EmployeeName',
      type: 'string',
      operator: 'contains',
      value: 'John'
    },
    {
      label: 'Salary',
      field: 'Salary',
      type: 'number',
      operator: 'greaterthan',
      value: 50000
    }
  ]
};
```

```html
<app-query-builder
  [dataSource]="data"
  [columns]="columns"
  [rule]="initialRule"
  (ruleChange)="onRuleChange($event)">
</app-query-builder>
```

### With Custom Operators

```typescript
columns: QueryBuilderColumn[] = [
  {
    field: 'EmployeeName',
    label: 'Employee Name',
    type: 'string',
    operators: [
      { key: 'equal', value: 'Equal' },
      { key: 'notequal', value: 'Not Equal' },
      { key: 'contains', value: 'Contains' },
      { key: 'startswith', value: 'Starts With' },
      { key: 'endswith', value: 'Ends With' }
    ]
  }
];
```

### Vertical Display Mode

```html
<app-query-builder
  [dataSource]="data"
  [columns]="columns"
  [displayMode]="'Vertical'"
  [height]="'600px'">
</app-query-builder>
```

---

## 🎨 Styling

### Glass Morphism
Component ใช้ Glass Morphism styling โดยอัตโนมัติ:
- Light mode: `@include glass-morphism('weak', 'light')`
- Dark mode: `@include glass-morphism('weak', 'dark')`
- Gemini theme: `@include glass-gemini('weak')`

### Custom Styling
```html
<app-query-builder
  [dataSource]="data"
  [columns]="columns"
  customClass="my-custom-query-builder">
</app-query-builder>
```

---

## 📱 Responsive

Component รองรับ responsive design:
- Mobile: ปรับขนาดและ spacing
- Tablet: ปรับ layout
- Desktop: Full features

---

## 🔗 Related Documentation

- [QUERY_BUILDER_COMPONENT_SUMMARY.md](./QUERY_BUILDER_COMPONENT_SUMMARY.md) - สรุปการสร้าง
- [Syncfusion QueryBuilder Documentation](https://ej2.syncfusion.com/angular/documentation/query-builder/getting-started/)
- [Data Grid Component](./data-grid/README.md)
- [Pivot Table Component](./pivot-table/README.md)

---

**Maintainer**: Development Team  
**Last Updated**: 2024-12-20  
**Version**: 1.0.0

