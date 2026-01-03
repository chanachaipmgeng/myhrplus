/**
 * IVAP Timestamp Service
 * Service สำหรับจัดการข้อมูล Time & Attendance (Timestamp)
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  EmployeeTimestamp,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapTimestampService extends BaseApiService<EmployeeTimestamp> {
  protected baseUrl = `${environment.apiEndpoints.timestamps}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all timestamps (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<EmployeeTimestamp>> {
    return this.apiService.get<PaginatedResponse<EmployeeTimestamp>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<EmployeeTimestamp>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<EmployeeTimestamp>);
      })
    );
  }
}

