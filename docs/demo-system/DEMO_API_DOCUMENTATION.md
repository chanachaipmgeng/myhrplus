# 📚 Demo API Documentation

**วันที่สร้าง**: 2025-01-01  
**เวอร์ชัน**: 1.0.0  
**สถานะ**: ✅ **ACTIVE**

---

## 📋 สารบัญ

1. [ภาพรวม](#ภาพรวม)
2. [Core Services API](#core-services-api)
3. [Component APIs](#component-apis)
4. [Advanced Usage Examples](#advanced-usage-examples)
5. [Integration Patterns](#integration-patterns)
6. [Error Handling](#error-handling)
7. [Best Practices](#best-practices)

---

## ภาพรวม

เอกสารนี้ครอบคลุม API documentation สำหรับ:
- **Core Services** (30+ services)
- **Shared Components** (84+ components)
- **Demo Components** (96 components)
- **Integration Patterns**
- **Advanced Usage Examples**

---

## Core Services API

### ApiService

**Location**: `@core/services/api.service.ts`  
**Purpose**: HTTP client wrapper with retry, error handling, and caching

#### Methods

##### `get<T>(endpoint: string, params?: any, useCache?: boolean, cacheKey?: string): Observable<ApiResponse<T>>`

**Description**: GET request with optional caching

**Parameters**:
- `endpoint: string` - API endpoint (relative or absolute URL)
- `params?: any` - Query parameters
- `useCache?: boolean` - Enable caching (default: false)
- `cacheKey?: string` - Cache key (required if useCache is true)

**Returns**: `Observable<ApiResponse<T>>`

**Example**:
```typescript
import { ApiService } from '@core/services';

constructor(private apiService: ApiService) {}

// Basic GET request
this.apiService.get<Employee[]>('/capi/employees')
  .subscribe({
    next: (response) => {
      if (response.success) {
        console.log(response.data);
      }
    },
    error: (error) => console.error(error)
  });

// GET with parameters
this.apiService.get<Employee[]>('/capi/employees', {
  department: 'IT',
  status: 'active'
}).subscribe(response => {
  // Handle response
});

// GET with caching
this.apiService.get<Company[]>('/capi/companies', null, true, 'companies-list')
  .subscribe(response => {
    // Response is cached for subsequent requests
  });
```

##### `post<T>(endpoint: string, body: any): Observable<ApiResponse<T>>`

**Description**: POST request

**Parameters**:
- `endpoint: string` - API endpoint
- `body: any` - Request body

**Returns**: `Observable<ApiResponse<T>>`

**Example**:
```typescript
// Create employee
this.apiService.post<Employee>('/capi/employees', {
  name: 'John Doe',
  email: 'john@example.com',
  department: 'IT'
}).subscribe({
  next: (response) => {
    if (response.success) {
      this.notificationService.showSuccess('Employee created successfully');
    }
  },
  error: (error) => {
    this.notificationService.showError('Failed to create employee');
  }
});
```

##### `put<T>(endpoint: string, body: any): Observable<ApiResponse<T>>`

**Description**: PUT request for updates

**Example**:
```typescript
// Update employee
this.apiService.put<Employee>(`/capi/employees/${employeeId}`, {
  name: 'John Doe Updated',
  email: 'john.updated@example.com'
}).subscribe(response => {
  // Handle response
});
```

##### `delete<T>(endpoint: string): Observable<ApiResponse<T>>`

**Description**: DELETE request

**Example**:
```typescript
// Delete employee
this.apiService.delete<void>(`/capi/employees/${employeeId}`)
  .subscribe({
    next: (response) => {
      if (response.success) {
        this.notificationService.showSuccess('Employee deleted');
      }
    }
  });
```

##### `uploadFile(endpoint: string, file: File, additionalData?: any): Observable<ApiResponse<any>>`

**Description**: Upload file with FormData

**Example**:
```typescript
// Upload file
const fileInput = event.target as HTMLInputElement;
if (fileInput.files && fileInput.files[0]) {
  const file = fileInput.files[0];
  this.apiService.uploadFile('/capi/upload', file, {
    employeeId: '123',
    documentType: 'resume'
  }).subscribe({
    next: (response) => {
      if (response.success) {
        this.notificationService.showSuccess('File uploaded successfully');
      }
    }
  });
}
```

##### `downloadFile(endpoint: string, params?: any): Observable<Blob>`

**Description**: Download file

**Example**:
```typescript
// Download file
this.apiService.downloadFile('/capi/export/payslip', {
  employeeId: '123',
  month: '2024-01'
}).subscribe({
  next: (blob) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'payslip.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  }
});
```

#### Features

- **Automatic Retry**: Retries failed requests (max 3 retries for 5xx errors)
- **Error Handling**: Centralized error handling
- **Caching**: Optional response caching via `CacheService`
- **Type Safety**: Full TypeScript support with generics

---

### NotificationService

**Location**: `@core/services/notification.service.ts`  
**Purpose**: Toast/Snackbar notifications

#### Methods

##### `showSuccess(message: string, duration?: number): void`

**Description**: Show success toast

**Example**:
```typescript
import { NotificationService } from '@core/services';

constructor(private notificationService: NotificationService) {}

// Basic success notification
this.notificationService.showSuccess('Operation completed successfully');

// Custom duration
this.notificationService.showSuccess('Saved!', 5000);
```

##### `showError(message: string, duration?: number): void`

**Description**: Show error toast

**Example**:
```typescript
this.notificationService.showError('Failed to save data');
```

##### `showWarning(message: string, duration?: number): void`

**Description**: Show warning toast

**Example**:
```typescript
this.notificationService.showWarning('Please check your input');
```

##### `showInfo(message: string, duration?: number): void`

**Description**: Show info toast

**Example**:
```typescript
this.notificationService.showInfo('New update available');
```

#### Advanced Usage

```typescript
// In component
export class MyComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // Set container for dynamic toast notifications
    this.notificationService.setContainer(this.viewContainerRef);
  }

  handleSave(): void {
    this.apiService.post('/api/save', data).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Saved successfully');
        } else {
          this.notificationService.showError(response.error?.message || 'Save failed');
        }
      },
      error: (error) => {
        this.notificationService.showError('Network error occurred');
      }
    });
  }
}
```

---

### ThemeService

**Location**: `@core/services/theme.service.ts`  
**Purpose**: Theme management (Light/Dark/MyHR, colors, styles)

#### Methods

##### `setMode(mode: ThemeMode): void`

**Description**: Set theme mode (light, dark, auto)

**Example**:
```typescript
import { ThemeService } from '@core/services';

constructor(private themeService: ThemeService) {}

// Set dark mode
this.themeService.setMode('dark');

// Set light mode
this.themeService.setMode('light');

// Auto mode (follows system preference)
this.themeService.setMode('auto');
```

##### `setColor(color: ThemeColor): void`

**Description**: Set theme color

**Available Colors**: `'blue' | 'indigo' | 'purple' | 'green' | 'orange' | 'red' | 'teal' | 'pink' | 'myhr'`

**Example**:
```typescript
// Set blue theme
this.themeService.setColor('blue');

// Set MyHR theme (default)
this.themeService.setColor('myhr');
```

##### `setPrimaryColor(rgb: string): void`

**Description**: Set custom primary color (RGB format: "59, 130, 246")

**Example**:
```typescript
// Set custom blue
this.themeService.setPrimaryColor('59, 130, 246');

// Set custom green
this.themeService.setPrimaryColor('34, 197, 94');
```

##### `setSidebarStyle(style: SidebarStyle): void`

**Description**: Set sidebar background style

**Available Styles**: `'white' | 'dark' | 'primary' | 'primary-gradient'`

**Example**:
```typescript
// Set primary gradient sidebar
this.themeService.setSidebarStyle('primary-gradient');
```

##### `setHeaderStyle(style: HeaderStyle): void`

**Description**: Set header background style

**Example**:
```typescript
this.themeService.setHeaderStyle('primary');
```

##### `setMainLayoutStyle(style: MainLayoutStyle): void`

**Description**: Set main layout background style

**Example**:
```typescript
this.themeService.setMainLayoutStyle('primary-gradient');
```

#### Observables

##### `theme$: Observable<ThemeConfig>`

**Description**: Observable for theme changes

**Example**:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '@core/services';

export class MyComponent implements OnInit, OnDestroy {
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      console.log('Theme changed:', theme);
      // React to theme changes
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }
}
```

---

### LoadingService

**Location**: `@core/services/loading.service.ts`  
**Purpose**: Global loading state management

#### Methods

##### `show(message?: string): void`

**Description**: Show global loading spinner

**Example**:
```typescript
import { LoadingService } from '@core/services';

constructor(private loadingService: LoadingService) {}

// Show loading
this.loadingService.show('Loading data...');

// Hide loading
this.loadingService.hide();
```

#### Advanced Usage

```typescript
// With API call
this.loadingService.show('Loading employees...');
this.apiService.get<Employee[]>('/capi/employees')
  .pipe(
    finalize(() => this.loadingService.hide())
  )
  .subscribe({
    next: (response) => {
      if (response.success) {
        this.employees = response.data || [];
      }
    },
    error: (error) => {
      this.notificationService.showError('Failed to load employees');
    }
  });
```

---

### AuthService

**Location**: `@core/services/auth.service.ts`  
**Purpose**: Authentication management

#### Methods

##### `login(username: string, password: string): Observable<ApiResponse<User>>`

**Description**: User login

**Example**:
```typescript
import { AuthService } from '@core/services';

constructor(private authService: AuthService) {}

login(username: string, password: string): void {
  this.loadingService.show('Logging in...');
  this.authService.login(username, password)
    .pipe(
      finalize(() => this.loadingService.hide())
    )
    .subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.router.navigate(['/home']);
          this.notificationService.showSuccess('Login successful');
        } else {
          this.notificationService.showError(response.error?.message || 'Login failed');
        }
      },
      error: (error) => {
        this.notificationService.showError('Network error');
      }
    });
}
```

##### `logout(): void`

**Description**: User logout

**Example**:
```typescript
logout(): void {
  this.authService.logout();
  this.router.navigate(['/auth/login']);
  this.notificationService.showInfo('Logged out successfully');
}
```

##### `isAuthenticated(): boolean`

**Description**: Check authentication status

**Example**:
```typescript
if (this.authService.isAuthenticated()) {
  // User is logged in
}
```

##### `getCurrentUser(): User | null`

**Description**: Get current user

**Example**:
```typescript
const user = this.authService.getCurrentUser();
if (user) {
  console.log('Current user:', user.name);
}
```

---

## Component APIs

### GlassCardComponent

**Location**: `@shared/components/glass-card/glass-card.component.ts`  
**Selector**: `<app-glass-card>`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'strong' \| 'weak'` | `'default'` | Glass effect variant |
| `padding` | `string` | `'p-4'` | Padding classes |
| `animate` | `'fade-in' \| 'fade-in-up' \| 'fade-in-down' \| 'scale-in' \| null` | `null` | Animation type |

#### Example

```html
<!-- Basic usage -->
<app-glass-card padding="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</app-glass-card>

<!-- With variant -->
<app-glass-card variant="strong" padding="p-6">
  <h3>Strong Glass Card</h3>
</app-glass-card>

<!-- With animation -->
<app-glass-card 
  variant="default" 
  padding="p-6"
  animate="fade-in-up">
  <h3>Animated Card</h3>
</app-glass-card>
```

---

### GlassButtonComponent

**Location**: `@shared/components/glass-button/glass-button.component.ts`  
**Selector**: `<app-glass-button>`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `click` | `EventEmitter<void>` | Click event |

#### Example

```html
<!-- Basic button -->
<app-glass-button (click)="handleClick()">
  Click Me
</app-glass-button>

<!-- With variant and size -->
<app-glass-button 
  variant="secondary" 
  size="lg"
  (click)="handleClick()">
  Large Secondary Button
</app-glass-button>

<!-- With loading state -->
<app-glass-button 
  [loading]="isLoading"
  (click)="handleSave()">
  Save
</app-glass-button>

<!-- Disabled button -->
<app-glass-button 
  [disabled]="!isValid"
  (click)="handleSubmit()">
  Submit
</app-glass-button>
```

---

### GlassInputComponent

**Location**: `@shared/components/glass-input/glass-input.component.ts`  
**Selector**: `<app-glass-input>`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Required field |
| `useFormValidationMessages` | `boolean` | `false` | Use form validation messages |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Value change event |

#### Example

```html
<!-- Basic input -->
<app-glass-input 
  [(ngModel)]="value"
  placeholder="Enter text">
</app-glass-input>

<!-- With validation -->
<app-glass-input 
  [(ngModel)]="email"
  type="email"
  placeholder="Email"
  [required]="true"
  [useFormValidationMessages]="true">
  <app-form-validation-messages [control]="form.get('email')"></app-form-validation-messages>
</app-glass-input>
```

---

## Advanced Usage Examples

### API Service with Error Handling

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService, NotificationService, LoadingService } from '@core/services';
import { finalize } from 'rxjs/operators';

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = false;

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.loadingService.show('Loading employees...');

    this.apiService.get<Employee[]>('/capi/employees', null, true, 'employees-list')
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.loadingService.hide();
        })
      )
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.employees = response.data;
          } else {
            this.notificationService.showError(
              response.error?.message || 'Failed to load employees'
            );
          }
        },
        error: (error) => {
          console.error('Error loading employees:', error);
          this.notificationService.showError('Network error occurred');
        }
      });
  }

  deleteEmployee(id: string): void {
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    this.loadingService.show('Deleting employee...');
    this.apiService.delete<void>(`/capi/employees/${id}`)
      .pipe(
        finalize(() => this.loadingService.hide())
      )
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Employee deleted successfully');
            this.loadEmployees(); // Reload list
          } else {
            this.notificationService.showError(
              response.error?.message || 'Failed to delete employee'
            );
          }
        },
        error: (error) => {
          this.notificationService.showError('Network error occurred');
        }
      });
  }
}
```

### Reactive Forms with Validation

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, NotificationService } from '@core/services';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      phone: ['', Validators.pattern(/^[0-9]{10}$/)]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      this.notificationService.showWarning('Please fill in all required fields');
      return;
    }

    const formData = this.employeeForm.value;
    this.apiService.post('/capi/employees', formData)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Employee created successfully');
            this.employeeForm.reset();
          } else {
            this.notificationService.showError(
              response.error?.message || 'Failed to create employee'
            );
          }
        },
        error: (error) => {
          this.notificationService.showError('Network error occurred');
        }
      });
  }

  get name() { return this.employeeForm.get('name'); }
  get email() { return this.employeeForm.get('email'); }
  get department() { return this.employeeForm.get('department'); }
  get phone() { return this.employeeForm.get('phone'); }
}
```

```html
<form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">
  <app-glass-card padding="p-6">
    <div class="space-y-4">
      <!-- Name Input -->
      <div>
        <label class="block text-sm font-medium mb-2">Name *</label>
        <app-glass-input
          formControlName="name"
          placeholder="Enter name"
          [useFormValidationMessages]="true">
          <app-form-validation-messages [control]="name"></app-form-validation-messages>
        </app-glass-input>
      </div>

      <!-- Email Input -->
      <div>
        <label class="block text-sm font-medium mb-2">Email *</label>
        <app-glass-input
          formControlName="email"
          type="email"
          placeholder="Enter email"
          [useFormValidationMessages]="true">
          <app-form-validation-messages [control]="email"></app-form-validation-messages>
        </app-glass-input>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end gap-4">
        <app-glass-button
          type="submit"
          [loading]="isSubmitting"
          [disabled]="employeeForm.invalid">
          Submit
        </app-glass-button>
      </div>
    </div>
  </app-glass-card>
</form>
```

---

## Integration Patterns

### Service Integration Pattern

```typescript
// 1. Create service
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly baseUrl = `${environment.jbossUrl}${environment.apiEndpoints.core}`;

  constructor(private apiService: ApiService) {}

  getEmployees(params?: any): Observable<ApiResponse<Employee[]>> {
    return this.apiService.get<Employee[]>(
      `${this.baseUrl}/employees`,
      params,
      true, // useCache
      'employees-list' // cacheKey
    );
  }

  getEmployeeById(id: string): Observable<ApiResponse<Employee>> {
    return this.apiService.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  createEmployee(employee: Employee): Observable<ApiResponse<Employee>> {
    return this.apiService.post<Employee>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<ApiResponse<Employee>> {
    return this.apiService.put<Employee>(`${this.baseUrl}/employees/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<ApiResponse<void>> {
    return this.apiService.delete<void>(`${this.baseUrl}/employees/${id}`);
  }
}

// 2. Use in component
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.employees = response.data;
          }
        },
        error: (error) => {
          this.notificationService.showError('Failed to load employees');
        }
      });
  }
}
```

---

## Error Handling

### Standard Error Handling Pattern

```typescript
this.apiService.get<Data>('/api/endpoint')
  .subscribe({
    next: (response) => {
      if (response.success) {
        // Handle success
      } else {
        // Handle API error
        this.notificationService.showError(
          response.error?.message || 'Operation failed'
        );
      }
    },
    error: (error) => {
      // Handle network/HTTP error
      console.error('Error:', error);
      this.notificationService.showError('Network error occurred');
    }
  });
```

### Error Interceptor

Error handling is automatically handled by `ErrorInterceptor`:
- Automatic retry for 5xx errors (max 3 retries)
- User-friendly error messages
- Error logging

---

## Best Practices

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

### 2. Use TypeScript Generics

✅ **Do**:
```typescript
this.apiService.get<Employee[]>('/api/employees')
  .subscribe(response => {
    // response.data is typed as Employee[]
  });
```

### 3. Handle Loading States

✅ **Do**:
```typescript
this.loadingService.show('Loading...');
this.apiService.get<Data>('/api/data')
  .pipe(finalize(() => this.loadingService.hide()))
  .subscribe(...);
```

### 4. Use Caching for Read-Only Data

✅ **Do**:
```typescript
this.apiService.get<Company[]>('/api/companies', null, true, 'companies-list')
  .subscribe(...);
```

### 5. Show User Feedback

✅ **Do**:
```typescript
this.apiService.post('/api/save', data)
  .subscribe({
    next: (response) => {
      if (response.success) {
        this.notificationService.showSuccess('Saved successfully');
      } else {
        this.notificationService.showError('Save failed');
      }
    }
  });
```

---

**Last Updated**: 2025-01-01  
**Status**: ✅ **ACTIVE**  
**See Also**: 
- `DEMO_INTEGRATION_GUIDE.md` - Integration guide
- `DEMO_BEST_PRACTICES.md` - Best practices
- `API_INTEGRATION_GUIDE.md` - API integration guide

