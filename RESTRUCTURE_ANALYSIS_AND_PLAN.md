# Restructure Analysis and Plan

**วันที่**: 2024-12-20  
**สถานะ**: 📋 Planning Phase

---

## 📋 Current Structure Analysis

### Current Routing Structure
```
/auth
  - /login
  - /forgot-password
  - /unauthorized

/ (Main Layout with AuthGuard)
  - /home (Home module)
  - /dashboard (Empview module - Employee Self Service)
  - /personal (Personal module - Admin)
  - /ta (Time Attendance module - Admin)
  - /payroll (Payroll module - Admin)
  - /company (Company module - Admin)
  - /setting (Setting module - Admin)
  - /training (Training module - Admin)
  - /welfare (Welfare module - Admin)
  - /recruit (Recruit module - Admin)
  - /appraisal (Appraisal module - Admin)
  - /workflow (Workflow module)
```

### Current Module Organization
```
features/
├── auth/          # Authentication (login, forgot-password)
├── home/          # Dashboard/Home
├── empview/       # Employee Self Service (mixed with admin features)
├── personal/      # Personal Management (Admin)
├── ta/            # Time Attendance (Admin)
├── payroll/       # Payroll (Admin)
├── company/       # Company Management (Admin)
├── setting/       # Settings (Admin)
├── training/      # Training (Admin)
├── welfare/       # Welfare (Admin)
├── recruit/       # Recruitment (Admin)
├── appraisal/     # Appraisal (Admin)
└── workflow/      # Workflow
```

### Current Sidebar Structure
- Two-layer sidebar (Rail + Drawer)
- Module-based grouping
- Menu items from MenuService
- Context switching support

---

## 🎯 Target Structure

### Target Routing Structure
```
/auth
  - /login
  - /forgot-password
  - /unauthorized

/portal (Main Layout with AuthGuard)
  - /portal (Home/Dashboard - หน้าแรก ดูข้อมูลโดยรวม)
  
  /portal/self-service (Employee Self Service - ทุกคนมีสิทธิ์)
    - /portal/self-service/time (ลงเวลา)
    - /portal/self-service/documents (ขอเอกสาร)
    - /portal/self-service/payslip (สลิปเงินเดือน)
    - /portal/self-service/profile (ตรวจสอบข้อมูลตัวเอง)
    - /portal/self-service/subordinates (ลูกน้อง)
    - /portal/self-service/welfare (สวัสดิการ)
    - /portal/self-service/leave (ลาพักผ่อน)
    - /portal/self-service/attendance (การลงเวลา)
    - /portal/self-service/statistics (สถิติ)
    - ... (อื่นๆ จาก empview module)
  
  /portal/admin (Admin Setting - เห็นเฉพาะผู้ที่มีสิทธิ์)
    - /portal/admin/employees (จัดการพนักงาน - จาก personal module)
    - /portal/admin/company (จัดการบริษัท - จาก company module)
    - /portal/admin/payroll (จัดการเงินเดือน - จาก payroll module)
    - /portal/admin/time (จัดการเวลา - จาก ta module)
    - /portal/admin/training (จัดการการฝึกอบรม - จาก training module)
    - /portal/admin/welfare (จัดการสวัสดิการ - จาก welfare module)
    - /portal/admin/recruit (จัดการการสรรหา - จาก recruit module)
    - /portal/admin/appraisal (จัดการการประเมิน - จาก appraisal module)
    - /portal/admin/settings (ตั้งค่าระบบ - จาก setting module)
```

### Target Module Organization
```
features/
├── auth/                    # Authentication (ไม่เปลี่ยน)
│   ├── login/
│   └── forgot-password/
│
├── portal/                  # Portal Module (ใหม่)
│   ├── portal-home/         # หน้าแรก ดูข้อมูลโดยรวม
│   │
│   ├── self-service/        # Employee Self Service Module (ปรับจาก empview)
│   │   ├── time/            # ลงเวลา
│   │   ├── documents/       # ขอเอกสาร
│   │   ├── payslip/         # สลิปเงินเดือน
│   │   ├── profile/         # ตรวจสอบข้อมูลตัวเอง
│   │   ├── subordinates/    # ลูกน้อง
│   │   ├── welfare/         # สวัสดิการ
│   │   ├── leave/           # ลาพักผ่อน
│   │   ├── attendance/      # การลงเวลา
│   │   └── statistics/      # สถิติ
│   │
│   └── admin/               # Admin Module (รวม admin modules)
│       ├── employees/        # จาก personal module
│       ├── company/          # จาก company module
│       ├── payroll/          # จาก payroll module
│       ├── time/             # จาก ta module
│       ├── training/         # จาก training module
│       ├── welfare/          # จาก welfare module
│       ├── recruit/          # จาก recruit module
│       ├── appraisal/        # จาก appraisal module
│       └── settings/         # จาก setting module
│
└── [legacy modules - จะ migrate ทีละส่วน]
```

### Target Sidebar Navigation Structure
```typescript
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;              // Icon หลักใน Rail ซ้ายสุด
  roles: string[];          // ['user', 'admin'] - ใครเห็นได้บ้าง
  children?: NavigationChild[]; // รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
}

export interface NavigationChild {
  label: string;
  route: string;
  icon?: string;            // Optional icon for child
  roles?: string[];         // Optional role restriction for child
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  // กลุ่ม 1: Employee Self Service (ทุกคนมีสิทธิ์เห็น)
  {
    id: 'ess',
    label: 'Self Service',
    icon: 'user-circle',    // icon หลักใน Rail ซ้ายสุด
    roles: ['user', 'admin'],
    children: [              // รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
      { label: 'ลงเวลา (Time)', route: '/portal/self-service/time' },
      { label: 'ขอเอกสาร (Request)', route: '/portal/self-service/documents' },
      { label: 'สลิปเงินเดือน (Payslip)', route: '/portal/self-service/payslip' },
      { label: 'ตรวจสอบข้อมูลตัวเอง', route: '/portal/self-service/profile' },
      { label: 'ลูกน้อง', route: '/portal/self-service/subordinates' },
      { label: 'สวัสดิการ', route: '/portal/self-service/welfare' },
      { label: 'ลาพักผ่อน', route: '/portal/self-service/leave' },
      { label: 'การลงเวลา', route: '/portal/self-service/attendance' },
      { label: 'สถิติ', route: '/portal/self-service/statistics' }
    ]
  },
  
  // กลุ่ม 2: Admin (เห็นเฉพาะผู้ที่มีสิทธิ์)
  {
    id: 'admin',
    label: 'Admin',
    icon: 'shield-check',   // icon หลักใน Rail ซ้ายสุด
    roles: ['admin'],       // User ทั่วไปจะไม่เห็น Icon นี้
    children: [
      { label: 'จัดการพนักงาน', route: '/portal/admin/employees' },
      { label: 'จัดการบริษัท', route: '/portal/admin/company' },
      { navigation: '/portal/admin/payroll' },
      { label: 'จัดการเวลา', route: '/portal/admin/time' },
      { label: 'จัดการการฝึกอบรม', route: '/portal/admin/training' },
      { label: 'จัดการสวัสดิการ', route: '/portal/admin/welfare' },
      { label: 'จัดการการสรรหา', route: '/portal/admin/recruit' },
      { label: 'จัดการการประเมิน', route: '/portal/admin/appraisal' },
      { label: 'ตั้งค่าระบบ', route: '/portal/admin/settings' }
    ]
  }
];
```

---

## 📊 Migration Plan

### Phase 1: Create New Structure (ไม่กระทบของเดิม)
1. ✅ สร้าง `portal` module structure
2. ✅ สร้าง `self-service` module structure
3. ✅ สร้าง `admin` module structure
4. ✅ สร้าง navigation constants

### Phase 2: Update Routing
1. ✅ เพิ่ม routes ใหม่ใน `app-routing.module.ts`
2. ✅ สร้าง routing modules สำหรับ portal, self-service, admin
3. ✅ ตั้งค่า lazy loading

### Phase 3: Update Sidebar
1. ✅ สร้าง navigation service/constants
2. ✅ ปรับ sidebar component ให้รองรับ Rail + Drawer structure
3. ✅ เพิ่ม role-based filtering

### Phase 4: Migrate Content (ทีละส่วน)
1. ✅ Migrate empview → self-service
2. ✅ Migrate admin modules → admin
3. ✅ สร้าง portal home page

### Phase 5: Cleanup
1. ✅ Remove old routes (เมื่อ migrate เสร็จ)
2. ✅ Update all internal links
3. ✅ Update documentation

---

## 🎯 Implementation Steps

### Step 1: Create Navigation Constants
- สร้าง `src/app/core/constants/navigation.constant.ts`
- กำหนด `NAVIGATION_ITEMS` structure

### Step 2: Create Portal Module Structure
```
features/portal/
├── portal.module.ts
├── portal-routing.module.ts
├── portal-home/
│   └── portal-home.component.*
├── self-service/
│   ├── self-service.module.ts
│   ├── self-service-routing.module.ts
│   └── [sub-modules]
└── admin/
    ├── admin.module.ts
    ├── admin-routing.module.ts
    └── [sub-modules]
```

### Step 3: Update App Routing
- เพิ่ม `/portal` route
- Setup lazy loading

### Step 4: Update Sidebar Component
- ปรับให้รองรับ `NAVIGATION_ITEMS` structure
- เพิ่ม Rail + Drawer navigation
- เพิ่ม role-based filtering

### Step 5: Migrate Content (Gradual)
- Migrate empview components → self-service
- Migrate admin modules → admin
- Update routes

---

## 📝 Notes

### Considerations
1. **Backward Compatibility**: เก็บ routes เดิมไว้ชั่วคราว (redirect)
2. **Role Management**: ใช้ AuthService/UserService เพื่อตรวจสอบ roles
3. **Menu Service**: อาจต้องปรับ MenuService ให้รองรับ structure ใหม่
4. **Context Switching**: อาจต้องปรับ context switching logic

### Risks
1. **Breaking Changes**: Routes เปลี่ยน → ต้อง update links ทั้งหมด
2. **Testing**: ต้อง test ทุก route หลัง migrate
3. **User Experience**: ต้องแจ้งผู้ใช้ถ้า routes เปลี่ยน

---

**Last Updated**: 2024-12-20  
**Status**: 📋 Planning Complete - Ready for Implementation

