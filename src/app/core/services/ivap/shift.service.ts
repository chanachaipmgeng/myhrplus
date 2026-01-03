/**
 * Shift Service สำหรับ IVAP Service API
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import {
  Shift,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapShiftService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, '/shifts');
  }

  /**
   * Get all shifts (paginated)
   */
  getAll(params?: QueryParams): Observable<PaginatedResponse<Shift>> {
    return this.getPaginated<Shift>('', params);
  }

  /**
   * Get shift by ID
   */
  getById(shiftId: string): Observable<Shift> {
    return this.get<Shift>(`/${shiftId}`);
  }

  /**
   * Create shift
   */
  create(data: Partial<Shift>): Observable<Shift> {
    return this.post<Shift>('', data);
  }

  /**
   * Update shift
   */
  update(shiftId: string, data: Partial<Shift>): Observable<Shift> {
    return this.put<Shift>(`/${shiftId}`, data);
  }

  /**
   * Delete shift
   */
  delete(shiftId: string): Observable<void> {
    return this.delete(`/${shiftId}`);
  }
}

