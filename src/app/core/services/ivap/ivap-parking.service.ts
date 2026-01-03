/**
 * IVAP Parking Service
 * Service สำหรับจัดการข้อมูล Parking
 * Updated to use new BaseApiService
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { environment } from '@env/environment';
import {
  ParkingRecord,
  PaginatedResponse,
  QueryParams
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class IvapParkingService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apiEndpoints.parking);
  }

  /**
   * Get all parking records (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<ParkingRecord>> {
    return this.getPaginated<ParkingRecord>('', params);
  }

  /**
   * Exit parking (check out)
   */
  exit(parkingId: string): Observable<ParkingRecord> {
    return this.post<ParkingRecord>(`/${parkingId}/exit`, {});
  }
}
