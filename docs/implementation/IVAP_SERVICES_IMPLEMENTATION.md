# 📚 IVAP Services Implementation Guide

**Last Updated:** 2025-01-XX  
**Status:** ✅ Completed

---

## 📋 สารบัญ

1. [Overview](#overview)
2. [โครงสร้างไฟล์](#โครงสร้างไฟล์)
3. [BaseApiService](#baseapiservice)
4. [IVAP Models](#ivap-models)
5. [IVAP Services](#ivap-services)
6. [ตัวอย่างการใช้งาน](#ตัวอย่างการใช้งาน)
7. [Migration Guide](#migration-guide)

---

## Overview

ได้สร้าง BaseApiService, Models และ Services สำหรับ IVAP Service API ตามเอกสารใน `doc-backend/` แล้ว

### สิ่งที่สร้างเสร็จแล้ว

✅ **BaseApiService** - Base service class สำหรับ IVAP API  
✅ **IVAP Models** - TypeScript interfaces และ types ทั้งหมด  
✅ **IVAP Services** - AuthService, CompanyService, EmployeeService  

---

## โครงสร้างไฟล์

```
src/app/core/
├── services/
│   ├── base-api.service.ts          # Base API service
│   └── ivap/
│       ├── auth.service.ts          # Authentication service
│       ├── company.service.ts        # Company service
│       ├── employee.service.ts       # Employee service
│       └── index.ts                  # Barrel export
└── models/
    └── ivap/
        ├── ivap-models.ts           # All IVAP models
        └── index.ts                 # Barrel export
```

---

## BaseApiService

**Location:** `src/app/core/services/base-api.service.ts`

### Features

- ✅ Automatic token management (localStorage/sessionStorage)
- ✅ Error handling with ErrorResponse
- ✅ Query parameter building
- ✅ Pagination support
- ✅ File upload support (FormData)
- ✅ File download support (Blob)

### Usage

```typescript
import { BaseApiService } from '@core/services/base-api.service';
import { HttpClient } from '@angular/common/http';

export class CustomService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/custom-endpoint');
  }

  getItems(): Observable<Item[]> {
    return this.get<Item[]>('');
  }
}
```

---

## IVAP Models

**Location:** `src/app/core/models/ivap/ivap-models.ts`

### Available Models

- **Authentication**: `LoginRequest`, `Token`, `Member`, `ForgotPasswordRequest`, etc.
- **Company**: `Company`, `CompanyBase`, `CompanyUpdate`, `CompanySettings`, etc.
- **Employee**: `CompanyEmployee`, `CompanyEmployeePost`, `CompanyEmployeeUpdate`
- **Time & Attendance**: `EmployeeTimestamp`, `Shift`, `LeaveRequest`
- **Device & Door**: `Device`, `Door`
- **Verification**: `Verification`, `FaceEnrollment`, `RFIDCard`, `QRCode`
- **Visitor & Guest**: `Visitor`, `Guest`
- **Event**: `Event`
- **Vehicle & Parking**: `Vehicle`, `ParkingRecord`
- **Common**: `PaginatedResponse`, `QueryParams`, `ErrorResponse`, etc.

### Usage

```typescript
import { Company, CompanyEmployee, LoginRequest, Token } from '@core/models/ivap';
```

---

## IVAP Services

### IvapAuthService

**Location:** `src/app/core/services/ivap/auth.service.ts`

#### Methods

- `login(credentials: LoginRequest): Observable<Token>`
- `register(data: RegisterRequest): Observable<Member>`
- `getCurrentUser(): Observable<Member>`
- `forgotPassword(data: ForgotPasswordRequest): Observable<ForgotPasswordResponse>`
- `resetPassword(data: ResetPasswordRequest): Observable<ResetPasswordResponse>`
- `logout(): void`
- `isAuthenticated(): boolean`

#### Usage

```typescript
import { IvapAuthService } from '@core/services/ivap';
import { LoginRequest } from '@core/models/ivap';

constructor(private authService: IvapAuthService) {}

login(username: string, password: string): void {
  const credentials: LoginRequest = { username, password };
  
  this.authService.login(credentials).subscribe({
    next: (token) => {
      console.log('Login successful:', token);
      // Token is automatically saved
    },
    error: (error) => {
      console.error('Login failed:', error);
    }
  });
}
```

### IvapCompanyService

**Location:** `src/app/core/services/ivap/company.service.ts`

#### Methods

- `getAll(params?: QueryParams): Observable<PaginatedResponse<Company>>`
- `getById(companyId: string): Observable<Company>`
- `create(data: CompanyBase): Observable<Company>`
- `update(companyId: string, data: CompanyUpdate): Observable<Company>`
- `delete(companyId: string): Observable<void>`
- `getStatistics(): Observable<CompanyStatistics>`
- `getSettings(companyId: string): Observable<CompanySettings>`
- `updateSettings(companyId: string, data: CompanySettingsUpdate): Observable<CompanySettings>`
- `activate(companyId: string): Observable<any>`
- `deactivate(companyId: string): Observable<any>`
- `suspend(companyId: string, reason: string): Observable<any>`

#### Usage

```typescript
import { IvapCompanyService } from '@core/services/ivap';
import { Company, CompanyBase } from '@core/models/ivap';

constructor(private companyService: IvapCompanyService) {}

loadCompanies(): void {
  this.companyService.getAll({
    page: 1,
    page_size: 10,
    sort_by: 'created_at',
    sort_order: 'desc'
  }).subscribe({
    next: (response) => {
      console.log('Companies:', response.items);
      console.log('Total:', response.total);
    }
  });
}

createCompany(data: CompanyBase): void {
  this.companyService.create(data).subscribe({
    next: (company) => {
      console.log('Company created:', company);
    }
  });
}
```

### IvapEmployeeService

**Location:** `src/app/core/services/ivap/employee.service.ts`

#### Methods

- `getAll(params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>>`
- `getById(employeeId: string): Observable<CompanyEmployee>`
- `create(data: CompanyEmployeePost): Observable<CompanyEmployee>`
- `update(employeeId: string, data: CompanyEmployeeUpdate): Observable<CompanyEmployee>`
- `delete(employeeId: string): Observable<void>`
- `getSubordinates(employeeId: string, params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>>`

#### Usage

```typescript
import { IvapEmployeeService } from '@core/services/ivap';
import { CompanyEmployee, CompanyEmployeePost } from '@core/models/ivap';

constructor(private employeeService: IvapEmployeeService) {}

loadEmployees(): void {
  this.employeeService.getAll({
    page: 1,
    page_size: 20
  }).subscribe({
    next: (response) => {
      console.log('Employees:', response.items);
    }
  });
}
```

---

## ตัวอย่างการใช้งาน

### 1. Login Component

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IvapAuthService } from '@core/services/ivap';
import { LoginRequest, Token } from '@core/models/ivap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: IvapAuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    const credentials: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (token: Token) => {
        // Token is automatically saved by service
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
      }
    });
  }
}
```

### 2. Company List Component

```typescript
import { Component, OnInit } from '@angular/core';
import { IvapCompanyService } from '@core/services/ivap';
import { Company, PaginatedResponse } from '@core/models/ivap';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  currentPage = 1;
  pageSize = 10;
  total = 0;

  constructor(private companyService: IvapCompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getAll({
      page: this.currentPage,
      page_size: this.pageSize,
      sort_by: 'created_at',
      sort_order: 'desc'
    }).subscribe({
      next: (response: PaginatedResponse<Company>) => {
        this.companies = response.items;
        this.total = response.total;
      },
      error: (error) => {
        console.error('Error loading companies:', error);
      }
    });
  }
}
```

### 3. Employee Management Component

```typescript
import { Component, OnInit } from '@angular/core';
import { IvapEmployeeService } from '@core/services/ivap';
import { CompanyEmployee, CompanyEmployeePost } from '@core/models/ivap';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html'
})
export class EmployeeManagementComponent implements OnInit {
  employees: CompanyEmployee[] = [];

  constructor(private employeeService: IvapEmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (response) => {
        this.employees = response.items;
      }
    });
  }

  createEmployee(data: CompanyEmployeePost): void {
    this.employeeService.create(data).subscribe({
      next: (employee) => {
        console.log('Employee created:', employee);
        this.loadEmployees(); // Reload list
      }
    });
  }
}
```

---

## Migration Guide

### การอัพเดท Login Component

**Before (ใช้ AuthService เก่า):**

```typescript
import { AuthService } from '@core/services';

this.authService.login(credentials)
  .then((result: any) => {
    // Handle result
  });
```

**After (ใช้ IvapAuthService ใหม่):**

```typescript
import { IvapAuthService } from '@core/services/ivap';
import { LoginRequest, Token } from '@core/models/ivap';

const credentials: LoginRequest = { username, password };

this.authService.login(credentials).subscribe({
  next: (token: Token) => {
    // Token is automatically saved
    this.router.navigate(['/home']);
  },
  error: (error) => {
    console.error('Login failed:', error);
  }
});
```

### การอัพเดท Company Service

**Before:**

```typescript
// ใช้ ApiService เก่า
this.apiService.get<Company[]>('/capi/companies')
```

**After:**

```typescript
import { IvapCompanyService } from '@core/services/ivap';
import { Company } from '@core/models/ivap';

this.companyService.getAll({
  page: 1,
  page_size: 10
}).subscribe({
  next: (response) => {
    const companies = response.items;
  }
});
```

---

## Next Steps

### Services ที่ยังต้องสร้าง

- [ ] `IvapTimestampService` - Time & Attendance
- [ ] `IvapShiftService` - Shift management
- [ ] `IvapLeaveService` - Leave requests
- [ ] `IvapDeviceService` - Device management
- [ ] `IvapDoorService` - Door management
- [ ] `IvapVisitorService` - Visitor management
- [ ] `IvapGuestService` - Guest management
- [ ] `IvapEventService` - Event management
- [ ] `IvapVehicleService` - Vehicle management
- [ ] `IvapParkingService` - Parking management

### Components ที่ต้องอัพเดท

- [ ] `login.component.ts` - ใช้ `IvapAuthService` แทน `AuthService` เก่า
- [ ] Components ที่เรียกใช้ Company API
- [ ] Components ที่เรียกใช้ Employee API

---

## Notes

- ✅ BaseApiService รองรับทั้ง localStorage และ sessionStorage สำหรับ backward compatibility
- ✅ Token จะถูกบันทึกอัตโนมัติเมื่อ login สำเร็จ
- ✅ Error handling ใช้ ErrorResponse format จาก API
- ✅ Pagination รองรับ QueryParams แบบ flexible
- ✅ Services ทั้งหมดใช้ `providedIn: 'root'` สำหรับ singleton

---

## Support

หากมีคำถามหรือต้องการความช่วยเหลือ กรุณาติดต่อ development team

