# 📘 Angular Integration Guide - IVAP Service API

**Last Updated:** 2025-01-XX  
**สำหรับ:** Angular Frontend Developers

---

## 📋 สารบัญ

1. [การติดตั้งและ Setup](#1-การติดตั้งและ-setup)
2. [การใช้งาน Base Service](#2-การใช้งาน-base-service)
3. [การใช้งาน Services](#3-การใช้งาน-services)
4. [การจัดการ Authentication](#4-การจัดการ-authentication)
5. [Error Handling](#5-error-handling)
6. [ตัวอย่างการใช้งาน](#6-ตัวอย่างการใช้งาน)
7. [Best Practices](#7-best-practices)

---

## 1. การติดตั้งและ Setup

### 1.1 ติดตั้ง Dependencies

```bash
npm install @angular/common @angular/core rxjs
```

### 1.2 Import HttpClientModule

ใน `app.module.ts` หรือ standalone component:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule  // เพิ่ม HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 1.3 Copy Files

Copy ไฟล์ต่อไปนี้ไปยัง Angular project:

- `angular-models.ts` → `src/app/models/angular-models.ts`
- `angular-base-service.ts` → `src/app/services/angular-base-service.ts`
- `angular-services-examples.ts` → `src/app/services/angular-services-examples.ts`

### 1.4 Environment Configuration

สร้างไฟล์ `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api/v1'
};
```

และอัพเดท `BaseApiService`:

```typescript
import { environment } from '../../environments/environment';

export class BaseApiService {
  protected baseUrl: string = environment.apiUrl.replace('/api/v1', '');
  // ...
}
```

---

## 2. การใช้งาน Base Service

### 2.1 สร้าง Custom Service

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './angular-base-service';
import { Company, CompanyBase, PaginatedResponse, QueryParams } from '../models/angular-models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/companies');
  }

  getAll(params?: QueryParams): Observable<PaginatedResponse<Company>> {
    return this.getPaginated<Company>('', params);
  }

  getById(companyId: string): Observable<Company> {
    return this.get<Company>(`/${companyId}`);
  }

  create(data: CompanyBase): Observable<Company> {
    return this.post<Company>('', data);
  }
}
```

---

## 3. การใช้งาน Services

### 3.1 ใน Component

```typescript
import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Company } from './models/angular-models';

@Component({
  selector: 'app-company-list',
  template: `
    <div *ngFor="let company of companies">
      <h3>{{ company.company_name }}</h3>
      <p>{{ company.company_info }}</p>
    </div>
  `
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getAll({
      page: 1,
      page_size: 10,
      sort_by: 'created_at',
      sort_order: 'desc'
    }).subscribe({
      next: (response) => {
        this.companies = response.items;
      },
      error: (error) => {
        console.error('Error loading companies:', error);
      }
    });
  }
}
```

### 3.2 การใช้งาน Authentication

```typescript
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest, Token } from './models/angular-models';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onLogin()">
      <input [(ngModel)]="username" placeholder="Username" />
      <input [(ngModel)]="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    const credentials: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (token: Token) => {
        // Save token
        this.authService.setToken(token.access_token);
        
        // Navigate to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
      }
    });
  }
}
```

---

## 4. การจัดการ Authentication

### 4.1 Auth Interceptor

สร้าง `auth.interceptor.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }
    
    return next.handle(req);
  }
}
```

Register ใน `app.module.ts`:

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  // ...
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
```

### 4.2 Auth Guard

สร้าง `auth.guard.ts`:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}
```

ใช้ใน routes:

```typescript
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
```

---

## 5. Error Handling

### 5.1 Global Error Handler

สร้าง `error-handler.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { ErrorResponse } from './models/angular-models';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handleError(error: any): string {
    if (error.error && error.error.error) {
      const errorResponse: ErrorResponse = error.error;
      return errorResponse.error.message || 'An error occurred';
    }
    
    return error.message || 'An unknown error occurred';
  }

  getValidationErrors(error: any): Array<{ field: string; message: string }> {
    if (error.error && error.error.validation_errors) {
      return error.error.validation_errors.map((err: any) => ({
        field: err.field,
        message: err.message
      }));
    }
    
    return [];
  }
}
```

### 5.2 ใช้งานใน Component

```typescript
import { ErrorHandlerService } from './services/error-handler.service';

export class CompanyListComponent {
  constructor(
    private companyService: CompanyService,
    private errorHandler: ErrorHandlerService
  ) {}

  loadCompanies() {
    this.companyService.getAll().subscribe({
      next: (response) => {
        this.companies = response.items;
      },
      error: (error) => {
        const errorMessage = this.errorHandler.handleError(error);
        const validationErrors = this.errorHandler.getValidationErrors(error);
        
        console.error('Error:', errorMessage);
        if (validationErrors.length > 0) {
          console.error('Validation errors:', validationErrors);
        }
      }
    });
  }
}
```

---

## 6. ตัวอย่างการใช้งาน

### 6.1 CRUD Operations

```typescript
export class CompanyManagementComponent {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) {}

  // Create
  createCompany(data: CompanyBase) {
    this.companyService.create(data).subscribe({
      next: (company) => {
        console.log('Company created:', company);
        this.loadCompanies();
      },
      error: (error) => console.error('Error:', error)
    });
  }

  // Read
  loadCompanies() {
    this.companyService.getAll().subscribe({
      next: (response) => {
        this.companies = response.items;
      }
    });
  }

  // Update
  updateCompany(companyId: string, data: CompanyUpdate) {
    this.companyService.update(companyId, data).subscribe({
      next: (company) => {
        console.log('Company updated:', company);
        this.loadCompanies();
      }
    });
  }

  // Delete
  deleteCompany(companyId: string) {
    if (confirm('Are you sure?')) {
      this.companyService.delete(companyId).subscribe({
        next: () => {
          console.log('Company deleted');
          this.loadCompanies();
        }
      });
    }
  }
}
```

### 6.2 File Upload

```typescript
export class FileUploadComponent {
  constructor(private baseService: BaseApiService) {}

  uploadFile(file: File, memberId: string) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('member_id', memberId);
    formData.append('company_id', 'your-company-id');

    this.baseService.postFormData('/face/enroll', formData).subscribe({
      next: (response) => {
        console.log('File uploaded:', response);
      },
      error: (error) => console.error('Upload error:', error)
    });
  }
}
```

### 6.3 Pagination

```typescript
export class PaginatedListComponent {
  companies: Company[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  total: number = 0;

  constructor(private companyService: CompanyService) {}

  loadPage(page: number) {
    this.companyService.getAll({
      page: page,
      page_size: this.pageSize,
      sort_by: 'created_at',
      sort_order: 'desc'
    }).subscribe({
      next: (response) => {
        this.companies = response.items;
        this.currentPage = response.page;
        this.totalPages = response.total_pages;
        this.total = response.total;
      }
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }
}
```

---

## 7. Best Practices

### 7.1 Service Organization

- แยก services ตาม domain (CompanyService, EmployeeService, etc.)
- ใช้ BaseApiService เพื่อลด code duplication
- ใช้ TypeScript interfaces จาก angular-models.ts

### 7.2 Error Handling

- ใช้ ErrorHandlerService สำหรับจัดการ errors
- แสดง error messages ที่ user-friendly
- Log errors สำหรับ debugging

### 7.3 Authentication

- ใช้ AuthInterceptor เพื่อ auto-inject token
- ใช้ AuthGuard เพื่อ protect routes
- ตรวจสอบ token expiration และ refresh ถ้าจำเป็น

### 7.4 State Management

- พิจารณาใช้ NgRx หรือ Akita สำหรับ complex state
- ใช้ RxJS operators สำหรับ data transformation
- Cache responses เมื่อเหมาะสม

### 7.5 Performance

- ใช้ OnPush change detection strategy
- Lazy load modules
- ใช้ trackBy function ใน *ngFor
- Debounce search inputs

### 7.6 Type Safety

- ใช้ TypeScript strict mode
- ใช้ interfaces จาก angular-models.ts
- หลีกเลี่ยงการใช้ `any` type

---

## 📚 Additional Resources

- [Angular HttpClient Documentation](https://angular.io/guide/http)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🆘 Support

หากมีคำถามหรือต้องการความช่วยเหลือ กรุณาติดต่อ development team

