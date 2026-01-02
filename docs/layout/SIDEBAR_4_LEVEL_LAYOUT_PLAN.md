# Sidebar 4-Level Layout Plan

**วันที่**: 2024-12-20  
**สถานะ**: 📋 วางแผน

---

## 🎯 Requirements

### โครงสร้างเมนู 4 ระดับ

```
Level 1: Home, ESS (Default), Admin
  ↓
Level 2: เมื่อเลือก Admin → Company Management, Personal Management, etc.
  ↓
Level 3: เมื่อเลือก Company Management → เมนูของโมดูลนั้น
  ↓
Level 4: เมนูย่อยของ Level 3
```

### Behavior

1. **Default Selection**: Auto-select ESS (Empview) เมื่อโหลด
2. **Admin Access**: หากมีสิทธิ์จะแสดง Admin option
3. **Level 2 Navigation**: เมื่อเลือก Admin → แสดง Company Management, Personal Management, etc.
4. **Level 3-4 Navigation**: เมื่อเลือกโมดูล → แสดงเมนูของโมดูลนั้น (2 ระดับ)

---

## 📐 Proposed Layout Structure

### Option 1: Current Structure (Enhanced) ⭐

**Rail (Left Icon Bar)**:
- Level 1: Home, ESS (default), Admin
- Level 2: เมื่อเลือก Admin → Company, Personal, Payroll, etc.

**Menu Panel (Right)**:
- Level 3: เมนูของโมดูลที่เลือก (accordion)
- Level 4: เมนูย่อย (nested accordion)

**Flow**:
```
1. Load → Auto-select ESS → แสดง Level 3 menu items ของ ESS
2. Click Admin → แสดง Level 2 items (Company, Personal, etc.) ใน Rail
3. Click Company → แสดง Level 3 menu items ของ Company ใน Menu Panel
4. Click Level 3 item (มี children) → Expand Level 4
```

### Option 2: Three-Panel Structure

**Rail 1 (Left)**: Level 1 (Home, ESS, Admin)
**Rail 2 (Middle)**: Level 2 (เมื่อเลือก Admin)
**Menu Panel (Right)**: Level 3-4 (accordion)

**Flow**:
```
1. Load → Auto-select ESS → แสดง Level 3 menu items
2. Click Admin → แสดง Rail 2 (Level 2 items)
3. Click Company → แสดง Level 3-4 menu items ใน Menu Panel
```

---

## 🎨 Recommended: Enhanced Current Structure

### Why?

1. **ใช้โครงสร้างปัจจุบัน**: Rail + Drawer ทำงานได้ดีแล้ว
2. **ไม่ซับซ้อน**: ไม่ต้องเพิ่ม panel ใหม่
3. **UX ชัดเจน**: Navigation flow เป็นธรรมชาติ
4. **Scalable**: รองรับการเพิ่มระดับในอนาคต

### Implementation Plan

#### 1. Update Navigation Constants

เพิ่มโครงสร้าง Level 2-4 ให้ชัดเจน:

```typescript
{
  id: 'admin',
  label: 'Admin',
  icon: 'shield-check',
  roles: ['admin'],
  children: [ // Level 2
    {
      label: 'Company Management',
      icon: 'business',
      children: [ // Level 3
        {
          label: 'ข้อมูลบริษัท',
          route: '/portal/admin/company',
          children: [ // Level 4
            { label: 'ข้อมูลพื้นฐาน', route: '/portal/admin/company/profile' },
            { label: 'โครงสร้างองค์กร', route: '/portal/admin/company/organization' }
          ]
        },
        // ... more Level 3 items
      ]
    },
    {
      label: 'Personal Management',
      icon: 'people',
      children: [ // Level 3
        {
          label: 'Dashboard ภาพรวม',
          route: '/portal/admin/employees/dashboard'
        },
        {
          label: 'ทะเบียนประวัติหลัก',
          children: [ // Level 4
            { label: 'รายชื่อพนักงานทั้งหมด', route: '/portal/admin/employees/master/list' },
            { label: 'ข้อมูลครอบครัว', route: '/portal/admin/employees/master/family' },
            { label: 'ประวัติการทำงาน', route: '/portal/admin/employees/master/work-history' }
          ]
        }
      ]
    }
  ]
}
```

#### 2. Update Sidebar Component Logic

**Auto-select ESS as default**:
```typescript
private loadNavigationItems(): void {
  // ... existing code ...
  
  // Auto-select ESS (default) if available
  const essItem = this.navigationItems.find(item => item.id === 'ess');
  if (essItem && !this.selectedNavigationItem) {
    this.selectNavigationItem('ess');
  }
}
```

**Handle Level 2 Selection**:
```typescript
selectLevel2Item(level2Item: NavigationChild, parentNavItem: NavigationItem | null): void {
  this.selectedLevel2Item = level2Item;
  // Level 2 items ที่มี children จะแสดง Level 3-4 ใน Menu Panel
  // Level 2 items ที่ไม่มี children จะ navigate ไปยัง route
}
```

#### 3. Update Menu Panel Display

**Show Level 3-4 based on selection**:
- ถ้าเลือก Level 2 item → แสดง Level 3 items (children ของ Level 2)
- ถ้า Level 3 item มี children → แสดง Level 4 (accordion)

---

## 🛠️ Implementation Steps

### Step 1: Update Navigation Constants
- [ ] เพิ่มโครงสร้าง Level 2-4 ให้ชัดเจน
- [ ] เพิ่ม Company Management children (Level 3-4)
- [ ] เพิ่ม Personal Management children (Level 3-4)
- [ ] เพิ่มโมดูลอื่นๆ (Payroll, Time, Training, etc.)

### Step 2: Update Sidebar Component
- [ ] Auto-select ESS เป็น default
- [ ] ปรับ `selectLevel2Item()` ให้รองรับ children
- [ ] อัปเดต `getNavigationChildren()` ให้ return Level 3 items
- [ ] ปรับ breadcrumb ให้รองรับ 4 ระดับ

### Step 3: Update Menu Panel
- [ ] แสดง Level 3 items เมื่อเลือก Level 2
- [ ] ใช้ Nested Menu Accordion สำหรับ Level 3-4
- [ ] อัปเดต breadcrumb path

### Step 4: Testing
- [ ] ทดสอบ auto-select ESS
- [ ] ทดสอบ navigation 4 ระดับ
- [ ] ทดสอบ expand/collapse accordion

---

## 📐 Detailed Structure

### Level 1 → Level 2 (Rail)

```
Rail (Left)
├─ Home (icon)
├─ ESS (icon) ← Default selected
└─ Admin (icon) ← Show if has permission
```

### Level 2 → Level 3 (Rail when Admin selected)

```
Rail (Left)
├─ ← Back (กลับไป Level 1)
├─ Company Management (icon)
├─ Personal Management (icon)
├─ Payroll Management (icon)
├─ Time Management (icon)
└─ ... (other modules)
```

### Level 3 → Level 4 (Menu Panel)

```
Menu Panel (Right)
├─ Company Management (selected)
│  ├─ ข้อมูลบริษัท ▼
│  │  ├─ ข้อมูลพื้นฐาน
│  │  └─ โครงสร้างองค์กร
│  ├─ แผนก
│  └─ ตำแหน่งงาน
```

---

## 🎯 Key Changes Needed

1. **Auto-select ESS**: ปรับ `loadNavigationItems()` ให้ auto-select ESS
2. **Level 2 Display**: แสดง Level 2 items ใน Rail เมื่อเลือก Admin
3. **Level 3-4 Display**: แสดง Level 3-4 ใน Menu Panel เมื่อเลือก Level 2
4. **Navigation Flow**: รองรับ navigation ระหว่าง 4 ระดับ

---

**Maintainer**: Development Team  
**Last Updated**: 2024-12-20

