# ✅ Checklist สำหรับการเคลียร์โปรเจ็ค IVAP Frontend

**วันที่สร้าง:** 2025-01-XX  
**สถานะ:** 📋 Checklist

---

## 🔄 Phase 1: Preparation (เตรียมความพร้อม)

### Git Operations
- [ ] สร้าง backup branch: `git checkout -b backup-hr-system`
- [ ] Push backup branch: `git push origin backup-hr-system`
- [ ] สร้าง branch ใหม่: `git checkout -b ivap-frontend-cleanup`
- [ ] Commit current state: `git commit -am "Backup before IVAP cleanup"`

### Copy Base Files
- [ ] Copy `doc-backend/angular-base-service.ts` → `src/app/core/services/base-api.service.ts`
- [ ] Copy `doc-backend/angular-models.ts` → `src/app/core/models/ivap-models.ts`
- [ ] Review `doc-backend/angular-services-examples.ts` สำหรับ services ที่ต้องใช้

---

## 🗑️ Phase 2: Cleanup - Feature Modules

### ลบ HR Feature Modules
- [ ] ลบ `src/app/features/appraisal/`
- [ ] ลบ `src/app/features/empview/`
- [ ] ลบ `src/app/features/personal/`
- [ ] ลบ `src/app/features/payroll/`
- [ ] ลบ `src/app/features/recruit/`
- [ ] ลบ `src/app/features/ta/`
- [ ] ลบ `src/app/features/training/`
- [ ] ลบ `src/app/features/welfare/`

### ปรับ Feature Modules ที่เก็บไว้
- [ ] ปรับ `src/app/features/company/` (เปลี่ยนเป็น IVAP Company Management)
- [ ] ปรับ `src/app/features/home/` (เปลี่ยนเป็น IVAP Dashboard)
- [ ] ปรับ `src/app/features/setting/` (IVAP Settings)
- [ ] พิจารณา `src/app/features/demo/` (เก็บไว้หรือลบ)

---

## 🗑️ Phase 3: Cleanup - Routes & Navigation

### ลบ HR Routes
- [ ] แก้ไข `src/app/app-routing.module.ts`
  - [ ] ลบ route `/appraisal`
  - [ ] ลบ route `/empview` หรือ `/dashboard`
  - [ ] ลบ route `/personal`
  - [ ] ลบ route `/payroll`
  - [ ] ลบ route `/recruit`
  - [ ] ลบ route `/ta`
  - [ ] ลบ route `/training`
  - [ ] ลบ route `/welfare`

### ลบ HR Navigation
- [ ] แก้ไข `src/app/core/constants/navigation.constant.ts`
  - [ ] ลบ navigation items สำหรับ HR features
- [ ] แก้ไข `src/app/core/constants/sidebar-modules.constant.ts`
  - [ ] ลบ HR modules จาก sidebar

### ลบ HR Route Constants
- [ ] แก้ไข `src/app/core/constants/routes.constant.ts`
  - [ ] ลบ HR route constants

---

## 🗑️ Phase 4: Cleanup - Services

### ลบ HR Services
- [ ] ลบ `src/app/features/appraisal/services/appraisal.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/payroll/services/payroll.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/recruit/services/recruit.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/ta/services/ta.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/training/services/training.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/welfare/services/welfare.service.ts` (ถ้ามี)
- [ ] ลบ `src/app/features/personal/services/personal.service.ts` (ถ้ามี)

### ปรับ Core Services
- [ ] แก้ไข `src/app/core/services/api.service.ts` (ใช้ BaseApiService)
- [ ] แก้ไข `src/app/core/services/auth.service.ts` (ใช้ AuthService จาก doc-backend)
- [ ] ตรวจสอบ services อื่นๆ ที่อาจอ้างอิง HR features

---

## 🗑️ Phase 5: Cleanup - Models

### ลบ HR Models
- [ ] ลบ HR-specific models จาก `src/app/core/models/`
  - [ ] Employee models
  - [ ] Payroll models
  - [ ] Leave models
  - [ ] Shift models
  - [ ] Training models
  - [ ] Appraisal models
  - [ ] Recruitment models
  - [ ] Welfare models

### เพิ่ม IVAP Models
- [ ] Copy models จาก `doc-backend/angular-models.ts`
- [ ] สร้างไฟล์ models ใหม่:
  - [ ] `visitor.model.ts`
  - [ ] `guest.model.ts`
  - [ ] `event.model.ts`
  - [ ] `verification.model.ts`
  - [ ] `device.model.ts`
  - [ ] `door.model.ts`
  - [ ] `parking.model.ts`
  - [ ] `vehicle.model.ts`
  - [ ] `analytics.model.ts`

---

## 🗑️ Phase 6: Cleanup - Constants

### ลบ HR Constants
- [ ] ลบ screen constants (ถ้ามี):
  - [ ] `appraisal-screens.constant.ts`
  - [ ] `personal-screens.constant.ts`
  - [ ] `payroll-screens.constant.ts`
  - [ ] `recruit-screens.constant.ts`
  - [ ] `ta-screens.constant.ts`
  - [ ] `training-screens.constant.ts`
  - [ ] `welfare-screens.constant.ts`

---

## 🗑️ Phase 7: Cleanup - Documentation

### ลบ HR Documentation
- [ ] ลบ `docs/modules/` (HR module documentation)
- [ ] ลบ `docs/implementation/` (HR implementation docs)
- [ ] ลบ `MIGRATION_STATUS_SUMMARY.md` (ถ้ามี)
- [ ] ลบเอกสารอื่นๆ ที่เกี่ยวกับ HR

### เก็บ Documentation ที่ใช้ได้
- [ ] เก็บ `docs/architecture/` (ถ้ามีส่วนที่ใช้ได้)
- [ ] เก็บ `docs/styling/` (Styling guidelines)
- [ ] เก็บ `docs/theme/` (Theme documentation)
- [ ] เก็บ `docs/components/` (Component documentation)

---

## ⚙️ Phase 8: Configuration

### ปรับ Environment
- [ ] แก้ไข `src/environments/environment.ts`
  - [ ] เปลี่ยน `baseUrl` เป็น IVAP API URL
  - [ ] เปลี่ยน `jbossUrl` เป็น IVAP API URL
  - [ ] เพิ่ม `apiVersion: '/api/v1'`
  - [ ] ลบ HR-specific endpoints
  - [ ] เพิ่ม IVAP endpoints (ถ้าจำเป็น)

### ปรับ Base Service
- [ ] แก้ไข `src/app/core/services/base-api.service.ts`
  - [ ] ใช้ `environment.baseUrl` และ `environment.apiVersion`
  - [ ] ตรวจสอบ error handling

### ปรับ Auth Service
- [ ] แก้ไข `src/app/core/services/auth.service.ts`
  - [ ] ใช้ AuthService pattern จาก doc-backend
  - [ ] ตรวจสอบ login/logout flow

---

## 🆕 Phase 9: New Features - Services

### สร้าง IVAP Services
- [ ] สร้าง `src/app/core/services/visitor.service.ts` (ใช้ VisitorService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/guest.service.ts` (ใช้ GuestService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/event.service.ts` (ใช้ EventService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/device.service.ts` (ใช้ DeviceService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/door.service.ts` (ใช้ DoorService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/parking.service.ts` (ใช้ ParkingService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/vehicle.service.ts` (ใช้ VehicleService จาก doc-backend)
- [ ] สร้าง `src/app/core/services/analytics.service.ts`
- [ ] สร้าง `src/app/core/services/monitoring.service.ts`

---

## 🆕 Phase 10: New Features - Modules

### สร้าง IVAP Feature Modules
- [ ] สร้าง `src/app/features/visitor/`
  - [ ] `visitor.module.ts`
  - [ ] `visitor-routing.module.ts`
  - [ ] Components: `visitor-list/`, `visitor-detail/`, `visitor-form/`
- [ ] สร้าง `src/app/features/guest/`
  - [ ] `guest.module.ts`
  - [ ] `guest-routing.module.ts`
  - [ ] Components: `guest-list/`, `guest-detail/`, `guest-registration/`
- [ ] สร้าง `src/app/features/event/`
  - [ ] `event.module.ts`
  - [ ] `event-routing.module.ts`
  - [ ] Components: `event-list/`, `event-detail/`, `event-form/`, `event-registration/`
- [ ] สร้าง `src/app/features/verification/`
  - [ ] `verification.module.ts`
  - [ ] `verification-routing.module.ts`
  - [ ] Components: `verification-list/`, `face-enrollment/`, `qr-code-generator/`
- [ ] สร้าง `src/app/features/access-control/`
  - [ ] `access-control.module.ts`
  - [ ] `access-control-routing.module.ts`
  - [ ] Components: `device-list/`, `door-list/`, `access-log/`
- [ ] สร้าง `src/app/features/parking/`
  - [ ] `parking.module.ts`
  - [ ] `parking-routing.module.ts`
  - [ ] Components: `parking-list/`, `vehicle-list/`, `parking-record/`
- [ ] สร้าง `src/app/features/analytics/`
  - [ ] `analytics.module.ts`
  - [ ] `analytics-routing.module.ts`
  - [ ] Components: `analytics-dashboard/`, `video-analytics/`, `ai-models/`
- [ ] สร้าง `src/app/features/monitoring/`
  - [ ] `monitoring.module.ts`
  - [ ] `monitoring-routing.module.ts`
  - [ ] Components: `system-health/`, `performance-metrics/`, `hardware-monitoring/`

---

## 🆕 Phase 11: New Features - Routes & Navigation

### เพิ่ม IVAP Routes
- [ ] แก้ไข `src/app/app-routing.module.ts`
  - [ ] เพิ่ม route `/visitors`
  - [ ] เพิ่ม route `/guests`
  - [ ] เพิ่ม route `/events`
  - [ ] เพิ่ม route `/verifications`
  - [ ] เพิ่ม route `/access-control`
  - [ ] เพิ่ม route `/parking`
  - [ ] เพิ่ม route `/analytics`
  - [ ] เพิ่ม route `/monitoring`

### เพิ่ม IVAP Navigation
- [ ] แก้ไข `src/app/core/constants/navigation.constant.ts`
  - [ ] เพิ่ม navigation items สำหรับ IVAP features
- [ ] แก้ไข `src/app/core/constants/sidebar-modules.constant.ts`
  - [ ] เพิ่ม IVAP modules ใน sidebar

---

## 🧪 Phase 12: Testing & Cleanup

### Build & Lint
- [ ] รัน `npm run build` - ตรวจสอบ build errors
- [ ] แก้ไข build errors
- [ ] รัน `npm run lint` - ตรวจสอบ linter errors
- [ ] แก้ไข linter errors

### Testing
- [ ] ทดสอบ Authentication (login/logout)
- [ ] ทดสอบ Navigation (sidebar, routing)
- [ ] ทดสอบ Home/Dashboard
- [ ] ทดสอบ Settings

### Dependencies Cleanup
- [ ] ตรวจสอบ `package.json` - ลบ dependencies ที่ไม่ใช้
- [ ] รัน `npm install` - อัพเดท dependencies
- [ ] ตรวจสอบ bundle size

### Final Cleanup
- [ ] ลบ unused imports
- [ ] ลบ unused files
- [ ] อัพเดท README.md
- [ ] Commit changes: `git commit -am "IVAP Frontend cleanup complete"`

---

## 📝 Notes

### สิ่งที่ต้องระวัง
- ⚠️ **Backup ก่อนลบ:** ต้อง backup โปรเจ็คก่อนลบไฟล์
- ⚠️ **Git History:** เก็บ git history ไว้สำหรับ reference
- ⚠️ **Dependencies:** ตรวจสอบ dependencies ที่ไม่ใช้แล้ว
- ⚠️ **Build Errors:** แก้ไข build errors ทีละขั้นตอน
- ⚠️ **Testing:** ทดสอบแต่ละ phase ก่อนไปต่อ

### สิ่งที่ต้องทำเพิ่มเติม
- [ ] อัพเดท README.md สำหรับ IVAP Frontend
- [ ] สร้าง environment files สำหรับ development และ production
- [ ] อัพเดท package.json (name, description, version)
- [ ] สร้าง documentation สำหรับ IVAP features

---

**อัพเดทล่าสุด:** 2025-01-XX  
**สถานะ:** 📋 Checklist


