# คู่มืออ้างอิงด่วนสำหรับการพัฒนา - HR Management System

**วันที่สร้าง**: 2024-12-30  
**เวอร์ชัน**: 2.3.0

---

## 📋 สารบัญ

1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Naming Conventions](#naming-conventions)
4. [Import Patterns](#import-patterns)
5. [Common Code Snippets](#common-code-snippets)
6. [Checklist](#checklist)

---

## Quick Start

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build:prod

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### Development Server

```
http://localhost:4200
```

---

## File Structure

### Component Files

```
feature-name/
├── feature-name.component.ts      # Component class
├── feature-name.component.html    # Template
└── feature-name.component.scss    # Styles
```

### Service Files

```
feature-name.service.ts             # Service class
```

### Model Files

```
feature-name.model.ts               # TypeScript interface/model
```

### Module Files

```
feature-name.module.ts              # NgModule
feature-name-routing.module.ts      # Routing module
```

---

## Naming Conventions

### Files & Directories

| Type | Pattern | Example |
|------|---------|---------|
| Component | `kebab-case.component.ts` | `employee-list.component.ts` |
| Service | `kebab-case.service.ts` | `employee.service.ts` |
| Model | `kebab-case.model.ts` | `employee.model.ts` |
| Guard | `kebab-case.guard.ts` | `auth.guard.ts` |
| Interceptor | `kebab-case.interceptor.ts` | `auth.interceptor.ts` |
| Module | `kebab-case.module.ts` | `employee.module.ts` |
| Routing Module | `kebab-case-routing.module.ts` | `employee-routing.module.ts` |
| Directory | `kebab-case` | `employee-list/` |

### TypeScript Code

| Type | Pattern | Example |
|------|---------|---------|
| Class | `PascalCase` | `EmployeeListComponent` |
| Interface | `PascalCase` | `Employee` |
| Enum | `PascalCase` | `EmployeeStatus` |
| Variable | `camelCase` | `currentUser` |
| Constant | `UPPER_SNAKE_CASE` | `API_BASE_URL` |
| Method | `camelCase` | `getEmployees()` |
| Observable | `camelCase$` | `employees$` |
| Boolean | `is/has/should/can` prefix | `isLoading`, `hasPermission` |

### Angular Selectors

| Type | Pattern | Example |
|------|---------|---------|
| Component | `app-kebab-case` | `app-employee-list` |
| Directive | `[appCamelCase]` | `[appHasPermission]` |

---

## Import Patterns

### Import Order

```typescript
// 1. Angular core imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// 2. Angular feature imports
import { HttpClient } from '@angular/common/http';

// 3. Third-party library imports
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// 4. Application imports (path aliases)
import { AuthService, ApiService } from '@core/services';
import { Employee } from '@core/models';
import { ROUTES } from '@core/constants';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
```

### Path Aliases

**ALWAYS USE PATH ALIASES** - Never use relative paths:

```typescript
// ✅ CORRECT
import { AuthService } from '@core/services';
import { Employee } from '@core/models';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';

// ❌ WRONG
import { AuthService } from '../../../core/services/auth.service';
import { Employee } from '../../../core/models/employee.model';
```

**Available Path Aliases**:
- `@core/*` → `src/app/core/*`
- `@shared/*` → `src/app/shared/*`
- `@features/*` → `src/app/features/*`
- `@env/*` → `src/environments/*`

### Barrel Exports

Use barrel exports for cleaner imports:

```typescript
// ✅ CORRECT
import { AuthService, ApiService, NotificationService } from '@core/services';
import { ROUTES, STORAGE_KEYS } from '@core/constants';

// ❌ WRONG
import { AuthService } from '@core/services/auth.service';
import { ApiService } from '@core/services/api.service';
```

---

## Common Code Snippets

### Component Template

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, ApiService } from '@core/services';
import { Employee } from '@core/models';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';

@Component({
  selector: 'app-feature-name',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GlassCardComponent
  ],
  templateUrl: './feature-name.component.html',
  styleUrls: ['./feature-name.component.scss']
})
export class FeatureNameComponent implements OnInit {
  // Public properties
  data: Employee[] = [];
  isLoading = false;
  currentUser$: Observable<User | null>;

  // Private properties
  private readonly MAX_ITEMS = 10;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {
    this.currentUser$ = this.authService.currentUser$;
  }

  ngOnInit(): void {
    this.loadData();
  }

  // Public methods
  handleAction(): void {
    // Implementation
  }

  // Private methods
  private loadData(): void {
    this.isLoading = true;
    // Implementation
    this.isLoading = false;
  }
}
```

### Service Template

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ApiResponse } from '@core/services';
import { environment } from '@env/environment';
import { ModelName } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ModelNameService {
  private readonly baseUrl = `${environment.jbossUrl}${environment.apiEndpoints.core}`;

  constructor(private apiService: ApiService) {}

  getItems(): Observable<ApiResponse<ModelName[]>> {
    return this.apiService.get<ModelName[]>(`${this.baseUrl}/items`);
  }

  getItemById(id: string): Observable<ApiResponse<ModelName>> {
    return this.apiService.get<ModelName>(`${this.baseUrl}/items/${id}`);
  }

  createItem(item: ModelName): Observable<ApiResponse<ModelName>> {
    return this.apiService.post<ModelName>(`${this.baseUrl}/items`, item);
  }

  updateItem(id: string, item: ModelName): Observable<ApiResponse<ModelName>> {
    return this.apiService.put<ModelName>(`${this.baseUrl}/items/${id}`, item);
  }

  deleteItem(id: string): Observable<ApiResponse<void>> {
    return this.apiService.delete<void>(`${this.baseUrl}/items/${id}`);
  }
}
```

### Model Template

```typescript
export interface ModelName {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModelNameCreateRequest {
  name: string;
  description?: string;
}

export interface ModelNameUpdateRequest {
  name?: string;
  description?: string;
}
```

### API Call with Error Handling

```typescript
loadData(): void {
  this.isLoading = true;
  
  this.service.getData().subscribe({
    next: (response) => {
      if (response.success) {
        this.data = response.data;
      } else {
        this.notificationService.showError(response.error?.message || 'เกิดข้อผิดพลาด');
      }
      this.isLoading = false;
    },
    error: (error) => {
      this.notificationService.showError('ไม่สามารถโหลดข้อมูลได้');
      this.isLoading = false;
      console.error('Error:', error);
    }
  });
}
```

### Form with Validation

```typescript
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Submit form
    } else {
      this.form.markAllAsTouched();
    }
  }
}
```

### Template with Loading State

```html
@if (isLoading) {
  <app-skeleton-loader [rows]="5"></app-skeleton-loader>
} @else if (hasError) {
  <app-error-state [message]="errorMessage"></app-error-state>
} @else if (data.length === 0) {
  <app-empty-state [title]="'No data found'"></app-empty-state>
} @else {
  <app-data-table [data]="data" [columns]="columns"></app-data-table>
}
```

### Route Navigation

```typescript
import { Router } from '@angular/router';
import { ROUTES } from '@core/constants';

// Navigate to route
this.router.navigate([ROUTES.LEGACY.HOME]);

// Navigate with params
this.router.navigate([ROUTES.LEGACY.PERSONAL, employeeId]);

// Navigate with query params
this.router.navigate([ROUTES.LEGACY.HOME], {
  queryParams: { search: 'keyword' }
});
```

### Translation

```typescript
import { TranslateService } from '@ngx-translate/core';

// In component
constructor(private translate: TranslateService) {}

// Get translation
const message = this.translate.instant('features.employee.title');

// In template
<h1>{{ 'features.employee.title' | translate }}</h1>
```

---

## Checklist

### Before Creating New Component

- [ ] Check if similar component exists
- [ ] Decide: Standalone or Module-based?
- [ ] Create component files (`.ts`, `.html`, `.scss`)
- [ ] Use proper naming conventions
- [ ] Add to appropriate module or import in standalone

### Before Creating New Service

- [ ] Check if similar service exists
- [ ] Use `providedIn: 'root'` for singleton
- [ ] Always use `ApiService`, not `HttpClient`
- [ ] Define proper return types
- [ ] Add error handling

### Before Creating New Model

- [ ] Check if similar model exists
- [ ] Use `interface` for object shapes
- [ ] Define all required fields
- [ ] Add JSDoc comments for complex fields
- [ ] Export from `index.ts` if needed

### Code Review Checklist

- [ ] Follows naming conventions
- [ ] Proper TypeScript types (no `any`)
- [ ] Error handling implemented
- [ ] Uses `ApiService` instead of `HttpClient`
- [ ] Path aliases used (not relative paths)
- [ ] Barrel exports used where applicable
- [ ] Loading states shown
- [ ] Error states handled
- [ ] Empty states handled
- [ ] Accessibility considered (ARIA labels)
- [ ] Responsive design
- [ ] Translation keys used
- [ ] No console.log (use console.warn/error if needed)
- [ ] No hardcoded colors (use CSS variables)
- [ ] No solid backgrounds on page containers

### Before Submitting PR

- [ ] All tests pass
- [ ] No linter errors
- [ ] No TypeScript errors
- [ ] Code formatted (Prettier)
- [ ] Documentation updated
- [ ] Translation keys added (if needed)
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Accessibility tested
- [ ] Performance checked

---

## Common Patterns

### Loading Pattern

```typescript
isLoading = false;

loadData(): void {
  this.isLoading = true;
  this.service.getData().subscribe({
    next: (response) => {
      // Handle success
      this.isLoading = false;
    },
    error: (error) => {
      // Handle error
      this.isLoading = false;
    }
  });
}
```

### Error Handling Pattern

```typescript
this.service.getData().subscribe({
  next: (response) => {
    if (response.success) {
      this.data = response.data;
    } else {
      this.notificationService.showError(response.error?.message);
    }
  },
  error: (error) => {
    this.notificationService.showError('เกิดข้อผิดพลาด');
    console.error('Error:', error);
  }
});
```

### Pagination Pattern

```typescript
currentPage = 0;
pageSize = 20;
totalItems = 0;

loadPage(page: number): void {
  this.service.getData(page, this.pageSize).subscribe({
    next: (response) => {
      if (response.success) {
        this.data = response.data.content;
        this.totalItems = response.data.totalElements;
        this.currentPage = page;
      }
    }
  });
}
```

### Search Pattern

```typescript
searchTerm = '';

onSearch(): void {
  this.service.search(this.searchTerm).subscribe({
    next: (response) => {
      if (response.success) {
        this.data = response.data;
      }
    }
  });
}
```

### Form Submission Pattern

```typescript
onSubmit(): void {
  if (this.form.valid) {
    this.isSubmitting = true;
    this.service.create(this.form.value).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('บันทึกสำเร็จ');
          this.router.navigate([ROUTES.LEGACY.HOME]);
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        this.notificationService.showError('เกิดข้อผิดพลาด');
        this.isSubmitting = false;
      }
    });
  } else {
    this.form.markAllAsTouched();
  }
}
```

---

## Quick Commands

### Development

```bash
# Start dev server
npm start

# Build
npm run build

# Build production
npm run build:prod

# Test
npm test

# Lint
npm run lint

# Format
npm run format
```

### Git

```bash
# Create feature branch
git checkout -b feature/feature-name

# Commit
git commit -m "feat(module): description"

# Push
git push origin feature/feature-name
```

### Angular CLI

```bash
# Generate component
ng generate component features/module/component-name

# Generate service
ng generate service core/services/service-name

# Generate module
ng generate module features/module-name
```

---

## Useful Links

### Documentation

- [System Analysis](./SYSTEM_ANALYSIS_COMPLETE.md) - เอกสารวิเคราะห์ระบบ
- [API Integration Guide](./API_INTEGRATION_GUIDE.md) - คู่มือการเชื่อมต่อ API
- [Component Usage Guide](./COMPONENT_USAGE_GUIDE.md) - คู่มือการใช้งาน Components
- [Migration Standards](./MIGRATION_STANDARDS.md) - มาตรฐานการพัฒนา
- [Documentation Index](./DOCUMENTATION_INDEX.md) - สารบัญเอกสารทั้งหมด

### External Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [Syncfusion Angular](https://ej2.syncfusion.com/angular/documentation/)

---

**Last Updated**: 2024-12-30  
**Version**: 2.3.0

