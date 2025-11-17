# JSP Files Inventory

## Overview
เอกสารนี้รวบรวมรายการ JSP files ทั้งหมดในระบบ HR เพื่อใช้ในการวางแผนการย้ายไป Angular

## Summary Statistics
- **Total JSP Files**: ~4,923 files
- **Main Modules**: 11 modules
- **Largest Module**: PERSONAL (~500+ files)

## Module Breakdown

### 1. PERSONAL Module
**Location**: `hrAppWeb.war/PERSONAL/`
**File Count**: ~500+ files
**Key Files**:
- `PRU040.jsp` - Employee master data
- `PRU084.jsp` - Employee information
- `PWF001.jsp` - Request certificate form
- `PWF014.jsp` - Update employee form
- `PSM001-PSM052.jsp` - Master data management
- `PSN104-PSN320.jsp` - Employee data screens

**Dependencies**:
- Workflow integration (PWF*)
- Document management
- Report generation

### 2. PAYROLL Module
**Location**: `hrAppWeb.war/PAYROLL/`
**File Count**: ~300+ files
**Key Files**:
- `PRU029.jsp` - Payroll setup
- `PRU100-PRU203.jsp` - Payroll processing
- `PRR001-PRR350.jsp` - Payroll reports
- `PRT001-PRT010.jsp` - Payroll transactions
- `EPAYSLIP*.jsp` - Electronic payslip

**Dependencies**:
- Time Attendance integration
- Tax calculation
- Bank transfer
- Report generation

### 3. TA (Time Attendance) Module
**Location**: `hrAppWeb.war/TA/`
**File Count**: ~400+ files
**Key Files**:
- `TAU_CSCWF_001.jsp` - Leave request
- `TAU_CSCWF_005.jsp` - Edit time request
- `TAU_CSCWF_007.jsp` - Shift change request
- `TAU_CSCWF_009.jsp` - Exchange shift request
- `TAU_CSCWF_021.jsp` - Overtime request
- `TAU101-TAU155.jsp` - Time management screens
- `TAR001-TAR702.jsp` - Time reports

**Dependencies**:
- Workflow integration
- Shift management
- Leave balance calculation

### 4. TRAINING Module
**Location**: `hrAppWeb.war/TRAINING/`
**File Count**: ~100+ files
**Key Files**:
- `TRAWF_004.jsp` - External training request
- `TRAWF_009.jsp` - Internal training request
- Training management screens
- Training reports

**Dependencies**:
- Workflow integration
- Course management

### 5. APPRAISAL Module
**Location**: `hrAppWeb.war/APPRAISAL/`
**File Count**: ~50+ files
**Key Files**:
- Appraisal forms
- Appraisal reports
- KPI management

**Dependencies**:
- Employee data
- Workflow integration

### 6. RECRUIT Module
**Location**: `hrAppWeb.war/RECRUIT/`
**File Count**: ~80+ files
**Key Files**:
- Job posting screens
- Applicant management
- Interview scheduling
- Recruitment reports

**Dependencies**:
- Employee master data
- Workflow integration

### 7. WELFARE Module
**Location**: `hrAppWeb.war/WELFARE/`
**File Count**: ~60+ files
**Key Files**:
- `WELWF001.jsp` - Welfare request form
- Welfare management screens
- Welfare reports

**Dependencies**:
- Workflow integration
- Employee data

### 8. WORKFLOW Module
**Location**: `hrAppWeb.war/WORKFLOW/` and `hrAppWeb.war/WORKFLOW_ADMIN/`
**File Count**: ~100+ files
**Key Files**:
- Workflow definition screens
- Workflow execution screens
- Workflow monitoring

**Dependencies**:
- All other modules

### 9. COMPANY Module
**Location**: `hrAppWeb.war/COMPANY/`
**File Count**: ~50+ files
**Key Files**:
- Company master data
- Organization structure
- Company reports

### 10. SETTING Module
**Location**: `hrAppWeb.war/SETTING/`
**File Count**: ~30+ files
**Key Files**:
- System configuration
- User management
- Role management

### 11. EMPVIEW Module
**Location**: `hrAppWeb.war/EMPVIEW/`
**File Count**: ~100+ files
**Key Files**:
- Employee dashboard
- Personal information view
- Payslip view
- Leave balance view

**Dependencies**:
- All other modules (read-only access)

## Common Patterns

### 1. Form Screens
Pattern: `[MODULE]U[###].jsp`
- Example: `PRU040.jsp`, `TAU101.jsp`
- Purpose: Data entry/update screens

### 2. Report Screens
Pattern: `[MODULE]R[###].jsp`
- Example: `PRR001.jsp`, `TAR001.jsp`
- Purpose: Report generation and display

### 3. Transaction Screens
Pattern: `[MODULE]T[###].jsp`
- Example: `PRT001.jsp`
- Purpose: Transaction processing

### 4. Workflow Screens
Pattern: `[MODULE]WF[###].jsp` or `[MODULE]_CSCWF_[###].jsp`
- Example: `PWF001.jsp`, `TAU_CSCWF_001.jsp`
- Purpose: Workflow forms

### 5. Master Data Screens
Pattern: `[MODULE]M[###].jsp` or `PSM[###].jsp`
- Example: `PSM001.jsp`
- Purpose: Master data management

## Migration Priority

### High Priority (Phase 2-5)
1. EMPVIEW - Employee self-service
2. TA - Time Attendance (most used)
3. PERSONAL - Core employee data
4. PAYROLL - Critical business function

### Medium Priority (Phase 6-9)
5. TRAINING
6. APPRAISAL
7. RECRUIT
8. WELFARE

### Lower Priority (Phase 10-11)
9. WORKFLOW & ADMIN
10. REPORTS & ANALYTICS

## Notes
- Many JSP files have company-specific variants (e.g., `_BDF`, `_GPF`, `_NSTDA`)
- Some files are legacy and may not need migration
- Report generation uses Jasper Reports (backend)
- File upload/download functionality needs special handling

