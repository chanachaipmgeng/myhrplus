# Styling Quick Reference Guide

**Date**: 2024-12-20  
**Version**: 1.0.0

---

## 🚀 Quick Start

### 1. ใช้ CSS Variables

```scss
// ✅ Good
.my-component {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
}
```

### 2. ใช้ RGB Variables สำหรับ Transparency

```scss
// ✅ Good
.my-component {
  background: rgba(var(--primary-rgb), 0.2);
  border-color: rgba(var(--primary-rgb), 0.5);
}
```

### 3. ใช้ Tailwind Classes

```html
<!-- ✅ Good -->
<div class="p-4 rounded-lg bg-white/10 backdrop-blur-lg">
  Content
</div>
```

---

## 📋 Common CSS Variables

### Primary Colors
```scss
var(--primary-color)        // rgb(59, 130, 246)
var(--primary-rgb)          // 59, 130, 246 (for rgba)
```

### Glass Morphism
```scss
var(--glass-bg)             // Base glass background
var(--glass-bg-strong)      // Strong glass background
var(--glass-bg-weak)        // Weak glass background
var(--glass-border)         // Base glass border
var(--glass-border-strong)  // Strong glass border
var(--glass-border-weak)    // Weak glass border
```

### Text Colors
```scss
var(--text-primary)         // Primary text color
var(--text-secondary)       // Secondary text color
var(--text-muted)           // Muted text color
```

### Shadows
```scss
var(--shadow-sm)            // Small shadow
var(--shadow-md)            // Medium shadow
var(--shadow-lg)            // Large shadow
var(--shadow-glass)         // Glass shadow
var(--shadow-glass-dark)    // Dark glass shadow
```

---

## 🎨 Component-Specific Variables

### Sidebar
```scss
var(--sidebar-bg-start)
var(--sidebar-bg-end)
var(--sidebar-active-bg)
var(--sidebar-hover-bg)
var(--sidebar-indicator-color)
```

### Header
```scss
var(--header-ripple-color)
var(--header-shimmer-color)
var(--header-dropdown-shadow)
var(--header-active-bg)
var(--header-unread-bg)
```

### Footer
```scss
var(--footer-bg-start)
var(--footer-bg-end)
var(--footer-border-color)
var(--footer-text-color)
```

### Menu
```scss
var(--menu-item-hover-bg)
var(--menu-item-active-bg)
var(--menu-item-active-border)
var(--menu-item-active-text)
var(--menu-item-children-border)
var(--menu-item-focus-outline)
var(--menu-badge-bg)
```

---

## 🛠️ Utility Classes

### Hover Effects
```html
<div class="hover-lift">Hover me</div>
```

### Active Indicator
```html
<div class="active-indicator">Active Item</div>
```

### Glass Effects
```html
<div class="glass-card">Card</div>
<div class="glass-card-strong">Strong Card</div>
<div class="glass-card-weak">Weak Card</div>
<div class="glass-subtle">Subtle Glass</div>
```

### Interactive Effects
```html
<button class="ripple-effect">Click me</button>
<div class="shimmer-effect">Hover for shimmer</div>
```

---

## 🎯 Theme Support

### Selectors
```scss
/* Light Mode (Default) */
.my-component {
  background: var(--glass-bg);
}

/* Dark Mode */
[data-theme='dark'] .my-component,
.dark .my-component {
  /* Handled by CSS variables */
}

/* Gemini Theme */
[data-theme='gemini'] .my-component,
body.theme-myhr .my-component {
  /* Handled by CSS variables */
}
```

### In Components
```scss
:host {
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

## 📐 Common Patterns

### Glass Card
```scss
.glass-card {
  @apply backdrop-blur-lg rounded-2xl transition-all duration-300;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
}
```

### Active State
```scss
.active {
  background: var(--menu-item-active-bg);
  border-left: 3px solid var(--menu-item-active-border);
  color: var(--menu-item-active-text);
}
```

### Hover State
```scss
.hover {
  background: var(--menu-item-hover-bg);
  transition: background 0.2s ease;
}
```

---

## 🎨 Color Usage

### Primary Color
```scss
/* Solid color */
color: var(--primary-color);

/* With transparency */
background: rgba(var(--primary-rgb), 0.2);
border-color: rgba(var(--primary-rgb), 0.5);
```

### Text Colors
```scss
color: var(--text-primary);      // Main text
color: var(--text-secondary);    // Secondary text
color: var(--text-muted);        // Muted text
```

---

## 🔧 Component Structure Template

```scss
/* ============================================
   Component Name Styles
   ============================================ */

:host {
  display: block;
}

.component-class {
  /* Use CSS variables */
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  
  /* Use @apply for Tailwind utilities */
  @apply rounded-lg p-4 transition-all duration-300;
  
  /* Theme support */
  [data-theme='dark'] &,
  .dark & {
    /* Handled by CSS variables */
  }
  
  [data-theme='gemini'] &,
  body.theme-myhr & {
    /* Handled by CSS variables */
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

---

## 📚 Related Documentation

- `CSS_VARIABLES_REFERENCE.md` - Complete CSS variables reference
- `STYLING_BEST_PRACTICES.md` - Detailed best practices
- `STYLING_SYSTEM_COMPLETE_SUMMARY.md` - Complete summary

---

**Last Updated**: 2024-12-20  
**Version**: 1.0.0

