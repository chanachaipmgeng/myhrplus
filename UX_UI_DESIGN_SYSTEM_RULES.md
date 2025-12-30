# 🎨 UX/UI Design System Rules & Guidelines

**เวอร์ชัน**: 1.2.0  
**วันที่อัปเดต**: 2024-12-29  
**สถานะ**: ✅ Active

## 📝 Recent Updates (2024-12-29)
- ✅ Added Dashboard Workspace Layout standardization guidelines
- ✅ Added workspace grid structure (Charts 75% + Quick Actions 25%)
- ✅ Added page header standardization for dashboards (custom glass-card welcome section)
- ✅ Added accessibility requirements for dashboard components
- ✅ Added chart placeholder structure guidelines

## 📝 Previous Updates (2024-12-20)
- ✅ Added background pattern animations guidelines
- ✅ Added gradient animation guidelines
- ✅ Updated color palette (gray-* instead of slate-*)
- ✅ Added prefers-reduced-motion support guidelines
- ✅ Added performance optimization guidelines for backgrounds

---

## 📋 สารบัญ

1. [Design Principles](#design-principles)
2. [Layout Standards](#layout-standards)
3. [Component Usage Guidelines](#component-usage-guidelines)
4. [Color & Typography](#color--typography)
5. [Spacing & Sizing](#spacing--sizing)
6. [Animation & Interactions](#animation--interactions)
7. [Responsive Design](#responsive-design)
8. [Accessibility Standards](#accessibility-standards)
9. [Creating New Screens](#creating-new-screens)
10. [Code Structure Template](#code-structure-template)
11. [Quality Checklist](#quality-checklist)

---

## 🎯 Design Principles

### 1. Consistency
- ✅ ใช้ Design Tokens จาก `tailwind.config.js` (migrated from SCSS)
- ✅ ใช้ Components จาก `shared/components` แทนการสร้างใหม่
- ✅ ใช้ Tailwind utility classes สำหรับ layout, spacing, และ styling
- ✅ ใช้ Tailwind plugins (`glass-morphism`, `animations`) สำหรับ reusable patterns
- ✅ ใช้ `@apply` เฉพาะเมื่อจำเป็น (เช่น Syncfusion overrides)

### 2. Glass Morphism
- ✅ ใช้ Tailwind classes: `glass`, `glass-strong`, `glass-weak`, `glass-gemini`
- ✅ ใช้ Dark Mode: `dark:glass-dark`, `dark:glass-dark-strong`, `dark:glass-dark-weak`
- ✅ ใช้ Gemini Theme: `theme-gemini:glass-gemini`, `theme-gemini:glass-gemini-strong`
- ✅ ใช้ Glass Components (`glass-card`, `glass-button`, `glass-input`)
- ✅ รองรับ Dark Mode และ Gemini Theme

### 3. Performance
- ✅ ใช้ `transform` และ `opacity` แทน `width`, `height`, `left`, `top`
- ✅ ใช้ Tailwind classes: `transition-smooth`, `hover-lift`, `hover-scale`, `active-scale`
- ✅ ใช้ Tailwind animations: `animate-fade-in`, `animate-shake`, `animate-pulse-success`
- ✅ รองรับ `prefers-reduced-motion` ผ่าน `motion-safe:` variant
- ✅ ใช้ `will-change` อย่างระมัดระวัง (Tailwind JIT optimize ให้อัตโนมัติ)

### 4. Accessibility
- ✅ WCAG 2.1 AA compliance
- ✅ Touch targets ≥ 44x44px
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Keyboard navigation support
- ✅ ARIA labels และ roles

---

## 📐 Layout Standards

### Page Structure

```html
<!-- Standard Page Layout -->
<app-page-layout>
  <app-page-header
    [title]="'Page Title'"
    [description]="'Page description'"
    [actions]="headerActions">
  </app-page-header>

  <app-content-layout>
    <!-- Main Content -->
    <app-glass-card>
      <!-- Content here -->
    </app-glass-card>
  </app-content-layout>
</app-page-layout>
```

### Layout Components

#### 1. Page Layout (`app-page-layout`)
**ใช้เมื่อ**: สร้างหน้าจอใหม่

```html
<app-page-layout>
  <!-- Page content -->
</app-page-layout>
```

**Features**:
- Responsive container
- Consistent padding
- Max-width constraints
- Animation support

#### 2. Page Header (`app-page-header`)
**ใช้เมื่อ**: ต้องการ header สำหรับหน้า

```html
<app-page-header
  [title]="'Dashboard'"
  [description]="'Overview of your data'"
  [actions]="headerActions">
</app-page-header>
```

**Properties**:
- `title`: string (required)
- `description`: string (optional)
- `actions`: Array of action buttons (optional)

#### 3. Content Layout (`app-content-layout`)
**ใช้เมื่อ**: ต้องการ container สำหรับ content

```html
<app-content-layout>
  <!-- Content -->
</app-content-layout>
```

**Features**:
- Responsive grid
- Consistent spacing
- Animation support

---

## 📊 Dashboard Workspace Layout

### Standard Structure

All module dashboards must follow this standard workspace layout structure:

1. **Page Header Section** - Custom `app-glass-card` based welcome section
2. **Statistics Cards Section** - Grid of statistics cards
3. **Workspace Grid** - Charts (75%) + Quick Actions (25%)

### Page Header (Dashboard)

For dashboard pages, use a custom `app-glass-card` based welcome section instead of `<app-page-header>`:

```html
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
  </div>
</app-glass-card>
```

### Workspace Grid

```html
<section class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8" aria-labelledby="[module]-charts-title">
  <!-- Charts Section: 3 columns (75%) -->
  <div class="lg:col-span-3">
    <h2 id="[module]-charts-title" class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      กราฟและรายงาน
    </h2>
    
    <!-- Charts Row 1: 2 columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <!-- Chart 1 & 2 -->
    </div>

    <!-- Charts Row 2: 2 columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <!-- Chart 3 & 4 -->
    </div>
  </div>

  <!-- Quick Actions Section: 1 column (25%) -->
  <div class="lg:col-span-1">
    <div class="sticky top-5">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">เมนูหลัก</h3>
      <div class="space-y-4">
        <!-- Menu Cards -->
      </div>
    </div>
  </div>
</section>
```

### Required TypeScript Method

All dashboard components must include:

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

### Module Color Themes

| Module | Gradient From | Gradient To |
|--------|---------------|-------------|
| Home | `from-indigo-500` | `to-purple-600` |
| Personal | `from-blue-500` | `to-cyan-600` |
| TA | `from-teal-500` | `to-cyan-600` |
| Payroll | `from-green-500` | `to-emerald-600` |
| Training | `from-blue-500` | `to-cyan-600` |
| Appraisal | `from-purple-500` | `to-pink-600` |
| Recruit | `from-orange-500` | `to-red-600` |
| Welfare | `from-pink-500` | `to-rose-600` |
| Setting | `from-gray-500` | `to-slate-600` |
| Company | `from-indigo-500` | `to-purple-600` |

### Accessibility Requirements

- `role="main"` on main content container
- `role="button"` on clickable statistics cards and menu cards
- `role="img"` and `aria-label` on chart containers
- `role="list"` and `role="listitem"` on activity/task lists
- `aria-labelledby` on sections linking to heading IDs
- `aria-label` on all interactive elements
- `aria-describedby` linking to descriptive elements
- `aria-hidden="true"` on decorative icons
- `tabindex="0"` on all interactive elements
- `(keydown.enter)` and `(keydown.space)` handlers
- Semantic HTML: `<section>`, `<ul>`, `<li>`

### Documentation

For complete guidelines, see `DASHBOARD_WORKSPACE_STANDARDIZATION.md`.

---

## 🧩 Component Usage Guidelines

### Glass Components

#### Glass Card
```html
<!-- Basic Usage -->
<app-glass-card>
  <h3>Card Title</h3>
  <p>Card content</p>
</app-glass-card>

<!-- With Variants -->
<app-glass-card variant="strong">
  <!-- Strong glass effect -->
</app-glass-card>

<app-glass-card variant="weak">
  <!-- Weak glass effect -->
</app-glass-card>
```

**Variants**:
- `default`: Standard glass effect
- `strong`: Stronger glass effect
- `weak`: Weaker glass effect

#### Glass Button
```html
<!-- Primary Button -->
<app-glass-button
  variant="primary"
  [ariaLabel]="'Save'"
  (clicked)="onSave()">
  Save
</app-glass-button>

<!-- Secondary Button -->
<app-glass-button
  variant="secondary"
  [ariaLabel]="'Cancel'"
  (clicked)="onCancel()">
  Cancel
</app-glass-button>

<!-- Danger Button -->
<app-glass-button
  variant="danger"
  [ariaLabel]="'Delete'"
  (clicked)="onDelete()">
  Delete
</app-glass-button>
```

**Variants**:
- `primary`: Primary action (blue gradient)
- `secondary`: Secondary action (glass effect)
- `danger`: Destructive action (red gradient)

#### Glass Input
```html
<app-glass-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  [(ngModel)]="email"
  [required]="true"
  [errorMessage]="emailError">
</app-glass-input>
```

**Properties**:
- `label`: string (required)
- `type`: string (optional, default: 'text')
- `placeholder`: string (optional)
- `required`: boolean (optional)
- `errorMessage`: string (optional)
- `disabled`: boolean (optional)

### Data Display Components

#### Statistics Card
```html
<app-statistics-card
  icon="👥"
  label="Total Users"
  value="1,234"
  [change]="12">
</app-statistics-card>
```

#### Empty State
```html
<app-empty-state
  icon="📭"
  title="No Data"
  description="There is no data available"
  [action]="emptyStateAction">
</app-empty-state>
```

#### Loading States
```html
<!-- Loading Spinner -->
<app-loading
  [show]="isLoading"
  message="Loading data...">
</app-loading>

<!-- Skeleton Loader -->
<app-skeleton-loader
  type="card"
  [rows]="3"
  animation="shimmer">
</app-skeleton-loader>
```

### Navigation Components

#### Tabs
```html
<app-tabs
  [tabs]="tabs"
  [activeTab]="activeTab"
  (activeTabChange)="onTabChange($event)">
  <div *ngIf="activeTab === 'tab1'">Tab 1 Content</div>
  <div *ngIf="activeTab === 'tab2'">Tab 2 Content</div>
</app-tabs>
```

#### Breadcrumbs
```html
<app-breadcrumbs [items]="breadcrumbItems"></app-breadcrumbs>
```

### Form Components

#### Form Validation Messages
```html
<app-form-validation-messages
  [control]="formControl"
  [fieldName]="'Email'">
</app-form-validation-messages>
```

---

## 🎨 Color & Typography

### Color Usage (Tailwind Classes)

#### Primary Colors
```html
<!-- Use Tailwind classes -->
<div class="bg-primary-500 text-primary-600 hover:bg-primary-600">
  Primary color
</div>

<!-- Dark mode -->
<div class="bg-primary-500 dark:bg-primary-400 text-primary-600 dark:text-primary-300">
  Primary with dark mode
</div>
```

#### Semantic Colors
```html
<!-- Success -->
<div class="bg-success-500 hover:bg-success-600 text-white">
  Success action
</div>

<!-- Error -->
<div class="bg-error-500 hover:bg-error-600 text-white">
  Error state
</div>

<!-- Warning -->
<div class="bg-warning-500 hover:bg-warning-600 text-white">
  Warning state
</div>

<!-- Info -->
<div class="bg-info-500 hover:bg-info-600 text-white">
  Info state
</div>
```

#### Gray Scale (Preferred over Slate)
```html
<!-- Text Colors - Use gray-* instead of slate-* for consistency -->
<p class="text-gray-900 dark:text-gray-100 theme-gemini:text-white/90">Primary text</p>
<p class="text-gray-700 dark:text-gray-300 theme-gemini:text-white/80">Secondary text</p>
<p class="text-gray-500 dark:text-gray-400 theme-gemini:text-white/70">Tertiary text</p>
```

### Typography (Tailwind Classes)

#### Font Families
```html
<!-- Primary: Inter, Sarabun, Noto Sans -->
<p class="font-sans">Default text</p>

<!-- Thai: Sarabun, Noto Sans Thai -->
<p class="thai-text">Thai text</p>
```

#### Font Sizes
```html
<p class="text-xs">12px - Extra small</p>
<p class="text-sm">14px - Small</p>
<p class="text-base">16px - Base</p>
<p class="text-lg">18px - Large</p>
<p class="text-xl">20px - Extra large</p>
<p class="text-2xl">24px - 2X large</p>
<p class="text-3xl">30px - 3X large</p>
<p class="text-4xl">36px - 4X large</p>
```

#### Font Weights
```html
<p class="font-light">300 - Light</p>
<p class="font-normal">400 - Normal</p>
<p class="font-medium">500 - Medium</p>
<p class="font-semibold">600 - Semibold</p>
<p class="font-bold">700 - Bold</p>
```

#### Usage in HTML
```html
<!-- Headings - Use gray-* instead of slate-* -->
<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 theme-gemini:text-white/90">Heading 1</h1>
<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 theme-gemini:text-white/90">Heading 2</h2>
<h3 class="text-xl font-medium text-gray-700 dark:text-gray-300 theme-gemini:text-white/80">Heading 3</h3>

<!-- Body Text -->
<p class="text-base text-gray-600 dark:text-gray-400 theme-gemini:text-white/80">Body text</p>
<p class="text-sm text-gray-500 dark:text-gray-500 theme-gemini:text-white/70">Small text</p>
```

---

## 📏 Spacing & Sizing

### Spacing Scale
```scss
$spacing-1: 0.25rem;  // 4px
$spacing-2: 0.5rem;   // 8px
$spacing-3: 0.75rem;  // 12px
$spacing-4: 1rem;     // 16px
$spacing-5: 1.25rem;  // 20px
$spacing-6: 1.5rem;   // 24px
$spacing-8: 2rem;     // 32px
$spacing-10: 2.5rem;  // 40px
$spacing-12: 3rem;    // 48px
```

### Usage
```html
<!-- Tailwind Classes -->
<div class="p-4">Padding 16px</div>
<div class="m-4">Margin 16px</div>
<div class="gap-4">Gap 16px</div>

<!-- SCSS -->
.element {
  padding: $spacing-4;
  margin: $spacing-6;
  gap: $spacing-3;
}
```

### Border Radius
```scss
$radius-sm: 0.25rem;   // 4px
$radius-md: 0.5rem;    // 8px
$radius-lg: 0.75rem;   // 12px
$radius-xl: 1rem;      // 16px
$radius-2xl: 1.5rem;   // 24px
$radius-full: 9999px;  // Full circle
```

---

## 🎬 Animation & Interactions

### Animation Principles

#### Duration Guidelines
- **Micro-interactions**: 200ms (hover, focus, active)
- **Page Transitions**: 300-500ms
- **Modal/Dialog**: 300ms
- **Loading States**: 1-2s (infinite)

#### Easing Functions
```scss
// Standard easing
cubic-bezier(0.4, 0, 0.2, 1)  // Standard
cubic-bezier(0.34, 1.56, 0.64, 1)  // Bounce
ease-in-out  // Smooth
```

### Micro-interactions

#### Hover Effects
```scss
// Use mixins
@include hover-lift(2px);
@include hover-scale(1.05);
@include glow-effect($primary-500, 0.3);
```

#### Button Interactions
```scss
.button {
  @include smooth-transition(transform box-shadow, 0.2s);
  
  &:hover:not(:disabled) {
    @include hover-lift(2px);
    @include glow-effect($primary-500, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }
}
```

### Loading Animations

#### Skeleton Loader
```html
<app-skeleton-loader
  type="card"
  [rows]="3"
  animation="shimmer">
</app-skeleton-loader>
```

**Animation Types**:
- `pulse`: Fade in/out
- `wave`: Shimmer wave
- `shimmer`: Modern shimmer effect
- `none`: No animation

### Reduced Motion Support

```scss
.animated-element {
  animation: fadeIn 0.3s ease;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    will-change: auto;
    background-position: /* static position */;
  }
}
```

### Background Patterns & Animations

#### Pattern Overlays
- **Use SCSS**: Pattern overlays should be in SCSS with `::before` or `::after` pseudo-elements
- **Animation**: Use `patternShimmer` keyframes for subtle pattern animations
- **Duration**: 12-16s for subtle, non-distracting animations
- **Accessibility**: Always include `prefers-reduced-motion` support

```scss
.element::before {
  content: '';
  position: absolute;
  background-image: radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.1) 1px, transparent 0);
  background-size: 20px 20px;
  animation: patternShimmer 12s ease-in-out infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}

@keyframes patternShimmer {
  0%, 100% {
    opacity: 0.3;
    transform: translate(0, 0);
  }
  50% {
    opacity: 0.5;
    transform: translate(1px, 1px);
  }
}
```

#### Gradient Animations
- **Use SCSS**: Gradient animations should be in SCSS
- **Animation**: Use `gradientShift` keyframes for subtle gradient shifts
- **Duration**: 20-25s for very subtle background animations
- **Performance**: Use `background-attachment: scroll` on mobile (≤768px)

```scss
.main-content {
  background: /* multi-layer gradients */;
  background-size: 100% 100%, 100% 100%, 200% 200%;
  background-position: 0% 0%, 100% 100%, 0% 50%;
  background-attachment: fixed;
  animation: gradientShift 20s ease-in-out infinite;
  
  @media (max-width: 768px) {
    background-attachment: scroll; /* Better performance on mobile */
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 0% 0%, 100% 100%, 0% 50%;
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 0%, 100% 100%, 0% 50%;
  }
  50% {
    background-position: 2% 2%, 98% 98%, 100% 50%;
  }
}
```

#### Background Duplication Prevention
- **Body Background**: Should be `transparent` to avoid duplication with main-content
- **Main Content**: Handles its own background with gradients and patterns
- **Layout Components**: Each component (header, footer, sidebar) handles its own background

---

## 📱 Responsive Design

### Breakpoints
```scss
$breakpoint-xs: 0;
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

### Mobile-First Approach

```scss
// Base styles (mobile)
.element {
  padding: $spacing-4;
  font-size: $text-base;
}

// Tablet and up
@include respond-to(md) {
  .element {
    padding: $spacing-6;
    font-size: $text-lg;
  }
}

// Desktop and up
@include respond-to(lg) {
  .element {
    padding: $spacing-8;
    font-size: $text-xl;
  }
}
```

### Touch Targets

```scss
// Minimum 44x44px for touch targets
.button,
.link,
.touchable {
  min-width: 44px;
  min-height: 44px;
  
  @include respond-to-down(sm) {
    min-width: 44px;
    min-height: 44px;
  }
}
```

### Responsive Utilities

```html
<!-- Tailwind Responsive Classes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>

<div class="text-sm md:text-base lg:text-lg">
  <!-- Responsive text -->
</div>
```

---

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text**: ≥ 4.5:1
- **Large Text**: ≥ 3:1
- **UI Components**: ≥ 3:1

#### Keyboard Navigation
```html
<!-- Focusable elements -->
<button tabindex="0">Click me</button>
<a href="#" tabindex="0">Link</a>

<!-- Skip navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

#### ARIA Labels
```html
<!-- Buttons -->
<button [attr.aria-label]="'Close dialog'">
  <app-icon name="close"></app-icon>
</button>

<!-- Forms -->
<input
  type="email"
  [attr.aria-label]="'Email address'"
  [attr.aria-required]="true"
  [attr.aria-invalid]="hasError">

<!-- Live regions -->
<div role="alert" aria-live="polite">
  {{ notificationMessage }}
</div>
```

#### Screen Reader Support
```html
<!-- Hidden but accessible -->
<span class="sr-only">Screen reader only text</span>

<!-- Visible focus indicator -->
.element:focus-visible {
  outline: 2px solid $primary-500;
  outline-offset: 2px;
}
```

---

## 🏗️ Creating New Screens

### Step-by-Step Guide

#### 1. Create Feature Module Structure
```
src/app/features/feature-name/
├── feature-name.component.ts
├── feature-name.component.html
├── feature-name.component.scss
├── feature-name-routing.module.ts
└── feature-name.module.ts
```

#### 2. Use Standard Layout
```typescript
// feature-name.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ContentLayoutComponent } from '../../shared/components/content-layout/content-layout.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';

@Component({
  selector: 'app-feature-name',
  standalone: true,
  imports: [
    CommonModule,
    PageLayoutComponent,
    PageHeaderComponent,
    ContentLayoutComponent,
    GlassCardComponent
  ],
  templateUrl: './feature-name.component.html',
  styleUrls: ['./feature-name.component.scss']
})
export class FeatureNameComponent implements OnInit {
  // Component logic
}
```

#### 3. HTML Template Structure
```html
<app-page-layout>
  <app-page-header
    [title]="'Feature Name'"
    [description]="'Feature description'"
    [actions]="headerActions">
  </app-page-header>

  <app-content-layout>
    <!-- Loading State -->
    <app-loading
      [show]="isLoading"
      message="Loading data...">
    </app-loading>

    <!-- Empty State -->
    <app-empty-state
      *ngIf="!isLoading && isEmpty"
      icon="📭"
      title="No Data"
      description="There is no data available"
      [action]="emptyStateAction">
    </app-empty-state>

    <!-- Main Content -->
    <div *ngIf="!isLoading && !isEmpty" class="space-y-4">
      <app-glass-card>
        <!-- Content here -->
      </app-glass-card>
    </div>
  </app-content-layout>
</app-page-layout>
```

#### 4. SCSS Styling
```scss
/* ============================================
   Feature Name Component Styles
   ============================================ */

@import '../../../../styles/design-tokens';
@import '../../../../styles/mixins';

:host {
  display: block;
  width: 100%;
}

/* Component Styles */
.feature-content {
  @include glass-morphism('default', 'light');
  border-radius: $radius-lg;
  padding: $spacing-6;
  
  /* Responsive */
  @include respond-to-down(sm) {
    padding: $spacing-4;
  }
}

/* Dark Mode */
.dark .feature-content {
  @include glass-morphism('default', 'dark');
}

/* Gemini Theme */
body.theme-gemini .feature-content {
  @include glass-gemini('default');
}
```

---

## 📝 Code Structure Template

### Complete Component Template

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Layout Components
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ContentLayoutComponent } from '../../shared/components/content-layout/content-layout.component';

// UI Components
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../shared/components/glass-button/glass-button.component';
import { GlassInputComponent } from '../../shared/components/glass-input/glass-input.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';

// Services
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-feature-name',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageLayoutComponent,
    PageHeaderComponent,
    ContentLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    GlassInputComponent,
    LoadingComponent,
    EmptyStateComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './feature-name.component.html',
  styleUrls: ['./feature-name.component.scss']
})
export class FeatureNameComponent implements OnInit, OnDestroy {
  // Public Properties
  isLoading = false;
  isEmpty = false;
  data: any[] = [];

  // Header Actions
  headerActions = [
    {
      label: 'Add New',
      variant: 'primary' as const,
      onClick: () => this.onAddNew()
    }
  ];

  // Empty State Action
  emptyStateAction = {
    label: 'Create New',
    variant: 'primary' as const,
    onClick: () => this.onAddNew()
  };

  // Private Properties
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Public Methods
  loadData(): void {
    this.isLoading = true;
    this.apiService.get<any[]>('/api/endpoint')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.data = response.data || [];
          this.isEmpty = this.data.length === 0;
          this.isLoading = false;
        },
        error: (error) => {
          this.notificationService.showError('Failed to load data');
          this.isLoading = false;
        }
      });
  }

  onAddNew(): void {
    // Handle add new action
  }

  // Private Methods
  private handleError(error: any): void {
    console.error('Error:', error);
    this.notificationService.showError('An error occurred');
  }
}
```

---

## ✅ Quality Checklist

### Before Creating New Screen

#### Design
- [ ] ใช้ Design Tokens จาก `_design-tokens.scss`
- [ ] ใช้ Components จาก `shared/components`
- [ ] ใช้ Layout Components (`page-layout`, `page-header`, `content-layout`)
- [ ] รองรับ Dark Mode
- [ ] รองรับ Gemini Theme
- [ ] Responsive design (mobile-first)

#### Functionality
- [ ] Loading states (skeleton loader หรือ spinner)
- [ ] Empty states
- [ ] Error handling
- [ ] Success feedback
- [ ] Form validation (ถ้ามี form)

#### Accessibility
- [ ] ARIA labels สำหรับ interactive elements
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Color contrast ≥ 4.5:1
- [ ] Touch targets ≥ 44x44px

#### Performance
- [ ] ใช้ `transform` แทน `width`/`height` สำหรับ animations
- [ ] รองรับ `prefers-reduced-motion`
- [ ] Lazy loading สำหรับ images
- [ ] Optimize API calls

#### Code Quality
- [ ] TypeScript types (no `any`)
- [ ] Error handling
- [ ] Cleanup subscriptions (`takeUntil`)
- [ ] Consistent naming conventions
- [ ] Comments สำหรับ complex logic

### Code Review Checklist

#### HTML
- [ ] Semantic HTML
- [ ] ARIA attributes
- [ ] Tailwind classes (ไม่ duplicate ใน SCSS)
- [ ] Loading/Empty states
- [ ] Error states

#### SCSS
- [ ] ใช้ Design Tokens
- [ ] ใช้ Mixins
- [ ] Responsive styles
- [ ] Dark Mode support
- [ ] Gemini Theme support
- [ ] Animation optimization

#### TypeScript
- [ ] Proper types
- [ ] Error handling
- [ ] Cleanup subscriptions
- [ ] Service injection
- [ ] Component lifecycle

---

## 🎯 Best Practices

### 1. Component Reusability
```typescript
// ✅ Good - Use shared components
<app-glass-card>
  <app-glass-button variant="primary">Save</app-glass-button>
</app-glass-card>

// ❌ Bad - Create custom components
<div class="custom-card">
  <button class="custom-button">Save</button>
</div>
```

### 2. Styling Consistency
```scss
// ✅ Good - Use design tokens
.element {
  padding: $spacing-4;
  border-radius: $radius-lg;
  color: $gray-900;
}

// ❌ Bad - Hardcoded values
.element {
  padding: 16px;
  border-radius: 12px;
  color: #1e293b;
}
```

### 3. Animation Performance
```scss
// ✅ Good - Use transform
.element {
  @include smooth-transition(transform, 0.3s);
  &:hover {
    transform: translateY(-2px);
  }
}

// ❌ Bad - Use width/height
.element {
  transition: width 0.3s ease;
  &:hover {
    width: 200px;
  }
}
```

### 4. Responsive Design
```scss
// ✅ Good - Mobile-first
.element {
  padding: $spacing-4;
  @include respond-to(md) {
    padding: $spacing-6;
  }
}

// ❌ Bad - Desktop-first
.element {
  padding: $spacing-6;
  @include respond-to-down(md) {
    padding: $spacing-4;
  }
}
```

### 5. Accessibility
```html
<!-- ✅ Good - ARIA labels -->
<button [attr.aria-label]="'Close dialog'">
  <app-icon name="close"></app-icon>
</button>

<!-- ❌ Bad - No ARIA labels -->
<button>
  <app-icon name="close"></app-icon>
</button>
```

---

## 📚 Resources

### Design Tokens
- `src/styles/_design-tokens.scss` - Colors, Typography, Spacing, etc.

### Mixins
- `src/styles/_mixins.scss` - Glass morphism, Animations, Responsive, etc.

### Components
- `src/app/shared/components/` - Reusable UI components

### Services
- `src/app/core/services/` - API, Notification, Storage, etc.

### Animations
- `src/app/core/animations/animations.ts` - Angular animations

---

## 🔄 Updates & Maintenance

### Version History
- **v1.0.0** (2024-12-20): Initial release

### Contributing
เมื่อต้องการเพิ่มหรือแก้ไข rules:
1. อัปเดตเอกสารนี้
2. อัปเดต version number
3. เพิ่ม changelog
4. Review กับ team

---

**Last Updated**: 2024-12-20  
**Maintained By**: Development Team  
**Status**: ✅ Active


