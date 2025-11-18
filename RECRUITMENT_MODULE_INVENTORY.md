# Recruitment Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~50+ screens (excluding reports)
- **Main Categories**: 3 categories
- **Active Menus**: 20+ menu items
- **Module Code**: RE (Recruitment)
- **Base Path**: `hrAppWeb.war/RECRUIT/`

## Summary Statistics
- **Setup (Master Data)**: 12 screens
- **Process (Operations)**: 8 screens
- **Send data for Jobboard**: 2 screens
- **Terms Of Use**: 1 screen

---

## 1. Human Resources (RE01A)

### 1.1 Setup (RE01A01)

#### 1.1.1 Basic Configuration (RE01A0101)
- **Menu Name (Thai)**: การตั้งค่าพื้นฐาน
- **Menu Name (English)**: Basic Configuration
- **JSP Files**: 
  - `BasicConfig.jsp` - Main screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.2 Interview Committee (RE01A0102)
- **Menu Name (Thai)**: ทะเบียนกรรมการสัมภาษณ์
- **Menu Name (English)**: Interview Committee
- **JSP Files**: 
  - `RCM0011_GIT.jsp` - Main screen
  - `PRU084_bothLang.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.3 Skill Level Configuration (RE01A0110)
- **Menu Name (Thai)**: กำหนดค่าของระดับความสามารถ
- **Menu Name (English)**: Skill Level Configuration
- **JSP Files**: 
  - `RCM008.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.4 Source Of Job (RE01A0113)
- **Menu Name (Thai)**: สื่อสมัครงาน
- **Menu Name (English)**: Source Of Job
- **JSP Files**: 
  - `SOURCEJOB.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.5 Candidate Status (RE01A0114)
- **Menu Name (Thai)**: สถานะผู้สมัคร
- **Menu Name (English)**: Candidate Status
- **JSP Files**: 
  - `STATUS.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.6 Urgency status, requesting a power request (RE01A0117)
- **Menu Name (Thai)**: สถานะความเร่งด่วนขอใบขออัตรากำลัง
- **Menu Name (English)**: Urgency status, requesting a power request
- **JSP Files**: 
  - `RCM010.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.7 Applicant Form Configuration (RCM009)
- **Menu Name (Thai)**: กำหนดหน้าจอของฟอร์มสมัครงาน
- **Menu Name (English)**: Applicant Form Configuration
- **JSP Files**: 
  - `RCM009.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.8 E-mail Configuration (RE01A0112)
- **Menu Name (Thai)**: กำหนดอีเมล์
- **Menu Name (English)**: E-mail Configuration
- **JSP Files**: 
  - `EmailConfig.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.9 Notification E-mail Configuration (RE01A0115)
- **Menu Name (Thai)**: กำหนดอีเมล์แจ้งเตือนเมื่อมีผู้สมัคร
- **Menu Name (English)**: Notification E-mail Configuration
- **JSP Files**: 
  - `NotiEmailConfig.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.10 Quick apply Configuration (RE01A0116)
- **Menu Name (Thai)**: การสมัครงานแบบด่วน
- **Menu Name (English)**: Quick apply Configuration
- **JSP Files**: 
  - `QuickApply.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.11 Announce (RE01A0111)
- **Menu Name (Thai)**: ข่าวประชาสัมพันธ์
- **Menu Name (English)**: Announce
- **JSP Files**: 
  - `Announce.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 1.2 Process (RE01A02)

#### 1.2.1 Fill in Application Form (RE01A0201)
- **Menu Name (Thai)**: กรอกใบสมัครงาน
- **Menu Name (English)**: Fill in Application Form
- **JSP Files**: 
  - `FillFormApplicant.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.2 Manpower Request (RE01A0202)
- **Menu Name (Thai)**: ใบขออัตรากำลัง
- **Menu Name (English)**: Manpower Request
- **JSP Files**: 
  - `ManpowerRequest.jsp` - Main screen
  - `REC100.jsp` - Related screen
  - `REC101.jsp` - Related screen
  - `REC101C.jsp` - Related screen
  - `REC101S.jsp` - Related screen
  - `REC101ADDRESPON.jsp` - Add responsible screen
  - `REC101EDITRESPON.jsp` - Edit responsible screen
  - `PRU084_angular.jsp` - Angular related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Complex screen with multiple related pages

#### 1.2.3 Dropped Resume (RE01A0207)
- **Menu Name (Thai)**: รายชื่อผู้ฝากประวัติ
- **Menu Name (English)**: Dropped Resume
- **JSP Files**: 
  - `DropResume.jsp` - Main screen
  - `DropResumePrint.jsp` - Print screen
  - `DropResumePrint_Monthly.jsp` - Monthly print screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.4 Applicant List (RE01A0203)
- **Menu Name (Thai)**: รายชื่อผู้สมัคร
- **Menu Name (English)**: Applicant List
- **JSP Files**: 
  - `FormApplicant.jsp` - Main screen
  - `ApplicantPrint_APF_Daily_NEW.jsp` - Daily print screen (APF)
  - `ApplicantPrint_APF_Monthly_NEW.jsp` - Monthly print screen (APF)
  - `ApplicantPrint_ITALTHAI.jsp` - Print screen (ITALTHAI)
  - `ApplicantPrint_WORKPOINT.jsp` - Print screen (WORKPOINT)
  - `ApplicantPrint_PLANETCOMM.jsp` - Print screen (PLANETCOMM)
  - `ApplicantPrint_KOKOTEL.jsp` - Print screen (KOKOTEL)
  - `CandidatePrint_KOKOTEL.jsp` - Candidate print screen (KOKOTEL)
  - `ApplicantTest_ITALTHAI.jsp` - Test screen (ITALTHAI)
  - `ApplicantPrint_CHATRIUM.jsp` - Print screen (CHATRIUM)
  - `ApplicantPrint_MONTIEN.jsp` - Print screen (MONTIEN)
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Multiple print formats for different companies

#### 1.2.5 Candidate List (RE01A0204)
- **Menu Name (Thai)**: รายชื่อผู้ผ่านการคัดเลือก
- **Menu Name (English)**: Candidate List
- **JSP Files**: 
  - `Candidate.jsp` - Main screen
  - `CandidatePrint_ITALTHAI.jsp` - Print screen (ITALTHAI)
  - `CandidatePrint_WORKPOINT.jsp` - Print screen (WORKPOINT)
  - `CandidatePrint_PLANETCOMM.jsp` - Print screen (PLANETCOMM)
  - `CandidatePrint_CHATRIUM.jsp` - Print screen (CHATRIUM)
  - `CandidatePrint_MONTIEN.jsp` - Print screen (MONTIEN)
  - `CandidateTest_ITALTHAI.jsp` - Test screen (ITALTHAI)
  - `PRU102.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes
- **Note**: Multiple print formats for different companies

#### 1.2.6 Interview / Exam Schedule (RE01A0205)
- **Menu Name (Thai)**: ตารางการนัดหมายสัมภาษณ์และสอบข้อเขียน
- **Menu Name (English)**: Interview / Exam Schedule
- **JSP Files**: 
  - `Appointment.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.7 Recruit History (RE01A0206)
- **Menu Name (Thai)**: ประวัติใบสมัคร
- **Menu Name (English)**: Recruit History
- **JSP Files**: 
  - `RecruitHistory.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.2.8 Jobboard View count (RE01A0230)
- **Menu Name (Thai)**: จำนวนผู้เข้าชม Jobboard
- **Menu Name (English)**: Jobboard View count
- **JSP Files**: 
  - `JobboardViewsCount.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 2. Send data for Jobboard (RE06A)

### 2.1 Send Master Data (RE06A01)
- **Menu Name (Thai)**: ส่งข้อมูลพื้นฐาน
- **Menu Name (English)**: Send Master Data
- **JSP Files**: 
  - `REC_MPO_JB.jsp` - Main screen
- **Type**: Data transfer function
- **Note**: Sends master data to Jobboard system

### 2.2 Send Manpower Request Form (RE06A02)
- **Menu Name (Thai)**: ส่งข้อมูลใบขออัตรากำลัง
- **Menu Name (English)**: Send Manpower Request Form
- **JSP Files**: 
  - `REC_06A2.jsp` - Main screen
- **Type**: Data transfer function
- **Note**: Sends manpower request data to Jobboard system

---

## 3. Terms Of Use (RE07A)

### 3.1 User Manual (RE07A01)
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
- `REC_INDEX.jsp` - Main module index page (if exists)

### Commented Out / Legacy Files
The following files are mentioned in comments but may not be in active use:
- `RCM001.jsp` - Examination type (commented out)
- `RCM002.jsp` - Interview Appraisal Topic (commented out)
- `RCM003.jsp`, `RCM004.jsp` - Interview Appraisal Main Topic (commented out)
- `RCM005.jsp` - Blacklist History (commented out)
- `RCM006.jsp` - Applicant Status (commented out)
- `RCM007.jsp` - Job Source (commented out)
- `RC000.jsp`, `RC001.jsp` - Job Source Budget (commented out)
- `REC_CONFIG.jsp` - Recruitment Configuration (commented out)
- Various REC*.jsp files for old workflow processes (commented out)

### Other Recruitment Files
- `REC*.jsp` - Recruitment transaction screens
- `RCM*.jsp` - Recruitment master data screens
- `RC*.jsp` - Recruitment configuration screens
- `RCWP*.jsp` - Recruitment import/export screens (commented out)
- `RECQUEUE.jsp` - Recruitment queue screen (commented out)

---

## Notes

1. **Company-Specific Variants**: Many print screens have company-specific variants (e.g., ITALTHAI, WORKPOINT, PLANETCOMM, KOKOTEL, CHATRIUM, MONTIEN, APF)
2. **Jobboard Integration**: Module includes functionality to send data to external Jobboard system
3. **Email Configuration**: Separate configuration screens for general email and notification email
4. **Quick Apply**: Special configuration for quick application process
5. **Form Configuration**: Dynamic form configuration for application forms
6. **Print Formats**: Multiple print formats for different company requirements
7. **Legacy Code**: Many commented-out menu items indicate legacy functionality that may have been replaced
8. **Workflow Integration**: Some screens may integrate with workflow system for approvals

---

## Migration Considerations

### High Priority Screens
- Basic Configuration (BasicConfig.jsp)
- Manpower Request (ManpowerRequest.jsp and related screens)
- Applicant List (FormApplicant.jsp)
- Candidate List (Candidate.jsp)
- Interview/Exam Schedule (Appointment.jsp)
- Fill in Application Form (FillFormApplicant.jsp)

### Medium Priority Screens
- Setup/Master Data screens (RCM0011_GIT, RCM008, SOURCEJOB, STATUS, RCM010, RCM009)
- Email Configuration screens (EmailConfig.jsp, NotiEmailConfig.jsp)
- Quick Apply Configuration (QuickApply.jsp)
- Announce (Announce.jsp)
- Dropped Resume (DropResume.jsp)
- Recruit History (RecruitHistory.jsp)

### Lower Priority Screens
- Jobboard integration screens (data transfer functions)
- Terms Of Use (User Manual)

### Technical Notes
- Many screens use the CSC library framework
- Company-specific print formats require careful handling
- Email notification system integration
- Jobboard external system integration
- Dynamic form configuration system
- File upload/download functionality for resumes and documents
- Multi-language support (Thai/English) built into some screens
- Workflow integration for approval processes (if applicable)
- Integration with Personal module for transferring candidates to employees

