# 📊 วิเคราะห์โครงสร้างระบบ Intelligent Video Analytics Platform (IVAP)

**วันที่สร้าง:** 2025-01-XX  
**เวอร์ชัน:** 1.0.0

---

## 📋 สารบัญ

1. [ภาพรวมระบบ](#ภาพรวมระบบ)
2. [สถาปัตยกรรมระบบ](#สถาปัตยกรรมระบบ)
3. [โครงสร้างโฟลเดอร์](#โครงสร้างโฟลเดอร์)
4. [โมดูลหลักและฟังก์ชันการทำงาน](#โมดูลหลักและฟังก์ชันการทำงาน)
5. [API Endpoints](#api-endpoints)
6. [Security & Middleware](#security--middleware)
7. [Database Models](#database-models)
8. [Services & Business Logic](#services--business-logic)
9. [Utilities & Helpers](#utilities--helpers)
10. [Testing & Quality Assurance](#testing--quality-assurance)

---

## 🎯 ภาพรวมระบบ

### ระบบคืออะไร?

**Intelligent Video Analytics Platform (IVAP)** เป็นระบบ Backend API สำหรับจัดการและวิเคราะห์วิดีโอแบบครบวงจร โดยมีฟีเจอร์หลักดังนี้:

- 🎥 **Video Analytics & Face Recognition** - ระบบวิเคราะห์วิดีโอและจดจำใบหน้า
- 👤 **Employee Management** - จัดการข้อมูลพนักงาน
- 👥 **Visitor & Guest Management** - จัดการผู้เยี่ยมและแขก
- 🚪 **Access Control** - ระบบควบคุมการเข้าออกประตู
- 🅿️ **Parking Management (LPR)** - จัดการที่จอดรถและอ่านป้ายทะเบียน
- 🎉 **Event Management** - จัดการกิจกรรมและการลงทะเบียน
- 📊 **Analytics & Reporting** - วิเคราะห์และรายงานข้อมูล
- 🔔 **Alerts & Notifications** - ระบบแจ้งเตือน
- 🔐 **Security & Authentication** - ระบบความปลอดภัยและการยืนยันตัวตน

### Technology Stack

- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL with SQLAlchemy ORM (Async)
- **Authentication:** JWT (JSON Web Tokens) with PassLib
- **Face Recognition:** face-recognition library, MTCNN, TensorFlow
- **AI/ML:** PyTorch, Transformers, Ultralytics, ONNX Runtime
- **Video Processing:** OpenCV, FFmpeg, aiortc
- **Caching:** Redis (optional)
- **Monitoring:** psutil, Prometheus
- **Rate Limiting:** slowapi
- **Documentation:** OpenAPI/Swagger

---

## 🏗️ สถาปัตยกรรมระบบ

### Architecture Pattern

ระบบใช้ **Layered Architecture** แบบ Clean Architecture:

```
┌─────────────────────────────────────────┐
│         API Layer (Routes)              │
│  - HTTP Request/Response Handling       │
│  - Route Definitions                    │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Controller Layer                   │
│  - Business Logic Orchestration         │
│  - Request Validation                   │
│  - Response Formatting                  │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Service Layer                      │
│  - Business Logic Implementation        │
│  - External Service Integration         │
│  - Data Transformation                  │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Repository Layer                   │
│  - Data Access Logic                    │
│  - CRUD Operations                      │
│  - Query Optimization                   │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Model Layer (SQLAlchemy)           │
│  - Database Schema                      │
│  - Relationships                        │
└─────────────────────────────────────────┘
```

### Design Patterns ที่ใช้

1. **Repository Pattern** - แยก data access logic
2. **Service Layer Pattern** - แยก business logic
3. **Dependency Injection** - FastAPI's dependency system
4. **Middleware Pattern** - Request/Response processing
5. **Factory Pattern** - Service creation
6. **Strategy Pattern** - Different verification strategies

---

## 📁 โครงสร้างโฟลเดอร์

```
IVAP_SERVICE/
├── src/                          # Source code หลัก
│   ├── main.py                  # Entry point ของแอปพลิเคชัน
│   ├── api/                     # API versioning
│   │   └── v1/                  # API version 1
│   ├── auth/                    # Authentication & Authorization
│   │   ├── auth_bearer.py      # JWT Bearer token handling
│   │   ├── authorization.py    # Role-based access control
│   │   └── utils.py            # Auth utilities
│   ├── config/                  # Configuration
│   │   ├── config.py           # App configuration
│   │   ├── database.py         # Database connection
│   │   ├── settings.py         # Environment settings
│   │   └── production_settings.py
│   ├── controllers/            # Business logic controllers (35+ files)
│   ├── middlewares/            # Custom middlewares (15+ files)
│   ├── models/                 # SQLAlchemy models (46 files)
│   ├── repositories/           # Repository pattern
│   │   ├── base_repository.py # Base CRUD operations
│   │   ├── cached_repository_mixin.py
│   │   ├── visitor_repository.py
│   │   └── guest_repository.py
│   ├── routes/                 # API route definitions (52 files)
│   ├── schemas/                # Pydantic schemas (45 files)
│   ├── services/               # Business services (31 files)
│   ├── utils/                  # Utility functions (15+ files)
│   ├── validators/             # Business validation layer
│   │   ├── base_validator.py
│   │   ├── visitor_validator.py
│   │   ├── guest_validator.py
│   │   └── event_validator.py
│   ├── exceptions/             # Custom exceptions
│   ├── extensions/             # Extensions (rate limiter, etc.)
│   ├── cache/                  # Caching utilities
│   └── ml/                     # Machine Learning models
│       ├── advanced_models.py
│       ├── anomaly_detection.py
│       ├── model_registry.py
│       └── predictive_analytics.py
├── tests/                      # Unit tests
├── scripts/                    # Utility scripts (44 files)
├── migrations/                 # Database migrations (Alembic)
├── requirements.txt            # Python dependencies
└── README.md                   # เอกสารหลัก
```

---

## 🔧 โมดูลหลักและฟังก์ชันการทำงาน

### 1. Authentication & Authorization (`src/auth/`)

#### ฟังก์ชันหลัก:
- **JWT Token Management** - สร้างและตรวจสอบ JWT tokens
- **Password Hashing** - ใช้ bcrypt สำหรับเข้ารหัสรหัสผ่าน
- **Role-Based Access Control (RBAC)** - ควบคุมสิทธิ์ตาม role
- **Multi-Factor Authentication (MFA)** - การยืนยันตัวตนหลายขั้นตอน

#### ไฟล์สำคัญ:
- `auth_bearer.py` - JWT Bearer token authentication
- `authorization.py` - RBAC logic
- `utils.py` - Auth helper functions

#### API Endpoints:
- `POST /api/v1/auth/login` - เข้าสู่ระบบ
- `POST /api/v1/auth/register` - ลงทะเบียน
- `GET /api/v1/auth/me` - ข้อมูลผู้ใช้ปัจจุบัน
- `POST /api/v1/mfa/verify` - ยืนยัน MFA

---

### 2. Controllers (`src/controllers/`)

Controllers เป็นชั้นที่จัดการ business logic และ orchestration มี 35+ controllers:

#### 2.1 Authentication & User Management
- **`auth_controller.py`** - การเข้าสู่ระบบ, ลงทะเบียน, จัดการ session
- **`user_controller.py`** - จัดการข้อมูลผู้ใช้
- **`mfa_controller.py`** - Multi-factor authentication
- **`rbac_controller.py`** - Role & Permission management

#### 2.2 Organization Management
- **`company_controller.py`** - จัดการบริษัท (CRUD)
- **`company_location_controller.py`** - จัดการสถานที่ของบริษัท
- **`department_controller.py`** - จัดการแผนก
- **`position_controller.py`** - จัดการตำแหน่งงาน
- **`employee_controller.py`** - จัดการพนักงาน
- **`member_controller.py`** - จัดการสมาชิก
- **`company_employee_controller.py`** - ความสัมพันธ์บริษัท-พนักงาน

#### 2.3 Time & Attendance
- **`employee_timestamp_controller.py`** - บันทึกเวลาเข้า-ออกงาน
- **`shift_controller.py`** - จัดการกะการทำงาน
- **`leave_controller.py`** - จัดการการลางาน

#### 2.4 Visitor & Guest Management
- **`visitor_controller.py`** - จัดการผู้เยี่ยม (พื้นฐาน)
- **`visitor_controller_refactored.py`** - Visitor management (refactored version)
- **`guest_controller.py`** - จัดการแขก (พื้นฐาน)
- **`guest_controller_refactored.py`** - Guest management (refactored version)

#### 2.5 Event Management
- **`event_controller.py`** - จัดการกิจกรรม
  - สร้าง/แก้ไข/ลบกิจกรรม
  - จัดการสถานะ (draft, published, cancelled, completed)
  - จัดการประเภท (meeting, training, conference, etc.)
  - การลงทะเบียนและติดตามผู้เข้าร่วม
  - QR Code generation

#### 2.6 Access Control & Security
- **`door_controller.py`** - จัดการประตูและการเข้าถึง
- **`device_controller.py`** - จัดการอุปกรณ์ (cameras, sensors)
- **`security_controller.py`** - ระบบความปลอดภัย
- **`verification_controller.py`** - Verification hub
- **`verification_session_controller.py`** - จัดการ session การยืนยันตัวตน
- **`verification_template_controller.py`** - Template สำหรับการยืนยันตัวตน
- **`verification_config_controller.py`** - Configuration การยืนยันตัวตน

#### 2.7 Biometric & Face Recognition
- **`face_controller.py`** - Face enrollment และ verification
- **`biometric_data_controller.py`** - จัดการข้อมูล biometric

#### 2.8 Vehicle & Parking
- **`vehicle_controller.py`** - จัดการยานพาหนะ
- **`vehicle_data_controller.py`** - ข้อมูลยานพาหนะ
- **`parking_controller.py`** - จัดการที่จอดรถ (LPR - License Plate Recognition)

#### 2.9 QR Code & RFID
- **`qr_code_controller.py`** - สร้างและจัดการ QR codes
- **`rfid_card_controller.py`** - จัดการบัตร RFID

#### 2.10 Notifications & Alerts
- **`notification_controller.py`** - ระบบแจ้งเตือน
- **`alert_service.py`** (ใน services) - Alert management

#### 2.11 Analytics & Reporting
- **`dashboard_controller.py`** - Dashboard statistics
- **`reports_controller.py`** - สร้างรายงาน
- **`monitoring_controller.py`** - System monitoring

#### 2.12 Video Analytics & AI
- **`video_analytics_service.py`** (ใน services) - Video processing
- **`ai_models_service.py`** (ใน services) - AI model management

#### 2.13 System Administration
- **`system_controller.py`** - System settings
- **`log_controller.py`** - Log management
- **`safety_controller.py`** - Safety dashboard

---

### 3. Routes (`src/routes/`)

Routes เป็นชั้นที่กำหนด API endpoints มี 52 route files:

#### 3.1 Core Routes
- `auth_routes.py` - Authentication endpoints
- `company_routes.py` - Company management
- `employee_routes.py` - Employee management
- `member_routes.py` - Member management

#### 3.2 Visitor & Guest Routes
- `visitor_routes.py` - Visitor management (basic)
- `visitor_extended_routes.py` - Extended visitor features (visits, invitations, badges)
- `guest_routes.py` - Guest management (basic)
- `guest_registration_routes.py` - Event guest registration

#### 3.3 Event Routes
- `event_routes.py` - Event management (admin + public endpoints)

#### 3.4 Access Control Routes
- `door_routes.py` - Door access control
- `device_routes.py` - Device management
- `security_routes.py` - Security features

#### 3.5 Verification Routes
- `verification_routes.py` - Verification hub
- `verification_session_routes.py` - Verification sessions
- `verification_template_routes.py` - Verification templates
- `face_routes.py` - Face recognition
- `biometric_data_routes.py` - Biometric data
- `qr_code_routes.py` - QR codes
- `rfid_card_routes.py` - RFID cards

#### 3.6 Vehicle & Parking Routes
- `vehicle_routes.py` - Vehicle management
- `vehicle_data_routes.py` - Vehicle data
- `parking_routes.py` - Parking management

#### 3.7 Analytics & Monitoring Routes
- `dashboard_routes.py` - Dashboard
- `analytics_routes.py` - Analytics
- `reports_routes.py` - Reports
- `monitoring_routes.py` - System monitoring
- `performance_routes.py` - Performance metrics
- `hardware_monitoring_routes.py` - Hardware monitoring
- `metrics_routes.py` - Metrics
- `enhanced_metrics_routes.py` - Enhanced metrics

#### 3.8 Notification Routes
- `notification_routes.py` - Notifications
- `alert_routes.py` - Alerts

#### 3.9 Video Analytics Routes
- `video_analytics_routes.py` - Video analytics
- `ai_models_routes.py` - AI models
- `ai_services_routes.py` - AI services

#### 3.10 System Routes
- `system_routes.py` - System settings
- `admin_routes.py` - Admin functions
- `log_routes.py` - Log management
- `safety_routes.py` - Safety dashboard
- `template_management_routes.py` - Template management

#### 3.11 Utility Routes
- `file_upload_router.py` - File upload
- `health_routes.py` - Health checks
- `landing_routes.py` - Landing page
- `integration_routes.py` - External integrations

---

### 4. Services (`src/services/`)

Services เป็นชั้นที่จัดการ business logic และ integration มี 31 service files:

#### 4.1 Core Services
- **`auth_service.py`** - Authentication logic
- **`company_service.py`** - Company business logic
- **`employee_service.py`** - Employee business logic
- **`department_service.py`** - Department management

#### 4.2 Visitor & Guest Services
- **`visitor_service.py`** - Visitor business logic
- **`guest_service.py`** - Guest business logic

#### 4.3 Verification Services
- **`verification_hub.py`** - Central verification hub
- **`verification_enhanced_service.py`** - Enhanced verification features
- **`mfa_service.py`** - Multi-factor authentication

#### 4.4 Notification Services
- **`notification_service.py`** - Basic notifications
- **`notification_enhanced_service.py`** - Enhanced notifications
- **`alert_service.py`** - Alert management
- **`webhook_service.py`** - Webhook integration

#### 4.5 Analytics Services
- **`analytics_service.py`** - Analytics calculations
- **`performance_service.py`** - Performance metrics
- **`video_analytics_service.py`** - Video analytics processing
- **`video_processing_service.py`** - Video processing

#### 4.6 AI & ML Services
- **`ai_models_service.py`** - AI model management
- **`model_registry.py`** (ใน ml/) - Model registry

#### 4.7 Utility Services
- **`pagination_service.py`** - Pagination logic
- **`search_service.py`** - Search functionality
- **`cache_service.py`** - Caching layer
- **`encryption_service.py`** - Encryption utilities
- **`audit_service.py`** - Audit logging
- **`landing_service.py`** - Landing page logic

#### 4.8 Infrastructure Services
- **`database_pool.py`** - Database connection pooling
- **`api_gateway_service.py`** - API gateway logic
- **`websocket_manager.py`** - WebSocket management
- **`enhanced_health_service.py`** - Health check service

---

### 5. Repositories (`src/repositories/`)

Repositories เป็นชั้นที่จัดการ data access ใช้ Repository Pattern:

#### 5.1 Base Repository
- **`base_repository.py`** - Base CRUD operations
  - `get_by_id()` - Get by ID with company isolation
  - `get_all()` - Get all with filters
  - `create()` - Create new record
  - `update()` - Update record
  - `delete()` - Soft delete support
  - `paginate()` - Pagination support
  - `search()` - Search functionality
  - Eager loading support (ป้องกัน N+1 queries)

#### 5.2 Specialized Repositories
- **`visitor_repository.py`** - Visitor-specific queries
- **`guest_repository.py`** - Guest-specific queries
- **`cached_repository_mixin.py`** - Caching capabilities

#### ฟีเจอร์สำคัญ:
- ✅ Company isolation อัตโนมัติ
- ✅ Soft delete support
- ✅ Pagination & Search
- ✅ Eager loading (ป้องกัน N+1 queries)
- ✅ Caching integration

---

### 6. Models (`src/models/`)

Models เป็น SQLAlchemy ORM models มี 46 model files:

#### 6.1 Core Models
- **`company.py`** - Company model
- **`company_location.py`** - Company locations
- **`company_setting.py`** - Company settings
- **`department.py`** - Departments
- **`position.py`** - Positions
- **`employee.py`** - Employees
- **`member.py`** - Members (users)
- **`company_employee.py`** - Company-Employee relationships

#### 6.2 Time & Attendance Models
- **`employee_timestamp.py`** - Time entries
- **`shift.py`** - Work shifts
- **`leave_request.py`** - Leave requests

#### 6.3 Visitor & Guest Models
- **`visitor.py`** - Visitors
- **`guest_model.py`** - Guests
- **`guest_registration.py`** - Guest event registrations
- **`guest_service.py`** - Guest services

#### 6.4 Event Models
- **`event.py`** - Events
  - Status: draft, published, cancelled, completed
  - Types: meeting, training, conference, social, workshop, seminar, webinar, other
  - Max attendees control
  - QR code support

#### 6.5 Access Control Models
- **`door.py`** - Doors
- **`device.py`** - Devices
- **`trusted_device.py`** - Trusted devices

#### 6.6 Verification Models
- **`verification.py`** - Verifications
- **`verification_enhanced.py`** - Enhanced verifications
- **`verification_config.py`** - Verification configurations
- **`verification_template.py`** - Verification templates
- **`face_encoding.py`** - Face encodings
- **`biometric_data.py`** - Biometric data

#### 6.7 Vehicle & Parking Models
- **`vehicle.py`** - Vehicles
- **`parking.py`** - Parking spaces

#### 6.8 Notification Models
- **`notification.py`** - Notifications
- **`notification_enhanced.py`** - Enhanced notifications
- **`alert_models.py`** - Alerts

#### 6.9 Security Models
- **`role.py`** - Roles
- **`permission.py`** - Permissions
- **`security_alert.py`** - Security alerts
- **`mfa_config.py`** - MFA configurations

#### 6.10 Analytics Models
- **`video_analytics.py`** - Video analytics data
- **`camera.py`** - Cameras

#### 6.11 System Models
- **`system_setting.py`** - System settings
- **`activity_log.py`** - Activity logs
- **`audit_log.py`** - Audit logs
- **`audit_trail.py`** - Audit trails
- **`log_entry.py`** - Log entries
- **`safety_models.py`** - Safety data

#### 6.12 Utility Models
- **`enums.py`** - Enum definitions
- **`mixins.py`** - Model mixins (TimestampsMixin, SoftDeleteMixin)
- **`associations.py`** - Association tables

---

### 7. Schemas (`src/schemas/`)

Schemas เป็น Pydantic models สำหรับ request/response validation มี 45 schema files:

#### 7.1 Request Schemas
- Request body validation
- Query parameter validation
- Path parameter validation

#### 7.2 Response Schemas
- Standardized response format
- Paginated responses
- Error responses

#### 7.3 Schema Files (ตัวอย่าง)
- `auth_schema.py` - Authentication schemas
- `company_schema.py` - Company schemas
- `employee_schema.py` - Employee schemas
- `visitor_schema.py` - Visitor schemas
- `guest_schema.py` - Guest schemas
- `event_schema.py` - Event schemas
- `verification_schema.py` - Verification schemas
- `standard_response_schema.py` - Standard response format
- `error_schema.py` - Error response format

---

### 8. Middlewares (`src/middlewares/`)

Middlewares เป็นชั้นที่ประมวลผล request/response มี 15+ middleware files:

#### 8.1 Security Middlewares
- **`security_middleware.py`** - Security headers, CSRF protection
- **`request_validation_middleware.py`** - XSS & SQL Injection protection
- **`auth_middleware.py`** - Authentication middleware
- **`rbac_middleware.py`** - Role-based access control

#### 8.2 Rate Limiting
- **`rate_limiting.py`** - Basic rate limiting
- **`enhanced_rate_limiting.py`** - Enhanced rate limiting

#### 8.3 Logging & Monitoring
- **`request_logging.py`** - Request logging
- **`structured_logging_middleware.py`** - Structured logging
- **`performance_monitoring.py`** - Performance monitoring

#### 8.4 Request Processing
- **`request_id_middleware.py`** - Request ID generation
- **`api_headers_middleware.py`** - API headers
- **`response_wrapper_middleware.py`** - Response wrapping
- **`version_middleware.py`** - API versioning
- **`upload_middleware.py`** - File upload handling

#### 8.5 Error Handling
- **`error_middleware.py`** - Error handling and formatting

---

### 9. Utils (`src/utils/`)

Utilities เป็น helper functions มี 15+ utility files:

#### 9.1 Face Recognition
- **`face_recognition.py`** - Face recognition utilities
- **`face_index.py`** - Face indexing (FAISS)
- **`image_quality.py`** - Image quality assessment
- **`liveness_detection.py`** - Liveness detection

#### 9.2 API Utilities
- **`pagination.py`** - Pagination helpers
- **`query_params.py`** - Query parameter parsing
- **`response_helpers.py`** - Response formatting
- **`api_versioning.py`** - API versioning

#### 9.3 File Handling
- **`file_handler.py`** - File upload/download
- **`csv_export.py`** - CSV export

#### 9.4 Performance
- **`query_optimization.py`** - Query optimization utilities
- **`cache_decorator.py`** - Caching decorators

#### 9.5 Other Utilities
- **`geolocation.py`** - Geolocation utilities
- **`structured_logging.py`** - Structured logging setup
- **`rate_limit_config.py`** - Rate limit configuration

---

### 10. Validators (`src/validators/`)

Validators เป็นชั้นที่จัดการ business validation:

- **`base_validator.py`** - Base validator class
- **`visitor_validator.py`** - Visitor business rules
- **`guest_validator.py`** - Guest business rules
- **`event_validator.py`** - Event business rules

---

### 11. Machine Learning (`src/ml/`)

ML models และ utilities:

- **`advanced_models.py`** - Advanced ML models
- **`anomaly_detection.py`** - Anomaly detection
- **`model_registry.py`** - Model registry (MLflow)
- **`model_optimization.py`** - Model optimization
- **`ml_ops.py`** - MLOps utilities
- **`pipeline.py`** - ML pipelines
- **`predictive_analytics.py`** - Predictive analytics
- **`external_ai_services.py`** - External AI service integration

---

## 🌐 API Endpoints

### API Structure

```
/api/v1/
├── /auth                    # Authentication
├── /mfa                     # Multi-factor authentication
├── /roles                   # Role & Permission management
├── /companies               # Company management
├── /company-locations       # Company locations
├── /departments             # Departments
├── /positions               # Positions
├── /employees               # Employees
├── /members                 # Members
├── /timestamps              # Time & Attendance
├── /shifts                  # Shift management
├── /leaves                  # Leave management
├── /devices                 # Device management
├── /doors                   # Door management
├── /security                # Security
├── /verifications           # Verification hub
├── /verification-sessions   # Verification sessions
├── /verification-templates   # Verification templates
├── /face                    # Face recognition
├── /biometric-data          # Biometric data
├── /qr-codes                # QR codes
├── /rfid-cards              # RFID cards
├── /visitors                # Visitor management
├── /visitor-extended        # Extended visitor features
├── /guests                  # Guest management
├── /guest-registrations     # Guest registrations
├── /events                  # Event management
├── /vehicles                # Vehicle management
├── /vehicle-data            # Vehicle data
├── /parking                 # Parking management
├── /ai-services             # AI services
├── /ai-models               # AI models
├── /video-analytics         # Video analytics
├── /analytics               # Analytics
├── /dashboard               # Dashboard
├── /monitoring              # System monitoring
├── /performance             # Performance monitoring
├── /hardware                # Hardware monitoring
├── /metrics                 # Metrics
├── /alerts                  # Alerts
├── /notifications           # Notifications
├── /system                  # System settings
├── /admin                   # Admin functions
├── /log-management          # Log management
├── /reports                  # Reports
├── /safety                   # Safety dashboard
├── /templates                # Template management
├── /files                    # File upload
├── /integrations             # External integrations
├── /health                   # Health checks
└── /                         # Landing page
```

### API Documentation

- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`
- **OpenAPI JSON:** `http://localhost:8000/openapi.json`

---

## 🔒 Security & Middleware

### Security Features

1. **JWT Authentication**
   - Token-based authentication
   - Token expiration
   - Refresh token support

2. **Role-Based Access Control (RBAC)**
   - Role management
   - Permission management
   - Company isolation

3. **Password Security**
   - bcrypt hashing
   - Password strength validation

4. **Multi-Factor Authentication (MFA)**
   - TOTP support
   - SMS verification (optional)

5. **Rate Limiting**
   - Per-endpoint rate limiting
   - IP-based rate limiting

6. **Input Validation**
   - XSS protection
   - SQL Injection prevention
   - Request sanitization

7. **CORS Protection**
   - Configurable CORS origins
   - Credential support

8. **Security Headers**
   - X-Frame-Options
   - X-Content-Type-Options
   - X-XSS-Protection
   - Strict-Transport-Security

### Middleware Stack

Middleware จะทำงานตามลำดับนี้:

1. **RequestIDMiddleware** - สร้าง request ID
2. **StructuredLoggingMiddleware** - Log requests
3. **APIHeadersMiddleware** - เพิ่ม API headers
4. **CORSMiddleware** - CORS handling
5. **InputValidationMiddleware** - Input validation
6. **CSRFProtectionMiddleware** - CSRF protection
7. **RequestLoggingMiddleware** - Request logging
8. **RateLimitMiddleware** - Rate limiting (production only)
9. **SecurityHeadersMiddleware** - Security headers
10. **PerformanceMonitoringMiddleware** - Performance monitoring

---

## 💾 Database Models

### Database Structure

ระบบใช้ **PostgreSQL** กับ **SQLAlchemy ORM (Async)**

### Key Relationships

1. **Company → Employees** (One-to-Many)
2. **Company → Visitors** (One-to-Many)
3. **Company → Events** (One-to-Many)
4. **Event → Guest Registrations** (One-to-Many)
5. **Employee → Timestamps** (One-to-Many)
6. **Member → Roles** (Many-to-Many)
7. **Role → Permissions** (Many-to-Many)

### Database Indexes

Indexes ถูกเพิ่มบน frequently queried fields:
- `company_id` - สำหรับ company isolation
- `email`, `phone` - สำหรับ search
- `status` - สำหรับ filtering
- `created_at`, `updated_at` - สำหรับ sorting

---

## 🎯 Services & Business Logic

### Service Layer Responsibilities

1. **Business Logic Implementation**
   - Complex business rules
   - Data transformation
   - Validation logic

2. **External Service Integration**
   - Email services (SMTP)
   - SMS services
   - Webhook services
   - AI/ML services

3. **Data Processing**
   - Image processing
   - Video processing
   - Face recognition
   - Analytics calculations

### Key Services

- **AuthService** - Authentication logic
- **VerificationHub** - Central verification hub
- **NotificationService** - Notification delivery
- **VideoAnalyticsService** - Video processing
- **AnalyticsService** - Analytics calculations
- **CacheService** - Caching layer

---

## 🛠️ Utilities & Helpers

### Utility Categories

1. **Face Recognition**
   - Face encoding/decoding
   - Face matching
   - Image quality assessment
   - Liveness detection

2. **API Helpers**
   - Pagination
   - Response formatting
   - Query parameter parsing

3. **File Handling**
   - File upload/download
   - Image processing
   - CSV export

4. **Performance**
   - Query optimization
   - Caching decorators

---

## 🧪 Testing & Quality Assurance

### Test Structure

```
tests/
├── test_base_repository.py    # Repository tests
├── test_validators.py          # Validator tests
└── conftest.py                # Pytest configuration
```

### Test Files (Root Level)

- `test_api_comprehensive.py` - Comprehensive API tests
- `test_api_quick.py` - Quick API tests
- `test_event_system_api.py` - Event system tests
- `test_video_analytics.py` - Video analytics tests
- `test_performance.py` - Performance tests
- และอื่นๆ

### Testing Tools

- **pytest** - Testing framework
- **httpx** - HTTP client for testing
- **pytest-asyncio** - Async test support

---

## 📊 Performance Optimizations

### Optimizations ที่ทำแล้ว

1. **Database Indexes**
   - เพิ่มประสิทธิภาพ 30-50%

2. **Query Optimization**
   - Eager loading (ป้องกัน N+1 queries)
   - Query result caching

3. **Caching Layer**
   - Response caching
   - Query result caching
   - Cache invalidation

4. **Code Optimization**
   - Repository Pattern (ลด code duplication ~70%)
   - Common services (reusable logic)

### Performance Metrics

- **Response Time:** ดีขึ้น 20-40% (caching)
- **Database Queries:** ลดลง 30-50% (caching)
- **N+1 Queries:** ป้องกันได้ ~10x improvement

---

## 🔄 Data Flow

### Request Flow

```
1. Client Request
   ↓
2. Middleware Stack
   - Request ID
   - Logging
   - Security
   - Rate Limiting
   ↓
3. Route Handler
   ↓
4. Controller
   - Request Validation
   - Business Logic Orchestration
   ↓
5. Service Layer
   - Business Logic Implementation
   - External Service Integration
   ↓
6. Repository Layer
   - Data Access
   - Query Optimization
   ↓
7. Database (PostgreSQL)
   ↓
8. Response Flow (reverse)
```

---

## 📈 System Monitoring

### Monitoring Endpoints

- `/api/v1/health` - Basic health check
- `/api/v1/health/detailed` - Detailed health check
- `/api/v1/metrics/performance` - Performance metrics
- `/api/v1/metrics/health` - System health
- `/api/v1/metrics/database` - Database metrics
- `/api/v1/metrics/api` - API metrics

### Monitoring Features

- Request logging
- Performance metrics
- Error tracking
- System resource monitoring
- Database connection monitoring

---

## 🚀 Deployment

### Deployment Options

1. **Docker**
   - `Dockerfile` - Standard deployment
   - `Dockerfile.gpu` - GPU-enabled deployment

2. **Kubernetes**
   - Kubernetes manifests in `k8s/` directory

3. **Production Settings**
   - `env.production.example` - Production environment template

### Environment Variables

ดูรายละเอียดใน `env.example` และ `README.md`

---

## 📚 Documentation

### เอกสารสำคัญ

- **README.md** - เอกสารหลัก
- **QUICK_START.md** - เริ่มต้นใช้งาน (5 นาที)
- **BACKEND_SETUP_WINDOWS.md** - คู่มือตั้งค่า Windows
- **REFACTORING_SUMMARY.md** - สรุปการปรับปรุงโครงสร้าง
- **REFACTORING_IMPLEMENTATION.md** - รายละเอียดการปรับปรุง
- **QUERY_OPTIMIZATION_GUIDE.md** - Query optimization guide
- **DOCUMENTATION_INDEX.md** - สารบัญเอกสาร

---

## 🎯 สรุป

### จุดเด่นของระบบ

1. **Architecture**
   - Clean Architecture (Layered)
   - Repository Pattern
   - Service Layer Pattern
   - Dependency Injection

2. **Performance**
   - Database indexes
   - Query optimization
   - Caching layer
   - Eager loading

3. **Security**
   - JWT authentication
   - RBAC
   - Input validation
   - XSS & SQL Injection protection

4. **Maintainability**
   - Code organization
   - Reduced duplication (~70%)
   - Comprehensive documentation
   - Unit tests

5. **Scalability**
   - Async operations
   - Database connection pooling
   - Caching support
   - Microservices-ready

### ฟีเจอร์หลัก

- ✅ Authentication & Authorization
- ✅ Employee Management
- ✅ Visitor & Guest Management
- ✅ Event Management
- ✅ Face Recognition
- ✅ Access Control
- ✅ Vehicle & Parking Management
- ✅ Video Analytics
- ✅ Analytics & Reporting
- ✅ Notifications & Alerts
- ✅ System Monitoring

---

**เอกสารนี้สรุปโครงสร้างและฟังก์ชันการทำงานของระบบ Intelligent Video Analytics Platform (IVAP) อย่างละเอียด**

**อัพเดทล่าสุด:** 2025-01-XX  
**เวอร์ชัน:** 1.0.0

