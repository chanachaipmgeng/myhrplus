# 📚 API Documentation สำหรับ Angular Frontend

**Last Updated:** 2025-01-XX  
**API Version:** v1  
**Base URL:** `http://localhost:8000/api/v1` (Development)  
**Production URL:** `https://your-domain.com/api/v1`

---

## 📋 สารบัญ

1. [Authentication & Authorization](#1-authentication--authorization)
2. [Organization Management](#2-organization-management)
3. [Time & Attendance](#3-time--attendance)
4. [Access Control & Device Management](#4-access-control--device-management)
5. [Verification & Identification](#5-verification--identification)
6. [Visitor & Guest Management](#6-visitor--guest-management)
7. [Event Management](#7-event-management)
8. [Vehicle & Parking Management](#8-vehicle--parking-management)
9. [AI & Analytics](#9-ai--analytics)
10. [Monitoring & Performance](#10-monitoring--performance)
11. [Alerts & Notifications](#11-alerts--notifications)
12. [System & Administration](#12-system--administration)
13. [Common Patterns](#common-patterns)
14. [Error Handling](#error-handling)
15. [TypeScript Models](#typescript-models)

---

## 🔐 Authentication & Authorization

### Base URL: `/api/v1/auth`

### 1. Login
**POST** `/api/v1/auth/login`

**Request Body:**
```typescript
{
  username: string;
  password: string;
}
```

**Response:**
```typescript
{
  user: {
    member_id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    actor_type: "MEMBER" | "ADMIN_SYSTEM" | "GUEST" | "PUBLIC" | "DEVICE" | "API" | "SYSTEM";
    member_type: "ADMIN" | "EMPLOYEE" | "MANAGER" | "SECURITY" | "IT" | "HR" | "CONTRACTOR" | "SYSTEM" | "DEFAULT";
    status: "ENABLE" | "DISABLE";
    roles: string[];
    is_active: boolean;
    is_verified: boolean;
  };
  access_token: string;
  token_type: "bearer";
}
```

**Status Codes:**
- `200`: Login successful
- `401`: Invalid credentials
- `403`: Account inactive or disabled

---

### 2. Register
**POST** `/api/v1/auth/register`

**Request Body:**
```typescript
{
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  actorType: string; // "member", "admin_system", "guest", etc.
  memberType?: string; // Required if actorType is "member"
  phoneNumber?: string;
}
```

**Response:**
```typescript
{
  member_id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  actor_type: string;
  member_type?: string;
  status: string;
  roles: string[];
  is_active: boolean;
  is_verified: boolean;
  created_at: string; // ISO 8601 datetime
}
```

**Status Codes:**
- `201`: Registration successful
- `400`: Validation error
- `409`: Username or email already exists

---

### 3. Get Current User
**GET** `/api/v1/auth/me`

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```typescript
{
  member_id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  // ... same as login response
}
```

**Status Codes:**
- `200`: Success
- `401`: Not authenticated

---

### 4. Forgot Password
**POST** `/api/v1/auth/forgot-password`

**Request Body:**
```typescript
{
  email: string;
}
```

**Response:**
```typescript
{
  success: boolean;
  message: string;
}
```

---

### 5. Reset Password
**POST** `/api/v1/auth/reset-password`

**Request Body:**
```typescript
{
  token: string;
  new_password: string; // Minimum 8 characters
}
```

**Response:**
```typescript
{
  success: boolean;
  message: string;
}
```

---

## 🏢 Organization Management

### Base URL: `/api/v1/companies`

### 1. Get All Companies
**GET** `/api/v1/companies`

**Query Parameters:**
- `page`: number (default: 1)
- `page_size`: number (default: 10)
- `sort_by`: string (default: "created_at")
- `sort_order`: "asc" | "desc" (default: "desc")
- `search`: string (optional)

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```typescript
{
  items: Company[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Company Model:**
```typescript
interface Company {
  company_id: string;
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: "PUBLIC" | "PENDING";
  owner_name: string;
  contact: string;
  created_at: string;
  updated_at: string;
}
```

---

### 2. Get Company by ID
**GET** `/api/v1/companies/{company_id}`

**Response:**
```typescript
Company
```

---

### 3. Create Company
**POST** `/api/v1/companies`

**Request Body:**
```typescript
{
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: "PUBLIC" | "PENDING";
  owner_name: string;
  contact: string;
}
```

**Response:**
```typescript
Company
```

**Status Codes:**
- `201`: Created successfully
- `400`: Validation error
- `403`: Insufficient permissions (requires admin or super_admin)

---

### 4. Update Company
**PUT** `/api/v1/companies/{company_id}`

**Request Body:** (All fields optional)
```typescript
{
  company_name?: string;
  company_code?: string;
  company_info?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  picture?: string;
  status?: "PUBLIC" | "PENDING";
  owner_name?: string;
  contact?: string;
}
```

**Response:**
```typescript
Company
```

---

### 5. Delete Company
**DELETE** `/api/v1/companies/{company_id}`

**Status Codes:**
- `204`: Deleted successfully
- `404`: Company not found
- `403`: Insufficient permissions

---

### 6. Get Company Statistics
**GET** `/api/v1/companies/stats`

**Response:**
```typescript
{
  total_companies: number;
  public_companies: number;
  pending_companies: number;
  suspended_companies: number;
}
```

---

### 7. Get Company Settings
**GET** `/api/v1/companies/{company_id}/settings`

**Response:**
```typescript
{
  company_id: string;
  max_users: number;
  max_devices: number;
  max_storage_gb: number;
  subscription_type: string;
  features: string[];
  additional_settings: Record<string, any>;
  updated_at?: string;
  created_at?: string;
}
```

---

### 8. Update Company Settings
**PUT** `/api/v1/companies/{company_id}/settings`

**Request Body:**
```typescript
{
  max_users?: number;
  max_devices?: number;
  max_storage_gb?: number;
  subscription_type?: string;
  features?: string[];
  additional_settings?: Record<string, any>;
}
```

---

### 9. Activate Company
**POST** `/api/v1/companies/{company_id}/activate`

---

### 10. Deactivate Company
**POST** `/api/v1/companies/{company_id}/deactivate`

---

### 11. Suspend Company
**POST** `/api/v1/companies/{company_id}/suspend`

**Request Body:**
```typescript
{
  reason: string;
}
```

---

## 👥 Employee Management

### Base URL: `/api/v1/employees`

### 1. Get All Employees
**GET** `/api/v1/employees`

**Query Parameters:**
- `page`: number
- `page_size`: number
- `sort_by`: string
- `sort_order`: "asc" | "desc"
- `search`: string
- `company_id`: string (required for admin_system users)

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```typescript
{
  items: CompanyEmployee[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**CompanyEmployee Model:**
```typescript
interface CompanyEmployee {
  company_employee_id: string;
  company_id: string;
  employee_id: string;
  member: {
    member_id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    picture?: string;
  };
  position?: {
    position_id: string;
    th_name: string;
    eng_name: string;
  };
  department?: {
    department_id: string;
    th_name: string;
    eng_name: string;
  };
  salary: number;
  boss_id: string;
  company_role_type: "EMPLOYEE" | "MANAGER" | "ADMIN" | "HR" | "SECURITY" | "IT";
  emp_type: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  start_date: string;
}
```

---

### 2. Get Employee by ID
**GET** `/api/v1/employees/{employee_id}`

**Response:**
```typescript
CompanyEmployee
```

---

### 3. Create Employee
**POST** `/api/v1/employees`

**Request Body:**
```typescript
{
  member: {
    email: string;
    first_name?: string;
    last_name?: string;
    picture?: string;
  };
  position?: {
    position_id: string;
    th_name: string;
    eng_name: string;
  };
  department?: {
    department_id: string;
    th_name: string;
    eng_name: string;
  };
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: "EMPLOYEE" | "MANAGER" | "ADMIN" | "HR" | "SECURITY" | "IT";
  emp_type: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  start_date: string; // ISO 8601 datetime
}
```

**Response:**
```typescript
CompanyEmployee
```

**Status Codes:**
- `201`: Created successfully
- `400`: Validation error
- `403`: Insufficient permissions (requires employee.manage permission)

---

### 4. Update Employee
**PUT** `/api/v1/employees/{employee_id}`

**Request Body:**
```typescript
{
  company_employee_id: string; // Must match path parameter
  member: {
    email: string;
    first_name?: string;
    last_name?: string;
    picture?: string;
  };
  position?: {
    position_id: string;
    th_name: string;
    eng_name: string;
  };
  department?: {
    department_id: string;
    th_name: string;
    eng_name: string;
  };
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: "EMPLOYEE" | "MANAGER" | "ADMIN" | "HR" | "SECURITY" | "IT";
  emp_type: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  start_date: string;
}
```

**Response:**
```typescript
CompanyEmployee
```

---

### 5. Delete Employee
**DELETE** `/api/v1/employees/{employee_id}`

**Status Codes:**
- `204`: Deleted successfully
- `404`: Employee not found

---

### 6. Get Employee Subordinates
**GET** `/api/v1/employees/{employee_id}/subordinates`

**Response:**
```typescript
{
  items: CompanyEmployee[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

---

## 🕐 Time & Attendance

### Base URL: `/api/v1/timestamps`

### 1. Get All Timestamps
**GET** `/api/v1/timestamps`

**Query Parameters:**
- `page`: number
- `page_size`: number
- `sort_by`: string
- `sort_order`: "asc" | "desc"
- `employee_id`: string (filter by employee)
- `date_from`: string (ISO 8601 date)
- `date_to`: string (ISO 8601 date)

**Response:**
```typescript
{
  items: EmployeeTimestamp[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**EmployeeTimestamp Model:**
```typescript
interface EmployeeTimestamp {
  timestamp_id: string;
  company_employee_id: string;
  timestamp: string; // ISO 8601 datetime
  timestamp_type: "CHECK_IN" | "CHECK_OUT" | "BREAK_START" | "BREAK_END";
  device_id?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  created_at: string;
}
```

---

### Base URL: `/api/v1/shifts`

### 1. Get All Shifts
**GET** `/api/v1/shifts`

**Response:**
```typescript
{
  items: Shift[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Shift Model:**
```typescript
interface Shift {
  shift_id: string;
  company_id: string;
  shift_name: string;
  start_time: string; // HH:mm format
  end_time: string; // HH:mm format
  break_duration?: number; // minutes
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
```

---

### Base URL: `/api/v1/leaves`

### 1. Get All Leave Requests
**GET** `/api/v1/leaves`

**Response:**
```typescript
{
  items: LeaveRequest[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**LeaveRequest Model:**
```typescript
interface LeaveRequest {
  leave_id: string;
  company_employee_id: string;
  leave_type: "ANNUAL" | "SICK" | "PERSONAL" | "MATERNITY" | "PATERNITY" | "UNPAID";
  start_date: string; // ISO 8601 date
  end_date: string; // ISO 8601 date
  days: number;
  reason?: string;
  status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
  approved_by?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}
```

---

## 🔒 Access Control & Device Management

### Base URL: `/api/v1/devices`

### 1. Get All Devices
**GET** `/api/v1/devices`

**Response:**
```typescript
{
  items: Device[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Device Model:**
```typescript
interface Device {
  device_id: string;
  company_id: string;
  device_name: string;
  device_type: "CAMERA" | "ACCESS_CONTROL" | "BIOMETRIC" | "RFID_READER" | "QR_SCANNER";
  device_model?: string;
  serial_number?: string;
  ip_address?: string;
  mac_address?: string;
  location?: string;
  status: "ACTIVE" | "INACTIVE" | "MAINTENANCE" | "ERROR";
  is_online: boolean;
  last_seen?: string;
  created_at: string;
  updated_at: string;
}
```

---

### Base URL: `/api/v1/doors`

### 1. Get All Doors
**GET** `/api/v1/doors`

**Response:**
```typescript
{
  items: Door[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Door Model:**
```typescript
interface Door {
  door_id: string;
  company_id: string;
  door_name: string;
  door_code: string;
  location?: string;
  device_id?: string;
  access_level: "PUBLIC" | "RESTRICTED" | "PRIVATE";
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
```

---

## 🔍 Verification & Identification

### Base URL: `/api/v1/verifications`

### 1. Get All Verifications
**GET** `/api/v1/verifications`

**Response:**
```typescript
{
  items: Verification[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Verification Model:**
```typescript
interface Verification {
  verification_id: string;
  company_id: string;
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  verification_type: "FACE" | "RFID" | "QR_CODE" | "BIOMETRIC" | "PIN";
  verification_method: string;
  status: "SUCCESS" | "FAILED" | "PENDING";
  confidence_score?: number;
  device_id?: string;
  door_id?: string;
  timestamp: string;
  metadata?: Record<string, any>;
  created_at: string;
}
```

---

### Base URL: `/api/v1/face`

### 1. Enroll Face
**POST** `/api/v1/face/enroll`

**Request:** `multipart/form-data`
- `image`: File
- `member_id`: string
- `company_id`: string

**Response:**
```typescript
{
  face_id: string;
  member_id: string;
  encoding: number[];
  quality_score: number;
  enrolled_at: string;
}
```

---

### Base URL: `/api/v1/rfid-cards`

### 1. Get All RFID Cards
**GET** `/api/v1/rfid-cards`

**Response:**
```typescript
{
  items: RFIDCard[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**RFIDCard Model:**
```typescript
interface RFIDCard {
  rfid_card_id: string;
  company_id: string;
  member_id?: string;
  card_number: string;
  card_type: "EMPLOYEE" | "VISITOR" | "GUEST" | "TEMPORARY";
  status: "ACTIVE" | "INACTIVE" | "LOST" | "STOLEN";
  issued_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}
```

---

### Base URL: `/api/v1/qr-codes`

### 1. Generate QR Code
**POST** `/api/v1/qr-codes/generate`

**Request Body:**
```typescript
{
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  expires_in?: number; // minutes
  access_level?: string;
}
```

**Response:**
```typescript
{
  qr_code_id: string;
  code: string;
  qr_image_url: string;
  expires_at?: string;
  created_at: string;
}
```

---

## 👤 Visitor & Guest Management

### Base URL: `/api/v1/visitors`

### 1. Get All Visitors
**GET** `/api/v1/visitors`

**Response:**
```typescript
{
  items: Visitor[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Visitor Model:**
```typescript
interface Visitor {
  visitor_id: string;
  company_id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
  company_name?: string;
  purpose: string;
  host_employee_id?: string;
  check_in_time?: string;
  check_out_time?: string;
  status: "PENDING" | "CHECKED_IN" | "CHECKED_OUT" | "EXPIRED";
  badge_id?: string;
  created_at: string;
  updated_at: string;
}
```

---

### Base URL: `/api/v1/guests`

### 1. Get All Guests
**GET** `/api/v1/guests`

**Response:**
```typescript
{
  items: Guest[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Guest Model:**
```typescript
interface Guest {
  guest_id: string;
  company_id: string;
  event_id?: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
  registration_type: "PRE_REGISTERED" | "WALK_IN";
  status: "REGISTERED" | "CHECKED_IN" | "CHECKED_OUT" | "CANCELLED";
  check_in_time?: string;
  check_out_time?: string;
  created_at: string;
  updated_at: string;
}
```

---

## 🎉 Event Management

### Base URL: `/api/v1/events`

### 1. Get All Events
**GET** `/api/v1/events`

**Response:**
```typescript
{
  items: Event[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Event Model:**
```typescript
interface Event {
  event_id: string;
  company_id: string;
  event_name: string;
  event_description?: string;
  event_type: "MEETING" | "CONFERENCE" | "WORKSHOP" | "SEMINAR" | "OTHER";
  start_date: string; // ISO 8601 datetime
  end_date: string; // ISO 8601 datetime
  location?: string;
  max_attendees?: number;
  current_attendees: number;
  status: "DRAFT" | "PUBLISHED" | "ONGOING" | "COMPLETED" | "CANCELLED";
  created_by: string;
  created_at: string;
  updated_at: string;
}
```

---

## 🚗 Vehicle & Parking Management

### Base URL: `/api/v1/vehicles`

### 1. Get All Vehicles
**GET** `/api/v1/vehicles`

**Response:**
```typescript
{
  items: Vehicle[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Vehicle Model:**
```typescript
interface Vehicle {
  vehicle_id: string;
  company_id: string;
  member_id?: string;
  license_plate: string;
  vehicle_type: "CAR" | "MOTORCYCLE" | "TRUCK" | "VAN" | "OTHER";
  brand?: string;
  model?: string;
  color?: string;
  status: "ACTIVE" | "INACTIVE" | "BLACKLISTED";
  registered_at?: string;
  created_at: string;
  updated_at: string;
}
```

---

### Base URL: `/api/v1/parking`

### 1. Get All Parking Records
**GET** `/api/v1/parking`

**Response:**
```typescript
{
  items: ParkingRecord[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**ParkingRecord Model:**
```typescript
interface ParkingRecord {
  parking_id: string;
  company_id: string;
  vehicle_id: string;
  parking_slot?: string;
  entry_time: string;
  exit_time?: string;
  duration_minutes?: number;
  fee?: number;
  status: "PARKED" | "EXITED" | "OVERDUE";
  created_at: string;
  updated_at: string;
}
```

---

## 🤖 AI & Analytics

### Base URL: `/api/v1/ai-services`

### 1. Get AI Services
**GET** `/api/v1/ai-services`

**Response:**
```typescript
{
  services: AIService[];
}
```

**AIService Model:**
```typescript
interface AIService {
  service_id: string;
  service_name: string;
  service_type: "FACE_RECOGNITION" | "OBJECT_DETECTION" | "ANALYTICS" | "ANOMALY_DETECTION";
  status: "ACTIVE" | "INACTIVE";
  endpoint?: string;
  api_key?: string;
  created_at: string;
}
```

---

### Base URL: `/api/v1/analytics`

### 1. Get Analytics Data
**GET** `/api/v1/analytics`

**Query Parameters:**
- `date_from`: string (ISO 8601 date)
- `date_to`: string (ISO 8601 date)
- `metric_type`: string

**Response:**
```typescript
{
  metrics: AnalyticsMetric[];
  summary: {
    total_visitors: number;
    total_employees: number;
    total_verifications: number;
    // ... other summary data
  };
}
```

---

## 📊 Monitoring & Performance

### Base URL: `/api/v1/dashboard`

### 1. Get Dashboard Data
**GET** `/api/v1/dashboard`

**Response:**
```typescript
{
  statistics: {
    total_employees: number;
    total_visitors: number;
    total_devices: number;
    active_verifications: number;
  };
  recent_activities: Activity[];
  alerts: Alert[];
}
```

---

### Base URL: `/api/v1/monitoring`

### 1. Get System Health
**GET** `/api/v1/monitoring/health`

**Response:**
```typescript
{
  status: "healthy" | "degraded" | "down";
  services: {
    database: "up" | "down";
    cache: "up" | "down";
    storage: "up" | "down";
  };
  timestamp: string;
}
```

---

## 🔔 Alerts & Notifications

### Base URL: `/api/v1/notifications`

### 1. Get All Notifications
**GET** `/api/v1/notifications`

**Query Parameters:**
- `page`: number
- `page_size`: number
- `unread_only`: boolean

**Response:**
```typescript
{
  items: Notification[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

**Notification Model:**
```typescript
interface Notification {
  notification_id: string;
  member_id: string;
  title: string;
  message: string;
  notification_type: "INFO" | "WARNING" | "ERROR" | "SUCCESS";
  is_read: boolean;
  read_at?: string;
  created_at: string;
}
```

---

## ⚙️ System & Administration

### Base URL: `/api/v1/system`

### 1. Get System Settings
**GET** `/api/v1/system/settings`

**Response:**
```typescript
{
  settings: Record<string, any>;
}
```

---

## 📝 Common Patterns

### Pagination

All list endpoints support pagination with the following query parameters:

- `page`: number (default: 1)
- `page_size`: number (default: 10, max: 100)
- `sort_by`: string (field name to sort by)
- `sort_order`: "asc" | "desc" (default: "desc")

**Response Format:**
```typescript
{
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}
```

---

### Filtering & Search

Most list endpoints support:

- `search`: string (searches across multiple fields)
- Field-specific filters (e.g., `status`, `type`, `date_from`, `date_to`)

---

### Authentication

All protected endpoints require:

**Headers:**
```
Authorization: Bearer <access_token>
```

The access token is obtained from the `/api/v1/auth/login` endpoint.

---

### Company Isolation

All endpoints automatically filter data by the user's `company_id` from the JWT token. Admin system users can access all companies by providing `company_id` as a query parameter.

---

## ⚠️ Error Handling

### Standard Error Response

```typescript
{
  success: false;
  error: {
    code: string;
    message: string;
    field?: string;
    value?: any;
    details?: Record<string, any>;
  };
  validation_errors?: Array<{
    field: string;
    message: string;
    value?: any;
    type: string;
  }>;
  timestamp: string;
  request_id?: string;
}
```

### Common Error Codes

- `VALIDATION_ERROR`: Invalid input data
- `NOT_FOUND`: Resource not found
- `UNAUTHORIZED`: Not authenticated
- `FORBIDDEN`: Insufficient permissions
- `ALREADY_EXISTS`: Resource already exists
- `INTERNAL_ERROR`: Server error

### HTTP Status Codes

- `200`: Success
- `201`: Created
- `204`: No Content (for DELETE)
- `400`: Bad Request (validation error)
- `401`: Unauthorized (not authenticated)
- `403`: Forbidden (insufficient permissions)
- `404`: Not Found
- `409`: Conflict (already exists)
- `500`: Internal Server Error

---

## 📦 TypeScript Models

See `angular-models.ts` for complete TypeScript interfaces and models.

---

## 🔗 Additional Resources

- **Swagger UI**: `http://localhost:8000/docs` (Development)
- **ReDoc**: `http://localhost:8000/redoc` (Development)
- **Health Check**: `http://localhost:8000/api/v1/health`

---

## 📞 Support

For API support, please contact the development team or refer to the main project documentation.

