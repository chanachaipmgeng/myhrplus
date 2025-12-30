import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export interface LeaveRequest {
  leaveType: string;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  days?: number;
  hours?: number;
  reason: string;
  attachments?: File[];
}

export interface TimeEditRequest {
  date: string;
  originalCheckIn?: string;
  originalCheckOut?: string;
  newCheckIn: string;
  newCheckOut: string;
  reason: string;
  attachments?: File[];
}

export interface ShiftChangeRequest {
  originalDate: string;
  originalShift: string;
  newDate: string;
  newShift: string;
  reason: string;
  attachments?: File[];
}

export interface ExchangeShiftRequest {
  myDate: string;
  myShift: string;
  exchangeWithEmployeeId: string;
  exchangeDate: string;
  exchangeShift: string;
  reason: string;
  attachments?: File[];
}

export interface OvertimeRequest {
  dates: OvertimeDate[];
  reason: string;
  attachments?: File[];
}

export interface OvertimeDate {
  date: string;
  startTime: string;
  endTime: string;
  hours: number;
  type?: string; // normal, holiday, special
}

export interface LeaveType {
  leaveTypeId: string;
  leaveTypeName: string;
  balance: number;
  unit: string;
  requiresApproval: boolean;
}

export interface Shift {
  shiftId: string;
  shiftName: string;
  startTime: string;
  endTime: string;
  breakTime?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaService {

  constructor(private apiService: ApiService) { }

  // Leave Management
  getLeaveTypes(): Observable<any> {
    return this.apiService.get<LeaveType[]>(
      `${environment.apiEndpoints.timeAttendance}/leave/types`,
      null,
      true,
      'leave_types'
    );
  }

  requestLeave(leaveRequest: LeaveRequest): Observable<any> {
    const formData = this.buildFormData(leaveRequest);
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow`,
      formData
    );
  }

  // Time Edit
  requestTimeEdit(timeEditRequest: TimeEditRequest): Observable<any> {
    const formData = this.buildFormData(timeEditRequest);
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow`,
      formData
    );
  }

  // Shift Change
  requestShiftChange(shiftChangeRequest: ShiftChangeRequest): Observable<any> {
    const formData = this.buildFormData(shiftChangeRequest);
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow`,
      formData
    );
  }

  // Exchange Shift
  requestExchangeShift(exchangeShiftRequest: ExchangeShiftRequest): Observable<any> {
    const formData = this.buildFormData(exchangeShiftRequest);
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow`,
      formData
    );
  }

  // Overtime
  requestOvertime(overtimeRequest: OvertimeRequest): Observable<any> {
    const formData = this.buildFormData(overtimeRequest);
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow`,
      formData
    );
  }

  // Shifts
  getShifts(): Observable<any> {
    return this.apiService.get<Shift[]>(
      `${environment.apiEndpoints.timeAttendance}/shifts`,
      null,
      true,
      'shifts'
    );
  }

  // Manager Functions
  getPendingApprovals(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.workflow}/workflow/inbox`,
      params
    );
  }

  approveRequest(requestId: string, comment?: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow/approve`,
      { requestId, comment }
    );
  }

  rejectRequest(requestId: string, comment: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow/disapprove`,
      { requestId, comment }
    );
  }

  returnRequest(requestId: string, comment: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.workflow}/workflow/return`,
      { requestId, comment }
    );
  }

  // Reports
  getLeaveReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.timeAttendance}/reports/leave`,
      params
    );
  }

  getOvertimeReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.timeAttendance}/reports/overtime`,
      params
    );
  }

  getAttendanceReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.timeAttendance}/reports/attendance`,
      params
    );
  }

  // Helper method to build FormData
  private buildFormData(data: any): FormData {
    const formData = new FormData();
    
    Object.keys(data).forEach(key => {
      if (key === 'attachments' && data[key]) {
        // Handle file attachments
        data[key].forEach((file: File, index: number) => {
          formData.append(`attachment_${index}`, file);
        });
      } else if (key === 'dates' && Array.isArray(data[key])) {
        // Handle array of dates (for overtime)
        formData.append(key, JSON.stringify(data[key]));
      } else if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });

    return formData;
  }
}

