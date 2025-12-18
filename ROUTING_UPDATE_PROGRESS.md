# Routing Update Progress

**วันที่**: 2024-12-20  
**สถานะ**: 🚧 In Progress

---

## ✅ เสร็จแล้ว

### 1. Core Routing
- ✅ `app-routing.module.ts` - เพิ่ม redirects สำหรับ legacy routes
- ✅ `routes.constant.ts` - เพิ่ม LEGACY section และ mark deprecated

### 2. Layout Components
- ✅ `sidebar.component.html` - อัปเดต user menu links
- ✅ `sidebar.component.ts` - อัปเดต navigation methods
- ✅ `header.component.html` - อัปเดต home link
- ✅ `header.component.ts` - อัปเดต profile/preferences navigation

### 3. Auth Components
- ✅ `login.component.ts` - อัปเดต default returnUrl และ navigation
- ✅ `guest.guard.ts` - อัปเดต default returnUrl

### 4. Shared Components
- ✅ `breadcrumbs.component.ts` - อัปเดต default home route

### 5. Navigation Constants
- ✅ `navigation.constant.ts` - ใช้ portal routes อยู่แล้ว (ไม่ต้องแก้)

---

## ⏳ ยังต้องทำ

### 1. Menu Service
- ⏳ `menu.service.ts` - อัปเดต legacy route mappings

### 2. Menu Data Service
- ⏳ `menu-data.service.ts` - อัปเดต legacy routes

### 3. Omni Search Component
- ⏳ `omni-search.component.ts` - อัปเดต search results routes

### 4. Feature Module Components
- ⏳ `home.component.ts` - อัปเดต navigation links
- ⏳ `empview/dashboard.component.ts` - อัปเดต navigation links
- ⏳ `setting-home.component.ts` - อัปเดต routes
- ⏳ `company-home.component.ts` - อัปเดต routes
- ⏳ `personal-home.component.ts` - อัปเดต routes
- ⏳ `ta-home.component.ts` - อัปเดต routes
- ⏳ `payroll-home.component.ts` - อัปเดต routes
- ⏳ `training-home.component.ts` - อัปเดต routes
- ⏳ `appraisal-home.component.ts` - อัปเดต routes
- ⏳ `recruit-home.component.ts` - อัปเดต routes
- ⏳ `welfare-home.component.ts` - อัปเดต routes

### 5. Other Components
- ⏳ `unauthorized.component.ts` - อัปเดต navigation
- ⏳ `home-header.component.ts` - อัปเดต navigation

---

## 📝 Notes

- Legacy routes ยัง redirect ไปยัง portal structure อัตโนมัติ
- Internal links ที่อัปเดตแล้วจะใช้ portal routes โดยตรง
- Internal links ที่ยังไม่ได้อัปเดตจะยังใช้ legacy routes แต่จะ redirect อัตโนมัติ

---

**Maintainer**: Development Team  
**Last Updated**: 2024-12-20

