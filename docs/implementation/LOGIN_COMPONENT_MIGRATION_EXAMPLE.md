# 🔄 Login Component Migration Example

**Last Updated:** 2025-01-XX  
**Purpose:** ตัวอย่างการอัพเดท Login Component ให้ใช้ IvapAuthService แทน AuthService เก่า

---

## 📋 Before (Current Implementation)

```typescript
import { AuthService, LoginRequest } from '@core/services';

// ใน onSubmit()
this.authService.login(credentials)
  .then((result: any) => {
    if (result && result.accessToken) {
      sessionStorage.setItem('userName', username);
      // ... manual token handling
    }
  });
```

---

## 📋 After (Using IvapAuthService)

```typescript
import { IvapAuthService } from '@core/services/ivap';
import { LoginRequest, Token } from '@core/models/ivap';

// ใน onSubmit()
const credentials: LoginRequest = {
  username: this.username,
  password: this.password
};

this.loading = true;
this.errorMessage = '';

this.authService.login(credentials).subscribe({
  next: (token: Token) => {
    // Token is automatically saved by IvapAuthService
    // Save username to sessionStorage
    sessionStorage.setItem('userName', this.username);
    
    // Save credentials if Remember Me is checked
    if (this.rememberMe) {
      localStorage.setItem('savedUsername', this.username);
      localStorage.setItem('savedPassword', this.password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('savedUsername');
      localStorage.removeItem('savedPassword');
      localStorage.removeItem('rememberMe');
    }

    // Navigate to home
    this.router.navigate([this.returnUrl]);
    this.loading = false;
  },
  error: (error: any) => {
    this.loading = false;
    this.errorMessage = error.message || 'Login failed';
    this.notificationService.showError(this.errorMessage);
  }
});
```

---

## 🔄 Complete Migration Steps

### Step 1: Update Imports

```typescript
// Before
import { AuthService, LoginRequest } from '@core/services';

// After
import { IvapAuthService } from '@core/services/ivap';
import { LoginRequest, Token } from '@core/models/ivap';
```

### Step 2: Update Constructor

```typescript
// Before
constructor(
  private authService: AuthService,
  // ...
) {}

// After
constructor(
  private authService: IvapAuthService,
  // ...
) {}
```

### Step 3: Update Login Method

```typescript
// Before
onSubmit(): void {
  const username = this.loginForm.get('username')?.value || '';
  const password = this.loginForm.get('password')?.value || '';
  
  const credentials: LoginRequest = {
    username: username,
    password: password,
    lang: 'th'
  };

  this.authService.login(credentials)
    .then((result: any) => {
      // Manual token handling
    });
}

// After
onSubmit(): void {
  if (this.loginForm.invalid) {
    return;
  }

  const username = this.loginForm.get('username')?.value || '';
  const password = this.loginForm.get('password')?.value || '';
  
  const credentials: LoginRequest = {
    username: username,
    password: password
  };

  this.loading = true;
  this.errorMessage = '';

  this.authService.login(credentials).subscribe({
    next: (token: Token) => {
      // Token is automatically saved
      sessionStorage.setItem('userName', username);
      
      if (this.rememberMe) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        localStorage.removeItem('rememberMe');
      }

      this.router.navigate([this.returnUrl]);
      this.loading = false;
    },
    error: (error: any) => {
      this.loading = false;
      this.errorMessage = error.message || 'Login failed';
      this.notificationService.showError(this.errorMessage);
    }
  });
}
```

### Step 4: Update isAuthenticated Check

```typescript
// Before
if (this.authService.isAuthenticated()) {
  this.router.navigate([this.returnUrl]);
}

// After (same, but using IvapAuthService)
if (this.authService.isAuthenticated()) {
  this.router.navigate([this.returnUrl]);
}
```

---

## ⚠️ Important Notes

1. **Token Management**: `IvapAuthService` จะบันทึก token อัตโนมัติเมื่อ login สำเร็จ ไม่ต้องบันทึกเอง
2. **Response Format**: Response จะเป็น `Token` object ที่มี `access_token` และ `user` properties
3. **Error Handling**: ใช้ Observable error handling แทน Promise `.then()`
4. **Type Safety**: ใช้ TypeScript types จาก `@core/models/ivap`

---

## 🔄 Backward Compatibility

หากต้องการรองรับทั้งสองระบบ สามารถสร้าง wrapper service:

```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthServiceWrapper {
  constructor(
    private ivapAuthService: IvapAuthService,
    private legacyAuthService: AuthService // Old service
  ) {}

  login(credentials: LoginRequest): Observable<Token> {
    // Try IVAP API first
    return this.ivapAuthService.login(credentials).pipe(
      catchError(() => {
        // Fallback to legacy API
        return this.legacyAuthService.login(credentials);
      })
    );
  }
}
```

---

## ✅ Checklist

- [ ] Update imports to use `IvapAuthService` and IVAP models
- [ ] Update constructor to inject `IvapAuthService`
- [ ] Update `onSubmit()` method to use Observable pattern
- [ ] Remove manual token handling (handled by service)
- [ ] Update error handling to use Observable error callback
- [ ] Test login flow
- [ ] Test token persistence
- [ ] Test error scenarios

---

## 📚 Related Documentation

- [IVAP Services Implementation Guide](./IVAP_SERVICES_IMPLEMENTATION.md)
- [API Documentation](../../doc-backend/API_DOCUMENTATION.md)
- [Angular Integration Guide](../../doc-backend/ANGULAR_INTEGRATION_GUIDE.md)

