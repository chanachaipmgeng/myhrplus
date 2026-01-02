# Theme MyHR Standardization Guide

**วันที่**: 2025-01-02  
**สถานะ**: 📋 **Standardization Guide**

---

## 📋 Executive Summary

สร้างมาตรฐานสำหรับการใช้งาน `body.theme-myhr` และ `[data-theme='myhr']` ใน SCSS files เพื่อลดความซ้ำซ้อนและเพิ่มความสอดคล้อง

**สถานะปัจจุบัน**:
- ⚠️ **34 ไฟล์ SCSS** ใช้ `body.theme-myhr` หรือ `[data-theme='myhr']`
- ⚠️ **109 instances** ทั้งหมด
- ⚠️ **หลายรูปแบบ** - ไม่สอดคล้องกัน

---

## 🔍 รูปแบบการใช้งานปัจจุบัน

### 1. CSS Variables Definitions (styles.scss) ✅ **จำเป็น - เก็บไว้**

```scss
/* styles.scss - ไฟล์เดียวที่กำหนด CSS variables */
[data-theme='myhr']:not(.dark),
body.theme-myhr:not(.dark) {
  --primary-rgb: 7, 57, 156;
  --glass-bg: rgba(var(--primary-rgb), 0.7);
  /* ... more variables */
}
```

**สถานะ**: ✅ **ถูกต้อง** - เก็บไว้ที่ `styles.scss` เท่านั้น

---

### 2. Component-Specific Styles (หลายรูปแบบ) ⚠️ **ต้องมาตรฐาน**

#### Pattern A: ใช้ Tailwind Classes
```scss
// ❌ Current - ไม่สอดคล้อง
body.theme-myhr {
  .p-2 {
    @apply glass-myhr-weak;
  }
}
```

#### Pattern B: ใช้ CSS Variables
```scss
// ✅ Better - ใช้ CSS variables
[data-theme='myhr'] :host,
body.theme-myhr :host {
  background: var(--glass-bg);
  border-color: var(--glass-border-strong);
}
```

#### Pattern C: ใช้ Nested Selectors
```scss
// ⚠️ Current - ใช้ nested selectors
body.theme-myhr & {
  @apply bg-primary/20;
}
```

---

## 🎯 มาตรฐานที่แนะนำ

### Standard Pattern 1: ใช้ Tailwind Classes ใน HTML (Recommended) ✅

**แนวทาง**: ใช้ Tailwind `theme-myhr:` variant ใน HTML template แทน SCSS

**Before**:
```scss
// component.component.scss
body.theme-myhr {
  .content-card {
    @apply glass-myhr-weak;
  }
}
```

**After**:
```html
<!-- component.component.html -->
<div class="content-card glass theme-myhr:glass-myhr-weak">
  Content
</div>
```

```scss
// component.component.scss
/* ไม่ต้องมี body.theme-myhr section */
.content-card {
  @apply glass rounded-xl p-6;
}
```

**ข้อดี**:
- ✅ ไม่ต้องเขียน SCSS เพิ่ม
- ✅ ใช้ Tailwind variant ที่มีอยู่แล้ว
- ✅ Dynamic theming อัตโนมัติ

---

### Standard Pattern 2: ใช้ CSS Variables (เมื่อจำเป็น) ✅

**แนวทาง**: ใช้ CSS variables สำหรับ styles ที่ซับซ้อนหรือต้องใช้ pseudo-elements

**Before**:
```scss
body.theme-myhr {
  .content-card {
    @include glass-myhr('default');
    @include myhr-border-glow();
    &:hover {
      @include myhr-glow('default');
    }
  }
}
```

**After**:
```scss
.content-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
  transition: all 0.3s ease;

  /* Myhr theme - using CSS variables */
  [data-theme='myhr'] &,
  body.theme-myhr & {
    background: var(--glass-bg);
    border-color: var(--glass-border-strong);
    box-shadow: var(--shadow-glass), 0 0 20px rgba(var(--primary-rgb), 0.3);

    &:hover {
      box-shadow: var(--shadow-glass), 0 0 30px rgba(var(--primary-rgb), 0.4);
    }
  }
}
```

**ข้อดี**:
- ✅ ใช้ CSS variables ที่ dynamic
- ✅ รองรับทั้ง `[data-theme='myhr']` และ `body.theme-myhr`
- ✅ ไม่ต้องใช้ SCSS mixins

---

### Standard Pattern 3: ใช้ :host Selector (สำหรับ Components) ✅

**แนวทาง**: ใช้ `:host` สำหรับ component-specific styles

**Before**:
```scss
body.theme-myhr {
  ::ng-deep .glass-card {
    border: 1px solid var(--glass-border);
  }
}
```

**After**:
```scss
/* Component-specific styles */
[data-theme='myhr'] :host,
body.theme-myhr :host {
  ::ng-deep .glass-card {
    border: 1px solid var(--glass-border);
    box-shadow: var(--shadow-glass);
  }
}
```

**ข้อดี**:
- ✅ Component encapsulation
- ✅ ไม่ต้องใช้ `::ng-deep` ใน global styles
- ✅ ใช้ CSS variables

---

### Standard Pattern 4: ใช้ Nested Selectors (เมื่อจำเป็น) ⚠️

**แนวทาง**: ใช้ nested selectors เฉพาะเมื่อจำเป็นจริงๆ

**Before**:
```scss
.menu-item {
  &.active-item {
    @apply bg-primary/20;
    
    body.theme-myhr & {
      @apply bg-primary/20; /* ซ้ำซ้อน */
    }
  }
}
```

**After**:
```html
<!-- ใช้ Tailwind variant ใน HTML -->
<div class="menu-item active-item bg-primary/20 theme-myhr:bg-primary/20">
</div>
```

**หรือ**:
```scss
.menu-item {
  &.active-item {
    @apply bg-primary/20;
    /* ไม่ต้องมี body.theme-myhr section - ใช้ Tailwind variant ใน HTML */
  }
}
```

---

## 📊 รูปแบบที่พบและวิธีแก้ไข

### Pattern 1: Glass Morphism Styles

**พบใน**: theme-toggle, date-range-picker, breadcrumbs, search-filter

**Current**:
```scss
body.theme-myhr {
  .container {
    @apply glass-myhr-weak;
  }
}
```

**Standardized**:
```html
<!-- ใช้ Tailwind variant ใน HTML -->
<div class="container glass theme-myhr:glass-myhr-weak">
</div>
```

---

### Pattern 2: Component Overrides

**พบใน**: glass-button, empty-state, statistics-card

**Current**:
```scss
body.theme-myhr :host {
  ::ng-deep .glass-card {
    border: 1px solid var(--glass-border);
  }
}
```

**Standardized**:
```scss
/* ใช้ CSS variables และ :host selector */
[data-theme='myhr'] :host,
body.theme-myhr :host {
  ::ng-deep .glass-card {
    border: 1px solid var(--glass-border);
    box-shadow: var(--shadow-glass);
  }
}
```

---

### Pattern 3: Nested Selectors

**พบใน**: menu-item

**Current**:
```scss
.menu-item {
  &.active-item {
    body.theme-myhr & {
      @apply bg-primary/20;
    }
  }
}
```

**Standardized**:
```html
<!-- ใช้ Tailwind variant ใน HTML -->
<div class="menu-item active-item bg-primary/20 theme-myhr:bg-primary/20">
</div>
```

---

### Pattern 4: Syncfusion Overrides

**พบใน**: scheduler, data-grid, calendar, chart, etc.

**Current**:
```scss
body.theme-myhr & .e-header-container {
  @include syncfusion-myhr-shadow;
}
```

**Standardized**:
```scss
/* ใช้ CSS variables และ mixin */
[data-theme='myhr'] &,
body.theme-myhr & {
  .e-header-container {
    @include syncfusion-myhr-shadow;
    /* หรือใช้ CSS variables */
    box-shadow: var(--shadow-glass);
  }
}
```

---

## 🎯 Migration Strategy

### Phase 1: Simple Cases (ใช้ Tailwind) ✅

**Target**: Components ที่ใช้ `@apply glass-myhr-*`

**Files**:
- `theme-toggle.component.scss`
- `date-range-picker.component.scss`
- `breadcrumbs.component.scss`
- `search-filter.component.scss`

**Action**: ย้าย styles ไปใช้ Tailwind `theme-myhr:` variant ใน HTML

---

### Phase 2: Component Overrides (ใช้ CSS Variables) ✅

**Target**: Components ที่ใช้ `:host` และ `::ng-deep`

**Files**:
- `glass-button.component.scss`
- `empty-state.component.scss`
- `statistics-card.component.scss`

**Action**: เปลี่ยนเป็นใช้ CSS variables และ `:host` selector

---

### Phase 3: Nested Selectors (ใช้ Tailwind) ✅

**Target**: Components ที่ใช้ nested selectors

**Files**:
- `menu-item.component.scss`

**Action**: ย้าย styles ไปใช้ Tailwind variant ใน HTML

---

### Phase 4: Syncfusion Overrides (ใช้ Mixins/CSS Variables) ✅

**Target**: Components ที่ override Syncfusion styles

**Files**:
- `scheduler.component.scss`
- `data-grid.component.scss`
- `calendar.component.scss`
- `chart.component.scss`
- etc.

**Action**: ใช้ CSS variables และ mixins ที่มีอยู่แล้ว

---

## 📝 Standard Template

### สำหรับ Component ใหม่:

```scss
/* ============================================
   Component Name Component Styles
   ============================================ */

:host {
  display: block;
}

/* Base styles - ใช้ CSS variables */
.component-container {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
  transition: all 0.3s ease;
}

/* Myhr theme - ใช้ CSS variables (ถ้าจำเป็น) */
[data-theme='myhr'] :host,
body.theme-myhr :host {
  .component-container {
    /* Override เฉพาะเมื่อจำเป็น */
    border-color: var(--glass-border-strong);
    box-shadow: var(--shadow-glass), 0 0 20px rgba(var(--primary-rgb), 0.3);
  }
}
```

**HTML Template**:
```html
<!-- ใช้ Tailwind classes และ theme-myhr: variant -->
<div class="component-container glass theme-myhr:glass-myhr rounded-xl p-6">
  Content
</div>
```

---

## ✅ Best Practices

### 1. ใช้ Tailwind Classes ก่อน ✅

```html
<!-- ✅ Good - ใช้ Tailwind variant -->
<div class="glass theme-myhr:glass-myhr-weak">
</div>
```

```scss
/* ❌ Bad - ไม่ต้องเขียน SCSS */
body.theme-myhr {
  .container {
    @apply glass-myhr-weak;
  }
}
```

---

### 2. ใช้ CSS Variables สำหรับ Complex Styles ✅

```scss
/* ✅ Good - ใช้ CSS variables */
.component {
  background: var(--glass-bg);
  border-color: var(--glass-border);
  box-shadow: var(--shadow-glass);

  [data-theme='myhr'] &,
  body.theme-myhr & {
    border-color: var(--glass-border-strong);
  }
}
```

---

### 3. ใช้ :host สำหรับ Component Styles ✅

```scss
/* ✅ Good - ใช้ :host selector */
[data-theme='myhr'] :host,
body.theme-myhr :host {
  ::ng-deep .nested-element {
    background: var(--glass-bg);
  }
}
```

---

### 4. รองรับทั้ง [data-theme] และ body.theme-myhr ✅

```scss
/* ✅ Good - รองรับทั้งสองวิธี */
[data-theme='myhr'] &,
body.theme-myhr & {
  /* styles */
}
```

---

## 📊 Impact Analysis

### Before Standardization
- ❌ 34 ไฟล์ใช้ `body.theme-myhr` ในหลายรูปแบบ
- ❌ 109 instances - ไม่สอดคล้องกัน
- ❌ Hard to maintain
- ❌ Duplication

### After Standardization
- ✅ ใช้ Tailwind classes ใน HTML (ลด SCSS)
- ✅ ใช้ CSS variables สำหรับ complex styles
- ✅ Consistent patterns
- ✅ Easier maintenance

---

## 🎯 Action Items

### Priority 1: Simple Cases (Quick Wins)
1. ✅ ย้าย `@apply glass-myhr-*` ไปใช้ Tailwind variant ใน HTML
2. ✅ ลบ `body.theme-myhr` sections ที่ไม่จำเป็น

### Priority 2: Component Overrides
1. ✅ เปลี่ยนเป็นใช้ CSS variables
2. ✅ ใช้ `:host` selector

### Priority 3: Nested Selectors
1. ✅ ย้ายไปใช้ Tailwind variant ใน HTML
2. ✅ ลบ nested selectors

### Priority 4: Syncfusion Overrides
1. ✅ ใช้ CSS variables และ mixins
2. ✅ Standardize patterns

---

## 📚 Related Documentation

- **Template Analysis**: `docs/theme/TEMPLATE_THEME_MYHR_ANALYSIS.md`
- **Duplication Fix**: `docs/theme/THEME_MYHR_DUPLICATION_FIX_SUMMARY.md`
- **Styling Best Practices**: `docs/styling/STYLING_BEST_PRACTICES.md`

---

**Last Updated**: 2025-01-02  
**Status**: 📋 **Standardization Guide** - Ready for implementation

