/**
 * IVAP Event Service
 * Service สำหรับจัดการข้อมูล Event
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  Event,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapEventService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.events);
  }

  /**
   * Get all events (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Event>> {
    return this.getPaginated<Event>('', params);
  }
}
