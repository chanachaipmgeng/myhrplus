# Personal Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~300+ screens (excluding reports)
- **Main Categories**: 7 categories
- **Active Menus**: 150+ menu items
- **Module Code**: PS (Personal)
- **Base Path**: `hrAppWeb.war/PERSONAL/`

## Summary Statistics
- **Personal Information**: 50+ screens
- **Staff Movement**: 10+ screens
- **Process**: 10+ screens
- **Import Data**: 7 screens
- **Setup (Master Data)**: 60+ screens
- **Legal Execution**: 13 screens
- **Options**: 2 screens
- **Service Charge**: 2 screens
- **Terms Of Use**: 1 screen
- **Export to Concur**: 1 screen
- **PDPA Consent**: 1 screen

---

## 1. Human Resources (PS01A)

### 1.1 Personal Information (PS01A02)

#### 1.1.1 New Hiring (PRU339)
- **Menu Name (Thai)**: พนักงานเข้าใหม่
- **Menu Name (English)**: New Hiring
- **JSP Files**: 
  - `PRU339.jsp` - Main screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.2 New Hiring Under Contract (Outsource) (PRU339OS_KEX)
- **Menu Name (Thai)**: พนักงานเข้าใหม่ภายใต้คู่สัญญา (Outsource)
- **Menu Name (English)**: New Hiring Under Contract (Outsource)
- **JSP Files**: 
  - `PRU339OS_KEX.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.3 Personal Information (PS01A0201)
- **Menu Name (Thai)**: ข้อมูลส่วนตัว
- **Menu Name (English)**: Personal Information
- **JSP Files**: 
  - `PRU039.jsp` - Main screen
  - `MYJOB.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.4 Personal Information (no permissions) (PS01A0204)
- **Menu Name (Thai)**: ข้อมูลส่วนตัว (ไม่ได้กำหนดสิทธิ์)
- **Menu Name (English)**: Personal Information (no permissions)
- **JSP Files**: 
  - `PRU039_Areeya.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.5 Salary Information (PS01A0202)
- **Menu Name (Thai)**: ข้อมูลเงินเดือน
- **Menu Name (English)**: Salary Information
- **JSP Files**: 
  - `PRU085.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.6 Work Information (PS01A0203)
- **Menu Name (Thai)**: ข้อมูลการทำงาน
- **Menu Name (English)**: Work Information
- **JSP Files**: 
  - `PRU040.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.7 Work Information Under Contract (Outsource) (PRU040OS_KEX)
- **Menu Name (Thai)**: ข้อมูลการทำงานพนักงานภายใต้คู่สัญญา (Outsource)
- **Menu Name (English)**: Work Information Under Contract (Outsource)
- **JSP Files**: 
  - `PRU040OS_KEX.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.8 Tax/PVF (PS01A0205)
- **Menu Name (Thai)**: ข้อมูลภาษี
- **Menu Name (English)**: Tax/PVF
- **JSP Files**: 
  - `PRU041.jsp` - Main screen
  - `PRU041_PVF_KKB.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.9 Y-T-D Detail (PS01A0207)
- **Menu Name (Thai)**: แจงรายได้ในแต่ละเดือน
- **Menu Name (English)**: Y-T-D Detail
- **JSP Files**: 
  - `PRU045.jsp` - Main screen
  - `PRU046.jsp` - Related screen
  - `PRU045_TAXCOMPUTE.jsp` - Tax compute screen
  - `PRU045_EXP.jsp` - Export screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.10 L-T-D Yearly Summary (PS01A0208)
- **Menu Name (Thai)**: ยอดรายได้สะสมปีนี้
- **Menu Name (English)**: L-T-D Yearly Summary
- **JSP Files**: 
  - `PRU043.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.11 Loan Details (PS01A0210)
- **Menu Name (Thai)**: ข้อมูลเงินกู้
- **Menu Name (English)**: Loan Details
- **JSP Files**: 
  - `PRU096.jsp` - Main screen
  - `PRU097.jsp` - Related screen
  - `PRU097_1.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.12 Grade and Appraisal (PS01A0211)
- **Menu Name (Thai)**: ข้อมูลเกรดและการประเมิน
- **Menu Name (English)**: Grade and Appraisal
- **JSP Files**: 
  - `PRU048.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.1.13 Special Skill (PS01A0213)
- **Menu Name (Thai)**: ข้อมูลความสามารถพิเศษ
- **Menu Name (English)**: Special Skill
- **JSP Files**: 
  - `PRU051.jsp` - Main screen
  - `PRU052.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.14 Language Skills (PS01A0246)
- **Menu Name (Thai)**: ข้อมูลความสามารถทางภาษา
- **Menu Name (English)**: Language Skills
- **JSP Files**: 
  - `LANGUAGE_SKILL.jsp` - Main screen
  - `LANGUAGE_SKILL_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.15 Beneficiary Details (PS01A0214)
- **Menu Name (Thai)**: ข้อมูลผู้รับผลประโยชน์
- **Menu Name (English)**: Beneficiary Details
- **JSP Files**: 
  - `PRU053.jsp` - Main screen
  - `PRU054.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.16 Surety Details (PS01A0219)
- **Menu Name (Thai)**: ข้อมูลผู้ค้ำประกัน
- **Menu Name (English)**: Surety Details
- **JSP Files**: 
  - `PRU078.jsp` - Main screen
  - `PRU078_1.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.17 Insurance Details (PRU063)
- **Menu Name (Thai)**: ข้อมูลประกัน
- **Menu Name (English)**: Insurance Details
- **JSP Files**: 
  - `PRU063.jsp` - Main screen
  - `PRU064.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.18 Education Background (PSU115)
- **Menu Name (Thai)**: ข้อมูลประวัติการศึกษา
- **Menu Name (English)**: Education Background
- **JSP Files**: 
  - `PSU115.jsp` - Main screen
  - `PSU115E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.19 Employee Relations (PS01A0216)
- **Menu Name (Thai)**: ข้อมูลบุคคลผู้เกี่ยวข้อง
- **Menu Name (English)**: Employee Relations
- **JSP Files**: 
  - `PSU117.jsp` - Main screen
  - `PSU117E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.20 Working Experiences (PS01A0217)
- **Menu Name (Thai)**: ข้อมูลประสบการณ์การทำงาน
- **Menu Name (English)**: Working Experiences
- **JSP Files**: 
  - `PRU061.jsp` - Main screen
  - `PRU062.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.21 Other Card (PS01A0218)
- **Menu Name (Thai)**: ข้อมูลบัตรต่างๆ
- **Menu Name (English)**: Other Card
- **JSP Files**: 
  - `PRU055.jsp` - Main screen
  - `PRU056.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.22 Period of Absence Details (PS01A0220)
- **Menu Name (Thai)**: ข้อมูลช่วงเวลาที่ไม่ทำงาน
- **Menu Name (English)**: Period of Absence Details
- **JSP Files**: 
  - `PRU065.jsp` - Main screen
  - `PRU066.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.23 Address Information (PS01A0221)
- **Menu Name (Thai)**: ข้อมูลที่อยู่
- **Menu Name (English)**: Address Information
- **JSP Files**: 
  - `PRU083.jsp` - Main screen
  - `PRU070.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.24 Salary - Bank Distribution (PS01A0222)
- **Menu Name (Thai)**: ข้อมูลธนาคาร
- **Menu Name (English)**: Salary - Bank Distribution
- **JSP Files**: 
  - `PRU067.jsp` - Main screen
  - `PRU068.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.25 Provident Fund (PS01A0223)
- **Menu Name (Thai)**: ข้อมูลกองทุนสำรองเลี้ยงชีพ
- **Menu Name (English)**: Provident Fund
- **JSP Files**: 
  - `PRU074.jsp` - Main screen
  - `PRU075.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.26 Tax Index (PS01A0224)
- **Menu Name (Thai)**: ข้อมูลตารางคำนวณภาษี
- **Menu Name (English)**: Tax Index
- **JSP Files**: 
  - `PRU080.jsp` - Main screen
  - `PRU081.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.27 Bonus Adjustment History (PRU099)
- **Menu Name (Thai)**: ประวัติการจ่ายโบนัส
- **Menu Name (English)**: Bonus Adjustment History
- **JSP Files**: 
  - `PRU099.jsp` - Main screen
  - `PRU100.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.28 Document Reference (PS01A0227)
- **Menu Name (Thai)**: ข้อมูลเอกสารอ้างอิง
- **Menu Name (English)**: Document Reference
- **JSP Files**: 
  - `PRU105.jsp` - Main screen
  - `PRU106.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.29 Awarding and Warning (PS01A0228)
- **Menu Name (Thai)**: ข้อมูลความดี/ความผิด
- **Menu Name (English)**: Awarding and Warning
- **JSP Files**: 
  - `PRU107.jsp` - Main screen
  - `PRU108.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.30 Assets Information (PS01A0229)
- **Menu Name (Thai)**: ข้อมูลทรัพย์สินบริษัท
- **Menu Name (English)**: Assets Information
- **JSP Files**: 
  - `PRU109.jsp` - Main screen
  - `PRU111.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.31 Contract Information (PRU192)
- **Menu Name (Thai)**: ข้อมูลการทำสัญญาปฎิบัติงาน
- **Menu Name (English)**: Contract Information
- **JSP Files**: 
  - `PRU192.jsp` - Main screen
  - `PRU192E.jsp` - Related screen
  - `PRU192E_O.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.32 Position Information (PSU144)
- **Menu Name (Thai)**: ข้อมูลตำแหน่งตามหน้าที่
- **Menu Name (English)**: Position Information
- **JSP Files**: 
  - `PSU001.jsp` - Main screen
  - `PSU001C.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.33 Request certificate data (PSU145)
- **Menu Name (Thai)**: ข้อมูลการขอหนังสือรับรอง
- **Menu Name (English)**: Request certificate data
- **JSP Files**: 
  - `PRU089.jsp` - Main screen
  - `PRU090.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.34 Black List Detail (PRU205)
- **Menu Name (Thai)**: รายละเอียดบัญชีดำ
- **Menu Name (English)**: Black List Detail
- **JSP Files**: 
  - `PRU205.jsp` - Main screen
  - `PRU205E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.1.35 Handicapped history (PRU206)
- **Menu Name (Thai)**: ประวัติผู้พิการ
- **Menu Name (English)**: Handicapped history
- **JSP Files**: 
  - `PRU206.jsp` - Main screen
  - `PRU206E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.36 Personal Note (PRU207)
- **Menu Name (Thai)**: บันทึกส่วนตัว
- **Menu Name (English)**: Personal Note
- **JSP Files**: 
  - `PRU207.jsp` - Main screen
  - `PRU208.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.37 Insignia Information (PSU129)
- **Menu Name (Thai)**: ข้อมูลเครื่องราชอิสริยาภรณ์
- **Menu Name (English)**: Insignia Information
- **JSP Files**: 
  - `PSU129.jsp` - Main screen
  - `PSU129E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.38 Activity Detail (PS01A0247)
- **Menu Name (Thai)**: ข้อมูลกิจกรรม
- **Menu Name (English)**: Activity Detail
- **JSP Files**: 
  - `ACTIVITY_DETAIL.jsp` - Main screen
  - `ACTIVITY_DETAIL_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.39 Training Detail (PS01A0248)
- **Menu Name (Thai)**: ข้อมูลการอบรม
- **Menu Name (English)**: Training Detail
- **JSP Files**: 
  - `TRAINING_DETAIL.jsp` - Main screen
  - `TRAINING_DETAIL_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.40 Mempl Manpower Number (PRU210)
- **Menu Name (Thai)**: รายชื่อผู้ถือครองอัตรา
- **Menu Name (English)**: Mempl Manpower Number
- **JSP Files**: 
  - `PRU210.jsp` - Main screen
  - `PRU210E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.41 Act for Position (PSU211)
- **Menu Name (Thai)**: ข้อมูลตำแหน่งรักษาการ
- **Menu Name (English)**: Act for Position
- **JSP Files**: 
  - `PSU211.jsp` - Main screen
  - `PSU211_DETAIL.jsp` - Detail screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.42 Workarea Location (PS01A0261)
- **Menu Name (Thai)**: ตำแหน่งสถานที่ทำงาน
- **Menu Name (English)**: Workarea Location
- **JSP Files**: 
  - `PRU261.jsp` - Main screen
  - `PRU261_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

---

### 1.2 Staff Create Team Movement (PS01A08)

#### 1.2.1 Create Staff Movement (PS01A0225)
- **Menu Name (Thai)**: บันทึกการเคลื่อนไหวของพนักงาน
- **Menu Name (English)**: Create Staff Movement
- **JSP Files**: 
  - `PRU102.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.2.2 Create Staff Under Contract Movement (PRU102_KEX)
- **Menu Name (Thai)**: บันทึกการเคลื่อนไหวของพนักงานภายใต้คู่สัญญา
- **Menu Name (English)**: Create Staff Under Contract Movement
- **JSP Files**: 
  - `PRU102_KEX.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.2.3 Employee Movement Retraceable Record (PS01A0234)
- **Menu Name (Thai)**: บันทึกประวัติการเคลื่อนไหวของพนักงาน
- **Menu Name (English)**: Employee Movement Retraceable Record
- **JSP Files**: 
  - `PRU170.jsp` - Main screen
  - `PRU171.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.2.4 View Movement Summary (PS01A0226)
- **Menu Name (Thai)**: ประวัติการเคลื่อนไหวของพนักงาน
- **Menu Name (English)**: View Movement Summary
- **JSP Files**: 
  - `PSN113.jsp` - Main screen
  - `PSN114.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.2.5 Create Resign (PS01A0230)
- **Menu Name (Thai)**: บันทึกพ้นสภาพ
- **Menu Name (English)**: Create Resign
- **JSP Files**: 
  - `PSU130.jsp` - Main screen
  - `PSU131.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Uses linkpageEmp function

#### 1.2.6 List of employee without any promotion (PSU132)
- **Menu Name (Thai)**: รายชื่อพนักงานที่ไม่มีประวัติการปรับตำแหน่ง
- **Menu Name (English)**: List of employee without any promotion
- **JSP Files**: 
  - `PSU132.jsp` - Main screen
  - `PSU133.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.2.7 Turn Over Rate Report (PS01A0231)
- **Menu Name (Thai)**: รายงาน Turn Over Rate
- **Menu Name (English)**: Turn Over Rate Report
- **JSP Files**: 
  - `PRU194.jsp` - Main screen
  - `PRU194_EXP.jsp` - Export screen
  - `PRU194_01.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No
- **Note**: Uses linkpageEmp function

#### 1.2.8 Adjust Income and Deduction (PRU212)
- **Menu Name (Thai)**: การเคลื่อนไหวรายได้และรายหักประจำ
- **Menu Name (English)**: Adjust Income and Deduction
- **JSP Files**: 
  - `PRU212.jsp` - Main screen
  - `PRU212A.jsp` - Related screen
  - `PRU212B.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.2.9 Adjust Income and Deduction History (PRU213)
- **Menu Name (Thai)**: ประวัติการเคลื่อนไหวรายได้และรายหักประจำ
- **Menu Name (English)**: Adjust Income and Deduction History
- **JSP Files**: 
  - `PRU213.jsp` - Main screen
  - `PRU213B.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.3 Process (PS01A03)

#### 1.3.1 Generate New Staff Movement (PS01A0306)
- **Menu Name (Thai)**: ประมวลผลพนักงานเข้าใหม่
- **Menu Name (English)**: Generate New Staff Movement
- **JSP Files**: 
  - `PSP001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.2 Generate Team Movement (PS01A0302)
- **Menu Name (Thai)**: ประมวลผลการเคลื่อนไหว
- **Menu Name (English)**: Generate Team Movement
- **JSP Files**: 
  - `PSN110.jsp` - Main screen
  - `PSN115.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.3 Disclaimed Processing (PS01A1312)
- **Menu Name (Thai)**: ประมวลผลพนักงานไม่มาเริ่มงาน
- **Menu Name (English)**: Disclaimed Processing
- **JSP Files**: 
  - `PSN117.jsp` - Main screen
  - `PSN118.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.4 Transfer Organize Structure (PS01A0304)
- **Menu Name (Thai)**: โอนย้ายหน่วยงาน
- **Menu Name (English)**: Transfer Organize Structure
- **JSP Files**: 
  - `PSU003.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.3.5 Process Organization chart (SM1004)
- **Menu Name (Thai)**: ประมวลผลสายบังคับบัญชา
- **Menu Name (English)**: Process Organization chart
- **JSP Files**: 
  - `SM1004.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.6 Import Yearly Salary Increase (PRU200)
- **Menu Name (Thai)**: นำเข้าข้อมูลการปรับเงินเดือนประจำปีของพนักงาน
- **Menu Name (English)**: Import Yearly Salary Increase
- **JSP Files**: 
  - `PRU200.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.3.7 Transfer Loan Data To Payroll (PS01A0314)
- **Menu Name (Thai)**: ส่งข้อมูลเงินกู้เข้า Payroll
- **Menu Name (English)**: Transfer Loan Data To Payroll
- **JSP Files**: 
  - `PSP003.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.8 Transfer Enforcement Data To Payroll (PS01A0315)
- **Menu Name (Thai)**: ส่งข้อมูลเงินกรมบังคับคดีเข้า Payroll
- **Menu Name (English)**: Transfer Enforcement Data To Payroll
- **JSP Files**: 
  - `PSP004.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.9 Generate Income and Deduction Movement (PS01A0320)
- **Menu Name (Thai)**: ประมวลผลการเคลื่อนไหวรายได้และรายหักประจำ
- **Menu Name (English)**: Generate Income and Deduction Movement
- **JSP Files**: 
  - `PSN111.jsp` - Main screen
  - `PRU212B.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.4 Import Data (PS01A09)

#### 1.4.1 Copy Employee Information (PS01A0901)
- **Menu Name (Thai)**: คัดลอกข้อมูลพนักงาน
- **Menu Name (English)**: Copy Employee Information
- **JSP Files**: 
  - `PSU002.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.2 Import Movement Transaction (PS01A0902)
- **Menu Name (Thai)**: นำเข้าข้อมูลการปรับตำแหน่งและเงินเดือน
- **Menu Name (English)**: Import Movement Transaction
- **JSP Files**: 
  - `PSP002.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.4.3 Import New/Rehire Employee Data (PS01A0910)
- **Menu Name (Thai)**: นำเข้าข้อมูลพนักงานเข้าใหม่/Rehire
- **Menu Name (English)**: Import New/Rehire Employee Data
- **JSP Files**: 
  - `PRU341_NEWANDREHIRE_IFRAME.jsp` - Iframe screen
  - `PRU341_NEWANDREHIRE.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.4 Update Employee (PSN0407)
- **Menu Name (Thai)**: ปรับปรุงข้อมูลพนักงาน
- **Menu Name (English)**: Update Employee
- **JSP Files**: 
  - `PSN0407.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.5 Import Employee Bank (PS01A0911)
- **Menu Name (Thai)**: นำเข้าข้อมูลธนาคาร
- **Menu Name (English)**: Import Employee Bank
- **JSP Files**: 
  - `PRU343_IFRAME.jsp` - Iframe screen
  - `PRU343.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.6 Import Employee Relations Data (PS01A0905)
- **Menu Name (Thai)**: นำเข้าข้อมูลบุคคลผู้เกี่ยวข้อง
- **Menu Name (English)**: Import Employee Relations Data
- **JSP Files**: 
  - `PRU342.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.7 Import termination of employment (PS01A0906)
- **Menu Name (Thai)**: นำเข้าข้อมูลบันทึกพ้นสภาพ
- **Menu Name (English)**: Import termination of employment
- **JSP Files**: 
  - `PSP005.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

---

### 1.5 Setup (PS01A01)

#### 1.5.1 Title Prefix Table (PS01A0101)
- **Menu Name (Thai)**: ทะเบียนคำนำหน้าชื่อ
- **Menu Name (English)**: Title Prefix Table
- **JSP Files**: 
  - `PSM001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.2 Institution Type (PS01A0102)
- **Menu Name (Thai)**: ทะเบียนประเภทสถาบัน
- **Menu Name (English)**: Institution Type
- **JSP Files**: 
  - `PSM002.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.3 Educational Institution Category (PS01A0103)
- **Menu Name (Thai)**: ทะเบียนสถาบันการศึกษา
- **Menu Name (English)**: Educational Institution Category
- **JSP Files**: 
  - `PSM003.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.4 Educational Background Table (PS01A0137)
- **Menu Name (Thai)**: ทะเบียนวุฒิการศึกษา
- **Menu Name (English)**: Educational Background Table
- **JSP Files**: 
  - `PSM007.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.5 Educational Major Subject Table (PS01A0104)
- **Menu Name (Thai)**: ทะเบียนสาขาการศึกษา
- **Menu Name (English)**: Educational Major Subject Table
- **JSP Files**: 
  - `PSM004.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.6 Faculty Table (PS01A0105)
- **Menu Name (Thai)**: ทะเบียนคณะการศึกษา
- **Menu Name (English)**: Faculty Table
- **JSP Files**: 
  - `PSM005.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.7 Educational Level Table (PS01A0106)
- **Menu Name (Thai)**: ทะเบียนระดับการศึกษา
- **Menu Name (English)**: Educational Level Table
- **JSP Files**: 
  - `PSM006.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.8 District Table (PS01A0154)
- **Menu Name (Thai)**: ทะเบียนอำเภอ
- **Menu Name (English)**: District Table
- **JSP Files**: 
  - `PSM051.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.9 Province Table (PS01A0107)
- **Menu Name (Thai)**: ทะเบียนจังหวัด
- **Menu Name (English)**: Province Table
- **JSP Files**: 
  - `PSM010.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.10 Country Table (PS01A0108)
- **Menu Name (Thai)**: ทะเบียนประเทศ
- **Menu Name (English)**: Country Table
- **JSP Files**: 
  - `PSM011.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.11 Zipcode Table (New) (PS01A0109)
- **Menu Name (Thai)**: ทะเบียนรหัสไปรษณีย์
- **Menu Name (English)**: Zipcode Table (New)
- **JSP Files**: 
  - `PSM052.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.12 Race Table (PS01A0110)
- **Menu Name (Thai)**: ทะเบียนสัญชาติ
- **Menu Name (English)**: Race Table
- **JSP Files**: 
  - `PSM013.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.13 Nationality Table (PS01A0111)
- **Menu Name (Thai)**: ทะเบียนเชื้อชาติ
- **Menu Name (English)**: Nationality Table
- **JSP Files**: 
  - `PSM014.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.14 Religion Table (PS01A0112)
- **Menu Name (Thai)**: ทะเบียนศาสนา
- **Menu Name (English)**: Religion Table
- **JSP Files**: 
  - `PSM015.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.15 Relation Table (PS01A0113)
- **Menu Name (Thai)**: ทะเบียนความสัมพันธ์
- **Menu Name (English)**: Relation Table
- **JSP Files**: 
  - `PSM016.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.16 Grade Level Table (PS01A0114)
- **Menu Name (Thai)**: ทะเบียนระดับเกรด
- **Menu Name (English)**: Grade Level Table
- **JSP Files**: 
  - `PSM043.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.17 Special Abilities Group Table (PSM018)
- **Menu Name (Thai)**: ทะเบียนกลุ่มความสามารถพิเศษ
- **Menu Name (English)**: Special Abilities Group Table
- **JSP Files**: 
  - `PSM018.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.18 Special Abilities Table (PS01A0115)
- **Menu Name (Thai)**: ทะเบียนความสามารถพิเศษ
- **Menu Name (English)**: Special Abilities Table
- **JSP Files**: 
  - `PSM019.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.19 Languague Skill (PS01A0160)
- **Menu Name (Thai)**: ทะเบียนความสามารถทางภาษา
- **Menu Name (English)**: Languague Skill
- **JSP Files**: 
  - `LANGUAGE_RECORD.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.20 Personal Cards Detail Table (PS01A0116)
- **Menu Name (Thai)**: ทะเบียนบัตรต่าง ๆ
- **Menu Name (English)**: Personal Cards Detail Table
- **JSP Files**: 
  - `PSM020.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.21 Vehicle Table (PS01A01167)
- **Menu Name (Thai)**: ทะเบียนค่าพาหนะ
- **Menu Name (English)**: Vehicle Table
- **JSP Files**: 
  - `CS013.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.22 Bank Table (PS01A0121)
- **Menu Name (Thai)**: ทะเบียนธนาคาร
- **Menu Name (English)**: Bank Table
- **JSP Files**: 
  - `PSM023.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.23 Bank Branch Table (PS01A0122)
- **Menu Name (Thai)**: ทะเบียนสาขาธนาคาร
- **Menu Name (English)**: Bank Branch Table
- **JSP Files**: 
  - `PSM024.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.24 Loan Type Table (PS01A0123)
- **Menu Name (Thai)**: ทะเบียนประเภทเงินกู้
- **Menu Name (English)**: Loan Type Table
- **JSP Files**: 
  - `PSM021.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.25 Occupation Table (PS01A0124)
- **Menu Name (Thai)**: ทะเบียนอาชีพ
- **Menu Name (English)**: Occupation Table
- **JSP Files**: 
  - `PSM025.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.26 Employee Level Access Register (PS01A0125)
- **Menu Name (Thai)**: ทะเบียนสิทธิในการเข้าถึงข้อมูล
- **Menu Name (English)**: Employee Level Access Register
- **JSP Files**: 
  - `CS048.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.27 Function Position Table (PS01A0126)
- **Menu Name (Thai)**: ทะเบียนตำแหน่งตามหน้าที่
- **Menu Name (English)**: Function Position Table
- **JSP Files**: 
  - `PS001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.28 Employee Group Table (PS01A0127)
- **Menu Name (Thai)**: ทะเบียนกลุ่มพนักงาน
- **Menu Name (English)**: Employee Group Table
- **JSP Files**: 
  - `PRU011.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.29 Welfare Location Table (PS01A0128)
- **Menu Name (Thai)**: ทะเบียนสถานที่ใช้สวัสดิการ
- **Menu Name (English)**: Welfare Location Table
- **JSP Files**: 
  - `PRU026.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.30 Adjustment Reason Table (PS01A0129)
- **Menu Name (Thai)**: ทะเบียนเหตุผลการเคลื่อนไหว
- **Menu Name (English)**: Adjustment Reason Table
- **JSP Files**: 
  - `PSM035.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.31 Goodness or Badness Table (PS01A0130)
- **Menu Name (Thai)**: ทะเบียนความดี-ความผิด
- **Menu Name (English)**: Goodness or Badness Table
- **JSP Files**: 
  - `CS044.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.32 Reward Merit Table (PS01A0131)
- **Menu Name (Thai)**: ทะเบียนรางวัลหรือบทลงโทษ
- **Menu Name (English)**: Reward Merit Table
- **JSP Files**: 
  - `CS047.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.33 Document Table (PS01A0132)
- **Menu Name (Thai)**: ทะเบียนเอกสาร
- **Menu Name (English)**: Document Table
- **JSP Files**: 
  - `PSM041.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.34 Resignation Reason Table (PS01A0133)
- **Menu Name (Thai)**: ทะเบียนเหตุผลการลาออก
- **Menu Name (English)**: Resignation Reason Table
- **JSP Files**: 
  - `PSM033.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.35 Resigned Assess Table (PS01A0134)
- **Menu Name (Thai)**: ทะเบียนหัวข้อการประเมินของพนักงานกรณีลาออก
- **Menu Name (English)**: Resigned Assess Table
- **JSP Files**: 
  - `PSM034.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.36 Benefit Table (PS01A0120)
- **Menu Name (Thai)**: ทะเบียนผลประโยชน์
- **Menu Name (English)**: Benefit Table
- **JSP Files**: 
  - `PSM028.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.37 Assets Type Table (PSM029)
- **Menu Name (Thai)**: ทะเบียนประเภททรัพย์สิน/พัสดุ
- **Menu Name (English)**: Assets Type Table
- **JSP Files**: 
  - `PSM029.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.38 Assets Table (PSM030)
- **Menu Name (Thai)**: ทะเบียนทรัพย์สิน/พัสดุ
- **Menu Name (English)**: Assets Table
- **JSP Files**: 
  - `PSM030.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.39 Insignia Table (PSM032)
- **Menu Name (Thai)**: ทะเบียนเครื่องราชอิสริยาภรณ์
- **Menu Name (English)**: Insignia Table
- **JSP Files**: 
  - `PSM032.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.40 SSO Resignation Reason Table (PSM042)
- **Menu Name (Thai)**: ทะเบียนสาเหตุการแจ้งสิ้นสุดความเป็นผู้ประกันตน
- **Menu Name (English)**: SSO Resignation Reason Table
- **JSP Files**: 
  - `PSM042.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.41 Movement Type Active (PSM044)
- **Menu Name (Thai)**: ตั้งค่าประเภทการปรับการเคลื่อนไหว
- **Menu Name (English)**: Movement Type Active
- **JSP Files**: 
  - `PSM044.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.42 Master Setup Employee ID (PSM045)
- **Menu Name (Thai)**: รูปแบบรหัสพนักงาน
- **Menu Name (English)**: Master Setup Employee ID
- **JSP Files**: 
  - `PSM045.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.43 Setup EmployeeID Format (PSM0451)
- **Menu Name (Thai)**: ตั้งค่ารูปแบบรหัสพนักงาน
- **Menu Name (English)**: Setup EmployeeID Format
- **JSP Files**: 
  - `PSM0451.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.44 Tax Allowance list For clearing (PSM046)
- **Menu Name (Thai)**: ตั้งค่าการเคลียร์ค่าลดหย่อน
- **Menu Name (English)**: Tax Allowance list For clearing
- **JSP Files**: 
  - `PSM046.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.45 Employment Type (PRU202)
- **Menu Name (Thai)**: ทะเบียนประเภทพนักงาน
- **Menu Name (English)**: Employment Type
- **JSP Files**: 
  - `PRU202.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.46 Status Detail (PSM047)
- **Menu Name (Thai)**: ทะเบียนสถานะพนักงาน
- **Menu Name (English)**: Status Detail
- **JSP Files**: 
  - `PSM047.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.47 Surety Type (PRU204)
- **Menu Name (Thai)**: ทะเบียนประเภทผู้ค้ำประกัน
- **Menu Name (English)**: Surety Type
- **JSP Files**: 
  - `PRU204.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.48 Black List Group (PSM048)
- **Menu Name (Thai)**: ทะเบียนกลุ่มบัญชีดำ
- **Menu Name (English)**: Black List Group
- **JSP Files**: 
  - `PSM048.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.49 Black List (PSM049)
- **Menu Name (Thai)**: ทะเบียนบัญชีดำ
- **Menu Name (English)**: Black List
- **JSP Files**: 
  - `PSM049.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.50 Handicapped Type (PSM050)
- **Menu Name (Thai)**: ทะเบียนประเภทความพิการ
- **Menu Name (English)**: Handicapped Type
- **JSP Files**: 
  - `PSM050.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.51 Certificate Request Template (PSM105)
- **Menu Name (Thai)**: ทะเบียนแม่แบบการขอหนังสือรับรอง
- **Menu Name (English)**: Certificate Request Template
- **JSP Files**: 
  - `PSM105.jsp` - Main screen
  - `DOCUMENT_PORTAL.jsp` - Related screen
  - `PRU091_PRI.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.52 Contract Party (PSM121)
- **Menu Name (Thai)**: ทะเบียนคู่สัญญา
- **Menu Name (English)**: Contract Party
- **JSP Files**: 
  - `PSM121.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.5.53 Custom Salary Rate Table (PRU211)
- **Menu Name (Thai)**: ทะเบียนกำหนดอัตราค่าจ้างตามตำแหน่งและประเภทพนักงาน
- **Menu Name (English)**: Custom Salary Rate Table
- **JSP Files**: 
  - `PRU211.jsp` - Main screen
  - `PRU211E.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.6 Setup Legal Execution (PS01A05)

#### 1.6.1 Money register sent to the Department of Enforcement (PSN319)
- **Menu Name (Thai)**: ข้อมูลเงินนำส่งกรมบังคับคดี
- **Menu Name (English)**: Money register sent to the Department of Enforcement
- **JSP Files**: 
  - `PSN319.jsp` - Main screen
  - `PSN319_1.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.2 Enforcement Conditions (PSN318)
- **Menu Name (Thai)**: ทะเบียนเงื่อนไขกรมบังคับคดี
- **Menu Name (English)**: Enforcement Conditions
- **JSP Files**: 
  - `PSN318.jsp` - Main screen
  - `PRU086.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.3 Court Master (PSM119)
- **Menu Name (Thai)**: ทะเบียนศาล
- **Menu Name (English)**: Court Master
- **JSP Files**: 
  - `PSM119.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.4 Office Master (PSM107)
- **Menu Name (Thai)**: ทะเบียนสำนักงาน
- **Menu Name (English)**: Office Master
- **JSP Files**: 
  - `PSM107.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.5 Payment Method Master (PSM108)
- **Menu Name (Thai)**: ทะเบียนวิธีชำระ
- **Menu Name (English)**: Payment Method Master
- **JSP Files**: 
  - `PSM108.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.6 Legal Execution Transfer Process (PSM109)
- **Menu Name (Thai)**: ประมวลผลนำส่งกรมบังคับคดี
- **Menu Name (English)**: Legal Execution Transfer Process
- **JSP Files**: 
  - `PSM109.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.7 Legal execution history transfer Report (PSM110)
- **Menu Name (Thai)**: รายงานประวัตินำส่งเงินกรมบังคับคดี
- **Menu Name (English)**: Legal execution history transfer Report
- **JSP Files**: 
  - `PSM110.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.8 Summary list by office Report (PSM111)
- **Menu Name (Thai)**: รายงานสรุปรายชื่อนำส่งกรมบังคับคดีแยกตามสำนักงาน
- **Menu Name (English)**: Summary list by office Report
- **JSP Files**: 
  - `PSM111.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.9 Cover form, envelope, submission to the Legal Execution Department (PSM112)
- **Menu Name (Thai)**: แบบฟอร์มใบปะหน้าจดหมายนำส่งกรมบังคับคดี
- **Menu Name (English)**: Cover form, envelope, submission to the Legal Execution Department
- **JSP Files**: 
  - `PSM112.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.10 Remittance form (PSM113)
- **Menu Name (Thai)**: แบบฟอร์มนำส่งเงินตามอายัด
- **Menu Name (English)**: Remittance form
- **JSP Files**: 
  - `PSM113.jsp` - Main screen
  - `PSM113_OPTION.jsp` - Option screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.11 Mailing form (PSM114)
- **Menu Name (Thai)**: แบบฟอร์มใบนำส่งไปรษณีย์
- **Menu Name (English)**: Mailing form
- **JSP Files**: 
  - `PSM114.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.12 Employee summary report (Legal Execution Department) (PSM115)
- **Menu Name (Thai)**: รายงานสรุปตามพนักงาน (กรมบังคับคดี)
- **Menu Name (English)**: Employee summary report (Legal Execution Department)
- **JSP Files**: 
  - `PSM115.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.6.13 Legal execution sequestration money Report (PSM120)
- **Menu Name (Thai)**: รายงานนำส่งเงินอายัดกรมบังคับคดี
- **Menu Name (English)**: Legal execution sequestration money Report
- **JSP Files**: 
  - `PSM120.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 2. Option (PS04A)

### 2.1 Export Data (PS04A01)
- **Menu Name (Thai)**: นำข้อมูลออกจากระบบ
- **Menu Name (English)**: Export Data
- **JSP Files**: 
  - `PRT002.jsp` - Main screen
  - `PRT003.jsp` - Related screen
  - `PRT004.jsp` - Related screen
  - `PRT005.jsp` - Related screen
  - `PRT006.jsp` - Related screen
  - `PRT007.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 2.2 Route Workflow (PS04A02)
- **Menu Name (Thai)**: เส้นทางเวิร์กโฟล์
- **Menu Name (English)**: Route Workflow
- **JSP Files**: 
  - `RWF001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 3. Service Charge (PS05A)

### 3.1 Service Charge Condition (PS05A01)
- **Menu Name (Thai)**: เงื่อนไขค่าบริการ
- **Menu Name (English)**: Service Charge Condition
- **JSP Files**: 
  - `SVC001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

### 3.2 Service Charge Profile (PS05A02)
- **Menu Name (Thai)**: ข้อมูลเงินค่าบริการ
- **Menu Name (English)**: Service Charge Profile
- **JSP Files**: 
  - `SVC002.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

---

## 4. Terms Of Use (PS09A)

### 4.1 User Manual (PS09A1)
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

## 5. Export data to Concur (PS06A)
- **Menu Name (Thai)**: Export data to Concur
- **Menu Name (English)**: Export data to Concur
- **JSP Files**: 
  - `EXDTC001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 6. PDPA Consent Configuration (PS010A)

### 6.1 PDPA Consent Configuration (PS010A1)
- **Menu Name (Thai)**: PDPA Consent Configuration
- **Menu Name (English)**: PDPA Consent Configuration
- **JSP Files**: 
  - `PDPA001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## Additional Files

### Module Index
- `PSN_INDEX.jsp` - Main module index page (if exists)

### Import/Export
- Various import screens for employee data
- Export functions for data transfer

### Other Personal Files
- `PRU*.jsp` - Personal information and transaction screens
- `PSU*.jsp` - Personal setup and utility screens
- `PSM*.jsp` - Personal master data screens
- `PSN*.jsp` - Personal process screens
- `PSP*.jsp` - Personal process screens
- `ACTIVITY_DETAIL*.jsp` - Activity detail screens
- `TRAINING_DETAIL*.jsp` - Training detail screens
- `LANGUAGE_*.jsp` - Language skill screens

---

## Notes

1. **linkpageEmp Function**: Many screens use `linkpageEmp()` function instead of `linkpage()` to load employee-specific data
2. **Company Variants**: Some files have company-specific variants (e.g., `*_KEX.jsp`, `*_Areeya.jsp`, `*_NUMTHEUN.jsp`)
3. **Complex Data Entry**: Many screens have multiple related child pages for detailed data entry
4. **Import/Export**: Extensive import/export functionality for employee data
5. **Movement Processing**: Complex employee movement and transfer processing
6. **Master Data**: Extensive master data setup for personal information management
7. **Legal Execution**: Special module for legal execution department data management
8. **Service Charge**: Separate module for service charge management
9. **PDPA Compliance**: PDPA consent configuration for data privacy compliance

---

## Migration Considerations

### High Priority Screens
- Personal Information screens (PRU039, PRU040, PRU085, PRU041)
- New Hiring screens (PRU339, PRU339OS_KEX)
- Employee Movement screens (PRU102, PRU102_KEX, PRU170, PSN113)
- Setup/Master Data screens (PSM001-PSM052, PSM105, PSM121)

### Medium Priority Screens
- Education and Experience screens (PSU115, PRU061, PSU117)
- Loan and Financial screens (PRU096, PRU067, PRU074, PRU080)
- Document and Certificate screens (PRU105, PRU089, PRU107)
- Import/Export screens (PSU002, PSP002, PRU341_NEWANDREHIRE_IFRAME)

### Lower Priority Screens
- Process screens (mostly backend functions)
- Legal Execution screens (specialized functionality)
- Service Charge screens (specialized functionality)
- PDPA screens (compliance functionality)

### Technical Notes
- Many screens use the CSC library framework
- Employee-specific screens use `linkpageEmp()` function
- Complex multi-page data entry forms
- File upload/download functionality for documents
- Integration with Payroll module for salary and tax data
- Integration with Time Attendance for working hours
- Multi-language support (Thai/English) built into many screens
- Workflow integration for approval processes

