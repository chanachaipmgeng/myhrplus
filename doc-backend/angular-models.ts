/**
 * TypeScript Models สำหรับ IVAP Service API
 * Generated for Angular Frontend
 * 
 * Usage:
 * import { Company, CompanyEmployee, LoginRequest, Token } from './angular-models';
 */

// ============================================================================
// Common Types
// ============================================================================

export type ActorType = 'MEMBER' | 'ADMIN_SYSTEM' | 'GUEST' | 'PUBLIC' | 'DEVICE' | 'API' | 'SYSTEM';
export type MemberType = 'ADMIN' | 'EMPLOYEE' | 'MANAGER' | 'SECURITY' | 'IT' | 'HR' | 'CONTRACTOR' | 'SYSTEM' | 'DEFAULT';
export type StatusType = 'ENABLE' | 'DISABLE';
export type PublicType = 'PUBLIC' | 'PENDING';
export type CompanyRoleType = 'EMPLOYEE' | 'MANAGER' | 'ADMIN' | 'HR' | 'SECURITY' | 'IT';
export type EmpType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN';
export type TimestampType = 'CHECK_IN' | 'CHECK_OUT' | 'BREAK_START' | 'BREAK_END';
export type DeviceType = 'CAMERA' | 'ACCESS_CONTROL' | 'BIOMETRIC' | 'RFID_READER' | 'QR_SCANNER';
export type DeviceStatus = 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE' | 'ERROR';
export type VerificationType = 'FACE' | 'RFID' | 'QR_CODE' | 'BIOMETRIC' | 'PIN';
export type VerificationStatus = 'SUCCESS' | 'FAILED' | 'PENDING';
export type VisitorStatus = 'PENDING' | 'CHECKED_IN' | 'CHECKED_OUT' | 'EXPIRED';
export type GuestStatus = 'REGISTERED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
export type EventType = 'MEETING' | 'CONFERENCE' | 'WORKSHOP' | 'SEMINAR' | 'OTHER';
export type EventStatus = 'DRAFT' | 'PUBLISHED' | 'ONGOING' | 'COMPLETED' | 'CANCELLED';
export type VehicleType = 'CAR' | 'MOTORCYCLE' | 'TRUCK' | 'VAN' | 'OTHER';
export type VehicleStatus = 'ACTIVE' | 'INACTIVE' | 'BLACKLISTED';
export type ParkingStatus = 'PARKED' | 'EXITED' | 'OVERDUE';
export type LeaveType = 'ANNUAL' | 'SICK' | 'PERSONAL' | 'MATERNITY' | 'PATERNITY' | 'UNPAID';
export type LeaveStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
export type NotificationType = 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS';
export type RFIDCardType = 'EMPLOYEE' | 'VISITOR' | 'GUEST' | 'TEMPORARY';
export type RFIDCardStatus = 'ACTIVE' | 'INACTIVE' | 'LOST' | 'STOLEN';
export type RegistrationType = 'PRE_REGISTERED' | 'WALK_IN';
export type AccessLevel = 'PUBLIC' | 'RESTRICTED' | 'PRIVATE';
export type SortOrder = 'asc' | 'desc';

// ============================================================================
// Pagination
// ============================================================================

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface QueryParams {
  page?: number;
  page_size?: number;
  sort_by?: string;
  sort_order?: SortOrder;
  search?: string;
  [key: string]: any; // For additional filters
}

// ============================================================================
// Error Handling
// ============================================================================

export interface ErrorDetail {
  code: string;
  message: string;
  field?: string;
  value?: any;
  details?: Record<string, any>;
}

export interface ValidationErrorDetail {
  field: string;
  message: string;
  value?: any;
  type: string;
}

export interface ErrorResponse {
  success: false;
  error: ErrorDetail;
  validation_errors?: ValidationErrorDetail[];
  timestamp?: string;
  request_id?: string;
}

export interface SuccessResponse<T = any> {
  success: true;
  data?: T;
  message?: string;
  timestamp?: string;
  request_id?: string;
}

// ============================================================================
// Authentication
// ============================================================================

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  actorType: string;
  memberType?: string;
  phoneNumber?: string;
}

export interface Member {
  member_id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  picture?: string;
  actor_type: ActorType;
  member_type?: MemberType;
  status: StatusType;
  roles: string[];
  permissions?: string[];
  is_active: boolean;
  is_verified: boolean;
  user_metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
  last_login_at?: string;
}

export interface Token {
  user: Member;
  access_token: string;
  token_type: 'bearer';
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  new_password: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

// ============================================================================
// Company
// ============================================================================

export interface Company {
  company_id: string;
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: PublicType;
  owner_name: string;
  contact: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyBase {
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: PublicType;
  owner_name: string;
  contact: string;
}

export interface CompanyUpdate {
  company_name?: string;
  company_code?: string;
  company_info?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  picture?: string;
  status?: PublicType;
  owner_name?: string;
  contact?: string;
}

export interface CompanySettings {
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

export interface CompanySettingsUpdate {
  max_users?: number;
  max_devices?: number;
  max_storage_gb?: number;
  subscription_type?: string;
  features?: string[];
  additional_settings?: Record<string, any>;
}

export interface CompanyStatistics {
  total_companies: number;
  public_companies: number;
  pending_companies: number;
  suspended_companies: number;
}

// ============================================================================
// Employee
// ============================================================================

export interface MemberInput {
  member_id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
}

export interface PositionInput {
  position_id: string;
  th_name: string;
  eng_name: string;
}

export interface DepartmentInput {
  department_id: string;
  th_name: string;
  eng_name: string;
}

export interface MemberResponse {
  member_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
}

export interface PositionResponse {
  position_id: string;
  th_name: string;
  eng_name: string;
}

export interface DepartmentResponse {
  department_id: string;
  th_name: string;
  eng_name: string;
}

export interface CompanyEmployee {
  company_employee_id: string;
  company_id: string;
  employee_id: string;
  member: MemberResponse;
  position?: PositionResponse;
  department?: DepartmentResponse;
  salary: number;
  boss_id: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

export interface CompanyEmployeePost {
  member: MemberInput;
  position?: PositionInput;
  department?: DepartmentInput;
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

export interface CompanyEmployeeUpdate {
  company_employee_id: string;
  member: MemberInput;
  position?: PositionInput;
  department?: DepartmentInput;
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

// ============================================================================
// Department & Position
// ============================================================================

export interface Department {
  department_id: string;
  company_id: string;
  th_name: string;
  eng_name: string;
  description?: string;
  parent_department_id?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Position {
  position_id: string;
  company_id: string;
  th_name: string;
  eng_name: string;
  description?: string;
  level?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Time & Attendance
// ============================================================================

export interface EmployeeTimestamp {
  timestamp_id: string;
  company_employee_id: string;
  timestamp: string;
  timestamp_type: TimestampType;
  device_id?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  created_at: string;
}

export interface Shift {
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

export interface LeaveRequest {
  leave_id: string;
  company_employee_id: string;
  leave_type: LeaveType;
  start_date: string; // ISO 8601 date
  end_date: string; // ISO 8601 date
  days: number;
  reason?: string;
  status: LeaveStatus;
  approved_by?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Device & Door
// ============================================================================

export interface Device {
  device_id: string;
  company_id: string;
  device_name: string;
  device_type: DeviceType;
  device_model?: string;
  serial_number?: string;
  ip_address?: string;
  mac_address?: string;
  location?: string;
  status: DeviceStatus;
  is_online: boolean;
  last_seen?: string;
  created_at: string;
  updated_at: string;
}

export interface Door {
  door_id: string;
  company_id: string;
  door_name: string;
  door_code: string;
  location?: string;
  device_id?: string;
  access_level: AccessLevel;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Verification
// ============================================================================

export interface Verification {
  verification_id: string;
  company_id: string;
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  verification_type: VerificationType;
  verification_method: string;
  status: VerificationStatus;
  confidence_score?: number;
  device_id?: string;
  door_id?: string;
  timestamp: string;
  metadata?: Record<string, any>;
  created_at: string;
}

export interface FaceEnrollment {
  face_id: string;
  member_id: string;
  encoding: number[];
  quality_score: number;
  enrolled_at: string;
}

export interface RFIDCard {
  rfid_card_id: string;
  company_id: string;
  member_id?: string;
  card_number: string;
  card_type: RFIDCardType;
  status: RFIDCardStatus;
  issued_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface QRCode {
  qr_code_id: string;
  code: string;
  qr_image_url: string;
  expires_at?: string;
  created_at: string;
}

export interface QRCodeGenerateRequest {
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  expires_in?: number; // minutes
  access_level?: string;
}

// ============================================================================
// Visitor & Guest
// ============================================================================

export interface Visitor {
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
  status: VisitorStatus;
  badge_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Guest {
  guest_id: string;
  company_id: string;
  event_id?: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
  registration_type: RegistrationType;
  status: GuestStatus;
  check_in_time?: string;
  check_out_time?: string;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Event
// ============================================================================

export interface Event {
  event_id: string;
  company_id: string;
  event_name: string;
  event_description?: string;
  event_type: EventType;
  start_date: string; // ISO 8601 datetime
  end_date: string; // ISO 8601 datetime
  location?: string;
  max_attendees?: number;
  current_attendees: number;
  status: EventStatus;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Vehicle & Parking
// ============================================================================

export interface Vehicle {
  vehicle_id: string;
  company_id: string;
  member_id?: string;
  license_plate: string;
  vehicle_type: VehicleType;
  brand?: string;
  model?: string;
  color?: string;
  status: VehicleStatus;
  registered_at?: string;
  created_at: string;
  updated_at: string;
}

export interface ParkingRecord {
  parking_id: string;
  company_id: string;
  vehicle_id: string;
  parking_slot?: string;
  entry_time: string;
  exit_time?: string;
  duration_minutes?: number;
  fee?: number;
  status: ParkingStatus;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// AI & Analytics
// ============================================================================

export interface AIService {
  service_id: string;
  service_name: string;
  service_type: 'FACE_RECOGNITION' | 'OBJECT_DETECTION' | 'ANALYTICS' | 'ANOMALY_DETECTION';
  status: 'ACTIVE' | 'INACTIVE';
  endpoint?: string;
  api_key?: string;
  created_at: string;
}

export interface AnalyticsMetric {
  metric_id: string;
  metric_type: string;
  value: number;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface AnalyticsResponse {
  metrics: AnalyticsMetric[];
  summary: {
    total_visitors: number;
    total_employees: number;
    total_verifications: number;
    [key: string]: any;
  };
}

// ============================================================================
// Dashboard & Monitoring
// ============================================================================

export interface DashboardStatistics {
  total_employees: number;
  total_visitors: number;
  total_devices: number;
  active_verifications: number;
}

export interface Activity {
  activity_id: string;
  activity_type: string;
  description: string;
  user_id?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface Alert {
  alert_id: string;
  alert_type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  message: string;
  is_resolved: boolean;
  created_at: string;
  resolved_at?: string;
}

export interface DashboardResponse {
  statistics: DashboardStatistics;
  recent_activities: Activity[];
  alerts: Alert[];
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'down';
  services: {
    database: 'up' | 'down';
    cache: 'up' | 'down';
    storage: 'up' | 'down';
  };
  timestamp: string;
}

// ============================================================================
// Notifications
// ============================================================================

export interface Notification {
  notification_id: string;
  member_id: string;
  title: string;
  message: string;
  notification_type: NotificationType;
  is_read: boolean;
  read_at?: string;
  created_at: string;
}

// ============================================================================
// Company Location
// ============================================================================

export interface CompanyLocation {
  location_id: string;
  company_id: string;
  location_name: string;
  address: string;
  latitude: number;
  longitude: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Utility Types
// ============================================================================

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

