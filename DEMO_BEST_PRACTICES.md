# ✨ Demo Best Practices

**วันที่สร้าง**: 2025-01-01  
**เวอร์ชัน**: 1.0.0  
**สถานะ**: ✅ **ACTIVE**

---

## 📋 สารบัญ

1. [Component Best Practices](#component-best-practices)
2. [Service Best Practices](#service-best-practices)
3. [Form Best Practices](#form-best-practices)
4. [Performance Best Practices](#performance-best-practices)
5. [Accessibility Best Practices](#accessibility-best-practices)
6. [Code Quality Best Practices](#code-quality-best-practices)
7. [Testing Best Practices](#testing-best-practices)

---

## Component Best Practices

### 1. Use Semantic Colors

❌ **Don't**:
```html
<div class="bg-blue-500 text-blue-600 border-blue-500">
  Content
</div>
```

✅ **Do**:
```html
<div class="bg-primary text-primary border-primary">
  Content
</div>
```

**Why**: Semantic colors support dynamic theming and are easier to maintain.

---

### 2. Use CSS Variables for Spacing

❌ **Don't**:
```scss
.card {
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 8px;
}
```

✅ **Do**:
```scss
.card {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

**Why**: Consistent spacing across the application, easier to maintain.

---

### 3. Use Glass Components

❌ **Don't**:
```html
<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  Content
</div>
```

✅ **Do**:
```html
<app-glass-card padding="p-6">
  Content
</app-glass-card>
```

**Why**: Consistent design, automatic theme support, better maintainability.

---

### 4. Use Responsive Utilities

❌ **Don't**:
```html
<div class="grid grid-cols-3">
  <!-- Always 3 columns -->
</div>
```

✅ **Do**:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Responsive grid -->
</div>
```

**Why**: Better mobile experience, follows mobile-first approach.

---

### 5. Use Loading States

❌ **Don't**:
```html
<div *ngIf="!isLoading">
  <div *ngFor="let item of items">{{ item.name }}</div>
</div>
```

✅ **Do**:
```html
@if (isLoading) {
  <app-skeleton-loader></app-skeleton-loader>
} @else {
  <div *ngFor="let item of items">{{ item.name }}</div>
}
```

**Why**: Better UX, shows loading state clearly.

---

### 6. Use Empty States

❌ **Don't**:
```html
<div *ngIf="items.length === 0">
  No items found
</div>
```

✅ **Do**:
```html
@if (items.length === 0) {
  <app-empty-state
    iconName="inbox"
    title="No items found"
    description="There are no items to display">
  </app-empty-state>
}
```

**Why**: Better UX, consistent empty state design.

---

## Service Best Practices

### 1. Always Use ApiService

❌ **Don't**:
```typescript
constructor(private http: HttpClient) {}

this.http.get('/api/data').subscribe(...);
```

✅ **Do**:
```typescript
constructor(private apiService: ApiService) {}

this.apiService.get<Data>('/api/data').subscribe(...);
```

**Why**: Automatic retry, error handling, caching support.

---

### 2. Use TypeScript Generics

❌ **Don't**:
```typescript
this.apiService.get('/api/employees').subscribe(response => {
  const employees = response.data; // Type: any
});
```

✅ **Do**:
```typescript
this.apiService.get<Employee[]>('/api/employees').subscribe(response => {
  const employees = response.data; // Type: Employee[]
});
```

**Why**: Type safety, better IDE support, fewer runtime errors.

---

### 3. Use Caching for Read-Only Data

❌ **Don't**:
```typescript
// Always makes API call
this.apiService.get('/api/companies').subscribe(...);
```

✅ **Do**:
```typescript
// Uses cache if available
this.apiService.get<Company[]>('/api/companies', null, true, 'companies-list')
  .subscribe(...);
```

**Why**: Better performance, reduced server load.

---

### 4. Handle Loading States

❌ **Don't**:
```typescript
this.apiService.get('/api/data').subscribe(response => {
  // No loading indicator
});
```

✅ **Do**:
```typescript
this.loadingService.show('Loading...');
this.apiService.get('/api/data')
  .pipe(finalize(() => this.loadingService.hide()))
  .subscribe(...);
```

**Why**: Better UX, user knows something is happening.

---

### 5. Show User Feedback

❌ **Don't**:
```typescript
this.apiService.post('/api/save', data).subscribe(response => {
  // No feedback to user
});
```

✅ **Do**:
```typescript
this.apiService.post('/api/save', data).subscribe({
  next: (response) => {
    if (response.success) {
      this.notificationService.showSuccess('Saved successfully');
    } else {
      this.notificationService.showError('Save failed');
    }
  },
  error: (error) => {
    this.notificationService.showError('Network error');
  }
});
```

**Why**: User knows the result of their action.

---

## Form Best Practices

### 1. Use Reactive Forms

❌ **Don't**:
```html
<input [(ngModel)]="name" required minlength="3">
```

✅ **Do**:
```typescript
this.form = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]]
});
```

```html
<input formControlName="name">
```

**Why**: Better validation, easier testing, more control.

---

### 2. Use Form Validation Messages Component

❌ **Don't**:
```html
<input formControlName="email">
<div *ngIf="form.get('email')?.hasError('required')">
  Email is required
</div>
<div *ngIf="form.get('email')?.hasError('email')">
  Invalid email format
</div>
```

✅ **Do**:
```html
<app-glass-input
  formControlName="email"
  [useFormValidationMessages]="true">
  <app-form-validation-messages [control]="form.get('email')"></app-form-validation-messages>
</app-glass-input>
```

**Why**: Consistent error messages, less code, better UX.

---

### 3. Mark All Fields as Touched on Submit

❌ **Don't**:
```typescript
onSubmit(): void {
  if (this.form.invalid) {
    return; // User doesn't see which fields are invalid
  }
}
```

✅ **Do**:
```typescript
onSubmit(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    this.notificationService.showWarning('Please fill in all required fields');
    return;
  }
}
```

**Why**: User sees all validation errors at once.

---

### 4. Reset Form After Success

❌ **Don't**:
```typescript
onSubmit(): void {
  this.apiService.post('/api/save', this.form.value).subscribe({
    next: (response) => {
      if (response.success) {
        // Form still has old values
      }
    }
  });
}
```

✅ **Do**:
```typescript
onSubmit(): void {
  this.apiService.post('/api/save', this.form.value).subscribe({
    next: (response) => {
      if (response.success) {
        this.form.reset();
        this.notificationService.showSuccess('Saved successfully');
      }
    }
  });
}
```

**Why**: Clean form state, ready for next input.

---

## Performance Best Practices

### 1. Use OnPush Change Detection

❌ **Don't**:
```typescript
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items: Item[] = [];
}
```

✅ **Do**:
```typescript
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  items: Item[] = [];
}
```

**Why**: Better performance, fewer change detection cycles.

---

### 2. Use TrackBy in *ngFor

❌ **Don't**:
```html
<div *ngFor="let item of items">{{ item.name }}</div>
```

✅ **Do**:
```html
<div *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</div>
```

```typescript
trackByFn(index: number, item: Item): string {
  return item.id;
}
```

**Why**: Better performance, Angular can track items efficiently.

---

### 3. Unsubscribe from Observables

❌ **Don't**:
```typescript
ngOnInit(): void {
  this.apiService.get('/api/data').subscribe(...);
  // Memory leak if component is destroyed
}
```

✅ **Do**:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export class MyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.apiService.get('/api/data')
      .pipe(takeUntil(this.destroy$))
      .subscribe(...);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**Why**: Prevents memory leaks.

---

### 4. Use Async Pipe When Possible

❌ **Don't**:
```typescript
export class MyComponent implements OnInit {
  data: Data[] = [];

  ngOnInit(): void {
    this.apiService.get<Data[]>('/api/data').subscribe(response => {
      this.data = response.data || [];
    });
  }
}
```

```html
<div *ngFor="let item of data">{{ item.name }}</div>
```

✅ **Do**:
```typescript
export class MyComponent {
  data$ = this.apiService.get<Data[]>('/api/data').pipe(
    map(response => response.data || [])
  );
}
```

```html
<div *ngFor="let item of data$ | async">{{ item.name }}</div>
```

**Why**: Automatic subscription management, no memory leaks.

---

## Accessibility Best Practices

### 1. Use Semantic HTML

❌ **Don't**:
```html
<div (click)="handleClick()">Button</div>
```

✅ **Do**:
```html
<button type="button" (click)="handleClick()">Button</button>
```

**Why**: Screen readers can identify buttons, keyboard navigation works.

---

### 2. Add ARIA Labels

❌ **Don't**:
```html
<button (click)="delete()">X</button>
```

✅ **Do**:
```html
<button 
  type="button"
  (click)="delete()"
  [attr.aria-label]="'Delete item'">
  X
</button>
```

**Why**: Screen readers can announce the button purpose.

---

### 3. Use Proper Form Labels

❌ **Don't**:
```html
<input type="text" placeholder="Name">
```

✅ **Do**:
```html
<label for="name">Name</label>
<input type="text" id="name" formControlName="name">
```

**Why**: Screen readers can associate labels with inputs.

---

### 4. Support Keyboard Navigation

❌ **Don't**:
```html
<div (click)="handleClick()">Clickable</div>
```

✅ **Do**:
```html
<div 
  (click)="handleClick()"
  (keydown.enter)="handleClick()"
  (keydown.space)="handleClick()"
  [attr.role]="'button'"
  [attr.tabindex]="0">
  Clickable
</div>
```

**Why**: Keyboard users can interact with the element.

---

## Code Quality Best Practices

### 1. Use Path Aliases

❌ **Don't**:
```typescript
import { ApiService } from '../../../core/services/api.service';
```

✅ **Do**:
```typescript
import { ApiService } from '@core/services';
```

**Why**: Cleaner imports, easier refactoring.

---

### 2. Use Barrel Exports

❌ **Don't**:
```typescript
import { ApiService } from '@core/services/api.service';
import { NotificationService } from '@core/services/notification.service';
import { LoadingService } from '@core/services/loading.service';
```

✅ **Do**:
```typescript
import { ApiService, NotificationService, LoadingService } from '@core/services';
```

**Why**: Cleaner imports, single source of truth.

---

### 3. Avoid `any` Type

❌ **Don't**:
```typescript
function processData(data: any): any {
  return data.map((item: any) => item.value);
}
```

✅ **Do**:
```typescript
interface DataItem {
  value: string;
}

function processData(data: DataItem[]): string[] {
  return data.map(item => item.value);
}
```

**Why**: Type safety, better IDE support, fewer bugs.

---

### 4. Use Explicit Return Types

❌ **Don't**:
```typescript
getEmployees() {
  return this.apiService.get('/api/employees');
}
```

✅ **Do**:
```typescript
getEmployees(): Observable<ApiResponse<Employee[]>> {
  return this.apiService.get<Employee[]>('/api/employees');
}
```

**Why**: Better type safety, clearer API.

---

### 5. Use Constants

❌ **Don't**:
```typescript
if (status === 'active') {
  // Hardcoded string
}
```

✅ **Do**:
```typescript
const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending'
} as const;

if (status === STATUS.ACTIVE) {
  // Type-safe constant
}
```

**Why**: Type safety, easier refactoring, fewer typos.

---

## Testing Best Practices

### 1. Test Component Logic

```typescript
describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get']);

    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent],
      providers: [{ provide: ApiService, useValue: spy }]
    });

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should load employees on init', () => {
    const mockEmployees: Employee[] = [
      { id: '1', name: 'John', email: 'john@example.com' }
    ];

    apiService.get.and.returnValue(of({
      success: true,
      data: mockEmployees
    }));

    component.ngOnInit();

    expect(apiService.get).toHaveBeenCalledWith('/api/employees');
    expect(component.employees).toEqual(mockEmployees);
  });
});
```

---

### 2. Test Service Methods

```typescript
describe('EmployeeService', () => {
  let service: EmployeeService;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get', 'post', 'put', 'delete']);

    TestBed.configureTestingModule({
      providers: [
        EmployeeService,
        { provide: ApiService, useValue: spy }
      ]
    });

    service = TestBed.inject(EmployeeService);
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should get employees', () => {
    const mockEmployees: Employee[] = [
      { id: '1', name: 'John', email: 'john@example.com' }
    ];

    apiService.get.and.returnValue(of({
      success: true,
      data: mockEmployees
    }));

    service.getEmployees().subscribe(response => {
      expect(response.success).toBe(true);
      expect(response.data).toEqual(mockEmployees);
    });

    expect(apiService.get).toHaveBeenCalled();
  });
});
```

---

## Summary Checklist

### Component Checklist
- [ ] Use semantic colors (`bg-primary`, `text-primary`, etc.)
- [ ] Use CSS variables for spacing, typography, shadows
- [ ] Use Glass components (`app-glass-card`, `app-glass-button`, etc.)
- [ ] Use responsive utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [ ] Use loading states (`app-skeleton-loader`)
- [ ] Use empty states (`app-empty-state`)
- [ ] Support keyboard navigation
- [ ] Add ARIA labels

### Service Checklist
- [ ] Use `ApiService` instead of `HttpClient`
- [ ] Use TypeScript generics
- [ ] Use caching for read-only data
- [ ] Handle loading states
- [ ] Show user feedback
- [ ] Handle errors properly

### Form Checklist
- [ ] Use Reactive Forms
- [ ] Use `app-form-validation-messages`
- [ ] Mark all fields as touched on submit
- [ ] Reset form after success
- [ ] Use proper form labels

### Performance Checklist
- [ ] Use OnPush change detection when possible
- [ ] Use `trackBy` in `*ngFor`
- [ ] Unsubscribe from Observables
- [ ] Use async pipe when possible

### Code Quality Checklist
- [ ] Use path aliases (`@core/`, `@shared/`, etc.)
- [ ] Use barrel exports
- [ ] Avoid `any` type
- [ ] Use explicit return types
- [ ] Use constants for magic strings

---

**Last Updated**: 2025-01-01  
**Status**: ✅ **ACTIVE**  
**See Also**: 
- `DEMO_API_DOCUMENTATION.md` - API documentation
- `DEMO_INTEGRATION_GUIDE.md` - Integration guide

