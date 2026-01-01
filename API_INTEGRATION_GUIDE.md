# คู่มือการเชื่อมต่อ API - HR Management System

**วันที่สร้าง**: 2024-12-30  
**เวอร์ชัน**: 2.3.0

---

## 📋 สารบัญ

1. [ภาพรวม API](#ภาพรวม-api)
2. [การตั้งค่า Environment](#การตั้งค่า-environment)
3. [ApiService Pattern](#apiservice-pattern)
4. [API Endpoints](#api-endpoints)
5. [Authentication](#authentication)
6. [Error Handling](#error-handling)
7. [Caching](#caching)
8. [ตัวอย่างการใช้งาน](#ตัวอย่างการใช้งาน)

---

## ภาพรวม API

### Base URLs

ระบบใช้ 2 Base URLs หลัก:

```typescript
// environment.ts
export const environment = {
  // สำหรับ /plus endpoints
  baseUrl: 'https://hrplus-std.myhr.co.th/plus',
  
  // สำหรับ /hr endpoints (API หลัก)
  jbossUrl: 'https://hrplus-std.myhr.co.th/hr',
  
  // Root URL
  rootUrl: 'https://hrplus-std.myhr.co.th'
};
```

### API Endpoints Structure

```typescript
apiEndpoints: {
  auth: '/restauthen',           // Authentication API
  core: '/capi',                 // Core API (Company, Personal, etc.)
  workflow: '/wapi',             // Workflow API
  timeAttendance: '/taapi',      // Time Attendance API
  training: '/trapi',            // Training API
  employeeView: '/emvapi',       // Employee Self Service API
  appraisal: '/apsapi',          // Appraisal API
  payroll: '/prapi',             // Payroll API
  welfare: '/welapi',            // Welfare API
  recruit: '/reapi',             // Recruitment API
  unsecure: '/usapi'             // Unsecure/Public API
}
```

### Response Format

#### Success Response

```typescript
{
  success: true,
  data: T,                    // Generic type
  message?: string            // Optional message
}
```

#### Error Response

```typescript
{
  success: false,
  error: {
    code: string,             // Error code
    message: string           // Error message
  }
}
```

---

## การตั้งค่า Environment

### Development Environment

**File**: `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  baseUrl: 'https://hrplus-std.myhr.co.th/plus',
  jbossUrl: 'https://hrplus-std.myhr.co.th/hr',
  rootUrl: 'https://hrplus-std.myhr.co.th',
  apiEndpoints: {
    auth: '/restauthen',
    core: '/capi',
    workflow: '/wapi',
    timeAttendance: '/taapi',
    training: '/trapi',
    employeeView: '/emvapi',
    appraisal: '/apsapi',
    payroll: '/prapi',
    welfare: '/welapi',
    recruit: '/reapi',
    unsecure: '/usapi'
  },
  appName: 'HR System',
  version: '1.0.0'
};
```

### Production Environment

**File**: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  baseUrl: 'https://hrplus-prod.myhr.co.th/plus',
  jbossUrl: 'https://hrplus-prod.myhr.co.th/hr',
  rootUrl: 'https://hrplus-prod.myhr.co.th',
  // ... same apiEndpoints
};
```

---

## ApiService Pattern

### ApiService Features

**File**: `src/app/core/services/api.service.ts`

**Features**:
- ✅ Automatic retry (max 3 retries for 5xx errors)
- ✅ Error handling
- ✅ Response caching
- ✅ Request/Response interceptors
- ✅ Type-safe responses
- ✅ Loading state management

### ApiService Methods

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  // GET request
  get<T>(url: string, options?: ApiOptions): Observable<ApiResponse<T>>
  
  // POST request
  post<T>(url: string, body: any, options?: ApiOptions): Observable<ApiResponse<T>>
  
  // PUT request
  put<T>(url: string, body: any, options?: ApiOptions): Observable<ApiResponse<T>>
  
  // DELETE request
  delete<T>(url: string, options?: ApiOptions): Observable<ApiResponse<T>>
  
  // PATCH request
  patch<T>(url: string, body: any, options?: ApiOptions): Observable<ApiResponse<T>>
}
```

### ApiOptions Interface

```typescript
interface ApiOptions {
  useCache?: boolean;          // Enable caching (default: false)
  cacheKey?: string;           // Custom cache key
  cacheTTL?: number;           // Cache TTL in seconds
  retry?: number;               // Retry count (default: 3)
  skipAuth?: boolean;           // Skip authentication header
  headers?: HttpHeaders;        // Custom headers
  params?: HttpParams;          // Query parameters
}
```

### ⚠️ Important: Always Use ApiService

**NEVER** use `HttpClient` directly. Always use `ApiService` wrapper:

```typescript
// ❌ WRONG
constructor(private http: HttpClient) {}
this.http.get(url).subscribe(...)

// ✅ CORRECT
constructor(private apiService: ApiService) {}
this.apiService.get(url).subscribe(...)
```

---

## API Endpoints

### 1. Authentication API (`/restauthen`)

**Base URL**: `${environment.jbossUrl}/restauthen`

#### Login

```typescript
POST /restauthen/login
Body: {
  username: string,
  password: string,
  database?: string
}
Response: ApiResponse<LoginResponse>
```

#### Logout

```typescript
POST /restauthen/logout
Headers: { Authorization: 'Bearer <token>' }
Response: ApiResponse<void>
```

#### Validate Token

```typescript
GET /restauthen/validate
Headers: { Authorization: 'Bearer <token>' }
Response: ApiResponse<User>
```

### 2. Core API (`/capi`)

**Base URL**: `${environment.jbossUrl}/capi`

#### Company Management

```typescript
// Get company history
GET /capi/company/history
Response: ApiResponse<CompanyHistory[]>

// Get company information
GET /capi/company/info
Response: ApiResponse<Company>

// Get branches
GET /capi/company/branches
Response: ApiResponse<Branch[]>

// Get departments
GET /capi/company/departments
Response: ApiResponse<Department[]>
```

#### Employee Management

```typescript
// Get employees
GET /capi/employees
Params: { page?: number, size?: number, search?: string }
Response: ApiResponse<Pageable<Employee[]>>

// Get employee by ID
GET /capi/employees/:id
Response: ApiResponse<Employee>

// Create employee
POST /capi/employees
Body: Employee
Response: ApiResponse<Employee>

// Update employee
PUT /capi/employees/:id
Body: Employee
Response: ApiResponse<Employee>

// Delete employee
DELETE /capi/employees/:id
Response: ApiResponse<void>
```

### 3. Time Attendance API (`/taapi`)

**Base URL**: `${environment.jbossUrl}/taapi`

#### Leave Management

```typescript
// Get leave balance
GET /taapi/leave/balance
Params: { employeeId: string }
Response: ApiResponse<LeaveBalance>

// Get leave history
GET /taapi/leave/history
Params: { employeeId: string, page?: number, size?: number }
Response: ApiResponse<Pageable<LeaveHistory[]>>

// Request leave
POST /taapi/leave/request
Body: LeaveRequest
Response: ApiResponse<LeaveRequest>

// Get leave types
GET /taapi/leave/types
Response: ApiResponse<LeaveType[]>
```

#### Time Management

```typescript
// Get attendance records
GET /taapi/time/attendance
Params: { employeeId: string, startDate: string, endDate: string }
Response: ApiResponse<AttendanceRecord[]>

// Request time edit
POST /taapi/time/edit
Body: TimeEditRequest
Response: ApiResponse<TimeEditRequest>

// Get shift schedule
GET /taapi/time/shift
Params: { employeeId: string, month: string }
Response: ApiResponse<ShiftSchedule[]>
```

### 4. Payroll API (`/prapi`)

**Base URL**: `${environment.jbossUrl}/prapi`

#### Payroll Management

```typescript
// Get payroll process
GET /prapi/payroll/process
Params: { period: string }
Response: ApiResponse<PayrollProcess>

// Process payroll
POST /prapi/payroll/process
Body: PayrollProcessRequest
Response: ApiResponse<PayrollProcess>

// Get payslip
GET /prapi/payroll/payslip
Params: { employeeId: string, period: string }
Response: ApiResponse<Payslip>

// Get tax information
GET /prapi/payroll/tax
Params: { employeeId: string, year: number }
Response: ApiResponse<TaxInfo>
```

### 5. Training API (`/trapi`)

**Base URL**: `${environment.jbossUrl}/trapi`

#### Training Management

```typescript
// Get training courses
GET /trapi/training/courses
Params: { page?: number, size?: number }
Response: ApiResponse<Pageable<Course[]>>

// Get training history
GET /trapi/training/history
Params: { employeeId: string }
Response: ApiResponse<TrainingHistory[]>

// Register for training
POST /trapi/training/register
Body: TrainingRegistration
Response: ApiResponse<TrainingRegistration>

// Request training approval
POST /trapi/training/request
Body: TrainingRequest
Response: ApiResponse<TrainingRequest>
```

### 6. Workflow API (`/wapi`)

**Base URL**: `${environment.jbossUrl}/wapi`

#### Workflow Management

```typescript
// Get workflow inbox
GET /wapi/workflow/inbox
Params: { page?: number, size?: number }
Response: ApiResponse<Pageable<Workflow[]>>

// Get sent workflows
GET /wapi/workflow/sentbox
Params: { page?: number, size?: number }
Response: ApiResponse<Pageable<Workflow[]>>

// Create workflow
POST /wapi/workflow
Body: WorkflowRequest
Response: ApiResponse<Workflow>

// Approve workflow
POST /wapi/workflow/approve
Body: { workflowId: string, remark?: string }
Response: ApiResponse<Workflow>

// Disapprove workflow
POST /wapi/workflow/disapprove
Body: { workflowId: string, remark?: string }
Response: ApiResponse<Workflow>

// Return workflow
POST /wapi/workflow/return
Body: { workflowId: string, remark?: string }
Response: ApiResponse<Workflow>
```

---

## Authentication

### JWT Token Management

#### Token Storage

```typescript
// StorageService handles token storage
// File: src/app/core/services/storage.service.ts

// Store token
this.storageService.setItem('token', token);

// Get token
const token = this.storageService.getItem('token');

// Remove token
this.storageService.removeItem('token');
```

#### Token Refresh

```typescript
// TokenManagerService handles token refresh
// File: src/app/core/services/token-manager.service.ts

// Automatic token refresh before expiry
this.tokenManagerService.refreshTokenIfNeeded().subscribe(
  (token) => {
    // Token refreshed
  }
);
```

### AuthInterceptor

**File**: `src/app/core/interceptors/auth.interceptor.ts`

**Features**:
- Automatically adds `Authorization` header
- Handles token refresh
- Redirects to login on 401 errors

```typescript
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = this.storageService.getItem('token');
  
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next.handle(req);
}
```

### Authentication Headers

```typescript
Headers: {
  'Authorization': 'Bearer <token>',
  'Content-Type': 'application/json'
}
```

---

## Error Handling

### ErrorInterceptor

**File**: `src/app/core/interceptors/error.interceptor.ts`

**Features**:
- Global error handling
- User-friendly error messages
- Automatic retry for 5xx errors
- Logging errors

### Error Handling in Services

```typescript
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

this.apiService.get<Data>(url).pipe(
  retry(3), // Retry up to 3 times
  catchError((error) => {
    // Handle error
    this.notificationService.showError(error.message);
    return throwError(() => error);
  })
).subscribe();
```

### Error Handling in Components

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
    this.notificationService.showError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
    console.error('Error:', error);
  }
});
```

---

## Caching

### CacheService

**File**: `src/app/core/services/cache.service.ts`

**Features**:
- In-memory caching
- TTL (Time To Live) support
- Cache invalidation
- Cache key management

### Using Cache in ApiService

```typescript
// Enable caching
this.apiService.get<Data[]>(
  `${this.baseUrl}/items`,
  { useCache: true, cacheTTL: 300 } // Cache for 5 minutes
).subscribe();

// Custom cache key
this.apiService.get<Data[]>(
  `${this.baseUrl}/items`,
  { useCache: true, cacheKey: 'custom-key' }
).subscribe();
```

### Cache Invalidation

```typescript
// Clear specific cache
this.cacheService.remove('cache-key');

// Clear all cache
this.cacheService.clear();
```

---

## ตัวอย่างการใช้งาน

### 1. Service Implementation

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ApiResponse } from '@core/services';
import { environment } from '@env/environment';
import { Employee } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly baseUrl = `${environment.jbossUrl}${environment.apiEndpoints.core}`;

  constructor(private apiService: ApiService) {}

  // Get all employees
  getEmployees(page: number = 0, size: number = 20): Observable<ApiResponse<Pageable<Employee[]>>> {
    return this.apiService.get<Pageable<Employee[]>>(
      `${this.baseUrl}/employees`,
      {
        params: new HttpParams()
          .set('page', page.toString())
          .set('size', size.toString()),
        useCache: true,
        cacheTTL: 300
      }
    );
  }

  // Get employee by ID
  getEmployeeById(id: string): Observable<ApiResponse<Employee>> {
    return this.apiService.get<Employee>(
      `${this.baseUrl}/employees/${id}`,
      { useCache: true }
    );
  }

  // Create employee
  createEmployee(employee: Employee): Observable<ApiResponse<Employee>> {
    return this.apiService.post<Employee>(
      `${this.baseUrl}/employees`,
      employee
    );
  }

  // Update employee
  updateEmployee(id: string, employee: Employee): Observable<ApiResponse<Employee>> {
    return this.apiService.put<Employee>(
      `${this.baseUrl}/employees/${id}`,
      employee
    );
  }

  // Delete employee
  deleteEmployee(id: string): Observable<ApiResponse<void>> {
    return this.apiService.delete<void>(
      `${this.baseUrl}/employees/${id}`
    );
  }
}
```

### 2. Component Usage

```typescript
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@core/services';
import { Employee } from '@core/models';
import { NotificationService } from '@core/services';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = false;
  currentPage = 0;
  pageSize = 20;

  constructor(
    private employeeService: EmployeeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    
    this.employeeService.getEmployees(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.employees = response.data.content;
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

  createEmployee(employee: Employee): void {
    this.employeeService.createEmployee(employee).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('สร้างข้อมูลพนักงานสำเร็จ');
          this.loadEmployees(); // Reload list
        } else {
          this.notificationService.showError(response.error?.message || 'เกิดข้อผิดพลาด');
        }
      },
      error: (error) => {
        this.notificationService.showError('ไม่สามารถสร้างข้อมูลได้');
        console.error('Error:', error);
      }
    });
  }
}
```

### 3. File Upload

```typescript
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

uploadFile(file: File): Observable<ApiResponse<FileUploadResponse>> {
  const formData = new FormData();
  formData.append('file', file);
  
  return this.apiService.post<FileUploadResponse>(
    `${this.baseUrl}/upload`,
    formData,
    {
      skipAuth: false,
      headers: new HttpHeaders({
        // Don't set Content-Type, let browser set it with boundary
      })
    }
  );
}
```

### 4. Query Parameters

```typescript
import { HttpParams } from '@angular/common/http';

searchEmployees(searchTerm: string): Observable<ApiResponse<Employee[]>> {
  const params = new HttpParams()
    .set('search', searchTerm)
    .set('status', 'active');

  return this.apiService.get<Employee[]>(
    `${this.baseUrl}/employees/search`,
    { params }
  );
}
```

---

## Best Practices

### 1. Always Use ApiService

**NEVER** use `HttpClient` directly. Always use `ApiService` wrapper.

### 2. Type Safety

Always define proper types for API responses:

```typescript
// ✅ Good
getEmployees(): Observable<ApiResponse<Employee[]>> {
  return this.apiService.get<Employee[]>(url);
}

// ❌ Bad
getEmployees(): Observable<any> {
  return this.apiService.get(url);
}
```

### 3. Error Handling

Always handle errors properly:

```typescript
this.service.getData().subscribe({
  next: (response) => {
    if (response.success) {
      // Handle success
    } else {
      // Handle API error
    }
  },
  error: (error) => {
    // Handle network/HTTP error
  }
});
```

### 4. Caching Strategy

Use caching for:
- ✅ Static data (master data, lookup tables)
- ✅ Frequently accessed data
- ❌ User-specific data
- ❌ Real-time data

### 5. Loading States

Always show loading states:

```typescript
isLoading = false;

loadData(): void {
  this.isLoading = true;
  this.service.getData().subscribe({
    next: (response) => {
      // Handle response
      this.isLoading = false;
    },
    error: (error) => {
      // Handle error
      this.isLoading = false;
    }
  });
}
```

---

**Last Updated**: 2024-12-30  
**Version**: 2.3.0

