# Routing Restructure Analysis & Plan

**วันที่**: 2024-12-20  
**สถานะ**: 📊 วิเคราะห์และวางแผน

---

## 📊 โครงสร้างปัจจุบัน

### Current App Routing Structure

```typescript
/ (Main Layout with AuthGuard)
├── /home                    → Home module
├── /portal                  → Portal module
│   ├── /portal              → Portal home
│   ├── /portal/self-service → Self-Service module (ESS)
│   └── /portal/admin        → Admin module
├── /dashboard               → Empview module (ESS - legacy)
├── /personal               → Personal module (Admin - legacy)
├── /ta                     → TA module (Admin - legacy)
├── /payroll                → Payroll module (Admin - legacy)
├── /training               → Training module (Admin - legacy)
├── /appraisal              → Appraisal module (Admin - legacy)
├── /recruit                → Recruit module (Admin - legacy)
├── /welfare                → Welfare module (Admin - legacy)
├── /company                → Company module (Admin - legacy)
├── /setting                → Setting module (Admin - legacy)
└── /workflow               → Workflow module
```

### Current Module Organization

```
features/
├── portal/              ✅ Portal structure (NEW)
│   ├── portal-home/     ✅ Portal home page
│   ├── self-service/    ✅ ESS modules (NEW)
│   └── admin/           ✅ Admin modules (NEW)
├── home/                ⚠️  Legacy - should redirect to /portal
├── empview/             ⚠️  Legacy - should migrate to /portal/self-service
├── personal/            ⚠️  Legacy - should migrate to /portal/admin/employees
├── ta/                  ⚠️  Legacy - should migrate to /portal/admin/time
├── payroll/             ⚠️  Legacy - should migrate to /portal/admin/payroll
├── training/             ⚠️  Legacy - should migrate to /portal/admin/training
├── appraisal/           ⚠️  Legacy - should migrate to /portal/admin/appraisal
├── recruit/             ⚠️  Legacy - should migrate to /portal/admin/recruit
├── welfare/              ⚠️  Legacy - should migrate to /portal/admin/welfare
├── company/              ⚠️  Legacy - should migrate to /portal/admin/company
├── setting/              ⚠️  Legacy - should migrate to /portal/admin/settings
└── workflow/             ⚠️  TBD - might stay or migrate
```

---

## 🎯 Target Structure (3 กลุ่ม)

### 1. Portal Group (หน้า Portal)
```
/portal
  └── /portal (home) - PortalHomeComponent
```

**Purpose**: หน้าแรก/แดชบอร์ดหลัก

### 2. Employee Self Service Group (ESS)
```
/portal/self-service
  ├── /portal/self-service/time
  ├── /portal/self-service/documents
  ├── /portal/self-service/payslip
  ├── /portal/self-service/profile
  ├── /portal/self-service/subordinates
  ├── /portal/self-service/welfare
  ├── /portal/self-service/leave
  ├── /portal/self-service/attendance
  └── /portal/self-service/statistics
```

**Purpose**: Employee Self Service - ทุกคนมีสิทธิ์

### 3. Admin-Setting Group (Admin)
```
/portal/admin
  ├── /portal/admin/employees
  ├── /portal/admin/company
  ├── /portal/admin/payroll
  ├── /portal/admin/time
  ├── /portal/admin/training
  ├── /portal/admin/welfare
  ├── /portal/admin/recruit
  ├── /portal/admin/appraisal
  └── /portal/admin/settings
```

**Purpose**: Admin Management - เห็นเฉพาะผู้ที่มีสิทธิ์

---

## 🔍 ปัญหาที่พบ

### 1. **Duplicate Routes**
- ❌ `/dashboard` (empview) vs `/portal/self-service` - ซ้ำซ้อน
- ❌ `/personal`, `/ta`, `/payroll`, etc. vs `/portal/admin/*` - ซ้ำซ้อน

### 2. **Inconsistent Structure**
- ❌ Legacy routes ยังอยู่ที่ root level
- ❌ Portal structure ใหม่อยู่ที่ `/portal/*`
- ❌ ไม่มี redirect จาก legacy routes

### 3. **Navigation Confusion**
- ❌ ผู้ใช้อาจสับสนระหว่าง legacy routes และ portal routes
- ❌ Sidebar navigation อาจชี้ไปยัง routes ที่ไม่ถูกต้อง

---

## 🛠️ แนวทางแก้ไข

### Option 1: Redirect Legacy Routes (แนะนำ) ⭐

**Strategy**: Redirect legacy routes ไปยัง portal structure ใหม่

**Advantages**:
- ✅ ไม่กระทบ existing links/bookmarks
- ✅ Backward compatible
- ✅ Gradual migration
- ✅ ไม่ต้องเปลี่ยน code ทั้งหมดในครั้งเดียว

**Implementation**:
```typescript
// app-routing.module.ts
{
  path: 'dashboard',
  redirectTo: '/portal/self-service',
  pathMatch: 'full'
},
{
  path: 'personal',
  redirectTo: '/portal/admin/employees',
  pathMatch: 'full'
},
// ... etc
```

### Option 2: Remove Legacy Routes

**Strategy**: ลบ legacy routes ออกทั้งหมด

**Advantages**:
- ✅ Clean structure
- ✅ No confusion

**Disadvantages**:
- ⚠️ Breaking changes
- ⚠️ ต้อง update links ทั้งหมด
- ⚠️ อาจมี external links ที่ชี้ไปยัง legacy routes

### Option 3: Keep Both (Not Recommended)

**Strategy**: เก็บทั้ง legacy และ portal routes

**Disadvantages**:
- ❌ Duplicate maintenance
- ❌ Confusion
- ❌ Inconsistent UX

---

## 📐 Recommended Implementation Plan

### Phase 1: Update App Routing (Priority: High)

#### 1.1 Group Routes by Category

```typescript
const routes: Routes = [
  // Auth Routes
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },

  // Main Layout with AuthGuard
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // Portal Group
      {
        path: '',
        redirectTo: 'portal',
        pathMatch: 'full'
      },
      {
        path: 'portal',
        loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
      },
      {
        path: 'home',
        redirectTo: 'portal',
        pathMatch: 'full'
      },

      // Legacy Routes - Redirect to Portal Structure
      {
        path: 'dashboard',
        redirectTo: '/portal/self-service',
        pathMatch: 'full'
      },
      {
        path: 'personal',
        redirectTo: '/portal/admin/employees',
        pathMatch: 'full'
      },
      {
        path: 'ta',
        redirectTo: '/portal/admin/time',
        pathMatch: 'full'
      },
      {
        path: 'payroll',
        redirectTo: '/portal/admin/payroll',
        pathMatch: 'full'
      },
      {
        path: 'training',
        redirectTo: '/portal/admin/training',
        pathMatch: 'full'
      },
      {
        path: 'appraisal',
        redirectTo: '/portal/admin/appraisal',
        pathMatch: 'full'
      },
      {
        path: 'recruit',
        redirectTo: '/portal/admin/recruit',
        pathMatch: 'full'
      },
      {
        path: 'welfare',
        redirectTo: '/portal/admin/welfare',
        pathMatch: 'full'
      },
      {
        path: 'company',
        redirectTo: '/portal/admin/company',
        pathMatch: 'full'
      },
      {
        path: 'setting',
        redirectTo: '/portal/admin/settings',
        pathMatch: 'full'
      },

      // Workflow (TBD - might stay or migrate)
      {
        path: 'workflow',
        loadChildren: () => import('./features/workflow/workflow.module').then(m => m.WorkflowModule)
      }
    ]
  },

  // Demo (no auth)
  {
    path: 'demo',
    loadChildren: () => import('./features/demo/demo.module').then(m => m.DemoModule)
  },

  // Wildcard
  {
    path: '**',
    redirectTo: ROUTES.PORTAL.HOME
  }
];
```

#### 1.2 Update Routes Constant

```typescript
export const ROUTES = {
  // Portal Routes (Primary)
  PORTAL: {
    BASE: '/portal',
    HOME: '/portal',
    SELF_SERVICE: {
      BASE: '/portal/self-service',
      // ... existing routes
    },
    ADMIN: {
      BASE: '/portal/admin',
      // ... existing routes
    }
  },

  // Legacy Routes (Deprecated - redirect to portal)
  LEGACY: {
    HOME: '/home',              // → /portal
    DASHBOARD: '/dashboard',    // → /portal/self-service
    PERSONAL: '/personal',      // → /portal/admin/employees
    TA: '/ta',                  // → /portal/admin/time
    PAYROLL: '/payroll',        // → /portal/admin/payroll
    TRAINING: '/training',      // → /portal/admin/training
    APPRAISAL: '/appraisal',    // → /portal/admin/appraisal
    RECRUIT: '/recruit',        // → /portal/admin/recruit
    WELFARE: '/welfare',        // → /portal/admin/welfare
    COMPANY: '/company',        // → /portal/admin/company
    SETTING: '/setting'         // → /portal/admin/settings
  }
};
```

### Phase 2: Update Navigation Constants

อัปเดต `navigation.constant.ts` ให้ใช้ portal routes เท่านั้น:

```typescript
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    roles: ['user', 'admin'],
    children: [
      {
        label: 'หน้าแรก',
        route: '/portal'  // ✅ Use portal route
      }
    ]
  },
  {
    id: 'ess',
    label: 'Self Service',
    icon: 'person',
    roles: ['user', 'admin'],
    children: [
      {
        label: 'ลงเวลา (Time)',
        route: '/portal/self-service/time'  // ✅ Use portal route
      },
      // ... other ESS routes
    ]
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: 'shield-check',
    roles: ['admin'],
    children: [
      {
        label: 'จัดการพนักงาน',
        route: '/portal/admin/employees'  // ✅ Use portal route
      },
      // ... other admin routes
    ]
  }
];
```

### Phase 3: Update Internal Links

ค้นหาและอัปเดต internal links ทั้งหมด:
- Router navigation
- Menu items
- Breadcrumbs
- Direct links

### Phase 4: Testing

- [ ] ทดสอบ redirect จาก legacy routes
- [ ] ทดสอบ navigation ใน sidebar
- [ ] ทดสอบ breadcrumbs
- [ ] ทดสอบ deep links
- [ ] ทดสอบ browser back/forward

---

## 📝 Migration Checklist

### Routes to Redirect

| Legacy Route | Target Route | Status |
|-------------|--------------|--------|
| `/home` | `/portal` | ⏳ |
| `/dashboard` | `/portal/self-service` | ⏳ |
| `/personal` | `/portal/admin/employees` | ⏳ |
| `/ta` | `/portal/admin/time` | ⏳ |
| `/payroll` | `/portal/admin/payroll` | ⏳ |
| `/training` | `/portal/admin/training` | ⏳ |
| `/appraisal` | `/portal/admin/appraisal` | ⏳ |
| `/recruit` | `/portal/admin/recruit` | ⏳ |
| `/welfare` | `/portal/admin/welfare` | ⏳ |
| `/company` | `/portal/admin/company` | ⏳ |
| `/setting` | `/portal/admin/settings` | ⏳ |

### Files to Update

1. ✅ `app-routing.module.ts` - Add redirects
2. ⏳ `routes.constant.ts` - Mark legacy routes as deprecated
3. ⏳ `navigation.constant.ts` - Use portal routes only
4. ⏳ Sidebar component - Verify navigation
5. ⏳ All internal router links - Update to portal routes

---

## 🎯 Benefits

1. **Clear Structure**: 3 กลุ่มชัดเจน (Portal, ESS, Admin)
2. **Consistent URLs**: ทุก route อยู่ภายใต้ `/portal`
3. **Backward Compatible**: Legacy routes redirect ไปยัง portal
4. **Easy Navigation**: Sidebar navigation ชัดเจน
5. **Scalable**: เพิ่ม routes ใหม่ได้ง่าย

---

## ⚠️ Considerations

1. **External Links**: อาจมี external links ที่ชี้ไปยัง legacy routes → ใช้ redirect
2. **Bookmarks**: Users อาจมี bookmarks ไปยัง legacy routes → ใช้ redirect
3. **API Calls**: ตรวจสอบว่า API calls ไม่ขึ้นกับ route paths
4. **Testing**: ต้อง test ทุก redirect path

---

**Maintainer**: Development Team  
**Last Updated**: 2024-12-20

