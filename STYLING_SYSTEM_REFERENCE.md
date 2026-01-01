# 🎨 Styling System Reference Guide

**Last Updated**: 2025-01-01  
**Version**: 2.0.0

---

## 📋 Overview

This guide provides a comprehensive reference for the styling system, including CSS variables, utility classes, and best practices.

---

## 🎯 Design Tokens

### Location
`src/styles/_design-tokens.scss`

### CSS Variables Available

#### Spacing Scale
```scss
--spacing-xs    // 0.25rem (4px)
--spacing-sm    // 0.5rem (8px)
--spacing-md    // 1rem (16px)
--spacing-lg    // 1.5rem (24px)
--spacing-xl    // 2rem (32px)
--spacing-2xl   // 2.5rem (40px)
--spacing-3xl   // 3rem (48px)
```

#### Typography Scale
```scss
--font-size-xs    // 0.75rem (12px)
--font-size-sm    // 0.875rem (14px)
--font-size-base  // 1rem (16px)
--font-size-lg    // 1.125rem (18px)
--font-size-xl    // 1.25rem (20px)
--font-size-2xl    // 1.5rem (24px)
--font-size-3xl    // 1.875rem (30px)
--font-size-4xl    // 2.25rem (36px)
--font-size-5xl    // 3rem (48px)

--font-weight-light     // 300
--font-weight-normal    // 400
--font-weight-medium    // 500
--font-weight-semibold  // 600
--font-weight-bold      // 700

--line-height-tight   // 1.25
--line-height-normal  // 1.5
--line-height-relaxed // 1.75
--line-height-loose   // 2
```

#### Border Radius
```scss
--radius-none   // 0
--radius-sm     // 0.125rem (2px)
--radius-md     // 0.25rem (4px)
--radius-lg     // 0.5rem (8px)
--radius-xl     // 0.75rem (12px)
--radius-2xl    // 1rem (16px)
--radius-full   // 9999px
```

#### Shadows
```scss
--shadow-sm    // Small shadow
--shadow-md    // Medium shadow
--shadow-lg    // Large shadow
--shadow-xl    // Extra large shadow
--shadow-2xl   // 2X large shadow
```

#### Transitions
```scss
--transition-fast     // 150ms
--transition-base     // 200ms
--transition-slow     // 300ms
--transition-slower   // 500ms

--ease-linear    // linear
--ease-in        // cubic-bezier(0.4, 0, 1, 1)
--ease-out       // cubic-bezier(0, 0, 0.2, 1)
--ease-in-out    // cubic-bezier(0.4, 0, 0.2, 1)
```

#### Touch Targets
```scss
--touch-target-min         // 44px (minimum)
--touch-target-comfortable // 48px (comfortable)
```

#### Z-Index Scale
```scss
--z-base      // 0
--z-dropdown   // 1000
--z-sticky    // 1020
--z-fixed     // 1030
--z-modal     // 1040
--z-popover   // 1050
--z-tooltip   // 1060
--z-toast     // 1070
```

---

## 📝 Typography System

### Location
`src/styles/_typography.scss`

### Utility Classes

#### Headings
```html
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<h3 class="h3">Heading 3</h3>
<h4 class="h4">Heading 4</h4>
<h5 class="h5">Heading 5</h5>
<h6 class="h6">Heading 6</h6>
```

#### Body Text
```html
<p class="body-large">Large body text</p>
<p class="body-base">Base body text</p>
<p class="body-small">Small body text</p>
<p class="body-xs">Extra small body text</p>
```

#### Text Utilities
```html
<span class="text-truncate">Truncated text</span>
<span class="text-ellipsis-2">2-line ellipsis</span>
<span class="text-ellipsis-3">3-line ellipsis</span>
<span class="text-uppercase">UPPERCASE</span>
<span class="text-lowercase">lowercase</span>
<span class="text-capitalize">Capitalize</span>
```

#### Font Weights
```html
<span class="font-light">Light</span>
<span class="font-normal">Normal</span>
<span class="font-medium">Medium</span>
<span class="font-semibold">Semibold</span>
<span class="font-bold">Bold</span>
```

#### Text Colors
```html
<span class="text-muted">Muted text</span>
<span class="text-primary">Primary text</span>
<span class="text-secondary">Secondary text</span>
<span class="text-success">Success text</span>
<span class="text-danger">Danger text</span>
<span class="text-warning">Warning text</span>
<span class="text-info">Info text</span>
```

---

## 🎨 Component Variants

### Location
`src/styles/_component-variants.scss`

### Button Variants
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>

<!-- Sizes -->
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-block">Block</button>
```

### Card Variants
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>

<!-- Variants -->
<div class="card card-hover">Hover Card</div>
<div class="card card-outlined">Outlined Card</div>
<div class="card card-elevated">Elevated Card</div>
```

### Input Variants
```html
<div class="form-input">
  <label class="form-label">Label</label>
  <input type="text" class="form-input" />
  <span class="form-hint">Hint text</span>
  <span class="form-error">Error message</span>
</div>
```

### Badge Variants
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

---

## ✨ Micro-interactions

### Location
`src/styles/_micro-interactions.scss`

### Utility Classes

#### Hover States
```html
<div class="micro-hover">Hover Effect</div>
<div class="micro-hover-lift">Lift on Hover</div>
<div class="micro-hover-scale">Scale on Hover</div>
<div class="micro-hover-glow">Glow on Hover</div>
```

#### Active States
```html
<div class="micro-active">Active Effect</div>
<div class="micro-active-scale">Scale on Active</div>
```

#### Focus States
```html
<div class="micro-focus">Focus Effect</div>
```

#### Component-specific
```html
<button class="btn-micro">Button with Ripple</button>
<div class="card-micro">Card with Hover</div>
<input class="input-micro" type="text" />
<a href="#" class="link-micro">Link with Underline</a>
<span class="icon-micro">Icon</span>
<li class="list-item-micro">List Item</li>
<img class="img-micro" src="..." />
<span class="badge-micro">Badge</span>
```

---

## 📱 Responsive Utilities

### Location
`src/styles/_responsive-utilities.scss`

### Utility Classes

#### Tables
```html
<div class="responsive-table">
  <div class="table-desktop">Desktop Table</div>
  <div class="table-mobile">Mobile Cards</div>
</div>

<div class="table-card">
  <div class="table-card-row">
    <span class="table-card-label">Label</span>
    <span class="table-card-value">Value</span>
  </div>
</div>
```

#### Visibility
```html
<div class="mobile-only">Mobile Only</div>
<div class="desktop-only">Desktop Only</div>
```

#### Typography
```html
<p class="responsive-text">Responsive Text</p>
<h1 class="responsive-heading">Responsive Heading</h1>
```

#### Grid
```html
<div class="responsive-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Safe Areas
```html
<div class="safe-area-top">Safe Area Top</div>
<div class="safe-area-bottom">Safe Area Bottom</div>
<div class="safe-area-left">Safe Area Left</div>
<div class="safe-area-right">Safe Area Right</div>
<div class="safe-area-all">Safe Area All</div>
```

---

## 🎬 Animation Utilities

### Location
`src/styles/_mixins.scss`

### Utility Classes

#### Hover Effects
```html
<div class="hover-lift">Lift on Hover</div>
<div class="hover-glow">Glow on Hover</div>
<div class="hover-scale">Scale on Hover</div>
```

#### Fade Animations
```html
<div class="fade-in">Fade In</div>
<div class="fade-out">Fade Out</div>
<div class="fade-in-up">Fade In Up</div>
<div class="fade-in-down">Fade In Down</div>
```

#### Slide Animations
```html
<div class="slide-in-right">Slide In Right</div>
<div class="slide-in-left">Slide In Left</div>
```

#### Scale Animations
```html
<div class="scale-in">Scale In</div>
<div class="scale-out">Scale Out</div>
```

#### Other Animations
```html
<div class="pulse">Pulse</div>
<div class="shimmer">Shimmer</div>
<div class="bounce">Bounce</div>
<div class="spin">Spin</div>
```

#### Stagger Animation
```html
<div class="stagger-item">Item 1</div>
<div class="stagger-item">Item 2</div>
<div class="stagger-item">Item 3</div>
```

---

## 🎨 Semantic Colors

### Location
`src/styles.scss`

### CSS Variables

```scss
// Primary
--color-primary-rgb-value: 59, 130, 246;
rgb(var(--color-primary-rgb-value))

// Secondary
--color-secondary-rgb-value: 96, 165, 250;
rgb(var(--color-secondary-rgb-value))

// Success
--color-success-rgb-value: 34, 197, 94;
rgb(var(--color-success-rgb-value))

// Info
--color-info-rgb-value: 76, 117, 207;
rgb(var(--color-info-rgb-value))

// Warning
--color-warning-rgb-value: 234, 179, 8;
rgb(var(--color-warning-rgb-value))

// Danger
--color-danger-rgb-value: 244, 63, 94;
rgb(var(--color-danger-rgb-value))
```

### Usage in SCSS
```scss
.success-message {
  background-color: rgba(var(--color-success-rgb-value), 0.1);
  color: rgb(var(--color-success-rgb-value));
  border: 1px solid rgba(var(--color-success-rgb-value), 0.3);
}
```

---

## ♿ Accessibility

### Location
`src/styles/accessibility.scss`

### Utility Classes

```html
<!-- Screen Reader Only -->
<span class="sr-only">Screen Reader Only</span>
<span class="sr-only-focusable">Focusable Screen Reader Only</span>

<!-- Skip Links -->
<a href="#main-content" class="skip-link">Skip to Main Content</a>
```

### ARIA Support
- `[role="status"]` - Status announcements
- `[role="alert"]` - Alert announcements
- `[aria-live]` - Live region updates
- `[aria-disabled="true"]` - Disabled state
- `[aria-hidden="true"]` - Hidden content

---

## 📚 Best Practices

### 1. Use CSS Variables
```scss
// ✅ Good
.my-component {
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

// ❌ Bad
.my-component {
  padding: 1rem;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### 2. Use Utility Classes
```html
<!-- ✅ Good -->
<h1 class="h1">Heading</h1>
<button class="btn btn-primary">Button</button>
<div class="card card-hover">Card</div>

<!-- ❌ Bad -->
<h1 style="font-size: 2rem; font-weight: 700;">Heading</h1>
<button style="background: blue; color: white;">Button</button>
```

### 3. Use Semantic Colors
```scss
// ✅ Good
.success {
  background-color: rgba(var(--color-success-rgb-value), 0.1);
  color: rgb(var(--color-success-rgb-value));
}

// ❌ Bad
.success {
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}
```

### 4. Support Reduced Motion
```scss
// ✅ Good
.animated-element {
  animation: fadeIn 0.3s ease-in-out;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}
```

---

## 📖 Additional Resources

- **Design Tokens**: `src/styles/_design-tokens.scss`
- **Typography System**: `src/styles/_typography.scss`
- **Component Variants**: `src/styles/_component-variants.scss`
- **Micro-interactions**: `src/styles/_micro-interactions.scss`
- **Responsive Utilities**: `src/styles/_responsive-utilities.scss`
- **Accessibility**: `src/styles/accessibility.scss`
- **Mixins & Animations**: `src/styles/_mixins.scss`
- **Toast Styles**: `src/styles/_toast.scss`

---

**Last Updated**: 2025-01-01  
**Version**: 2.0.0

