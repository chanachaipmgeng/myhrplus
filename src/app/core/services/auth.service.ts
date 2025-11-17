import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, timer } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';

export interface User {
  id: string;
  username: string;
  email?: string;
  name: string;
  roles: string[];
  token?: string;
  permissions?: string[];
  companyId?: string;
  employeeId?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  dbcomp?: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
    refreshToken?: string;
    expiresIn?: number;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'user_data';
  private readonly TOKEN_EXPIRY_KEY = 'token_expiry';
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private tokenRefreshTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService
  ) {
    this.loadUserFromStorage();
    this.startTokenRefreshTimer();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.apiBaseUrl}${environment.apiEndpoints.auth}/login`,
      credentials
    ).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setUser(response.data.user, response.data.token, response.data.refreshToken, response.data.expiresIn);
          this.startTokenRefreshTimer();
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    // Call logout API if needed
    this.http.post(`${environment.apiBaseUrl}${environment.apiEndpoints.auth}/logout`, {})
      .subscribe({
        next: () => {},
        error: () => {}
      });

    this.clearSession();
    this.router.navigate(['/auth/login']);
  }

  refreshToken(): Observable<string | null> {
    const refreshToken = this.storage.getItem(this.REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      this.logout();
      return throwError(() => new Error('No refresh token'));
    }

    return this.http.post<LoginResponse>(
      `${environment.apiBaseUrl}${environment.apiEndpoints.auth}/refresh`,
      { refreshToken }
    ).pipe(
      map(response => {
        if (response.success && response.data) {
          this.setUser(
            response.data.user,
            response.data.token,
            response.data.refreshToken,
            response.data.expiresIn
          );
          return response.data.token;
        }
        throw new Error('Token refresh failed');
      }),
      catchError(error => {
        console.error('Token refresh error:', error);
        this.logout();
        return throwError(() => error);
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    // Check if token is expired
    if (this.isTokenExpired(token)) {
      // Try to refresh token
      this.refreshToken().subscribe({
        next: () => {},
        error: () => this.logout()
      });
      return false;
    }

    return true;
  }

  getToken(): string | null {
    return this.storage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.roles.includes(role) : false;
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission);
  }

  hasAnyPermission(permissions: string[]): boolean {
    return permissions.some(permission => this.hasPermission(permission));
  }

  private setUser(user: User, token: string, refreshToken?: string, expiresIn?: number): void {
    this.storage.setItem(this.TOKEN_KEY, token);
    if (refreshToken) {
      this.storage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }
    this.storage.setItem(this.USER_KEY, JSON.stringify(user));
    
    if (expiresIn) {
      const expiryTime = Date.now() + (expiresIn * 1000);
      this.storage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
    }
    
    this.currentUserSubject.next(user);
  }

  private loadUserFromStorage(): void {
    const userData = this.storage.getItem(this.USER_KEY);
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const token = this.getToken();
        
        if (token && !this.isTokenExpired(token)) {
          this.currentUserSubject.next(user);
        } else {
          // Token expired, try to refresh
          this.refreshToken().subscribe({
            next: () => {},
            error: () => this.clearSession()
          });
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.clearSession();
      }
    }
  }

  private clearSession(): void {
    this.storage.removeItem(this.TOKEN_KEY);
    this.storage.removeItem(this.REFRESH_TOKEN_KEY);
    this.storage.removeItem(this.USER_KEY);
    this.storage.removeItem(this.TOKEN_EXPIRY_KEY);
    this.currentUserSubject.next(null);
    this.stopTokenRefreshTimer();
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp * 1000;
      return Date.now() >= exp;
    } catch (error) {
      // If we can't parse the token, check expiry from storage
      const expiryTime = this.storage.getItem(this.TOKEN_EXPIRY_KEY);
      if (expiryTime) {
        return Date.now() >= parseInt(expiryTime, 10);
      }
      return true;
    }
  }

  private startTokenRefreshTimer(): void {
    this.stopTokenRefreshTimer();
    
    // Refresh token 5 minutes before expiry
    const expiryTime = this.storage.getItem(this.TOKEN_EXPIRY_KEY);
    if (expiryTime) {
      const expiry = parseInt(expiryTime, 10);
      const now = Date.now();
      const timeUntilExpiry = expiry - now;
      const refreshTime = timeUntilExpiry - (5 * 60 * 1000); // 5 minutes before expiry

      if (refreshTime > 0) {
        this.tokenRefreshTimer = timer(refreshTime).subscribe(() => {
          this.refreshToken().subscribe({
            next: () => this.startTokenRefreshTimer(),
            error: () => this.logout()
          });
        });
      }
    }
  }

  private stopTokenRefreshTimer(): void {
    if (this.tokenRefreshTimer) {
      this.tokenRefreshTimer.unsubscribe();
      this.tokenRefreshTimer = null;
    }
  }
}
