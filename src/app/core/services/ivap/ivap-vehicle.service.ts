/**
 * IVAP Vehicle Service
 * Service สำหรับจัดการข้อมูล Vehicle
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  Vehicle,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapVehicleService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.vehicles);
  }

  /**
   * Get all vehicles (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Vehicle>> {
    return this.getPaginated<Vehicle>('', params);
  }
}
