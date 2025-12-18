import { Injectable, Injector } from '@angular/core';
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
import { ErrorCode } from '../constants/error-codes.constant';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private errorService?: ErrorService;
  private notificationService?: NotificationService;
  private authService?: AuthService;
  private router?: Router;

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Lazy inject services to avoid circular dependency
    if (!this.errorService) {
      this.errorService = this.injector.get(ErrorService);
      this.notificationService = this.injector.get(NotificationService);
      this.authService = this.injector.get(AuthService);
      this.router = this.injector.get(Router);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Create structured error
        const structuredError = this.errorService!.createStructuredError(error, {
          url: request.url,
          method: request.method
        });

        // Handle error based on error code
        this.handleErrorByCode(structuredError);

        // Return structured error
        return this.errorService!.handleError(error);
      })
    );
  }

  /**
   * Handle error based on error code
   */
  private handleErrorByCode(error: StructuredError): void {
    if (!this.authService || !this.notificationService) {
      return;
    }

    // Store references to avoid TypeScript errors
    const authService = this.authService;
    const notificationService = this.notificationService;

    switch (error.code) {
      case ErrorCode.UNAUTHORIZED:
      case ErrorCode.TOKEN_EXPIRED:
      case ErrorCode.TOKEN_INVALID:
      case ErrorCode.SESSION_EXPIRED:
        // Authentication errors - logout user
        authService.logout();
        notificationService.showError(error.message);
        break;

      case ErrorCode.FORBIDDEN:
      case ErrorCode.ACCESS_DENIED:
      case ErrorCode.INSUFFICIENT_PERMISSIONS:
        // Authorization errors
        notificationService.showError(error.message);
        // Optionally redirect to unauthorized page
        // this.router?.navigate(['/unauthorized']);
        break;

      case ErrorCode.NETWORK_ERROR:
      case ErrorCode.CONNECTION_TIMEOUT:
      case ErrorCode.NO_INTERNET:
        // Network errors
        notificationService.showError(error.message);
        break;

      case ErrorCode.INTERNAL_SERVER_ERROR:
      case ErrorCode.SERVICE_UNAVAILABLE:
      case ErrorCode.BAD_GATEWAY:
      case ErrorCode.GATEWAY_TIMEOUT:
        // Server errors
        notificationService.showError(error.message);
        break;

      case ErrorCode.VALIDATION_ERROR:
      case ErrorCode.BAD_REQUEST:
        // Client errors - show validation message
        notificationService.showError(error.message);
        break;

      case ErrorCode.NOT_FOUND:
        // Not found errors
        notificationService.showError(error.message);
        break;

      default:
        // Unknown or other errors
        notificationService.showError(error.message);
        break;
    }
  }
}

