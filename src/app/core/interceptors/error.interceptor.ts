import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorService, StructuredError } from '../services/error.service';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { LogHistoryService } from '../services/log-history.service';
import { ErrorCode } from '../constants/error-codes.constant';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private errorService: ErrorService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private logHistoryService: LogHistoryService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Create structured error
        const structuredError = this.errorService.createStructuredError(error, {
          url: request.url,
          method: request.method
        });

        // Log error for audit and monitoring
        const user = this.authService.getCurrentUser();
        this.logHistoryService.logError(structuredError, {
          url: request.url,
          method: request.method,
          userId: user?.id || user?.username
        });

        // Handle error based on error code
        this.handleErrorByCode(structuredError);

        // Return structured error
        return this.errorService.handleError(error);
      })
    );
  }

  /**
   * Handle error based on error code
   */
  private handleErrorByCode(error: StructuredError): void {
    switch (error.code) {
      case ErrorCode.UNAUTHORIZED:
      case ErrorCode.TOKEN_EXPIRED:
      case ErrorCode.TOKEN_INVALID:
      case ErrorCode.SESSION_EXPIRED:
        // Authentication errors - logout user
        this.authService.logout();
        this.notificationService.showError(error.message);
        break;

      case ErrorCode.FORBIDDEN:
      case ErrorCode.ACCESS_DENIED:
      case ErrorCode.INSUFFICIENT_PERMISSIONS:
        // Authorization errors
        this.notificationService.showError(error.message);
        // Optionally redirect to unauthorized page
        // this.router.navigate(['/unauthorized']);
        break;

      case ErrorCode.NETWORK_ERROR:
      case ErrorCode.CONNECTION_TIMEOUT:
      case ErrorCode.NO_INTERNET:
        // Network errors
        this.notificationService.showError(error.message);
        break;

      case ErrorCode.INTERNAL_SERVER_ERROR:
      case ErrorCode.SERVICE_UNAVAILABLE:
      case ErrorCode.BAD_GATEWAY:
      case ErrorCode.GATEWAY_TIMEOUT:
        // Server errors
        this.notificationService.showError(error.message);
        break;

      case ErrorCode.VALIDATION_ERROR:
      case ErrorCode.BAD_REQUEST:
        // Client errors - show validation message
        this.notificationService.showError(error.message);
        break;

      case ErrorCode.NOT_FOUND:
        // Not found errors
        this.notificationService.showError(error.message);
        break;

      default:
        // Unknown or other errors
        this.notificationService.showError(error.message);
        break;
    }
  }
}

