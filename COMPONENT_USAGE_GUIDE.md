# คู่มือการใช้งาน Components - HR Management System

**วันที่สร้าง**: 2024-12-30  
**เวอร์ชัน**: 2.3.0

---

## 📋 สารบัญ

1. [ภาพรวม Components](#ภาพรวม-components)
2. [Glass Morphism Components](#glass-morphism-components)
3. [UI Components](#ui-components)
4. [Form Components](#form-components)
5. [Data Display Components](#data-display-components)
6. [Syncfusion Components](#syncfusion-components)
7. [Layout Components](#layout-components)
8. [Best Practices](#best-practices)

---

## ภาพรวม Components

### จำนวน Components

- **Glass Morphism Components**: 3 components
- **UI Components**: 30+ components
- **Form Components**: 10+ components
- **Data Display Components**: 10+ components
- **Syncfusion Components**: 20+ components
- **Layout Components**: 5+ components

**Total**: 84+ reusable components

### Component Categories

#### 1. Glass Morphism Components
- GlassCard
- GlassButton
- GlassInput

#### 2. UI Components
- EmptyState, Loading, StatisticsCard
- Tabs, ProgressBar, Rating
- Tooltip, Modal, PageLayout
- Icon, Avatar, Spinner
- ThemeToggle, StatusBadge
- ErrorState, Breadcrumbs
- Stepper, Timeline
- SearchFilter, DateRangePicker
- FileUpload, ImageUpload
- FormValidationMessages
- ConfirmDialog, SkeletonLoader
- Pagination, Chip, Alert
- Accordion, Divider
- PageHeader, StatisticsGrid

#### 3. Form Components
- GlassInput, GlassTextarea
- GlassSelect, GlassCheckbox
- GlassRadio, GlassSwitch
- FormValidationMessages

#### 4. Data Display Components
- DataTable, DataGrid
- TreeGrid, PivotTable
- Spreadsheet, Chart
- Timeline, StatisticsCard

#### 5. Syncfusion Components
- DataGrid, TreeGrid, PivotTable
- Spreadsheet, Chart, Scheduler
- RichTextEditor, DocumentEditor
- QueryBuilder, SpeechToText
- ImageEditor, Signature
- Carousel, Gantt, FileManager
- PDFViewer, Diagrams
- Uploader, Autocomplete
- SmartTextArea, AIAssistView

---

## Glass Morphism Components

### GlassCard

**Purpose**: Card component with glass morphism effect

**Usage**:

```html
<app-glass-card [padding]="'p-6'">
  <h2>Card Title</h2>
  <p>Card content</p>
</app-glass-card>
```

**Props**:
- `padding`: string (default: 'p-4') - Padding classes
- `class`: string - Additional CSS classes

**Example**:

```html
<app-glass-card padding="p-6" class="mb-4">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-xl font-semibold">Employee Information</h3>
  </div>
  <div class="space-y-4">
    <p>Name: John Doe</p>
    <p>Position: Software Engineer</p>
  </div>
</app-glass-card>
```

### GlassButton

**Purpose**: Button component with glass styling

**Usage**:

```html
<app-glass-button 
  [type]="'button'"
  [variant]="'primary'"
  (click)="handleClick()">
  Click Me
</app-glass-button>
```

**Props**:
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `disabled`: boolean (default: false)
- `loading`: boolean (default: false)

**Example**:

```html
<app-glass-button 
  variant="primary"
  [loading]="isSubmitting"
  (click)="submitForm()">
  Submit
</app-glass-button>
```

### GlassInput

**Purpose**: Input component with glass styling

**Usage**:

```html
<app-glass-input
  [(ngModel)]="value"
  [placeholder]="'Enter text'"
  [type]="'text'"
  [required]="true">
</app-glass-input>
```

**Props**:
- `type`: string (default: 'text')
- `placeholder`: string
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `readonly`: boolean (default: false)

---

## UI Components

### EmptyState

**Purpose**: Display empty state when no data

**Usage**:

```html
<app-empty-state
  [icon]="'inbox'"
  [title]="'No data found'"
  [message]="'There are no items to display'">
</app-empty-state>
```

**Props**:
- `icon`: string - Icon name
- `title`: string - Title text
- `message`: string - Message text
- `actionLabel`: string - Action button label (optional)
- `action`: Function - Action callback (optional)

### Loading

**Purpose**: Loading indicator

**Usage**:

```html
<app-loading [message]="'Loading...'"></app-loading>
```

**Props**:
- `message`: string (optional) - Loading message

### StatisticsCard

**Purpose**: Display statistics in card format

**Usage**:

```html
<app-statistics-card
  [title]="'Total Employees'"
  [value]="150"
  [icon]="'users'"
  [trend]="'+5%'"
  [trendDirection]="'up'">
</app-statistics-card>
```

**Props**:
- `title`: string - Card title
- `value`: string | number - Statistic value
- `icon`: string - Icon name
- `trend`: string - Trend value (optional)
- `trendDirection`: 'up' | 'down' | 'neutral' (optional)
- `color`: string - Color variant (optional)

### Tabs

**Purpose**: Tab navigation component

**Usage**:

```html
<app-tabs [tabs]="tabs" (tabChange)="onTabChange($event)"></app-tabs>
```

**Props**:
- `tabs`: Tab[] - Array of tab objects
- `activeTab`: string - Active tab ID (optional)
- `tabChange`: EventEmitter<string> - Tab change event

**Tab Interface**:

```typescript
interface Tab {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}
```

### ProgressBar

**Purpose**: Progress indicator

**Usage**:

```html
<app-progress-bar 
  [value]="75" 
  [max]="100"
  [showLabel]="true">
</app-progress-bar>
```

**Props**:
- `value`: number - Current value
- `max`: number (default: 100) - Maximum value
- `showLabel`: boolean (default: false) - Show percentage label
- `color`: string - Color variant (optional)

### StatusBadge

**Purpose**: Status badge display

**Usage**:

```html
<app-status-badge 
  [status]="'active'"
  [label]="'Active'">
</app-status-badge>
```

**Props**:
- `status`: string - Status value
- `label`: string - Display label
- `variant`: 'success' | 'warning' | 'error' | 'info' (optional)

### SkeletonLoader

**Purpose**: Skeleton loading placeholder

**Usage**:

```html
@if (isLoading) {
  <app-skeleton-loader [rows]="5"></app-skeleton-loader>
} @else {
  <!-- Content -->
}
```

**Props**:
- `rows`: number (default: 3) - Number of skeleton rows
- `showAvatar`: boolean (default: false) - Show avatar skeleton
- `showTitle`: boolean (default: true) - Show title skeleton

### PageHeader

**Purpose**: Standardized page header

**Usage**:

```html
<app-page-header
  [title]="'Employee Management'"
  [subtitle]="'Manage employee information'"
  [showBreadcrumbs]="true"
  [translateTitle]="true">
</app-page-header>
```

**Props**:
- `title`: string - Page title
- `subtitle`: string (optional) - Page subtitle
- `showBreadcrumbs`: boolean (default: false) - Show breadcrumbs
- `translateTitle`: boolean (default: false) - Enable translation
- `translateSubtitle`: boolean (default: false) - Enable translation

---

## Form Components

### FormValidationMessages

**Purpose**: Display form validation messages

**Usage**:

```html
<app-form-validation-messages
  [control]="formControl"
  [fieldName]="'Email'">
</app-form-validation-messages>
```

**Props**:
- `control`: AbstractControl - Form control
- `fieldName`: string - Field name for error messages

**Example**:

```html
<form [formGroup]="employeeForm">
  <app-glass-input
    formControlName="email"
    [placeholder]="'Email'">
  </app-glass-input>
  
  <app-form-validation-messages
    [control]="employeeForm.get('email')!"
    [fieldName]="'Email'">
  </app-form-validation-messages>
</form>
```

### DateRangePicker

**Purpose**: Date range selection

**Usage**:

```html
<app-date-range-picker
  [(ngModel)]="dateRange"
  [placeholder]="'Select date range'"
  (dateChange)="onDateRangeChange($event)">
</app-date-range-picker>
```

**Props**:
- `placeholder`: string
- `minDate`: Date (optional)
- `maxDate`: Date (optional)
- `dateChange`: EventEmitter<DateRange> - Date change event

---

## Data Display Components

### DataTable

**Purpose**: Data table with sorting, filtering, pagination

**Usage**:

```html
<app-data-table
  [columns]="columns"
  [data]="employees"
  [loading]="isLoading"
  [pagination]="true"
  (rowClick)="onRowClick($event)">
</app-data-table>
```

**Props**:
- `columns`: Column[] - Column definitions
- `data`: any[] - Table data
- `loading`: boolean - Loading state
- `pagination`: boolean (default: false) - Enable pagination
- `pageSize`: number (default: 10) - Items per page
- `rowClick`: EventEmitter<any> - Row click event

**Column Interface**:

```typescript
interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  template?: TemplateRef<any>;
}
```

### StatisticsGrid

**Purpose**: Grid layout for statistics cards

**Usage**:

```html
<app-statistics-grid [columns]="4">
  <app-statistics-card *ngFor="let stat of stats" [title]="stat.title" [value]="stat.value"></app-statistics-card>
</app-statistics-grid>
```

**Props**:
- `columns`: number (default: 4) - Number of columns

---

## Syncfusion Components

### DataGrid

**Purpose**: Syncfusion Data Grid with advanced features

**Usage**:

```html
<app-data-grid
  [dataSource]="employees"
  [columns]="gridColumns"
  [allowPaging]="true"
  [allowSorting]="true"
  [allowFiltering]="true"
  (rowSelected)="onRowSelected($event)">
</app-data-grid>
```

**Props**:
- `dataSource`: any[] - Grid data source
- `columns`: Column[] - Column definitions
- `allowPaging`: boolean (default: true)
- `allowSorting`: boolean (default: true)
- `allowFiltering`: boolean (default: true)
- `allowGrouping`: boolean (default: false)
- `rowSelected`: EventEmitter<any> - Row selection event

### Chart

**Purpose**: Syncfusion Charts

**Usage**:

```html
<app-chart
  [type]="'line'"
  [data]="chartData"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig">
</app-chart>
```

**Props**:
- `type`: 'line' | 'bar' | 'pie' | 'area' | etc.
- `data`: any[] - Chart data
- `xAxis`: any - X-axis configuration
- `yAxis`: any - Y-axis configuration
- `title`: string (optional) - Chart title

### Scheduler

**Purpose**: Calendar/Scheduler component

**Usage**:

```html
<app-scheduler
  [events]="scheduleEvents"
  [views]="['Day', 'Week', 'Month']"
  (eventClick)="onEventClick($event)">
</app-scheduler>
```

**Props**:
- `events`: any[] - Schedule events
- `views`: string[] - Available views
- `eventClick`: EventEmitter<any> - Event click handler

### RichTextEditor

**Purpose**: Rich text editor

**Usage**:

```html
<app-rich-text-editor
  [(ngModel)]="htmlContent"
  [toolbar]="toolbarConfig">
</app-rich-text-editor>
```

**Props**:
- `toolbar`: any - Toolbar configuration
- `placeholder`: string (optional)

---

## Layout Components

### PageLayout

**Purpose**: Standard page layout wrapper

**Usage**:

```html
<app-page-layout>
  <app-page-header [title]="'Page Title'"></app-page-header>
  
  <app-glass-card>
    <!-- Page content -->
  </app-glass-card>
</app-page-layout>
```

### ContentLayout

**Purpose**: Content area layout

**Usage**:

```html
<app-content-layout>
  <!-- Content -->
</app-content-layout>
```

---

## Best Practices

### 1. Component Import

**Standalone Components**:

```typescript
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';

@Component({
  standalone: true,
  imports: [GlassCardComponent]
})
```

**Module Components**:

```typescript
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule]
})
```

### 2. Responsive Design

Always use responsive classes:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <app-statistics-card *ngFor="let stat of stats" [title]="stat.title"></app-statistics-card>
</div>
```

### 3. Loading States

Always show loading states:

```html
@if (isLoading) {
  <app-skeleton-loader [rows]="5"></app-skeleton-loader>
} @else {
  <app-data-table [data]="data"></app-data-table>
}
```

### 4. Error States

Handle error states:

```html
@if (hasError) {
  <app-error-state [message]="errorMessage"></app-error-state>
} @else if (isEmpty) {
  <app-empty-state [title]="'No data'"></app-empty-state>
} @else {
  <!-- Content -->
}
```

### 5. Accessibility

Always include accessibility attributes:

```html
<app-glass-button
  [attr.aria-label]="'Submit form'"
  [attr.aria-disabled]="isSubmitting">
  Submit
</app-glass-button>
```

### 6. Translation

Use translation for user-facing text:

```html
<app-page-header
  [title]="'features.employee.title'"
  [translateTitle]="true">
</app-page-header>
```

---

## Component Demo

ดูตัวอย่างการใช้งาน components ทั้งหมดได้ที่:

**Route**: `/demo`

**Features**:
- Live interactive demos
- Code examples
- API documentation
- Multiple usage examples

---

**Last Updated**: 2024-12-30  
**Version**: 2.3.0

