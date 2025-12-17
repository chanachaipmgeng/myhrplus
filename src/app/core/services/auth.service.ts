import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, timer, Subscription } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { ApiService, ApiResponse } from './api.service';
import { TokenManagerService } from './token-manager.service';
import jwt_decode from 'jwt-decode';

export interface User {
  // Core identification
  id?: string;
  username: string;
  user?: string;
  uid?: string;
  employeeid?: string;
  actorid?: string;
  memberid?: string;

  // Personal information
  name?: string;
  fullname?: string;
  email?: string;

  // Authentication & Authorization
  roles?: string[];
  user_role?: string;
  role_level?: string;
  user_level?: string;
  permissions?: string[];

  // Company & Organization
  companyId?: string;
  companyid?: string;
  companyName?: string;
  comid?: string;
  branch?: string;
  dbName?: string;
  schema?: string;

  // Work & Position
  workarea?: string;
  emp_position?: string;
  job?: string;

  // Account status
  accountactive?: string;
  firstlogin?: string;
  ad?: string;

  // Language & Localization
  lang?: string;

  // Application & System
  app_name?: string;
  url_myhr?: string;
  encode?: string;
  sub?: string;
  iss?: string;

  // Zeeme integration
  zmlogin?: string;
  token_zeeme?: string;
  zm_user?: string;

  // Token
  token?: string;

  // Allow additional properties from JWT token
  [key: string]: any;
}

export interface LoginRequest {
  username: string;
  password: string;
  dbName?: string;
  dbcomp?: string;
  lang?: string;
}

export interface LoginResponse {
  success: boolean;
  accessToken?: string;
  data?: {
    user: User;
    token: string;
    expiresIn?: number;
  };
  message?: string;
}

export interface DatabaseModel {
  db: string;
  dbName: string;
  dbDisplay: string;
  dbcomp: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';
  private readonly TOKEN_EXPIRY_KEY = 'token_expiry';

  // Use signal for reactive state management
  private currentUserSignal = signal<User | null>(null);
  public currentUser = this.currentUserSignal.asReadonly();
  
  // Computed signal for authentication status
  public isAuthenticatedSignal = computed(() => {
    const user = this.currentUserSignal();
    const token = this.tokenManager.getToken();
    if (!user || !token) {
      return false;
    }
    const validation = this.tokenManager.validateToken(token);
    return validation.isValid && !validation.isExpired;
  });

  // Observable for backward compatibility (if needed)
  public currentUser$ = toObservable(this.currentUserSignal);

  private tokenRefreshTimer: Subscription | null = null;

  private readonly baseUrl = `${environment.jbossUrl}${environment.apiEndpoints.unsecure}`;
  private readonly authBaseUrl = `${environment.jbossUrl}${environment.apiEndpoints.auth}`;
  private readonly empViewBaseUrl = `${environment.jbossUrl}${environment.apiEndpoints.employeeView}`;

  constructor(
    private http: HttpClient, // Keep for login/forgot-password that need direct access
    private apiService: ApiService,
    private router: Router,
    private storage: StorageService,
    private tokenManager: TokenManagerService
  ) {
    this.loadUserFromStorage();
    this.startTokenRefreshTimer();
  }

  login(credentials: LoginRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        username: credentials.username,
        password: credentials.password,
        dbName: credentials.dbName || '',
        dbcomp: credentials.dbcomp || '100',
        lang: credentials.lang || 'th'
      };

      // Use jbossUrl for /hr endpoints (same as hrplus-std-rd)
      this.http.post<any>(
        `${environment.jbossUrl}${environment.apiEndpoints.unsecure}/authen`,
        body
      ).subscribe({
        next: (response) => {
          // Store token and user data
          if (response.accessToken) {
            // Decode JWT token to get user info
            try {
              const tokenPayload = jwt_decode<any>(response.accessToken);
              const user: User = {
                // Map token payload to User interface
                id: tokenPayload.uid || tokenPayload.employeeid || tokenPayload.actorid || tokenPayload.sub || credentials.username,
                username: tokenPayload.username || tokenPayload.user || credentials.username,
                user: tokenPayload.user || tokenPayload.username,
                uid: tokenPayload.uid,
                employeeid: tokenPayload.employeeid,
                actorid: tokenPayload.actorid,
                memberid: tokenPayload.memberid,
                name: tokenPayload.fullname || tokenPayload.name || tokenPayload.username || credentials.username,
                fullname: tokenPayload.fullname,
                email: tokenPayload.email,
                roles: tokenPayload.roles || [],
                user_role: tokenPayload.user_role,
                role_level: tokenPayload.role_level,
                user_level: tokenPayload.user_level,
                permissions: tokenPayload.permissions,
                companyId: tokenPayload.companyid || tokenPayload.companyId,
                companyid: tokenPayload.companyid,
                companyName: tokenPayload.companyName,
                comid: tokenPayload.comid,
                branch: tokenPayload.branch,
                dbName: tokenPayload.dbName,
                schema: tokenPayload.schema,
                workarea: tokenPayload.workarea,
                emp_position: tokenPayload.emp_position,
                job: tokenPayload.job,
                accountactive: tokenPayload.accountactive,
                firstlogin: tokenPayload.firstlogin,
                ad: tokenPayload.ad,
                lang: tokenPayload.lang || 'th',
                app_name: tokenPayload.app_name,
                url_myhr: tokenPayload.url_myhr,
                encode: tokenPayload.encode,
                sub: tokenPayload.sub,
                iss: tokenPayload.iss,
                zmlogin: tokenPayload.zmlogin,
                token_zeeme: tokenPayload.token_zeeme,
                zm_user: tokenPayload.zm_user,
                token: response.accessToken,
                // Include all other token properties
                ...tokenPayload
              };

              // Store token using TokenManagerService FIRST (primary storage)
              // TokenManagerService will also store in sessionStorage for backward compatibility
              this.tokenManager.setToken(response.accessToken);

              // Store user data and session info using AuthService methods
              // This will also store token in sessionStorage via setSessionStorageData
              this.setUserFromToken(response.accessToken, tokenPayload, credentials.dbName);

              // Verify token is set in sessionStorage before resolving
              // This ensures token is available when interceptor runs
              const verifySessionToken = (): boolean => {
                if (typeof window !== 'undefined' && window.sessionStorage) {
                  const sessionToken = sessionStorage.getItem('userToken');
                  return sessionToken === response.accessToken;
                }
                return false;
              };

              // Use setTimeout to ensure sessionStorage write is complete
              setTimeout(() => {
                if (verifySessionToken()) {
                  resolve(response);
                } else {
                  // If still not ready, wait a bit more
                  setTimeout(() => {
                    if (verifySessionToken()) {
                      resolve(response);
                    } else {
                      // Resolve anyway - token should be set by now
                      console.warn('Token verification timeout, resolving anyway');
                      resolve(response);
                    }
                  }, 50);
                }
              }, 0);
            } catch (error) {
              console.error('Error decoding token:', error);
              reject(error);
            }
          } else {
            reject(new Error('No access token in response'));
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          reject(error);
        }
      });
    });
  }

  getDatabase(): Observable<DatabaseModel[]> {
    // ApiService already handles baseUrl (environment.jbossUrl), so only pass the endpoint path
    return this.apiService.get<DatabaseModel[]>(
      `${environment.apiEndpoints.unsecure}/system/get-db-list`
    ).pipe(
      map((response: ApiResponse<DatabaseModel[]>) => {
        const data = response.data || (response as unknown as DatabaseModel[]);
        return Array.isArray(data) ? data : [];
      })
    );
  }

  setMailForgetPassword(username: string, email: string, dbName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        userName: username,
        email: email,
        dbName: dbName
      };

      this.http.post<any>(
        `${environment.jbossUrl}${environment.apiEndpoints.unsecure}/authen/forgot-password`,
        body
      ).subscribe({
        next: (response) => {
          console.warn('Forgot password response:', response);
          resolve(response);
        },
        error: (error) => {
          console.error('Forgot password error:', error);
          reject(error);
        }
      });
    });
  }

  logout(): void {
    // Call logout API if needed
    // ApiService already handles baseUrl (environment.jbossUrl), so only pass the endpoint path
    this.apiService.post<unknown>(`${environment.apiEndpoints.auth}/logout`, {})
      .subscribe({
        next: () => {},
        error: () => {}
      });

    this.clearSession();
    // Clear sessionStorage as well
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
    this.router.navigate(['/auth/login']);
  }


  isAuthenticated(): boolean {
    const token = this.tokenManager.getToken();
    if (!token) {
      return false;
    }

    // Validate token using TokenManagerService
    const validation = this.tokenManager.validateToken(token);
    
    if (!validation.isValid || validation.isExpired) {
      return false;
    }

    // Ensure user is loaded
    if (!this.currentUserSignal()) {
      this.loadUserFromStorage();
    }

    return true;
  }

  getToken(): string | null {
    // Use TokenManagerService for token retrieval
    return this.tokenManager.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSignal();
  }

  /**
   * Set sessionStorage data for backward compatibility
   * @param token - JWT token
   * @param user - User object
   * @param dbName - Optional database name
   */
  private setSessionStorageData(token: string, user: User, dbName?: string): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('userToken', token);
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      if (dbName) {
        sessionStorage.setItem('dbName', dbName);
      }
    }
  }

  /**
   * Get token from sessionStorage (for backward compatibility)
   * @returns Token string or null
   */
  private getSessionToken(): string | null {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem('userToken');
    }
    return null;
  }

  /**
   * Restore session from storage (used when page refreshes)
   * This method is called by AuthGuard to restore session immediately
   */
  restoreSession(user: User, token: string): void {
    // Store token using TokenManagerService
    this.tokenManager.setToken(token);
    
    // Store user data
    this.storage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSignal.set(user);

    // Also update sessionStorage for backward compatibility
    this.setSessionStorageData(token, user, user.dbName);
  }

  /**
   * Set user from token (used for token-based authentication via URL parameters)
   * This method is called by TokenAuthGuard when authenticating via URL token
   * @param token - JWT token
   * @param decodedToken - Decoded token payload
   * @param dbName - Optional database name to store in sessionStorage
   */
  setUserFromToken(token: string, decodedToken: any, dbName?: string): void {
    try {
      // Map decoded token to User interface
      const user: User = {
        id: decodedToken.uid || decodedToken.employeeid || decodedToken.actorid || decodedToken.sub || decodedToken.username,
        username: decodedToken.username || decodedToken.user || decodedToken.sub,
        user: decodedToken.user || decodedToken.username,
        uid: decodedToken.uid,
        employeeid: decodedToken.employeeid,
        actorid: decodedToken.actorid,
        memberid: decodedToken.memberid,
        name: decodedToken.fullname || decodedToken.name || decodedToken.username,
        fullname: decodedToken.fullname,
        email: decodedToken.email,
        roles: decodedToken.roles || [],
        user_role: decodedToken.user_role,
        role_level: decodedToken.role_level,
        user_level: decodedToken.user_level,
        permissions: decodedToken.permissions,
        companyId: decodedToken.companyid || decodedToken.companyId,
        companyid: decodedToken.companyid,
        companyName: decodedToken.companyName,
        comid: decodedToken.comid,
        branch: decodedToken.branch,
        dbName: decodedToken.dbName,
        schema: decodedToken.schema,
        workarea: decodedToken.workarea,
        emp_position: decodedToken.emp_position,
        job: decodedToken.job,
        accountactive: decodedToken.accountactive,
        firstlogin: decodedToken.firstlogin,
        ad: decodedToken.ad,
        lang: decodedToken.lang || 'th',
        app_name: decodedToken.app_name,
        url_myhr: decodedToken.url_myhr,
        encode: decodedToken.encode,
        sub: decodedToken.sub,
        iss: decodedToken.iss,
        zmlogin: decodedToken.zmlogin,
        token_zeeme: decodedToken.token_zeeme,
        zm_user: decodedToken.zm_user,
        token: token,
        // Include all other token properties
        ...decodedToken
      };

      // Store token using TokenManagerService
      // TokenManagerService will also store in sessionStorage for backward compatibility
      this.tokenManager.setToken(token);
      
      // Store user data
      this.storage.setItem(this.USER_KEY, JSON.stringify(user));
      this.currentUserSignal.set(user);

      // Store in sessionStorage for backward compatibility
      this.setSessionStorageData(token, user, dbName || decodedToken.dbName);

      console.warn('AuthService: User set from token', user);
    } catch (error) {
      console.error('AuthService: Error setting user from token', error);
      throw error;
    }
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user && user.roles ? user.roles.includes(role) : false;
  }

  savePassword(
    oldPass: string,
    newPass: string,
    lang: string,
    ciw: string,
    cliw: string,
    niw: string,
    siw: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      // Dynamic import for sha1
      import('sha1').then((sha1Module) => {
        const sha1 = sha1Module.default || sha1Module;
        const body = {
          password: oldPass,
          newPassword: typeof sha1 === 'function' ? sha1(newPass) : (sha1 as any)(newPass),
          lang: lang,
          niw: niw,
          ciw: ciw,
          cliw: cliw,
          siw: siw
        };

        this.http
          .post<any>(`${environment.jbossUrl}${environment.apiEndpoints.employeeView}/user/change-password`, body)
          .subscribe({
            next: (response) => {
              resolve(response);
            },
            error: (error) => {
              reject(error);
            }
          });
      }).catch((error) => {
        reject(error);
      });
    });
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

  private setUser(user: User, token: string, expiresIn?: number): void {
    // Store token using TokenManagerService
    this.tokenManager.setToken(token, expiresIn);
    
    this.storage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSignal.set(user);
  }

  private loadUserFromStorage(): void {
    // Check localStorage first (from StorageService)
    let userData = this.storage.getItem(this.USER_KEY);
    let token = this.tokenManager.getToken();

    // If not found in localStorage, check sessionStorage (for backward compatibility)
    if (!userData && typeof window !== 'undefined' && window.sessionStorage) {
      const sessionUser = sessionStorage.getItem('currentUser');
      const sessionToken = sessionStorage.getItem('userToken');

      if (sessionUser && sessionToken) {
        try {
          userData = JSON.parse(sessionUser);
          // Migrate to localStorage for persistence
          this.storage.setItem(this.USER_KEY, sessionUser);
          this.tokenManager.setToken(sessionToken);
          token = sessionToken;
        } catch (error) {
          console.error('Error parsing sessionStorage user data:', error);
        }
      }
    }

    if (userData) {
      try {
        const user = typeof userData === 'string' ? JSON.parse(userData) : userData;

        if (token) {
          // Validate token using TokenManagerService
          const validation = this.tokenManager.validateToken(token);
          
          if (validation.isValid && !validation.isExpired) {
            this.currentUserSignal.set(user);
          } else {
            // Token expired or invalid, clear session
            this.clearSession();
          }
        } else {
          // No token found, clear session
          this.clearSession();
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.clearSession();
      }
    }
  }

  private clearSession(): void {
    // Clear token using TokenManagerService
    this.tokenManager.clearToken();
    
    this.storage.removeItem(this.USER_KEY);
    this.currentUserSignal.set(null);
    this.stopTokenRefreshTimer();
    
    // Also clear sessionStorage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('userToken');
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('dbName');
    }
  }

  private startTokenRefreshTimer(): void {
    // Token refresh timer removed - using accessToken only
    // Token expiry will be handled by server validation
  }

  private stopTokenRefreshTimer(): void {
    if (this.tokenRefreshTimer) {
      this.tokenRefreshTimer.unsubscribe();
      this.tokenRefreshTimer = null;
    }
  }

  /**
   * Get PDPA consent information for employee
   * @param employeeId - Employee ID
   * @returns Observable with employee consent and PDPA data
   */
  getPdpa(employeeId: string): Observable<{ employeeConsent: unknown; pdpa: unknown }> {
    // ApiService already handles baseUrl (environment.jbossUrl), so only pass the endpoint path
    return this.apiService.get<{ employeeConsent: unknown; pdpa: unknown }>(
      `${environment.apiEndpoints.employeeView}/pdpa/employee-consent/${employeeId}`
    ).pipe(
      map((response: ApiResponse<{ employeeConsent: unknown; pdpa: unknown }>) => {
        return response.data || (response as unknown as { employeeConsent: unknown; pdpa: unknown });
      }),
      catchError(error => {
        console.error('Error getting PDPA consent:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Save PDPA consent
   * @param body - Request body with model containing version and employeeId
   * @returns Promise with response
   */
  savePdpa(body: { model: { version: number; employeeId: string } }): Observable<ApiResponse<unknown>> {
    // ApiService already handles baseUrl (environment.jbossUrl), so only pass the endpoint path
    return this.apiService.post<unknown>(
      `${environment.apiEndpoints.employeeView}/pdpa/employee-consent`,
      body
    );
  }
}
