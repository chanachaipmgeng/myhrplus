import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@core/services';
import { TokenManagerService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private tokenManager: TokenManagerService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // If already on login/auth page, allow access to avoid redirect loop
    if (state.url.startsWith('/auth/login') || state.url.startsWith('/auth')) {
      return true;
    }

    // Check authentication using AuthService
    if (this.authService.isAuthenticated()) {
      return true;
    }

    // Check if there's a token in storage that might not be loaded yet
    const token = this.tokenManager.getToken();
    if (token) {
      // Validate token using TokenManagerService
      const validation = this.tokenManager.validateToken(token);

      if (validation.isValid && !validation.isExpired) {
        // Token is valid, try to restore session
        if (typeof window !== 'undefined' && window.sessionStorage) {
          const sessionUser = sessionStorage.getItem('currentUser');

          if (sessionUser) {
            try {
              const user = JSON.parse(sessionUser);
              // Restore user and token to AuthService
              this.authService.restoreSession(user, token);
              return true;
            } catch (error) {
              console.error('Error restoring session:', error);
            }
          }
        }
      } else if (validation.isExpired) {
        // Token expired, redirect to login
        console.warn('Token expired, redirecting to login');
      }
    }

    // Not authenticated, redirect to login with return URL
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}

