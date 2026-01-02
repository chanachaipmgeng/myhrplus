import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

/**
 * Base API Service for Standardized CRUD Operations
 * Extend this class in your feature services to inherit common methods.
 * 
 * Example:
 * export class BenefitService extends BaseApiService<Benefit> {
 *   protected baseUrl = 'hr/benefits'; // Path relative to configured base URL (usually /hr)
 * }
 */
@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  protected apiService = inject(ApiService);

  /**
   * The relative path to the API endpoint (e.g., '/api/v1/benefits')
   */
  protected abstract baseUrl: string;

  /**
   * Get all items
   * @param params Optional query parameters
   */
  getAll(params?: any): Observable<T[]> {
    return this.apiService.getData<T[]>(this.baseUrl, params);
  }

  /**
   * Get item by ID
   * @param id Item ID
   */
  getById(id: number | string): Observable<T> {
    return this.apiService.getData<T>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create new item
   * @param data Partial item data
   */
  create(data: Partial<T>): Observable<T> {
    return this.apiService.postData<T>(this.baseUrl, data);
  }

  /**
   * Update existing item
   * @param id Item ID
   * @param data Partial item data
   */
  update(id: number | string, data: Partial<T>): Observable<T> {
    // Note: ApiService doesn't have putData yet, so we use postData if API supports POST for update, 
    // or we should add putData to ApiService.
    // Most legacy APIs in this project seem to use POST for everything or standard REST.
    // Let's assume standard REST for now but using put() from ApiService which returns ApiResponse, 
    // so we need to manually unwrap or add putData helper.
    // Let's use apiService.put and pipe it.

    // Check if ApiService has putData, if not (it doesn't), we implement basic unwrapping here or use put().
    // Actually, let's use the generic helper logic inline or add it to ApiService?
    // User asked to standardize using ApiService.
    // To be safe and clean, I will just use apiService.put() which returns Observable<ApiResponse<T>> 
    // and since this method expects Observable<T>, I need to unwrap it.
    // BUT BaseApiService.update expects T.

    // Better approach: Use ApiService.put and map it.
    return this.apiService.put<T>(`${this.baseUrl}/${id}`, data).pipe(
      this.unwrapResponse()
    );
  }

  /**
   * Delete item
   * @param id Item ID
   */
  delete(id: number | string): Observable<void> {
    return this.apiService.delete<void>(`${this.baseUrl}/${id}`).pipe(
      this.unwrapResponse()
    );
  }

  /**
   * Helper to unwrap ApiResponse
   */
  protected unwrapResponse<R>() {
    return (source: Observable<any>): Observable<R> => {
      return new Observable(observer => {
        return source.subscribe({
          next: (response) => {
            if (response.success) {
              observer.next(response.data);
              observer.complete();
            } else {
              observer.error(new Error(response.message || 'Operation failed'));
            }
          },
          error: (err) => observer.error(err)
        });
      });
    };
  }
}


