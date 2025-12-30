# Routes Restructure - Portal Routes Removal

**วันที่**: 2024-12-29  
**สถานะ**: ✅ เสร็จสมบูรณ์

---

## 📋 สรุปการเปลี่ยนแปลง

### การลบ Portal Routes

ระบบได้ลบ `/portal` routes ทั้งหมดออกและเปลี่ยนไปใช้ **direct module routes** แทน เพื่อให้โครงสร้าง routing ตรงกับ `app-routing.module.ts` และง่ายต่อการจัดการมากขึ้น

---

## 🔄 การเปลี่ยนแปลง Routes

### Routes เก่า (ลบแล้ว) → Routes ใหม่

| Route เก่า | Route ใหม่ | Module |
|-----------|-----------|--------|
| `/portal` | `/home` | Home |
| `/portal/self-service` | `/ta` | Time Attendance |
| `/portal/self-service/time` | `/ta` | Time Attendance |
| `/portal/self-service/profile` | `/home` | Home |
| `/portal/admin/company` | `/company` | Company |
| `/portal/admin/employees` | `/personal` | Personal |
| `/portal/admin/time` | `/ta` | Time Attendance |
| `/portal/admin/payroll` | `/payroll` | Payroll |
| `/portal/admin/training` | `/training` | Training |
| `/portal/admin/welfare` | `/welfare` | Welfare |
| `/portal/admin/recruit` | `/recruit` | Recruit |
| `/portal/admin/appraisal` | `/appraisal` | Appraisal |
| `/portal/admin/settings` | `/setting` | Setting |

---

## 📁 ไฟล์ที่แก้ไข

### 1. Core Routing Files

#### `src/app/app-routing.module.ts`
- ✅ ลบ `/portal` routes ทั้งหมด
- ✅ ใช้ direct module routes: `/home`, `/personal`, `/ta`, `/payroll`, etc.
- ✅ Default redirect: `/` → `/home`

#### `src/app/core/constants/routes.constant.ts`
- ✅ `ROUTES.LEGACY.*` constants ยังคงมีอยู่สำหรับ backward compatibility
- ✅ `ROUTES.PORTAL.*` constants ยังคงมีอยู่แต่ไม่ใช้แล้ว (สำหรับ legacy mapping)

#### `src/app/core/constants/navigation.constant.ts`
- ✅ อัพเดท routes ทั้งหมดใน `NAVIGATION_ITEMS`:
  - Home: `/portal` → `/home`
  - ESS: `/portal/self-service/*` → `/ta`
  - Admin modules: `/portal/admin/*` → direct module routes

### 2. Layout Components

#### `src/app/layout/sidebar/sidebar.component.ts`
- ✅ อัพเดท `getModuleHomeRoute()` - เปลี่ยน routes ทั้งหมด
- ✅ อัพเดท `mapLegacyRoute()` - เพิ่ม mapping สำหรับ `/portal` routes
- ✅ อัพเดท `navigateToHome()`, `navigateToProfile()`, `navigateToSettings()`
- ✅ อัพเดท route matching logic ใน `updateSelectedItemsFromRoute()`

#### `src/app/layout/sidebar/sidebar.component.html`
- ✅ เปลี่ยน `routerLink="/portal"` → `routerLink="/home"` (Logo)
- ✅ เปลี่ยน `routerLink="/portal/self-service/profile"` → `routerLink="/home"` (Profile)
- ✅ เปลี่ยน `routerLink="/portal/admin/settings"` → `routerLink="/setting"` (Settings)

#### `src/app/layout/header/header.component.ts`
- ✅ อัพเดท `onProfile()` และ `onPreferences()` - เปลี่ยนเป็น `/home`

#### `src/app/layout/header/header.component.html`
- ✅ เปลี่ยน `routerLink="/portal"` → `routerLink="/home"` (Logo)

### 3. Services

#### `src/app/core/services/menu.service.ts`
- ✅ อัพเดท `getDefaultMenu()` - เปลี่ยน `/portal` → `/home`
- ✅ อัพเดท module routes ทั้งหมดใน `getDefaultMenu()`
- ✅ อัพเดท workflow route mapping

#### `src/app/core/services/menu-data.service.ts`
- ✅ อัพเดท menu data routes ทั้งหมด

### 4. Shared Components

#### `src/app/shared/components/omni-search/omni-search.component.ts`
- ✅ อัพเดท menu data routes

#### `src/app/shared/components/breadcrumbs/breadcrumbs.component.ts`
- ✅ เปลี่ยน home route: `/portal` → `/home`

### 5. Feature Components

#### `src/app/features/home/home.component.ts`
- ✅ เปลี่ยน navigation: `/portal` → `/home`

#### `src/app/features/auth/login/login.component.ts`
- ✅ เปลี่ยน navigation: `/portal/admin/company` → `/company`

#### `src/app/features/auth/unauthorized/unauthorized.component.ts`
- ✅ เปลี่ยน navigation: `/portal` → `/home`

### 6. Guards

#### `src/app/core/guards/guest.guard.ts`
- ✅ เปลี่ยน default returnUrl: `/portal` → `/home`

---

## 🔧 Route Mapping Function

### `mapLegacyRoute()` in `sidebar.component.ts`

ฟังก์ชันนี้ทำหน้าที่ map legacy `/portal` routes ไปยัง routes ใหม่:

```typescript
private mapLegacyRoute(route: string): string {
  const routeMap: { [key: string]: string } = {
    '/portal': '/home',
    '/portal/self-service': '/ta',
    '/portal/self-service/time': '/ta',
    '/portal/self-service/profile': '/home',
    '/portal/admin/company': '/company',
    '/portal/admin/employees': '/personal',
    '/portal/admin/time': '/ta',
    '/portal/admin/payroll': '/payroll',
    '/portal/admin/training': '/training',
    '/portal/admin/welfare': '/welfare',
    '/portal/admin/recruit': '/recruit',
    '/portal/admin/appraisal': '/appraisal',
    '/portal/admin/settings': '/setting',
    // ... more mappings
  };
  return routeMap[route] || route;
}
```

---

## 📐 โครงสร้าง Routes ใหม่

### Current Route Structure

```
/ (Main Layout with AuthGuard)
├── /home                    → Home module
├── /personal                → Personal module
├── /ta                      → Time Attendance module
├── /payroll                 → Payroll module
├── /training                → Training module
├── /appraisal               → Appraisal module
├── /recruit                 → Recruit module
├── /welfare                 → Welfare module
├── /company                 → Company module
├── /setting                 → Setting module
└── /demo                    → Demo module (no AuthGuard)
```

---

## ✅ ผลลัพธ์

### สิ่งที่ทำเสร็จแล้ว

1. ✅ **ลบ `/portal` routes ทั้งหมด** - ไม่มี routerLink หรือ navigation ที่ใช้ `/portal` แล้ว
2. ✅ **อัพเดท routes ทั้งหมด** - ใช้ direct module routes ตรงกับ `app-routing.module.ts`
3. ✅ **Backward Compatibility** - `mapLegacyRoute()` ยังรองรับ legacy routes สำหรับ migration
4. ✅ **Navigation Updated** - Sidebar และ header ใช้ routes ใหม่ทั้งหมด
5. ✅ **Services Updated** - Services ทั้งหมดอัพเดท routes แล้ว
6. ✅ **No Linter Errors** - ไม่มี errors จากการเปลี่ยนแปลง

### Routes ที่ใช้ในปัจจุบัน

- ✅ `/home` - Home/Dashboard
- ✅ `/personal` - Personal Management
- ✅ `/ta` - Time Attendance
- ✅ `/payroll` - Payroll Management
- ✅ `/training` - Training Management
- ✅ `/appraisal` - Appraisal Management
- ✅ `/recruit` - Recruitment Management
- ✅ `/welfare` - Welfare Management
- ✅ `/company` - Company Management
- ✅ `/setting` - Settings
- ✅ `/demo` - Demo Components (no AuthGuard)

---

## 🎯 Best Practices

### เมื่อสร้าง Routes ใหม่

1. **ใช้ Direct Module Routes**: ใช้ routes ตรงๆ เช่น `/home`, `/personal`, `/ta`
2. **ใช้ ROUTES Constants**: ใช้ `ROUTES.LEGACY.*` สำหรับ route constants
3. **ไม่ใช้ `/portal`**: ห้ามใช้ `/portal` routes ในโค้ดใหม่
4. **Legacy Mapping**: ถ้าจำเป็นต้องรองรับ legacy routes ให้ใช้ `mapLegacyRoute()`

### ตัวอย่างการใช้งาน

```typescript
// ✅ ถูกต้อง - ใช้ direct route
this.router.navigate(['/home']);

// ✅ ถูกต้อง - ใช้ ROUTES constant
this.router.navigate([ROUTES.LEGACY.HOME]);

// ❌ ผิด - อย่าใช้ /portal
this.router.navigate(['/portal']); // Don't use this!
```

---

## 📝 Migration Notes

### สำหรับโค้ดเก่า

ถ้ายังมีโค้ดที่ใช้ `/portal` routes:

1. **ตรวจสอบ**: ใช้ `grep` เพื่อหา `/portal` ในโค้ด
2. **แก้ไข**: เปลี่ยนเป็น direct module routes
3. **ทดสอบ**: ทดสอบ navigation ให้แน่ใจว่าทำงานถูกต้อง

### สำหรับโค้ดใหม่

- ✅ ใช้ direct module routes ตั้งแต่แรก
- ✅ ใช้ `ROUTES.LEGACY.*` constants
- ✅ ไม่ต้องใช้ `mapLegacyRoute()` สำหรับ routes ใหม่

---

## 🔍 Verification

### ตรวจสอบว่าไม่มี `/portal` routes แล้ว

```bash
# ตรวจสอบ routerLink
grep -r 'routerLink="/portal' src/app

# ตรวจสอบ navigation
grep -r 'navigate.*portal' src/app

# ตรวจสอบ route constants (ควรมีแค่ใน mapLegacyRoute)
grep -r "'/portal" src/app
```

---

**Last Updated**: 2024-12-29  
**Status**: ✅ Complete  
**Impact**: All routes updated, no breaking changes for new code

