# Phase 8: Refinement & Standardization Plan

## Objective
ยกระดับคุณภาพโค้ดและ UX/UI ให้เป็นมาตรฐานเดียวกันตาม `MIGRATION_STANDARDS.md` ล่าสุด โดยเน้นการรองรับ Global Theme (Gemini/Glass), การใช้ Skeleton Loading, และการจัดการ State ที่มีประสิทธิภาพ

## 1. Global Theme & Styling Refinement
**Goal:** ปรับปรุง Component ทุกหน้าให้รองรับ Theme Gemini/Glass ได้อย่างสมบูรณ์ (ทะลุผ่านพื้นหลัง)

- [ ] **Audit Background Colors:** ตรวจสอบไฟล์ `.html` ทั้งหมดใน `features/`
    - [x] **Company Module:** ลบ class `bg-white`, `bg-gray-50`, `bg-slate-900` ออกจาก List Component ทั้งหมดแล้ว (21 files)
    - [ ] **Other Modules:** ตรวจสอบและแก้ไขต่อไป
    - [ ] เปลี่ยนไปใช้ `bg-white/10` หรือ `.glass-card` หากต้องการพื้นหลังจางๆ
- [ ] **Standardize Containers:**
    - [ ] แทนที่ `<div>` ธรรมดาด้วย `<app-glass-card>` ในจุดที่แสดงเนื้อหาหลัก
    - [ ] ตรวจสอบ Padding (`p-6`) ให้เท่ากันทุกหน้า

## 2. UX Enhancements implementation
**Goal:** ปรับปรุง User Experience ให้ดูลื่นไหลและทันสมัยกว่าระบบ JSP เดิม

- [ ] **Implement Skeleton Loading:**
    - [x] **Department Module (Pilot):** Implement แล้วใน `department-list.component.html`
    - [ ] ค้นหาหน้า List/Table ที่ใช้ `*ngIf="loading"` กับ Spinner
    - [ ] เปลี่ยนเป็น `*ngIf="loading; else content"` และแสดง `<app-skeleton-loader>` ใน block loading
- [ ] **Staggered Animations:**
    - [ ] เพิ่ม class `animate-fade-in-up` ให้กับ List Item หรือ Card Item
    - [ ] (Optional) สร้าง Directive `appStagger` เพื่อจัดการ delay อัตโนมัติ

## 3. Architecture Standardization
**Goal:** ปรับโค้ดให้ตรงตามมาตรฐาน Angular ใหม่ (Standalone & Signals)

- [ ] **Refactor Services:**
    - [ ] ตรวจสอบ Service เก่าว่า extends `BaseApiService` หรือยัง
    - [ ] ถ้ายัง ให้ Refactor เพื่อลดโค้ดซ้ำซ้อน
- [ ] **Standardize Forms:**
    - [ ] ตรวจสอบหน้า Form ว่าใช้ Reactive Forms หรือไม่
    - [ ] หากเจอ Template-driven (`[(ngModel)]`) ให้แปลงเป็น Reactive Forms (`formControlName`)

## 4. Documentation & Demo
**Goal:** สร้างแหล่งอ้างอิงสำหรับทีมงาน

- [ ] **Create Component Mapping Demo:**
    - [ ] สร้างหน้า `/demo/migration-guide`
    - [ ] แสดงตัวอย่างเปรียบเทียบ: JSP Input vs Angular Glass Input
    - [ ] แสดงตัวอย่างการจัด Layout แบบใหม่

## Execution Plan (Next Steps)

1.  **Start with `Company` Module:** ใช้ Module `Company` เป็นต้นแบบในการ Refactor (Background removal, Skeleton implementation).
2.  **Create Demo Page:** สร้างหน้า Demo เพื่อให้ทีมเห็นภาพชัดเจน
3.  **Apply to other modules:** ทยอยปรับ Module อื่นๆ ตามต้นแบบ

---
**Note:** แผนนี้เน้นการปรับปรุงคุณภาพ (Quality) และประสบการณ์ผู้ใช้ (UX) โดยไม่กระทบกับ Business Logic หลัก
