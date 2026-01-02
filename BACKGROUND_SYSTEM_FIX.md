# Background System Fix - SCSS Variable Calculation Error

## 📋 ปัญหา

**Error**: `Undefined operation "var(--pattern-size) * 0.5"`

SCSS ไม่สามารถคำนวณกับ CSS variables ได้ เพราะ CSS variables เป็น runtime values ไม่ใช่ compile-time values

---

## ✅ การแก้ไข

### 1. ปรับปรุง `background-pattern` Mixin

**Before:**
```scss
@mixin background-pattern($color: var(--pattern-color), $opacity: var(--pattern-opacity), $size: var(--pattern-size), $direction: var(--pattern-direction)) {
  $half-size: $size * 0.5; // ❌ Error: Cannot calculate with CSS variable
  // ...
}
```

**After:**
```scss
@mixin background-pattern($color: var(--pattern-color), $opacity: var(--pattern-opacity), $size: 4px, $direction: 0deg) {
  $half-size: $size * 0.5; // ✅ Works: $size is now a SCSS value (4px)
  // ...
}
```

### 2. ปรับปรุง Utility Classes

**Before:**
```scss
.bg-pattern-subtle {
  @include background-pattern(var(--pattern-color-subtle), 0.3, var(--pattern-size-sm)); // ❌ Error
}
```

**After:**
```scss
.bg-pattern-subtle {
  @include background-pattern(var(--pattern-color-subtle), 0.3, 2px); // ✅ Works: Use numeric value
}
```

### 3. ปรับปรุง Main Layout Component

**Before:**
```scss
@include background-pattern(var(--pattern-color), var(--pattern-opacity), var(--pattern-size), 0deg); // ❌ Error
```

**After:**
```scss
@include background-pattern(var(--pattern-color), var(--pattern-opacity), 4px, 0deg); // ✅ Works: Use numeric value
```

---

## 📝 สรุป

### Rule: SCSS Mixin Parameters
- ✅ **SCSS Values**: ใช้ตัวเลข (เช่น `4px`, `0.3`, `0deg`)
- ❌ **CSS Variables**: ไม่สามารถใช้ในการคำนวณใน SCSS ได้

### Pattern Sizes (Standardized)
- `2px` - Small pattern (subtle)
- `4px` - Medium pattern (default)
- `20px` - Large pattern (medium)

### Usage Example

```scss
// ✅ Correct
@include background-pattern(var(--pattern-color), 0.4, 4px, 0deg);

// ❌ Wrong
@include background-pattern(var(--pattern-color), var(--pattern-opacity), var(--pattern-size), var(--pattern-direction));
```

---

## 🔍 Files Modified

1. **`src/styles/_backgrounds.scss`**
   - ปรับปรุง `background-pattern` mixin ให้ใช้ SCSS values แทน CSS variables สำหรับ `$size` และ `$direction`
   - ปรับปรุง utility classes ให้ใช้ numeric values

2. **`src/app/layout/main-layout/main-layout.component.scss`**
   - ปรับปรุงการเรียกใช้ `background-pattern` mixin ให้ใช้ numeric values

---

**Status**: ✅ Fixed  
**Last Updated**: 2025-01-02

