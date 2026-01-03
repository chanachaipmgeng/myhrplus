/**
 * IVAP Leave Service
 * Service สำหรับจัดการข้อมูล Leave Request
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  LeaveRequest,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapLeaveService extends BaseApiService<LeaveRequest> {
  protected baseUrl = `${environment.apiEndpoints.leaves}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all leave requests (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<LeaveRequest>> {
    return this.apiService.get<PaginatedResponse<LeaveRequest>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<LeaveRequest>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<LeaveRequest>);
      })
    );
  }

  /**
   * Approve leave request
   */
  approve(leaveId: string): Observable<LeaveRequest> {
    return this.apiService.post<LeaveRequest>(`${this.baseUrl}/${leaveId}/approve`, {}).pipe(
      map((response: ApiResponse<LeaveRequest>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to approve leave request');
      })
    );
  }

  /**
   * Reject leave request
   */
  reject(leaveId: string, reason?: string): Observable<LeaveRequest> {
    return this.apiService.post<LeaveRequest>(`${this.baseUrl}/${leaveId}/reject`, { reason }).pipe(
      map((response: ApiResponse<LeaveRequest>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to reject leave request');
      })
    );
  }

  /**
   * Cancel leave request
   */
  cancel(leaveId: string): Observable<LeaveRequest> {
    return this.apiService.post<LeaveRequest>(`${this.baseUrl}/${leaveId}/cancel`, {}).pipe(
      map((response: ApiResponse<LeaveRequest>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to cancel leave request');
      })
    );
  }
}

