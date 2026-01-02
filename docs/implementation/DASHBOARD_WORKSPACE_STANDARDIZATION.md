# Dashboard Workspace Standardization

**เวอร์ชัน**: 1.0.0  
**วันที่อัปเดต**: 2024-12-29  
**สถานะ**: ✅ Completed

## 📋 Overview

เอกสารนี้อธิบายมาตรฐานการสร้าง Dashboard Components ที่มีรูปแบบ Workspace Layout แบบเดียวกันทั้งหมด โดยรวมถึง Statistics Cards, Charts Section, และ Quick Actions Sidebar

## 🎯 Standard Workspace Layout Structure

### 1. Page Header Section
```html
<!-- Simplified Page Header with Welcome Section -->
<app-glass-card padding="p-5 md:p-6" customClass="mb-6 md:mb-8" [animate]="'fade-in'">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[color]-500 to-[color]-600 dark:from-[color]-600 dark:to-[color]-700 rounded-xl flex items-center justify-center shadow-lg">
          <app-icon name="[icon]" size="md" color="text-white"></app-icon>
        </div>
        <div>
          <h1 class="text-xl md:text-2xl lg:text-3xl font-bold thai-text bg-gradient-to-r from-[color]-600 to-[color]-600 bg-clip-text text-transparent">
            Module Title
          </h1>
          <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 thai-text mt-1">
            Module Subtitle
          </p>
        </div>
      </div>
      <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 thai-text mt-2">
        Module Description
      </p>
    </div>
    <!-- Optional: Info Badge -->
    <div class="flex items-center gap-2 px-3 md:px-4 py-2 bg-[color]-100/50 dark:bg-[color]-900/30 rounded-xl text-xs md:text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
      <app-icon name="[icon]" size="sm" color="text-[color]-600 dark:text-[color]-400"></app-icon>
      <span class="thai-text">Info Text</span>
    </div>
  </div>
</app-glass-card>
```

### 2. Statistics Cards Section
```html
<!-- Statistics Cards -->
<section class="mb-8" aria-labelledby="[module]-statistics-title">
  <h2 id="[module]-statistics-title" class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
    สถิติ[Module Name]
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[N] gap-5">
    <app-glass-card
      padding="p-5"
      customClass="bg-gradient-to-br from-[color]-500 to-[color]-600 dark:from-[color]-600 dark:to-[color]-700 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-[color]-400 focus-within:ring-offset-2"
      [appStagger]="[index]"
      [staggerDelay]="0.05"
      role="button"
      [attr.tabindex]="0"
      [attr.aria-label]="'[Label]: ' + statistics.[value]"
      [attr.aria-describedby]="'[module]-stat-desc-[index]'"
      (click)="navigateToRoute('/[route]')"
      (keydown.enter)="navigateToRoute('/[route]')"
      (keydown.space)="navigateToRoute('/[route]'); $event.preventDefault()">
      <div class="text-4xl font-bold mb-2">{{ statistics.[value] }}</div>
      <div class="text-sm opacity-90" id="[module]-stat-desc-[index]">[Label]</div>
      <app-icon name="[icon]" size="sm" color="text-white" customClass="mt-2" [attr.aria-hidden]="true"></app-icon>
    </app-glass-card>
    <!-- Repeat for each statistic -->
  </div>
</section>
```

### 3. Workspace Grid: Charts and Quick Actions
```html
<!-- Workspace Grid: Charts and Quick Actions -->
<section class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8" aria-labelledby="[module]-charts-title">
  <!-- Charts Section: 3 columns (75%) -->
  <div class="lg:col-span-3">
    <h2 id="[module]-charts-title" class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
      กราฟและรายงาน
    </h2>
    
    <!-- Charts Row 1: 2 columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <!-- Chart 1 -->
      <app-glass-card padding="p-5" customClass="hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
            [Chart Title]
          </h3>
          <app-icon name="[icon]" size="md" color="text-gray-400 dark:text-gray-500" [attr.aria-hidden]="true"></app-icon>
        </div>
        <div class="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 rounded-lg" role="img" aria-label="[Chart Description]">
          <div class="text-center">
            <app-icon name="[chart-icon]" size="xl" color="text-gray-400 dark:text-gray-500" [attr.aria-hidden]="true"></app-icon>
            <p class="mt-2 text-sm thai-text">[Chart Placeholder Text]</p>
          </div>
        </div>
      </app-glass-card>
      
      <!-- Chart 2 -->
      <!-- Similar structure -->
    </div>

    <!-- Charts Row 2: 2 columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <!-- Chart 3 -->
      <!-- Similar structure -->
      
      <!-- Chart 4 -->
      <!-- Similar structure -->
    </div>
  </div>

  <!-- Quick Actions Section: 1 column (25%) -->
  <div class="lg:col-span-1">
    <div class="sticky top-5">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
        เมนูหลัก
      </h3>
      <div class="space-y-4">
        <div
          *ngFor="let item of menuItems; let i = index"
          [appStagger]="i"
          [staggerDelay]="0.1"
          class="cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-400"
          role="button"
          [attr.tabindex]="0"
          [attr.aria-label]="item.title + ': ' + item.description"
          (click)="navigateToRoute(item.route)"
          (keydown.enter)="navigateToRoute(item.route)"
          (keydown.space)="navigateToRoute(item.route); $event.preventDefault()">
          <app-glass-card
            padding="p-6"
            customClass="hover:shadow-md dark:hover:shadow-gray-700/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2">
            <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:scale-110">
              <app-icon [name]="item.icon" size="lg" color="text-blue-600 dark:text-blue-400" [attr.aria-hidden]="true"></app-icon>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">{{ item.title }}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">{{ item.description }}</p>
            <div class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-300">
              เข้าสู่เมนู <app-icon name="arrow_forward" size="sm" color="text-blue-600 dark:text-blue-400" customClass="ml-2 group-hover:translate-x-1 transition-transform duration-300" [attr.aria-hidden]="true"></app-icon>
            </div>
          </app-glass-card>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 📊 Module-Specific Chart Types

### Time Attendance (TA)
- **Chart 1**: แนวโน้มการลงเวลา 7 วัน (Line Chart)
- **Chart 2**: คำขอลาเดือนนี้ (Pie Chart)
- **Chart 3**: คำขอ OT เดือนนี้ (Bar Chart)
- **Chart 4**: อัตราการลงเวลา (Area Chart)

### Training
- **Chart 1**: การลงทะเบียนอบรม 6 เดือน (Bar Chart)
- **Chart 2**: อัตราการสำเร็จการอบรม (Pie Chart)
- **Chart 3**: การอบรมตามแผนก (Stacked Bar Chart)
- **Chart 4**: การออกใบรับรอง (Area Chart)

### Appraisal
- **Chart 1**: ความคืบหน้าการประเมินผล (Bar Chart)
- **Chart 2**: การกระจายคะแนน (Pie Chart)
- **Chart 3**: ผลการดำเนินงาน KPI (Line Chart)
- **Chart 4**: เปรียบเทียบตามแผนก (Stacked Bar Chart)

### Recruit
- **Chart 1**: จำนวนผู้สมัคร 6 เดือน (Bar Chart)
- **Chart 2**: สถานะการสมัครงาน (Pie Chart)
- **Chart 3**: ตารางนัดสัมภาษณ์ (Bar Chart)
- **Chart 4**: อัตราการรับเข้าทำงาน (Area Chart)

### Welfare
- **Chart 1**: การลงทะเบียนสวัสดิการ 6 เดือน (Bar Chart)
- **Chart 2**: การกระจายสวัสดิการ (Pie Chart)
- **Chart 3**: สวัสดิการตามแผนก (Stacked Bar Chart)
- **Chart 4**: การใช้งานสวัสดิการ (Area Chart)

### Setting
- **Chart 1**: กิจกรรมผู้ใช้ 6 เดือน (Bar Chart)
- **Chart 2**: การกระจายบทบาท (Pie Chart)
- **Chart 3**: การใช้งานเมนู (Stacked Bar Chart)
- **Chart 4**: การตั้งค่าระบบ (Area Chart)

### Company Home
- **Chart 1**: โครงสร้างองค์กร (Bar Chart)
- **Chart 2**: การกระจายตามแผนก (Pie Chart)
- **Chart 3**: พนักงานตามสาขา (Stacked Bar Chart)
- **Chart 4**: การกระจายตำแหน่งงาน (Area Chart)

### Personal
- **Chart 1**: การเติบโตของพนักงาน 6 เดือน (Bar Chart)
- **Chart 2**: การกระจายพนักงานตามแผนก (Pie Chart)
- **Chart 3**: การกระจายตามอายุ (Stacked Bar Chart)
- **Chart 4**: สถานะพนักงาน (Area Chart)

## 🎨 Color Themes by Module

| Module | Primary Color | Gradient From | Gradient To |
|--------|--------------|---------------|-------------|
| Home | Indigo/Purple | `from-indigo-500` | `to-purple-600` |
| Personal | Blue/Cyan | `from-blue-500` | `to-cyan-600` |
| TA | Teal/Cyan | `from-teal-500` | `to-cyan-600` |
| Payroll | Green/Emerald | `from-green-500` | `to-emerald-600` |
| Training | Blue/Cyan | `from-blue-500` | `to-cyan-600` |
| Appraisal | Purple/Pink | `from-purple-500` | `to-pink-600` |
| Recruit | Orange/Red | `from-orange-500` | `to-red-600` |
| Welfare | Pink/Rose | `from-pink-500` | `to-rose-600` |
| Setting | Gray/Slate | `from-gray-500` | `to-slate-600` |
| Company | Indigo/Purple | `from-indigo-500` | `to-purple-600` |

## ♿ Accessibility Standards

### Required ARIA Attributes
- `role="main"` on main content container
- `role="button"` on clickable statistics cards and menu cards
- `role="img"` on chart containers
- `role="list"` and `role="listitem"` on activity/task lists
- `aria-labelledby` on sections linking to heading IDs
- `aria-label` on interactive elements
- `aria-describedby` linking to descriptive elements
- `aria-hidden="true"` on decorative icons

### Keyboard Navigation
- `tabindex="0"` on all interactive elements
- `(keydown.enter)` and `(keydown.space)` handlers
- `focus-within:ring-2` for visual focus indication
- `focus:outline-none focus:ring-2` for menu cards

### Semantic HTML
- Use `<section>` for major content blocks
- Use `<ul>` and `<li>` for lists
- Use proper heading hierarchy (`h1` → `h2` → `h3` → `h4`)

## 📐 Grid Layout Standards

### Statistics Cards
- **Small modules** (3-4 stats): `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4`
- **Medium modules** (5 stats): `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`
- **Gap**: `gap-5`
- **Stagger delay**: `0.05`

### Charts Section
- **Layout**: `grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5`
- **Chart height**: `h-64` (256px)
- **Responsive**: Charts stack on mobile, 2 columns on desktop

### Workspace Grid
- **Layout**: `grid grid-cols-1 lg:grid-cols-4 gap-6`
- **Charts**: `lg:col-span-3` (75%)
- **Quick Actions**: `lg:col-span-1` (25%)
- **Sticky sidebar**: `sticky top-5`

## 🔧 TypeScript Requirements

### Required Methods
```typescript
/**
 * Navigate to route (for keyboard navigation)
 */
navigateToRoute(route: string): void {
  if (route) {
    this.router.navigate([route]);
  }
}
```

### Statistics Structure
```typescript
statistics = {
  value1: number,
  value2: number,
  // ... more statistics
};
```

### Menu Items Structure
```typescript
menuItems = [
  {
    title: string,
    description: string,
    icon: string, // Material Icon name
    route: string
  }
];
```

## ✅ Completed Dashboards

1. ✅ **home.component** - Full workspace with ECharts + Date Range Picker
2. ✅ **ta-home.component** - Full workspace with ECharts (4 charts)
3. ✅ **payroll-home.component** - Full workspace with ECharts (4 charts)
4. ✅ **training-home.component** - Full workspace with ECharts (4 charts)
5. ✅ **appraisal-home.component** - Full workspace with ECharts (4 charts)
6. ✅ **recruit-home.component** - Full workspace with ECharts (4 charts)
7. ✅ **welfare-home.component** - Full workspace with ECharts (4 charts)
8. ✅ **setting-home.component** - Full workspace with ECharts (4 charts)
9. ✅ **company-home.component** - Full workspace with ECharts (4 charts)
10. ✅ **personal-home.component** - Full workspace with ECharts (4 charts)
11. ✅ **company-dashboard.component** - Full workspace with ECharts + Customization + Comparison Mode + Date Range Picker

## 🚀 Next Steps

### Phase 1: Placeholder Charts (✅ Completed)
- All dashboards have placeholder charts with proper structure
- Charts are ready for ECharts integration

### Phase 2: ECharts Integration (✅ Completed)
- ✅ Integrated ECharts for all 9 module dashboards (36 charts total)
- ✅ All charts support Dark/Light mode
- ✅ Theme detection and auto-reinitialize
- ✅ Responsive design and accessibility support
- ✅ Module-specific color themes

### Phase 3: Advanced Features (In Progress)
- ✅ Date range picker integration (11/11 dashboards - 100% Complete)
- ⏳ Chart export functionality
- ⏳ Dashboard customization (1/11 dashboards - company-dashboard)
- ⏳ Comparison mode toggle (1/11 dashboards - company-dashboard)

## 📝 Notes

- All dashboards follow the same workspace layout structure
- ✅ All charts are now integrated with ECharts (36 charts across 9 dashboards)
- Quick Actions sidebar is sticky and scrolls independently
- All components include full accessibility support
- Responsive design works on all screen sizes
- Dark mode support with automatic theme detection
- Mock data ready for API integration

## 📊 Statistics

- **Total Dashboards**: 11 (10 module dashboards + 1 company dashboard)
- **Total Charts**: 40 (36 module charts + 4 company dashboard charts)
- **ECharts Integration**: ✅ 100% Complete
- **Date Range Picker**: ✅ 100% Complete (11/11 dashboards)
- **Chart Export**: 0% (0/11 dashboards)
- **Dashboard Customization**: 9% (1/11 dashboards)
- **Comparison Mode**: 9% (1/11 dashboards)

