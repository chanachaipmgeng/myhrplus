# Color Usage Standard

**วันที่สร้าง**: 2024-12-30  
**สถานะ**: ✅ Standardized  
**Version**: 1.0

---

## 📋 Overview

เอกสารนี้กำหนดมาตรฐานการใช้งานสีใน Angular HR Migration Project เพื่อให้การใช้งานสอดคล้องกันและรองรับ dynamic theming

---

## 🎯 Core Principles

### 1. **ALWAYS Use CSS Variables for Primary Colors**

**✅ DO:**
- Use CSS variables: `var(--primary-rgb)`, `var(--primary-color)`
- Use utility classes: `bg-primary`, `text-primary`, `border-primary`
- Use SCSS: `rgba(var(--primary-rgb), 0.2)`

**❌ DON'T:**
- Hardcoded hex: `#07399C`, `#0ea5e9`
- Hardcoded RGB: `rgba(59, 130, 246, 0.2)`, `rgb(59, 130, 246)`
- Tailwind color classes: `bg-blue-500`, `text-indigo-600`

### 2. **Use Semantic Color Names**

**✅ DO:**
- `bg-primary`, `text-primary`, `border-primary`
- `bg-success`, `text-success`, `border-success`
- `bg-error`, `text-error`, `border-error`
- `bg-warning`, `text-warning`, `border-warning`

**❌ DON'T:**
- `bg-blue-500`, `text-indigo-600`
- `bg-green-500`, `text-red-600`

---

## 📐 Usage Patterns

### 1. HTML/Template

#### Background Colors
```html
<!-- ✅ Good -->
<div class="bg-primary">Content</div>
<div class="bg-primary/10">Light background</div>
<div class="bg-primary/20">Medium background</div>
<div class="bg-primary/50">Semi-transparent</div>

<!-- ❌ Bad -->
<div class="bg-blue-500">Content</div>
<div style="background-color: #07399C;">Content</div>
```

#### Text Colors
```html
<!-- ✅ Good -->
<p class="text-primary">Primary text</p>
<p class="text-primary/80">Semi-transparent text</p>

<!-- ❌ Bad -->
<p class="text-blue-500">Primary text</p>
<p style="color: #07399C;">Primary text</p>
```

#### Border Colors
```html
<!-- ✅ Good -->
<div class="border-primary">Border</div>
<div class="border-primary/20">Light border</div>
<div class="border-primary/50">Medium border</div>

<!-- ❌ Bad -->
<div class="border-blue-500">Border</div>
<div style="border-color: #07399C;">Border</div>
```

#### Gradients
```html
<!-- ✅ Good -->
<div class="bg-gradient-primary">Gradient</div>
<div class="from-primary to-primary/80">Custom gradient</div>

<!-- ❌ Bad -->
<div class="bg-gradient-to-r from-blue-500 to-indigo-600">Gradient</div>
```

---

### 2. SCSS

#### Using CSS Variables
```scss
// ✅ Good
.my-component {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
}
```

#### Using RGB Variables for Transparency
```scss
// ✅ Good
.my-component {
  background: rgba(var(--primary-rgb), 0.2);
  border-color: rgba(var(--primary-rgb), 0.5);
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.1);
}

// ❌ Bad
.my-component {
  background: rgba(59, 130, 246, 0.2);
  border-color: #07399C;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.1);
}
```

#### Using Primary Color Directly
```scss
// ✅ Good
.my-component {
  color: var(--primary-color);
  background: rgb(var(--primary-rgb));
}

// ❌ Bad
.my-component {
  color: #07399C;
  background: rgb(59, 130, 246);
}
```

---

### 3. TypeScript (ECharts, etc.)

#### Getting CSS Variable Values
```typescript
// ✅ Good - Get CSS variable value
private getPrimaryColor(): string {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue('--primary-color').trim();
}

private getPrimaryRgb(): string {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue('--primary-rgb').trim();
}

// Usage in ECharts
const chartOption: EChartsOption = {
  color: [this.getPrimaryColor()],
  series: [{
    itemStyle: {
      color: this.getPrimaryColor()
    }
  }]
};
```

#### Using RGB for Gradients
```typescript
// ✅ Good - Use RGB for gradients
private getPrimaryRgb(): string {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue('--primary-rgb').trim();
}

const gradient = {
  type: 'linear',
  colorStops: [
    { offset: 0, color: `rgba(${this.getPrimaryRgb()}, 0.8)` },
    { offset: 1, color: `rgba(${this.getPrimaryRgb()}, 0.2)` }
  ]
};
```

#### Helper Method Pattern
```typescript
// ✅ Good - Create helper method
export class MyComponent {
  private getCssVariable(name: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }

  private getPrimaryColor(): string {
    return this.getCssVariable('--primary-color');
  }

  private getPrimaryRgb(): string {
    return this.getCssVariable('--primary-rgb');
  }
}
```

---

## 🎨 Available Utility Classes

### Background Colors
- `bg-primary` - Solid primary background
- `bg-primary/10` - 10% opacity
- `bg-primary/20` - 20% opacity
- `bg-primary/30` - 30% opacity
- `bg-primary/50` - 50% opacity
- `bg-primary/80` - 80% opacity

### Text Colors
- `text-primary` - Primary text color
- `text-primary/80` - 80% opacity

### Border Colors
- `border-primary` - Primary border
- `border-primary/20` - 20% opacity
- `border-primary/30` - 30% opacity
- `border-primary/50` - 50% opacity

### Gradients
- `bg-gradient-primary` - Primary gradient
- `from-primary` - Gradient start
- `to-primary` - Gradient end

### Shadows
- `shadow-primary` - Primary shadow
- `shadow-primary-lg` - Large primary shadow
- `glow-primary` - Primary glow effect

### Hover States
- `hover:bg-primary` - Hover background
- `hover:text-primary` - Hover text
- `hover:border-primary` - Hover border

---

## 🔍 Migration Checklist

เมื่อแก้ไข component ให้ตรวจสอบ:

### HTML/Template
- [ ] ไม่มี `bg-blue-*`, `text-blue-*`, `border-blue-*`
- [ ] ไม่มี `bg-indigo-*`, `text-indigo-*`, `border-indigo-*`
- [ ] ใช้ `bg-primary`, `text-primary`, `border-primary` แทน
- [ ] ใช้ utility classes สำหรับ opacity (`bg-primary/20`)

### SCSS
- [ ] ไม่มี hardcoded hex colors (`#07399C`, `#0ea5e9`)
- [ ] ไม่มี hardcoded RGB (`rgba(59, 130, 246, ...)`)
- [ ] ใช้ `var(--primary-rgb)` สำหรับ rgba()
- [ ] ใช้ `var(--primary-color)` สำหรับ solid colors
- [ ] ใช้ CSS variables สำหรับ glass morphism colors

### TypeScript
- [ ] ไม่มี hardcoded colors ใน ECharts configuration
- [ ] ใช้ `getComputedStyle` เพื่อดึง CSS variable values
- [ ] สร้าง helper methods สำหรับ reusable color access
- [ ] ใช้ RGB format สำหรับ gradients (`rgba(${rgb}, ...)`)

---

## 📚 Common Patterns

### Pattern 1: Component Background
```html
<!-- HTML -->
<div class="bg-primary/10 border border-primary/20">
  Content
</div>
```

### Pattern 2: Button with Primary Color
```html
<!-- HTML -->
<button class="bg-primary hover:bg-primary/90 text-white">
  Click me
</button>
```

### Pattern 3: Card with Primary Accent
```html
<!-- HTML -->
<div class="border-l-4 border-primary bg-primary/5">
  Content
</div>
```

### Pattern 4: SCSS Glass Effect
```scss
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.1);
}
```

### Pattern 5: TypeScript ECharts
```typescript
private getPrimaryColor(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color')
    .trim();
}

const option: EChartsOption = {
  color: [this.getPrimaryColor()],
  series: [{
    itemStyle: { color: this.getPrimaryColor() }
  }]
};
```

---

## 🚨 Common Mistakes

### ❌ Mistake 1: Hardcoded Colors in HTML
```html
<!-- ❌ Bad -->
<div class="bg-blue-500 text-blue-600">
  Content
</div>

<!-- ✅ Good -->
<div class="bg-primary text-primary">
  Content
</div>
```

### ❌ Mistake 2: Hardcoded Colors in SCSS
```scss
// ❌ Bad
.my-component {
  background: rgba(59, 130, 246, 0.2);
  color: #07399C;
}

// ✅ Good
.my-component {
  background: rgba(var(--primary-rgb), 0.2);
  color: var(--primary-color);
}
```

### ❌ Mistake 3: Hardcoded Colors in TypeScript
```typescript
// ❌ Bad
const option: EChartsOption = {
  color: ['#07399C'],
  series: [{
    itemStyle: { color: '#07399C' }
  }]
};

// ✅ Good
const option: EChartsOption = {
  color: [this.getPrimaryColor()],
  series: [{
    itemStyle: { color: this.getPrimaryColor() }
  }]
};
```

---

## 📚 Related Documentation

- **CSS Variables Reference**: `CSS_VARIABLES_REFERENCE.md`
- **Dynamic Primary Color Support**: `PRIMARY_COLOR_DYNAMIC_SUPPORT.md`
- **Theme Service**: `src/app/core/services/theme.service.ts`
- **Design Tokens**: `src/styles/_design-tokens.scss`

---

**Last Updated**: 2024-12-30  
**Status**: ✅ Standardized

