import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {
  ErrorCode,
  getErrorCodeFromStatus,
  getErrorMessage,
  HTTP_STATUS_TO_ERROR_CODE
} from '../constants/error-codes.constant';

export interface StructuredError {
  code: ErrorCode;
  message: string;
  originalError: any;
  statusCode?: number;
  timestamp: Date;
  context?: Record<string, any>;
}

/**
 * ErrorService - Centralized error handling
 * 
 * Provides standardized error handling with error codes and user-friendly messages
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private currentLang: 'th' | 'en' = 'th';
  private translate?: TranslateService;

  constructor(private injector: Injector) {
    // Lazy inject TranslateService to avoid circular dependency
    // TranslateService might use HTTP client which goes through ErrorInterceptor
    try {
      const translateService = this.injector.get(TranslateService, null);
      if (translateService) {
        this.translate = translateService;
        // Subscribe to language changes
        this.translate.onLangChange.subscribe(event => {
          this.currentLang = event.lang === 'th' ? 'th' : 'en';
        });

        // Get initial language
        const currentLang = this.translate.currentLang || this.translate.defaultLang || 'th';
        this.currentLang = currentLang === 'th' ? 'th' : 'en';
      }
    } catch (error) {
      // If TranslateService is not available, use default language
      console.warn('ErrorService: TranslateService not available, using default language');
      this.currentLang = 'th';
    }
  }

  /**
   * Handle HTTP error and return structured error
   */
  handleError(error: HttpErrorResponse): Observable<never> {
    const structuredError = this.createStructuredError(error);
    
    console.error('Error:', structuredError);
    
    return throwError(() => structuredError);
  }

  /**
   * Get error message from error object
   * Supports both structured errors and legacy error formats
   */
  getErrorMessage(error: any): string {
    // If it's a StructuredError, use the message directly
    if (error && typeof error === 'object' && error.code && error.message) {
      return error.message;
    }

    // If it's an HttpErrorResponse, create structured error
    if (error instanceof HttpErrorResponse) {
      const structuredError = this.createStructuredError(error);
      return structuredError.message;
    }

    // Check for error message in various formats
    if (error?.error?.message) {
      return error.error.message;
    }
    
    if (error?.message) {
      return error.message;
    }

    // Fallback to unknown error
    return getErrorMessage(ErrorCode.UNKNOWN_ERROR, this.currentLang);
  }

  /**
   * Get error code from error object
   */
  getErrorCode(error: any): ErrorCode {
    // If it's a StructuredError, return the code
    if (error && typeof error === 'object' && error.code) {
      return error.code;
    }

    // If it's an HttpErrorResponse, map status to error code
    if (error instanceof HttpErrorResponse) {
      return getErrorCodeFromStatus(error.status);
    }

    // Check for status code in error object
    if (error?.status) {
      return getErrorCodeFromStatus(error.status);
    }

    return ErrorCode.UNKNOWN_ERROR;
  }

  /**
   * Create structured error from HttpErrorResponse
   */
  createStructuredError(error: HttpErrorResponse | any, context?: Record<string, any>): StructuredError {
    let errorCode: ErrorCode;
    let statusCode: number | undefined;

    if (error instanceof HttpErrorResponse) {
      statusCode = error.status;
      errorCode = this.determineErrorCode(error);
    } else if (error?.status) {
      statusCode = error.status;
      errorCode = getErrorCodeFromStatus(statusCode || 0);
    } else {
      // Network error or client-side error
      if (error.error instanceof ErrorEvent) {
        errorCode = ErrorCode.NETWORK_ERROR;
      } else {
        errorCode = ErrorCode.UNKNOWN_ERROR;
      }
    }

    // Get user-friendly message
    const message = this.getUserFriendlyMessage(errorCode, error);

    return {
      code: errorCode,
      message,
      originalError: error,
      statusCode,
      timestamp: new Date(),
      context
    };
  }

  /**
   * Determine error code from HttpErrorResponse
   */
  private determineErrorCode(error: HttpErrorResponse): ErrorCode {
    // Check for specific error codes in response
    if (error.error?.code) {
      const errorCode = error.error.code as ErrorCode;
      if (Object.values(ErrorCode).includes(errorCode)) {
        return errorCode;
      }
    }

    // Map HTTP status to error code
    if (error.status && HTTP_STATUS_TO_ERROR_CODE[error.status]) {
      return HTTP_STATUS_TO_ERROR_CODE[error.status];
    }

    // Handle special cases
    if (error.status === 0) {
      // Network error or CORS issue
      return ErrorCode.NETWORK_ERROR;
    }

    if (error.status === 401) {
      // Check if it's token-related
      const errorMessage = error.error?.message || '';
      if (errorMessage.toLowerCase().includes('token') || 
          errorMessage.toLowerCase().includes('expired')) {
        return ErrorCode.TOKEN_EXPIRED;
      }
      return ErrorCode.UNAUTHORIZED;
    }

    // Default to unknown error
    return ErrorCode.UNKNOWN_ERROR;
  }

  /**
   * Get user-friendly error message
   */
  private getUserFriendlyMessage(errorCode: ErrorCode, originalError: any): string {
    // First, try to get message from error response
    if (originalError?.error?.message && typeof originalError.error.message === 'string') {
      // Use server message if available
      return originalError.error.message;
    }

    // Get current language safely
    let lang = this.currentLang;
    if (this.translate) {
      try {
        const currentLang = this.translate.currentLang || this.translate.defaultLang || 'th';
        lang = currentLang === 'th' ? 'th' : 'en';
      } catch (error) {
        // If TranslateService is not ready, use default
        lang = 'th';
      }
    }

    // Otherwise, use predefined message
    return getErrorMessage(errorCode, lang);
  }

  /**
   * Check if error is retryable
   */
  isRetryable(error: any): boolean {
    const code = this.getErrorCode(error);
    
    // Retryable errors
    const retryableCodes = [
      ErrorCode.NETWORK_ERROR,
      ErrorCode.CONNECTION_TIMEOUT,
      ErrorCode.INTERNAL_SERVER_ERROR,
      ErrorCode.SERVICE_UNAVAILABLE,
      ErrorCode.GATEWAY_TIMEOUT,
      ErrorCode.BAD_GATEWAY
    ];

    return retryableCodes.includes(code);
  }

  /**
   * Check if error requires authentication
   */
  requiresAuthentication(error: any): boolean {
    const code = this.getErrorCode(error);
    
    const authRequiredCodes = [
      ErrorCode.UNAUTHORIZED,
      ErrorCode.TOKEN_EXPIRED,
      ErrorCode.TOKEN_INVALID,
      ErrorCode.SESSION_EXPIRED,
      ErrorCode.LOGIN_REQUIRED
    ];

    return authRequiredCodes.includes(code);
  }
}

