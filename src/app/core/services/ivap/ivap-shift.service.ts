/**
 * IVAP Shift Service
 * Service สำหรับจัดการข้อมูล Shift
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Shift,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapShiftService extends BaseApiService<Shift> {
  protected baseUrl = `${environment.apiEndpoints.shifts}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all shifts (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Shift>> {
    return this.apiService.get<PaginatedResponse<Shift>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Shift>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Shift>);
      })
    );
  }
}

