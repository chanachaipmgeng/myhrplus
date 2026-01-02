# 🔐 Token-based Authentication via URL Parameters - Implementation Guide

## ✅ สรุปการ Implementation

### ไฟล์ที่สร้าง/แก้ไข

#### 1. **TokenAuthGuard** (ใหม่)
- **ไฟล์**: `src/app/core/guards/token-auth.guard.ts`
- **หน้าที่**: 
  - รับ token จาก URL parameters
  - Decode JWT token และ validate
  - Set user ใน AuthService
  - Set language และ hiddenHeader
  - Navigate ไปยัง target module/page

#### 2. **AuthService** (แก้ไข)
- **ไฟล์**: `src/app/core/services/auth.service.ts`
- **เพิ่ม method**: `setUserFromToken(token: string, decodedToken: any)`
- **หน้าที่**: Map decoded token เป็น User object และเก็บใน storage

#### 3. **AppRoutingModule** (แก้ไข)
- **ไฟล์**: `src/app/app-routing.module.ts`
- **เพิ่ม routes**:
  - `/ess/:token/:page/:lang/:moduleName` - Full format
  - `/ess/:token/:page/:lang` - Without moduleName

#### 4. **MainLayoutComponent** (แก้ไข)
- **ไฟล์**: 
  - `src/app/layout/main-layout/main-layout.component.ts`
  - `src/app/layout/main-layout/main-layout.component.html`
- **เพิ่ม features**:
  - `hiddenHeader` property สำหรับ ESS mode
  - `handleTokenNavigation()` method
  - Header ซ่อนเมื่อ `hiddenHeader === 'hidden'`

---

## 🚀 การใช้งาน

### URL Format

#### Format 1: Full Format
```
/ess/:token/:page/:lang/:moduleName
```

**ตัวอย่าง**:
```
/ess/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.../home/th/personal
```

#### Format 2: Without ModuleName
```
/ess/:token/:page/:lang
```

**ตัวอย่าง**:
```
/ess/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.../dashboard/tha
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `token` | string | ✅ Yes | JWT access token |
| `page` | string | ⚠️ Optional | Target page name (e.g., 'home', 'dashboard') |
| `lang` | string | ⚠️ Optional | Language code ('th', 'tha', 'en', 'eng') |
| `moduleName` | string | ⚠️ Optional | Target module name (e.g., 'personal', 'ta') |

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ess` | boolean | Set to 'true' to enable ESS mode (hide header) |

**ตัวอย่าง**:
```
/ess/:token/:page/:lang/:moduleName?ess=true
```

---

## 🔄 Flow การทำงาน

### 1. User เข้าถึง URL พร้อม Token
```
User → /ess/{token}/{page}/{lang}/{moduleName}
```

### 2. TokenAuthGuard ทำงาน
```
TokenAuthGuard.canActivate()
  ├─ Extract token จาก route params
  ├─ Decode JWT token
  ├─ Validate token (structure, expiration)
  ├─ Set language (จาก URL หรือ token)
  ├─ Set hiddenHeader (ถ้า ESS mode)
  ├─ Store token และ user ใน sessionStorage
  ├─ Call authService.setUserFromToken()
  └─ Return true (allow route activation)
```

### 3. MainLayoutComponent ทำงาน
```
MainLayoutComponent.ngOnInit()
  ├─ Check hiddenHeader จาก sessionStorage
  ├─ Handle token navigation (ถ้ามี)
  └─ Render layout (ซ่อน header ถ้า ESS mode)
```

### 4. Navigation
```
MainLayoutComponent.handleTokenNavigation()
  ├─ Read tokenNavModule และ tokenNavPage จาก sessionStorage
  ├─ Navigate ไปยัง target route
  └─ Clear navigation flags
```

---

## 📝 Code Examples

### Example 1: Basic Token Authentication

```typescript
// URL: /ess/{token}/home/th/personal
// TokenAuthGuard จะ:
// 1. Decode token
// 2. Set user
// 3. Set language to 'th'
// 4. Navigate to /personal/home
```

### Example 2: ESS Mode (Hidden Header)

```typescript
// URL: /ess/{token}/dashboard/tha?ess=true
// TokenAuthGuard จะ:
// 1. Decode token
// 2. Set user
// 3. Set language to 'th'
// 4. Set hiddenHeader = 'hidden'
// 5. Navigate to /dashboard
// MainLayoutComponent จะซ่อน header
```

### Example 3: External System Integration

```typescript
// จาก JSP page หรือ external system
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
const page = 'home';
const lang = 'tha';
const moduleName = 'personal';

// Redirect to Angular app
window.location.href = `/ess/${token}/${page}/${lang}/${moduleName}`;
```

---

## 🎯 Features ที่ Implement

### ✅ Token Authentication
- [x] รับ token จาก URL parameters
- [x] Decode และ validate JWT token
- [x] Check token expiration
- [x] Set user ใน AuthService
- [x] Store token และ user ใน sessionStorage

### ✅ Language Handling
- [x] รองรับ language จาก URL parameter
- [x] รองรับ language จาก token
- [x] บันทึก language ใน sessionStorage
- [x] Auto-apply language ผ่าน TranslateService

### ✅ ESS Mode (Hidden Header)
- [x] รองรับ `ess=true` query parameter
- [x] รองรับ `ess` field ใน token
- [x] ซ่อน header เมื่อ ESS mode
- [x] Persist hiddenHeader ใน sessionStorage

### ✅ Navigation
- [x] Navigate ไปยัง module/page ตาม parameters
- [x] รองรับ navigation ทั้งแบบมีและไม่มี moduleName
- [x] Error handling สำหรับ invalid routes

---

## 🔒 Security Considerations

### Token Validation
- ✅ Validate token structure (ต้องมี `sub` field)
- ✅ Check token expiration
- ✅ Error handling สำหรับ invalid tokens

### Error Handling
- ✅ Redirect to login ถ้า token ไม่ valid
- ✅ Redirect to login ถ้า token expired
- ✅ Log errors สำหรับ debugging

### Session Management
- ✅ Store token ใน sessionStorage (ไม่ persist หลังปิด browser)
- ✅ Store user data ใน sessionStorage
- ✅ Clear session เมื่อ logout

---

## 🧪 Testing

### Test Cases

#### 1. Valid Token
```
URL: /ess/{valid_token}/home/th/personal
Expected: 
  - User authenticated
  - Navigate to /personal/home
  - Language set to 'th'
```

#### 2. Expired Token
```
URL: /ess/{expired_token}/home/th/personal
Expected:
  - Redirect to /auth/login?expired=true
```

#### 3. Invalid Token
```
URL: /ess/{invalid_token}/home/th/personal
Expected:
  - Redirect to /auth/login?error=invalid_token
```

#### 4. ESS Mode
```
URL: /ess/{token}/dashboard/tha?ess=true
Expected:
  - User authenticated
  - Header hidden
  - Navigate to /dashboard
```

#### 5. Missing Token
```
URL: /ess//home/th/personal
Expected:
  - Redirect to /auth/login
```

---

## 📚 Integration Examples

### Integration with JSP Page

```jsp
<%
  String token = request.getParameter("t");
  String lang = request.getParameter("lang");
  String page = "home";
  String module = "personal";
  
  if (token != null) {
    response.sendRedirect("/ess/" + token + "/" + page + "/" + lang + "/" + module);
  }
%>
```

### Integration with Mobile App

```typescript
// Mobile app redirects to Angular app with token
const deepLink = `/ess/${accessToken}/dashboard/${language}/personal`;
window.location.href = deepLink;
```

### Integration with External System

```typescript
// External system generates token and redirects
const token = await generateToken(userId);
const redirectUrl = `/ess/${token}/home/th/personal`;
window.location.href = redirectUrl;
```

---

## 🐛 Troubleshooting

### Problem: Token ไม่ถูก decode
**Solution**: ตรวจสอบว่า token เป็น valid JWT format และมี `sub` field

### Problem: Navigation ไม่ทำงาน
**Solution**: ตรวจสอบว่า route ที่ต้องการ navigate มีอยู่ใน routing configuration

### Problem: Header ไม่ซ่อนใน ESS mode
**Solution**: ตรวจสอบว่า `hiddenHeader` ถูก set ใน sessionStorage และ MainLayoutComponent อ่านค่าได้

### Problem: Language ไม่เปลี่ยน
**Solution**: ตรวจสอบว่า TranslateService ถูก inject และ language code ถูกต้อง ('th', 'tha', 'en', 'eng')

---

## 📋 Checklist

- [x] สร้าง TokenAuthGuard
- [x] เพิ่ม setUserFromToken ใน AuthService
- [x] เพิ่ม routes สำหรับ token authentication
- [x] เพิ่ม hiddenHeader support ใน MainLayoutComponent
- [x] เพิ่ม language handling
- [x] เพิ่ม navigation logic
- [ ] ทดสอบ token authentication flow
- [ ] ทดสอบ ESS mode
- [ ] ทดสอบ language switching
- [ ] ทดสอบ navigation

---

## 🎉 สรุป

Token-based Authentication via URL Parameters ถูก implement เรียบร้อยแล้ว!

### Features ที่พร้อมใช้งาน:
- ✅ Token authentication จาก URL
- ✅ Language handling
- ✅ ESS mode (hidden header)
- ✅ Navigation จาก URL parameters
- ✅ Error handling และ security

### Next Steps:
1. ทดสอบ token authentication flow
2. Integrate กับ external systems (JSP, mobile apps)
3. เพิ่ม Private Message Service (Phase 2)
4. เพิ่ม Mobile Device Detection (Phase 2)

---

**Last Updated**: 2024-12-20

