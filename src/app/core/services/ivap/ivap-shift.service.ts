/**
 * IVAP Shift Service
 * Service สำหรับจัดการข้อมูล Shift
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  Shift,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapShiftService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.shifts);
  }

  /**
   * Get all shifts (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Shift>> {
    return this.getPaginated<Shift>('', params);
  }
}
