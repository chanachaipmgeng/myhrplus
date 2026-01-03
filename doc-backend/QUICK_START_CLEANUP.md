# 🚀 Quick Start - IVAP Frontend Cleanup

**สำหรับ:** Developer ที่ต้องการเคลียร์โปรเจ็ค HR System เป็น IVAP Frontend

---

## 📋 สรุปสั้นๆ

### สิ่งที่ต้องทำ
1. **ลบ HR Features** (8 modules)
2. **ปรับ Configuration** (Environment, Routes, Navigation)
3. **เพิ่ม IVAP Features** (8 modules ใหม่)
4. **ทดสอบและ Cleanup**

---

## ⚡ Quick Commands

### 1. Backup & Branch
```bash
# สร้าง backup branch
git checkout -b backup-hr-system
git push origin backup-hr-system

# สร้าง branch ใหม่สำหรับ cleanup
git checkout -b ivap-frontend-cleanup
```

### 2. ลบ HR Feature Modules
```bash
# ลบ HR feature modules
rm -rf src/app/features/appraisal
rm -rf src/app/features/empview
rm -rf src/app/features/personal
rm -rf src/app/features/payroll
rm -rf src/app/features/recruit
rm -rf src/app/features/ta
rm -rf src/app/features/training
rm -rf src/app/features/welfare
```

### 3. Copy Base Files
```bash
# Copy base service
cp doc-backend/angular-base-service.ts src/app/core/services/base-api.service.ts

# Copy models
cp doc-backend/angular-models.ts src/app/core/models/ivap-models.ts
```

### 4. Build & Test
```bash
# Build
npm run build

# Lint
npm run lint

# Start dev server
npm start
```

---

## 📝 ไฟล์สำคัญที่ต้องแก้ไข

### 1. Environment Configuration
**ไฟล์:** `src/environments/environment.ts`

**เปลี่ยนจาก:**
```typescript
baseUrl: 'https://hrplus-std.myhr.co.th/plus'
jbossUrl: 'https://hrplus-std.myhr.co.th/hr'
```

**เป็น:**
```typescript
baseUrl: 'http://localhost:8000'
apiVersion: '/api/v1'
```

### 2. Routes
**ไฟล์:** `src/app/app-routing.module.ts`

**ลบ:**
- `/appraisal`
- `/personal`
- `/payroll`
- `/recruit`
- `/ta`
- `/training`
- `/welfare`
- `/dashboard` (empview)

**เพิ่ม:**
- `/visitors`
- `/guests`
- `/events`
- `/verifications`
- `/access-control`
- `/parking`
- `/analytics`
- `/monitoring`

### 3. Navigation
**ไฟล์:** `src/app/core/constants/navigation.constant.ts`

**ลบ:** HR navigation items  
**เพิ่ม:** IVAP navigation items

---

## 🗂️ โครงสร้างใหม่

```
src/app/features/
├── auth/              ✅ เก็บไว้ (ปรับใหม่)
├── home/              ✅ เก็บไว้ (ปรับเป็น IVAP Dashboard)
├── setting/           ✅ เก็บไว้ (IVAP Settings)
├── company/           ⚠️ ปรับใหม่ (IVAP Company Management)
├── visitor/           🆕 เพิ่มใหม่
├── guest/             🆕 เพิ่มใหม่
├── event/             🆕 เพิ่มใหม่
├── verification/      🆕 เพิ่มใหม่
├── access-control/    🆕 เพิ่มใหม่
├── parking/           🆕 เพิ่มใหม่
├── analytics/         🆕 เพิ่มใหม่
└── monitoring/        🆕 เพิ่มใหม่
```

---

## 📚 เอกสารอ้างอิง

1. **`PROJECT_CLEANUP_ANALYSIS.md`** - วิเคราะห์ละเอียด
2. **`CLEANUP_CHECKLIST.md`** - Checklist แบบละเอียด
3. **`API_DOCUMENTATION.md`** - IVAP API Documentation
4. **`ANGULAR_INTEGRATION_GUIDE.md`** - Angular Integration Guide

---

## ⚠️ ข้อควรระวัง

1. **Backup ก่อนลบ** - ต้อง backup โปรเจ็คก่อน
2. **ทดสอบทีละขั้น** - ทดสอบแต่ละ phase ก่อนไปต่อ
3. **แก้ไข Build Errors** - แก้ไข build errors ทีละขั้นตอน
4. **ตรวจสอบ Dependencies** - ลบ dependencies ที่ไม่ใช้

---

**อัพเดทล่าสุด:** 2025-01-XX


