/**
 * IVAP Guest Service
 * Service สำหรับจัดการข้อมูล Guest
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Guest,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapGuestService extends BaseApiService<Guest> {
  protected baseUrl = `${environment.apiEndpoints.guests}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all guests (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Guest>> {
    return this.apiService.get<PaginatedResponse<Guest>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Guest>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Guest>);
      })
    );
  }

  /**
   * Check in guest
   */
  checkIn(guestId: string): Observable<Guest> {
    return this.apiService.post<Guest>(`${this.baseUrl}/${guestId}/check-in`, {}).pipe(
      map((response: ApiResponse<Guest>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to check in guest');
      })
    );
  }

  /**
   * Check out guest
   */
  checkOut(guestId: string): Observable<Guest> {
    return this.apiService.post<Guest>(`${this.baseUrl}/${guestId}/check-out`, {}).pipe(
      map((response: ApiResponse<Guest>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to check out guest');
      })
    );
  }
}

