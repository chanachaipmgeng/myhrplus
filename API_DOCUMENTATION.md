# HR System API Documentation

## Overview
เอกสารนี้รวบรวม REST API endpoints ที่มีอยู่ในระบบ HR ปัจจุบัน เพื่อใช้ในการพัฒนา Angular Frontend

## Base URLs
- Development: `https://demo.myhr.co.th/hr`
- Production: (TBD)

## Authentication
ระบบใช้ token-based authentication ผ่าน endpoint `/restauthen/*`

## API Endpoints

### Core API (`/capi/*`)
Base URL: `/capi`

#### Authentication
- `POST /restauthen/login` - User login
- `POST /restauthen/logout` - User logout
- `GET /restauthen/validate` - Validate token

### Workflow API (`/wapi/*`)
Base URL: `/wapi`

#### Workflow Management
- `GET /workflow/inbox` - Get workflow inbox
- `GET /workflow/sentbox` - Get sent workflows
- `POST /workflow` - Create workflow
- `POST /workflow/approve` - Approve workflow
- `POST /workflow/disapprove` - Disapprove workflow
- `POST /workflow/return` - Return workflow
- `POST /workflow/uploadfile` - Upload file to workflow
- `DELETE /workflow/uploadfile` - Remove file from workflow

### Time Attendance API (`/taapi/*`)
Base URL: `/taapi`

#### Leave Management
- `GET /leave/balance` - Get leave balance
- `GET /leave/history` - Get leave history
- `POST /leave/request` - Request leave
- `GET /leave/types` - Get leave types

#### Time Management
- `GET /time/attendance` - Get attendance records
- `POST /time/edit` - Request time edit
- `GET /time/shift` - Get shift schedule

### Employee View API (`/emvapi/*`)
Base URL: `/emvapi`

#### Employee Information
- `GET /employee/profile` - Get employee profile
- `GET /employee/payslip` - Get payslip
- `GET /employee/payslip/history` - Get payslip history
- `GET /employee/documents` - Get employee documents

### Payroll API (`/prapi/*`)
Base URL: `/prapi`

#### Payroll Management
- `GET /payroll/process` - Get payroll process
- `POST /payroll/process` - Process payroll
- `GET /payroll/payslip` - Get payslip
- `GET /payroll/tax` - Get tax information

### Training API (`/trapi/*`)
Base URL: `/trapi`

#### Training Management
- `GET /training/courses` - Get training courses
- `GET /training/history` - Get training history
- `POST /training/register` - Register for training
- `POST /training/request` - Request training approval

### Appraisal API (`/apsapi/*`)
Base URL: `/apsapi`

#### Appraisal Management
- `GET /appraisal/periods` - Get appraisal periods
- `GET /appraisal/forms` - Get appraisal forms
- `POST /appraisal/submit` - Submit appraisal

### Recruit API (`/reapi/*`)
Base URL: `/reapi`

#### Recruitment Management
- `GET /recruit/positions` - Get job positions
- `GET /recruit/applicants` - Get applicants
- `POST /recruit/apply` - Apply for position

### Welfare API (`/welapi/*`)
Base URL: `/welapi`

#### Welfare Management
- `GET /welfare/types` - Get welfare types
- `GET /welfare/balance` - Get welfare balance
- `POST /welfare/request` - Request welfare

### Unsecure API (`/usapi/*`)
Base URL: `/usapi`

#### Public Endpoints
- `GET /public/config` - Get public configuration
- `GET /public/menu` - Get public menu

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```

## Authentication Headers
```
Authorization: Bearer <token>
Content-Type: application/json
```

## Notes
- API endpoints อาจต้องปรับปรุงให้สอดคล้องกับ Angular frontend
- บาง endpoints อาจต้องการ parameters เพิ่มเติม
- ต้องตรวจสอบ CORS settings สำหรับ cross-origin requests

