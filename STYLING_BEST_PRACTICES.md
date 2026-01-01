# Styling Best Practices Guide

**Date**: 2024-12-20  
**Version**: 1.0.0

---

## 📋 Overview

เอกสารนี้เป็นคู่มือ Best Practices สำหรับการเขียน styles ในโปรเจคนี้ ครอบคลุม CSS Variables, Tailwind CSS, และ Component Encapsulation

---

## 🎨 CSS Variables Best Practices

### 1. Always Use CSS Variables for Colors

```scss
// ❌ Bad - Hardcoded colors
.my-component {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgb(59, 130, 246);
  color: #1e293b;
}

// ✅ Good - CSS Variables
.my-component {
  background: rgba(var(--primary-rgb), 0.2);
  border: 1px solid var(--primary-color);
  color: var(--text-primary);
}
```

### 2. Use RGB Variables for Transparency

```scss
// ❌ Bad
background: rgba(59, 130, 246, 0.2);

// ✅ Good
background: rgba(var(--primary-rgb), 0.2);
```

### 3. Theme-Aware Styles

```scss
// ❌ Bad - Manual theme handling
.my-component {
  background: rgba(255, 255, 255, 0.4);
  
  .dark & {
    background: rgba(15, 23, 42, 0.4);
  }
  
  body.theme-myhr & {
    background: rgba(15, 23, 42, 0.9);
  }
}

// ✅ Good - CSS Variables handle themes automatically
.my-component {
  background: var(--glass-bg-strong);
  /* Automatically adapts to theme */
}
```

### 4. Component-Specific Variables

```scss
// ✅ Good - Create component-specific variables when needed
:root {
  --my-component-bg: rgba(255, 255, 255, 0.1);
  --my-component-border: rgba(59, 130, 246, 0.3);
}

[data-theme='dark'],
.dark {
  --my-component-bg: rgba(15, 23, 42, 0.2);
  --my-component-border: rgba(59, 130, 246, 0.4);
}
```

---

## 🎯 Tailwind CSS Best Practices

### 1. Use Tailwind for Simple Utilities

```scss
// ❌ Bad - Custom CSS for simple utilities
.my-component {
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
}

// ✅ Good - Tailwind classes in HTML
<div class="p-4 m-2 flex items-center">
```

### 2. Use @apply for Repeated Patterns

```scss
// ✅ Good - @apply for repeated patterns
.glass-card {
  @apply backdrop-blur-lg rounded-2xl transition-all duration-300;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
}
```

### 3. Combine Tailwind with CSS Variables

```scss
// ✅ Good - Combine both
.my-component {
  @apply rounded-lg p-4 transition-all;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
}
```

### 4. Dark Mode with Tailwind

```html
<!-- ✅ Good - Use dark: prefix -->
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  Content
</div>
```

---

## 🧩 Component Encapsulation Best Practices

### 1. Component Styles in Component Files

```scss
// ❌ Bad - Global styles for component
// styles.scss
::ng-deep app-my-component {
  .my-class {
    background: var(--glass-bg);
  }
}

// ✅ Good - Component-specific styles
// my-component.component.scss
:host {
  display: block;
}

.my-class {
  background: var(--glass-bg);
}
```

### 2. Use :host Selector

```scss
// ✅ Good - Use :host for component root
:host {
  display: block;
  width: 100%;
}

:host(.active) {
  background: var(--glass-bg-strong);
}
```

### 3. Avoid ::ng-deep in Global Styles

```scss
// ❌ Bad - ::ng-deep in global styles
// styles.scss
body.theme-myhr {
  ::ng-deep app-my-component {
    .my-class {
      background: var(--glass-bg);
    }
  }
}

// ✅ Good - Component-specific styles
// my-component.component.scss
[data-theme='gemini'] :host,
body.theme-myhr :host {
  .my-class {
    background: var(--glass-bg);
  }
}
```

### 4. Theme Support in Components

```scss
// ✅ Good - Support both data-theme and class-based
.my-component {
  background: var(--glass-bg);
  
  [data-theme='dark'] &,
  .dark & {
    /* Dark mode handled by CSS variables */
  }
  
  [data-theme='gemini'] &,
  body.theme-myhr & {
    /* Gemini theme handled by CSS variables */
  }
}
```

---

## 📐 Spacing Best Practices

### 1. Use Tailwind Spacing Scale

```scss
// ❌ Bad - Hardcoded spacing
.my-component {
  padding: 16px;
  margin: 24px;
  gap: 12px;
}

// ✅ Good - Tailwind spacing
<div class="p-4 m-6 gap-3">
```

### 2. Use Design Tokens for SCSS

```scss
// ✅ Good - Use design tokens in SCSS
.my-component {
  padding: $spacing-4; // 1rem
  margin: $spacing-6; // 1.5rem
}
```

---

## 🎨 Color Best Practices

### 1. Use Gray Instead of Slate

```html
<!-- ❌ Bad - Use slate -->
<div class="text-slate-900 dark:text-slate-100">

<!-- ✅ Good - Use gray -->
<div class="text-gray-900 dark:text-gray-100">
```

### 2. Use CSS Variables for Theme Colors

```scss
// ❌ Bad - Hardcoded theme colors
.my-component {
  color: rgb(59, 130, 246);
}

// ✅ Good - CSS Variables
.my-component {
  color: var(--primary-color);
}
```

---

## 🎭 Animation Best Practices

### 1. Respect Reduced Motion

```scss
// ✅ Good - Always support prefers-reduced-motion
.my-animation {
  animation: slideDown 0.3s ease-out;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}
```

### 2. Use CSS Variables for Durations

```scss
// ✅ Good - Use CSS variables for animation durations
:root {
  --animation-fast: 150ms;
  --animation-normal: 300ms;
  --animation-slow: 500ms;
}

.my-animation {
  transition: all var(--animation-normal) ease;
}
```

---

## 🔧 Utility Classes Best Practices

### 1. Create Reusable Utility Classes

```scss
// ✅ Good - Create utility classes for repeated patterns
@layer components {
  .hover-lift {
    @apply transition-transform duration-200;
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  .active-indicator {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 60%;
      background: linear-gradient(to bottom, var(--primary-color), rgb(37, 99, 235));
    }
  }
}
```

### 2. Use Utility Classes in HTML

```html
<!-- ✅ Good - Use utility classes -->
<button class="hover-lift ripple-effect">Click me</button>
<div class="active-indicator">Active Item</div>
```

---

## 📝 Code Organization Best Practices

### 1. Component SCSS Structure

```scss
/* ============================================
   Component Name Styles
   ============================================
   Using CSS Variables and Tailwind @apply
   ============================================ */

:host {
  display: block;
}

/* Component-specific styles using CSS variables */
.component-class {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  
  /* Use @apply for Tailwind utilities */
  @apply rounded-lg p-4 transition-all duration-300;
  
  /* Theme-specific styles */
  [data-theme='dark'] &,
  .dark & {
    /* Dark mode handled by CSS variables */
  }
  
  [data-theme='gemini'] &,
  body.theme-myhr & {
    /* Gemini theme handled by CSS variables */
  }
}

/* Animations */
@keyframes componentAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .component-class {
    animation: none;
  }
}
```

### 2. Global Styles Structure

```scss
/* ============================================
   CSS Variables for Theme
   ============================================ */
:root {
  /* Primary Colors */
  --primary-rgb: 59, 130, 246;
  --primary-color: rgb(var(--primary-rgb));
  
  /* Background Colors */
  --bg-base: #f5f1e8;
  
  /* ... more variables ... */
}

/* ============================================
   Glassmorphism Components
   ============================================ */
@layer components {
  .glass-card {
    @apply backdrop-blur-lg rounded-2xl;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
  }
}
```

---

## 🎯 Migration Checklist

เมื่อสร้าง component ใหม่หรืออัปเดต component เก่า ควรทำตาม checklist นี้:

### CSS Variables
- [ ] ใช้ CSS variables แทน hardcoded colors
- [ ] ใช้ `rgba(var(--primary-rgb), opacity)` สำหรับ transparency
- [ ] สร้าง component-specific variables เมื่อจำเป็น

### Tailwind CSS
- [ ] ใช้ Tailwind classes สำหรับ simple utilities
- [ ] ใช้ `@apply` สำหรับ complex repeated styles
- [ ] ใช้ `dark:` prefix สำหรับ dark mode

### Component Encapsulation
- [ ] Component styles อยู่ใน component SCSS file
- [ ] ใช้ `:host` selector สำหรับ component root
- [ ] ไม่ใช้ `::ng-deep` ใน global styles

### Theme Support
- [ ] รองรับ `[data-theme='dark']` และ `.dark`
- [ ] รองรับ `[data-theme='gemini']` และ `body.theme-myhr`
- [ ] Maintain backward compatibility

### Accessibility
- [ ] รองรับ `prefers-reduced-motion`
- [ ] ใช้ proper focus indicators
- [ ] ตรวจสอบ color contrast ratios

---

## 📚 Related Documentation

- `CSS_VARIABLES_REFERENCE.md` - CSS Variables reference
- `STYLING_IMPROVEMENTS_IMPLEMENTATION.md` - Implementation details
- `STYLING_SYSTEM_COMPLETE_SUMMARY.md` - Complete summary

---

## 🚀 Quick Reference

### Common Patterns

#### Glass Card
```scss
.glass-card {
  @apply backdrop-blur-lg rounded-2xl transition-all duration-300;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
}
```

#### Active Indicator
```scss
.active-indicator {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 60%;
    background: linear-gradient(to bottom, var(--primary-color), rgb(37, 99, 235));
  }
}
```

#### Hover Effect
```scss
.hover-lift {
  @apply transition-transform duration-200;
  &:hover {
    transform: translateY(-2px);
  }
}
```

---

**Last Updated**: 2024-12-20  
**Version**: 1.0.0

