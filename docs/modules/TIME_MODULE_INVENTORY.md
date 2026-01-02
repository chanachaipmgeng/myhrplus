# Time Attendance Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~100+ screens (excluding reports)
- **Main Categories**: 7 categories
- **Active Menus**: 50+ menu items
- **Module Code**: TA (Time Attendance)
- **Base Path**: `hrAppWeb.war/TIME/`

## Summary Statistics
- **Daily Attendance**: 3 screens
- **Transaction (Daily Operations)**: 12 screens
- **Data before Processing**: 2 screens
- **On the Process**: 15+ screens
- **Data after Processing**: 2 screens
- **History**: 1 screen
- **Options**: 10+ screens
- **Setup (Master Data)**: 15+ screens
- **OT Scope**: 2 screens
- **Roster**: 1 screen
- **Terms Of Use**: 1 screen

---

## 1. Human Resources (TA01A)

### 1.1 Daily Attendance (TA01A051)

#### 1.1.1 Daily Attendance (TAU134_DAILY)
- **Menu Name (Thai)**: ตารางการทำงาน
- **Menu Name (English)**: Daily Attendance
- **JSP Files**: 
  - `TAU134_DAILY.jsp` - Main screen
  - `TAU122.jsp` - Related screen
  - `TAU123.jsp` - Related screen
  - `TAU1212_DAILY.jsp` - Related screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.1.2 Working Time Detail (MG_WORKINGTIME)
- **Menu Name (Thai)**: ข้อมูลเวลาการทำงาน
- **Menu Name (English)**: Working Time Detail
- **JSP Files**: 
  - `MG_WORKINGTIME.jsp` - Main screen
  - `EMP_WORKINGTIME.jsp` - Employee working time screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.1.3 Working Time Detail History (MG_WORKINGTIME_HISTORY)
- **Menu Name (Thai)**: ข้อมูลประวัติเวลาการทำงาน
- **Menu Name (English)**: Working Time Detail History
- **JSP Files**: 
  - `MG_WORKINGTIME_HISTORY.jsp` - Main screen
  - `EMP_WORKINGTIME_HISTORY.jsp` - Employee working time history screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

---

### 1.2 Transaction (TA01A02)

#### 1.2.1 Forget Punch Time (TAU141)
- **Menu Name (Thai)**: ใบลงเวลา
- **Menu Name (English)**: Forget Punch Time
- **JSP Files**: 
  - `TAU141.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.2 Working Hour Request Form (TAU223)
- **Menu Name (Thai)**: ใบขอลงเวลาการทำงาน
- **Menu Name (English)**: Working Hour Request Form
- **JSP Files**: 
  - `TAU223.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.3 Work Hour Request Form by Supervisor (TAU_BOSS_FORGETCARD)
- **Menu Name (Thai)**: ใบขอลงเวลาการทำงานโดยหัวหน้า
- **Menu Name (English)**: Work Hour Request Form by Supervisor
- **JSP Files**: 
  - `TAU_BOSS_FORGETCARD.jsp` - Main screen
  - `TAU_BOSS_FORGETCARD_VIEW.jsp` - View screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.4 Leave Form (TAU120)
- **Menu Name (Thai)**: ใบลา
- **Menu Name (English)**: Leave Form
- **JSP Files**: 
  - `TAU120_NSTDA.jsp` - Main screen
  - `SHOWNLEAVE_showAll.jsp` - Show all leave screen
  - `SHOWLATE_WF_DESC.jsp` - Workflow description screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.5 Several Days OT Form (TAU152)
- **Menu Name (Thai)**: ใบขอโอทีหลายวัน
- **Menu Name (English)**: Several Days OT Form
- **JSP Files**: 
  - `TAU152.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.6 Several Employees OT Form (TAU154)
- **Menu Name (Thai)**: ใบขอโอทีพนักงานหลายคน
- **Menu Name (English)**: Several Employees OT Form
- **JSP Files**: 
  - `TAU154.jsp` - Main screen
  - `PRU087.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.7 Change Shift (TAU145)
- **Menu Name (Thai)**: ใบเปลี่ยนกะ
- **Menu Name (English)**: Change Shift
- **JSP Files**: 
  - `TAU145_NSTDA.jsp` - Main screen
  - `SHOWNSHIFT_NSTDA.jsp` - Show shift screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.8 Change Shift by Supervisor (TAU_BOSS_CHANGESHIFT)
- **Menu Name (Thai)**: ใบเปลี่ยนกะโดยหัวหน้า
- **Menu Name (English)**: Change Shift by Supervisor
- **JSP Files**: 
  - `TAU_BOSS_CHANGESHIFT.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.9 Exchange Shift (TAU146)
- **Menu Name (Thai)**: ใบแลกกะ
- **Menu Name (English)**: Exchange Shift
- **JSP Files**: 
  - `TAU146_NSTDA.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.10 Holiday switch (TAU188_SENA)
- **Menu Name (Thai)**: ใบสลับวันหยุด
- **Menu Name (English)**: Holiday switch
- **JSP Files**: 
  - `TAU188_SENA.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.11 Punch Time of Month (TAU177)
- **Menu Name (Thai)**: บันทึกการลงเวลาประจำเดือน
- **Menu Name (English)**: Punch Time of Month
- **JSP Files**: 
  - `TAU177.jsp` - Main screen
  - `TAU223.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.12 Maintenance Raw Data (TAU177_HR)
- **Menu Name (Thai)**: บันทึกการลงเวลาประจำเดือน [HR]
- **Menu Name (English)**: Maintenance Raw Data
- **JSP Files**: 
  - `TAU177_HR.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.2.13 Edit Punch In-Out Data (TAU182)
- **Menu Name (Thai)**: แก้ไขขาเข้า-ออกการลงเวลาประจำเดือน
- **Menu Name (English)**: Edit Punch In-Out Data
- **JSP Files**: 
  - `TAU182.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.2.14 Employees Shift Setup (TA01A0227)
- **Menu Name (Thai)**: กำหนดกะการทำงานของพนักงาน
- **Menu Name (English)**: Employees Shift Setup
- **JSP Files**: 
  - `TAU425.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.3 Data before Processing (TA01A03)

#### 1.3.1 Employee Working Plan (TAU147)
- **Menu Name (Thai)**: แผนการทำงานของพนักงาน
- **Menu Name (English)**: Employee Working Plan
- **JSP Files**: 
  - `TAU147.jsp` - Main screen
  - `TAU154_DETAIL.jsp` - OT detail screen
  - `TAU152_DETAIL.jsp` - OT detail screen
  - `TAU120_NSTDA_DETAIL.jsp` - Leave detail screen
  - `TAU145_NSTDA_DETAIL.jsp` - Change shift detail screen
  - `TAU188_DETAIL.jsp` - Holiday switch detail screen
  - `TAU146_NSTDA_DETAIL.jsp` - Exchange shift detail screen
  - `TAU150_DETAIL.jsp` - OT detail screen
  - `SHOWNSHIFT_NSTDA.jsp` - Show shift screen
  - `TAU_BOSS_CHANGESHIFT_DETAIL.jsp` - Boss change shift detail screen
  - `TAU146_EX_DETAIL.jsp` - Exchange shift detail screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.2 Statistic Data for Punch In/Out (TAU1181)
- **Menu Name (Thai)**: แสดงสถิติการลงเวลา
- **Menu Name (English)**: Statistic Data for Punch In/Out
- **JSP Files**: 
  - `TAU118.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.3 Statistic Data of Leave (TAU1402)
- **Menu Name (Thai)**: แสดงสถิติการลาของพนักงาน
- **Menu Name (English)**: Statistic Data of Leave
- **JSP Files**: 
  - `TAU143_1.jsp` - Main screen
  - `TAU144.jsp` - Related screen
  - `TARS001.jsp` - Report screen
  - `TAU_LVALLOWANCE.jsp` - Leave allowance screen
  - `TAU_PHALLOWANCE.jsp` - Personal holiday allowance screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.4 On the Process (TA01A04)

#### 1.4.1 Import Mtime (Excel) (TA_IMPTIME2)
- **Menu Name (Thai)**: ดึงข้อมูลตารางเวร (Excel)
- **Menu Name (English)**: Import Mtime (Excel)
- **JSP Files**: 
  - `TA_IMPTIME2.jsp` - Main screen
  - `TA_IMPTIME2_PRO.jsp` - Process screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.4.2 Import Data (TA_IMPTMTRANS)
- **Menu Name (Thai)**: นำเข้าข้อมูลวันหยุด (Excel)
- **Menu Name (English)**: Import Data
- **JSP Files**: 
  - `TA_IMPTMTRANS.jsp` - Main screen
  - `TA_IMPTMTRANS_PRO.jsp` - Process screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.4.3 Import Punch In/Out Data (TAU128)
- **Menu Name (Thai)**: ดึงข้อมูลการลงเวลางาน (Text)
- **Menu Name (English)**: Import Punch In/Out Data
- **JSP Files**: 
  - `TAU128.jsp` - Main screen
  - `TAU128_IMPORT.jsp` - Import screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.4.4 Import Leave Balance (CSV) (TAU353)
- **Menu Name (Thai)**: นำเข้าสิทธิการลา (CSV)
- **Menu Name (English)**: Import Leave Balance (CSV)
- **JSP Files**: 
  - `TAU353.jsp` - Main screen
  - `TAU353_ADMIN.jsp` - Admin screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.4.5 Working Hour Process (TAU127)
- **Menu Name (Thai)**: ประมวลผลระบบเวลาการทำงาน
- **Menu Name (English)**: Working Hour Process
- **JSP Files**: 
  - `TAU127.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.6 Clear Time Process (TAU137)
- **Menu Name (Thai)**: ล้างข้อมูลการประมวลผล
- **Menu Name (English)**: Clear Time Process
- **JSP Files**: 
  - `TAU137.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.7 Transfer Employee Data to Payroll (TAU149)
- **Menu Name (Thai)**: โอนข้อมูลการทำงานของพนักงานสู่ระบบเงินเดือน
- **Menu Name (English)**: Transfer Employee Data to Payroll
- **JSP Files**: 
  - `TAU149.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.8 Transfer Employee Data to History (TAU142)
- **Menu Name (Thai)**: โอนข้อมูลการทำงานของพนักงานลงประวัติ
- **Menu Name (English)**: Transfer Employee Data to History
- **JSP Files**: 
  - `TAU142.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.9 CreateChangeShift (TAU_CHGSHIFT)
- **Menu Name (Thai)**: เปลี่ยนแผนการทำงานอัตโนมัติตามการรูดเข้า
- **Menu Name (English)**: CreateChangeShift
- **JSP Files**: 
  - `TAU_CHGSHIFT.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.10 Vacation accrual process (TAVAC001_PROCESS)
- **Menu Name (Thai)**: ประมวลผลการสะสมวันหยุด
- **Menu Name (English)**: Vacation accrual process
- **JSP Files**: 
  - `TAVAC001_PROCESS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.11 Leave Balance Entry (TAU_CALLEAVE)
- **Menu Name (Thai)**: กำหนดสิทธิการลา
- **Menu Name (English)**: Leave Balance Entry
- **JSP Files**: 
  - `TAU_CALLEAVE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.12 Time Process Store (TAU253)
- **Menu Name (Thai)**: ประมวลผลระบบเวลาการทำงาน Store
- **Menu Name (English)**: Time Process Store
- **JSP Files**: 
  - `TAU253.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.13 Time Process Store by Query (TAU256)
- **Menu Name (Thai)**: ประมวลผลระบบเวลาการทำงาน Store by Query
- **Menu Name (English)**: Time Process Store by Query
- **JSP Files**: 
  - `TAU256.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.14 Working Hour Process(Approve) (TAU410)
- **Menu Name (Thai)**: ประมวลผลระบบเวลาการทำงาน(Approve)
- **Menu Name (English)**: Working Hour Process(Approve)
- **JSP Files**: 
  - `TAU410.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.15 Gen plan roster (TAU257)
- **Menu Name (Thai)**: Gen plan roster
- **Menu Name (English)**: Gen plan roster
- **JSP Files**: 
  - `TAU257.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.16 Delete Time Data After Resign Date (TAU_DeleteTimeAfterResign)
- **Menu Name (Thai)**: ลบข้อมูลเวลาหลังจากวันที่พ้นสภาพ
- **Menu Name (English)**: Delete Time Data After Resign Date
- **JSP Files**: 
  - `TAU_DeleteTimeAfterResign.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.5 Data after Processing (TA01A05)

#### 1.5.1 Working Time Warning (TAU125)
- **Menu Name (Thai)**: ข้อมูลความผิดปกติ
- **Menu Name (English)**: Working Time Warning
- **JSP Files**: 
  - `TAU1211.jsp` - Main screen
  - `TAU1212.jsp` - Related screen
  - `TAU1211_Exp.jsp` - Export screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.5.2 Current Data (TAU134_DETAIL)
- **Menu Name (Thai)**: ข้อมูลการทำงานของพนักงาน
- **Menu Name (English)**: Current Data
- **JSP Files**: 
  - `TAU134_DETAIL.jsp` - Main screen
  - `TAU122.jsp` - Related screen
  - `TAU123.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.6 History (TA01A06)

#### 1.6.1 Working Hour History (TAU164)
- **Menu Name (Thai)**: ประวัติข้อมูลการทำงานของพนักงาน
- **Menu Name (English)**: Working Hour History
- **JSP Files**: 
  - `TAU164.jsp` - Main screen
  - `TAU165.jsp` - Related screen
  - `TAU166.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.7 Options (TA01A07)

#### 1.7.1 Generating Shift Pattern (TAU167)
- **Menu Name (Thai)**: เจนเนอร์เรตตารางเวร
- **Menu Name (English)**: Generating Shift Pattern
- **JSP Files**: 
  - `TAU167.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.7.2 Copying Shift Pattern (TAU196)
- **Menu Name (Thai)**: สำเนาตารางเวร
- **Menu Name (English)**: Copying Shift Pattern
- **JSP Files**: 
  - `TAU196.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.7.3 Generate Default Punch In/Out (TAU176)
- **Menu Name (Thai)**: ตัวช่วยบันทึกข้อมูลการลงเวลา
- **Menu Name (English)**: Generate Default Punch In/Out
- **JSP Files**: 
  - `TAU176.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.7.4 Generate Default Working Hour (TAU151)
- **Menu Name (Thai)**: ประมวลผลระบบเวลาการทำงานแบบพื้นฐาน
- **Menu Name (English)**: Generate Default Working Hour
- **JSP Files**: 
  - `TAU151.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.7.5 Vacation Calculation (TAU124)
- **Menu Name (Thai)**: คำนวณสิทธิการลาพักร้อน
- **Menu Name (English)**: Vacation Calculation
- **JSP Files**: 
  - `TAU124.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.7.6 Re-calculate Document (TAU189)
- **Menu Name (Thai)**: คำนวณเอกสารใหม่
- **Menu Name (English)**: Re-calculate Document
- **JSP Files**: 
  - `TAU189.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.7.7 Import VC (TA_IMP_VC)
- **Menu Name (Thai)**: นำเข้าข้อมูลVC
- **Menu Name (English)**: Import VC
- **JSP Files**: 
  - `TA_IMP_VC.jsp` - Main screen
  - `TA_IMP_VC_IMPORT.jsp` - Import screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.7.8 Import Vacation (TA_IMP_VACATION)
- **Menu Name (Thai)**: นำเข้าข้อมูล Vacation
- **Menu Name (English)**: Import Vacation
- **JSP Files**: 
  - `TA_IMP_VACATION.jsp` - Main screen
  - `TA_IMP_VACATION_IMPORT.jsp` - Import screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.8 Setup (TA01A01)

#### 1.8.1 Define Timetable (TAU102)
- **Menu Name (Thai)**: ทะเบียนเวลาการทำงาน
- **Menu Name (English)**: Define Timetable
- **JSP Files**: 
  - `TAU102.jsp` - Main screen (uses linkpageHol function)
  - `TAU103.jsp` - Related screen (holiday)
  - `TAU104.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageHol function for holiday integration

#### 1.8.2 Define Shift Pattern (TAU106)
- **Menu Name (Thai)**: ทะเบียนตารางเวร
- **Menu Name (English)**: Define Shift Pattern
- **JSP Files**: 
  - `TAU106.jsp` - Main screen (uses linkpageHol function)
  - `TAU107.jsp` - Related screen (holiday)
  - `TAU108.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageHol function for holiday integration

#### 1.8.3 Type of Leave Table (TAU130)
- **Menu Name (Thai)**: ทะเบียนประเภทวัน
- **Menu Name (English)**: Type of Leave Table
- **JSP Files**: 
  - `TAU130.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.4 Type of Leave Table (classified by Branch) (TAU130_CHILD)
- **Menu Name (Thai)**: ทะเบียนประเภทวัน (แยกตามสาขา)
- **Menu Name (English)**: Type of Leave Table (classified by Branch)
- **JSP Files**: 
  - `TAU130_CHILD.jsp` - Main screen
  - `TAU130_CHILD1.jsp` - Related screen
  - `PRU084_TIMEHELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.5 Holiday Table (TAU131)
- **Menu Name (Thai)**: ทะเบียนวันหยุด
- **Menu Name (English)**: Holiday Table
- **JSP Files**: 
  - `TAU131.jsp` - Main screen
  - `TAU132.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.6 OT Formula Calculation (TAU140)
- **Menu Name (Thai)**: ทะเบียนสูตรโอที
- **Menu Name (English)**: OT Formula Calculation
- **JSP Files**: 
  - `TAU140.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.7 Reason of Changing (TAU192)
- **Menu Name (Thai)**: ทะเบียนเหตุผลการเปลี่ยนแปลง
- **Menu Name (English)**: Reason of Changing
- **JSP Files**: 
  - `TAU192.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.8 Reason for OT Request (TAU701)
- **Menu Name (Thai)**: ทะเบียนเหตุผลการขอโอที
- **Menu Name (English)**: Reason for OT Request
- **JSP Files**: 
  - `TAU701.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.9 Vacation Condition (TAU187_KKB_NEW)
- **Menu Name (Thai)**: ทะเบียนเงื่อนไขสิทธิการลาพักร้อน
- **Menu Name (English)**: Vacation Condition
- **JSP Files**: 
  - `TAU187_KKB_NEW.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.10 Define Detail Leave Report (TAU133)
- **Menu Name (Thai)**: กำหนดคอลัมน์รายงานรายละเอียดการลา
- **Menu Name (English)**: Define Detail Leave Report
- **JSP Files**: 
  - `TAU133.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.11 TA System Configuration (TA_CONFIG)
- **Menu Name (Thai)**: กำหนดค่าเริ่มต้นของระบบเวลาการทำงาน
- **Menu Name (English)**: TA System Configuration
- **JSP Files**: 
  - `TA_CONFIG.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

#### 1.8.12 Time Machine Table (TAU186)
- **Menu Name (Thai)**: ทะเบียนเครื่องบันทึกเวลา
- **Menu Name (English)**: Time Machine Table
- **JSP Files**: 
  - `TAU186.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.13 Define Column Report Eve (TAU133_CPN)
- **Menu Name (Thai)**: กำหนดคอลัมน์รายงานเวลาทำงานประจำเดือน
- **Menu Name (English)**: Define Column Report Eve
- **JSP Files**: 
  - `TAU133_CPN.jsp` - Main screen
  - `PRU084_LIST.jsp` - List screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

#### 1.8.14 Config Auto Change Shift (TAU1100)
- **Menu Name (Thai)**: กำหนดค่าการเปลี่ยนกะอัตโนมัติ
- **Menu Name (English)**: Config Auto Change Shift
- **JSP Files**: 
  - `TAU1100.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.15 Finger Scan Entry (ZK_DEVICE)
- **Menu Name (Thai)**: ทะเบียนเครื่องบันทึกเวลา
- **Menu Name (English)**: Finger Scan Entry
- **JSP Files**: 
  - `ZK_DEVICE.jsp` - Main screen
  - `ZK_EMPLIST.jsp` - Employee list screen
  - `ZK_ADDEMPLIST.jsp` - Add employee list screen
  - `ZK_ALLOWEMPLIST.jsp` - Allow employee list screen
  - `ZK_ADDALLOWEMPLIST.jsp` - Add allow employee list screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Integration with ZK fingerprint scanner devices

#### 1.8.16 leave reason (TAU426)
- **Menu Name (Thai)**: ทะเบียนเหตุการขอลา
- **Menu Name (English)**: leave reason
- **JSP Files**: 
  - `TAU426.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.8.17 Define Shift Roster (TAU262)
- **Menu Name (Thai)**: กำหนดรูปแบบกะ
- **Menu Name (English)**: Define Shift Roster
- **JSP Files**: 
  - `TAU262.jsp` - Main screen (uses linkpageHol function)
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageHol function for holiday integration

---

### 1.9 OT Scope (TA10A)

#### 1.9.1 OT Type Scope (TA10A01)
- **Menu Name (Thai)**: ประเภทกรอบการอนุมัติ OT
- **Menu Name (English)**: OT Type Scope
- **JSP Files**: 
  - `TAU421.jsp` - Main screen
  - `TAU421_CHILD1.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.9.2 OT Scope (Employee) (TA10A02)
- **Menu Name (Thai)**: กรอบการอนุมัติ OT (พนักงาน)
- **Menu Name (English)**: OT Scope (Employee)
- **JSP Files**: 
  - `TAU422.jsp` - Main screen
  - `TAU422E.jsp` - Edit screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 2. Roster (TA08A)

### 2.1 Type Backpay (TAU254)
- **Menu Name (Thai)**: ประเภทตกเบิก
- **Menu Name (English)**: Type Backpay
- **JSP Files**: 
  - `TAU254.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 3. Terms Of Use (TA05A)

### 3.1 User Manual (TA05A1)
- **Menu Name (Thai)**: คู่มือการใช้งาน
- **Menu Name (English)**: User Manual
- **JSP Files**: 
  - `MODULE_MANUAL.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## Additional Files

### Module Index
- `TA_INDEX.jsp` - Main module index page (if exists)

### Commented Out / Legacy Files
The following files are mentioned in comments but may not be in active use:
- `TAU120_NSTDA_SUANDOK.jsp` - Leave form SUANDOK variant (commented out)
- `TAU150.jsp` - OT Form (commented out)
- `TAU152_OEI_01.jsp`, `TAU154_OEI_01.jsp` - OEI company variants (commented out)
- `TAU146_EX.jsp`, `TAU146_NSTDA_JT.jsp` - Exchange shift variants (commented out)
- `TAU188.jsp` - Change Day Off (commented out)
- `TAU1881_viv.jsp` - Change in Employee Records (commented out)
- Various TAU*.jsp files for old workflow processes (commented out)
- Suan Dok Hospital module screens (commented out)

### Other Time Attendance Files
- `TAU*.jsp` - Time attendance transaction and setup screens
- `TAR*.jsp` - Time attendance report screens (excluded from this inventory)
- `TAVAC*.jsp` - Vacation-related screens
- `TA_*.jsp` - Time attendance import/export screens
- `MG_*.jsp` - Management screens
- `ZK_*.jsp` - ZK fingerprint scanner integration screens
- `SHOW*.jsp` - Show/display screens

---

## Notes

1. **linkpageHol Function**: Some screens use `linkpageHol()` function to integrate with holiday management
2. **Company-Specific Variants**: Some screens have company-specific variants (e.g., NSTDA, SENA, SUANDOK, OEI, JTPack)
3. **Fingerprint Scanner Integration**: ZK device integration for biometric time recording
4. **Complex Processing**: Multiple processing steps (before, on, after) for time attendance calculation
5. **Shift Management**: Complex shift pattern and roster management
6. **OT Management**: Overtime request and approval workflow
7. **Leave Management**: Comprehensive leave request and balance management
8. **Data Import/Export**: Multiple import formats (Excel, Text, CSV) for various data types
9. **Integration with Payroll**: Data transfer to Payroll module for salary calculation
10. **Workflow Integration**: Integration with workflow system for document approval

---

## Migration Considerations

### High Priority Screens
- Daily Attendance screens (TAU134_DAILY, MG_WORKINGTIME, MG_WORKINGTIME_HISTORY)
- Transaction screens (TAU141, TAU120_NSTDA, TAU152, TAU154, TAU145_NSTDA, TAU146_NSTDA, TAU177)
- Setup/Master Data screens (TAU102, TAU106, TAU130, TAU131, TAU140, TAU186, TAU262)
- Processing screens (TAU127, TAU137, TAU149, TAU142, TAVAC001_PROCESS)

### Medium Priority Screens
- Employee Working Plan (TAU147)
- Statistic screens (TAU118, TAU143_1)
- Options screens (TAU167, TAU196, TAU176, TAU151, TAU124, TAU189)
- OT Scope screens (TAU421, TAU422)
- Import screens (TA_IMPTIME2, TA_IMPTMTRANS, TAU128, TAU353)

### Lower Priority Screens
- History screens (TAU164)
- Data after Processing screens (TAU1211, TAU134_DETAIL)
- Roster screens (TAU254)
- Terms Of Use (User Manual)

### Technical Notes
- Many screens use the CSC library framework
- Holiday integration using linkpageHol function
- Fingerprint scanner device integration (ZK devices)
- Complex shift pattern and roster generation
- Multiple data import formats (Excel, Text, CSV)
- Integration with Payroll module for data transfer
- Workflow integration for document approval
- Multi-language support (Thai/English) built into many screens
- Company-specific variants require careful handling
- Real-time data processing for attendance calculation
- Leave balance calculation and accrual processing
- OT formula calculation engine
- Automatic shift change based on punch-in data

