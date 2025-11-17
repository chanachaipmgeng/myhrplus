# Dependencies Analysis

## Overview
เอกสารนี้วิเคราะห์ dependencies ระหว่างโมดูลต่างๆ ในระบบ HR เพื่อใช้ในการวางแผนการย้ายไป Angular

## Module Dependencies Graph

```
WORKFLOW (Core)
    ↑
    ├── TA (Time Attendance)
    ├── PERSONAL
    ├── TRAINING
    ├── WELFARE
    └── RECRUIT

COMPANY (Master Data)
    ↑
    ├── PERSONAL
    ├── PAYROLL
    ├── TA
    └── All other modules

PERSONAL (Employee Data)
    ↑
    ├── PAYROLL
    ├── TA
    ├── APPRAISAL
    ├── TRAINING
    └── EMPVIEW

PAYROLL
    ↑
    ├── TA (for attendance data)
    └── PERSONAL (for employee data)

TA (Time Attendance)
    ↑
    ├── PAYROLL (for payroll calculation)
    └── PERSONAL (for employee data)

EMPVIEW
    ↑
    ├── PERSONAL (read-only)
    ├── PAYROLL (read-only)
    ├── TA (read-only)
    └── All modules (read-only)
```

## Core Dependencies

### 1. Authentication & Authorization
**Used by**: All modules
**Implementation**: 
- Session-based (current JSP)
- Token-based (REST API)
- Role-based access control

**Migration Impact**: 
- Must be implemented in Phase 1
- All modules depend on this

### 2. Workflow Engine
**Used by**: 
- TA (Leave, Overtime, Time Edit)
- PERSONAL (Forms)
- TRAINING (Training Requests)
- WELFARE (Welfare Requests)
- RECRUIT (Application Process)

**Migration Impact**:
- Core workflow functionality must be ready before Phase 2
- Workflow UI can be migrated in Phase 10

### 3. Employee Master Data (PERSONAL)
**Used by**:
- PAYROLL (employee information)
- TA (employee information)
- APPRAISAL (employee information)
- TRAINING (employee information)
- All other modules

**Migration Impact**:
- Critical dependency
- Must be migrated early (Phase 4)
- Or ensure API is ready before dependent modules

### 4. Company Master Data
**Used by**: All modules
**Migration Impact**:
- Can be migrated in Phase 10
- But API must be ready earlier

### 5. Time Attendance Data (TA)
**Used by**:
- PAYROLL (for payroll calculation)
- Reports

**Migration Impact**:
- Must be migrated before or with PAYROLL
- API integration is critical

## Data Flow Dependencies

### 1. Leave Request Flow
```
TA Module (Leave Request)
    ↓
Workflow Engine
    ↓
TA Module (Leave Balance Update)
    ↓
PAYROLL Module (Payroll Calculation)
```

### 2. Employee Data Flow
```
PERSONAL Module (Employee Data Entry)
    ↓
Company Master Data (Validation)
    ↓
All Modules (Data Usage)
```

### 3. Payroll Processing Flow
```
PERSONAL Module (Employee Data)
    ↓
TA Module (Attendance Data)
    ↓
PAYROLL Module (Calculation)
    ↓
Reports
```

## API Dependencies

### Required APIs for Each Phase

#### Phase 1: Core Infrastructure
- `/restauthen/*` - Authentication API
- `/usapi/*` - Unsecure API (config, menu)

#### Phase 2: EMPVIEW
- `/emvapi/*` - Employee View API
- `/prapi/*` - Payroll API (payslip)
- `/taapi/*` - Time Attendance API (read-only)

#### Phase 3: TA
- `/taapi/*` - Time Attendance API (full)
- `/wapi/*` - Workflow API

#### Phase 4: PERSONAL
- `/capi/*` - Core API (if needed)
- `/wapi/*` - Workflow API
- File upload/download APIs

#### Phase 5: PAYROLL
- `/prapi/*` - Payroll API (full)
- `/taapi/*` - Time Attendance API (read)
- `/emvapi/*` - Employee View API (read)

## Shared Components Dependencies

### 1. Common UI Components
**Used by**: All modules
- Data tables
- Forms
- Modals
- File upload
- Date pickers

**Migration Impact**: 
- Must be created in Phase 0
- All modules will use these

### 2. Workflow Components
**Used by**: 
- TA, PERSONAL, TRAINING, WELFARE, RECRUIT
- Workflow inbox/sentbox
- Workflow approval UI

**Migration Impact**:
- Can be created in Phase 1 or 2
- Reusable across modules

### 3. Report Components
**Used by**: All modules
- Report viewer
- Export functionality
- Print functionality

**Migration Impact**:
- Can be created in Phase 11
- But basic export needed earlier

## External Dependencies

### 1. Jasper Reports
**Used by**: All modules (reports)
**Migration Impact**:
- Backend service (no change needed)
- Frontend needs report viewer component
- PDF/Excel export handling

### 2. File Storage
**Used by**: 
- PERSONAL (documents)
- WORKFLOW (attachments)
- All modules (file upload)

**Migration Impact**:
- File upload/download APIs must be ready
- Frontend file upload component needed

### 3. Email System
**Used by**: WORKFLOW (notifications)
**Migration Impact**:
- Backend service (no change needed)
- Frontend notification component needed

## Migration Strategy Based on Dependencies

### Phase 0-1: Foundation
- Authentication & Authorization (critical)
- Core services
- Common UI components

### Phase 2: EMPVIEW (Independent)
- Can be done independently
- Only read-only access
- Good for testing foundation

### Phase 3: TA (Depends on Workflow)
- Requires workflow API ready
- Can start UI development in parallel

### Phase 4: PERSONAL (Core Dependency)
- Other modules depend on this
- Must ensure API is comprehensive

### Phase 5: PAYROLL (Depends on TA & PERSONAL)
- Requires TA and PERSONAL APIs
- Can start after Phase 3 & 4 APIs ready

### Phase 6-9: Other Modules
- Can be done in parallel (if team available)
- Each depends on PERSONAL and WORKFLOW

### Phase 10: WORKFLOW & ADMIN
- Core workflow engine
- Can be done in parallel with other phases
- But API should be ready earlier

## Risk Mitigation

### 1. API Not Ready
**Risk**: Frontend ready but API not available
**Mitigation**: 
- API-first approach
- Mock API services for development
- Early API testing

### 2. Breaking Changes
**Risk**: API changes break frontend
**Mitigation**:
- Version API endpoints
- Comprehensive API documentation
- Contract testing

### 3. Performance Issues
**Risk**: Too many API calls
**Mitigation**:
- Implement caching
- Batch API calls where possible
- Lazy loading

## Notes
- Dependencies should be managed through Angular services
- Use dependency injection for testability
- Consider state management (NgRx) for complex data flows

