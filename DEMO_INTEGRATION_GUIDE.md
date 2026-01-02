# 🔗 Demo Integration Guide

**วันที่สร้าง**: 2025-01-01  
**เวอร์ชัน**: 1.0.0  
**สถานะ**: ✅ **ACTIVE**

---

## 📋 สารบัญ

1. [ภาพรวม](#ภาพรวม)
2. [Service Integration](#service-integration)
3. [Component Integration](#component-integration)
4. [Form Integration](#form-integration)
5. [Theme Integration](#theme-integration)
6. [State Management](#state-management)
7. [Error Handling Integration](#error-handling-integration)
8. [Real-World Examples](#real-world-examples)

---

## ภาพรวม

คู่มือนี้ครอบคลุมการ integration:
- **Services** กับ Components
- **Components** กับ Forms
- **Theme System** กับ Components
- **State Management** patterns
- **Error Handling** strategies

---

## Service Integration

### ApiService Integration

#### Basic Pattern

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService, NotificationService, LoadingService } from '@core/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit {
  items: any[] = [];
  isLoading = false;

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.loadingService.show('Loading data...');

    this.apiService.get<any[]>('/api/items')
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.loadingService.hide();
        })
      )
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.items = response.data;
          } else {
            this.notificationService.showError(
              response.error?.message || 'Failed to load data'
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

#### With Custom Service

```typescript
// 1. Create service
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly baseUrl = `${environment.jbossUrl}${environment.apiEndpoints.core}`;

  constructor(private apiService: ApiService) {}

  getEmployees(): Observable<ApiResponse<Employee[]>> {
    return this.apiService.get<Employee[]>(
      `${this.baseUrl}/employees`,
      null,
      true, // useCache
      'employees-list' // cacheKey
    );
  }

  createEmployee(employee: Employee): Observable<ApiResponse<Employee>> {
    return this.apiService.post<Employee>(`${this.baseUrl}/employees`, employee);
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

## Component Integration

### Glass Components Integration

#### GlassCard with Data

```typescript
@Component({
  selector: 'app-dashboard',
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-glass-card 
        *ngFor="let stat of statistics" 
        padding="p-6"
        animate="fade-in-up">
        <h3 class="text-lg font-semibold mb-2">{{ stat.title }}</h3>
        <p class="text-3xl font-bold text-primary">{{ stat.value }}</p>
        <p class="text-sm text-gray-500">{{ stat.change }}</p>
      </app-glass-card>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  statistics = [
    { title: 'Total Employees', value: '1,234', change: '+5% from last month' },
    { title: 'Active Projects', value: '45', change: '+2 this week' },
    { title: 'Revenue', value: '$125K', change: '+12% from last month' }
  ];

  ngOnInit(): void {}
}
```

#### GlassButton with Actions

```typescript
@Component({
  selector: 'app-action-buttons',
  template: `
    <div class="flex gap-4">
      <app-glass-button 
        variant="primary"
        [loading]="isSaving"
        (click)="handleSave()">
        Save
      </app-glass-button>
      
      <app-glass-button 
        variant="secondary"
        [disabled]="!hasChanges"
        (click)="handleCancel()">
        Cancel
      </app-glass-button>
      
      <app-glass-button 
        variant="danger"
        (click)="handleDelete()">
        Delete
      </app-glass-button>
    </div>
  `
})
export class ActionButtonsComponent {
  isSaving = false;
  hasChanges = false;

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}

  handleSave(): void {
    this.isSaving = true;
    this.apiService.post('/api/save', this.data)
      .pipe(finalize(() => this.isSaving = false))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Saved successfully');
            this.hasChanges = false;
          }
        }
      });
  }

  handleCancel(): void {
    // Cancel logic
  }

  handleDelete(): void {
    if (confirm('Are you sure?')) {
      // Delete logic
    }
  }
}
```

---

## Form Integration

### Reactive Forms with Glass Components

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
    this.apiService.post('/api/employees', formData)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Employee created successfully');
            this.employeeForm.reset();
          } else {
            this.notificationService.showError('Failed to create employee');
          }
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

      <!-- Department Select -->
      <div>
        <label class="block text-sm font-medium mb-2">Department *</label>
        <app-glass-select
          formControlName="department"
          [useFormValidationMessages]="true">
          <option value="">Select department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </app-glass-select>
        <app-form-validation-messages [control]="department"></app-form-validation-messages>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end gap-4">
        <app-glass-button
          type="button"
          variant="secondary"
          (click)="employeeForm.reset()">
          Reset
        </app-glass-button>
        <app-glass-button
          type="submit"
          [disabled]="employeeForm.invalid">
          Submit
        </app-glass-button>
      </div>
    </div>
  </app-glass-card>
</form>
```

---

## Theme Integration

### ThemeService Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeConfig } from '@core/services';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  currentTheme: ThemeConfig;
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getTheme();
  }

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }

  setMode(mode: 'light' | 'dark' | 'auto'): void {
    this.themeService.setMode(mode);
  }

  setColor(color: string): void {
    this.themeService.setColor(color as any);
  }

  setPrimaryColor(rgb: string): void {
    this.themeService.setPrimaryColor(rgb);
  }
}
```

### Dynamic Theme in Components

```typescript
@Component({
  selector: 'app-dynamic-theme',
  template: `
    <div class="p-6">
      <h2>Theme Controls</h2>
      
      <!-- Mode Selection -->
      <div class="mb-4">
        <label>Mode:</label>
        <select (change)="setMode($event.target.value)">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <!-- Color Selection -->
      <div class="mb-4">
        <label>Color:</label>
        <select (change)="setColor($event.target.value)">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="myhr">MyHR</option>
        </select>
      </div>

      <!-- Primary Color Picker -->
      <div class="mb-4">
        <label>Primary Color (RGB):</label>
        <input 
          type="text" 
          [value]="primaryColor"
          (input)="setPrimaryColor($event.target.value)"
          placeholder="59, 130, 246">
      </div>
    </div>
  `
})
export class DynamicThemeComponent {
  primaryColor = '59, 130, 246';

  constructor(private themeService: ThemeService) {}

  setMode(mode: string): void {
    this.themeService.setMode(mode as any);
  }

  setColor(color: string): void {
    this.themeService.setColor(color as any);
  }

  setPrimaryColor(rgb: string): void {
    this.primaryColor = rgb;
    this.themeService.setPrimaryColor(rgb);
  }
}
```

---

## State Management

### Component State Pattern

```typescript
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html'
})
export class StateManagementComponent implements OnInit {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();

  filteredData$: Observable<any[]>;
  searchTerm = '';

  constructor(private apiService: ApiService) {
    // Create filtered observable
    this.filteredData$ = this.data$.pipe(
      map(data => {
        if (!this.searchTerm) return data;
        return data.filter(item => 
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      })
    );
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.get<any[]>('/api/data')
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.dataSubject.next(response.data);
          }
        }
      });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    // Trigger filteredData$ update
    this.dataSubject.next(this.dataSubject.value);
  }
}
```

---

## Error Handling Integration

### Global Error Handler

```typescript
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  constructor(private notificationService: NotificationService) {}

  handleError(error: HttpErrorResponse): void {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = 'Bad request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please login again.';
          break;
        case 403:
          errorMessage = 'Forbidden. You do not have permission.';
          break;
        case 404:
          errorMessage = 'Resource not found.';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
        default:
          errorMessage = `Error: ${error.status} - ${error.message}`;
      }
    }

    this.notificationService.showError(errorMessage);
  }
}
```

### Component Error Handling

```typescript
@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html'
})
export class ErrorHandlingComponent {
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private errorHandler: ErrorHandlerService
  ) {}

  loadData(): void {
    this.apiService.get<any[]>('/api/data')
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
          // Handle HTTP error
          this.errorHandler.handleError(error);
        }
      });
  }
}
```

---

## Real-World Examples

### Complete CRUD Component

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, NotificationService, LoadingService } from '@core/services';
import { finalize } from 'rxjs/operators';

interface Employee {
  id?: string;
  name: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html'
})
export class EmployeeCrudComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm: FormGroup;
  isEditing = false;
  editingId?: string;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.loadingService.show('Loading employees...');

    this.apiService.get<Employee[]>('/api/employees')
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
            this.notificationService.showError('Failed to load employees');
          }
        },
        error: (error) => {
          this.notificationService.showError('Network error occurred');
        }
      });
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      this.notificationService.showWarning('Please fill in all required fields');
      return;
    }

    const formData = this.employeeForm.value;
    this.loadingService.show(this.isEditing ? 'Updating...' : 'Creating...');

    const request = this.isEditing
      ? this.apiService.put<Employee>(`/api/employees/${this.editingId}`, formData)
      : this.apiService.post<Employee>('/api/employees', formData);

    request
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess(
              this.isEditing ? 'Employee updated successfully' : 'Employee created successfully'
            );
            this.employeeForm.reset();
            this.isEditing = false;
            this.editingId = undefined;
            this.loadEmployees();
          } else {
            this.notificationService.showError('Operation failed');
          }
        },
        error: (error) => {
          this.notificationService.showError('Network error occurred');
        }
      });
  }

  editEmployee(employee: Employee): void {
    this.isEditing = true;
    this.editingId = employee.id;
    this.employeeForm.patchValue(employee);
  }

  deleteEmployee(id: string): void {
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    this.loadingService.show('Deleting...');
    this.apiService.delete<void>(`/api/employees/${id}`)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Employee deleted successfully');
            this.loadEmployees();
          } else {
            this.notificationService.showError('Failed to delete employee');
          }
        },
        error: (error) => {
          this.notificationService.showError('Network error occurred');
        }
      });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editingId = undefined;
    this.employeeForm.reset();
  }
}
```

---

**Last Updated**: 2025-01-01  
**Status**: ✅ **ACTIVE**  
**See Also**: 
- `DEMO_API_DOCUMENTATION.md` - API documentation
- `DEMO_BEST_PRACTICES.md` - Best practices

