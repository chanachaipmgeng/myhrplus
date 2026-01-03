/**
 * Angular Service Examples สำหรับ IVAP Service API
 * 
 * Usage:
 * import { AuthService, CompanyService, EmployeeService } from './angular-services-examples';
 * 
 * ใน app.module.ts หรือ standalone component:
 * import { HttpClientModule } from '@angular/common/http';
 * 
 * providers: [HttpClientModule]
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './angular-base-service';
import {
  LoginRequest,
  RegisterRequest,
  Token,
  Member,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  Company,
  CompanyBase,
  CompanyUpdate,
  CompanySettings,
  CompanySettingsUpdate,
  CompanyStatistics,
  CompanyEmployee,
  CompanyEmployeePost,
  CompanyEmployeeUpdate,
  PaginatedResponse,
  QueryParams,
  EmployeeTimestamp,
  Shift,
  LeaveRequest,
  Device,
  Door,
  Visitor,
  Guest,
  Event,
  Vehicle,
  ParkingRecord
} from './angular-models';
import { HttpClient } from '@angular/common/http';

// ============================================================================
// Authentication Service
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/auth');
  }

  /**
   * Login user
   */
  login(credentials: LoginRequest): Observable<Token> {
    return this.post<Token>('/login', credentials).pipe(
      // Auto-save token on successful login
      // map(token => {
      //   this.setToken(token.access_token);
      //   return token;
      // })
    );
  }

  /**
   * Register new user
   */
  register(data: RegisterRequest): Observable<Member> {
    return this.post<Member>('/register', data);
  }

  /**
   * Get current user info
   */
  getCurrentUser(): Observable<Member> {
    return this.get<Member>('/me');
  }

  /**
   * Request password reset
   */
  forgotPassword(data: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
    return this.post<ForgotPasswordResponse>('/forgot-password', data);
  }

  /**
   * Reset password with token
   */
  resetPassword(data: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.post<ResetPasswordResponse>('/reset-password', data);
  }

  /**
   * Logout (clear token)
   */
  logout(): void {
    this.removeToken();
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

// ============================================================================
// Company Service
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/companies');
  }

  /**
   * Get all companies (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Company>> {
    return this.getPaginated<Company>('', params);
  }

  /**
   * Get company by ID
   */
  getById(companyId: string): Observable<Company> {
    return this.get<Company>(`/${companyId}`);
  }

  /**
   * Create new company
   */
  create(data: CompanyBase): Observable<Company> {
    return this.post<Company>('', data);
  }

  /**
   * Update company
   */
  update(companyId: string, data: CompanyUpdate): Observable<Company> {
    return this.put<Company>(`/${companyId}`, data);
  }

  /**
   * Delete company
   */
  delete(companyId: string): Observable<void> {
    return this.delete(`/${companyId}`);
  }

  /**
   * Get company statistics
   */
  getStatistics(): Observable<CompanyStatistics> {
    return this.get<CompanyStatistics>('/stats');
  }

  /**
   * Get company settings
   */
  getSettings(companyId: string): Observable<CompanySettings> {
    return this.get<CompanySettings>(`/${companyId}/settings`);
  }

  /**
   * Update company settings
   */
  updateSettings(companyId: string, data: CompanySettingsUpdate): Observable<CompanySettings> {
    return this.put<CompanySettings>(`/${companyId}/settings`, data);
  }

  /**
   * Activate company
   */
  activate(companyId: string): Observable<any> {
    return this.post(`/${companyId}/activate`, {});
  }

  /**
   * Deactivate company
   */
  deactivate(companyId: string): Observable<any> {
    return this.post(`/${companyId}/deactivate`, {});
  }

  /**
   * Suspend company
   */
  suspend(companyId: string, reason: string): Observable<any> {
    return this.post(`/${companyId}/suspend`, { reason });
  }

  /**
   * Export companies to CSV
   */
  export(params?: QueryParams): Observable<Blob> {
    return this.downloadFile('/export', params);
  }
}

// ============================================================================
// Employee Service
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/employees');
  }

  /**
   * Get all employees (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>> {
    return this.getPaginated<CompanyEmployee>('', params);
  }

  /**
   * Get employee by ID
   */
  getById(employeeId: string): Observable<CompanyEmployee> {
    return this.get<CompanyEmployee>(`/${employeeId}`);
  }

  /**
   * Create new employee
   */
  create(data: CompanyEmployeePost): Observable<CompanyEmployee> {
    return this.post<CompanyEmployee>('', data);
  }

  /**
   * Update employee
   */
  update(employeeId: string, data: CompanyEmployeeUpdate): Observable<CompanyEmployee> {
    // Ensure company_employee_id matches path parameter
    data.company_employee_id = employeeId as any;
    return this.put<CompanyEmployee>(`/${employeeId}`, data);
  }

  /**
   * Delete employee
   */
  delete(employeeId: string): Observable<void> {
    return this.delete(`/${employeeId}`);
  }

  /**
   * Get employee subordinates
   */
  getSubordinates(employeeId: string, params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>> {
    return this.getPaginated<CompanyEmployee>(`/${employeeId}/subordinates`, params);
  }
}

// ============================================================================
// Time & Attendance Services
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class TimestampService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/timestamps');
  }

  /**
   * Get all timestamps (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<EmployeeTimestamp>> {
    return this.getPaginated<EmployeeTimestamp>('', params);
  }

  /**
   * Get timestamp by ID
   */
  getById(timestampId: string): Observable<EmployeeTimestamp> {
    return this.get<EmployeeTimestamp>(`/${timestampId}`);
  }

  /**
   * Create timestamp (check-in/check-out)
   */
  create(data: Partial<EmployeeTimestamp>): Observable<EmployeeTimestamp> {
    return this.post<EmployeeTimestamp>('', data);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShiftService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/shifts');
  }

  /**
   * Get all shifts (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Shift>> {
    return this.getPaginated<Shift>('', params);
  }

  /**
   * Get shift by ID
   */
  getById(shiftId: string): Observable<Shift> {
    return this.get<Shift>(`/${shiftId}`);
  }

  /**
   * Create shift
   */
  create(data: Partial<Shift>): Observable<Shift> {
    return this.post<Shift>('', data);
  }

  /**
   * Update shift
   */
  update(shiftId: string, data: Partial<Shift>): Observable<Shift> {
    return this.put<Shift>(`/${shiftId}`, data);
  }

  /**
   * Delete shift
   */
  delete(shiftId: string): Observable<void> {
    return this.delete(`/${shiftId}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LeaveService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/leaves');
  }

  /**
   * Get all leave requests (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<LeaveRequest>> {
    return this.getPaginated<LeaveRequest>('', params);
  }

  /**
   * Get leave request by ID
   */
  getById(leaveId: string): Observable<LeaveRequest> {
    return this.get<LeaveRequest>(`/${leaveId}`);
  }

  /**
   * Create leave request
   */
  create(data: Partial<LeaveRequest>): Observable<LeaveRequest> {
    return this.post<LeaveRequest>('', data);
  }

  /**
   * Update leave request
   */
  update(leaveId: string, data: Partial<LeaveRequest>): Observable<LeaveRequest> {
    return this.put<LeaveRequest>(`/${leaveId}`, data);
  }

  /**
   * Approve leave request
   */
  approve(leaveId: string): Observable<LeaveRequest> {
    return this.post<LeaveRequest>(`/${leaveId}/approve`, {});
  }

  /**
   * Reject leave request
   */
  reject(leaveId: string, reason?: string): Observable<LeaveRequest> {
    return this.post<LeaveRequest>(`/${leaveId}/reject`, { reason });
  }

  /**
   * Cancel leave request
   */
  cancel(leaveId: string): Observable<LeaveRequest> {
    return this.post<LeaveRequest>(`/${leaveId}/cancel`, {});
  }
}

// ============================================================================
// Device & Door Services
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/devices');
  }

  /**
   * Get all devices (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Device>> {
    return this.getPaginated<Device>('', params);
  }

  /**
   * Get device by ID
   */
  getById(deviceId: string): Observable<Device> {
    return this.get<Device>(`/${deviceId}`);
  }

  /**
   * Create device
   */
  create(data: Partial<Device>): Observable<Device> {
    return this.post<Device>('', data);
  }

  /**
   * Update device
   */
  update(deviceId: string, data: Partial<Device>): Observable<Device> {
    return this.put<Device>(`/${deviceId}`, data);
  }

  /**
   * Delete device
   */
  delete(deviceId: string): Observable<void> {
    return this.delete(`/${deviceId}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DoorService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/doors');
  }

  /**
   * Get all doors (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Door>> {
    return this.getPaginated<Door>('', params);
  }

  /**
   * Get door by ID
   */
  getById(doorId: string): Observable<Door> {
    return this.get<Door>(`/${doorId}`);
  }

  /**
   * Create door
   */
  create(data: Partial<Door>): Observable<Door> {
    return this.post<Door>('', data);
  }

  /**
   * Update door
   */
  update(doorId: string, data: Partial<Door>): Observable<Door> {
    return this.put<Door>(`/${doorId}`, data);
  }

  /**
   * Delete door
   */
  delete(doorId: string): Observable<void> {
    return this.delete(`/${doorId}`);
  }
}

// ============================================================================
// Visitor & Guest Services
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class VisitorService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/visitors');
  }

  /**
   * Get all visitors (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Visitor>> {
    return this.getPaginated<Visitor>('', params);
  }

  /**
   * Get visitor by ID
   */
  getById(visitorId: string): Observable<Visitor> {
    return this.get<Visitor>(`/${visitorId}`);
  }

  /**
   * Create visitor
   */
  create(data: Partial<Visitor>): Observable<Visitor> {
    return this.post<Visitor>('', data);
  }

  /**
   * Update visitor
   */
  update(visitorId: string, data: Partial<Visitor>): Observable<Visitor> {
    return this.put<Visitor>(`/${visitorId}`, data);
  }

  /**
   * Check in visitor
   */
  checkIn(visitorId: string): Observable<Visitor> {
    return this.post<Visitor>(`/${visitorId}/check-in`, {});
  }

  /**
   * Check out visitor
   */
  checkOut(visitorId: string): Observable<Visitor> {
    return this.post<Visitor>(`/${visitorId}/check-out`, {});
  }
}

@Injectable({
  providedIn: 'root'
})
export class GuestService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/guests');
  }

  /**
   * Get all guests (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Guest>> {
    return this.getPaginated<Guest>('', params);
  }

  /**
   * Get guest by ID
   */
  getById(guestId: string): Observable<Guest> {
    return this.get<Guest>(`/${guestId}`);
  }

  /**
   * Create guest
   */
  create(data: Partial<Guest>): Observable<Guest> {
    return this.post<Guest>('', data);
  }

  /**
   * Update guest
   */
  update(guestId: string, data: Partial<Guest>): Observable<Guest> {
    return this.put<Guest>(`/${guestId}`, data);
  }

  /**
   * Check in guest
   */
  checkIn(guestId: string): Observable<Guest> {
    return this.post<Guest>(`/${guestId}/check-in`, {});
  }

  /**
   * Check out guest
   */
  checkOut(guestId: string): Observable<Guest> {
    return this.post<Guest>(`/${guestId}/check-out`, {});
  }
}

// ============================================================================
// Event Service
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/events');
  }

  /**
   * Get all events (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Event>> {
    return this.getPaginated<Event>('', params);
  }

  /**
   * Get event by ID
   */
  getById(eventId: string): Observable<Event> {
    return this.get<Event>(`/${eventId}`);
  }

  /**
   * Create event
   */
  create(data: Partial<Event>): Observable<Event> {
    return this.post<Event>('', data);
  }

  /**
   * Update event
   */
  update(eventId: string, data: Partial<Event>): Observable<Event> {
    return this.put<Event>(`/${eventId}`, data);
  }

  /**
   * Delete event
   */
  delete(eventId: string): Observable<void> {
    return this.delete(`/${eventId}`);
  }
}

// ============================================================================
// Vehicle & Parking Services
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/vehicles');
  }

  /**
   * Get all vehicles (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Vehicle>> {
    return this.getPaginated<Vehicle>('', params);
  }

  /**
   * Get vehicle by ID
   */
  getById(vehicleId: string): Observable<Vehicle> {
    return this.get<Vehicle>(`/${vehicleId}`);
  }

  /**
   * Create vehicle
   */
  create(data: Partial<Vehicle>): Observable<Vehicle> {
    return this.post<Vehicle>('', data);
  }

  /**
   * Update vehicle
   */
  update(vehicleId: string, data: Partial<Vehicle>): Observable<Vehicle> {
    return this.put<Vehicle>(`/${vehicleId}`, data);
  }

  /**
   * Delete vehicle
   */
  delete(vehicleId: string): Observable<void> {
    return this.delete(`/${vehicleId}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ParkingService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/parking');
  }

  /**
   * Get all parking records (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<ParkingRecord>> {
    return this.getPaginated<ParkingRecord>('', params);
  }

  /**
   * Get parking record by ID
   */
  getById(parkingId: string): Observable<ParkingRecord> {
    return this.get<ParkingRecord>(`/${parkingId}`);
  }

  /**
   * Create parking record
   */
  create(data: Partial<ParkingRecord>): Observable<ParkingRecord> {
    return this.post<ParkingRecord>('', data);
  }

  /**
   * Update parking record
   */
  update(parkingId: string, data: Partial<ParkingRecord>): Observable<ParkingRecord> {
    return this.put<ParkingRecord>(`/${parkingId}`, data);
  }

  /**
   * Exit parking (check out)
   */
  exit(parkingId: string): Observable<ParkingRecord> {
    return this.post<ParkingRecord>(`/${parkingId}/exit`, {});
  }
}

