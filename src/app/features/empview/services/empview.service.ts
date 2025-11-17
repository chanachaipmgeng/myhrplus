import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export interface EmployeeProfile {
  employeeId: string;
  name: string;
  email?: string;
  phone?: string;
  position?: string;
  department?: string;
  division?: string;
  joinDate?: string;
  picture?: string;
}

export interface LeaveBalance {
  leaveType: string;
  leaveTypeName: string;
  balance: number;
  used: number;
  total: number;
  unit: string;
}

export interface Payslip {
  periodMonth: number;
  periodYear: number;
  paymentDate: string;
  grossSalary: number;
  netSalary: number;
  deductions: number;
  allowances: number;
  pdfUrl?: string;
}

export interface TimeAttendance {
  date: string;
  checkIn?: string;
  checkOut?: string;
  workingHours?: number;
  status: string;
  shift?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpviewService {

  constructor(private apiService: ApiService) { }

  getEmployeeProfile(): Observable<any> {
    return this.apiService.get<EmployeeProfile>(
      `${environment.apiEndpoints.employeeView}/employee/profile`,
      null,
      true,
      'employee_profile'
    );
  }

  getLeaveBalance(): Observable<any> {
    return this.apiService.get<LeaveBalance[]>(
      `${environment.apiEndpoints.timeAttendance}/leave/balance`,
      null,
      true,
      'leave_balance'
    );
  }

  getLeaveHistory(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.timeAttendance}/leave/history`,
      params
    );
  }

  getPayslips(params?: any): Observable<any> {
    return this.apiService.get<Payslip[]>(
      `${environment.apiEndpoints.payroll}/payslip`,
      params
    );
  }

  getPayslip(periodMonth: number, periodYear: number): Observable<any> {
    return this.apiService.get<Payslip>(
      `${environment.apiEndpoints.payroll}/payslip/${periodYear}/${periodMonth}`
    );
  }

  downloadPayslip(periodMonth: number, periodYear: number): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.payroll}/payslip/${periodYear}/${periodMonth}/download`
    );
  }

  getTimeAttendance(params?: any): Observable<any> {
    return this.apiService.get<TimeAttendance[]>(
      `${environment.apiEndpoints.timeAttendance}/time/attendance`,
      params
    );
  }

  getShiftSchedule(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.timeAttendance}/time/shift`,
      params
    );
  }

  getDashboardData(): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.employeeView}/dashboard`,
      null,
      true,
      'dashboard_data'
    );
  }

  getNotifications(): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.employeeView}/notifications`
    );
  }
}

