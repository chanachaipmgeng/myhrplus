/**
 * IVAP Timestamp Service
 * Service สำหรับจัดการข้อมูล Time & Attendance (Timestamp)
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  EmployeeTimestamp,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapTimestampService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.timestamps);
  }

  /**
   * Get all timestamps (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<EmployeeTimestamp>> {
    return this.getPaginated<EmployeeTimestamp>('', params);
  }
}
