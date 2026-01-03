/**
 * IVAP Vehicle Service
 * Service สำหรับจัดการข้อมูล Vehicle
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Vehicle,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapVehicleService extends BaseApiService<Vehicle> {
  protected baseUrl = `${environment.apiEndpoints.vehicles}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all vehicles (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Vehicle>> {
    return this.apiService.get<PaginatedResponse<Vehicle>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Vehicle>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Vehicle>);
      })
    );
  }
}

