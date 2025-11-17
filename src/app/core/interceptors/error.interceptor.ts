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
import { ErrorService } from '../services/error.service';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private errorService: ErrorService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized - logout user
          this.authService.logout();
          this.notificationService.showError('Session expired. Please login again.');
        } else if (error.status === 403) {
          // Forbidden
          this.notificationService.showError('You do not have permission to access this resource.');
        } else if (error.status >= 500) {
          // Server error
          this.notificationService.showError('Server error. Please try again later.');
        } else {
          // Other errors
          const errorMessage = this.errorService.getErrorMessage(error);
          this.notificationService.showError(errorMessage);
        }

        return this.errorService.handleError(error);
      })
    );
  }
}

