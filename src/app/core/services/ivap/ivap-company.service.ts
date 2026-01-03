/**
 * IVAP Company Service
 * Service สำหรับจัดการข้อมูล Company/Organization
 */

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ApiService, ApiResponse } from '../api.service';
import { environment } from '@env/environment';
import {
  Company,
  CompanyBase,
  CompanyUpdate,
  CompanySettings,
  CompanySettingsUpdate,
  CompanyStatistics,
  PaginatedResponse,
  QueryParams
} from '@core/models/ivap';

@Injectable({
  providedIn: 'root'
})
export class IvapCompanyService extends BaseApiService<Company> {
  protected baseUrl = `${environment.apiEndpoints.companies}`;

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Get all companies (paginated)
   */
  getAllPaginated(params?: QueryParams): Observable<PaginatedResponse<Company>> {
    return this.apiService.get<PaginatedResponse<Company>>(this.baseUrl, params).pipe(
      map((response: ApiResponse<PaginatedResponse<Company>>) => {
        if (response.success && response.data) {
          return response.data;
        }
        // Fallback if response is direct PaginatedResponse
        return (response as unknown as PaginatedResponse<Company>);
      })
    );
  }

  /**
   * Create new company
   */
  createCompany(data: CompanyBase): Observable<Company> {
    return this.apiService.postData<Company>(this.baseUrl, data);
  }

  /**
   * Update company
   */
  updateCompany(companyId: string, data: CompanyUpdate): Observable<Company> {
    return this.apiService.put<Company>(`${this.baseUrl}/${companyId}`, data).pipe(
      map((response: ApiResponse<Company>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to update company');
      })
    );
  }

  /**
   * Get company statistics
   */
  getStatistics(): Observable<CompanyStatistics> {
    return this.apiService.getData<CompanyStatistics>(`${this.baseUrl}/statistics`);
  }

  /**
   * Get company settings
   */
  getSettings(companyId: string): Observable<CompanySettings> {
    return this.apiService.getData<CompanySettings>(`${this.baseUrl}/${companyId}/settings`);
  }

  /**
   * Update company settings
   */
  updateSettings(companyId: string, data: CompanySettingsUpdate): Observable<CompanySettings> {
    return this.apiService.put<CompanySettings>(`${this.baseUrl}/${companyId}/settings`, data).pipe(
      map((response: ApiResponse<CompanySettings>) => {
        if (response.success && response.data) {
          return response.data;
        }
        throw new Error(response.message || 'Failed to update settings');
      })
    );
  }

  /**
   * Activate company
   */
  activate(companyId: string): Observable<void> {
    return this.apiService.post<void>(`${this.baseUrl}/${companyId}/activate`, {}).pipe(
      map((response: ApiResponse<void>) => {
        if (response.success) {
          return;
        }
        throw new Error(response.message || 'Failed to activate company');
      })
    );
  }

  /**
   * Deactivate company
   */
  deactivate(companyId: string): Observable<void> {
    return this.apiService.post<void>(`${this.baseUrl}/${companyId}/deactivate`, {}).pipe(
      map((response: ApiResponse<void>) => {
        if (response.success) {
          return;
        }
        throw new Error(response.message || 'Failed to deactivate company');
      })
    );
  }

  /**
   * Suspend company
   */
  suspend(companyId: string, reason: string): Observable<void> {
    return this.apiService.post<void>(`${this.baseUrl}/${companyId}/suspend`, { reason }).pipe(
      map((response: ApiResponse<void>) => {
        if (response.success) {
          return;
        }
        throw new Error(response.message || 'Failed to suspend company');
      })
    );
  }

  /**
   * Export companies to CSV
   */
  export(params?: QueryParams): Observable<Blob> {
    return this.apiService.downloadFile(`${this.baseUrl}/export`, params);
  }
}

