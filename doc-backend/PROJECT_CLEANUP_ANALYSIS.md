# 📊 วิเคราะห์และแผนการเคลียร์โปรเจ็ค IVAP Frontend

**วันที่สร้าง:** 2025-01-XX  
**เวอร์ชัน:** 1.0.0  
**สถานะ:** 📋 วิเคราะห์และวางแผน

---

## 🎯 วัตถุประสงค์

ปรับโครงสร้างโปรเจ็ค Angular HR System ปัจจุบันให้เป็น **IVAP Frontend** (Intelligent Video Analytics Platform) โดย:
1. ใช้โครงสร้างและสไตล์เดิม (Angular 17+, Tailwind CSS, Glass Morphism)
2. เคลียร์ส่วนที่ไม่จำเป็น (HR features ทั้งหมด)
3. เตรียมโครงสร้างสำหรับ IVAP features

---

## 📋 สรุปโปรเจ็คปัจจุบัน

### โปรเจ็คปัจจุบัน: Angular HR System
- **ชื่อโปรเจ็ค:** HR System Angular Migration
- **Framework:** Angular 17+
- **Design System:** Glass Morphism, Tailwind CSS
- **Theme:** MyHR Theme (เดิมชื่อ Gemini)
- **Features:** HR Management System (Personal, Payroll, TA, Training, Appraisal, Recruit, Welfare, Company)

### โปรเจ็คใหม่: IVAP Frontend
- **ชื่อโปรเจ็ค:** Intelligent Video Analytics Platform Frontend
- **Backend API:** FastAPI (IVAP Service)
- **Features:** Video Analytics, Face Recognition, Visitor Management, Access Control, Parking, Event Management

---

## 🗂️ โครงสร้างโปรเจ็คปัจจุบัน

```
IVAP_FRONTEND/
├── src/app/
│   ├── core/                    # ✅ เก็บไว้ (Core services, guards, interceptors)
│   ├── shared/                  # ✅ เก็บไว้ (Shared components, pipes, directives)
│   ├── layout/                  # ✅ เก็บไว้ (Header, Sidebar, Main Layout)
│   └── features/                # ⚠️ ต้องเคลียร์และปรับใหม่
│       ├── auth/                # ✅ เก็บไว้ (Authentication)
│       ├── home/                # ✅ เก็บไว้ (Dashboard)
│       ├── demo/                # ⚠️ พิจารณาเก็บไว้ (Demo components)
│       ├── appraisal/           # ❌ ลบออก (HR feature)
│       ├── company/             # ⚠️ ปรับใหม่ (ใช้สำหรับ IVAP Company Management)
│       ├── empview/             # ❌ ลบออก (HR Employee View)
│       ├── personal/             # ❌ ลบออก (HR Personal Information)
│       ├── payroll/             # ❌ ลบออก (HR Payroll)
│       ├── recruit/              # ❌ ลบออก (HR Recruitment)
│       ├── ta/                   # ❌ ลบออก (HR Time Attendance)
│       ├── training/             # ❌ ลบออก (HR Training)
│       ├── welfare/              # ❌ ลบออก (HR Welfare)
│       ├── workflow/             # ⚠️ พิจารณาเก็บไว้ (อาจใช้ได้)
│       └── setting/              # ✅ เก็บไว้ (Settings)
├── doc-backend/                 # ✅ เก็บไว้ (IVAP API Documentation)
├── docs/                        # ⚠️ เคลียร์เอกสาร HR
└── src/environments/            # ⚠️ ปรับใหม่ (IVAP API URLs)
```

---

## ❌ ส่วนที่ต้องลบออก (HR Features)

### 1. Feature Modules ที่ต้องลบ

#### ❌ `src/app/features/appraisal/`
- **เหตุผล:** HR Appraisal feature
- **ไฟล์:** ทั้งหมด
- **Routes:** `/appraisal`

#### ❌ `src/app/features/empview/`
- **เหตุผล:** HR Employee View (ESS)
- **ไฟล์:** ทั้งหมด
- **Routes:** `/dashboard` (legacy)

#### ❌ `src/app/features/personal/`
- **เหตุผล:** HR Personal Information
- **ไฟล์:** ทั้งหมด
- **Routes:** `/personal`

#### ❌ `src/app/features/payroll/`
- **เหตุผล:** HR Payroll Management
- **ไฟล์:** ทั้งหมด
- **Routes:** `/payroll`

#### ❌ `src/app/features/recruit/`
- **เหตุผล:** HR Recruitment
- **ไฟล์:** ทั้งหมด
- **Routes:** `/recruit`

#### ❌ `src/app/features/ta/`
- **เหตุผล:** HR Time Attendance
- **ไฟล์:** ทั้งหมด
- **Routes:** `/ta`

#### ❌ `src/app/features/training/`
- **เหตุผล:** HR Training
- **ไฟล์:** ทั้งหมด
- **Routes:** `/training`

#### ❌ `src/app/features/welfare/`
- **เหตุผล:** HR Welfare
- **ไฟล์:** ทั้งหมด
- **Routes:** `/welfare`

### 2. Services ที่ต้องลบ

#### ❌ `src/app/core/services/` (HR-specific services)
- `appraisal.service.ts` (ถ้ามี)
- `payroll.service.ts` (ถ้ามี)
- `recruit.service.ts` (ถ้ามี)
- `ta.service.ts` (ถ้ามี)
- `training.service.ts` (ถ้ามี)
- `welfare.service.ts` (ถ้ามี)
- `personal.service.ts` (ถ้ามี)

### 3. Models ที่ต้องลบ

#### ❌ `src/app/core/models/` (HR-specific models)
- Models ที่เกี่ยวกับ Employee, Payroll, Leave, Shift, etc.

### 4. Constants ที่ต้องลบ

#### ❌ `src/app/core/constants/` (HR-specific constants)
- `routes.constant.ts` - ลบ HR routes
- `sidebar-modules.constant.ts` - ลบ HR modules
- Screen constants (ถ้ามี)

### 5. Routes ที่ต้องลบ

#### ❌ `src/app/app-routing.module.ts`
- ลบ routes สำหรับ HR features:
  - `/personal`
  - `/ta`
  - `/payroll`
  - `/training`
  - `/appraisal`
  - `/recruit`
  - `/welfare`
  - `/dashboard` (empview)

### 6. Navigation ที่ต้องลบ

#### ❌ `src/app/core/constants/navigation.constant.ts`
- ลบ navigation items สำหรับ HR features

### 7. Documentation ที่ต้องลบ

#### ❌ `docs/` (HR-specific documentation)
- `docs/modules/` - HR module documentation
- `docs/implementation/` - HR implementation docs
- `MIGRATION_STATUS_SUMMARY.md` (ถ้ามี)
- เอกสารอื่นๆ ที่เกี่ยวกับ HR

### 8. Environment Configuration

#### ⚠️ `src/environments/environment.ts`
- **ต้องปรับใหม่:** เปลี่ยน API URLs จาก HR API เป็น IVAP API
- **เดิม:**
  ```typescript
  baseUrl: 'https://hrplus-std.myhr.co.th/plus'
  jbossUrl: 'https://hrplus-std.myhr.co.th/hr'
  ```
- **ใหม่:**
  ```typescript
  baseUrl: 'http://localhost:8000'
  apiVersion: '/api/v1'
  ```

---

## ✅ ส่วนที่เก็บไว้ (Core & Shared)

### 1. Core Services (เก็บไว้)

#### ✅ `src/app/core/services/`
- `api.service.ts` - Base API service (ปรับใหม่ให้ใช้ BaseApiService จาก doc-backend)
- `auth.service.ts` - Authentication service (ปรับใหม่ให้ใช้ AuthService จาก doc-backend)
- `notification.service.ts` - Notification service
- `theme.service.ts` - Theme service
- `loading.service.ts` - Loading service
- `storage.service.ts` - Storage service
- `token-manager.service.ts` - Token management

### 2. Core Guards & Interceptors (เก็บไว้)

#### ✅ `src/app/core/guards/`
- `auth.guard.ts` - Authentication guard
- `role.guard.ts` - Role-based guard (ปรับใหม่สำหรับ IVAP roles)

#### ✅ `src/app/core/interceptors/`
- `auth.interceptor.ts` - Auth interceptor
- `error.interceptor.ts` - Error interceptor

### 3. Shared Components (เก็บไว้)

#### ✅ `src/app/shared/components/`
- Glass Morphism components (GlassCard, GlassButton, GlassInput, etc.)
- Form components
- UI components
- Data display components
- Navigation components

### 4. Layout Components (เก็บไว้)

#### ✅ `src/app/layout/`
- `header/` - Header component
- `sidebar/` - Sidebar component
- `main-layout/` - Main layout component
- `footer/` - Footer component (ถ้ามี)

### 5. Features ที่เก็บไว้

#### ✅ `src/app/features/auth/`
- Authentication module (Login, Forgot Password, Unauthorized)
- **ปรับใหม่:** ใช้ AuthService จาก doc-backend

#### ✅ `src/app/features/home/`
- Dashboard/Home module
- **ปรับใหม่:** เปลี่ยนเป็น IVAP Dashboard

#### ✅ `src/app/features/setting/`
- Settings module
- **ปรับใหม่:** IVAP Settings

#### ⚠️ `src/app/features/demo/`
- **พิจารณา:** เก็บไว้สำหรับ demo components หรือลบออก

#### ⚠️ `src/app/features/company/`
- **ปรับใหม่:** ใช้สำหรับ IVAP Company Management (ไม่ใช่ HR Company)

---

## 🆕 ส่วนที่ต้องเพิ่มใหม่ (IVAP Features)

### 1. Feature Modules ใหม่

#### 🆕 `src/app/features/visitor/`
- Visitor Management
- Routes: `/visitors`
- Components:
  - `visitor-list/`
  - `visitor-detail/`
  - `visitor-form/`
- Services: `visitor.service.ts` (ใช้ VisitorService จาก doc-backend)

#### 🆕 `src/app/features/guest/`
- Guest Management
- Routes: `/guests`
- Components:
  - `guest-list/`
  - `guest-detail/`
  - `guest-registration/`
- Services: `guest.service.ts` (ใช้ GuestService จาก doc-backend)

#### 🆕 `src/app/features/event/`
- Event Management
- Routes: `/events`
- Components:
  - `event-list/`
  - `event-detail/`
  - `event-form/`
  - `event-registration/`
- Services: `event.service.ts` (ใช้ EventService จาก doc-backend)

#### 🆕 `src/app/features/verification/`
- Verification Hub
- Routes: `/verifications`
- Components:
  - `verification-list/`
  - `verification-detail/`
  - `face-enrollment/`
  - `qr-code-generator/`
- Services: `verification.service.ts`

#### 🆕 `src/app/features/access-control/`
- Access Control & Device Management
- Routes: `/access-control`
- Components:
  - `device-list/`
  - `door-list/`
  - `access-log/`
- Services: `device.service.ts`, `door.service.ts`

#### 🆕 `src/app/features/parking/`
- Parking Management (LPR)
- Routes: `/parking`
- Components:
  - `parking-list/`
  - `vehicle-list/`
  - `parking-record/`
- Services: `parking.service.ts`, `vehicle.service.ts`

#### 🆕 `src/app/features/analytics/`
- Video Analytics & AI
- Routes: `/analytics`
- Components:
  - `analytics-dashboard/`
  - `video-analytics/`
  - `ai-models/`
- Services: `analytics.service.ts`, `video-analytics.service.ts`

#### 🆕 `src/app/features/monitoring/`
- System Monitoring
- Routes: `/monitoring`
- Components:
  - `system-health/`
  - `performance-metrics/`
  - `hardware-monitoring/`
- Services: `monitoring.service.ts`

### 2. Services ใหม่

#### 🆕 `src/app/core/services/`
- Copy services จาก `doc-backend/angular-services-examples.ts`:
  - `auth.service.ts` (ปรับใหม่)
  - `company.service.ts` (ปรับใหม่)
  - `visitor.service.ts`
  - `guest.service.ts`
  - `event.service.ts`
  - `device.service.ts`
  - `door.service.ts`
  - `parking.service.ts`
  - `vehicle.service.ts`
  - `analytics.service.ts`

### 3. Models ใหม่

#### 🆕 `src/app/core/models/`
- Copy models จาก `doc-backend/angular-models.ts`:
  - `visitor.model.ts`
  - `guest.model.ts`
  - `event.model.ts`
  - `verification.model.ts`
  - `device.model.ts`
  - `door.model.ts`
  - `parking.model.ts`
  - `vehicle.model.ts`
  - `analytics.model.ts`

### 4. Base Service ใหม่

#### 🆕 `src/app/core/services/base-api.service.ts`
- Copy จาก `doc-backend/angular-base-service.ts`
- ปรับ baseUrl และ apiVersion

---

## 📝 แผนการดำเนินงาน

### Phase 1: Preparation (เตรียมความพร้อม)

1. **Backup โปรเจ็คปัจจุบัน**
   ```bash
   git checkout -b backup-hr-system
   git push origin backup-hr-system
   ```

2. **สร้าง branch ใหม่**
   ```bash
   git checkout -b ivap-frontend-cleanup
   ```

3. **Copy Base Service และ Models**
   - Copy `doc-backend/angular-base-service.ts` → `src/app/core/services/base-api.service.ts`
   - Copy `doc-backend/angular-models.ts` → `src/app/core/models/ivap-models.ts`
   - Copy services จาก `doc-backend/angular-services-examples.ts` → `src/app/core/services/`

### Phase 2: Cleanup (เคลียร์ส่วนที่ไม่จำเป็น)

1. **ลบ HR Feature Modules**
   ```bash
   # ลบ feature modules
   rm -rf src/app/features/appraisal
   rm -rf src/app/features/empview
   rm -rf src/app/features/personal
   rm -rf src/app/features/payroll
   rm -rf src/app/features/recruit
   rm -rf src/app/features/ta
   rm -rf src/app/features/training
   rm -rf src/app/features/welfare
   ```

2. **ลบ HR Routes**
   - แก้ไข `src/app/app-routing.module.ts`
   - ลบ routes สำหรับ HR features

3. **ลบ HR Navigation**
   - แก้ไข `src/app/core/constants/navigation.constant.ts`
   - ลบ navigation items สำหรับ HR features

4. **ลบ HR Services**
   - ลบ HR-specific services จาก `src/app/core/services/`

5. **ลบ HR Models**
   - ลบ HR-specific models จาก `src/app/core/models/`

6. **ลบ HR Documentation**
   - ลบ `docs/modules/` (HR modules)
   - ลบ `docs/implementation/` (HR implementation)
   - เก็บไว้เฉพาะ docs ที่เกี่ยวกับ architecture, styling, theme

### Phase 3: Configuration (ปรับ Configuration)

1. **ปรับ Environment**
   - แก้ไข `src/environments/environment.ts`
   - เปลี่ยน API URLs เป็น IVAP API

2. **ปรับ Base Service**
   - แก้ไข `src/app/core/services/base-api.service.ts`
   - ใช้ baseUrl และ apiVersion จาก environment

3. **ปรับ Auth Service**
   - แก้ไข `src/app/core/services/auth.service.ts`
   - ใช้ AuthService จาก doc-backend

### Phase 4: New Features (เพิ่ม Features ใหม่)

1. **สร้าง IVAP Feature Modules**
   - สร้าง modules ตามแผนในส่วน "ส่วนที่ต้องเพิ่มใหม่"

2. **เพิ่ม Routes**
   - เพิ่ม routes สำหรับ IVAP features ใน `src/app/app-routing.module.ts`

3. **เพิ่ม Navigation**
   - เพิ่ม navigation items สำหรับ IVAP features

4. **เพิ่ม Services**
   - Copy services จาก doc-backend และปรับให้เหมาะสม

### Phase 5: Testing & Cleanup (ทดสอบและเคลียร์)

1. **ทดสอบ Authentication**
   - ทดสอบ login/logout
   - ทดสอบ token management

2. **ทดสอบ Navigation**
   - ทดสอบ sidebar navigation
   - ทดสอบ routing

3. **เคลียร์ Dependencies**
   - ลบ dependencies ที่ไม่ใช้
   - อัพเดท `package.json`

4. **เคลียร์ Build Errors**
   - แก้ไข build errors
   - แก้ไข linter errors

---

## 📊 สรุปการเปลี่ยนแปลง

### ไฟล์ที่ต้องลบ

| หมวดหมู่ | จำนวน (ประมาณ) | สถานะ |
|---------|----------------|--------|
| HR Feature Modules | 8 modules | ❌ ลบ |
| HR Services | 10+ services | ❌ ลบ |
| HR Models | 20+ models | ❌ ลบ |
| HR Routes | 8+ routes | ❌ ลบ |
| HR Navigation Items | 50+ items | ❌ ลบ |
| HR Documentation | 20+ files | ❌ ลบ |

### ไฟล์ที่เก็บไว้

| หมวดหมู่ | จำนวน (ประมาณ) | สถานะ |
|---------|----------------|--------|
| Core Services | 10+ services | ✅ เก็บ |
| Shared Components | 50+ components | ✅ เก็บ |
| Layout Components | 4 components | ✅ เก็บ |
| Auth Module | 1 module | ✅ เก็บ |
| Home Module | 1 module | ✅ เก็บ |
| Setting Module | 1 module | ✅ เก็บ |
| Demo Module | 1 module | ⚠️ พิจารณา |

### ไฟล์ที่ต้องเพิ่มใหม่

| หมวดหมู่ | จำนวน (ประมาณ) | สถานะ |
|---------|----------------|--------|
| IVAP Feature Modules | 8 modules | 🆕 เพิ่ม |
| IVAP Services | 10+ services | 🆕 เพิ่ม |
| IVAP Models | 20+ models | 🆕 เพิ่ม |
| IVAP Routes | 8+ routes | 🆕 เพิ่ม |
| IVAP Navigation Items | 30+ items | 🆕 เพิ่ม |

---

## ⚠️ ข้อควรระวัง

1. **Backup ก่อนลบ:** ต้อง backup โปรเจ็คก่อนลบไฟล์
2. **Git History:** เก็บ git history ไว้สำหรับ reference
3. **Dependencies:** ตรวจสอบ dependencies ที่ไม่ใช้แล้ว
4. **Build Errors:** แก้ไข build errors ทีละขั้นตอน
5. **Testing:** ทดสอบแต่ละ phase ก่อนไปต่อ

---

## 📚 เอกสารอ้างอิง

- `doc-backend/SYSTEM_ARCHITECTURE_ANALYSIS.md` - IVAP Backend Architecture
- `doc-backend/API_DOCUMENTATION.md` - IVAP API Documentation
- `doc-backend/ANGULAR_INTEGRATION_GUIDE.md` - Angular Integration Guide
- `doc-backend/angular-base-service.ts` - Base API Service
- `doc-backend/angular-models.ts` - TypeScript Models
- `doc-backend/angular-services-examples.ts` - Service Examples

---

**อัพเดทล่าสุด:** 2025-01-XX  
**เวอร์ชัน:** 1.0.0


