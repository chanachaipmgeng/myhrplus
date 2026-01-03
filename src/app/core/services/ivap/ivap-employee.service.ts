/**
 * IVAP Employee Service
 * Service สำหรับจัดการข้อมูล Employee
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  CompanyEmployee,
  CompanyEmployeePost,
  CompanyEmployeeUpdate,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapEmployeeService extends BaseApiService<CompanyEmployee> {
  protected baseUrl = `${environment.apiEndpoints.employees}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all employees (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>> {
    return this.apiService.get<PaginatedResponse<CompanyEmployee>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<CompanyEmployee>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<CompanyEmployee>);
      })
    );
  }

  /**
   * Create new employee
   */
  createEmployee(data: CompanyEmployeePost): Observable<CompanyEmployee> {
    return this.apiService.postData<CompanyEmployee>(this.baseUrl, data);
  }

  /**
   * Update employee
   */
  updateEmployee(employeeId: string, data: CompanyEmployeeUpdate): Observable<CompanyEmployee> {
    return this.apiService.put<CompanyEmployee>(`${this.baseUrl}/${employeeId}`, data).pipe(
      map((response: ApiResponse<CompanyEmployee>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to update employee');
      })
    );
  }

  /**
   * Get employee subordinates
   */
  getSubordinates(employeeId: string, params?: QueryParams): Observable<PaginatedResponse<CompanyEmployee>> {
    return this.apiService.get<PaginatedResponse<CompanyEmployee>>(
      `${this.baseUrl}/${employeeId}/subordinates`,
      params
    ).pipe(
      map((response: ApiResponse<PaginatedResponse<CompanyEmployee>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<CompanyEmployee>);
      })
    );
  }
}

