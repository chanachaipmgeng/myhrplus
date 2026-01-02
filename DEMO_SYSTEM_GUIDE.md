# 🎬 Demo System Guide

**อัปเดตล่าสุด**: 2025-01-01  
**เวอร์ชัน**: 2.2.0

---

## 📋 ภาพรวม

Demo System เป็นระบบแสดงตัวอย่างการใช้งาน components ทั้งหมด (96 unique components) พร้อม:
- ✅ Live Interactive Demos
- ✅ Code Examples พร้อม syntax highlighting
- ✅ API Documentation (Props tables)
- ✅ Multiple Usage Examples
- ✅ Responsive Design
- ✅ Dark Mode & MyHR Theme Support
- ✅ Semantic Colors (Dynamic Theming)
- ✅ Complete Variants/States/Advanced Features Sections
- ✅ Full Responsive Design

---

## 🚀 Quick Start

### Access Demo
```
URL: http://localhost:4200/demo
```

### Navigation
1. ไปที่ `/demo` เพื่อดู component index
2. คลิกที่ component ที่ต้องการดู demo
3. ทดสอบ live demo และดู code examples
4. อ่าน API documentation สำหรับ props และ events

---

## 📁 Structure

```
src/app/features/demo/
├── demo.component.ts              # Main demo container
├── demo-routing.module.ts         # Demo routes
├── demo.module.ts                 # Demo module
├── demo-index/
│   ├── demo-index.component.ts    # Component index page
│   ├── demo-index.component.html
│   └── demo-index.component.scss
├── components/
│   ├── glass-card-demo/
│   ├── glass-button-demo/
│   ├── glass-input-demo/
│   ├── icon-demo/
│   ├── avatar-demo/
│   └── ... (96 demo components)
└── shared/
    ├── code-viewer/
    │   ├── code-viewer.component.ts
    │   ├── code-viewer.component.html
    │   └── code-viewer.component.scss
    └── props-table/
        ├── props-table.component.ts
        ├── props-table.component.html
        └── props-table.component.scss
```

---

## 🧩 Demo Components

### Glass Components (3)
1. **Glass Card** - Variants, animations, custom classes
2. **Glass Button** - Variants, sizes, states, events
3. **Glass Input** - Types, validation, states

### UI Components (29)
4. **Icon** - Sizes, colors, common icons
5. **Avatar** - Sizes, status, badges, shapes
6. **Spinner** - Sizes, colors, with message
7. **Theme Toggle** - Mode switching, color picker
8. **Status Badge** - All status types, variants, sizes
9. **Page Layout** - Breadcrumbs, actions, header
10. **Error State** - Error types, retry functionality
11. **Breadcrumbs** - With icons, custom separator
12. **Data Table** - Sorting, filtering, pagination
13. **Stepper** - Horizontal, vertical, optional steps
14. **Timeline** - Vertical, horizontal, with status
15. **Search Filter** - Debounced search, filters
16. **Date Range Picker** - Presets, validation
17. **File Upload** - Single, multiple, validation
18. **Image Upload** - Single, multiple, preview
19. **Form Validation Messages** - Error messages
20. **Confirm Dialog** - Confirmation dialogs
21. **Skeleton Loader** - Types, animations
22. **Loading Spinner** - Service integration
23. **Modal** - Sizes, events, customization
24. **Tabs** - Badges, disabled states
25. **Progress Bar** - Variants, animated
26. **Rating** - Star/Heart, readonly
27. **Loading** - With message, conditional
28. **Empty State** - Icons, sizes, actions
29. **Notification** - All types (success/error/warning/info)
30. **Tooltip** - All positions
31. **Statistics Card** - Change indicators
32. **Statistics Grid** - Grid layouts

---

## 🎯 Features

### 1. Live Demo Sections
ทุก component มี live demo ที่สามารถทดสอบได้จริง:
- Interactive controls
- Real-time updates
- State management examples

### 2. Code Examples
- Basic usage examples
- Advanced usage examples
- Reactive forms integration
- Event handling examples
- Customization examples

### 3. API Documentation
- Props tables with types
- Input/Output documentation
- Required/Optional indicators
- Default values
- Descriptions

### 4. Multiple Examples
- Different variants
- Different sizes
- Different states
- Different configurations

---

## 🛠️ Shared Components

### CodeViewer Component
Component สำหรับแสดง code examples พร้อม syntax highlighting

**Usage:**
```html
<app-code-viewer
  [code]="codeExample"
  language="html"
  title="Code Example">
</app-code-viewer>
```

**Props:**
- `code: string` - Code content
- `language: string` - Language (html, typescript, scss)
- `title: string` - Code title

### PropsTable Component
Component สำหรับแสดง API documentation

**Usage:**
```html
<app-props-table
  [props]="props"
  title="Inputs">
</app-props-table>
```

**Props:**
- `props: PropDefinition[]` - Props array
- `title: string` - Table title

**PropDefinition Interface:**
```typescript
interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
  required: boolean;
}
```

---

## 📝 Demo Component Template

### Structure
ทุก demo component ควรมี structure ดังนี้:

```typescript
@Component({
  selector: 'app-component-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, ...],
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.scss']
})
export class ComponentDemoComponent {
  // Props for API documentation
  props: PropDefinition[] = [...];
  
  // Code examples
  basicExample = `...`;
  advancedExample = `...`;
  
  // Demo data
  demoData = {...};
}
```

### Template Structure
```html
<div class="w-full py-12">
  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold mb-2">Component Name</h1>
    <p class="text-base text-gray-600 dark:text-gray-400">Description</p>
  </div>

  <!-- Live Demo -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2">Live Demo</h2>
    <app-glass-card padding="p-6">
      <!-- Demo content -->
    </app-glass-card>
  </section>

  <!-- Basic Usage -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2">Basic Usage</h2>
    <app-glass-card padding="p-6">
      <app-code-viewer [code]="basicExample" language="html" title="Basic"></app-code-viewer>
    </app-glass-card>
  </section>

  <!-- Variants (Optional) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2">Variants</h2>
    <app-glass-card padding="p-6">
      <!-- Variants examples -->
    </app-glass-card>
  </section>

  <!-- Advanced Features (Optional) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2">Advanced Features</h2>
    <app-glass-card padding="p-6">
      <!-- Advanced examples -->
    </app-glass-card>
  </section>

  <!-- API Reference -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2">API Reference</h2>
    <app-glass-card padding="p-6">
      <app-props-table [props]="props" title="Inputs"></app-props-table>
    </app-glass-card>
  </section>
</div>
```

---

## 🎨 Styling

### Demo Page Styles
ทุก demo component ใช้ styles ที่สอดคล้องกัน:
- Responsive design (mobile-first approach)
- Dark mode support
- MyHR theme support
- Semantic colors (dynamic theming)
- Consistent spacing และ typography
- CSS variables จาก design tokens

### SCSS Structure
```scss
@import '../../../../../styles/design-tokens';
@import '../../../../../styles/mixins';

.demo-page {
  width: 100%;
  padding: $spacing-6 0;
}

.demo-header {
  margin-bottom: $spacing-8;
}

.demo-title {
  font-size: $text-3xl;
  font-weight: $font-weight-bold;
  // ...
}

// Dark mode
.dark {
  // ...
}

// MyHR theme
body.theme-myhr {
  // ...
}
```

---

## 📚 Related Documentation

- [COMPONENTS_INDEX.md](./COMPONENTS_INDEX.md) - Components reference
- [TEMPLATE_AND_COMPONENTS_GUIDE.md](./TEMPLATE_AND_COMPONENTS_GUIDE.md) - Components guide
- [DEMO_SCREENSHOTS_GUIDE.md](./DEMO_SCREENSHOTS_GUIDE.md) - Screenshots guide

---

## ✅ Checklist

### สำหรับ Demo Component ใหม่
- [ ] สร้าง component files (ts, html, scss)
- [ ] เพิ่ม route ใน demo-routing.module.ts
- [ ] เพิ่ม live demo section
- [ ] เพิ่ม Basic Usage section
- [ ] เพิ่ม Variants section (ถ้ามี variants)
- [ ] เพิ่ม States section (ถ้ามี states)
- [ ] เพิ่ม Advanced Features section (ถ้ามี advanced features)
- [ ] เพิ่ม API Reference section (props table)
- [ ] ใช้ semantic colors (`bg-primary`, `text-primary`, etc.)
- [ ] ทดสอบ responsive design
- [ ] ทดสอบ dark mode
- [ ] ทดสอบ MyHR theme
- [ ] อัพเดท demo-index component

### Standards Compliance
ทุก demo component ต้อง:
- ✅ ใช้ semantic colors (รองรับ dynamic theming)
- ✅ มี Variants/States/Advanced Features sections ครบถ้วน
- ✅ รองรับ responsive design
- ✅ ใช้ชื่อ section ตามมาตรฐาน (Live Demo, Basic Usage, Variants, States, Advanced Features, API Reference)

---

**Maintainer**: Development Team  
**Last Updated**: 2025-01-01  
**Version**: 2.2.0

---

## 📋 Recent Updates (2025-01-01)

### ✅ Demo Components Audit Complete
- **Phase 1**: Fixed hardcoded colors in 40+ files
- **Phase 2**: Added missing sections to 23 components
- **Phase 2**: Fixed responsive issues in 5 components
- **Phase 3**: Verified section naming (all correct)

### ✅ Improvements
- All components now use semantic colors (support dynamic theming)
- All components have complete Variants/States/Advanced Features sections
- All components support responsive design
- All components follow standard section naming

**See**: `DEMO_COMPONENTS_AUDIT_IMPLEMENTATION_SUMMARY.md` for details


