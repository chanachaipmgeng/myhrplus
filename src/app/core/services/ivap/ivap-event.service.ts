/**
 * IVAP Event Service
 * Service สำหรับจัดการข้อมูล Event
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Event,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapEventService extends BaseApiService<Event> {
  protected baseUrl = `${environment.apiEndpoints.events}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all events (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Event>> {
    return this.apiService.get<PaginatedResponse<Event>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Event>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        return (response as unknown as PaginatedResponse<Event>);
      })
    );
  }
}

