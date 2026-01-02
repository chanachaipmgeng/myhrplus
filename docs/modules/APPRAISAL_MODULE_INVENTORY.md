# Appraisal Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~60+ screens (excluding reports)
- **Main Categories**: 10 categories
- **Active Menus**: 50+ menu items
- **Module Code**: AS (Appraisal)
- **Base Path**: `hrAppWeb.war/APPRAISAL/`

## Summary Statistics
- **Appraisal Type**: 1 screen
- **Appraisal Grade**: 5 screens
- **Appraisal Topic**: 2 screens
- **Appraisal Form**: 1 screen
- **Appraisal Form Type**: 1 screen
- **Appraisal Document**: 9 screens
- **Other Data Setup**: 7 screens
- **Appraisal Period**: 4 screens
- **Admin**: 11 screens
- **OKR Appraisal**: 10 screens
- **Terms Of Use**: 1 screen

---

## 1. Appraisal Type (AS03A) - ทะเบียนประเภทการประเมิน

### 1.1 Appraisal Type Table (AS010)
- **Menu Name (Thai)**: ทะเบียนประเภทการประเมิน
- **Menu Name (English)**: Appraisal Type Table
- **JSP Files**: 
  - `AS010.jsp` - Main screen
- **Code**: AS010
- **Group**: AS03A01
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 2. Appraisal Grade (AS04A) - ทะเบียนเกรดประเมินผล

### 2.1 Appraisal Grade (AS015)
- **Menu Name (Thai)**: ทะเบียนกลุ่มเกรด
- **Menu Name (English)**: Appraisal Grade
- **JSP Files**: 
  - `AS015.jsp` - Main screen
- **Code**: AS015
- **Group**: AS04A01

### 2.2 Grade Table (AS016)
- **Menu Name (Thai)**: ทะเบียนเกรด
- **Menu Name (English)**: Grade Table
- **JSP Files**: 
  - `AS016.jsp` - Main screen
- **Code**: AS016
- **Group**: AS04A02

### 2.3 Score Deduct Criteria (AS020)
- **Menu Name (Thai)**: เกณฑ์การหักคะแนน
- **Menu Name (English)**: Score Deduct Criteria
- **JSP Files**: 
  - `AS020.jsp` - Main screen
- **Code**: AS020
- **Group**: AS04A04
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 2.4 Yearly Salary Increase (AS04AA) - ทะเบียนกลุ่มเกรดปรับเงินเดือน

#### 2.4.1 Grop Grade Salary adjustment (AS018)
- **Menu Name (Thai)**: ทะเบียนกลุ่มการปรับเงินเดือน
- **Menu Name (English)**: Grop Grade Salary adjustment
- **JSP Files**: 
  - `AS018.jsp` - Main screen
- **Code**: AS018
- **Group**: AS04AA01
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 2.4.2 Grade Salary adjustment (AS019)
- **Menu Name (Thai)**: ทะเบียนเกรดการปรับเงินเดือน
- **Menu Name (English)**: Grade Salary adjustment
- **JSP Files**: 
  - `AS019.jsp` - Main screen
- **Code**: AS019
- **Group**: AS04AA02
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 3. Appraisal Topic (AS05A) - ทะเบียนหัวข้อประเมินผล

### 3.1 Appraisal Category Table (AS002)
- **Menu Name (Thai)**: ทะเบียนกลุ่มหัวข้อประเมินผล
- **Menu Name (English)**: Appraisal Category Table
- **JSP Files**: 
  - `AS002.jsp` - Main screen
- **Code**: AS002
- **Group**: AS05A01
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 3.2 Appraisal Topic Table (AS030)
- **Menu Name (Thai)**: หัวข้อประเมินผล
- **Menu Name (English)**: Appraisal Topic Table
- **JSP Files**: 
  - `AS030.jsp` - Main screen
  - `AS000.jsp` - Related screen
  - `AS17_1.jsp` - Related screen
  - `AS17_2.jsp` - Related screen
  - `AS031.jsp` - Related screen
  - `AS032.jsp` - Related screen
- **Code**: AS030
- **Group**: AS05A02
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 4. Appraisal Form (AS06A) - ทะเบียนแบบฟอร์มประเมินผล

### 4.1 Appraisal Form Table (AS003)
- **Menu Name (Thai)**: ทะเบียนสร้างแบบฟอร์มประเมินผล
- **Menu Name (English)**: Appraisal Form Table
- **JSP Files**: 
  - `AS003.jsp` - Main screen
  - `AS03_1.jsp` - Related screen
  - `AS03HELP_2.jsp` - Help screen
  - `AS03HELP_4.jsp` - Help screen
  - `AS03HELP_3.jsp` - Help screen
- **Code**: AS003
- **Group**: AS06A01
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 5. Appraisal Form Type (AS08A) - ทะเบียนประเภทฟอร์มการประเมิน

### 5.1 Appraisal Form Type Table (AS011)
- **Menu Name (Thai)**: ทะเบียนประเภทฟอร์มการประเมิน
- **Menu Name (English)**: Appraisal Form Type Table
- **JSP Files**: 
  - `AS011.jsp` - Main screen
- **Code**: AS011
- **Group**: AS08A01
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 6. Appraisal Document (AS07A) - ทะเบียนเอกสารประเมินผล

### 6.1 Define Approvor (process) (ASP801)
- **Menu Name (Thai)**: กำหนดผู้อนุมัติเอกสารประเมินผล (process)
- **Menu Name (English)**: Define Approvor (process)
- **JSP Files**: 
  - `ASP801.jsp` - Main screen
- **Code**: ASP801
- **Group**: AS07A01
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 6.2 Define Approvor By Employeelist (process) (ASP802)
- **Menu Name (Thai)**: กำหนดผู้อนุมัติเอกสารประเมินผล ตามช่วงพนักงาน(process)
- **Menu Name (English)**: Define Approvor By Employeelist (process)
- **JSP Files**: 
  - `ASP802.jsp` - Main screen
- **Code**: ASP802
- **Group**: AS07A02
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 6.3 Config Approvor (AS300_KKB)
- **Menu Name (Thai)**: กำหนดผู้อนุมัติเอกสารประเมินผล
- **Menu Name (English)**: Config Approvor
- **JSP Files**: 
  - `AS300_KKB.jsp` - Main screen
- **Code**: AS300_KKB
- **Group**: AS07A03
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: KKB variant (company-specific)

### 6.4 Manage Appraisal Form (AS004_4_M)
- **Menu Name (Thai)**: จัดการเอกสารประเมินผล
- **Menu Name (English)**: Manage Appraisal Form
- **JSP Files**: 
  - `AS004_4_M.jsp` - Main screen
  - `AS09HELP2.jsp` - Help screen
- **Code**: AS004_4_M
- **Group**: AS07A05
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 6.5 Create Appraisal Form (AS004_4)
- **Menu Name (Thai)**: สร้างเอกสารประเมินผล
- **Menu Name (English)**: Create Appraisal Form
- **JSP Files**: 
  - `AS004_4.jsp` - Main screen
  - `AS09HELP2.jsp` - Help screen
  - `PRU086.jsp` - Related screen
- **Code**: AS004_4
- **Group**: AS07A04
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 6.6 Change Approvor (After Create Appraisal Documents) (AS300_KKB_AP)
- **Menu Name (Thai)**: เปลื่ยนผู้อนุมัติเอกสาร (หลังสร้างเอกสารแล้ว)
- **Menu Name (English)**: Change Approvor (After Create Appraisal Documents)
- **JSP Files**: 
  - `AS300_KKB_AP.jsp` - Main screen
- **Code**: AS300_KKB_AP
- **Group**: AS07A06
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: KKB variant (company-specific)

### 6.7 Change Approvor Many People (After Create Appraisal Documents) (AS300_CKT)
- **Menu Name (Thai)**: เปลื่ยนผู้อนุมัติเอกสารหลายคน (หลังสร้างเอกสารแล้ว)
- **Menu Name (English)**: Change Approvor Many People (After Create Appraisal Documents)
- **JSP Files**: 
  - `AS300_CKT.jsp` - Main screen
- **Code**: AS300_CKT
- **Group**: AS07A10
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: CKT variant (company-specific)

### 6.8 Appraisal Group (ASP803)
- **Menu Name (Thai)**: Appraisal Group
- **Menu Name (English)**: Appraisal Group
- **JSP Files**: 
  - `ASP803.jsp` - Main screen
  - `ASP803_PRO.jsp` - Process screen
- **Code**: ASP803
- **Group**: AS07A08
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

### 6.9 Manage Approver and Status Appraisal Document (AS105)
- **Menu Name (Thai)**: จัดการผู้อนุมัติและสถานะเอกสารประเมินผล
- **Menu Name (English)**: Manage Approver and Status Appraisal Document
- **JSP Files**: 
  - `AS105.jsp` - Main screen
- **Code**: AS10A12
- **Group**: AS10A12
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 6.10 Move appraisal data to history (ASP800)
- **Menu Name (Thai)**: บันทึกข้อมูลการประเมินเป็นประวัติ
- **Menu Name (English)**: Move appraisal data to history
- **JSP Files**: 
  - `ASP800.jsp` - Main screen
- **Code**: ASP800
- **Group**: AS07A07
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 7. Other Data Setup (AS11A) - จัดการข้อมูลอื่นๆ

### 7.1 MBO KPIs Category Setup (KPICATEGSETUP)
- **Menu Name (Thai)**: MBO กำหนด KPIs Category
- **Menu Name (English)**: MBO KPIs Category Setup
- **JSP Files**: 
  - `KPICATEGSETUP.jsp` - Main screen
- **Code**: KPICATEGSETUP
- **Group**: KPICATEGSETUP
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 7.2 MBO Objective Weighting (ASP100)
- **Menu Name (Thai)**: MBO กำหนดน้ำหนัก
- **Menu Name (English)**: MBO Objective Weighting
- **JSP Files**: 
  - `ASP100.jsp` - Main screen
- **Code**: ASP100
- **Group**: AS11A1
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 7.3 KPIs Objective Weighting (ASP101)
- **Menu Name (Thai)**: กำหนดน้ำหนัก KPIs
- **Menu Name (English)**: KPIs Objective Weighting
- **JSP Files**: 
  - `ASP101.jsp` - Main screen
- **Code**: ASP101
- **Group**: AS11A2
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 7.4 KPIs Category (AS102)
- **Menu Name (Thai)**: ข้อมูล KPIs
- **Menu Name (English)**: KPIs Category
- **JSP Files**: 
  - `AS102.jsp` - Main screen
  - `AS102CH.jsp` - Related screen
- **Code**: AS102
- **Group**: AS102
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 7.5 Grade History Detail (APS200)
- **Menu Name (Thai)**: ข้อมูลคะแนนประเมินย้อนหลัง
- **Menu Name (English)**: Grade History Detail
- **JSP Files**: 
  - `APS200.jsp` - Main screen
  - `APS200_1.jsp` - Related screen
- **Code**: APS200
- **Group**: AS10A8
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 7.6 Leave Record(.csv) (APS300)
- **Menu Name (Thai)**: สถิติการลางาน(.csv)
- **Menu Name (English)**: Leave Record(.csv)
- **JSP Files**: 
  - `APS300.jsp` - Main screen
  - `APS300_IMPORT.jsp` - Import screen
- **Code**: APS300
- **Group**: AS07A09
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

### 7.7 Define Approver By Admin(CKT) (APS301)
- **Menu Name (Thai)**: กำหนดรายชื่อพนักงานโดยตัวแทน(CKT)
- **Menu Name (English)**: Define Approver By Admin(CKT)
- **JSP Files**: 
  - `APS301.jsp` - Main screen
  - `APS301_1.jsp` - Related screen
- **Code**: APS301
- **Group**: AS07A11
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: CKT variant (company-specific)

---

## 8. Appraisal Period (AS12A) - รอบการประเมิน

### 8.1 Appraisal Annual Setting (UP_CONFIG)
- **Menu Name (Thai)**: กำหนดรอบการประเมินประจำปี
- **Menu Name (English)**: Appraisal Annual Setting
- **JSP Files**: 
  - `UP_CONFIG.jsp` - Main screen
- **Code**: AS10A10
- **Group**: AS10A10
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 8.2 Appraisal Period Setting (AS101)
- **Menu Name (Thai)**: กำหนดรอบการประเมินตามช่วงเวลา
- **Menu Name (English)**: Appraisal Period Setting
- **JSP Files**: 
  - `AS101.jsp` - Main screen
  - `AS101CH.jsp` - Related screen
- **Code**: AS101
- **Group**: AS101
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 8.3 Appraisal Period Setting By Business Unit (AS103)
- **Menu Name (Thai)**: กำหนดการประเมินตามหน่วยงาน
- **Menu Name (English)**: Appraisal Period Setting By Business Unit
- **JSP Files**: 
  - `AS103.jsp` - Main screen
- **Code**: AS103
- **Group**: AS103
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 8.4 360 Degree Assessment Schedule (APS_CONFIG)
- **Menu Name (Thai)**: กำหนดรอบการประเมินแบบ 360 องศา
- **Menu Name (English)**: 360 Degree Assessment Schedule
- **JSP Files**: 
  - `APS_CONFIG.jsp` - Main screen
- **Code**: AS10A3
- **Group**: AS10A3
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 9. Admin (AS10A) - Admin

### 9.1 Set Off-On Screen (SET_OFF_ON)
- **Menu Name (Thai)**: กำหนดเปิดปิดหน้าจอ
- **Menu Name (English)**: Set Off-On Screen
- **JSP Files**: 
  - `SET_OFF_ON.jsp` - Main screen
- **Code**: AS10A9
- **Group**: AS10A9
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 9.2 Status / E-Mail Remind Appraiser (ASP709)
- **Menu Name (Thai)**: สถานะ / ส่งเมล์แจ้งผู้ประเมิน
- **Menu Name (English)**: Status / E-Mail Remind Appraiser
- **JSP Files**: 
  - `ASP709.jsp` - Main screen
  - `ATTACH_FILE.jsp` - Attach file screen
- **Code**: AS10A5
- **Group**: AS10A5
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 9.3 Change Performance / Results Status (APP_EMV_HR_T)
- **Menu Name (Thai)**: แก้ไขสถานะ / ผลการประเมิน
- **Menu Name (English)**: Change Performance / Results Status
- **JSP Files**: 
  - `APP_EMV_HR_T.jsp` - Main screen
  - `APP_EMV_HR.jsp` - Related screen
  - `AS004_HR_T.jsp` - Related screen
  - `AS004_1_HR.jsp` - Related screen
  - `AS004_2_HR.jsp` - Related screen
  - `AS004_3_HR.jsp` - Related screen
  - `EMPVIEW/APP_EMV707.jsp` - Employee view screen
  - `EMPVIEW/APP_EMV706.jsp` - Employee view screen
- **Code**: AS10A1
- **Group**: AS10A1
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

### 9.4 KPI History Record (APP_EMV_HIS_KPI)
- **Menu Name (Thai)**: ประวัติการประเมินผล(KPI)
- **Menu Name (English)**: KPI History Record
- **JSP Files**: 
  - `APP_EMV_HIS_KPI.jsp` - Main screen
  - `EMPVIEW/APP_EMV707_HIS.jsp` - Employee view history screen
- **Code**: AS10A6
- **Group**: AS10A6
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 9.5 KC History Record (APP_EMV_HIS_KC)
- **Menu Name (Thai)**: ประวัติการประเมินผล(KC)
- **Menu Name (English)**: KC History Record
- **JSP Files**: 
  - `APP_EMV_HIS_KC.jsp` - Main screen
  - `EMPVIEW/APP_EMV706_HIS.jsp` - Employee view history screen
- **Code**: AS10A7
- **Group**: AS10A7
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 9.6 Setup Grade (AS036)
- **Menu Name (Thai)**: หน้าจอกำหนดเกรด
- **Menu Name (English)**: Setup Grade
- **JSP Files**: 
  - `AS036.jsp` - Main screen
- **Code**: AS10A4
- **Group**: AS10A4
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 9.7 Manage Performance 360 celsius (APS360)
- **Menu Name (Thai)**: จัดการการประเมินแบบ 360 องศา
- **Menu Name (English)**: Manage Performance 360 celsius
- **JSP Files**: 
  - `APS360.jsp` - Main screen
- **Code**: AS10A2
- **Group**: AS10A2
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 9.8 Delete Performance Results (Current) (APS_DEL360)
- **Menu Name (Thai)**: ลบข้อมูลการประเมินผลหน่วยงาน(ปัจจุบัน)
- **Menu Name (English)**: Delete Performance Results (Current)
- **JSP Files**: 
  - `APS_DEL360.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Code**: AS10A11
- **Group**: AS10A11
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 9.9 Determine the 360 degree evaluation group (ASP711)
- **Menu Name (Thai)**: กำหนดกลุ่มการประเมินแบบ 360 องศา
- **Menu Name (English)**: Determine the 360 degree evaluation group
- **JSP Files**: 
  - `ASP711.jsp` - Main screen
- **Code**: AS10A13
- **Group**: AS10A13
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 9.10 calculate Summary Report 360 Degree (ASP712)
- **Menu Name (Thai)**: คำนวณก่อนออกรายงานสรุปภาพรวมคะแนนประเมินผล 360 องศา
- **Menu Name (English)**: calculate Summary Report 360 Degree
- **JSP Files**: 
  - `ASP712.jsp` - Main screen
- **Code**: AS10A15
- **Group**: AS10A15
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 10. Objectives and Key Results Appraisal (AS50A) - การประเมินผลการปฏิบัติงาน OKR ประจำปี

### 10.1 Appraisal Type Table (AS03A001)
- **Menu Name (Thai)**: ทะเบียนประเภทการประเมิน
- **Menu Name (English)**: Appraisal Type Table
- **JSP Files**: 
  - `AS03A001.jsp` - Main screen
- **Code**: AS03A001
- **Group**: AS03A
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 10.2 Define Approver (AS07A001)
- **Menu Name (Thai)**: กำหนดผู้อนุมัติเอกสารประเมินผล
- **Menu Name (English)**: Define Approver
- **JSP Files**: 
  - `AS07A001.jsp` - Main screen
- **Code**: AS07A001
- **Group**: AS07A
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 10.3 Create Appraisal Form (AS07A002)
- **Menu Name (Thai)**: สร้างเอกสารประเมินผล
- **Menu Name (English)**: Create Appraisal Form
- **JSP Files**: 
  - `AS07A002.jsp` - Main screen
- **Code**: AS07A002
- **Group**: AS07A
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 10.4 Change Approver (After Create Appraisal Documents) (AS07A003)
- **Menu Name (Thai)**: เปลื่ยนผู้อนุมัติเอกสาร (หลังสร้างเอกสารแล้ว)
- **Menu Name (English)**: Change Approver (After Create Appraisal Documents)
- **JSP Files**: 
  - `AS07A003.jsp` - Main screen
- **Code**: AS07A003
- **Group**: AS07A
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 10.5 Move Appraisal Data to History (AS07A004)
- **Menu Name (Thai)**: บันทึกข้อมูลการประเมินเป็นประวัติ
- **Menu Name (English)**: Move Appraisal Data to History
- **JSP Files**: 
  - `AS07A004.jsp` - Main screen
- **Code**: AS07A004
- **Group**: AS07A
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 10.6 Config OKR Subject Period (AS50A001)
- **Menu Name (Thai)**: กำหนดช่วงเวลาการกำหนดหัวข้อ/ปรับหัวข้อ
- **Menu Name (English)**: Config OKR Subject Period
- **JSP Files**: 
  - `AS50A001.jsp` - Main screen
- **Code**: AS50A001
- **Group**: AS50A
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 10.7 Config OKR Appraisal Period (AS50A002)
- **Menu Name (Thai)**: กำหนดช่วงเวลาการประเมินผลการปฏิบัติงาน
- **Menu Name (English)**: Config OKR Appraisal Period
- **JSP Files**: 
  - `AS50A002.jsp` - Main screen
- **Code**: AS50A002
- **Group**: AS50A
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 10.8 KRIs Yearly Report (AS50B001)
- **Menu Name (Thai)**: รายงานการกำหนดตัวชี้วัดผล (KRIs) ประจำปี
- **Menu Name (English)**: KRIs Yearly Report
- **JSP Files**: 
  - `AS50B001.jsp` - Main screen
- **Code**: AS50B001
- **Group**: AS50B
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Report screen but included as it's part of OKR module

### 10.9 KRIs History Report (AS50B002)
- **Menu Name (Thai)**: ประวัติการกำหนดตัวชี้วัดผล (KRIs)
- **Menu Name (English)**: KRIs History Report
- **JSP Files**: 
  - `AS50B002.jsp` - Main screen
- **Code**: AS50B002
- **Group**: AS50B
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Report screen but included as it's part of OKR module

### 10.10 OKR Appraisal Yearly Report (AS50B003)
- **Menu Name (Thai)**: รายงานการประเมินผล OKR ประจำปี
- **Menu Name (English)**: OKR Appraisal Yearly Report
- **JSP Files**: 
  - `AS50B003.jsp` - Main screen
- **Code**: AS50B003
- **Group**: AS50B
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Report screen but included as it's part of OKR module

### 10.11 OKR Appraisal History Report (AS50B004)
- **Menu Name (Thai)**: ประวัติการประเมินผล OKR
- **Menu Name (English)**: OKR Appraisal History Report
- **JSP Files**: 
  - `AS50B004.jsp` - Main screen
- **Code**: AS50B004
- **Group**: AS50B
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Report screen but included as it's part of OKR module

---

## 11. Terms Of Use (AS14) - แนะนำการใช้งาน

### 11.1 User Manual (MODULE_MANUAL)
- **Menu Name (Thai)**: คู่มือการใช้งาน
- **Menu Name (English)**: User Manual
- **JSP Files**: 
  - `MODULE_MANUAL.jsp` - Main screen
- **Code**: AS1401
- **Group**: AS1401
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## Additional Files

### Module Index
- `AS_INDEX.jsp` - Main module index page (if exists)

### Other Appraisal Files
- `AS*.jsp` - Appraisal transaction and setup screens
- `ASP*.jsp` - Appraisal process screens
- `APS*.jsp` - Appraisal system screens
- `APP_EMV*.jsp` - Appraisal employee view screens
- `KPICATEGSETUP.jsp` - KPI category setup screen
- `UP_CONFIG.jsp` - Configuration screen
- `SET_OFF_ON.jsp` - Screen on/off configuration
- `ASR*.jsp` - Appraisal report screens (excluded from this inventory)
- `APSR*.jsp` - Appraisal report screens (excluded from this inventory)

---

## Notes

1. **Company-Specific Variants**: Some screens have company-specific variants (e.g., KKB, CKT, TKC, SENA, APF, KOKOTEL, EGATI, RIKEN, ARC)
2. **360 Degree Assessment**: Comprehensive 360-degree evaluation system
3. **OKR System**: Objectives and Key Results appraisal system
4. **KPI Management**: Key Performance Indicators management and tracking
5. **MBO System**: Management by Objectives system
6. **Grade Management**: Complex grade and salary adjustment system
7. **Approver Management**: Multiple approver configuration options
8. **Form Builder**: Dynamic form creation and management
9. **Topic Management**: Appraisal topic and category management
10. **Period Management**: Multiple period configuration options (annual, period-based, business unit-based)
11. **History Tracking**: Comprehensive history tracking for KPI, KC, and OKR
12. **Email Integration**: Email reminder system for appraisers
13. **Data Import**: CSV import for leave records
14. **Employee View Integration**: Integration with employee view module

---

## Migration Considerations

### High Priority Screens
- Master Data screens (AS010, AS015, AS016, AS002, AS030, AS003, AS011)
- Appraisal Document screens (AS004_4, AS004_4_M, ASP801, ASP802, AS300_KKB)
- Appraisal Period screens (UP_CONFIG, AS101, AS103, APS_CONFIG)
- Admin screens (SET_OFF_ON, APP_EMV_HR_T, AS036, APS360)

### Medium Priority Screens
- Grade Management screens (AS018, AS019, AS020)
- Other Data Setup screens (KPICATEGSETUP, ASP100, ASP101, AS102, APS200)
- Admin History screens (APP_EMV_HIS_KPI, APP_EMV_HIS_KC)
- 360 Degree screens (ASP711, ASP712, APS_DEL360)

### Lower Priority Screens
- OKR screens (AS03A001, AS07A001, AS07A002, AS07A003, AS07A004, AS50A001, AS50A002)
- OKR Report screens (AS50B001, AS50B002, AS50B003, AS50B004) - Included as part of OKR module
- Company-specific variants (AS300_KKB, AS300_KKB_AP, AS300_CKT, APS301)
- Terms Of Use (MODULE_MANUAL)

### Technical Notes
- Many screens use the CSC library framework
- Company-specific variants require careful handling
- Complex form builder system
- Multiple approver workflow system
- 360-degree evaluation system
- OKR (Objectives and Key Results) system
- KPI and MBO integration
- Grade and salary adjustment calculation
- Email notification system
- Data import/export functionality
- Multi-language support (Thai/English) built into many screens
- Employee view module integration
- History tracking and reporting
- Period-based and business unit-based configuration
- Dynamic form creation and management
- Score calculation and grade assignment
- Approver change workflow
- Data migration to history

---

## Screen Categories Summary

### Master Data (Setup) - 9 screens
1. AS010 - Appraisal Type Table
2. AS015 - Appraisal Grade
3. AS016 - Grade Table
4. AS020 - Score Deduct Criteria
5. AS002 - Appraisal Category Table
6. AS030 - Appraisal Topic Table
7. AS003 - Appraisal Form Table
8. AS011 - Appraisal Form Type Table
9. AS018, AS019 - Salary adjustment tables

### Appraisal Document Management - 9 screens
1. ASP801 - Define Approvor (process)
2. ASP802 - Define Approvor By Employeelist (process)
3. AS300_KKB - Config Approvor
4. AS004_4_M - Manage Appraisal Form
5. AS004_4 - Create Appraisal Form
6. AS300_KKB_AP - Change Approvor (After Create)
7. AS300_CKT - Change Approvor Many People
8. ASP803 - Appraisal Group
9. AS105 - Manage Approver and Status
10. ASP800 - Move to history

### Other Data Setup - 7 screens
1. KPICATEGSETUP - MBO KPIs Category Setup
2. ASP100 - MBO Objective Weighting
3. ASP101 - KPIs Objective Weighting
4. AS102 - KPIs Category
5. APS200 - Grade History Detail
6. APS300 - Leave Record(.csv)
7. APS301 - Define Approver By Admin(CKT)

### Appraisal Period - 4 screens
1. UP_CONFIG - Appraisal Annual Setting
2. AS101 - Appraisal Period Setting
3. AS103 - Appraisal Period Setting By Business Unit
4. APS_CONFIG - 360 Degree Assessment Schedule

### Admin - 11 screens
1. SET_OFF_ON - Set Off-On Screen
2. ASP709 - Status / E-Mail Remind Appraiser
3. APP_EMV_HR_T - Change Performance / Results Status
4. APP_EMV_HIS_KPI - KPI History Record
5. APP_EMV_HIS_KC - KC History Record
6. AS036 - Setup Grade
7. APS360 - Manage Performance 360 celsius
8. APS_DEL360 - Delete Performance Results
9. ASP711 - Determine the 360 degree evaluation group
10. ASP712 - calculate Summary Report 360 Degree

### OKR Appraisal - 10 screens
1. AS03A001 - Appraisal Type Table
2. AS07A001 - Define Approver
3. AS07A002 - Create Appraisal Form
4. AS07A003 - Change Approver
5. AS07A004 - Move to History
6. AS50A001 - Config OKR Subject Period
7. AS50A002 - Config OKR Appraisal Period
8. AS50B001 - KRIs Yearly Report
9. AS50B002 - KRIs History Report
10. AS50B003 - OKR Appraisal Yearly Report
11. AS50B004 - OKR Appraisal History Report

### Terms Of Use - 1 screen
1. MODULE_MANUAL - User Manual

---

## Total: ~60 screens (excluding main report sections AS11 and AS13)

