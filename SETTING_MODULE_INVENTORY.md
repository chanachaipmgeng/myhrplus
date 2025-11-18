# Setting Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~80+ screens (excluding reports)
- **Main Categories**: 10 categories
- **Active Menus**: 70+ menu items
- **Module Code**: ST (Setting)
- **Base Path**: `hrAppWeb.war/SETTING/`

## Summary Statistics
- **User Management**: 20+ screens
- **Email Reminder Settings**: 12 screens
- **System Access Permissions**: 20+ screens
- **User Level Settings**: 3 screens
- **Personal Data**: 3 screens
- **Options/Configuration**: 12 screens
- **Excel Report Settings**: 3 screens
- **Main/Master Data**: 3 screens
- **Workflow Screen Settings**: 1 screen
- **Swap Language**: 2 screens
- **Zeeme Interface**: 10 screens
- **Barcode Generator**: 3 screens
- **Token Generator**: 4 screens
- **Data Shop**: 2 screens
- **Routing Config**: 1 screen
- **Terms Of Use**: 1 screen

---

## 1. User (ST01A)

### 1.1 Setting Email Reminder (ST01A0103)

#### 1.1.1 Email Master (REM001)
- **Menu Name (Thai)**: ทะเบียนอีเมล์
- **Menu Name (English)**: Email Master
- **JSP Files**: 
  - `REM001.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.2 Setting Email Template and Content (REM002)
- **Menu Name (Thai)**: รูปแบบและเนื้อหาอีเมล์
- **Menu Name (English)**: Setting Email Template and Content
- **JSP Files**: 
  - `REM002.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.3 Notifications of Probation Period (REM003)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ทดลองงาน)
- **Menu Name (English)**: Notifications of Probation Period
- **JSP Files**: 
  - `REM003.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.4 Notifications of New Hire (REM004)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ประมวลผลพนักงานใหม่)
- **Menu Name (English)**: Notifications of New Hire
- **JSP Files**: 
  - `REM004.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.5 Notifications of Resign (REM005)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ประมวลผลพนักงานลาออก)
- **Menu Name (English)**: Notifications of Resign
- **JSP Files**: 
  - `REM005.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.6 Notifications of Recurrent Training (REM006)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (การอบรมซ้ำ)
- **Menu Name (English)**: Notifications of Recurrent Training
- **JSP Files**: 
  - `REM006.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.7 Notifications of Document Reference (REM007)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (เอกสารอ้างอิง)
- **Menu Name (English)**: Notifications of Document Reference
- **JSP Files**: 
  - `REM007.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.8 Notifications of Job Retire (REM008)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ครบกำหนดเกษียณอายุงาน)
- **Menu Name (English)**: Notifications of Job Retire
- **JSP Files**: 
  - `REM008.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.9 Notifications of Register Other Card (REM009)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ข้อมูลบัตรต่างๆ)
- **Menu Name (English)**: Notifications of Register Other Card
- **JSP Files**: 
  - `REM009.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.10 Notifications of Empolyee Late or Early Departure (REM010)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (พนักงานสายหรือออกก่อนเวลา)
- **Menu Name (English)**: Notifications of Empolyee Late or Early Departure
- **JSP Files**: 
  - `REM010.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.11 Notifications of Employee Absent (REM011)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (พนักงานขาดงาน)
- **Menu Name (English)**: Notifications of Employee Absent
- **JSP Files**: 
  - `REM011.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.1.12 Notifications of Empolyee Discrepancies (REM012)
- **Menu Name (Thai)**: ตั้งค่าอีเมล์แจ้งเตือน (ขาด ลา)
- **Menu Name (English)**: Notifications of Empolyee Discrepancies
- **JSP Files**: 
  - `REM012.jsp` - Main screen
- **Permissions**: Not specified in XML

---

### 1.2 User Setting (ST01A01)

#### 1.2.1 keyword group (ADDKEYWORDGROUP)
- **Menu Name (Thai)**: กลุ่มรหัสผ่านที่ไม่ต้องการ
- **Menu Name (English)**: keyword group
- **JSP Files**: 
  - `ADDKEYWORDGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.2 keyword (ADDKEYWORD)
- **Menu Name (Thai)**: รหัสผ่านที่ไม่ต้องการ
- **Menu Name (English)**: keyword
- **JSP Files**: 
  - `ADDKEYWORD.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.3 User Role (ADDROLE)
- **Menu Name (Thai)**: กำหนดข้อจำกัดการสร้างชื่อผู้ใช้
- **Menu Name (English)**: User Role
- **JSP Files**: 
  - `ADDROLE.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.4 Create User Profile (ADDUSER)
- **Menu Name (Thai)**: สร้างผู้ใช้งาน
- **Menu Name (English)**: Create User Profile
- **JSP Files**: 
  - `ADDUSER.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.5 Set password (CHGPWD)
- **Menu Name (Thai)**: กำหนดรหัสผ่าน
- **Menu Name (English)**: Set password
- **JSP Files**: 
  - `CHGPWD.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.6 Setting Data Access Permissions (Emp) (SECURITY)
- **Menu Name (Thai)**: กำหนดสิทธิการเข้าถึงข้อมูล (พนักงาน)
- **Menu Name (English)**: Setting Data Access Permissions (Emp)
- **JSP Files**: 
  - `SECURITY.jsp` - Main screen
  - `SECURITYHELP.jsp` - Help screen
- **Permissions**: Not specified in XML

#### 1.2.7 EmpCenter (EMPCENTER)
- **Menu Name (Thai)**: นำเข้ารายชื่อพนักงานของ EmpCenter
- **Menu Name (English)**: EmpCenter
- **JSP Files**: 
  - `EMPCENTER.jsp` - Main screen
  - `EMPCENTERHELP.jsp` - Help screen
  - `EMPCENTERSTCHELP.jsp` - Setup help screen
- **Permissions**: Not specified in XML

#### 1.2.8 Manage Users (MNGUSER)
- **Menu Name (Thai)**: จัดการผู้ใช้งาน
- **Menu Name (English)**: Manage Users
- **JSP Files**: 
  - `SM1013.jsp` - Main screen
  - `SM1012.jsp` - Related screen
- **Permissions**: Not specified in XML

#### 1.2.9 Import Users (SM1014)
- **Menu Name (Thai)**: นำเข้าผู้ใช้งาน (เอ็กเซล)
- **Menu Name (English)**: Import Users
- **JSP Files**: 
  - `SM1014.jsp` - Main screen
  - `SM1014_IMPORT.jsp` - Import screen
- **Permissions**: Not specified in XML

#### 1.2.10 Help Page Setup (SETHELPFILE)
- **Menu Name (Thai)**: จัดการหน้าช่วยเหลือ
- **Menu Name (English)**: Help Page Setup
- **JSP Files**: 
  - `SETHELPFILE.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.2.11 Import Update User Data (ST01A0116)
- **Menu Name (Thai)**: นำเข้าปรับปรุงข้อมูลผู้ใช้งาน
- **Menu Name (English)**: Import Update User Data
- **JSP Files**: 
  - `ST01A0116.jsp` - Main screen
- **Permissions**: Not specified in XML

---

### 1.3 System Access Permissions (ST01A04)

#### 1.3.1 Module Access Permissions (GLOBALMENU)
- **Menu Name (Thai)**: กำหนดสิทธิ์การเข้าใช้งาน
- **Menu Name (English)**: Module Access Permissions
- **JSP Files**: 
  - `GLOBALMENU.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.2 Organization Information (COMGROUP)
- **Menu Name (Thai)**: การกำหนดข้อมูลองค์กร
- **Menu Name (English)**: Organization Information
- **JSP Files**: 
  - `COMGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.3 Personal Information (PSNGROUP)
- **Menu Name (Thai)**: การจัดการข้อมูลพนักงาน
- **Menu Name (English)**: Personal Information
- **JSP Files**: 
  - `PSNGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.4 Time Attendance (TIMEGROUP)
- **Menu Name (Thai)**: การจัดการเวลาทำงาน
- **Menu Name (English)**: Time Attendance
- **JSP Files**: 
  - `TIMEGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.5 Payroll (PAYROLLGROUP)
- **Menu Name (Thai)**: การจัดการค่าจ้าง
- **Menu Name (English)**: Payroll
- **JSP Files**: 
  - `PAYROLLGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.6 Training (TRAINGROUP)
- **Menu Name (Thai)**: การจัดการงานฝึกอบรม
- **Menu Name (English)**: Training
- **JSP Files**: 
  - `TRAINGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.7 Recruitment (RECGROUP)
- **Menu Name (Thai)**: การจัดการงานสรรหา
- **Menu Name (English)**: Recruitment
- **JSP Files**: 
  - `RECGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.8 Welfare (WELGROUP)
- **Menu Name (Thai)**: การจัดการงานสวัสดิการ
- **Menu Name (English)**: Welfare
- **JSP Files**: 
  - `WELGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.9 Appraisal (APSGROUP)
- **Menu Name (Thai)**: การจัดการงานประเมินผล
- **Menu Name (English)**: Appraisal
- **JSP Files**: 
  - `APSGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.10 Workflow (WORKFLOWGROUP)
- **Menu Name (Thai)**: การจัดการงานเอกสาร
- **Menu Name (English)**: Workflow
- **JSP Files**: 
  - `WORKFLOWGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.11 Examination Online (EXAMGROUP)
- **Menu Name (Thai)**: การจัดการข้อสอบออนไลน์
- **Menu Name (English)**: Examination Online
- **JSP Files**: 
  - `EXAMGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.12 User Management (SETGROUP)
- **Menu Name (Thai)**: การจัดการสิทธิ์ผู้ใช้งาน
- **Menu Name (English)**: User Management
- **JSP Files**: 
  - `SETGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.13 Administrator (HRGROUP)
- **Menu Name (Thai)**: การจัดการผู้ดูแลระบบ
- **Menu Name (English)**: Administrator
- **JSP Files**: 
  - `HRGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.14 Setting Information Board for Employee (SETEMVINDEX)
- **Menu Name (Thai)**: ตั้งค่ากระดานข้อมูลสำหรับพนักงาน
- **Menu Name (English)**: Setting Information Board for Employee
- **JSP Files**: 
  - `SETEMVINDEX.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.15 Brainstrom™ (BRAINSTROMGROUP)
- **Menu Name (Thai)**: ระดมความคิด
- **Menu Name (English)**: Brainstrom™
- **JSP Files**: 
  - `BRAINSTROMGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.16 Library Management (LIBRARYGROUP)
- **Menu Name (Thai)**: การจัดการห้องสมุด
- **Menu Name (English)**: Library Management
- **JSP Files**: 
  - `LIBRARYGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.17 Meeting Management (MEETINGGROUP)
- **Menu Name (Thai)**: การจัดการห้องประชุม
- **Menu Name (English)**: Meeting Management
- **JSP Files**: 
  - `MEETINGGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.18 Car Reservations Management (CARRESERVGROUP)
- **Menu Name (Thai)**: การจัดการการจองรถ
- **Menu Name (English)**: Car Reservations Management
- **JSP Files**: 
  - `CARRESERVGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.19 Workflow (WFGROUP)
- **Menu Name (Thai)**: Workflow
- **Menu Name (English)**: Workflow
- **JSP Files**: 
  - `WFGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.20 ZeeMe Menu (ZEEMEGROUP)
- **Menu Name (Thai)**: ZeeMe Menu
- **Menu Name (English)**: ZeeMe Menu
- **JSP Files**: 
  - `ZEEMEGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.21 Shift Planning Management (SPGROUP)
- **Menu Name (Thai)**: การจัดการแผนการทำงาน
- **Menu Name (English)**: Shift Planning Management
- **JSP Files**: 
  - `SPGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

#### 1.3.22 Employee Self Service (EMVGROUP)
- **Menu Name (Thai)**: ระบบบริหารจัดการด้วยตัวเอง
- **Menu Name (English)**: Employee Self Service
- **JSP Files**: 
  - `EMVGROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 2. Setting user Level (ST02A)

### 2.1 Change User Level (USERPERMIS)
- **Menu Name (Thai)**: เปลี่ยนแปลงระดับผู้ใช้งาน
- **Menu Name (English)**: Change User Level
- **JSP Files**: 
  - `SM1009.jsp` - Main screen
- **Permissions**: Not specified in XML

### 2.2 Setting User Level (EM1002)
- **Menu Name (Thai)**: ทะเบียนระดับพนักงาน
- **Menu Name (English)**: Setting User Level
- **JSP Files**: 
  - `EM1002.jsp` - Main screen
- **Permissions**: Not specified in XML

### 2.3 Import Update Employee Level (ST02A08)
- **Menu Name (Thai)**: นำเข้าปรับปรุงสิทธิ์การเข้าถึงข้อมูลพนักงาน
- **Menu Name (English)**: Import Update Employee Level
- **JSP Files**: 
  - `ST02A08.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 3. Personal Data (ST03A)

### 3.1 Changing Language (CHANGLANG)
- **Menu Name (Thai)**: เปลี่ยนภาษา
- **Menu Name (English)**: Changing Language
- **JSP Files**: 
  - `CHANGLANG.jsp` - Main screen
- **Permissions**: Not specified in XML

### 3.2 Changing Password (PASSWD)
- **Menu Name (Thai)**: เปลี่ยนรหัสผ่าน
- **Menu Name (English)**: Changing Password
- **JSP Files**: 
  - `PASSWD.jsp` - Main screen
- **Permissions**: Not specified in XML

### 3.3 Set Global Menu Order (globalmenuorder)
- **Menu Name (Thai)**: จัดเรียงเมนูหลัก
- **Menu Name (English)**: Set Global Menu Order
- **JSP Files**: 
  - `GLOBALMENUORDER.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 4. Options (ST04A)

### 4.1 System Configuration (SM1001)
- **Menu Name (Thai)**: กำหนดค่าระบบ
- **Menu Name (English)**: System Configuration
- **JSP Files**: 
  - `SM1001.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.2 Employee Configuration (EM1001)
- **Menu Name (Thai)**: กำหนดค่าเริ่มต้นของพนักงาน
- **Menu Name (English)**: Employee Configuration
- **JSP Files**: 
  - `EM1001.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.3 Setting Salary View by Employee Level (SM1002)
- **Menu Name (Thai)**: กำหนดการมองเห็นเงินเดือนตามระดับผู้ใช้งาน
- **Menu Name (English)**: Setting Salary View by Employee Level
- **JSP Files**: 
  - `SM1002.jsp` - Main screen
  - `SM1006.jsp` - Related screen
  - `SM1003.jsp` - Related screen
- **Permissions**: Not specified in XML

### 4.4 Process Organization chart (by Approve box) (SM1010)
- **Menu Name (Thai)**: ประมวลผลสายบังคับบัญชา(ตามกล่องอนุมัติ)
- **Menu Name (English)**: Process Organization chart (by Approve box)
- **JSP Files**: 
  - `SM1010.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.5 Amendment Report (AGA001)
- **Menu Name (Thai)**: รายงานการแก้ไข
- **Menu Name (English)**: Amendment Report
- **JSP Files**: 
  - `AGA001.jsp` - Main screen
- **Permissions**: Not specified in XML
- **Note**: This is a report but included in Options section

### 4.6 List of Online User (SM1007)
- **Menu Name (Thai)**: ประวัติการเข้าใช้งาน
- **Menu Name (English)**: List of Online User
- **JSP Files**: 
  - `SM1007.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.7 Statistic Data of Online User (SM1008)
- **Menu Name (Thai)**: สถิติการเข้าใช้งานระบบ
- **Menu Name (English)**: Statistic Data of Online User
- **JSP Files**: 
  - `SM1008.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.8 Setting Payroll Calculation Access Permissinos (SM1011)
- **Menu Name (Thai)**: กำหนดสิทธิการทำเงินเดือนตามกลุ่ม
- **Menu Name (English)**: Setting Payroll Calculation Access Permissinos
- **JSP Files**: 
  - `SM1011.jsp` - Main screen
  - `SM1011_1.jsp` - Related screen
- **Permissions**: Not specified in XML

### 4.9 Autonumber setup (SM1012)
- **Menu Name (Thai)**: ตั้งค่าการรันตัวเลข
- **Menu Name (English)**: Autonumber setup
- **JSP Files**: 
  - `SET_AUTONUM.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.10 Autonumber Group setup (SM1013)
- **Menu Name (Thai)**: ตั้งค่ากลุ่มการรันตัวเลข
- **Menu Name (English)**: Autonumber Group setup
- **JSP Files**: 
  - `SET_AUTONUM_GROUP.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.11 Default Value Table (SM1015)
- **Menu Name (Thai)**: ทะเบียนค่าเริ่มต้น
- **Menu Name (English)**: Default Value Table
- **JSP Files**: 
  - `SM1015.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.12 User Manual (ST04A16)
- **Menu Name (Thai)**: คู่มือการใช้
- **Menu Name (English)**: User Manual
- **JSP Files**: 
  - `SM1016.jsp` - Main screen
- **Permissions**: Not specified in XML

### 4.13 Server config queue (ST04A17)
- **Menu Name (Thai)**: กำหนดเซิร์ฟเวอร์สำหรับประมวลผล
- **Menu Name (English)**: Server config queue
- **JSP Files**: 
  - `SM1020.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 5. Setting Export Report (WE04A00)

### 5.1 Upload Excel Template (EXCELLIST)
- **Menu Name (Thai)**: เพิ่มรายงาน
- **Menu Name (English)**: Upload Excel Template
- **JSP Files**: 
  - `EXCELLIST.jsp` - Main screen
  - `UPLOADEXCEL.jsp` - Upload screen
  - `EXPEXCEL.jsp` - Export screen
  - `EXCHEAD.jsp` - Header screen
  - `EXCCHILD.jsp` - Child screen
  - `XLSOPTION_HR.jsp` - Option screen
  - `EXCEL_PORTAL.jsp` - Portal screen
- **Permissions**: Not specified in XML

### 5.2 Manage Excel Template (MANAGEEXCELLIST)
- **Menu Name (Thai)**: เปิด-ปิด การใช้งานรายงาน
- **Menu Name (English)**: Manage Excel Template
- **JSP Files**: 
  - `MANAGEEXCELLIST.jsp` - Main screen
- **Permissions**: Not specified in XML

### 5.3 Excel Report For Empview (EXCEL_EMV)
- **Menu Name (Thai)**: รายงาน excel สำหรับ empview
- **Menu Name (English)**: Excel Report For Empview
- **JSP Files**: 
  - `EXCEL_EMV.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 6. Main (SS05A)

### 6.1 Set up Relation (CONFIG_GOHELP)
- **Menu Name (Thai)**: กำหนดลำดับ โครงสร้าง
- **Menu Name (English)**: Set up Relation
- **JSP Files**: 
  - `CONFIG_GOHELP.jsp` - Main screen
- **Permissions**: Not specified in XML

### 6.2 Setting Movement Type View (SM1018)
- **Menu Name (Thai)**: กำหนดสิทธิมองเห็นประเภทการเคลื่อนไหว
- **Menu Name (English)**: Setting Movement Type View
- **JSP Files**: 
  - `SM1018.jsp` - Main screen
- **Permissions**: Not specified in XML

### 6.3 Set up Login slide (SS05A05)
- **Menu Name (Thai)**: กำหนดรูปภาพหน้าเข้าสู่ระบบ
- **Menu Name (English)**: Set up Login slide
- **JSP Files**: 
  - `LOGIN_SETUP.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 7. Setting Workflow screen (SS011A)

### 7.1 Setting WF Manpower Request Form (CONFIG_GOHELP)
- **Menu Name (Thai)**: ตั้งค่าใบขออัตรากำลัง
- **Menu Name (English)**: Setting WF Manpower Request Form
- **JSP Files**: 
  - `SM1017.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 8. Swap Langauge (SS06A)

### 8.1 Swap Language V.2 (SWAPLANGEDIT)
- **Menu Name (Thai)**: Swap Language V.2
- **Menu Name (English)**: Swap Language V.2
- **JSP Files**: 
  - `SWAPLANGEDIT.jsp` - Main screen
- **Permissions**: Not specified in XML

### 8.2 Add Site (MSITENAME)
- **Menu Name (Thai)**: Add Site
- **Menu Name (English)**: Add Site
- **JSP Files**: 
  - `MSITENAME.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 9. Zeeme Interface (SS10A)

### 9.1 Set payslip config company (ZS001)
- **Menu Name (Thai)**: Set payslip config company
- **Menu Name (English)**: Set payslip config company
- **JSP Files**: 
  - `ZSLIP/ZS001.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.2 Set payslip config employee (ZS002)
- **Menu Name (Thai)**: Set payslip config employee
- **Menu Name (English)**: Set payslip config employee
- **JSP Files**: 
  - `ZSLIP/ZS002.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.3 Syncronize Employee to Zeeme with Option (ZS007)
- **Menu Name (Thai)**: เชื่อมโยงข้อมูลกับ Zeeme with Option
- **Menu Name (English)**: Syncronize Employee to Zeeme with Option
- **JSP Files**: 
  - `ZSLIP/ZS007.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.4 Syncronize Boss to Zeeme with Bossid (ZS009)
- **Menu Name (Thai)**: เชื่อมโยงข้อมูลหัวหน้ากับ Zeeme โดย Bossid
- **Menu Name (English)**: Syncronize Boss to Zeeme with Bossid
- **JSP Files**: 
  - `ZSLIP/ZS009.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.5 Syncronize Workarea to Zeeme with Employee (ZS_WORKAREA)
- **Menu Name (Thai)**: เชื่อมโยงข้อมูลสถานที่ทำงานกับ Zeeme with Employee
- **Menu Name (English)**: Syncronize Workarea to Zeeme with Employee
- **JSP Files**: 
  - `ZSLIP/ZS_WORKAREA.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.6 Upload payslip (ZS003)
- **Menu Name (Thai)**: Upload payslip
- **Menu Name (English)**: Upload payslip
- **JSP Files**: 
  - `ZSLIP/ZS003.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.7 Upload payslip log (ZS004)
- **Menu Name (Thai)**: Upload payslip log
- **Menu Name (English)**: Upload payslip log
- **JSP Files**: 
  - `ZSLIP/ZS004.jsp` - Main screen (in ZSLIP subdirectory)
  - `ZSLIP/ZS005.jsp` - Related screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.8 Load loan transaction from DLS (ZS010)
- **Menu Name (Thai)**: Load loan transaction from DLS
- **Menu Name (English)**: Load loan transaction from DLS
- **JSP Files**: 
  - `ZSLIP/ZS010.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.9 Post Payback Loan to ZeeServer (ZS011)
- **Menu Name (Thai)**: Post Payback Loan to ZeeServer
- **Menu Name (English)**: Post Payback Loan to ZeeServer
- **JSP Files**: 
  - `ZSLIP/ZS011.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.10 Load loan transaction from DLS (NEW) (ZS012)
- **Menu Name (Thai)**: Load loan transaction from DLS (NEW)
- **Menu Name (English)**: Load loan transaction from DLS (NEW)
- **JSP Files**: 
  - `ZSLIP/ZS012.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

### 9.11 Post Payback Loan to ZeeServer (NEW) (ZS013)
- **Menu Name (Thai)**: Post Payback Loan to ZeeServer (NEW)
- **Menu Name (English)**: Post Payback Loan to ZeeServer (NEW)
- **JSP Files**: 
  - `ZSLIP/ZS013.jsp` - Main screen (in ZSLIP subdirectory)
- **Permissions**: Not specified in XML

---

## 10. Barcode Generator (BAR10A)

### 10.1 Barcode Config (BAR001)
- **Menu Name (Thai)**: Barcode Config
- **Menu Name (English)**: Barcode Config
- **JSP Files**: 
  - `BARCODE/BAR001.jsp` - Main screen (in BARCODE subdirectory)
- **Permissions**: Not specified in XML

### 10.2 Generate Barcode Process (BAR002)
- **Menu Name (Thai)**: Generate Barcode Process
- **Menu Name (English)**: Generate Barcode Process
- **JSP Files**: 
  - `BARCODE/BAR002.jsp` - Main screen (in BARCODE subdirectory)
  - `BARCODE/PRU086.jsp` - Related screen (in BARCODE subdirectory)
- **Permissions**: Not specified in XML

### 10.3 View Barcode (BAR003)
- **Menu Name (Thai)**: View Barcode
- **Menu Name (English)**: View Barcode
- **JSP Files**: 
  - `BARCODE/BAR003.jsp` - Main screen (in BARCODE subdirectory)
- **Permissions**: Not specified in XML

---

## 11. Token Generator (TOKEN10A)

### 11.1 Config Access Key (TOKEN001)
- **Menu Name (Thai)**: Config Access Key
- **Menu Name (English)**: Config Access Key
- **JSP Files**: 
  - `TOKEN001.jsp` - Main screen
- **Permissions**: Not specified in XML

### 11.2 Create Access Key (TOKEN002)
- **Menu Name (Thai)**: Create Access Key
- **Menu Name (English)**: Create Access Key
- **JSP Files**: 
  - `TOKEN002.jsp` - Main screen
- **Permissions**: Not specified in XML

### 11.3 Create Token (TOKEN003)
- **Menu Name (Thai)**: Create Token
- **Menu Name (English)**: Create Token
- **JSP Files**: 
  - `TOKEN003.jsp` - Main screen
- **Permissions**: Not specified in XML

### 11.4 Log Access Token (TOKEN004)
- **Menu Name (Thai)**: Log Access Token
- **Menu Name (English)**: Log Access Token
- **JSP Files**: 
  - `TOKEN004.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 12. Data Shop (DS01)

### 12.1 Base Cube (DS00101)
- **Menu Name (Thai)**: Base Cube
- **Menu Name (English)**: Base Cube
- **JSP Files**: 
  - `DATASHOP/index.html` - Main screen (HTML file in DATASHOP subdirectory)
- **Type**: HTML file
- **Permissions**: Not specified in XML

### 12.2 Upload Basecube (DS00102)
- **Menu Name (Thai)**: Upload Basecube
- **Menu Name (English)**: Upload Basecube
- **JSP Files**: 
  - `DATASHOP/uploadcube.html` - Upload screen (HTML file in DATASHOP subdirectory)
- **Type**: HTML file
- **Permissions**: Not specified in XML

---

## 13. Routing Config (ROUTING10A)

### 13.1 Routing Create (ROUTING001)
- **Menu Name (Thai)**: Routing Create
- **Menu Name (English)**: Routing Create
- **JSP Files**: 
  - `ROUTING001.jsp` - Main screen
- **Permissions**: Not specified in XML

---

## 14. Terms Of Use (ST09A)

### 14.1 User Manual (ST09A01)
- **Menu Name (Thai)**: คู่มือการใช้งาน
- **Menu Name (English)**: User Manual
- **JSP Files**: 
  - `MODULE_MANUAL.jsp` - Main screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: No
  - Save: No
  - Delete: No

---

## Additional Files

### Module Index
- `SET_INDEX.jsp` - Main module index page (if exists)

### Commented Out / Legacy Files
The following files are mentioned in comments but may not be in active use:
- `SM1005.jsp` - Inactive User (commented out)
- `SM1009.jsp` - EmpCenter Viewing Permission (commented out, but used in ST02A01)
- Various email reminder settings (commented out in ST01A01 section, but active in ST01A0103)

### Other Setting Files
- `SM*.jsp` - System management screens
- `REM*.jsp` - Email reminder screens
- `ADD*.jsp` - Add/create screens (ADDUSER, ADDROLE, ADDKEYWORD, ADDKEYWORDGROUP)
- `CHG*.jsp` - Change screens (CHGPWD, CHANGLANG)
- `*GROUP.jsp` - Permission group screens
- `ZSLIP/*.jsp` - Zeeme payslip integration screens (in ZSLIP subdirectory)
- `BARCODE/*.jsp` - Barcode generator screens (in BARCODE subdirectory)
- `DATASHOP/*.html` - Data Shop screens (HTML files in DATASHOP subdirectory)

---

## Notes

1. **Subdirectories**: Some screens are in subdirectories (ZSLIP/, BARCODE/, DATASHOP/)
2. **HTML Files**: Data Shop module uses HTML files instead of JSP
3. **Email Reminder System**: Comprehensive email notification system with 12 different notification types
4. **Permission Management**: Extensive permission management system for all modules
5. **External Integrations**: Zeeme interface for payslip integration, Data Shop for analytics
6. **Token System**: Token generator for API access keys
7. **Barcode System**: Barcode generation and management
8. **Excel Report Templates**: Dynamic Excel report template management
9. **User Level Management**: Multi-level user permission system
10. **Module Access Control**: Granular access control for each module
11. **Autonumber System**: Auto-numbering configuration for various entities
12. **Language Support**: Language swapping and menu ordering functionality

---

## Migration Considerations

### High Priority Screens
- User Management screens (ADDUSER, MNGUSER, SM1013, SM1014)
- Permission Management screens (GLOBALMENU, COMGROUP, PSNGROUP, TIMEGROUP, PAYROLLGROUP, etc.)
- System Configuration screens (SM1001, EM1001, SM1002)
- Email Reminder Configuration (REM001, REM002, and all REM00X screens)

### Medium Priority Screens
- User Level Settings (SM1009, EM1002, ST02A08)
- Personal Data screens (CHANGLANG, PASSWD, GLOBALMENUORDER)
- Excel Report Settings (EXCELLIST, MANAGEEXCELLIST, EXCEL_EMV)
- Autonumber Configuration (SET_AUTONUM, SET_AUTONUM_GROUP)
- Help Page Setup (SETHELPFILE)

### Lower Priority Screens
- Zeeme Interface screens (external integration)
- Barcode Generator screens (specialized functionality)
- Token Generator screens (API access management)
- Data Shop screens (analytics, HTML-based)
- Routing Config (specialized functionality)

### Technical Notes
- Many screens use the CSC library framework
- Permission management is critical for security
- Email notification system requires SMTP configuration
- External integrations (Zeeme, Data Shop) may require special handling
- Token system for API authentication
- Barcode generation may require special libraries
- Excel template upload/download functionality
- Multi-language support built into many screens
- User level hierarchy affects data access across all modules
- Module access permissions control which modules users can access
- Autonumber system for generating sequential IDs
- Help page management for user documentation

