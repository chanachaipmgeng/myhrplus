# Empview Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~200+ screens
- **Main Categories**: 10 categories
- **Active Menus**: 100+ menu items
- **Module Code**: EMV (Employee View)
- **Base Path**: `hrAppWeb.war/EMPVIEW/`

## Summary Statistics
- **Home**: 1 screen
- **Company Information**: 15 screens
- **My Profile**: 50+ screens
- **Manager Functions**: 40+ screens
- **Compensation**: 8 screens
- **Appraisal**: 60+ screens
- **Workflow**: 2 screens
- **User Management**: 2 screens
- **Roster Management**: 20+ screens

---

## 1. Home (EM00A)

### 1.1 Home (EM00A)
- **Menu Name (Thai)**: หน้าแรก
- **Menu Name (English)**: Home
- **JSP Files**: 
  - `INDEX.jsp` - Main index page
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-home

---

## 2. Old Version (EM10A)

### 2.1 Old Version (EM10A)
- **Menu Name (Thai)**: เวอร์ชั่นเก่า
- **Menu Name (English)**: Old Version
- **JSP Files**: 
  - `SEND_REQUEST_LOGIN.jsp` - Old version login request
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-sync-alt

---

## 3. Company (EM01A)

### 3.1 Company Profile (EM01A01)
- **Menu Name (Thai)**: ประวัติบริษัท
- **Menu Name (English)**: Company Profile
- **JSP Files**: 
  - `OI_PROFILE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-building

### 3.2 Vision/Mission (EM01A02)
- **Menu Name (Thai)**: วิสัยทัศน์/พันธกิจ
- **Menu Name (English)**: Vision/Mission
- **JSP Files**: 
  - `OI_VISSION.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-trophy

### 3.3 Organization Chart (EM01A03)
- **Menu Name (Thai)**: โครงสร้างผังองค์กร
- **Menu Name (English)**: Organization Chart
- **JSP Files**: 
  - `OI_ORGCHART_NEW.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

### 3.4 Organization Chart (New) (EM01A20)
- **Menu Name (Thai)**: โครงสร้างผังองค์กร(ใหม่)
- **Menu Name (English)**: Organization Chart(New)
- **JSP Files**: 
  - `CSCCHART.jsp` - Main screen (opens in new tab)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

### 3.5 Orgchart and Reporting Line (EM01A201)
- **Menu Name (Thai)**: โครงสร้างองค์กรและสายบังคับบัญชา
- **Menu Name (English)**: Orgchart and Reporting Line
- **JSP Files**: 
  - `OrgchartAndReportingLine.jsp` - Main screen (opens in new tab)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

### 3.6 Orgchart (EM01A25)
- **Menu Name (Thai)**: Orgchart
- **Menu Name (English)**: Orgchart
- **JSP Files**: 
  - `BOX_THE_NUKE.jsp` - Main screen (opens in new tab)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

### 3.7 Line Command Structure (EM01A04)
- **Menu Name (Thai)**: โครงสร้างสายบังคับบัญชา
- **Menu Name (English)**: Line Command Structure
- **JSP Files**: 
  - `/hr/EMPVIEW/OI_CMD_STRUCTURE.jsp` - Main screen
  - Related: `org_chart` page
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.8 Policy/Regulation/Rules (EM01A05)
- **Menu Name (Thai)**: ข้อบังคับ/ระเบียบ/ประกาศ
- **Menu Name (English)**: Policy/Regulation/Rules
- **JSP Files**: 
  - `OI_POLICY.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-lock

### 3.9 List of Employee (EM01A21)
- **Menu Name (Thai)**: รายชื่อพนักงาน
- **Menu Name (English)**: List of Employee
- **JSP Files**: 
  - `EMV008_GPF.jsp` - Main screen
  - `EMV024.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-list

### 3.10 Yearly Calendar (EM01A08)
- **Menu Name (Thai)**: ปฏิทินประจำปี
- **Menu Name (English)**: Yearly Calendar
- **JSP Files**: 
  - `OI-HOLIDAY.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-calendar

### 3.11 Raw Data (EM01A09)
- **Menu Name (Thai)**: ข้อมูลการลงเวลา
- **Menu Name (English)**: Raw Data
- **JSP Files**: 
  - `COM_SWIPETIME.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

### 3.12 Training Plan (EM01A12)
- **Menu Name (Thai)**: แผนการอบรม
- **Menu Name (English)**: Training Plan
- **JSP Files**: 
  - `TREMP002.jsp` - Main screen
  - `TREMP013_1.jsp` - Related screen
  - `TREMP004.jsp` - Related screen
  - `TREMP010.jsp` - Related screen
  - `TREMP010H.jsp` - Related screen
  - `TRA200.jsp` - Related screen (TRAINING module)
  - `TREMP012.jsp` - Related screen
  - `TREMP007.jsp` - Related screen
  - `TREMP012H.jsp` - Related screen
  - `TREMP012W.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-graduation-cap

### 3.13 Job Vacancy Announcement (EM01A13)
- **Menu Name (Thai)**: ประกาศรับสมัครงาน
- **Menu Name (English)**: Job Vacancy Announcement
- **JSP Files**: 
  - `REV002.jsp` - Main screen
  - `REV013.jsp` - Related screen
  - `REQVW.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No
- **Icon**: fa-bookmark-o

### 3.14 Notification (EM01A14)
- **Menu Name (Thai)**: ระบบแจ้งเตือน
- **Menu Name (English)**: Notification
- **JSP Files**: 
  - `MESSAGE_LISTS.jsp` - Main screen
  - `Edit_Message.jsp` - Edit message screen
  - `RECEIVERS_LIST.jsp` - Receivers list screen
  - `Create_New_Message.jsp` - Create message screen
  - `USERLISTMESSAGE.jsp` - User list screen
  - `Clear_Message_lists.jsp` - Clear messages screen
  - `PREVIEW.jsp` - Preview screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-list

### 3.15 Additional Company Menus (EM01A15-EM01A21)
- **ZeeMe Interface (EM01A15)**: เชื่อมต่อข้อมูล ZeeMe - No JSP files
- **Oil price (EM01A16)**: Oil price - No JSP files
- **Rate Perround (EM01A17)**: Rate Perround - No JSP files
- **Allowance (EM01A18)**: Allowance - No JSP files
- **High cost (EM01A19)**: High cost - No JSP files
- **Shift (EM01A21)**: Shift - No JSP files
- **Work Area Group (EM01A21)**: Work Area Group - No JSP files

---

## 4. My Profile (EM02A)

### 4.1 Personal Profile (EM02A01)
- **Menu Name (Thai)**: ข้อมูลส่วนตัว
- **Menu Name (English)**: Personal Profile
- **JSP Files**: 
  - `PI_PROFILE.jsp` - Main screen
  - `EMV_FAMILYHELP.jsp` - Family help screen
  - `EMV_EDUCATEHELP.jsp` - Education help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-user

### 4.2 Personal Profile Yangon (EM02A02)
- **Menu Name (Thai)**: ข้อมูลส่วนตัว Yangon
- **Menu Name (English)**: Personal Profile Yangon
- **JSP Files**: 
  - `PI_PROFILE_YANGON.jsp` - Main screen
  - `EMV_FAMILYHELP.jsp` - Family help screen
  - `EMV_EDUCATEHELP.jsp` - Education help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-user

### 4.3 Employee Information (EM02A03)
- **Menu Name (Thai)**: ข้อมูลการเป็นพนักงาน
- **Menu Name (English)**: Employee Information
- **JSP Files**: 
  - `PI_WORKINGDETAILS.jsp` - Main screen
  - `PI_ADJPOSITION.jsp` - Adjust position screen
  - `PI_ADJPOSITION_HIS.jsp` - Position history screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-user

### 4.4 Attendance (EMP03A05)

#### 4.4.1 Punch In/Out Checking Data (EM02A07)
- **Menu Name (Thai)**: ข้อมูลความผิดปกติและทำงานล่วงเวลา
- **Menu Name (English)**: Punch In/Out Checking Data
- **JSP Files**: 
  - `PI_ERROR.jsp` - Main screen
  - `PI_ERROR_DESC.jsp` - Error description screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

#### 4.4.2 Raw Data (EM02A04)
- **Menu Name (Thai)**: ข้อมูลการลงเวลา
- **Menu Name (English)**: Raw Data
- **JSP Files**: 
  - `PI_SWIPETIME.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-credit-card

#### 4.4.3 Working hour Data (EM02A08)
- **Menu Name (Thai)**: ข้อมูลการบันทึกเวลาทำงาน
- **Menu Name (English)**: Working hour Data
- **JSP Files**: 
  - `PI_WORKINGTIME.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

#### 4.4.4 Working hour Data (Show Device) (EM02A38)
- **Menu Name (Thai)**: ข้อมูลการบันทึกเวลาทำงาน (แสดงรหัสเครื่องรูดบัตร)
- **Menu Name (English)**: Working hour Data (Show Device)
- **JSP Files**: 
  - `PI_WORKINGTIME_CHKWK.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

#### 4.4.5 Employee Privilege Leave (EM02A05)
- **Menu Name (Thai)**: สิทธิการลา
- **Menu Name (English)**: Employee Privilege Leave
- **JSP Files**: 
  - `PI_LEAVE.jsp` - Main screen
  - `PI_LEAVEDESC.jsp` - Leave description screen
  - `PI_LATEDESC.jsp` - Late description screen
  - `TAU144.jsp` - Related screen (TA module)
  - `TAU_PHALLOWANCE.jsp` - PH allowance screen
  - `TAU_LVALLOWANCE.jsp` - LV allowance screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-calendar-plus-o

#### 4.4.6 Employee Privilege Leave With Absent Type (EM02A06)
- **Menu Name (Thai)**: สิทธิการลารวมประเภทวันลา
- **Menu Name (English)**: Employee Privilege Leave With Absent Type
- **JSP Files**: 
  - `PI_LEAVE_WITHABSENTTYPE.jsp` - Main screen
  - `PI_LEAVEDESC.jsp` - Leave description screen
  - `PI_LATEDESC.jsp` - Late description screen
  - `TAU144.jsp` - Related screen
  - `TAU_PHALLOWANCE.jsp` - PH allowance screen
  - `TAU_LVALLOWANCE.jsp` - LV allowance screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-calendar-plus-o

#### 4.4.7 Statistic (EM02A22)

##### 4.4.7.1 Statistic of OT Requisition (EM02A221)
- **Menu Name (Thai)**: สถิติการขอทำงานล่วงเวลา
- **Menu Name (English)**: Statistic of OT Requisition
- **JSP Files**: 
  - `STAT_TOT_VIEW.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

##### 4.4.7.2 Statistic of Leave Requisition (EM02A222)
- **Menu Name (Thai)**: สถิติการลาหยุดงาน
- **Menu Name (English)**: Statistic of Leave Requisition
- **JSP Files**: 
  - `STAT_LEAVE_VIEW.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

##### 4.4.7.3 Statistic of Change Requisition (EM02A223)
- **Menu Name (Thai)**: สถิติการปรับปรุงเวลาการทำงาน
- **Menu Name (English)**: Statistic of Change Requisition
- **JSP Files**: 
  - `STAT_ATT_VIEW.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

#### 4.4.8 Working History Data (EM02A09)
- **Menu Name (Thai)**: ข้อมูลประวัติการบันทึกเวลาทำงาน
- **Menu Name (English)**: Working History Data
- **JSP Files**: 
  - `PI_WORKINGHISTORY.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

#### 4.4.9 Shift Plan (EM02A10)
- **Menu Name (Thai)**: ข้อมูลตารางเวรการทำงาน
- **Menu Name (English)**: Shift Plan
- **JSP Files**: 
  - `PI_SHIFTPLAN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

### 4.5 Withholding Tax Certificate (50 Bis) (EM02A29)
- **Menu Name (Thai)**: เอกสารหนังสือรับรองการหักภาษี ณ ที่จ่าย (50 ทวิ)
- **Menu Name (English)**: Withholding Tax Certificate (50 Bis)
- **JSP Files**: 
  - `TWI50.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 4.6 (50 ทวิ) SUANDOK (EM02A31)
- **Menu Name (Thai)**: (50 ทวิ) SUANDOK
- **Menu Name (English)**: (50 ทวิ) SUANDOK
- **JSP Files**: 
  - `TWI50_SUANDOK.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 4.7 Training Survey (EM02A14)
- **Menu Name (Thai)**: แบบสำรวจความจำเป็นในการฝึกอบรม
- **Menu Name (English)**: Training Survey
- **JSP Files**: 
  - `SURVEY.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-user

### 4.8 e-payslip Variants (EM02A21, EM02A21H, EM02A21K, etc.)
Multiple e-payslip screens for different companies:

#### 4.8.1 e-payslip (EM02A21)
- **Menu Name (Thai)**: สลิปเงินเดือนออนไลน์
- **Menu Name (English)**: e-payslip
- **JSP Files**: 
  - `PAYSLIP_SKI.jsp` - Main screen
  - `e-Payslip.jsp` - Payslip display screen
  - `SHOWPAYSLIP_PDF.jsp` - PDF display screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-money

#### 4.8.2 e-payslip(HOMA) (EM02A21H)
- **JSP Files**: 
  - `PAYSLIP_HOMA.jsp`
  - `e-Payslip.jsp`
  - `SHOWPAYSLIP_HOMA_PDF.jsp`

#### 4.8.3 e-payslip(KOKOTEL) (EM02A21K)
- **JSP Files**: 
  - `PAYSLIP_KOKOTEL.jsp`
  - `e-Payslip_KOKOTEL.jsp`

#### 4.8.4 e-payslip(VELA) (EM02A21V)
- **JSP Files**: 
  - `PAYSLIP_VELA.jsp`
  - `e-Payslip_VELA.jsp`

#### 4.8.5 e-payslip(MAHANAKHON) (EM02A21M)
- **JSP Files**: 
  - `PAYSLIP_MAHANAKHON.jsp`
  - `SHOWPAYSLIP_MAHANAKHON.jsp`
  - `SHOWPAYSLIP_MAHANAKHON_PDF.jsp`

#### 4.8.6 e-payslip(NPKRB) (EM02A21N)
- **JSP Files**: 
  - `PAYSLIP_NPKRB.jsp`
  - `e-Payslip_NPKRB.jsp`

#### 4.8.7 e-payslip(COJ) (EM02A21C)
- **JSP Files**: 
  - `PAYSLIP_COJ.jsp`
  - `SHOWPAYSLIP_COJ.jsp`
  - `SHOWPAYSLIP_COJ_PDF.jsp`

#### 4.8.8 e-payslip(JOTUN) (EM02A21J)
- **JSP Files**: 
  - `PAYSLIP_JOTUN.jsp`
  - `SHOWPAYSLIP_JOTUN.jsp`
  - `SHOWPAYSLIP_JOTUN_PDF.jsp`

#### 4.8.9 e-payslip(TRUBB) (EM02A21T)
- **JSP Files**: 
  - `PAYSLIP_TRUBB.jsp`
  - `SHOWPAYSLIP_TRUBB.jsp`
  - `SHOWPAYSLIP_TRUBB_PDF.jsp`

#### 4.8.10 e-payslip(CAAT) (EM02A24)
- **JSP Files**: 
  - `PAYSLIP_CAAT.jsp`
  - `e-Payslip.jsp`

#### 4.8.11 Working Report (EM02A25)
- **Menu Name (Thai)**: Working Report
- **Menu Name (English)**: Working Report
- **JSP Files**: 
  - `TIME_DATA_TKS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 4.8.12 e-payslip(DHAS) (EM02A26)
- **JSP Files**: 
  - `PAYSLIP_DHAS.jsp`
  - `e-Payslip_DHAS.jsp`

#### 4.8.13 e-payslip(MONTIEN) (EM02A33)
- **JSP Files**: 
  - `PAYSLIP_MONTIEN.jsp`
  - `SHOWPAYSLIP_MONTIEN.jsp`
  - `SHOWPAYSLIP_MONTIEN_PDF.jsp`

#### 4.8.14 e-payslip(NAMTHEUN) (EM02A27)
- **JSP Files**: 
  - `PAYSLIP_NAMTHEUN.jsp`
  - `SHOWPAYSLIP_NAMTHEUN.jsp`
  - `SHOWPAYSLIP_NAMTHEUN_PDF.jsp`

#### 4.8.15 e-payslip(EGATi) (EM02A28)
- **JSP Files**: 
  - `PAYSLIP_EGATi.jsp`
  - `SHOWPAYSLIP_EGATi.jsp`
  - `SHOWPAYSLIP_EGATi_PDF.jsp`

#### 4.8.16 e-payslip(THREEBOND) (EM02A30)
- **JSP Files**: 
  - `PAYSLIP_THREEBOND.jsp`
  - `SHOWPAYSLIP_THREEBOND.jsp`

#### 4.8.17 e-payslip(USATHORN) (EM02A32)
- **JSP Files**: 
  - `PAYSLIP_USATHORN.jsp`
  - `SHOWPAYSLIP_USATHORN.jsp`
  - `SHOWPAYSLIP_USATHORN_PDF.jsp`

#### 4.8.18 e-payslip(JTFOOD) (EM02A34)
- **JSP Files**: 
  - `PAYSLIP_JTFOOD.jsp`
  - `SHOWPAYSLIP_JTFOOD.jsp`

#### 4.8.19 E-Payroll Slip Total Rewards Statement (NAMTHEUN) (EM02A35)
- **JSP Files**: 
  - `PAYSLIP_NTPC.jsp`
  - `PAYSLIP_NTPC_PDF.jsp`

#### 4.8.20 e-payslip(KURITA) (EM02A36)
- **JSP Files**: 
  - `PAYSLIP_KURITA.jsp`
  - `e-Payslip.jsp`
  - `SHOWPAYSLIP_KURITA.jsp`
  - `SHOWPAYSLIP_KURITA_PDF.jsp`

#### 4.8.21 e-payslip(ARC) (EM02A37)
- **JSP Files**: 
  - `PAYSLIP_ARC.jsp`
  - `e-Payslip.jsp`
  - `SHOWPAYSLIP_ARC.jsp`
  - `SHOWPAYSLIP_ARC_PDF.jsp`

### 4.9 Welfare (EMP03A06)

#### 4.9.1 Welfare Details (EMP03A0601)
- **Menu Name (Thai)**: ข้อมูลสวัสดิการ
- **Menu Name (English)**: Welfare Details
- **JSP Files**: 
  - `WEL_EMV011.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-check-circle

#### 4.9.2 Allowance Check and Inspection (EM02A23)
- **Menu Name (Thai)**: ตรวจสอบยอดการเบิก
- **Menu Name (English)**: Allowance Check and Inspection
- **JSP Files**: 
  - `WEL_EMV008.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-check-circle

#### 4.9.3 History of Welfare Using (EM02A18)
- **Menu Name (Thai)**: ประวัติการเบิกใช้สวัสดิการ
- **Menu Name (English)**: History of Welfare Using
- **JSP Files**: 
  - `WEL_EMV001.jsp` - Main screen
  - `WEL_EMV002.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 4.9.4 History of Vehicle Requested (EM02A17)
- **Menu Name (Thai)**: ประวัติการเบิกค่าพาหนะ
- **Menu Name (English)**: History of Vehicle Requested
- **JSP Files**: 
  - `WEL_EMV001_GPF.jsp` - Main screen
  - `WEL_EMV002_GPF.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 4.9.5 Borrowing the Asset (EM02A12)
- **Menu Name (Thai)**: ประวัติการยืมทรัพย์สิน
- **Menu Name (English)**: Borrowing the Asset
- **JSP Files**: 
  - `WEL_EMV00301.jsp` - Main screen
  - `WEL_EMV003011.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 4.9.6 History of Welfare (EM02A11)
- **Menu Name (Thai)**: ประวัติการใช้สวัสดิการปีที่ผ่านมา
- **Menu Name (English)**: History of Welfare
- **JSP Files**: 
  - `WEL_EMV009.jsp` - Main screen
  - `WEL_EMV010.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 4.9.7 Annual Health Check Up History (EM02A13)
- **Menu Name (Thai)**: ประวัติการตรวจสุขภาพประจำปี
- **Menu Name (English)**: Annual Health Check Up History
- **JSP Files**: 
  - `WEL_EMV004.jsp` - Main screen
  - `WEL_EMV005.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-medkit

### 4.10 Customers (EMP03A08)

#### 4.10.1 Company Contact Information (EM02A101)
- **Menu Name (Thai)**: ทะเบียนบริษัท
- **Menu Name (English)**: Company Contact Information
- **JSP Files**: 
  - `CSO11.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

#### 4.10.2 Purpose Of Contact (EM02A102)
- **Menu Name (Thai)**: ทะเบียนวัตถุประสงค์ลูกค้า
- **Menu Name (English)**: Purpose Of Contact
- **JSP Files**: 
  - `CSO12.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

### 4.11 Training (EMP03A09)

#### 4.11.1 History and Training Plan Detail (EMP03A091)
- **Menu Name (Thai)**: ข้อมูลประวัติและแผนการอบรม
- **Menu Name (English)**: History and Training Plan Detail
- **JSP Files**: 
  - `TREMP001.jsp` - Main screen
  - `TREMP006.jsp` - Related screen
  - `TREMP007.jsp` - Related screen
  - `TREMP009.jsp` - Related screen
  - `TREMP011.jsp` - Related screen
  - `TREMP012.jsp` - Related screen
  - `TREMP012H.jsp` - Related screen
  - `TREMP012W.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

#### 4.11.2 History and Training Plan Detail (JETASIA) (EMP03A095)
- **Menu Name (Thai)**: ข้อมูลประวัติและแผนการอบรม (JETASIA)
- **Menu Name (English)**: History and Training Plan Detail (JETASIA)
- **JSP Files**: 
  - `TREMP001_JETASIA.jsp` - Main screen
  - `TREMP006_JETASIA.jsp` - Related screen
  - `TREMP007_JETASIA.jsp` - Related screen
  - `TREMP009_JETASIA.jsp` - Related screen
  - `TREMP011_JETASIA.jsp` - Related screen
  - `TREMP012_JETASIA.jsp` - Related screen
  - `TREMP012H_JETASIA.jsp` - Related screen
  - `TREMP012W_JETASIA.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

#### 4.11.3 In-hour Training and Instructor Evaluation Form (EMP03A092)
- **Menu Name (Thai)**: แบบประเมินการจัดฝึกอบรมภายในและวิทยากร
- **Menu Name (English)**: In-hour Training and Instructor Evaluation Form
- **JSP Files**: 
  - `TRN_APS01.jsp` - Main screen
  - `TRN_APS01_EVAL.jsp` - Evaluation screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

#### 4.11.4 Training Efficiency Follow up Form (EMP03A093)
- **Menu Name (Thai)**: แบบติดตามประสิทธิผลการฝึกอบรม
- **Menu Name (English)**: Training Efficiency Follow up Form
- **JSP Files**: 
  - `TRN_FOLLOWUP.jsp` - Main screen
  - `TRN_FOLLOWUP_FORM.jsp` - Follow-up form screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

#### 4.11.5 Training Evaluation Form (EMP03A094)
- **Menu Name (Thai)**: แบบปะเมินการจัดฝึกอบรม
- **Menu Name (English)**: Training Evaluation Form
- **JSP Files**: 
  - `TRN_APS02.jsp` - Main screen
  - `TRN_APS02_FORM_EMP.jsp` - Employee form screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

---

## 5. Manager (EM05A)

### 5.1 Subordinate List (EM05A05)
- **Menu Name (Thai)**: รายชื่อผู้ใต้บังคับบัญชา
- **Menu Name (English)**: Subordinate List
- **JSP Files**: 
  - `MG_SUBORDINATE_GPF.jsp` - Main screen
  - `SUB_PROFILE_GPF.jsp` - Subordinate profile screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

### 5.2 Employee (EMP05A02)

#### 5.2.1 Subordinate List (EM05A021)
- **Menu Name (Thai)**: ประวัติย่อพนักงาน
- **Menu Name (English)**: Subordinate List
- **JSP Files**: 
  - `MG_SUBORDINATE_ACC2.jsp` - Main screen
  - `PI_PROFILE_1P.jsp` - Profile 1 page screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-user

#### 5.2.2 Subordinate List (EM05A022)
- **Menu Name (Thai)**: ประวัติย่อพนักงานเพิ่มเติม
- **Menu Name (English)**: Subordinate List
- **JSP Files**: 
  - `MG_SUBORDINATE_ACC2_2.jsp` - Main screen
  - `PI_PROFILE_2P.jsp` - Profile 2 page screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-user

### 5.3 Attendance (EMP05A03)

#### 5.3.1 Working Time Detail (EM05A09)
- **Menu Name (Thai)**: ข้อมูลการบันทึกเวลาทำงาน
- **Menu Name (English)**: Working Time Detail
- **JSP Files**: 
  - `MG_WORKINGTIME.jsp` - Main screen
  - `EMP_WORKINGTIME.jsp` - Employee working time screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.2 Working Time Detail (Show Device) (EM05A59)
- **Menu Name (Thai)**: ข้อมูลการบันทึกเวลาทำงาน (แสดงรหัสเครื่องรูดบัตร)
- **Menu Name (English)**: Working Time Detail (Show Device)
- **JSP Files**: 
  - `MG_WORKINGTIME_CHKWK.jsp` - Main screen
  - `EMP_WORKINGTIME_CHKWK.jsp` - Employee working time screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.3 Daily Statistic (EM05A08)
- **Menu Name (Thai)**: ข้อมูลความผิดปกติและทำงานล่วงเวลา
- **Menu Name (English)**: Daily Statistic
- **JSP Files**: 
  - `MG_ERROR.jsp` - Main screen
  - `PI_ERROR_DESC.jsp` - Error description screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

#### 5.3.4 Punch Time Report (EM05A06)
- **Menu Name (Thai)**: ข้อมูลการลงเวลา
- **Menu Name (English)**: Punch Time Report
- **JSP Files**: 
  - `MG_SWIPETIME.jsp` - Main screen
  - `EMP_SWIPETIME.jsp` - Employee swipe time screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-credit-card

#### 5.3.5 Leave Detail (EM05A17)
- **Menu Name (Thai)**: สถิติการลา
- **Menu Name (English)**: Leave Detail
- **JSP Files**: 
  - `MG_LEAVE.jsp` - Main screen
  - `EMP_LEAVE.jsp` - Employee leave screen
  - `EMP_LEAVEDESC.jsp` - Leave description screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-bar-chart

#### 5.3.6 Set Dayoff (EM05A18)
- **Menu Name (Thai)**: ปรับเปลี่ยนวันหยุดปกติ
- **Menu Name (English)**: Set Dayoff
- **JSP Files**: 
  - `PI_CHANGE_SWIPETIME_ADMIN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-retweet

#### 5.3.7 Working Time Detail History (EM05A10)
- **Menu Name (Thai)**: ข้อมูลประวัติการบันทึกเวลาทำงาน
- **Menu Name (English)**: Working Time Detail History
- **JSP Files**: 
  - `MG_WORKINGTIME_HISTORY.jsp` - Main screen
  - `EMP_WORKINGTIME_HISTORY.jsp` - Employee history screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.8 Setup Shift Employees (EMP05A0301)
- **Menu Name (Thai)**: กำหนดกะการทำงานของพนักงาน
- **Menu Name (English)**: Setup Shift Employees
- **JSP Files**: 
  - `EMV_TIME0TRANS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-adjust

#### 5.3.9 Daily Time Attendance (EM05A0901)
- **Menu Name (Thai)**: จัดการข้อมูลการทำงาน
- **Menu Name (English)**: Daily Time Attendance
- **JSP Files**: 
  - `MG_DAILY.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.10 Daily Time Attendance (B2) (EM05A0302)
- **Menu Name (Thai)**: จัดการข้อมูลการทำงาน (B2)
- **Menu Name (English)**: Daily Time Attendance (B2)
- **JSP Files**: 
  - `MG_DAILY_B2.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.11 Daily Time Attendance (U Sathorn) (EM05A0304)
- **Menu Name (Thai)**: จัดการข้อมูลการทำงาน (U Sathorn)
- **Menu Name (English)**: Daily Time Attendance (U Sathorn)
- **JSP Files**: 
  - `MG_DAILY_USathorn.jsp` - Main screen
  - `TAU134_DAILY_Usathorn.jsp` - Related screen (TA module)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.12 Daily Time Attendance (Montien) (EM05A0305)
- **Menu Name (Thai)**: จัดการข้อมูลการทำงาน (Montien)
- **Menu Name (English)**: Daily Time Attendance (Montien)
- **JSP Files**: 
  - `MG_DAILY_MONTIEN.jsp` - Main screen
  - `TAU134_DAILY_MONTIEN.jsp` - Related screen (TA module)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.13 ตารางเวรการทำงาน (EM05A0306)
- **Menu Name (Thai)**: ตารางเวรการทำงาน
- **Menu Name (English)**: ตารางเวรการทำงาน
- **JSP Files**: 
  - `PI_SHIFTPLAN_SUB.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.3.14 Additional Attendance Menus (EM05A0307-EM05A0311)
- **Summary Data (EM05A0307)**: บันทึกข้อมูลแบบย่อ - No JSP files
- **Import Summary Data (EM05A0308)**: นำเข้าข้อมูลแบบย่อ - No JSP files
- **Transfer Temporary (EM05A0309)**: Transfer Temporary - No JSP files
- **Transfer Manager (EM05A0310)**: Transfer Manager - No JSP files
- **Disclaimed Processing (EM05A0311)**: Disclaimed Processing - No JSP files

### 5.4 Training (EMP05A04)

#### 5.4.1 Training Record (EM05A11)
- **Menu Name (Thai)**: ข้อมูลประวัติและแผนการอบรม
- **Menu Name (English)**: Training Record
- **JSP Files**: 
  - `TREMP005.jsp` - Main screen
  - `TREMP001.jsp` - Related screen
  - `TREMP006.jsp` - Related screen
  - `TREMP007.jsp` - Related screen
  - `TREMP009.jsp` - Related screen
  - `TREMP011.jsp` - Related screen
  - `TREMP012.jsp` - Related screen
  - `TREMP012H.jsp` - Related screen
  - `TREMP012W.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.4.2 Follow UP Evaluation (EM05A21)
- **Menu Name (Thai)**: แบบติดตามประสิทธิผลการฝึกอบรม
- **Menu Name (English)**: Follow UP Evaluation
- **JSP Files**: 
  - `TRN_FOLLOWUP_BOSS.jsp` - Main screen
  - `TRN_FOLLOWUP_FORM.jsp` - Follow-up form screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-book

### 5.5 Recruitment (EMP05A05)

#### 5.5.1 Applicant (EM05A01)
- **Menu Name (Thai)**: รายชื่อผู้สมัครงาน
- **Menu Name (English)**: Applicant
- **JSP Files**: 
  - `REC_APPLICANT.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-users

#### 5.5.2 Candidate (EM05A02)
- **Menu Name (Thai)**: รายชื่อผู้ผ่านการคัดเลือก
- **Menu Name (English)**: Candidate
- **JSP Files**: 
  - `REC_CANDIDATE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-users

### 5.6 Appraisal (EMP05A07)

#### 5.6.1 Objective Individuals (EM05A22)
- **Menu Name (Thai)**: Objective Individuals
- **Menu Name (English)**: Objective Individuals
- **JSP Files**: 
  - `APS_JET_OBJLIST.jsp` - Main screen
  - `APS_JET_OBJ.jsp` - Objective screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

#### 5.6.2 Performance Evaluation For Manager (EM05A23)
- **Menu Name (Thai)**: Performance Evaluation For Manager
- **Menu Name (English)**: Performance Evaluation For Manager
- **JSP Files**: 
  - `APS_JET_PER_MANLIST.jsp` - Main screen
  - `APS_JET_PER_MAN.jsp` - Evaluation screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

#### 5.6.3 Performance Evaluation For Employee (EM05A24)
- **Menu Name (Thai)**: Performance Evaluation For Employee
- **Menu Name (English)**: Performance Evaluation For Employee
- **JSP Files**: 
  - `APS_JET_PER_EMPLIST.jsp` - Main screen
  - `APS_JET_PER_EMP.jsp` - Evaluation screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 5.7 Setup (EMP05A06)

#### 5.7.1 Subordinate Group (EM05A01)
- **Menu Name (Thai)**: จัดกลุ่มผู้ใต้บังคับบัญชา
- **Menu Name (English)**: Subordinate Group
- **JSP Files**: 
  - `MG_SUBORDINATEGRP.jsp` - Main screen
  - `SUB_PROFILE.jsp` - Subordinate profile screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-users

#### 5.7.2 WorkingTime Pattern (EM05A02)
- **Menu Name (Thai)**: วางแผนเวลาการทำงาน
- **Menu Name (English)**: WorkingTime Pattern
- **JSP Files**: 
  - `MG_PLAN.jsp` - Main screen
  - `PRU084SEARCH.jsp` - Search screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

#### 5.7.3 Import Mtime2 (EM05A011)
- **Menu Name (Thai)**: วางแผนเวลาการทำงาน (Excel)
- **Menu Name (English)**: Import Mtime2
- **JSP Files**: 
  - `IMPORT_MTIME.jsp` - Main screen
  - `IMPORT_MTIME_PRO.jsp` - Process screen
  - `PRU084SEARCH.jsp` - Search screen
  - `SHOWSHIFTLIST_ADMIN.jsp` - Shift list screen (TA module)
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

### 5.8 Working Reports (EM05A0902-EM05A0906)

#### 5.8.1 Working Report (Approver 1) (EM05A0902)
- **Menu Name (Thai)**: Working Report (Approver 1)
- **Menu Name (English)**: Working Report (Approver 1)
- **JSP Files**: 
  - `TIME_DATA_TKS_BOSS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.8.2 Working Report (Approver 2-3) (EM05A0904)
- **Menu Name (Thai)**: Working Report (Approver 2-3)
- **Menu Name (English)**: Working Report (Approver 2-3)
- **JSP Files**: 
  - `TIME_DATA_TKS_APP.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.8.3 Working Report (Personnel) (EM05A0905)
- **Menu Name (Thai)**: Working Report (Personnel)
- **Menu Name (English)**: Working Report (Personnel)
- **JSP Files**: 
  - `TIME_DATA_TKS_PSN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.8.4 Working Report (Accounting) (EM05A0903)
- **Menu Name (Thai)**: Working Report (Accounting)
- **Menu Name (English)**: Working Report (Accounting)
- **JSP Files**: 
  - `TIME_DATA_TKS_ACC.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

#### 5.8.5 Working Report (HR Authorization) (EM05A0906)
- **Menu Name (Thai)**: Working Report (HR Authorization)
- **Menu Name (English)**: Working Report (HR Authorization)
- **JSP Files**: 
  - `TIME_DATA_TKS_HR.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-text-o

### 5.9 Charts (EM05A012)
- **Menu Name (Thai)**: กราฟ
- **Menu Name (English)**: Charts
- **JSP Files**: 
  - `EMV_CHARTS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-clock-o

---

## 6. Compensation (EM04A)

### 6.1 compensation and overtime pay monthly (EM04A01)
- **Menu Name (Thai)**: บันทีกค่าตอบแทนแบบรายเดือน
- **Menu Name (English)**: compensation and overtime pay monthly
- **JSP Files**: 
  - `PRU186.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.2 บันทึกค่าตอบแทนและล่วงเวลาแบบรายวัน-ทีละวัน (EM04A02)
- **Menu Name (Thai)**: บันทึกค่าตอบแทนแบบรายวัน-ทีละวัน
- **Menu Name (English)**: บันทึกค่าตอบแทนและล่วงเวลาแบบรายวัน-ทีละวัน
- **JSP Files**: 
  - `EMV027_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.3 บันทึกค่าตอบแทนและล่วงเวลาแบบรายวัน-ทีละคน (EM04A03)
- **Menu Name (Thai)**: บันทึกค่าตอบแทนแบบรายวัน-ทีละคน
- **Menu Name (English)**: บันทึกค่าตอบแทนและล่วงเวลาแบบรายวัน-ทีละคน
- **JSP Files**: 
  - `EMV028_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.4 จัดตารางเวร (ฝ่ายสำนักงาน) (EM04A04)
- **Menu Name (Thai)**: จัดตารางเวร (ฝ่ายสำนักงาน)
- **Menu Name (English)**: จัดตารางเวร (ฝ่ายสำนักงาน)
- **JSP Files**: 
  - `SHIFT_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.5 จัดตารางเวร (ฝ่ายการพยาบาล) (EM04A05)
- **Menu Name (Thai)**: จัดตารางเวร (ฝ่ายการพยาบาล)
- **Menu Name (English)**: จัดตารางเวร (ฝ่ายการพยาบาล)
- **JSP Files**: 
  - `SHIFT_MEDCMU_NURSE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.6 การอนุมัติค่าล่วงเวลา (หัวหน้างาน) (EM04A06)
- **Menu Name (Thai)**: การอนุมัติค่าล่วงเวลา (หัวหน้างาน)
- **Menu Name (English)**: การอนุมัติค่าล่วงเวลา (หัวหน้างาน)
- **JSP Files**: 
  - `EMV029_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.7 การอนุมัติค่าล่วงเวลา (หัวหน้าฝ่าย)(งานคลัง) (EM04A07)
- **Menu Name (Thai)**: การอนุมัติค่าล่วงเวลา (หัวหน้าฝ่าย)(งานคลัง)
- **Menu Name (English)**: การอนุมัติค่าล่วงเวลา (หัวหน้าฝ่าย)(งานคลัง)
- **JSP Files**: 
  - `EMV029_MEDCMU.jsp` - Related screen
  - `EMV030_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 6.8 การอนุมัติค่าล่วงเวลา (ตะกร้างาน) (EM04A08)
- **Menu Name (Thai)**: การอนุมัติค่าล่วงเวลา (ตะกร้างาน)
- **Menu Name (English)**: การอนุมัติค่าล่วงเวลา (ตะกร้างาน)
- **JSP Files**: 
  - `EMV031_MEDCMU.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

---

## 7. Appraisal (EM03A1, EM04)

### 7.1 Appraisal (EM03A1)
- **Menu Name (Thai)**: ประเมินผล
- **Menu Name (English)**: Appraisal
- **JSP Files**: 
  - `APS_MANAGER.jsp` - Main screen
  - `APS_LIST.jsp` - Appraisal list screen
  - `APS_CKLC.jsp` - Related screen
  - `APP_CKW.jsp` - Related screen
  - `APP_PAE.jsp` - Related screen
  - `APP_PAT.jsp` - Related screen
  - `APP_PAT_ADMIN.jsp` - Admin screen
  - `APP_PAT_HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-file-o
- **Remark**: CKT

### 7.2 Appraisal By BU (EM0401)
- **Menu Name (Thai)**: การประเมินตามหน่วยงาน
- **Menu Name (English)**: Appraisal By BU
- **JSP Files**: 
  - `APPTYPE_BU_SENA.jsp` - Main screen
  - `APPRAISAL_BU_SENA.jsp` - Appraisal screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Icon**: fa-pencil-square-o

### 7.3 Appraisal Report (EM0403)
- **Menu Name (Thai)**: ผลการประเมินตามหน่วยงาน
- **Menu Name (English)**: Appraisal Report
- **JSP Files**: 
  - `APPREPORT_BU_SENA.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.4 UP1 - ระดับบริหาร1 (EM0404A)

#### 7.4.1 Performance Appraisal (EM0404)
- **Menu Name (Thai)**: ประเมินผลระดับบริหาร 1
- **Menu Name (English)**: Performance Appraisal
- **JSP Files**: 
  - `APP_UP_SENA.jsp` - Main screen
  - `APP_UPPER_SENA.jsp` - Upper level screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

#### 7.4.2 Performance Appraisal(UPPER 1-Black Office) (EM0513)
- **JSP Files**: 
  - `APP_UP_SENA_BACK.jsp` - Main screen
  - `APP_UPPER_SENA_BACK.jsp` - Upper level screen

#### 7.4.3 Performance Appraisal(UPPER 1-Front Office(BUD)) (EM0501)
- **JSP Files**: 
  - `APP_UP_SENA_FRONT_BUD.jsp` - Main screen
  - `APP_UPPER_SENA_FRONT_BUD.jsp` - Upper level screen

#### 7.4.4 Performance Appraisal(UPPER 1-Front Office(CON)) (EM0502)
- **JSP Files**: 
  - `APP_UP_SENA_FRONT_CON.jsp` - Main screen
  - `APP_UPPER_SENA_FRONT_CON.jsp` - Upper level screen

#### 7.4.5 Performance Appraisal(UPPER 1-Front Office(CO)) (EM0503)
- **JSP Files**: 
  - `APP_UP_SENA_FRONT_CO.jsp` - Main screen
  - `APP_UPPER_SENA_FRONT_CO.jsp` - Upper level screen

### 7.5 UP2 - ระดับบริหาร2 (EM0404B)

#### 7.5.1 Performance Appraisal(UPPER 2) (EM0405)
- **JSP Files**: 
  - `APP_UP2_SENA.jsp` - Main screen
  - `APP_UPPER2_SENA.jsp` - Upper level screen

#### 7.5.2 Performance Appraisal(UPPER 2-Black Office) (EM0514)
- **JSP Files**: 
  - `APP_UP2_SENA_BACK.jsp` - Main screen
  - `APP_UPPER2_SENA_BACK.jsp` - Upper level screen

#### 7.5.3 Performance Appraisal(UPPER 2-Front Office(BUD)) (EM0504)
- **JSP Files**: 
  - `APP_UP2_SENA_FRONT_BUD.jsp` - Main screen
  - `APP_UPPER2_SENA_FRONT_BUD.jsp` - Upper level screen

#### 7.5.4 Performance Appraisal(UPPER 2-Front Office(CON)) (EM0505)
- **JSP Files**: 
  - `APP_UP2_SENA_FRONT_CON.jsp` - Main screen
  - `APP_UPPER2_SENA_FRONT_CON.jsp` - Upper level screen

#### 7.5.5 Performance Appraisal(UPPER 2-Front Office(CO)) (EM0506)
- **JSP Files**: 
  - `APP_UP2_SENA_FRONT_CO.jsp` - Main screen
  - `APP_UPPER2_SENA_FRONT_CO.jsp` - Upper level screen

### 7.6 BELOW - บังคับบัญชา (EM0404C)

#### 7.6.1 Performance Appraisal(BELOW 1) (EM0406)
- **JSP Files**: 
  - `APP_LOW_SENA.jsp` - Main screen
  - `APP_BELOW_SENA.jsp` - Below level screen

#### 7.6.2 Performance Appraisal(BELOW 1-Black Office) (EM0515)
- **JSP Files**: 
  - `APP_LOW_SENA_BACK.jsp` - Main screen
  - `APP_BELOW_SENA_BACK.jsp` - Below level screen

#### 7.6.3 Performance Appraisal(BELOW 1-Front Office(BUD)) (EM0507)
- **JSP Files**: 
  - `APP_LOW_SENA_FRONT_BUD.jsp` - Main screen
  - `APP_BELOW_SENA_FRONT_BUD.jsp` - Below level screen

#### 7.6.4 Performance Appraisal(BELOW 1-Front Office(CON)) (EM0508)
- **JSP Files**: 
  - `APP_LOW_SENA_FRONT_CON.jsp` - Main screen
  - `APP_BELOW_SENA_FRONT_CON.jsp` - Below level screen

#### 7.6.5 Performance Appraisal(BELOW 1-Front Office(CO)) (EM0509)
- **JSP Files**: 
  - `APP_LOW_SENA_FRONT_CO.jsp` - Main screen
  - `APP_BELOW_SENA_FRONT_CO.jsp` - Below level screen

### 7.7 BELOW2 - ปฏิบัติการ (EM0404C)

#### 7.7.1 Performance Appraisal(BELOW 2) (EM0407)
- **JSP Files**: 
  - `APP_LOW2_SENA.jsp` - Main screen
  - `APP_BELOW2_SENA.jsp` - Below level screen

#### 7.7.2 Performance Appraisal(BELOW 2-Black Office) (EM0516)
- **JSP Files**: 
  - `APP_LOW2_SENA_BACK.jsp` - Main screen
  - `APP_BELOW2_SENA_BACK.jsp` - Below level screen

#### 7.7.3 Performance Appraisal(BELOW 2-Front Office(BUD)) (EM0510)
- **JSP Files**: 
  - `APP_LOW2_SENA_FRONT_BUD.jsp` - Main screen
  - `APP_BELOW2_SENA_FRONT_BUD.jsp` - Below level screen

#### 7.7.4 Performance Appraisal(BELOW 2-Front Office(CON)) (EM0511)
- **JSP Files**: 
  - `APP_LOW2_SENA_FRONT_CON.jsp` - Main screen
  - `APP_BELOW2_SENA_FRONT_CON.jsp` - Below level screen

#### 7.7.5 Performance Appraisal(BELOW 2-Front Office(CO)) (EM0512)
- **JSP Files**: 
  - `APP_LOW2_SENA_FRONT_CO.jsp` - Main screen
  - `APP_BELOW2_SENA_FRONT_CO.jsp` - Below level screen

### 7.8 KPIs(SENA) (EM0408)
- **Menu Name (Thai)**: ประเมินผลประจำปี(SENA)
- **Menu Name (English)**: KPIs(SENA)
- **JSP Files**: 
  - `APP_KPI_ALL_SENA.jsp` - Main screen
  - `APP_BELOW2_SENA.jsp` - Related screen
  - `APP_BELOW_SENA.jsp` - Related screen
  - `APP_UPPER2_SENA.jsp` - Related screen
  - `APP_UPPER_SENA.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.9 Self Objective Individuals (EM0409)
- **Menu Name (Thai)**: Self Objective Individuals
- **Menu Name (English)**: Self Objective Individuals
- **JSP Files**: 
  - `APS_JET_OBJ.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.10 Performance Evaluation For Manager (EM0410)
- **Menu Name (Thai)**: Performance Evaluation For Manager
- **Menu Name (English)**: Performance Evaluation For Manager
- **JSP Files**: 
  - `APS_JET_PER_MAN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.11 Performance Evaluation For Employee (EM0411)
- **Menu Name (Thai)**: Performance Evaluation For Employee
- **Menu Name (English)**: Performance Evaluation For Employee
- **JSP Files**: 
  - `APS_JET_PER_EMP.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.12 Attach Document Interview (EM0445)
- **Menu Name (Thai)**: แนบเอกสารประเมินผลสัมภาษณ์งาน
- **Menu Name (English)**: Attach Document Interview
- **JSP Files**: 
  - `HANDBOOK_ITE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.13 Interview (EM0461)
- **Menu Name (Thai)**: ประเมินผลสัมภาษณ์งาน
- **Menu Name (English)**: Interview
- **JSP Files**: 
  - `APS_INTERVIEW.jsp` - Main screen
  - `APS_INTERVIEW_NHSO.jsp` - NHSO screen
  - `APS_FORM_INTERVIEW_NHSO.jsp` - Interview form screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.14 KPIs(BITEC) (EM0413)
- **Menu Name (Thai)**: ประเมินผลประจำปี(BITEC)
- **Menu Name (English)**: KPIs(BITEC)
- **JSP Files**: 
  - `APS_KPI_ALL_BITEC.jsp` - Main screen
  - `APS_KPI_BITEC_FORM.jsp` - Form screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Icon**: fa-pencil-square-o

### 7.15 APF Appraisal Screens (EM0414-EM0417)
- **KPIs(APF) (EM0414)**: `APS_KPI_LIST_APF.jsp`, `APS_KPI_APF_FORM.jsp`
- **Placement Follow-Up(APF) (EM0415)**: `APS_PFU_LIST_APF.jsp`, `APS_PFU_FORM_APF.jsp`
- **KPIs(HR)(APF) (EM0416)**: `APS_KPI_LIST_APF_HR.jsp`, `APS_KPI_APF_FORM.jsp`
- **Placement Follow-Up(HR)(APF) (EM0417)**: `APS_PFU_LIST_APF_HR.jsp`, `APS_PFU_FORM_APF.jsp`

### 7.16 Riken Appraisal Screens (EM0418)
- **Evaluation Form(Riken) (EM0418)**: `APS_KPI_LIST_RIKEN.jsp`, `APS_KPI1_FORM_RIKEN.jsp`

### 7.17 TKC Appraisal Screens (EM0419-EM0446, EM0464-EM0466)
- **Ability Evaluation(TKC) (EM0419)**: `APS_ABILITY_LIST_TKC.jsp`, `APS_ABILITY_FORM_TKC.jsp`
- **Skill Evaluation(TKC) (EM0421)**: `APS_SKILL_LIST_TKC.jsp`, `APS_SKILL_FORM_TKC.jsp`
- **MBO Evaluation(TKC) (EM0464)**: `APS_MBO_LIST_TKC.jsp`, `APS_MBO_FORM_TKC.jsp`, `APS_MBO_FORM_TARGET_TKC.jsp`
- **Ability Evaluation(TKC)(HR) (EM0424)**: `APS_ABILITY_LIST_HR_TKC.jsp`, `APS_ABILITY_FORM_TKC.jsp`
- **Skill Evaluation(TKC)(HR) (EM0425)**: `APS_SKILL_LIST_HR_TKC.jsp`, `APS_SKILL_FORM_TKC.jsp`
- **Evaluation(TKC)(HR) (EM0433)**: `APS_KPI_LIST_HR_TKC.jsp`, `APS_ABILITY_FORM_TKC.jsp`
- **Report KPIs Approve 1(TKC) (EM0443)**: `APS_ABILITY_LIST_TKC_RP.jsp`
- **Report KPIs Approve 2(TKC) (EM0444)**: `APS_ABILITY_LIST_TKC_RP2.jsp`
- **History Evaluation(TKC) (EM0446)**: `APS_KPI_LIST_HISTORY_TKC.jsp`
- **Report KPIs MBO Approve 1(TKC) (EM0465)**: `APS_MBO_LIST_TKC_RP.jsp`
- **Report KPIs MBO Approve 2(TKC) (EM0466)**: `APS_MBO_LIST_TKC_RP2.jsp`

### 7.18 Armstrong (ARC) Appraisal Screens (EM0420, EM0422-EM0423, EM0427-EM0432, EM0426, EM0442, EM0454)
- **KPIs(Level O1-O3) (EM0420)**: `APS_KPI_LIST_ARC.jsp`, `APS_KPI_ARC_FORM.jsp`
- **KPIs(Level W1-W3) (EM0422)**: `APS_KPI_LIST_ARC01.jsp`, `APS_KPI_ARC_FORM01.jsp`
- **Performance Appraisal for Managent (EM0423)**: `APS_KPI_LIST_ARC02.jsp`, `APS_KPI_ARC_FORM02.jsp`
- **KPIs(Level M1-M2) (EM0427)**: `APS_KPI_LIST_ARC03.jsp`, `APS_KPI_ARC_FORM02.jsp`
- **KPIsKPIs(HR) (EM0432)**: `APS_KPI_LIST_HR_ARC.jsp`
- **KPIs(Level O1-O3) HR (EM0428)**: `APS_KPI_LIST_ARC_HR.jsp`, `APS_KPI_ARC_FORM.jsp`
- **KPIs(Level W1-W3) HR (EM0429)**: `APS_KPI_LIST_ARC01_HR.jsp`, `APS_KPI_ARC_FORM01.jsp`
- **Performance Appraisal for Managent HR (EM0430)**: `APS_KPI_LIST_ARC02.jsp`, `APS_KPI_ARC_FORM02_HR.jsp`
- **KPIs(Level M1-M2) HR (EM0431)**: `APS_KPI_LIST_ARC03_HR.jsp`, `APS_KPI_ARC_FORM02.jsp`
- **History Of KPIs(ARC) (EM0426)**: `APS_HIS_KPI_LIST_ARC.jsp`
- **ประวัติการประเมินผลของตนเอง(ARC) (EM0442)**: `APS_KPI_LIST_ARC_FOR_EMP.jsp`, `APS_KPI_ARC_FORM_EMP.jsp`, `APS_KPI_ARC_FORM02_EMP.jsp`, `APS_KPI_ARC_FORM03_EMP.jsp`
- **แบบฟอร์มอนุมัติ(ARC) (EM0454)**: `APS_KPI_LIST_ARC_TransferData.jsp`
