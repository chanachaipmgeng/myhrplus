# 🚀 UX/UI Quick Reference Guide

**เวอร์ชัน**: 1.0.0  
**วันที่อัปเดต**: 2024-12-20

---

## 📋 Quick Links

- [Full Design System Rules](./UX_UI_DESIGN_SYSTEM_RULES.md)
- [Component Templates](./templates/)
- [Shared Components Analysis](./SHARED_COMPONENTS_IMPROVEMENTS.md)

---

## 🎯 Essential Rules

### 1. Always Use Design Tokens
```scss
// ✅ Good
padding: $spacing-4;
color: $gray-900;
border-radius: $radius-lg;

// ❌ Bad
padding: 16px;
color: #1e293b;
border-radius: 12px;
```

### 2. Use Shared Components
```html
<!-- ✅ Good -->
<app-glass-card>
  <app-glass-button variant="primary">Save</app-glass-button>
</app-glass-card>

<!-- ❌ Bad -->
<div class="custom-card">
  <button class="custom-button">Save</button>
</div>
```

### 3. Optimize Animations
```scss
// ✅ Good - Use transform
@include smooth-transition(transform, 0.3s);
&:hover {
  transform: translateY(-2px);
}

// ❌ Bad - Use width/height
transition: width 0.3s ease;
&:hover {
  width: 200px;
}
```

### 4. Mobile-First Responsive
```scss
// ✅ Good
.element {
  padding: $spacing-4;
  @include respond-to(md) {
    padding: $spacing-6;
  }
}

// ❌ Bad
.element {
  padding: $spacing-6;
  @include respond-to-down(md) {
    padding: $spacing-4;
  }
}
```

---

## 🧩 Common Component Patterns

### Page Structure
```html
<app-page-layout>
  <app-page-header [title]="'Title'" [actions]="actions"></app-page-header>
  <app-content-layout>
    <app-glass-card>
      <!-- Content -->
    </app-glass-card>
  </app-content-layout>
</app-page-layout>
```

### Loading States
```html
<!-- Option 1: Spinner -->
<app-loading [show]="isLoading" message="Loading..."></app-loading>

<!-- Option 2: Skeleton -->
<app-skeleton-loader type="card" [rows]="3" animation="shimmer"></app-skeleton-loader>
```

### Empty States
```html
<app-empty-state
  icon="📭"
  title="No Data"
  description="There is no data available"
  [action]="emptyStateAction">
</app-empty-state>
```

### Forms
```html
<app-glass-input
  label="Email"
  type="email"
  [(ngModel)]="email"
  [required]="true"
  [errorMessage]="emailError">
</app-glass-input>
```

### Buttons
```html
<app-glass-button
  variant="primary"
  [ariaLabel]="'Save'"
  (clicked)="onSave()">
  Save
</app-glass-button>
```

---

## 🎨 Color Quick Reference

### Primary Colors
- `$primary-500` - Main color
- `$primary-600` - Hover state
- `$primary-400` - Light state

### Semantic Colors
- `$success-500` - Success
- `$error-500` - Error
- `$warning-500` - Warning
- `$info-500` - Info

### Text Colors
- `$gray-900` - Primary text (light)
- `$gray-700` - Secondary text (light)
- `$gray-100` - Primary text (dark)
- `$gray-300` - Secondary text (dark)

---

## 📏 Spacing Quick Reference

- `$spacing-1` = 4px
- `$spacing-2` = 8px
- `$spacing-3` = 12px
- `$spacing-4` = 16px
- `$spacing-6` = 24px
- `$spacing-8` = 32px

---

## 🎬 Animation Quick Reference

### Durations
- Micro-interactions: `200ms`
- Page transitions: `300-500ms`
- Modal/Dialog: `300ms`

### Mixins
```scss
@include smooth-transition(transform, 0.3s);
@include hover-lift(2px);
@include hover-scale(1.05);
@include glow-effect($primary-500, 0.3);
```

---

## 📱 Responsive Quick Reference

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mixins
```scss
@include respond-to(md) { /* Tablet and up */ }
@include respond-to-down(sm) { /* Mobile only */ }
```

---

## ♿ Accessibility Quick Reference

### ARIA Labels
```html
<button [attr.aria-label]="'Close dialog'">
  <app-icon name="close"></app-icon>
</button>
```

### Touch Targets
```scss
.button {
  min-width: 44px;
  min-height: 44px;
}
```

### Focus Indicators
```scss
.element:focus-visible {
  @include focus-ring($primary-500);
}
```

---

## ✅ Pre-Creation Checklist

- [ ] ใช้ Design Tokens
- [ ] ใช้ Shared Components
- [ ] ใช้ Layout Components
- [ ] รองรับ Dark Mode
- [ ] รองรับ Gemini Theme
- [ ] Responsive design
- [ ] Loading states
- [ ] Empty states
- [ ] Error handling
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Touch targets ≥ 44x44px

---

## 📚 File Locations

### Design Tokens
- `src/styles/_design-tokens.scss`

### Mixins
- `src/styles/_mixins.scss`

### Components
- `src/app/shared/components/`

### Services
- `src/app/core/services/`

### Animations
- `src/app/core/animations/animations.ts`

---

**For detailed information, see [UX_UI_DESIGN_SYSTEM_RULES.md](./UX_UI_DESIGN_SYSTEM_RULES.md)**

