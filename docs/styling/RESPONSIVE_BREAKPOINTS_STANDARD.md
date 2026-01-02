# Responsive Breakpoints Standard

**วันที่สร้าง**: 2024-12-30  
**สถานะ**: ✅ Standardized  
**Version**: 1.0

---

## 📋 Overview

เอกสารนี้กำหนดมาตรฐานการใช้งาน responsive breakpoints ใน Angular HR Migration Project เพื่อให้การใช้งานสอดคล้องกันทั่วทั้งระบบ

---

## 🎯 Standard Breakpoints

### Breakpoint Values

| Breakpoint | Value | Device Type | Usage |
|------------|-------|-------------|-------|
| `xs` | `0px` | Extra small devices | Phones (portrait) - Default |
| `sm` | `640px` | Small devices | Phones (landscape), Small tablets |
| `md` | `768px` | Medium devices | Tablets, Small laptops |
| `lg` | `1024px` | Large devices | Desktops, Laptops |
| `xl` | `1280px` | Extra large devices | Large desktops |
| `2xl` | `1536px` | 2X Extra large devices | Larger desktops, 4K displays |

### Implementation

**Tailwind Config** (`tailwind.config.js`):
```javascript
screens: {
  'xs': '0px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

**Design Tokens** (`src/styles/_design-tokens.scss`):
```scss
$breakpoint-xs: 0;
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

---

## 📐 Standard Patterns

### 1. Grid Patterns

#### Small Cards (3 columns)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```
- **Mobile** (`< 768px`): 1 column
- **Tablet** (`≥ 768px`): 2 columns
- **Desktop** (`≥ 1024px`): 3 columns

**Usage**: Statistics cards, small feature cards

#### Medium Cards (4 columns)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```
- **Mobile** (`< 768px`): 1 column
- **Tablet** (`≥ 768px`): 2 columns
- **Desktop** (`≥ 1024px`): 4 columns

**Usage**: Quick actions, menu items

#### Large Cards (2 columns)
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
```
- **Mobile/Tablet** (`< 1024px`): 1 column
- **Desktop** (`≥ 1024px`): 2 columns

**Usage**: Large content cards, forms

#### Workspace Grid (Charts + Actions)
```html
<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <div class="lg:col-span-3"><!-- Charts --></div>
  <div class="lg:col-span-1"><!-- Quick Actions --></div>
</div>
```
- **Mobile/Tablet** (`< 1024px`): Stacked (1 column each)
- **Desktop** (`≥ 1024px`): Charts 75% + Actions 25%

**Usage**: Dashboard workspace layouts

---

### 2. Padding Patterns

#### Main Layout Padding
```html
<div class="p-4 md:p-6 lg:p-8">
```
- **Mobile** (`< 768px`): `p-4` (16px)
- **Tablet** (`≥ 768px`): `p-6` (24px)
- **Desktop** (`≥ 1024px`): `p-8` (32px)

**Usage**: Main content area in `main-layout.component.html`

#### Feature Component Padding
```html
<div class="-mx-4 md:-mx-6 lg:-mx-8">
  <div class="px-4 md:px-6 lg:px-8">
    <!-- Content -->
  </div>
</div>
```
- **Pattern**: Negative margin เพื่อลบ padding จาก main-layout
- **Usage**: Feature components ที่ต้องการ full-width sections

#### Content Section Padding
```html
<div class="px-4 md:px-6 lg:px-8">
```
- **Usage**: Content sections ภายใน feature components

---

### 3. Typography Patterns

#### Headings
```html
<h1 class="text-2xl md:text-3xl lg:text-4xl">Title</h1>
<h2 class="text-xl md:text-2xl lg:text-3xl">Subtitle</h2>
<h3 class="text-lg md:text-xl lg:text-2xl">Section Title</h3>
```

#### Body Text
```html
<p class="text-sm md:text-base lg:text-lg">Body text</p>
<p class="text-xs md:text-sm">Small text</p>
```

#### Icons
```html
<app-icon size="sm md:md lg:lg"></app-icon>
```

---

### 4. Spacing Patterns

#### Margins
```html
<div class="mb-4 md:mb-6 lg:mb-8">Section</div>
<div class="mt-4 md:mt-6">Content</div>
```

#### Gaps
```html
<div class="gap-4 md:gap-6">Grid</div>
<div class="gap-2 md:gap-3 lg:gap-4">List</div>
```

**Standard Gap Values**:
- Small gaps: `gap-2 md:gap-3` (8px → 12px)
- Medium gaps: `gap-4 md:gap-6` (16px → 24px)
- Large gaps: `gap-6 md:gap-8` (24px → 32px)

---

### 5. Component-Specific Patterns

#### Buttons
```html
<button class="px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3">
  Button
</button>
```

#### Cards
```html
<app-glass-card padding="p-4 md:p-6">
  Content
</app-glass-card>
```

#### Forms
```html
<div class="space-y-4 md:space-y-6">
  <app-glass-input></app-glass-input>
</div>
```

---

## ✅ Best Practices

### 1. Mobile-First Approach

**✅ DO:**
```html
<!-- Start with mobile, add larger breakpoints -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

**❌ DON'T:**
```html
<!-- Desktop-first approach -->
<div class="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
```

### 2. Consistent Breakpoint Usage

**✅ DO:**
- Use `md:` (768px) for tablet breakpoint
- Use `lg:` (1024px) for desktop breakpoint
- Use `xl:` (1280px) for large desktop (only when needed)

**❌ DON'T:**
- Mix `sm:` and `md:` arbitrarily
- Use `xl:` or `2xl:` unless necessary
- Skip breakpoints (e.g., `grid-cols-1 lg:grid-cols-3` without `md:`)

### 3. Breakpoint Selection

**When to use each breakpoint:**

- **`sm:` (640px)**: 
  - Mobile landscape orientation
  - Small tablets
  - Hide/show elements on mobile
  
- **`md:` (768px)**: 
  - Tablet devices
  - 2-column grids
  - Medium padding/spacing
  
- **`lg:` (1024px)**: 
  - Desktop devices
  - 3-4 column grids
  - Full feature visibility
  
- **`xl:` (1280px)**: 
  - Large desktops
  - Max-width containers
  - Optimal spacing for large screens

### 4. Avoid Over-Breakpointing

**✅ DO:**
```html
<!-- Simple, clear breakpoints -->
<div class="p-4 md:p-6 lg:p-8">
```

**❌ DON'T:**
```html
<!-- Too many breakpoints -->
<div class="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8">
```

---

## 📊 Common Patterns Reference

### Grid Patterns

| Pattern | Mobile | Tablet | Desktop | Usage |
|---------|--------|--------|---------|-------|
| Small Cards | 1 col | 2 cols | 3 cols | Statistics, small cards |
| Medium Cards | 1 col | 2 cols | 4 cols | Quick actions, menu items |
| Large Cards | 1 col | 1 col | 2 cols | Large content, forms |
| Workspace | Stacked | Stacked | 75% + 25% | Dashboard layouts |

### Padding Patterns

| Pattern | Mobile | Tablet | Desktop | Usage |
|---------|--------|--------|---------|-------|
| Main Layout | `p-4` | `p-6` | `p-8` | Main content area |
| Feature Component | `px-4` | `px-6` | `px-8` | Content sections |
| Cards | `p-4` | `p-5` | `p-6` | Glass cards |

### Typography Patterns

| Element | Mobile | Tablet | Desktop | Usage |
|---------|--------|--------|---------|-------|
| H1 | `text-2xl` | `text-3xl` | `text-4xl` | Page titles |
| H2 | `text-xl` | `text-2xl` | `text-3xl` | Section titles |
| H3 | `text-lg` | `text-xl` | `text-2xl` | Subsection titles |
| Body | `text-sm` | `text-base` | `text-lg` | Body text |
| Small | `text-xs` | `text-sm` | `text-sm` | Captions, hints |

---

## 🔍 Validation Checklist

เมื่อสร้างหรือแก้ไข component ให้ตรวจสอบ:

- [ ] ใช้ mobile-first approach (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [ ] ใช้ standard breakpoints (`md:`, `lg:`) ไม่ใช่ `sm:` หรือ `xl:` โดยไม่จำเป็น
- [ ] Padding pattern สอดคล้องกับมาตรฐาน (`p-4 md:p-6 lg:p-8`)
- [ ] Grid pattern สอดคล้องกับมาตรฐาน (3/4/2 columns)
- [ ] Typography responsive (`text-lg md:text-xl`)
- [ ] Spacing responsive (`gap-4 md:gap-6`)
- [ ] ไม่มี breakpoints มากเกินไป (max 2-3 breakpoints per element)

---

## 📚 Related Documentation

- **Tailwind Config**: `tailwind.config.js`
- **Design Tokens**: `src/styles/_design-tokens.scss`
- **SCSS Mixins**: `src/styles/_mixins.scss`
- **Responsive Guide**: `RESPONSIVE_BREAKPOINTS_GUIDE.md`

---

**Last Updated**: 2024-12-30  
**Status**: ✅ Standardized

