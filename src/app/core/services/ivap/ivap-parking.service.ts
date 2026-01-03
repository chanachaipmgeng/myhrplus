/**
 * IVAP Parking Service
 * Service สำหรับจัดการข้อมูล Parking
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  ParkingRecord,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapParkingService extends BaseApiService<ParkingRecord> {
  protected baseUrl = `${environment.apiEndpoints.parking}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all parking records (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<ParkingRecord>> {
    return this.apiService.get<PaginatedResponse<ParkingRecord>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<ParkingRecord>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<ParkingRecord>);
      })
    );
  }

  /**
   * Exit parking (check out)
   */
  exit(parkingId: string): Observable<ParkingRecord> {
    return this.apiService.post<ParkingRecord>(`${this.baseUrl}/${parkingId}/exit`, {}).pipe(
      map((response: ApiResponse<ParkingRecord>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to exit parking');
      })
    );
  }
}

