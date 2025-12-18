# CSS Variables Reference Guide

**Date**: 2024-12-20  
**Version**: 1.0.0

---

## 📋 Overview

เอกสารนี้เป็นคู่มืออ้างอิงสำหรับ CSS Variables ทั้งหมดที่ใช้ในระบบ โดยแยกตามหมวดหมู่และ theme

---

## 🎨 Primary Colors

### RGB Format (สำหรับ rgba() usage)
```scss
:root {
  --primary-rgb: 59, 130, 246; /* Default: Blue */
  --primary-color: rgb(var(--primary-rgb));
}
```

**Usage**:
```scss
background: rgba(var(--primary-rgb), 0.2);
border-color: rgba(var(--primary-rgb), 0.5);
color: var(--primary-color);
```

---

## 🌈 Background Colors

### Base Backgrounds
```scss
:root {
  --bg-base: #f5f1e8;
  --bg-gradient-start: #faf8f3;
  --bg-gradient-mid: #f5f1e8;
  --bg-gradient-end: #ede8d8;
}

[data-theme='dark'],
.dark {
  --bg-base: #000000;
  --bg-gradient-start: #000000;
  --bg-gradient-mid: #0a0a0f;
  --bg-gradient-end: #1e293b;
}

[data-theme='gemini'],
body.theme-gemini {
  --bg-base: #000000;
  --bg-gradient-start: #000000;
  --bg-gradient-mid: #0a0a0f;
  --bg-gradient-end: #000000;
}
```

---

## 📝 Text Colors

### Text Color Variables
```scss
:root {
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
}

[data-theme='dark'],
.dark {
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
}

[data-theme='gemini'],
body.theme-gemini {
  --text-primary: #ffffff;
  --text-secondary: #93c5fd;
  --text-muted: #60a5fa;
}
```

---

## 🔮 Glass Morphism Colors

### Light Mode
```scss
:root {
  --glass-bg: rgba(255, 255, 255, 0.25);
  --glass-bg-strong: rgba(255, 255, 255, 0.4);
  --glass-bg-weak: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-border-strong: rgba(255, 255, 255, 0.4);
  --glass-border-weak: rgba(255, 255, 255, 0.2);
}
```

### Dark Mode
```scss
[data-theme='dark'],
.dark {
  --glass-bg: rgba(15, 23, 42, 0.25);
  --glass-bg-strong: rgba(15, 23, 42, 0.4);
  --glass-bg-weak: rgba(15, 23, 42, 0.1);
  --glass-border: rgba(51, 65, 85, 0.3);
  --glass-border-strong: rgba(51, 65, 85, 0.4);
  --glass-border-weak: rgba(51, 65, 85, 0.2);
}
```

### Gemini Theme
```scss
[data-theme='gemini'],
body.theme-gemini {
  --glass-bg: rgba(15, 23, 42, 0.9);
  --glass-bg-strong: rgba(15, 23, 42, 0.95);
  --glass-bg-weak: rgba(15, 23, 42, 0.7);
  --glass-border: rgba(59, 130, 246, 0.3);
  --glass-border-strong: rgba(59, 130, 246, 0.4);
  --glass-border-weak: rgba(59, 130, 246, 0.2);
}
```

---

## 🎭 Shadows

### Shadow Variables
```scss
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  --shadow-glass-dark: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

[data-theme='dark'],
.dark {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
}

[data-theme='gemini'],
body.theme-gemini {
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1);
}
```

---

## 📐 Sidebar Variables

### Sidebar Colors
```scss
:root {
  --sidebar-bg-start: rgba(255, 255, 255, 0.1);
  --sidebar-bg-end: rgba(255, 255, 255, 0.05);
  --sidebar-pattern-color: rgba(59, 130, 246, 0.02);
  --sidebar-icon-bg-start: rgba(255, 255, 255, 0.1);
  --sidebar-icon-bg-end: rgba(255, 255, 255, 0.05);
  --sidebar-active-bg: rgba(59, 130, 246, 0.2);
  --sidebar-hover-bg: rgba(59, 130, 246, 0.08);
  --sidebar-indicator-color: rgb(59, 130, 246);
}

[data-theme='dark'],
.dark {
  --sidebar-bg-start: rgba(0, 0, 0, 0.2);
  --sidebar-bg-end: rgba(0, 0, 0, 0.1);
  --sidebar-pattern-color: rgba(59, 130, 246, 0.03);
  --sidebar-icon-bg-start: rgba(0, 0, 0, 0.2);
  --sidebar-icon-bg-end: rgba(0, 0, 0, 0.1);
  --sidebar-active-bg: rgba(59, 130, 246, 0.2);
  --sidebar-hover-bg: rgba(59, 130, 246, 0.12);
}

[data-theme='gemini'],
body.theme-gemini {
  --sidebar-bg-start: rgba(15, 23, 42, 0.9);
  --sidebar-bg-end: rgba(30, 41, 59, 0.85);
  --sidebar-pattern-color: rgba(255, 255, 255, 0.05);
  --sidebar-icon-bg-start: rgba(59, 130, 246, 0.1);
  --sidebar-icon-bg-end: rgba(59, 130, 246, 0.05);
}
```

---

## 🎯 Header Variables

### Header Colors
```scss
:root {
  --header-ripple-color: rgba(59, 130, 246, 0.3);
  --header-shimmer-color: rgba(255, 255, 255, 0.2);
  --header-dropdown-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1);
  --header-active-bg: rgba(59, 130, 246, 0.1);
  --header-unread-bg: rgba(59, 130, 246, 0.05);
}

[data-theme='dark'],
.dark {
  --header-dropdown-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2);
}

[data-theme='gemini'],
body.theme-gemini {
  --header-dropdown-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.1);
}
```

---

## 🦶 Footer Variables

### Footer Colors
```scss
:root {
  --footer-bg-start: rgba(255, 255, 255, 0.05);
  --footer-bg-end: rgba(255, 255, 255, 0.02);
  --footer-border-color: rgba(0, 0, 0, 0.1);
  --footer-text-color: rgba(0, 0, 0, 0.6);
}

[data-theme='dark'],
.dark {
  --footer-bg-start: rgba(0, 0, 0, 0.2);
  --footer-bg-end: rgba(0, 0, 0, 0.1);
  --footer-border-color: rgba(255, 255, 255, 0.1);
  --footer-text-color: rgba(255, 255, 255, 0.6);
}

[data-theme='gemini'],
body.theme-gemini {
  --footer-bg-start: rgba(15, 23, 42, 0.8);
  --footer-bg-end: rgba(30, 41, 59, 0.7);
  --footer-border-color: rgba(59, 130, 246, 0.2);
  --footer-text-color: rgba(255, 255, 255, 0.7);
}
```

---

## 📋 Menu Variables

### Menu Colors
```scss
:root {
  --menu-item-hover-bg: rgba(255, 255, 255, 0.05);
  --menu-item-active-bg: rgba(59, 130, 246, 0.1);
  --menu-item-active-border: rgb(59, 130, 246);
  --menu-item-active-text: rgb(59, 130, 246);
  --menu-item-children-border: rgba(255, 255, 255, 0.1);
  --menu-item-focus-outline: rgba(59, 130, 246, 0.5);
  --menu-badge-bg: #ef4444;
}
```

---

## 📝 Form Variables

### Form Input Colors
```scss
:root {
  --form-input-bg: rgba(255, 255, 255, 0.1);
  --form-input-border: rgba(255, 255, 255, 0.2);
  --form-input-focus-border: rgba(59, 130, 246, 0.5);
  --form-input-focus-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  --form-label-focus-color: rgba(59, 130, 246, 0.8);
  --form-label-float-color: rgba(59, 130, 246, 0.5);
}

[data-theme='dark'],
.dark {
  --form-input-bg: rgba(15, 23, 42, 0.3);
  --form-input-border: rgba(255, 255, 255, 0.1);
  --form-input-focus-border: rgba(59, 130, 246, 0.6);
  --form-input-focus-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  --form-label-focus-color: rgba(96, 165, 250, 0.8);
  --form-input-text-color: #e2e8f0;
}

[data-theme='gemini'],
body.theme-gemini {
  --form-input-bg: rgba(15, 23, 42, 0.4);
  --form-input-border: rgba(59, 130, 246, 0.3);
  --form-input-focus-border: rgba(59, 130, 246, 0.6);
  --form-label-focus-color: rgba(147, 197, 253, 0.9);
}
```

---

## 📤 Upload/Preview Variables

### Upload & Preview Colors
```scss
:root {
  --upload-area-bg: rgba(255, 255, 255, 0.5);
  --upload-area-border: rgba(0, 0, 0, 0.12);
  --upload-area-hover-bg: rgba(59, 130, 246, 0.1);
  --upload-area-dragging-bg: rgba(59, 130, 246, 0.15);
  --preview-item-bg: rgba(255, 255, 255, 0.5);
  --preview-item-border: rgba(0, 0, 0, 0.12);
  --preview-item-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --preview-image-bg: #f5f5f5;
  --preview-text-color: rgba(255, 255, 255, 0.87);
}

[data-theme='dark'],
.dark {
  --upload-area-bg: rgba(255, 255, 255, 0.05);
  --upload-area-border: rgba(255, 255, 255, 0.12);
  --preview-item-bg: rgba(255, 255, 255, 0.05);
  --preview-item-border: rgba(255, 255, 255, 0.12);
  --preview-item-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --preview-image-bg: #1a1a1a;
  --preview-text-color: rgba(255, 255, 255, 0.87);
}

[data-theme='gemini'],
body.theme-gemini {
  --upload-area-bg: rgba(15, 23, 42, 0.3);
  --upload-area-border: rgba(59, 130, 246, 0.2);
  --preview-item-bg: rgba(15, 23, 42, 0.3);
  --preview-item-border: rgba(59, 130, 246, 0.2);
  --preview-image-bg: #0a0a0f;
}
```

---

## 🪟 Modal Variables

### Modal Colors
```scss
:root {
  --modal-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --modal-header-gradient-start: rgb(99, 102, 241);
  --modal-header-gradient-end: rgb(147, 51, 234);
  --modal-body-bg: transparent;
  --modal-body-text: inherit;
}

[data-theme='dark'],
.dark {
  --modal-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  --modal-body-bg: rgb(31, 41, 55);
  --modal-body-text: rgb(226, 232, 240);
  --modal-body-border: rgb(55, 65, 81);
  --modal-footer-border: rgb(55, 65, 81);
}
```

[data-theme='dark'],
.dark {
  --menu-item-hover-bg: rgba(255, 255, 255, 0.03);
  --menu-item-active-bg: rgba(59, 130, 246, 0.2);
  --menu-item-active-text: rgb(96, 165, 250);
  --menu-item-children-border: rgba(255, 255, 255, 0.05);
}

[data-theme='gemini'],
body.theme-gemini {
  --menu-item-hover-bg: rgba(255, 255, 255, 0.05);
  --menu-item-active-bg: rgba(59, 130, 246, 0.15);
  --menu-item-active-border: rgb(96, 165, 250);
  --menu-item-active-text: rgb(147, 197, 253);
  --menu-item-children-border: rgba(255, 255, 255, 0.1);
}
```

---

## 🎨 Gradient Variables

### Gemini Theme Gradients
```scss
[data-theme='gemini'],
body.theme-gemini {
  --gradient-primary-start: #93c5fd;
  --gradient-primary-mid: #60a5fa;
  --gradient-primary-end: #3b82f6;
  --gradient-primary-hover-start: #60a5fa;
  --gradient-primary-hover-mid: #3b82f6;
  --gradient-primary-hover-end: #2563eb;
}
```

---

## 💡 Usage Examples

### 1. Basic Usage
```scss
.my-component {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
}
```

### 2. With RGB Variables
```scss
.my-component {
  background: rgba(var(--primary-rgb), 0.2);
  border-color: rgba(var(--primary-rgb), 0.5);
}
```

### 3. Theme-Aware Styles
```scss
.my-component {
  background: var(--glass-bg);
  
  /* Automatically adapts to theme */
  [data-theme='dark'] &,
  .dark & {
    /* Dark mode styles handled by CSS variables */
  }
  
  [data-theme='gemini'] &,
  body.theme-gemini & {
    /* Gemini theme styles handled by CSS variables */
  }
}
```

### 4. Shadows
```scss
.my-card {
  box-shadow: var(--shadow-glass);
  
  [data-theme='dark'] &,
  .dark & {
    box-shadow: var(--shadow-glass-dark);
  }
}
```

---

## 🔄 Theme Switching

CSS variables จะเปลี่ยนอัตโนมัติเมื่อเปลี่ยน theme:

```typescript
// Theme Service automatically updates CSS variables
this.themeService.setMode('dark');
this.themeService.setColor('gemini');
```

---

## 📝 Best Practices

### 1. Always Use CSS Variables
```scss
// ❌ Bad
background: rgba(59, 130, 246, 0.2);

// ✅ Good
background: rgba(var(--primary-rgb), 0.2);
```

### 2. Use Theme-Aware Variables
```scss
// ❌ Bad
.dark .my-component {
  background: rgba(15, 23, 42, 0.25);
}

// ✅ Good
.my-component {
  background: var(--glass-bg);
  /* Automatically adapts to theme */
}
```

### 3. Combine with Tailwind
```scss
.my-component {
  @apply rounded-lg p-4 transition-all;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
}
```

---

## 🎯 Component-Specific Variables

### When to Create New Variables

สร้าง CSS variables ใหม่เมื่อ:
- ✅ มี color/value ที่ใช้ซ้ำในหลาย components
- ✅ ต้องการให้ theme-aware
- ✅ ต้องการให้ maintainable

### Naming Convention

```
--{component}-{property}-{variant}

Examples:
--sidebar-bg-start
--header-dropdown-shadow
--menu-item-active-bg
```

---

## 📚 Related Documentation

- `STYLING_IMPROVEMENTS_IMPLEMENTATION.md` - Implementation details
- `PHASE_2_COMPLETION_SUMMARY.md` - Phase 2 summary
- `PHASE_3_COMPLETION_SUMMARY.md` - Phase 3 summary
- `ADDITIONAL_RECOMMENDATIONS.md` - Future recommendations

---

**Last Updated**: 2024-12-20  
**Version**: 1.0.0

