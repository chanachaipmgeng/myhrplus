# Micro-interactions Standard

**วันที่สร้าง**: 2024-12-30  
**สถานะ**: ✅ Standardized  
**Version**: 1.0

---

## 📋 Overview

เอกสารนี้กำหนดมาตรฐาน micro-interactions ใน Angular HR Migration Project เพื่อให้การใช้งานสอดคล้องกันและสร้างประสบการณ์ผู้ใช้ที่ดี

---

## 🎯 Core Principles

### 1. **Consistent Timing**

**Standard Durations**:
- **Fast**: `duration-150` (150ms) - Immediate feedback
- **Normal**: `duration-200` (200ms) - Standard transitions
- **Slow**: `duration-300` (300ms) - Smooth animations
- **Very Slow**: `duration-500` (500ms) - Complex animations

**Standard Easing**:
- **Default**: `ease-in-out` - Natural motion
- **Enter**: `ease-out` - Elements appearing
- **Exit**: `ease-in` - Elements disappearing
- **Bounce**: `ease-in-out` - Playful interactions

### 2. **Subtle but Noticeable**

- ✅ Use subtle scale transforms (1.02-1.05)
- ✅ Use gentle shadows for depth
- ✅ Use smooth color transitions
- ❌ Avoid jarring movements
- ❌ Avoid excessive animations

### 3. **Performance First**

- ✅ Use `transform` and `opacity` for animations
- ✅ Use `will-change` sparingly
- ✅ Respect `prefers-reduced-motion`
- ❌ Avoid animating `width`, `height`, `left`, `top`

---

## 📐 Standard Patterns

### 1. Hover Effects

#### Button Hover
```html
<!-- ✅ Good -->
<button class="hover:scale-105 hover:shadow-lg transition-all duration-200">
  Click me
</button>
```

#### Card Hover
```html
<!-- ✅ Good -->
<div class="hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
  Card content
</div>
```

#### Link Hover
```html
<!-- ✅ Good -->
<a class="hover:text-primary hover:underline transition-colors duration-200">
  Link text
</a>
```

#### Icon Hover
```html
<!-- ✅ Good -->
<icon class="hover:scale-110 hover:text-primary transition-all duration-200">
  Icon
</icon>
```

---

### 2. Active States

#### Button Active
```html
<!-- ✅ Good -->
<button class="active:scale-95 active:shadow-md transition-all duration-150">
  Click me
</button>
```

#### Card Active
```html
<!-- ✅ Good -->
<div class="active:scale-[0.98] transition-all duration-150">
  Card content
</div>
```

---

### 3. Focus States

#### Input Focus
```html
<!-- ✅ Good -->
<input class="focus:ring-2 focus:ring-primary/50 focus:scale-[1.01] transition-all duration-200">
```

#### Button Focus
```html
<!-- ✅ Good -->
<button class="focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200">
  Click me
</button>
```

---

### 4. Loading States

#### Spinner
```html
<!-- ✅ Good -->
<div class="animate-spin duration-1000">
  Loading...
</div>
```

#### Skeleton
```html
<!-- ✅ Good -->
<div class="animate-pulse">
  <div class="h-4 bg-gray-200 rounded"></div>
</div>
```

---

### 5. Transition Patterns

#### Fade In
```html
<!-- ✅ Good -->
<div class="animate-fade-in">
  Content
</div>
```

#### Slide Up
```html
<!-- ✅ Good -->
<div class="animate-slide-up">
  Content
</div>
```

#### Scale In
```html
<!-- ✅ Good -->
<div class="animate-scale-in">
  Content
</div>
```

---

## 🎨 Component-Specific Patterns

### 1. Glass Button

**Standard Hover**:
```html
<app-glass-button
  variant="primary"
  customClass="hover:scale-105 hover:shadow-lg transition-all duration-200">
  Button
</app-glass-button>
```

**Standard Active**:
```html
<app-glass-button
  variant="primary"
  customClass="active:scale-95 transition-all duration-150">
  Button
</app-glass-button>
```

---

### 2. Glass Card

**Standard Hover**:
```html
<app-glass-card
  padding="p-6"
  customClass="hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
  Content
</app-glass-card>
```

**Interactive Card**:
```html
<app-glass-card
  padding="p-6"
  customClass="cursor-pointer hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-300">
  Content
</app-glass-card>
```

---

### 3. Glass Input

**Standard Focus**:
```html
<app-glass-input
  [formControl]="control"
  customClass="focus:scale-[1.01] transition-all duration-200">
</app-glass-input>
```

**With Validation**:
```html
<app-glass-input
  [formControl]="control"
  customClass="focus:scale-[1.01] transition-all duration-200">
</app-glass-input>
<!-- Shake animation on error is handled by component -->
```

---

### 4. Navigation Items

**Menu Item Hover**:
```html
<li class="hover:bg-primary/10 hover:translate-x-1 transition-all duration-200">
  Menu item
</li>
```

**Tab Hover**:
```html
<button class="hover:text-primary hover:border-primary transition-all duration-200">
  Tab
</button>
```

---

## 🎬 Animation Classes

### Built-in Animations

#### Fade Animations
- `animate-fade-in` - Fade in from transparent
- `animate-fade-out` - Fade out to transparent

#### Slide Animations
- `animate-slide-up` - Slide up from below
- `animate-slide-down` - Slide down from above
- `animate-slide-in-right` - Slide in from right

#### Scale Animations
- `animate-scale-in` - Scale in from 0.95
- `animate-scale-out` - Scale out to 0.95

#### Theme Animations
- `animate-theme-transition` - Smooth theme transition

#### Gemini Animations
- `animate-gemini-float` - Floating animation
- `animate-gemini-pulse` - Pulsing animation
- `animate-gemini-shimmer` - Shimmer effect
- `animate-gemini-wave` - Wave animation
- `animate-gemini-gradient` - Gradient animation
- `animate-gemini-glow` - Glow effect

#### Utility Animations
- `animate-shake` - Shake on error
- `animate-pulse-success` - Success pulse
- `animate-progress-shine` - Progress bar shine

---

## 📊 Standard Scale Values

### Hover Scale
- **Subtle**: `hover:scale-[1.01]` - Very subtle (inputs, small elements)
- **Normal**: `hover:scale-105` - Standard (buttons, cards)
- **Medium**: `hover:scale-110` - Noticeable (icons, avatars)
- **Large**: `hover:scale-125` - Prominent (large interactive elements)

### Active Scale
- **Subtle**: `active:scale-[0.99]` - Very subtle
- **Normal**: `active:scale-95` - Standard (buttons)
- **Medium**: `active:scale-90` - Strong feedback

---

## 🎯 Common Patterns

### Pattern 1: Interactive Button
```html
<button class="
  hover:scale-105 
  hover:shadow-lg 
  active:scale-95 
  active:shadow-md 
  transition-all 
  duration-200
">
  Click me
</button>
```

### Pattern 2: Interactive Card
```html
<div class="
  cursor-pointer
  hover:scale-[1.02] 
  hover:shadow-xl 
  active:scale-[0.98] 
  transition-all 
  duration-300
">
  Card content
</div>
```

### Pattern 3: Icon Button
```html
<button class="
  hover:scale-110 
  hover:text-primary 
  active:scale-95 
  transition-all 
  duration-200
">
  <app-icon name="icon"></app-icon>
</button>
```

### Pattern 4: Input with Focus
```html
<input class="
  focus:ring-2 
  focus:ring-primary/50 
  focus:scale-[1.01] 
  transition-all 
  duration-200
">
```

### Pattern 5: List Item Hover
```html
<li class="
  hover:bg-primary/10 
  hover:translate-x-1 
  transition-all 
  duration-200
">
  List item
</li>
```

---

## ⚡ Performance Best Practices

### 1. Use Transform and Opacity

**✅ DO:**
```css
.element {
  transform: scale(1.05);
  opacity: 0.9;
  transition: transform 0.2s, opacity 0.2s;
}
```

**❌ DON'T:**
```css
.element {
  width: 105%;
  height: 105%;
  left: -2.5%;
  top: -2.5%;
  transition: width 0.2s, height 0.2s, left 0.2s, top 0.2s;
}
```

### 2. Use will-change Sparingly

**✅ DO:**
```css
.element:hover {
  transform: scale(1.05);
  will-change: transform; /* Only when needed */
}
```

**❌ DON'T:**
```css
.element {
  will-change: transform; /* Don't set on non-hovered elements */
}
```

### 3. Respect Reduced Motion

**✅ DO:**
```css
@media (prefers-reduced-motion: reduce) {
  .element {
    animation: none;
    transition: none;
  }
}
```

---

## 🔍 Validation Checklist

เมื่อสร้างหรือแก้ไข component ให้ตรวจสอบ:

- [ ] มี hover effects สำหรับ interactive elements
- [ ] มี active states สำหรับ clickable elements
- [ ] มี focus states สำหรับ keyboard navigation
- [ ] ใช้ standard durations (`duration-200`, `duration-300`)
- [ ] ใช้ standard easing (`ease-in-out`, `ease-out`)
- [ ] ใช้ `transform` และ `opacity` แทน `width/height/left/top`
- [ ] รองรับ `prefers-reduced-motion`
- [ ] Animations ไม่เกิน 500ms (ยกเว้น complex animations)
- [ ] Scale values ไม่เกิน 1.25 (hover) และไม่ต่ำกว่า 0.9 (active)

---

## 📚 Related Documentation

- **Tailwind Config**: `tailwind.config.js` (animations section)
- **SCSS Mixins**: `src/styles/_mixins.scss`
- **Accessibility**: `src/styles/accessibility.scss`

---

## 🎨 Examples

### Example 1: Button with Full Interactions
```html
<button class="
  px-4 py-2 
  bg-primary 
  text-white 
  rounded-lg 
  hover:scale-105 
  hover:shadow-lg 
  hover:bg-primary/90 
  active:scale-95 
  active:shadow-md 
  focus:outline-none 
  focus:ring-2 
  focus:ring-primary/50 
  focus:ring-offset-2 
  transition-all 
  duration-200
">
  Click me
</button>
```

### Example 2: Card with Hover Effect
```html
<app-glass-card
  padding="p-6"
  customClass="
    cursor-pointer
    hover:scale-[1.02] 
    hover:shadow-xl 
    active:scale-[0.98] 
    transition-all 
    duration-300
  ">
  Card content
</app-glass-card>
```

### Example 3: Icon with Hover
```html
<app-icon
  name="star"
  size="md"
  color="text-gray-400 hover:text-primary transition-colors duration-200"
  customClass="hover:scale-110 transition-transform duration-200">
</app-icon>
```

---

**Last Updated**: 2024-12-30  
**Status**: ✅ Standardized

