/**
 * IVAP Visitor Service
 * Service สำหรับจัดการข้อมูล Visitor
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Visitor,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapVisitorService extends BaseApiService<Visitor> {
  protected baseUrl = `${environment.apiEndpoints.visitors}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all visitors (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Visitor>> {
    return this.apiService.get<PaginatedResponse<Visitor>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Visitor>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Visitor>);
      })
    );
  }

  /**
   * Check in visitor
   */
  checkIn(visitorId: string): Observable<Visitor> {
    return this.apiService.post<Visitor>(`${this.baseUrl}/${visitorId}/check-in`, {}).pipe(
      map((response: ApiResponse<Visitor>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to check in visitor');
      })
    );
  }

  /**
   * Check out visitor
   */
  checkOut(visitorId: string): Observable<Visitor> {
    return this.apiService.post<Visitor>(`${this.baseUrl}/${visitorId}/check-out`, {}).pipe(
      map((response: ApiResponse<Visitor>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to check out visitor');
      })
    );
  }
}

