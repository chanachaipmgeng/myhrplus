# 🔄 Translation Migration Guide

**วันที่**: 2024-12-29  
**สถานะ**: 📋 **Implementation Guide**

---

## 📋 ภาพรวม

คู่มือนี้จะช่วยคุณ migrate translation keys จากโครงสร้างเดิมไปเป็นโครงสร้างใหม่ที่ใช้ namespace และลดการซ้ำซ้อน

---

## 🎯 เป้าหมาย

1. **ลดการซ้ำซ้อน**: จาก ~3,500 lines เป็น ~1,500-2,000 lines
2. **โครงสร้างชัดเจน**: ใช้ namespace pattern สม่ำเสมอ
3. **Type Safety**: ใช้ constants แทน string literals
4. **ง่ายต่อการ maintain**: จัดกลุ่มตาม features และ common

---

## 📝 ขั้นตอนการ Migration

### Step 1: สร้าง Common Keys Structure

#### 1.1 เพิ่ม Common Keys ใน JSON Files

**th.json**:
```json
{
  "common": {
    "actions": {
      "add": "เพิ่ม",
      "addNew": "เพิ่มใหม่",
      "edit": "แก้ไข",
      "delete": "ลบ",
      "save": "บันทึก",
      "cancel": "ยกเลิก",
      "close": "ปิด",
      "confirm": "ยืนยัน",
      "search": "ค้นหา",
      "reset": "รีเซ็ต",
      "export": "ส่งออก",
      "import": "นำเข้า",
      "download": "ดาวน์โหลด",
      "upload": "อัพโหลด",
      "select": "เลือก",
      "selectAll": "เลือกทั้งหมด",
      "clear": "ล้าง",
      "ok": "ตกลง",
      "yes": "ใช่",
      "no": "ไม่",
      "retry": "ลองใหม่",
      "complete": "เสร็จสิ้น",
      "previous": "ก่อนหน้า",
      "next": "ถัดไป",
      "optional": "ไม่บังคับ",
      "moreDetails": "รายละเอียดเพิ่มเติม"
    },
    "status": {
      "active": "ใช้งาน",
      "inactive": "ไม่ใช้งาน",
      "pending": "รอดำเนินการ",
      "approved": "อนุมัติแล้ว",
      "rejected": "ปฏิเสธ",
      "draft": "ร่าง",
      "published": "เผยแพร่"
    },
    "messages": {
      "success": {
        "save": "บันทึกข้อมูลสำเร็จ",
        "delete": "ลบข้อมูลสำเร็จ",
        "update": "อัพเดทข้อมูลสำเร็จ",
        "create": "สร้างข้อมูลสำเร็จ"
      },
      "error": {
        "save": "บันทึกข้อมูลไม่สำเร็จ",
        "delete": "ลบข้อมูลไม่สำเร็จ",
        "load": "โหลดข้อมูลไม่สำเร็จ",
        "network": "เกิดข้อผิดพลาดจากเครือข่าย"
      },
      "confirm": {
        "delete": "คุณต้องการลบข้อมูลนี้หรือไม่?",
        "cancel": "คุณต้องการยกเลิกการทำงานนี้หรือไม่?",
        "unsaved": "คุณมีข้อมูลที่ยังไม่ได้บันทึก ต้องการออกจากหน้านี้หรือไม่?"
      }
    },
    "validation": {
      "required": "กรุณาระบุ{{field}}",
      "email": "รูปแบบอีเมลไม่ถูกต้อง",
      "minLength": "{{field}}ต้องมีอย่างน้อย{{min}}ตัวอักษร",
      "maxLength": "{{field}}ต้องไม่เกิน{{max}}ตัวอักษร",
      "pattern": "รูปแบบ{{field}}ไม่ถูกต้อง"
    },
    "labels": {
      "no": "ลำดับที่",
      "employeeId": "รหัสพนักงาน",
      "name": "ชื่อ",
      "surname": "นามสกุล",
      "nameSurname": "ชื่อ-นามสกุล",
      "detail": "รายละเอียด",
      "status": "สถานะ",
      "actions": "การดำเนินการ",
      "createdDate": "วันที่สร้าง",
      "updatedDate": "วันที่อัพเดท",
      "errorCode": "รหัสข้อผิดพลาด"
    }
  }
}
```

**en.json**:
```json
{
  "common": {
    "actions": {
      "add": "Add",
      "addNew": "Add New",
      "edit": "Edit",
      "delete": "Delete",
      "save": "Save",
      "cancel": "Cancel",
      "close": "Close",
      "confirm": "Confirm",
      "search": "Search",
      "reset": "Reset",
      "export": "Export",
      "import": "Import",
      "download": "Download",
      "upload": "Upload",
      "select": "Select",
      "selectAll": "Select All",
      "clear": "Clear",
      "ok": "OK",
      "yes": "Yes",
      "no": "No",
      "retry": "Retry",
      "complete": "Complete",
      "previous": "Previous",
      "next": "Next",
      "optional": "Optional",
      "moreDetails": "More Details"
    },
    "status": {
      "active": "Active",
      "inactive": "Inactive",
      "pending": "Pending",
      "approved": "Approved",
      "rejected": "Rejected",
      "draft": "Draft",
      "published": "Published"
    },
    "messages": {
      "success": {
        "save": "Data saved successfully",
        "delete": "Data deleted successfully",
        "update": "Data updated successfully",
        "create": "Data created successfully"
      },
      "error": {
        "save": "Failed to save data",
        "delete": "Failed to delete data",
        "load": "Failed to load data",
        "network": "Network error occurred"
      },
      "confirm": {
        "delete": "Are you sure you want to delete this item?",
        "cancel": "Are you sure you want to cancel this operation?",
        "unsaved": "You have unsaved changes. Do you want to leave this page?"
      }
    },
    "validation": {
      "required": "Please specify {{field}}",
      "email": "Invalid email format",
      "minLength": "{{field}} must be at least {{min}} characters",
      "maxLength": "{{field}} must not exceed {{max}} characters",
      "pattern": "Invalid {{field}} format"
    },
    "labels": {
      "no": "No.",
      "employeeId": "Employee ID",
      "name": "Name",
      "surname": "Surname",
      "nameSurname": "Name-Surname",
      "detail": "Detail",
      "status": "Status",
      "actions": "Actions",
      "createdDate": "Created Date",
      "updatedDate": "Updated Date",
      "errorCode": "Error Code"
    }
  }
}
```

### Step 2: Migrate Components

#### 2.1 เปลี่ยนจาก Flat Keys เป็น Namespaced Keys

**Before**:
```typescript
// Component
this.translate.get('Save');
this.translate.get('Delete');
this.translate.get('Detail');

// Template
<button>{{ 'Save' | translate }}</button>
<button>{{ 'Delete' | translate }}</button>
```

**After**:
```typescript
// Component
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.SAVE);
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.DELETE);
this.translate.get(TRANSLATION_KEYS.COMMON.LABELS.DETAIL);

// Template
<button>{{ TRANSLATION_KEYS.COMMON.ACTIONS.SAVE | translate }}</button>
<button>{{ TRANSLATION_KEYS.COMMON.ACTIONS.DELETE | translate }}</button>
```

#### 2.2 ใช้ Common Keys ใน Feature Components

**Before**:
```typescript
// company-division-list.component.ts
this.translate.get('company.division.title');
this.translate.get('Add');
this.translate.get('Edit');
this.translate.get('Delete');
```

**After**:
```typescript
// company-division-list.component.ts
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

this.translate.get(TRANSLATION_KEYS.FEATURES.COMPANY.ENTITIES.DIVISION.TITLE);
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.ADD);
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.EDIT);
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.DELETE);
```

### Step 3: ลบ Duplicate Keys

#### 3.1 ระบุ Duplicate Keys

```bash
# ใช้ script นี้เพื่อหา duplicate keys
# (ต้องสร้าง script เอง)
node scripts/find-duplicate-translation-keys.js
```

#### 3.2 ลบ Duplicate Keys จาก JSON

**Before**:
```json
{
  "Save": "บันทึก",
  "Delete": "ลบ",
  "Detail": "รายละเอียด",
  "common.save": "บันทึก",
  "common.delete": "ลบ",
  "common.detail": "รายละเอียด"
}
```

**After**:
```json
{
  "common": {
    "actions": {
      "save": "บันทึก",
      "delete": "ลบ"
    },
    "labels": {
      "detail": "รายละเอียด"
    }
  }
}
```

### Step 4: จัดกลุ่ม Feature Keys

#### 4.1 สร้าง Feature Structure

**Before**:
```json
{
  "companyDivisionTitle": "ฝ่าย",
  "companyDivisionAdd": "เพิ่มฝ่าย",
  "companyDivisionEdit": "แก้ไขฝ่าย",
  "companyDepartmentTitle": "แผนก",
  "companyDepartmentAdd": "เพิ่มแผนก"
}
```

**After**:
```json
{
  "features": {
    "company": {
      "entities": {
        "division": {
          "title": "ฝ่าย",
          "add": "เพิ่มฝ่าย",
          "edit": "แก้ไขฝ่าย"
        },
        "department": {
          "title": "แผนก",
          "add": "เพิ่มแผนก"
        }
      }
    }
  }
}
```

---

## 🔍 การตรวจสอบ

### 1. ตรวจสอบ Duplicate Keys

```typescript
// scripts/check-duplicate-keys.ts
import * as fs from 'fs';
import * as path from 'path';

function checkDuplicates(filePath: string): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(content);
  const keys: string[] = [];
  const duplicates: string[] = [];

  function extractKeys(obj: any, prefix = ''): void {
    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object') {
        extractKeys(obj[key], fullKey);
      } else {
        if (keys.includes(fullKey)) {
          duplicates.push(fullKey);
        } else {
          keys.push(fullKey);
        }
      }
    }
  }

  extractKeys(json);

  if (duplicates.length > 0) {
    console.error('Duplicate keys found:', duplicates);
    process.exit(1);
  } else {
    console.log('No duplicate keys found!');
  }
}

checkDuplicates(path.join(__dirname, '../src/assets/i18n/th.json'));
checkDuplicates(path.join(__dirname, '../src/assets/i18n/en.json'));
```

### 2. ตรวจสอบ Missing Keys

```typescript
// scripts/check-missing-keys.ts
import * as fs from 'fs';
import * as path from 'path';

function checkMissingKeys(): void {
  const thContent = fs.readFileSync(
    path.join(__dirname, '../src/assets/i18n/th.json'),
    'utf-8'
  );
  const enContent = fs.readFileSync(
    path.join(__dirname, '../src/assets/i18n/en.json'),
    'utf-8'
  );

  const thJson = JSON.parse(thContent);
  const enJson = JSON.parse(enContent);

  function extractKeys(obj: any, prefix = ''): string[] {
    const keys: string[] = [];
    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object') {
        keys.push(...extractKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    return keys;
  }

  const thKeys = extractKeys(thJson);
  const enKeys = extractKeys(enJson);

  const missingInEn = thKeys.filter(key => !enKeys.includes(key));
  const missingInTh = enKeys.filter(key => !thKeys.includes(key));

  if (missingInEn.length > 0) {
    console.warn('Keys missing in en.json:', missingInEn);
  }
  if (missingInTh.length > 0) {
    console.warn('Keys missing in th.json:', missingInTh);
  }

  if (missingInEn.length === 0 && missingInTh.length === 0) {
    console.log('All keys are present in both files!');
  }
}

checkMissingKeys();
```

---

## 📊 Migration Progress

### Phase 1: Common Keys ✅
- [x] สร้าง `translation-keys.constant.ts`
- [ ] เพิ่ม common keys ใน JSON files
- [ ] Migrate existing common keys
- [ ] Test components

### Phase 2: Feature Keys ⏳
- [ ] จัดกลุ่ม feature keys
- [ ] Migrate existing feature keys
- [ ] Test features

### Phase 3: Menu Keys ⏳
- [ ] จัดกลุ่ม menu keys
- [ ] Migrate existing menu keys
- [ ] Test menu

### Phase 4: Cleanup ⏳
- [ ] ลบ duplicate keys
- [ ] ลบ unused keys
- [ ] Validate all keys
- [ ] Update documentation

---

## 💡 Tips & Best Practices

### 1. ใช้ Constants แทน String Literals

```typescript
// ❌ Bad
this.translate.get('common.actions.save');

// ✅ Good
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.SAVE);
```

### 2. ใช้ Common Keys เมื่อเป็นไปได้

```typescript
// ❌ Bad - Duplicate
"company.save": "บันทึก",
"personal.save": "บันทึก",
"ta.save": "บันทึก"

// ✅ Good - Reuse
TRANSLATION_KEYS.COMMON.ACTIONS.SAVE
```

### 3. ใช้ Namespace Pattern

```typescript
// ❌ Bad - Flat structure
"companyDivisionTitle": "ฝ่าย",
"companyDivisionAdd": "เพิ่มฝ่าย"

// ✅ Good - Nested structure
"features.company.entities.division.title": "ฝ่าย",
"features.company.entities.division.add": "เพิ่มฝ่าย"
```

### 4. ใช้ Type Safety

```typescript
// ✅ Good - Type-safe
const key: keyof typeof TRANSLATION_KEYS.COMMON.ACTIONS = 'SAVE';
this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS[key]);
```

---

**Last Updated**: 2024-12-29  
**Status**: 📋 Ready for Implementation

