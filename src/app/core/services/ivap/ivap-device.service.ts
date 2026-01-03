/**
 * IVAP Device Service
 * Service สำหรับจัดการข้อมูล Device
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Device,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapDeviceService extends BaseApiService<Device> {
  protected baseUrl = `${environment.apiEndpoints.devices}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all devices (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Device>> {
    return this.apiService.get<PaginatedResponse<Device>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Device>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Device>);
      })
    );
  }
}

