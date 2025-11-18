# Training Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~150+ screens (excluding reports)
- **Main Categories**: 4 categories
- **Active Menus**: 30+ menu items
- **Module Code**: TR (Training)
- **Base Path**: `hrAppWeb.war/TRAINING/`

## Summary Statistics
- **Setup (Master Data)**: 20+ screens
- **Evaluation Process**: 3 screens
- **Transaction (Operations)**: 7 screens
- **History**: 6 screens
- **Terms Of Use**: 1 screen

---

## 1. Human Resources (TR01)

### 1.1 Setup (TR0101)

#### 1.1.1 Courses (TR01011)

##### 1.1.1.1 Course types (TR0101101)
- **Menu Name (Thai)**: ทะเบียนประเภทหลักสูตร
- **Menu Name (English)**: Course types
- **JSP Files**: 
  - `TRA001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.1.2 Course groups (TR0101102)
- **Menu Name (Thai)**: ทะเบียนกลุ่มหลักสูตร
- **Menu Name (English)**: Course groups
- **JSP Files**: 
  - `TRA0021.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.1.3 Course Categories (TR0101103)
- **Menu Name (Thai)**: ทะเบียนสาขาหลักสูตร
- **Menu Name (English)**: Course Categories
- **JSP Files**: 
  - `TRA044.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.1.4 Training Type Table (TR0101104)
- **Menu Name (Thai)**: ทะเบียนประเภทการอบรม
- **Menu Name (English)**: Training Type Table
- **JSP Files**: 
  - `TRA002.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.1.5 Courses/ Program (TR0101107)
- **Menu Name (Thai)**: ทะเบียนหลักสูตร
- **Menu Name (English)**: Courses/ Program
- **JSP Files**: 
  - `TRA004.jsp` - Main screen
  - `TRA004_1.jsp` - Related screen
  - `TRA004_2.jsp` - Related screen
  - `TRA004_3.jsp` - Related screen
  - `TRA004_1C.jsp` - Child screen
  - `TRA004_2C.jsp` - Child screen
  - `TRA004_3C.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Complex screen with multiple related pages

##### 1.1.1.6 DSD Training Type (TR0101105)
- **Menu Name (Thai)**: ทะเบียนประเภทการฝึก
- **Menu Name (English)**: DSD Training Type
- **JSP Files**: 
  - `TRA045.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

#### 1.1.2 Other Master (TR01012)

##### 1.1.2.1 Group of Expense (TR0101201)
- **Menu Name (Thai)**: ทะเบียนกลุ่มค่าใช้จ่าย
- **Menu Name (English)**: Group of Expense
- **JSP Files**: 
  - `TRA036A.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.2.2 Expenses (TRA036B)
- **Menu Name (Thai)**: ทะเบียนค่าใช้จ่าย
- **Menu Name (English)**: Expenses
- **JSP Files**: 
  - `TRA036B.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.2.3 Equipments (TR0101202)
- **Menu Name (Thai)**: ทะเบียนอุปกรณ์
- **Menu Name (English)**: Equipments
- **JSP Files**: 
  - `TRA010.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.2.4 Course Instructors (TR0101203)
- **Menu Name (Thai)**: ทะเบียนวิทยากร
- **Menu Name (English)**: Course Instructors
- **JSP Files**: 
  - `TRE003.jsp` - Main screen
  - `TRE003_1.jsp` - Related screen
  - `TRE003_2.jsp` - Related screen
  - `TRE003_3.jsp` - Related screen
  - `TRE003_4.jsp` - Related screen
  - `TRE003_5.jsp` - Related screen
  - `TRE003_6.jsp` - Related screen
  - `UPLOADFILE.jsp` - File upload screen
  - `DELETEFILE.jsp` - File delete screen
  - `TRE003_7.jsp` - Related screen
  - `TRE003_8.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Complex screen with file upload functionality

##### 1.1.2.5 Training Academy (TR0101204)
- **Menu Name (Thai)**: ทะเบียนสถาบันที่จัดอบรม
- **Menu Name (English)**: Training Academy
- **JSP Files**: 
  - `TRA008.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.2.6 Training Location (TR0101205)
- **Menu Name (Thai)**: ทะเบียนสถานที่อบรม
- **Menu Name (English)**: Training Location
- **JSP Files**: 
  - `TRA006NEW.jsp` - Main screen
  - `TRA007.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

#### 1.1.3 Evaluation/ Assessment (TR01013)

##### 1.1.3.1 Training Status (TR0101301)
- **Menu Name (Thai)**: ทะเบียนสถานะการฝึกอบรม
- **Menu Name (English)**: Training Status
- **JSP Files**: 
  - `TRA003.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.3.2 Group Evaluation (TR0101302)
- **Menu Name (Thai)**: ทะเบียนกลุ่มหัวข้อการประเมิน
- **Menu Name (English)**: Group Evaluation
- **JSP Files**: 
  - `TRM001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.3.3 Sub Group Evaluation (TR01013021)
- **Menu Name (Thai)**: ทะเบียนกลุ่มย่อยหัวข้อการประเมิน
- **Menu Name (English)**: Sub Group Evaluation
- **JSP Files**: 
  - `TRA0056.jsp` - Main screen
  - `TRA0055.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.3.4 Evaluation Form Report (TR0101303)
- **Menu Name (Thai)**: ทะเบียนแบบฟอร์มประเมิน
- **Menu Name (English)**: Evaluation Form Report
- **JSP Files**: 
  - `TRE010.jsp` - Main screen
  - `TRH006.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.3.5 Training Survey Form (TR0101304)
- **Menu Name (Thai)**: ทะเบียบแบบฟอร์มสำรวจความจำเป็นในการฝึกอบรม
- **Menu Name (English)**: Training Survey Form
- **JSP Files**: 
  - `TRE021.jsp` - Main screen
  - `PRU084_A.jsp` - Related screen
  - `PRU084_B.jsp` - Related screen
  - `TRE021_DEMO.jsp` - Demo screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

##### 1.1.3.6 Registration of training results (TRE022)
- **Menu Name (Thai)**: ทะเบียนผลการสำรวจการฝึกอบรม
- **Menu Name (English)**: Registration of training results
- **JSP Files**: 
  - `TRE022.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.2 Evaluation Process (TR0102)

#### 1.2.1 Define Training Plan for Employee (TR010201)
- **Menu Name (Thai)**: กำหนดแผนการอบรมตามพนักงาน
- **Menu Name (English)**: Define Training Plan for Employee
- **JSP Files**: 
  - `TRE002.jsp` - Main screen
  - `TRE002_1.jsp` - Related screen
  - `TRE002_2.jsp` - Related screen
  - `TRE002H.jsp` - History screen
  - `TRE002T.jsp` - Related screen
  - `TRE002_Recurrent.jsp` - Recurrent screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: Yes

#### 1.2.2 Course Resulting (TR010202)
- **Menu Name (Thai)**: ประมวลผลแผนการอบรมตามหลักสูตร
- **Menu Name (English)**: Course Resulting
- **JSP Files**: 
  - `TRA051.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.2.3 Set up Course Profile Condition (TR010209)
- **Menu Name (Thai)**: กำหนดเงื่อนไขหลักสูตร
- **Menu Name (English)**: Set up Course Profile Condition
- **JSP Files**: 
  - `TRA061.jsp` - Main screen
  - `TRA061HELP.jsp` - Help screen
  - `TRA061EXP.jsp` - Export screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.4 Define Training Plan for Course (TR010203)
- **Menu Name (Thai)**: กำหนดแผนการอบรมตามหลักสูตร
- **Menu Name (English)**: Define Training Plan for Course
- **JSP Files**: 
  - `TRA058.jsp` - Main screen
  - `TRA058H.jsp` - History screen
  - `TRA058_2.jsp` - Related screen
  - `TRA058_1.jsp` - Related screen
  - `TRA058T.jsp` - Related screen
  - `PRU084__TRA058.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.3 Transaction (TR0103)

#### 1.3.1 Surveying Training Request (TR010312)
- **Menu Name (Thai)**: สำรวจการขออบรม
- **Menu Name (English)**: Surveying Training Request
- **JSP Files**: 
  - `TRA037.jsp` - Main screen
  - `TRA037_S.jsp` - Search screen
  - `TRA037_1.jsp` - Related screen
  - `TRA038.jsp` - Related screen
  - `TRA039.jsp` - Related screen
  - `TRA0132.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.3.2 Employee List Corresponding in Training Plan (TR010302)
- **Menu Name (Thai)**: รายชื่อพนักงานตามแผนการอบรม
- **Menu Name (English)**: Employee List Corresponding in Training Plan
- **JSP Files**: 
  - `TRA043_1.jsp` - Main screen
  - `TRA043_2.jsp` - Related screen
  - `TRA043_3.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.3.3 Opening Training Session (TR010308)
- **Menu Name (Thai)**: เปิดการอบรม
- **Menu Name (English)**: Opening Training Session
- **JSP Files**: 
  - `TRA011_PHATRA.jsp` - Main screen
  - `TRH003_3H.jsp` - History screen
  - `TRA012_PHATRA.jsp` - Related screen
  - `TRH002_2H.jsp` - History screen
  - `TRA021.jsp` - Related screen
  - `TRA0212.jsp` - Related screen
  - `TRA0211.jsp` - Related screen
  - `TRA0213.jsp` - Related screen
  - `TRA0214.jsp` - Related screen
  - `TRA0215.jsp` - Related screen
  - `TRA0216.jsp` - Related screen
  - `TRA0121_PHATRA.jsp` - Related screen
  - `TRA0122_PHATRA.jsp` - Related screen
  - `TRA0123_PHATRA.jsp` - Related screen
  - `TRA0124_PHATRA.jsp` - Related screen
  - `TRA0125_PHATRA.jsp` - Related screen
  - `TRA0125_EXCEL.jsp` - Excel export screen
  - `TRA0125_EXCEL_APF.jsp` - Excel export screen (APF)
  - `TRA0126_PHATRA.jsp` - Related screen
  - `TRA0121E_PHATRA.jsp` - Edit screen
  - `TRA0122E_PHATRA.jsp` - Edit screen
  - `TRA0123E_PHATRA.jsp` - Edit screen
  - `TRA0124E_PHATRA.jsp` - Edit screen
  - `TRA0125E_PHATRA.jsp` - Edit screen
  - `TRA0126E_PHATRA.jsp` - Edit screen
  - `TRA0129H_PHATRA.jsp` - History screen
  - `TRA0128H_PHATRA.jsp` - History screen
  - `TRA0126T_PHATRA.jsp` - Related screen
  - `TRA035_S.jsp` - Search screen
  - `TRA0130_PHATRA.jsp` - Related screen
  - `TRA0130H_PHATRA.jsp` - History screen
  - `TRA0130T_PHATRA.jsp` - Related screen
  - `TRA012_P1.jsp` - Related screen
  - `TRA012_P2.jsp` - Related screen
  - `TRA012_P1_OPT.jsp` - Option screen
  - `TRA012_P2_OPT.jsp` - Option screen
  - `TRA200.jsp` - Related screen
  - `TRA021_CH.jsp` - Related screen
  - `TRA0212_CH.jsp` - Related screen
  - `TRA0130E_PHATRA.jsp` - Edit screen
  - `TRA0131H_PHATRA.jsp` - History screen
  - `TRA0127.jsp` - Related screen
  - `TRA0127E.jsp` - Edit screen
  - `TRA0128.jsp` - Related screen
  - `TRA0129.jsp` - Related screen
  - `TRA0129E.jsp` - Edit screen
  - `TRA0133.jsp` - Related screen
  - `TRA0133E.jsp` - Edit screen
  - `fckeditor/INDEX.jsp` - FCK Editor
  - `TRA012_ONLINE.jsp` - Online screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Very complex screen with many related pages and company-specific variants

#### 1.3.4 Approved Reserve (TR010304)
- **Menu Name (Thai)**: อนุมัติการจอง
- **Menu Name (English)**: Approved Reserve
- **JSP Files**: 
  - `TRA011C.jsp` - Main screen
  - `TRE004.jsp` - Related screen
  - `TRA011_S.jsp` - Search screen
  - `TRE004_1.jsp` - Related screen
  - `TRA0212.jsp` - Related screen
  - `TRH001.jsp` - Related screen
  - `TRH001_1.jsp` - Related screen
  - `TRE004M.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.5 Course Training Evaluation Form (TR010305)
- **Menu Name (Thai)**: แบบประเมินการอบรมตามรุ่น
- **Menu Name (English)**: Course Training Evaluation Form
- **JSP Files**: 
  - `TRE011.jsp` - Main screen
  - `TRE011H1.jsp` - History screen
  - `TRE012.jsp` - Related screen
  - `TRE011G.jsp` - Related screen
  - `TRE011_1.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.3.6 Closing Training (TR010309)
- **Menu Name (Thai)**: ปิดการอบรม
- **Menu Name (English)**: Closing Training
- **JSP Files**: 
  - `TRA026_PHATRA.jsp` - Main screen
  - `TRH003_3H.jsp` - History screen
  - `TRA0252_PHATRA.jsp` - Related screen
  - `TRA0252E.jsp` - Edit screen
  - `TRA02522E_PHATRA.jsp` - Edit screen
  - `TRH002_2H.jsp` - History screen
  - `TRA0212.jsp` - Related screen
  - `TRA02522_PHATRA.jsp` - Related screen
  - `TRA02525_PHATRA.jsp` - Related screen
  - `TRA02526_PHATRA.jsp` - Related screen
  - `TRA02526E_PHATRA.jsp` - Edit screen
  - `TRA02525E_PHATRA.jsp` - Edit screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.3.7 Surveying Training In-House Request (TR010313)
- **Menu Name (Thai)**: สำรวจการขออบรมภายใน
- **Menu Name (English)**: Surveying Training In-House Request
- **JSP Files**: 
  - `TRA062.jsp` - Main screen
  - `TRA062_1.jsp` - Related screen
  - `TRA062_S.jsp` - Search screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.4 History (TR0104)

#### 1.4.1 Recording Course Training History(Old) (TR010401)
- **Menu Name (Thai)**: บันทึกประวัติการอบรม(ตามหลักสูตร)(Old)
- **Menu Name (English)**: Recording Course Training History(Old)
- **JSP Files**: 
  - `TRE005.jsp` - Main screen (with clean parameter)
  - `TRE005_1.jsp` - Related screen
  - `TRE005_1C.jsp` - Child screen
  - `TRE005_2.jsp` - Related screen
  - `TRE005_2C.jsp` - Child screen
  - `TRE005_3.jsp` - Related screen
  - `TRE005_3C.jsp` - Child screen
  - `TRE005_4.jsp` - Related screen
  - `TRE005_4C.jsp` - Child screen
  - `TRE005_5.jsp` - Related screen
  - `TRE005_5C.jsp` - Child screen
  - `TRE005_6.jsp` - Related screen
  - `TRE005_6C.jsp` - Child screen
  - `TRE005_7.jsp` - Related screen
  - `TRE005_7E.jsp` - Edit screen
  - `TRE005_7C.jsp` - Child screen
  - `TRE005_7D.jsp` - Related screen
  - `TRE005_7Z.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Legacy version, complex screen with many child pages

#### 1.4.2 Training History by Class (TR010407)
- **Menu Name (Thai)**: บันทึกประวัติการอบรม(ตามหลักสูตร)
- **Menu Name (English)**: Training History by Class
- **JSP Files**: 
  - `TRA011HIS.jsp` - Main screen
  - `TRE005_PHATRA.jsp` - Related screen
  - `TRE005_1_PHATRA.jsp` - Related screen
  - `TRE005_1C_PHATRA.jsp` - Child screen
  - `TRE005_2_PHATRA.jsp` - Related screen
  - `TRE005_2C_PHATRA.jsp` - Child screen
  - `TRE005_3_PHATRA.jsp` - Related screen
  - `TRE005_3C_PHATRA.jsp` - Child screen
  - `TRE005_4_PHATRA.jsp` - Related screen
  - `TRE005_4C_PHATRA.jsp` - Child screen
  - `TRE005_5_PHATRA.jsp` - Related screen
  - `TRE005_5C_PHATRA.jsp` - Child screen
  - `TRE005_6_PHATRA.jsp` - Related screen
  - `TRE005_6C_PHATRA.jsp` - Child screen
  - `TRE005_7_PHATRA.jsp` - Related screen
  - `TRE005_7E_PHATRA.jsp` - Edit screen
  - `TRE005_7C_PHATRA.jsp` - Child screen
  - `TRE005_7D_PHATRA.jsp` - Related screen
  - `TRE005_7Z_PHATRA.jsp` - Related screen
  - `TRH002_3H.jsp` - History screen
  - `TRA0212_H.jsp` - History screen
  - `TRA0212_CHIS.jsp` - History screen
  - `TRA011_S.jsp` - Search screen
  - `TRA011_HTRN.jsp` - History screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Current version, complex screen with many related pages

#### 1.4.3 Instructor Experiences History (TR010402)
- **Menu Name (Thai)**: ประวัติการเป็นวิทยากร
- **Menu Name (English)**: Instructor Experiences History
- **JSP Files**: 
  - `TRE006.jsp` - Main screen
  - `TRE006C.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.4.4 Evaluation History (TR010403)
- **Menu Name (Thai)**: ประวัติการประเมินตามรุ่น
- **Menu Name (English)**: Evaluation History
- **JSP Files**: 
  - `TRH010.jsp` - Main screen
  - `TRE012_H.jsp` - History screen
  - `TRE014_H.jsp` - History screen
  - `TRE012_TNR_H.jsp` - History screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.5 Training History by Employee (TR010404)
- **Menu Name (Thai)**: ประวัติการอบรมตามพนักงาน
- **Menu Name (English)**: Training History by Employee
- **JSP Files**: 
  - `TRH011.jsp` - Main screen
  - `TRH003_6H.jsp` - History screen
  - `TRH011_T.jsp` - Related screen
  - `TRH011_A.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.4.6 Training History by course (TR010405)
- **Menu Name (Thai)**: ประวัติการอบรมตามหลักสูตร
- **Menu Name (English)**: Training History by course
- **JSP Files**: 
  - `TRH012.jsp` - Main screen
  - `TRE002H.jsp` - History screen
  - `TRE002_2.jsp` - Related screen
  - `TRE002.jsp` - Related screen
  - `TRH012_1.jsp` - Related screen
  - `TRH012_2.jsp` - Related screen
  - `TRH012_3.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.7 Certicate (TR010406)
- **Menu Name (Thai)**: หนังสือรับรองหลักสูตร
- **Menu Name (English)**: Certicate
- **JSP Files**: 
  - `TRE020.jsp` - Main screen
  - `TRE020_1.jsp` - Related screen
  - `TRE020_2.jsp` - Related screen
  - `TRRE022.jsp` - Related screen
  - `TRRE023.jsp` - Related screen
  - `ASR002.jsp` - Related screen
  - `TRRE025.jsp` - Related screen
  - `TRRE004.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 2. Terms Of Use (TR055)

### 2.1 User Manual (TR05501)
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
- `TRN_INDEX.jsp` - Main module index page (if exists)

### Commented Out / Legacy Files
The following files are mentioned in comments but may not be in active use:
- `TRA004_JETASIA.jsp` and related files - JETASIA company variant (commented out)
- `TRP010.html` - Course Survey prototype (commented out)
- `TRA036.jsp`, `TRA009.jsp` - Old expense group screens (commented out)
- Various TRN*.jsp files for old evaluation system (commented out)
- `TRA011.jsp` - Old opening training screen (commented out)
- `TRA026.jsp` - Old closing training screen (commented out)
- Various TRH*.jsp files for instructor and participant modules (commented out)

### Other Training Files
- `TRA*.jsp` - Training transaction and setup screens
- `TRE*.jsp` - Training evaluation and history screens
- `TRH*.jsp` - Training history screens
- `TRM*.jsp` - Training master data screens
- `TRRE*.jsp` - Training report screens (excluded from this inventory)
- `TRR*.jsp` - Training report screens (excluded from this inventory)
- `fckeditor/INDEX.jsp` - FCK Editor integration

---

## Notes

1. **Company-Specific Variants**: Some screens have company-specific variants (e.g., PHATRA, JETASIA)
2. **Complex Screens**: Opening Training Session (TRA011_PHATRA) has 50+ related pages
3. **File Upload**: Instructor screens include file upload functionality
4. **Evaluation System**: Complex evaluation and assessment system with multiple form types
5. **Training Plans**: Separate planning for employee-based and course-based training
6. **History Tracking**: Extensive history tracking for training sessions, evaluations, and certificates
7. **Legacy Code**: Many commented-out menu items indicate legacy functionality
8. **FCK Editor**: Rich text editor integration for course content
9. **Excel Export**: Multiple Excel export functions for various reports
10. **Online Training**: Support for online training sessions (TRA012_ONLINE)

---

## Migration Considerations

### High Priority Screens
- Course Management (TRA004 and related screens)
- Opening Training Session (TRA011_PHATRA and all related screens)
- Closing Training (TRA026_PHATRA and related screens)
- Training History by Class (TRA011HIS and related screens)
- Surveying Training Request (TRA037 and related screens)
- Define Training Plan screens (TRE002, TRA058)

### Medium Priority Screens
- Setup/Master Data screens (TRA001, TRA002, TRA0021, TRA044, TRA045, TRA036A, TRA036B, TRA010, TRE003, TRA008, TRA006NEW)
- Evaluation screens (TRA003, TRM001, TRA0056, TRE010, TRE021, TRE022)
- History screens (TRE005, TRE006, TRH010, TRH011, TRH012, TRE020)
- Approved Reserve (TRA011C)
- Course Training Evaluation Form (TRE011)

### Lower Priority Screens
- Course Resulting (TRA051) - processing function
- Terms Of Use (User Manual)

### Technical Notes
- Many screens use the CSC library framework
- FCK Editor integration for rich text content
- File upload/download functionality for instructor documents and certificates
- Excel export functionality for various data exports
- Complex multi-page forms with parent-child relationships
- Company-specific variants require careful handling
- Online training support
- Integration with Personal module for employee data
- Integration with Appraisal module for evaluation data
- Multi-language support (Thai/English) built into many screens
- Workflow integration for approval processes (if applicable)

