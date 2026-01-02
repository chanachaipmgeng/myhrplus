# 🚀 Performance Optimization Guide

**วันที่สร้าง**: 2024-12-20  
**สถานะ**: ✅ Complete

---

## 📋 สารบัญ

1. [Performance Utilities](#performance-utilities)
2. [Animation Optimization](#animation-optimization)
3. [CSS Optimization](#css-optimization)
4. [Best Practices](#best-practices)
5. [Monitoring Tools](#monitoring-tools)

---

## 🛠️ Performance Utilities

### Location
`src/app/core/utils/performance.util.ts`

### Features

#### 1. Performance Measurement
```typescript
import { measurePerformance, measureAsyncPerformance } from '@core/utils/performance.util';

// Measure synchronous function
const { result, duration } = measurePerformance(
  () => heavyComputation(),
  'Heavy Computation'
);

// Measure async function
const { result, duration } = await measureAsyncPerformance(
  async () => await fetchData(),
  'Fetch Data'
);
```

#### 2. Debounce & Throttle
```typescript
import { debounce, throttle } from '@core/utils/performance.util';

// Debounce search input
const debouncedSearch = debounce((query: string) => {
  performSearch(query);
}, 300);

// Throttle scroll handler
const throttledScroll = throttle(() => {
  handleScroll();
}, 100);
```

#### 3. Reduced Motion Support
```typescript
import { prefersReducedMotion, getAnimationDuration } from '@core/utils/performance.util';

// Check user preference
if (prefersReducedMotion()) {
  // Disable animations
}

// Get optimized duration
const duration = getAnimationDuration(300); // Returns 0 if reduced motion
```

#### 4. Device Detection
```typescript
import { isLowEndDevice, getOptimizedAnimationDuration } from '@core/utils/performance.util';

// Check device capabilities
if (isLowEndDevice()) {
  // Use lighter animations
}

// Get optimized duration based on device
const duration = getOptimizedAnimationDuration(300);
```

#### 5. Performance Monitor
```typescript
import { performanceMonitor } from '@core/utils/performance.util';

// Record metrics
performanceMonitor.record('render-time', 45);
performanceMonitor.record('api-call', 120);

// Get summary
const summary = performanceMonitor.getSummary();
console.log(summary);
// {
//   'render-time': { average: 45, count: 10, min: 30, max: 60 },
//   'api-call': { average: 120, count: 5, min: 100, max: 150 }
// }
```

#### 6. CSS Bundle Analysis
```typescript
import { getCSSBundleSize, checkUnusedCSS } from '@core/utils/performance.util';

// Get total CSS size
const size = getCSSBundleSize();
console.log(`CSS Bundle Size: ${(size / 1024).toFixed(2)}KB`);

// Check for unused CSS
const { totalRules, potentiallyUnused } = checkUnusedCSS();
console.log(`Total Rules: ${totalRules}, Potentially Unused: ${potentiallyUnused}`);
```

---

## 🎨 Animation Optimization

### Best Practices

#### 1. Use Transform & Opacity
```scss
// ✅ Good - Uses transform (GPU accelerated)
.element {
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
}

// ❌ Bad - Uses left/top (causes reflow)
.element {
  transition: left 0.3s ease;
  &:hover {
    left: 100px;
  }
}
```

#### 2. Use will-change Sparingly
```scss
// ✅ Good - Only for elements that will animate
.animated-element {
  will-change: transform;
  transition: transform 0.3s ease;
}

// ❌ Bad - Overuse of will-change
.every-element {
  will-change: transform, opacity, box-shadow; // Too many properties
}
```

#### 3. Respect Reduced Motion
```scss
// ✅ Good - Respects user preferences
.element {
  transition: transform 0.3s ease;
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    will-change: auto;
  }
}
```

#### 4. Optimize Animation Duration
```scss
// ✅ Good - Short durations for micro-interactions
.button {
  transition: transform 0.2s ease; // 200ms for buttons
}

// ✅ Good - Longer durations for page transitions
.page-transition {
  transition: opacity 0.5s ease; // 500ms for page transitions
}
```

### Animation Mixins

#### Smooth Transition
```scss
@include smooth-transition(transform box-shadow, 0.3s);
```

#### Hover Lift
```scss
@include hover-lift(2px, 0.2s);
```

#### Hover Scale
```scss
@include hover-scale(1.05, 0.2s);
```

#### Glow Effect
```scss
@include glow-effect($primary-500, 0.3, 0.3s);
```

#### Loading Pulse
```scss
@include loading-pulse($primary-500, 1.5s);
```

#### Shimmer Effect
```scss
@include shimmer-effect(1.5s, rgba(255, 255, 255, 0.3));
```

---

## 🎯 CSS Optimization

### 1. Remove Unused Styles
- ✅ ลบ Material Design overrides ที่ไม่ได้ใช้แล้ว
- ✅ ลบ unused CSS classes
- ✅ ใช้ CSS purging tools

### 2. Optimize Selectors
```scss
// ✅ Good - Specific selector
.glass-card:hover {
  transform: translateY(-2px);
}

// ❌ Bad - Overly specific
body.theme-myhr .main-content .glass-card:hover {
  transform: translateY(-2px);
}
```

### 3. Use CSS Variables
```scss
// ✅ Good - Uses CSS variables
.element {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

// ❌ Bad - Hardcoded values
.element {
  color: #07399C;
  transition: color 0.3s ease;
}
```

### 4. Minimize Specificity
```scss
// ✅ Good - Low specificity
.button {
  background: blue;
}

// ❌ Bad - High specificity
body.theme-myhr .main-content .sidebar .button {
  background: blue;
}
```

---

## 📊 Best Practices

### 1. Animation Performance
- ✅ ใช้ `transform` และ `opacity` แทน `width`, `height`, `left`, `top`
- ✅ ใช้ `will-change` อย่างระมัดระวัง
- ✅ Animation duration: 200-300ms สำหรับ micro-interactions
- ✅ Animation duration: 300-500ms สำหรับ page transitions
- ✅ Respect `prefers-reduced-motion`

### 2. Loading States
- ✅ แสดง skeleton loader ระหว่างโหลด
- ✅ ใช้ loading spinner สำหรับ actions
- ✅ แสดง progress สำหรับ long operations
- ✅ Optimize animations (use transform, opacity)

### 3. Micro-interactions
- ✅ Hover effects: 200ms duration
- ✅ Active states: 100ms duration
- ✅ Focus states: 200ms duration
- ✅ Error states: 500ms shake animation
- ✅ Success states: 600ms pulse animation

### 4. CSS Optimization
- ✅ Remove unused styles
- ✅ Use CSS variables
- ✅ Minimize specificity
- ✅ Optimize selectors
- ✅ Use efficient properties

---

## 🔍 Monitoring Tools

### 1. Performance Monitor
```typescript
import { performanceMonitor } from '@core/utils/performance.util';

// Record metrics
performanceMonitor.record('component-render', 45);
performanceMonitor.record('api-call', 120);

// Get summary
const summary = performanceMonitor.getSummary();
```

### 2. CSS Bundle Analysis
```typescript
import { getCSSBundleSize, checkUnusedCSS } from '@core/utils/performance.util';

// Check CSS size
const size = getCSSBundleSize();
console.log(`CSS Size: ${(size / 1024).toFixed(2)}KB`);

// Check unused CSS
const { totalRules, potentiallyUnused } = checkUnusedCSS();
```

### 3. Browser DevTools
- **Performance Tab**: Analyze runtime performance
- **Lighthouse**: Performance audits
- **Coverage Tab**: Find unused CSS/JS
- **Network Tab**: Monitor bundle sizes

---

## 📈 Performance Metrics

### Target Metrics
- **Animation Duration**: < 100ms for micro-interactions
- **CSS Bundle Size**: < 200KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s

### Current Status
- ✅ Animations optimized (using transform, opacity)
- ✅ Reduced motion support
- ✅ Performance utilities available
- ✅ CSS cleanup completed
- ✅ Micro-interactions enhanced

---

## 🎯 สรุป

### สิ่งที่ทำเสร็จแล้ว
- ✅ สร้าง Performance Utilities
- ✅ Optimize Animations (ใช้ transform, opacity)
- ✅ เพิ่ม Reduced Motion Support
- ✅ เพิ่ม Micro-interactions
- ✅ ปรับปรุง Loading States
- ✅ CSS Cleanup (ลบ unused styles)

### การใช้งาน
```typescript
// Import performance utilities
import { 
  measurePerformance,
  debounce,
  throttle,
  prefersReducedMotion,
  performanceMonitor
} from '@core/utils/performance.util';

// Use in components
export class MyComponent {
  ngOnInit() {
    const { result, duration } = measurePerformance(
      () => this.loadData(),
      'Load Data'
    );
  }
}
```

---

**Last Updated**: 2024-12-20  
**Status**: ✅ Complete

