/**
 * IVAP Door Service
 * Service สำหรับจัดการข้อมูล Door
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  Door,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapDoorService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.doors);
  }

  /**
   * Get all doors (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Door>> {
    return this.getPaginated<Door>('', params);
  }
}
