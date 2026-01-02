# Welfare Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~25 screens (excluding reports)
- **Main Categories**: 4 categories
- **Active Menus**: 20+ menu items
- **Module Code**: WE (Welfare)
- **Base Path**: `hrAppWeb.war/WELFARE/`

## Summary Statistics
- **Master Data (Setup)**: 12 screens
- **Nursing Room**: 4 screens
- **Requisition of Welfare**: 4 screens
- **History of Welfare**: 2 screens
- **Process of Welfare**: 2 screens
- **Webboard**: 3 screens
- **Employee**: 6 screens

---

## 1. Human Resources (WE01A)

### 1.1 Master (WE01A01) - ทะเบียนหลัก

#### 1.1.1 Budget group (WEL034)
- **Menu Name (Thai)**: กลุ่มงบประมาณ
- **Menu Name (English)**: Budget group
- **JSP Files**: 
  - `WEL034.jsp` - Main screen
- **Code**: WEL034
- **Group**: WE01A0101

#### 1.1.2 Budget of year (WEL011)
- **Menu Name (Thai)**: กำหนดปีงบประมาณของสวัสดิการ
- **Menu Name (English)**: Budget of year
- **JSP Files**: 
  - `WEL011.jsp` - Main screen
- **Code**: WEL011
- **Group**: WE01A0102

#### 1.1.3 Location group of welfare (WEL044)
- **Menu Name (Thai)**: ทะเบียนกลุ่มสถานที่ใช้สวัสดิการ
- **Menu Name (English)**: Location group of welfare
- **JSP Files**: 
  - `WEL044.jsp` - Main screen
- **Code**: WEL044
- **Group**: WE01A0111

#### 1.1.4 Location of welfare (WEL004)
- **Menu Name (Thai)**: ทะเบียนสถานที่ใช้สวัสดิการ
- **Menu Name (English)**: Location of welfare
- **JSP Files**: 
  - `WEL004.jsp` - Main screen
- **Code**: WEL004
- **Group**: WE01A0103

#### 1.1.5 Disease - accident (WEL005)
- **Menu Name (Thai)**: ทะเบียนโรค/อุบัติเหตุ
- **Menu Name (English)**: Disease - accident
- **JSP Files**: 
  - `WEL005.jsp` - Main screen
- **Code**: WEL005
- **Group**: WE01A0104

#### 1.1.6 Disease - accident group (WEL006)
- **Menu Name (Thai)**: ทะเบียนกลุ่มโรค/อุบัติเหตุ
- **Menu Name (English)**: Disease - accident group
- **JSP Files**: 
  - `WEL006.jsp` - Main screen
- **Code**: WEL006
- **Group**: WE01A0105

#### 1.1.7 Reference document (WEL018)
- **Menu Name (Thai)**: ทะเบียนเอกสารอ้างอิง
- **Menu Name (English)**: Reference document
- **JSP Files**: 
  - `WEL018.jsp` - Main screen
- **Code**: WEL018
- **Group**: WE01A0106

#### 1.1.8 Reference document group (WEL019)
- **Menu Name (Thai)**: ทะเบียนกลุ่มเอกสารอ้างอิง
- **Menu Name (English)**: Reference document group
- **JSP Files**: 
  - `WEL019.jsp` - Main screen
- **Code**: WEL019
- **Group**: WE01A0107

#### 1.1.9 Welfare type (WEL020)
- **Menu Name (Thai)**: ประเภทสวัสดิการ
- **Menu Name (English)**: Welfare type
- **JSP Files**: 
  - `WEL020.jsp` - Main screen
- **Code**: WEL020
- **Group**: WE01A0108

#### 1.1.10 Welfare group (WEL012)
- **Menu Name (Thai)**: กลุ่มสวัสดิการ
- **Menu Name (English)**: Welfare group
- **JSP Files**: 
  - `WEL012.jsp` - Main screen
- **Code**: WEL012
- **Group**: WE01A0109

#### 1.1.11 Welfare config (WEL001)
- **Menu Name (Thai)**: กำหนดนโยบาย
- **Menu Name (English)**: Welfare config
- **JSP Files**: 
  - `WEL001.jsp` - Main screen
- **Code**: WEL001
- **Group**: WE01A0110

#### 1.1.12 Welfare Table (WEL107)
- **Menu Name (Thai)**: ทะเบียนงบประมาณ
- **Menu Name (English)**: Welfare Table
- **JSP Files**: 
  - `WEL107.jsp` - Main screen
- **Code**: WEL107
- **Group**: WE01A0112

---

### 1.2 Nursing Room (WE05A) - ห้องพยาบาล

#### 1.2.1 MedicineType (WEL105_TYT)
- **Menu Name (Thai)**: ทะเบียนประเภทยา
- **Menu Name (English)**: MedicineType
- **JSP Files**: 
  - `WEL105_TYT.jsp` - Main screen
- **Code**: WEL105_TYT
- **Group**: WE05A01
- **Note**: TYT variant (company-specific)

#### 1.2.2 MedicineType (WEL104_TYT)
- **Menu Name (Thai)**: ทะเบียนประเภทยา
- **Menu Name (English)**: MedicineType
- **JSP Files**: 
  - `WEL104_TYT.jsp` - Main screen
- **Code**: WEL104_TYT
- **Group**: WE05A02
- **Note**: TYT variant (company-specific)

#### 1.2.3 Diagnosis Information (WEL099_TYT)
- **Menu Name (Thai)**: บันทึกใบตรวจโรค
- **Menu Name (English)**: Diagnosis Information
- **JSP Files**: 
  - `WEL099_TYT.jsp` - Main screen
- **Code**: WEL099_TYT
- **Group**: WE05A03
- **Note**: TYT variant (company-specific)

#### 1.2.4 History of Cure (WEL102_TYT)
- **Menu Name (Thai)**: ประวัติการรักษาพยาบาล
- **Menu Name (English)**: History of Cure
- **JSP Files**: 
  - `WEL102_TYT.jsp` - Main screen
- **Code**: WEL102_TYT
- **Group**: WE05A04
- **Note**: TYT variant (company-specific)

---

### 1.3 Requisition of welfare (WE01A02) - คำร้องขอสวัสดิการ

#### 1.3.1 Requisition of welfare (WEL002)
- **Menu Name (Thai)**: คำร้องขอสวัสดิการ
- **Menu Name (English)**: Requisition of welfare
- **JSP Files**: 
  - `WEL002.jsp` - Main screen
- **Code**: WEL002
- **Group**: WE01A0201

#### 1.3.2 Rollback requisition (WEL051)
- **Menu Name (Thai)**: คำร้องขอสวัสดิการที่มีปัญหา
- **Menu Name (English)**: Rollback requisition
- **JSP Files**: 
  - `WEL051.jsp` - Main screen
- **Code**: WEL051
- **Group**: WE01A0204

#### 1.3.3 Approve payment (WEL030)
- **Menu Name (Thai)**: ยืนยันการจ่ายสวัสดิการ
- **Menu Name (English)**: Approve payment
- **JSP Files**: 
  - `WEL030.jsp` - Main screen
- **Code**: WEL030
- **Group**: WE01A0202

#### 1.3.4 Addition welfare history (WEL029)
- **Menu Name (Thai)**: เพิ่มประวัติการขอสวัสดิการของพนักงาน
- **Menu Name (English)**: Addition welfare history
- **JSP Files**: 
  - `WEL029.jsp` - Main screen
- **Code**: WEL029
- **Group**: WE01A0203

---

### 1.4 History of welfare (WE01A03) - ประวัติการใช้สวัสดิการ

#### 1.4.1 History of welfare in budget this year (WEL003)
- **Menu Name (Thai)**: ประวัติการขอสวัสดิการงบประมาณปัจจุบัน
- **Menu Name (English)**: History of welfare in budget this year
- **JSP Files**: 
  - `WEL003.jsp` - Main screen
- **Code**: WEL003
- **Group**: WE01A0301

#### 1.4.2 History of welfare in budget year ago (WEL041)
- **Menu Name (Thai)**: ประวัติการขอสวัสดิการงบประมาณที่ผ่านมา
- **Menu Name (English)**: History of welfare in budget year ago
- **JSP Files**: 
  - `WEL041.jsp` - Main screen
- **Code**: WEL041
- **Group**: WE01A0302

---

### 1.5 Process of welfare (WE01A04) - ประมวลผลสวัสดิการ

#### 1.5.1 Move to history (WEL043)
- **Menu Name (Thai)**: ย้ายข้อมูลการทำงานลงประวัติ
- **Menu Name (English)**: Move to history
- **JSP Files**: 
  - `WEL043.jsp` - Main screen
- **Code**: WEL043
- **Group**: WE01A0401

#### 1.5.2 Process Status (WEL045)
- **Menu Name (Thai)**: สถานะการประมวลผล
- **Menu Name (English)**: Process Status
- **JSP Files**: 
  - `WEL045.jsp` - Main screen
- **Code**: WEL045
- **Group**: WE01A0402

---

## 2. Webboard (WE02A) - กระดานข่าว

### 2.1 Webborad Type (WET001)
- **Menu Name (Thai)**: ประเภทกระทู้
- **Menu Name (English)**: Webborad Type
- **JSP Files**: 
  - `WET001.jsp` - Main screen
- **Code**: WET001
- **Group**: WE02A01

### 2.2 Webborad List (WEL026)
- **Menu Name (Thai)**: กระดานข่าว
- **Menu Name (English)**: Webborad List
- **JSP Files**: 
  - `WEL026.jsp` - Main screen
- **Code**: WEL026
- **Group**: WE02A03

### 2.3 New Webboard (WEL027)
- **Menu Name (Thai)**: สร้างกระทู้ใหม่
- **Menu Name (English)**: New Webboard
- **JSP Files**: 
  - `WEL027.jsp` - Main screen
- **Code**: WEL027
- **Group**: WE02A02

---

## 3. Employee (WE03A) - พนักงาน

### 3.1 Welfare list (Wel014)
- **Menu Name (Thai)**: รายการสวัสดิการ
- **Menu Name (English)**: Welfare list
- **JSP Files**: 
  - `WEL014.jsp` - Main screen
- **Code**: Wel014
- **Group**: WE03A02

### 3.2 Webboard of requisition (WEL028)
- **Menu Name (Thai)**: กระทู้เอกสารคำร้อง
- **Menu Name (English)**: Webboard of requisition
- **JSP Files**: 
  - `WEL028.jsp` - Main screen
- **Code**: WEL028
- **Group**: WE03A01

### 3.3 Requisition of welfare (WEL022)
- **Menu Name (Thai)**: คำร้องขอสวัสดิการ
- **Menu Name (English)**: Requisition of welfare
- **JSP Files**: 
  - `WEL022.jsp` - Main screen
- **Code**: WEL022
- **Group**: WE03A03

### 3.4 Edit requisition of welfare (WEL048)
- **Menu Name (Thai)**: แก้ไขใบคำร้อง
- **Menu Name (English)**: Edit requisition of welfare
- **JSP Files**: 
  - `WEL048.jsp` - Main screen
- **Code**: WEL048
- **Group**: WE03A05

### 3.5 History of welfare in budget this year (WEL016)
- **Menu Name (Thai)**: ประวัติการใช้สวัสดิการปีปัจุบัน
- **Menu Name (English)**: History of welfare in budget this year
- **JSP Files**: 
  - `WEL016.jsp` - Main screen
- **Code**: WEL016
- **Group**: WE03A04

### 3.6 History of welfare in budget year ago (WEL050)
- **Menu Name (Thai)**: ประวัติการใช้สวัสดิการปีที่ผ่านมา
- **Menu Name (English)**: History of welfare in budget year ago
- **JSP Files**: 
  - `WEL050.jsp` - Main screen
- **Code**: WEL050
- **Group**: WE03A06

---

## Additional Files

### Module Index
- `WEL_INDEX.jsp` - Main module index page (if exists)

### Other Welfare Files
- `WEL*.jsp` - Welfare transaction and setup screens
- `WET*.jsp` - Webboard-related screens
- `WELR*.jsp` - Welfare report screens (excluded from this inventory)
- `WELRH*.jsp` - Welfare history report screens (excluded from this inventory)

---

## Notes

1. **Company-Specific Variants**: Some screens have company-specific variants (e.g., TYT - company-specific)
2. **Budget Management**: Comprehensive budget tracking and management system
3. **Webboard Integration**: Integration with webboard system for requisition discussions
4. **Disease/Accident Tracking**: Tracking of diseases and accidents for welfare claims
5. **Location Management**: Management of welfare usage locations
6. **Reference Document Management**: Management of reference documents for welfare claims
7. **Nursing Room Module**: Separate module for nursing room management (TYT variant)
8. **History Tracking**: Separate tracking for current year and past year budgets
9. **Process Management**: Data processing and status tracking
10. **Employee Self-Service**: Employee-facing screens for welfare requisition and history

---

## Migration Considerations

### High Priority Screens
- Master Data screens (WEL001, WEL004, WEL005, WEL006, WEL011, WEL012, WEL018, WEL019, WEL020, WEL034, WEL044, WEL107)
- Requisition screens (WEL002, WEL022, WEL030, WEL048, WEL051)
- History screens (WEL003, WEL016, WEL041, WEL050)

### Medium Priority Screens
- Process screens (WEL043, WEL045)
- Webboard screens (WET001, WEL026, WEL027, WEL028)
- Employee screens (WEL014, WEL022, WEL048)

### Lower Priority Screens
- Nursing Room screens (WEL099_TYT, WEL102_TYT, WEL104_TYT, WEL105_TYT) - Company-specific variant
- Addition welfare history (WEL029)

### Technical Notes
- Many screens use the CSC library framework
- Company-specific variants (TYT) require careful handling
- Budget year management and tracking
- Integration with webboard system
- Disease/accident classification and tracking
- Location-based welfare management
- Reference document management
- Multi-language support (Thai/English) built into many screens
- Employee self-service functionality
- Welfare requisition workflow
- Payment approval process
- Data processing and history migration
- Budget allocation and tracking
- Welfare type and group management

---

## Screen Categories Summary

### Master Data (Setup) - 12 screens
1. WEL034 - Budget group
2. WEL011 - Budget of year
3. WEL044 - Location group of welfare
4. WEL004 - Location of welfare
5. WEL005 - Disease - accident
6. WEL006 - Disease - accident group
7. WEL018 - Reference document
8. WEL019 - Reference document group
9. WEL020 - Welfare type
10. WEL012 - Welfare group
11. WEL001 - Welfare config
12. WEL107 - Welfare Table

### Nursing Room - 4 screens
1. WEL105_TYT - MedicineType (variant 1)
2. WEL104_TYT - MedicineType (variant 2)
3. WEL099_TYT - Diagnosis Information
4. WEL102_TYT - History of Cure

### Requisition - 4 screens
1. WEL002 - Requisition of welfare (HR)
2. WEL051 - Rollback requisition
3. WEL030 - Approve payment
4. WEL029 - Addition welfare history

### History - 2 screens
1. WEL003 - History of welfare in budget this year (HR)
2. WEL041 - History of welfare in budget year ago (HR)

### Process - 2 screens
1. WEL043 - Move to history
2. WEL045 - Process Status

### Webboard - 3 screens
1. WET001 - Webboard Type
2. WEL026 - Webboard List
3. WEL027 - New Webboard

### Employee - 6 screens
1. WEL014 - Welfare list
2. WEL028 - Webboard of requisition
3. WEL022 - Requisition of welfare
4. WEL048 - Edit requisition of welfare
5. WEL016 - History of welfare in budget this year
6. WEL050 - History of welfare in budget year ago

---

## Total: 25 screens (excluding reports)

