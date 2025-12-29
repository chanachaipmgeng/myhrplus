# Angular Migration Standards & Guidelines

เอกสารนี้รวบรวมมาตรฐานและข้อกำหนดสำหรับการ Migrate ระบบ HR จาก JSP มาเป็น Angular เพื่อให้โค้ดมีความเป็นระเบียบ เป็นมาตรฐานเดียวกัน และง่ายต่อการดูแลรักษา

## 1. Architecture Overview (Hybrid Module)

เราใช้สถาปัตยกรรมแบบ **Hybrid** ที่ผสมผสานความแข็งแกร่งของ Routing Module เข้ากับความทันสมัยของ Standalone Components

- **Module Routing:** ใช้ `NgModule` ในการจัดการ Routing และ Lazy Loading ของแต่ละ Feature Module
- **Standalone Components:** Component ใหม่ทั้งหมด **ต้อง** เป็น `standalone: true`
- **Shared Library:** UI Component กลางทั้งหมดอยู่ใน `SharedModule` (หรือเป็น Standalone Component ที่ export ผ่าน Shared)

---

## 2. Feature Module Structure

โครงสร้างมาตรฐานสำหรับ Feature Module ใหม่ (ตัวอย่าง: `Benefit`)

```text
src/app/features/benefit/
├── components/                 # Dumb Components (Presentation Only)
│   ├── benefit-form/
│   │   ├── benefit-form.component.ts   # standalone: true
│   │   ├── benefit-form.component.html # Separate HTML
│   │   └── benefit-form.component.scss
│   └── benefit-card/ ...
├── containers/                 # Smart Components (Pages / Data Logic)
│   ├── benefit-list/
│   │   ├── benefit-list.component.ts   # standalone: true (Main Page)
│   │   ├── benefit-list.component.html # Separate HTML
│   │   └── ...
│   └── benefit-detail/ ...
├── models/                     # Interfaces & Type Definitions
│   ├── benefit.model.ts
│   └── benefit-payload.model.ts
├── services/                   # Business Logic & API
│   └── benefit.service.ts      # extends BaseApiService
├── constants/                  # Module constants
│   └── benefit-status.constant.ts
├── benefit-routing.module.ts   # Routing Configuration
└── benefit.module.ts           # Entry Point (Routing Export Only)
```

---

## 3. Coding Standards & Rules

### A. Development Rules
1.  **Standalone First:** Component ที่สร้างใหม่ต้องเป็น `standalone: true` เสมอ
2.  **Separate Files:** ให้แยกไฟล์ `.html`, `.scss`, และ `.ts` ออกจากกันเพื่อความสะดวกในการดูแลรักษา (ยกเว้น Component ที่เล็กมากๆ)
3.  **Strict Typing:** ห้ามใช้ `any` หากจำเป็นให้ใช้ `unknown` หรือสร้าง Interface รองรับ
4.  **Signals for State:** แนะนำให้ใช้ `signal()` แทนตัวแปรปกติหรือ BehaviorSubject ในการจัดการ State ภายใน Component
5.  **Complete Data Modeling:** เมื่อสร้าง Module ใหม่ ให้ตรวจสอบไฟล์ `DBXML` ของหน้าจอนั้นๆ และสร้าง Model (Interface) และ Service ให้ครบทุก Table ที่ระบุใน `<TABLE>` tag เพื่อให้ Domain Model ครบถ้วน (แม้ว่าจะใช้เพียงบาง field ในการแสดงผลก็ตาม)
6.  **Dashboard Component:** ทุก Module ต้องมี Dashboard Component เป็นหน้าแรก (default route) โดยรวม Navigation Cards และ Statistics/Charts (ถ้ามี)
7.  **Dark Mode Support:** ทุก Component ต้องรองรับ Dark Mode โดยใช้ Tailwind `dark:` prefix และตรวจสอบ theme ผ่าน `data-theme` attribute หรือ `.dark` class
8.  **ECharts Integration:** สำหรับ Dashboard ที่ใช้ Charts ให้ใช้ ECharts ผ่าน `ngx-echarts` และปรับ Chart Options ให้รองรับ Dark Mode

### B. UI/UX Rules
1.  **Skeleton Loading:** ห้ามใช้ Spinner ตัวเดียวกลางหน้าจอสำหรับ List/Table ให้ใช้ `<app-skeleton-loader>` เพื่อ UX ที่ดีกว่า
2.  **Staggered Animation:** ใช้ Animation แบบไล่ลำดับ (Waterfall) สำหรับ List items
3.  **Toast Feedback:** ใช้ `NotificationService` แทนการ Alert หรือ Redirect หน้าเพจ
4.  **No Solid Backgrounds:** ห้ามใส่สีพื้นหลังทึบ (เช่น `bg-white`, `bg-gray-100`) ที่ Container หลักของหน้า ให้ใช้ Transparent หรือ Glass effect (`bg-white/50`, `.glass-card`) เพื่อให้ Theme Gradient ด้านหลังแสดงผลได้สวยงาม
5.  **Master Data Pattern:** สำหรับหน้าจอ Master Data (เช่น ประเภทบริษัท, กลุ่มบริษัท) ให้ใช้ Pattern: **List Page + Modal Form**
    - List Page: แสดงตารางข้อมูลด้วย `<app-data-grid>`
    - Form Modal: ใช้ `<app-modal>` ครอบ Form สำหรับ Add/Edit

### C. JSP to Angular Migration Guide (Mapping)

| JSP Element | Angular Component | หมายเหตุ |
| :--- | :--- | :--- |
| `<input type="text" class="form-control">` | `<app-glass-input>` | ใช้ Reactive Forms (`formControlName`) |
| `<div class="card">` | `<app-glass-card>` | ใช้ `padding="p-6"` เป็นมาตรฐาน |
| `<button class="btn btn-primary">` | `<app-glass-button variant="primary">` | |
| `<table class="table">` | `<app-data-grid>` หรือ `<ejs-grid>` | `<app-data-grid>` สำหรับข้อมูลทั่วไป, `<ejs-grid>` สำหรับข้อมูลซับซ้อน |
| `<div id="loading">` | `<app-skeleton-loader>` | |
| `alert("Success")` | `notificationService.showSuccess()` | Toast Message |
| `window.location.href = ...` | `router.navigate(['...'])` | SPA Routing |

### D. Refactoring Strategies (Smart vs Dumb)

**Smart Component (Container)**
- ทำหน้าที่: ดึงข้อมูล (Fetch), จัดการ State, เชื่อมต่อ Service
- ตัวอย่าง: `BenefitListComponent`
- Code:
  ```typescript
  // Smart: รู้จัก Service
  data$ = this.service.getAll();
  onSave(item: Benefit) { this.service.save(item).subscribe(...); }
  ```

**Dumb Component (Presentational)**
- ทำหน้าที่: แสดงผลอย่างเดียว, รับค่าผ่าน Input, ส่งค่าผ่าน Output
- ตัวอย่าง: `BenefitFormComponent`, `BenefitCardComponent`
- Code:
  ```typescript
  // Dumb: ไม่รู้จัก Service, รู้แค่ Data ที่ส่งมา
  @Input() benefit: Benefit;
  @Output() save = new EventEmitter<Benefit>();
  ```

---

## 4. Code Templates

### A. Feature Service Template
สืบทอดจาก `BaseApiService` เพื่อลดการเขียนโค้ดซ้ำซ้อน

```typescript
import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Benefit } from '../models/benefit.model';

@Injectable({
  providedIn: 'root'
})
export class BenefitService extends BaseApiService<Benefit> {
  // API Endpoint (ต่อท้าย environment.apiUrl)
  protected baseUrl = 'hr/benefits';

  // State Management (Signals)
  loading = signal<boolean>(false);
  
  // Custom methods...
}
```

### B. Smart Component Template (List Page)

**benefit-list.component.ts**
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { BenefitService } from '../../services/benefit.service';
// ... imports

@Component({
  selector: 'app-benefit-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    PageHeaderComponent,
    DataGridComponent,
    BenefitFormComponent // Dumb Component
  ],
  templateUrl: './benefit-list.component.html'
})
export class BenefitListComponent implements OnInit {
  public service = inject(BenefitService);
  
  // ใช้ Async Pipe เพื่อจัดการ Subscription อัตโนมัติ
  data$ = this.service.getAll();
  
  // State
  showModal = false;
  selectedItem: Benefit | null = null;

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }
}
```

**benefit-list.component.html**
```html
<app-page-header 
  [title]="'benefit.title' | translate"
  [showBreadcrumbs]="true"
  [actions]="headerActions">
</app-page-header>

<!-- Standardized Container Pattern -->
<div class="-mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 transition-colors duration-300">
  <!-- Loading State -->
  @if (service.loading()) {
    <app-skeleton-loader type="table" [rows]="10" [columns]="columns.length || 5"></app-skeleton-loader>
  } @else {
    <app-data-grid 
      [dataSource]="(data$ | async) || []"
      [columns]="columns"
      (rowSelected)="onEdit($event)">
    </app-data-grid>
  }
</div>

<app-benefit-form 
  [isOpen]="showModal" 
  [data]="selectedItem"
  (save)="onSave($event)"
  (close)="showModal = false">
</app-benefit-form>
```

---

## 5. Dashboard Component Pattern

### A. Dashboard Structure
Dashboard Component ต้องมีโครงสร้างดังนี้:
1. **Statistics Cards Section:** แสดงสถิติสำคัญด้านบนเต็มความกว้าง (ถ้ามี)
2. **Main Content Section:** แบ่งเป็น 2 คอลัมน์:
   - **Charts Section (75%):** แสดงกราฟและสถิติด้วย ECharts (ถ้ามี)
   - **Navigation Cards Section (25%):** แสดงเมนูย่อยของ Module (sticky positioning)

### A.1 Dashboard Layout Pattern
ทุก Dashboard ต้องใช้ Layout Pattern แบบ 3:1 Column Ratio:
- **Statistics Cards:** ด้านบนเต็มความกว้าง (`grid-cols-1 md:grid-cols-2 lg:grid-cols-5`)
- **Main Content:** Grid 4 columns (`lg:grid-cols-4`)
  - **Charts Section:** `lg:col-span-3` (75% ของความกว้าง)
  - **Navigation Cards:** `lg:col-span-1` (25% ของความกว้าง) + `sticky top-5`

---

## 6. Internationalization (i18n) Pattern

### A. Setup
- ใช้ `@ngx-translate/core` สำหรับการแปลภาษา
- Translation files อยู่ที่ `src/assets/i18n/th.json` และ `src/assets/i18n/en.json`
- `TranslateModule` ถูก setup แล้วใน `app.module.ts` (default language: 'th')

### B. Naming Convention
ใช้รูปแบบ `feature.component.key` สำหรับ translation keys:
- `company.division.title` - Title สำหรับ Division module
- `company.division.column.bu1Id` - Column header สำหรับ BU1 ID
- `company.division.error.email` - Error message สำหรับ email validation
- `common.addNew` - Common button label

---

## 7. Checklist ก่อนส่งงาน (Definition of Done)

- [ ] โครงสร้างโฟลเดอร์ถูกต้องตามมาตรฐาน
- [ ] ใช้ Standalone Component ทั้งหมด
- [ ] แยกไฟล์ HTML/TS
- [ ] ใช้ `<app-glass-card>` หรือ Class `.glass-card` แทน `<div>` ธรรมดา
- [ ] **ห้าม** ใส่ Background Color ทึบ (`bg-white`) ที่ Container หลัก เพื่อให้ Theme ทะลุผ่านได้
- [ ] ใช้ Skeleton Loading แทน Spinner กลางหน้าจอ
- [ ] ใช้ Reactive Forms 100%
- [ ] ใช้ `BaseApiService` ในการเชื่อมต่อ API
- [ ] ไม่มี Linter Error (`npm run lint`)
- [ ] รองรับ Dark Mode/Gemini Theme สมบูรณ์
