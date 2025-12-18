import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { TokenManagerService } from '../services/token-manager.service';
import { CacheService } from '../services/cache.service';
import { environment } from '../../../environments/environment';

/**
 * HTTP Interceptor for:
 * - Adding authentication tokens
 * - URL transformation
 * - Response caching (for specific APIs) - uses CacheService
 * - Error handling
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Zeeme token for specific endpoints
  private readonly tokenZeeme = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRoIiwiaXNzIjoiQ29tcHV0ZXIgU2NpZW5jZSBDb3Jwb3JhdGlvbiBMaW1pdGVkIiwiZnVsbE5hbWUiOiLguJjguLXguKPguYDguJTguIog4LiE4Li54Lir4LiY4LiZ4LmA4Liq4LiW4Li14Lii4LijIiwibWVtYmVySWQiOiJjN2QwZTBmMC0wMzBlLTExZTctODE3NS1kMWRiNjFiYjU1ZjgifQ.MCvsIoImQ4BPWh1lQeas2mcqqksx45BBhgMZpmx7hA0';

  // Cache TTL for HTTP responses (5 minutes)
  private readonly CACHE_TTL = 5 * 60 * 1000;

  // Lazy inject services to avoid circular dependency
  private tokenManager?: TokenManagerService;
  private cacheService?: CacheService;

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Skip local files and assets
    if (req.url.startsWith('./') || 
        req.url.startsWith('/assets/') ||
        req.url.startsWith('assets/')) {
      return next.handle(req);
    }

    // Lazy inject services to avoid circular dependency
    if (!this.tokenManager) {
      this.tokenManager = this.injector.get(TokenManagerService);
      this.cacheService = this.injector.get(CacheService);
    }

    // Transform URL if needed
    const fullUrl = this.transformUrl(req.url);

    // Get token (use Zeeme token for specific endpoints, otherwise use auth token)
    const token = this.getToken(req.url, fullUrl);

    // Clone request with authorization header and transformed URL
    const headers: { [key: string]: string } = {};
    
    // Add Authorization header if token exists
    if (token && token.trim() !== '') {
      headers['Authorization'] = `Bearer ${token}`;
      // Debug log to verify token is being added
      console.log('AuthInterceptor: Adding Authorization header for:', fullUrl);
    } else {
      // Log warning if no token found for non-public endpoints
      if (!fullUrl.includes('/public/') && !fullUrl.includes('/authen')) {
        console.warn('AuthInterceptor: No token found for request:', fullUrl);
        // Debug: Check what's in sessionStorage
        if (typeof window !== 'undefined' && window.sessionStorage) {
          const debugToken = sessionStorage.getItem('userToken');
          console.warn('AuthInterceptor: sessionStorage userToken:', debugToken ? 'exists' : 'missing');
        }
      }
    }

    const authReq = req.clone({
      url: fullUrl,
      setHeaders: headers
    });

    // Check if request should be cached
    if (this.canCache(req)) {
      const cacheKey = this.getCacheKey(req);
      const cached = this.cacheService!.get<HttpEvent<unknown>>(cacheKey);
      
      if (cached) {
        return of(cached);
      }

      return next.handle(authReq).pipe(
        tap(response => {
          // Cache successful responses
          this.cacheService!.set(cacheKey, response, this.CACHE_TTL);
        }),
        catchError((error: HttpErrorResponse) => {
          this.handleError(error);
          return throwError(() => error);
        })
      );
    }

    // Non-cached requests
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Transform URL based on environment configuration
   */
  private transformUrl(url: string): string {
    // Already full URL or asset path
    if (url.startsWith('http') || 
        url.startsWith('/assets/configAppMyhr/') || 
        url.startsWith('/assets/template')) {
      return url;
    }

    // Use baseUrl for most requests
    return environment.baseUrl + url;
  }

  /**
   * Get appropriate token for the request
   * @param originalUrl - Original request URL
   * @param transformedUrl - Transformed request URL
   * @returns Token string or empty string
   */
  private getToken(originalUrl: string, transformedUrl: string): string {
    // Use Zeeme token for Zeeme API endpoints
    if (transformedUrl.includes('zeeme.myhr.co.th/ZeemeApi/rest/company-config') ||
        originalUrl.includes('zeeme.myhr.co.th/ZeemeApi/rest/company-config')) {
      return this.tokenZeeme;
    }

    // Priority 1: Get from sessionStorage first (fastest, most reliable)
    // This ensures token is available immediately after login
    // Always use token from sessionStorage if available, let server validate
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const sessionToken = sessionStorage.getItem('userToken');
      if (sessionToken && sessionToken.trim() !== '') {
        // Debug: Log token retrieval
        console.log('AuthInterceptor: Token found in sessionStorage, length:', sessionToken.length);
        // Use token directly - server will validate it
        // Only skip if token is clearly invalid (empty or null)
        return sessionToken;
      } else {
        console.warn('AuthInterceptor: No token in sessionStorage (userToken key)');
      }
    }

    // Priority 2: Get from TokenManagerService (if available)
    if (this.tokenManager) {
      const token = this.tokenManager.getToken();
      if (token && token.trim() !== '') {
        console.log('AuthInterceptor: Token found in TokenManagerService, length:', token.length);
        return token;
      } else {
        console.warn('AuthInterceptor: No token in TokenManagerService');
      }
    } else {
      console.warn('AuthInterceptor: TokenManagerService not available');
    }

    return '';
  }

  /**
   * Check if request should be cached
   */
  private canCache(request: HttpRequest<unknown>): boolean {
    const cacheableApis = [
      'jobcode/lists',
      'config/workflow-menu'
    ];

    return cacheableApis.some(api => request.urlWithParams.includes(api));
  }

  /**
   * Get cache key for request
   */
  private getCacheKey(request: HttpRequest<unknown>): string {
    return `http_cache_${request.method}_${request.urlWithParams}`;
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      // Network or client-side error
      console.error('A client-side or network error occurred. Please check your internet connection.');
      // Note: Using console.error instead of alert for better UX
      // You can integrate with notification service here
    }
  }

  /**
   * Clear response cache (useful for logout or when data needs refresh)
   * Uses CacheService for unified cache management
   */
  public clearCache(pattern?: string): void {
    if (!this.cacheService) {
      this.cacheService = this.injector.get(CacheService);
    }
    
    // Clear cache (pattern matching not yet supported, so clear all)
    this.cacheService.clear();
  }
}

