# Theme Gemini to MyHR Replacement Summary

**วันที่**: 2024-12-31  
**สถานะ**: ✅ **IN PROGRESS**

---

## 📋 Overview

เปลี่ยนชื่อ theme จาก `gemini` เป็น `myhr` ในทุกจุดของโปรเจค

---

## ✅ Files Updated

### Core Files
- ✅ `src/app/core/services/theme.service.ts`
  - Changed `ThemeColor` type: `'gemini'` → `'myhr'`
  - Changed `DEFAULT_THEME.color`: `'gemini'` → `'myhr'`
  - Changed `colorMap`: `gemini: ...` → `myhr: ...`
  - Changed `applyTheme()`: `'gemini'` → `'myhr'`
  - Changed comments: `Gemini` → `MyHR`

- ✅ `src/app/shared/components/theme-toggle/theme-toggle.component.ts`
  - Changed theme color: `'gemini'` → `'myhr'`
  - Changed gradient variable: `--theme-gradient-gemini` → `--theme-gradient-myhr`

### Styles Files
- ✅ `src/styles.scss`
  - Changed `[data-theme='gemini']` → `[data-theme='myhr']`
  - Changed `body.theme-gemini` → `body.theme-myhr`
  - Changed `--theme-gradient-gemini` → `--theme-gradient-myhr`
  - Changed `.gemini-text-glow` → `.myhr-text-glow`

- ✅ `src/styles/_design-tokens.scss`
  - Changed `$theme-gradient-gemini` → `$theme-gradient-myhr`
  - Changed comment: `Default Theme (Gemini)` → `Default Theme (MyHR)`

- ✅ `src/app/layout/main-layout/main-layout.component.scss`
  - Changed `[data-theme='gemini']` → `[data-theme='myhr']`
  - Changed `[class*='theme-gemini']` → `[class*='theme-myhr']`

- ✅ `src/app/layout/sidebar/sidebar.component.scss`
  - Changed `[data-theme='gemini']` → `[data-theme='myhr']`
  - Changed `[class*='theme-gemini']` → `[class*='theme-myhr']`

- ✅ `src/app/layout/footer/footer.component.scss`
  - Changed `[data-theme='gemini']` → `[data-theme='myhr']`
  - Changed `body.theme-gemini` → `body.theme-myhr`
  - Changed `.gemini-footer` → `.myhr-footer`

### HTML Templates
- ✅ `src/app/layout/header/header.component.html`
  - Changed `theme-gemini:` → `theme-myhr:` (all instances)
  - Changed `gemini-header` → `myhr-header`

- ✅ `src/app/layout/sidebar/sidebar.component.html`
  - Changed `theme-gemini:` → `theme-myhr:` (all instances)

- ✅ `src/app/layout/footer/footer.component.html`
  - Changed `theme-gemini:` → `theme-myhr:` (all instances)
  - Changed `gemini-footer` → `myhr-footer`

- ✅ `src/app/shared/components/skeleton-loader/skeleton-loader.component.html`
  - Changed `theme-gemini:` → `theme-myhr:` (all instances)
  - Changed `glass-gemini-weak` → `glass-myhr-weak`

### Configuration Files
- ✅ `tailwind.config.js`
  - Changed `'gemini'` shadows → `'myhr'` shadows
  - Changed `gradient-gemini` → `gradient-myhr`
  - Changed `gemini-*` animations → `myhr-*` animations
  - Changed `gemini*` keyframes → `myhr*` keyframes

---

## ⚠️ Remaining Files to Update

### HTML Templates (135 files, ~1612 instances)
ยังต้องเปลี่ยน `theme-gemini:` → `theme-myhr:` ในไฟล์ต่อไปนี้:

- `src/app/features/**/*.html` (demo components, auth, etc.)
- `src/app/shared/components/**/*.html` (remaining components)

**วิธีแก้ไข**:
1. ใช้ Find & Replace ใน IDE:
   - Find: `theme-gemini:`
   - Replace: `theme-myhr:`
   - Scope: `src/**/*.html`

2. หรือรัน script:
   ```bash
   node scripts/replace-gemini-to-myhr.js
   ```

### SCSS Files
ยังต้องเปลี่ยนในไฟล์ต่อไปนี้ (ถ้ามี):
- `src/app/shared/components/**/*.scss`
- `src/app/features/**/*.scss`

**Patterns to replace**:
- `body.theme-gemini` → `body.theme-myhr`
- `[data-theme='gemini']` → `[data-theme='myhr']`
- `[class*='theme-gemini']` → `[class*='theme-myhr']`
- `.gemini-*` → `.myhr-*`

### TypeScript Files
ยังต้องเปลี่ยนในไฟล์ต่อไปนี้ (ถ้ามี):
- `src/app/shared/components/**/*.ts`
- `src/app/features/**/*.ts`

**Patterns to replace**:
- `'gemini'` → `'myhr'` (in theme-related code)
- `gemini` → `myhr` (in variable names, comments)

### Documentation Files
ยังต้องเปลี่ยนในไฟล์ต่อไปนี้:
- `*.md` files ที่มีคำว่า `gemini` หรือ `Gemini`

**Patterns to replace**:
- `gemini` → `myhr`
- `Gemini` → `MyHR`
- `theme-gemini` → `theme-myhr`

---

## 📊 Statistics

### Completed
- Core Services: 2 files ✅
- Styles Files: 6 files ✅
- HTML Templates: 4 files ✅
- Configuration: 1 file ✅
- **Total**: 13 files ✅

### Remaining
- HTML Templates: ~131 files (~1600 instances)
- SCSS Files: ~10-20 files (estimated)
- TypeScript Files: ~5-10 files (estimated)
- Documentation Files: ~10-20 files (estimated)

---

## 🔍 Search Patterns

### Find All Remaining Instances

```bash
# HTML files
grep -r "theme-gemini:" src --include="*.html"

# SCSS files
grep -r "theme-gemini\|body\.theme-gemini\|\[data-theme='gemini'\]" src --include="*.scss"

# TypeScript files
grep -r "'gemini'\|\"gemini\"" src --include="*.ts"

# All files
grep -r "gemini" src --include="*.{html,scss,ts,md}" | grep -v "node_modules"
```

---

## ✅ Verification Checklist

- [x] Core theme service updated
- [x] Theme toggle component updated
- [x] Global styles updated
- [x] Design tokens updated
- [x] Layout components (header, sidebar, footer) updated
- [x] Tailwind config updated
- [ ] All HTML templates updated (~131 files remaining)
- [ ] All SCSS files updated (~10-20 files remaining)
- [ ] All TypeScript files updated (~5-10 files remaining)
- [ ] All documentation files updated (~10-20 files remaining)
- [ ] Test application to verify changes

---

## 🚀 Next Steps

1. **Run Find & Replace in IDE**:
   - Find: `theme-gemini:`
   - Replace: `theme-myhr:`
   - Scope: `src/**/*.html`

2. **Update SCSS files**:
   - Search for `body.theme-gemini` and `[data-theme='gemini']`
   - Replace with `body.theme-myhr` and `[data-theme='myhr']`

3. **Update TypeScript files**:
   - Search for `'gemini'` in theme-related code
   - Replace with `'myhr'`

4. **Update documentation**:
   - Search for `gemini` and `Gemini` in `.md` files
   - Replace with `myhr` and `MyHR`

5. **Test the application**:
   - Verify theme switching works
   - Check all components render correctly
   - Test in both light and dark modes

---

**Last Updated**: 2024-12-31  
**Status**: ✅ Core files updated, remaining files need manual update or script execution


