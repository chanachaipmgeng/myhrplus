/**
 * Base API Service สำหรับ IVAP Service API
 *
 * Usage:
 * import { BaseApiService } from '@core/services/base-api.service';
 *
 * export class CompanyService extends BaseApiService {
 *   constructor(http: HttpClient) {
 *     super(http, '/companies');
 *   }
 * }
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import {
  PaginatedResponse,
  QueryParams,
  ErrorResponse
} from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected baseUrl: string = environment.baseUrl;
  protected apiVersion: string = environment.apiVersion;
  protected endpoint: string = '';

  constructor(
    protected http: HttpClient
  ) {}

  /**
   * Get full API URL
   */
  protected getUrl(path: string = ''): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.baseUrl}${this.apiVersion}${this.endpoint}${cleanPath}`;
  }

  /**
   * Get default headers with authentication
   */
  protected getHeaders(includeAuth: boolean = true): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (includeAuth) {
      const token = this.getToken();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return headers;
  }

  /**
   * Get JWT token from localStorage
   */
  protected getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  /**
   * Set JWT token to localStorage
   */
  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  /**
   * Remove JWT token from localStorage
   */
  removeToken(): void {
    localStorage.removeItem('access_token');
  }

  /**
   * Build query parameters from QueryParams object
   */
  protected buildParams(params?: QueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key];
        if (value !== null && value !== undefined && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(item => {
              httpParams = httpParams.append(key, item.toString());
            });
          } else {
            httpParams = httpParams.set(key, value.toString());
          }
        }
      });
    }

    return httpParams;
  }

  /**
   * Handle HTTP errors
   */
  protected handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    let errorResponse: ErrorResponse | null = null;

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.error && typeof error.error === 'object') {
        // Try to parse as ErrorResponse
        if ('error' in error.error || 'success' in error.error) {
          errorResponse = error.error as ErrorResponse;
          errorMessage = errorResponse.error?.message || errorMessage;
        } else {
          errorMessage = error.error.message || errorMessage;
        }
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }

    console.error('API Error:', {
      status: error.status,
      message: errorMessage,
      error: errorResponse || error.error
    });

    return throwError(() => ({
      status: error.status,
      message: errorMessage,
      error: errorResponse || error.error,
      originalError: error
    }));
  }

  /**
   * GET request - returns single item
   */
  protected get<T>(path: string = '', params?: QueryParams): Observable<T> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();
    const httpParams = this.buildParams(params);

    return this.http.get<T>(url, { headers, params: httpParams })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * GET request - returns paginated response
   */
  protected getPaginated<T>(path: string = '', params?: QueryParams): Observable<PaginatedResponse<T>> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();
    const httpParams = this.buildParams(params);

    return this.http.get<PaginatedResponse<T>>(url, { headers, params: httpParams })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * POST request
   */
  protected post<T>(path: string = '', body: any): Observable<T> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();

    return this.http.post<T>(url, body, { headers })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * PUT request
   */
  protected put<T>(path: string = '', body: any): Observable<T> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();

    return this.http.put<T>(url, body, { headers })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * PATCH request
   */
  protected patch<T>(path: string = '', body: any): Observable<T> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();

    return this.http.patch<T>(url, body, { headers })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * DELETE request
   */
  protected delete(path: string = '', params?: QueryParams): Observable<void> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();
    const httpParams = this.buildParams(params);

    return this.http.delete<void>(url, { headers, params: httpParams })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * POST request with FormData (for file uploads)
   */
  protected postFormData<T>(path: string = '', formData: FormData): Observable<T> {
    const url = this.getUrl(path);
    let headers = new HttpHeaders();

    // Don't set Content-Type for FormData - browser will set it with boundary
    const token = this.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<T>(url, formData, { headers })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * GET request for file download
   */
  protected downloadFile(path: string = '', params?: QueryParams): Observable<Blob> {
    const url = this.getUrl(path);
    const headers = this.getHeaders();
    const httpParams = this.buildParams(params);

    return this.http.get(url, {
      headers,
      params: httpParams,
      responseType: 'blob'
    })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }
}

