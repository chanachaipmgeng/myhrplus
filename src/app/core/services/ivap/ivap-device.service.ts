/**
 * IVAP Device Service
 * Service สำหรับจัดการข้อมูล Device
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  Device,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapDeviceService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.devices);
  }

  /**
   * Get all devices (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Device>> {
    return this.getPaginated<Device>('', params);
  }
}
