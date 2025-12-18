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

### B. UI/UX Rules
1.  **Master Data Pattern:** สำหรับหน้าจอ Master Data (เช่น ประเภทบริษัท, กลุ่มบริษัท) ให้ใช้ Pattern: **List Page + Modal Form**
    - List Page: แสดงตารางข้อมูลด้วย `<app-data-grid>`
    - Form Modal: ใช้ `<app-modal>` ครอบ Form สำหรับ Add/Edit
2.  **Checkbox Handling:** หาก API รับ/ส่งค่าเป็น '0'/'1' แต่ UI เป็น Boolean (Checkbox/Switch) ให้แปลงค่าในขั้นตอน `patchValue` (รับมา) และ `onSubmit` (ส่งกลับ)
3.  **Shared Components Only:** ห้ามใช้ 3rd Party Library (เช่น Syncfusion Grid) โดยตรงใน Feature Module

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
    BenefitFormComponent
  ],
  templateUrl: './benefit-list.component.html'
})
export class BenefitListComponent implements OnInit {
  public service = inject(BenefitService);
  data$ = this.service.getAll();
  // ... logic
}
```

**benefit-list.component.html**
```html
<app-page-header title="Benefits" (actionClick)="onCreate()"></app-page-header>
<div class="p-6">
  <app-data-grid 
    [data]="(data$ | async) || []" 
    [loading]="service.loading()"
    (rowSelected)="onEdit($event)">
  </app-data-grid>
</div>
<app-benefit-form [isOpen]="showModal" ...></app-benefit-form>
```

---

## 5. Checklist ก่อนส่งงาน (Definition of Done)

- [ ] โครงสร้างโฟลเดอร์ถูกต้องตามมาตรฐาน
- [ ] ใช้ Standalone Component ทั้งหมด
- [ ] แยกไฟล์ HTML/TS
- [ ] ไม่มีการใช้ Syncfusion Component โดยตรง (ผ่าน Wrapper Shared เท่านั้น)
- [ ] ไม่มี Linter Error (`npm run lint`)
- [ ] ทดสอบเชื่อมต่อ API ผ่าน Service ที่สืบทอดจาก BaseApiService แล้ว
