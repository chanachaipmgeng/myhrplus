/**
 * IVAP Door Service
 * Service สำหรับจัดการข้อมูล Door
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Door,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapDoorService extends BaseApiService<Door> {
  protected baseUrl = `${environment.apiEndpoints.doors}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all doors (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Door>> {
    return this.apiService.get<PaginatedResponse<Door>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Door>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Door>);
      })
    );
  }
}

