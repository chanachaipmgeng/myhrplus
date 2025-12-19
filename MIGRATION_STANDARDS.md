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
1.  **Master Data Pattern:** สำหรับหน้าจอ Master Data (เช่น ประเภทบริษัท, กลุ่มบริษัท) ให้ใช้ Pattern: **List Page + Modal Form**
    - List Page: แสดงตารางข้อมูลด้วย `<app-data-grid>`
    - Form Modal: ใช้ `<app-modal>` ครอบ Form สำหรับ Add/Edit
2.  **Checkbox Handling:** หาก API รับ/ส่งค่าเป็น '0'/'1' แต่ UI เป็น Boolean (Checkbox/Switch) ให้แปลงค่าในขั้นตอน `patchValue` (รับมา) และ `onSubmit` (ส่งกลับ)
3.  **Shared Components Only:** ห้ามใช้ 3rd Party Library (เช่น Syncfusion Grid) โดยตรงใน Feature Module
4.  **Dark Mode Styling:** ใช้ Tailwind `dark:` prefix สำหรับทุก element ที่ต้องการรองรับ dark mode:
    - Background: `bg-white dark:bg-slate-800`
    - Text: `text-gray-800 dark:text-slate-100`
    - Border: `border-gray-200 dark:border-slate-700`
    - Shadow: `shadow-sm dark:shadow-slate-900/50`
    - Transition: `transition-colors duration-300`
5.  **Material Icons:** ใช้ Material Icons (`material-icons`) แทน Font Awesome สำหรับ consistency
6.  **Internationalization (i18n):** ทุก Component ต้องใช้ `@ngx-translate/core` สำหรับการแปลภาษา
    - ใช้ `| translate` pipe ใน HTML templates
    - ใช้ `TranslateService.instant()` ใน TypeScript สำหรับ dynamic values (เช่น headerText, labels)
    - เพิ่ม wording ใน `src/assets/i18n/th.json` และ `src/assets/i18n/en.json`
    - Naming convention: `feature.component.key` (เช่น `company.division.title`)
    - Import `TranslateModule` ใน standalone components

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

### B. ECharts Integration
```typescript
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  imports: [NgxEchartsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  private observer?: MutationObserver;
  isDarkMode = false;
  
  chartOption: EChartsOption = {};

  ngOnInit(): void {
    this.checkDarkMode();
    this.initializeCharts();
    this.setupThemeObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private checkDarkMode(): void {
    const html = document.documentElement;
    this.isDarkMode = html.getAttribute('data-theme') === 'dark' || 
                      html.classList.contains('dark') ||
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private setupThemeObserver(): void {
    const html = document.documentElement;
    this.observer = new MutationObserver(() => {
      const wasDarkMode = this.isDarkMode;
      this.checkDarkMode();
      if (wasDarkMode !== this.isDarkMode) {
        this.initializeCharts(); // Reinitialize on theme change
      }
    });
    this.observer.observe(html, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
  }

  private getChartTextColor(): string {
    return this.isDarkMode ? '#e2e8f0' : '#1e293b';
  }

  private getChartBackgroundColor(): string {
    return this.isDarkMode ? 'transparent' : '#ffffff';
  }

  private getAxisLineColor(): string {
    return this.isDarkMode ? '#475569' : '#e2e8f0';
  }

  private getSplitLineColor(): string {
    return this.isDarkMode ? '#334155' : '#f1f5f9';
  }

  private initializeCharts(): void {
    this.chartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      xAxis: {
        axisLabel: {
          color: this.getChartTextColor()
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        },
        splitLine: {
          lineStyle: {
            color: this.getSplitLineColor()
          }
        }
      },
      yAxis: {
        axisLabel: {
          color: this.getChartTextColor()
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        },
        splitLine: {
          lineStyle: {
            color: this.getSplitLineColor()
          }
        }
      },
      // ... chart series configuration
    };
  }
}
```

### C. Chart Dark Mode Helper Methods
```typescript
// Helper methods สำหรับ Chart Options
private getChartTextColor(): string {
  return this.isDarkMode ? '#e2e8f0' : '#1e293b';
}

private getChartBackgroundColor(): string {
  return this.isDarkMode ? 'transparent' : '#ffffff';
}

private getAxisLineColor(): string {
  return this.isDarkMode ? '#475569' : '#e2e8f0';
}

private getSplitLineColor(): string {
  return this.isDarkMode ? '#334155' : '#f1f5f9';
}
```

### D. ECharts Module Configuration
ต้อง import `NgxEchartsModule` ใน `app.module.ts`:
```typescript
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  imports: [
    // ... other imports
    NgxEchartsModule.forRoot({ echarts })
  ]
})
export class AppModule { }
```

### E. Dashboard Template Example
```html
<app-page-header 
  title="Module Dashboard" 
  subtitle="คำอธิบายโมดูล">
</app-page-header>

<div class="p-5 bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
  <!-- Statistics Cards -->
  <div class="mb-8">
    <h2 class="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4 transition-colors duration-300">สถิติ</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 
                  dark:to-purple-700 text-white p-5 rounded-lg shadow-md dark:shadow-slate-900/50 
                  text-center hover:scale-105 transition-transform duration-300">
        <div class="text-4xl font-bold mb-2">{{ statistics.value }}</div>
        <div class="text-sm opacity-90">Label</div>
      </div>
    </div>
  </div>

  <!-- Main Content: Charts (3 parts) and Navigation (1 part) -->
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <!-- Charts Section: 3 columns (75%) -->
    <div class="lg:col-span-3">
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4 transition-colors duration-300">กราฟและสถิติ</h2>
        
        <!-- Charts Row 1: 2 columns -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm dark:shadow-slate-900/50 
                      border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-slate-100 mb-5 transition-colors duration-300">Chart Title</h3>
            <div echarts [options]="chartOption" class="w-full" style="height: 400px;"></div>
          </div>
          
          <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm dark:shadow-slate-900/50 
                      border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-slate-100 mb-5 transition-colors duration-300">Chart Title 2</h3>
            <div echarts [options]="chartOption2" class="w-full" style="height: 400px;"></div>
          </div>
        </div>

        <!-- Charts Row 2: Full width -->
        <div class="grid grid-cols-1 gap-5 mb-5">
          <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm dark:shadow-slate-900/50 
                      border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-slate-100 mb-5 transition-colors duration-300">Chart Title 3</h3>
            <div echarts [options]="chartOption3" class="w-full" style="height: 400px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Cards Section: 1 column (25%) -->
    <div class="lg:col-span-1">
      <div class="sticky top-5">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4 transition-colors duration-300">เมนูหลัก</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 p-6 
                      hover:shadow-md dark:hover:shadow-slate-700/50 transition-all duration-300 
                      cursor-pointer border border-gray-100 dark:border-slate-700 group"
               [routerLink]="['sub-module']">
            <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center 
                         justify-center mb-4 text-blue-600 dark:text-blue-400 transition-colors duration-300 
                         group-hover:scale-110">
              <i class="material-icons text-xl">icon_name</i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-slate-100 mb-2 transition-colors duration-300">Title</h3>
            <p class="text-sm text-gray-500 dark:text-slate-400 mb-4 transition-colors duration-300">Description</p>
            <div class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-300">
              เข้าสู่เมนู <i class="material-icons text-sm ml-2 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### F. Chart Options Dark Mode Pattern
ทุก Chart Option ต้องมี:
- `backgroundColor`: ใช้ `getChartBackgroundColor()`
- `tooltip.backgroundColor` และ `tooltip.textStyle.color`
- `xAxis.axisLabel.color`, `xAxis.axisLine.lineStyle.color`, `xAxis.splitLine.lineStyle.color`
- `yAxis.axisLabel.color`, `yAxis.axisLine.lineStyle.color`, `yAxis.splitLine.lineStyle.color`
- `legend.textStyle.color` (ถ้ามี)
- `label.color` (ถ้ามี)

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

### C. Usage in Components

**1. HTML Template (ใช้ `| translate` pipe):**
```html
<app-page-header 
  [title]="'company.division.titleFull' | translate" 
  [showBreadcrumbs]="true">
</app-page-header>

<app-glass-input
  [label]="'company.division.bu1Id' | translate"
  formControlName="bu1id"
  [errorMessage]="'company.division.bu1IdRequired' | translate">
</app-glass-input>
```

**2. TypeScript (ใช้ `TranslateService.instant()`):**
```typescript
import { TranslateService } from '@ngx-translate/core';

export class DivisionListComponent implements OnInit {
  private translate = inject(TranslateService);
  
  headerActions = [
    {
      label: this.translate.instant('common.addNew'),
      variant: 'primary' as const,
      onClick: () => this.onCreate()
    }
  ];

  columns = [
    { 
      field: 'bu1id', 
      headerText: this.translate.instant('company.division.column.bu1Id'), 
      width: '120px' 
    }
  ];
}
```

**3. Import TranslateModule:**
```typescript
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-division-list',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,  // เพิ่ม TranslateModule
    // ... other imports
  ]
})
```

### D. Adding New Translations

**1. เพิ่มใน `th.json`:**
```json
{
  "company.division.title": "ทะเบียนฝ่าย",
  "company.division.column.bu1Id": "รหัสฝ่าย (BU1 ID)",
  "common.addNew": "เพิ่มใหม่"
}
```

**2. เพิ่มใน `en.json`:**
```json
{
  "company.division.title": "Division",
  "company.division.column.bu1Id": "BU1 ID",
  "common.addNew": "Add New"
}
```

### E. Best Practices
1. **ใช้ translation keys แทน hardcoded text** ในทุก Component
2. **Group keys ตาม feature/module** เพื่อความง่ายในการจัดการ
3. **ใช้ common keys** สำหรับข้อความที่ใช้ซ้ำ (เช่น `common.addNew`, `common.save`, `common.cancel`)
4. **Translate dynamic values** ใน TypeScript (เช่น headerText, labels) ด้วย `TranslateService.instant()`
5. **Translate static text** ใน HTML ด้วย `| translate` pipe

---

## 7. Checklist ก่อนส่งงาน (Definition of Done)

- [ ] โครงสร้างโฟลเดอร์ถูกต้องตามมาตรฐาน
- [ ] ใช้ Standalone Component ทั้งหมด
- [ ] แยกไฟล์ HTML/TS
- [ ] ไม่มีการใช้ Syncfusion Component โดยตรง (ผ่าน Wrapper Shared เท่านั้น)
- [ ] ไม่มี Linter Error (`npm run lint`)
- [ ] ทดสอบเชื่อมต่อ API ผ่าน Service ที่สืบทอดจาก BaseApiService แล้ว
- [ ] Dashboard Component มี Layout ตามมาตรฐาน: Statistics ด้านบน, Charts (75%) + Navigation (25%)
- [ ] Navigation Cards Section ใช้ `sticky top-5` สำหรับการติดตามเมื่อ scroll
- [ ] รองรับ Dark Mode ทั้งหมด (HTML และ Charts)
- [ ] ใช้ Material Icons แทน Font Awesome
- [ ] Chart Options ปรับตาม Dark Mode อัตโนมัติด้วย MutationObserver
- [ ] Theme detection ทำงานถูกต้อง (ตรวจสอบ `data-theme`, `.dark` class, และ `prefers-color-scheme`)
- [ ] MutationObserver cleanup ใน `ngOnDestroy()` เพื่อป้องกัน memory leak
- [ ] Route Animation ทำงานถูกต้องเมื่อเปลี่ยนหน้า (fade + slide effect)
- [ ] ใช้ `| translate` pipe ใน HTML templates สำหรับทุกข้อความ
- [ ] ใช้ `TranslateService.instant()` ใน TypeScript สำหรับ dynamic values (headerText, labels, headerActions)
- [ ] เพิ่ม wording ใน `th.json` และ `en.json` สำหรับ Module ใหม่
- [ ] Import `TranslateModule` ใน standalone components

