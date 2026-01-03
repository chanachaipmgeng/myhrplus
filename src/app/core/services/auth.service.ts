import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IvapAuthService } from './ivap/auth.service';
import { DatabaseModel } from '@core/models/database.model';

/**
 * Auth Service (Legacy Wrapper)
 * 
 * Wrapper service for backward compatibility with legacy code
 * Uses IvapAuthService for actual authentication
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private ivapAuthService: IvapAuthService) {}

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.ivapAuthService.isAuthenticated();
  }

  /**
   * Logout user
   */
  logout(): void {
    this.ivapAuthService.logout();
  }

  /**
   * Restore session (for backward compatibility)
   */
  restoreSession(user: any, token: string): void {
    // Token is already saved by IvapAuthService
    // Just ensure user data is in sessionStorage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  /**
   * Get database list (legacy method - not available in IVAP API)
   * Returns empty array for now
   */
  getDatabase(): Observable<DatabaseModel[]> {
    // IVAP API doesn't have database selection
    // Return empty array for backward compatibility
    return of([]);
  }

  /**
   * Set mail for forgot password (legacy method)
   * Uses IVAP forgot password API
   */
  setMailForgetPassword(
    username: string,
    email: string,
    dbName?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ivapAuthService.forgotPassword({
        username,
        email
      }).subscribe({
        next: (response) => {
          resolve({
            status: true,
            message: 'Password reset email sent successfully'
          });
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}

