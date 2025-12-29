# Demo Component Template
## Standard Structure for All Demo Components

**Last Updated**: 2024-12-29  
**Purpose**: Ensure consistency across all demo components

---

## 📋 Standard Section Order

1. **Header** (Required)
2. **Live Demo** (Required)
3. **Basic Usage** (Required)
4. **Variants** (Optional - if component has variants/types/sizes)
5. **States** (Optional - if component has states like disabled, error, etc.)
6. **Validation** (Optional - for form components)
7. **Advanced Features** (Optional - for complex features)
8. **API Reference** (Required)
9. **Reactive Forms** (Optional - for form components)

---

## 📝 Standard Section Naming

### Required Sections
- **Live Demo** - Interactive demo section
- **Basic Usage** - Basic usage examples
- **API Reference** - Props table documentation

### Optional Sections
- **Variants** - Different types/sizes/variants (NOT "Types", "Input Types", "Examples")
- **States** - Component states (NOT "Component States", "State Examples")
- **Validation** - Form validation examples (NOT "Form Validation", "Error Handling")
- **Advanced Features** - Complex features (NOT "Features", "Additional Features")
- **Reactive Forms** - Reactive forms integration (NOT "Reactive Forms Example", "Form Integration")

---

## 🎨 HTML Template Structure

```html
<div class="w-full py-12">
  <!-- 1. Header Section -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Component Name
    </h1>
    <p class="text-base text-gray-600 dark:text-gray-400 theme-gemini:text-white/80 leading-relaxed">
      Component description explaining what it does and its main features.
    </p>
  </div>

  <!-- 2. Live Demo Section -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Live Demo
    </h2>
    
    <app-glass-card padding="p-6">
      <!-- Interactive demo content -->
      <div class="space-y-4">
        <!-- Demo component -->
      </div>
    </app-glass-card>
  </section>

  <!-- 3. Basic Usage Section -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Basic Usage
    </h2>
    
    <app-glass-card padding="p-6">
      <div class="space-y-4">
        <!-- Basic examples -->
      </div>
    </app-glass-card>
    
    <app-code-viewer [code]="basicExample" language="html" title="Basic Usage"></app-code-viewer>
  </section>

  <!-- 4. Variants Section (Optional) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Variants
    </h2>
    
    <app-glass-card padding="p-6">
      <div class="space-y-4">
        <!-- Variant examples -->
      </div>
    </app-glass-card>
    
    <app-code-viewer [code]="variantsExample" language="html" title="Variants Example"></app-code-viewer>
  </section>

  <!-- 5. States Section (Optional) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      States
    </h2>
    
    <app-glass-card padding="p-6">
      <div class="space-y-4">
        <!-- State examples -->
      </div>
    </app-glass-card>
    
    <app-code-viewer [code]="statesExample" language="html" title="States Example"></app-code-viewer>
  </section>

  <!-- 6. Validation Section (Optional - for form components) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Validation
    </h2>
    
    <app-glass-card padding="p-6">
      <div class="space-y-4">
        <!-- Validation examples -->
      </div>
    </app-glass-card>
    
    <app-code-viewer [code]="validationExample" language="html" title="Validation Example"></app-code-viewer>
  </section>

  <!-- 7. Advanced Features Section (Optional) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Advanced Features
    </h2>
    
    <app-glass-card padding="p-6">
      <div class="space-y-4">
        <!-- Advanced feature examples -->
      </div>
    </app-glass-card>
    
    <app-code-viewer [code]="advancedExample" language="html" title="Advanced Features"></app-code-viewer>
  </section>

  <!-- 8. API Reference Section -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      API Reference
    </h2>
    
    <app-glass-card padding="p-6">
      <app-props-table [props]="props"></app-props-table>
    </app-glass-card>
  </section>

  <!-- 9. Reactive Forms Section (Optional - for form components) -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 theme-gemini:border-blue-500/30
               text-gray-800 dark:text-gray-200 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">
      Reactive Forms
    </h2>
    
    <app-code-viewer [code]="reactiveFormExample" language="typescript" title="Reactive Forms Usage"></app-code-viewer>
  </section>
</div>
```

---

## 📝 TypeScript Template Structure

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentName } from '../../../../shared/components/component-name/component-name.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-component-name-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ComponentName,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './component-name-demo.component.html',
  styleUrls: ['./component-name-demo.component.scss']
})
export class ComponentNameDemoComponent {
  // Demo data
  demoValue: any = null;

  // Props for API Reference
  props: PropDefinition[] = [
    {
      name: 'propName',
      type: 'string',
      default: "'default'",
      description: 'Property description',
      required: false
    }
  ];

  // Code examples
  basicExample = `<app-component-name>Content</app-component-name>`;
  
  variantsExample = `<!-- Variants example -->`;
  
  statesExample = `<!-- States example -->`;
  
  validationExample = `<!-- Validation example -->`;
  
  advancedExample = `<!-- Advanced features example -->`;
  
  reactiveFormExample = `// Reactive forms example
// ...`;
}
```

---

## ✅ Checklist

### Required Sections
- [ ] Header with title and description
- [ ] Live Demo section
- [ ] Basic Usage section
- [ ] API Reference section

### Optional Sections (include if applicable)
- [ ] Variants section
- [ ] States section
- [ ] Validation section
- [ ] Advanced Features section
- [ ] Reactive Forms section

### Code Quality
- [ ] All sections use standard naming
- [ ] All code examples use `CodeViewerComponent`
- [ ] Props table uses `PropsTableComponent`
- [ ] All sections wrapped in `<section class="mb-12">`
- [ ] All section headers use standard styling
- [ ] All demo content wrapped in `<app-glass-card padding="p-6">`

---

## 🎯 Standardization Rules

1. **Section Order**: Always follow the standard order (Header → Live Demo → Basic Usage → ... → API Reference → Reactive Forms)

2. **Section Naming**: Use exact standard names:
   - ✅ "Live Demo" (NOT "Demo", "Interactive Demo")
   - ✅ "Basic Usage" (NOT "Examples", "Usage Examples")
   - ✅ "Variants" (NOT "Types", "Input Types", "Sizes")
   - ✅ "States" (NOT "Component States", "State Examples")
   - ✅ "Validation" (NOT "Form Validation", "Error Handling")
   - ✅ "Advanced Features" (NOT "Features", "Additional Features")
   - ✅ "API Reference" (NOT "API Documentation", "Props", "Properties")
   - ✅ "Reactive Forms" (NOT "Reactive Forms Example", "Form Integration")

3. **Code Examples**: 
   - Always use `CodeViewerComponent`
   - Always provide a descriptive `title` attribute
   - Group related examples in the same section

4. **Props Table**:
   - Always use `PropsTableComponent`
   - Always wrap in `<app-glass-card padding="p-6">`
   - Use title "Inputs" or "Outputs" if multiple tables

---

**Last Updated**: 2024-12-29  
**Status**: ✅ **ACTIVE** - Use this template for all new and updated demo components

