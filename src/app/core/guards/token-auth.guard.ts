import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Get token from route parameters
    const token = route.params['token'];
    const page = route.params['page'];
    const lang = route.params['lang'];
    const moduleName = route.params['moduleName'];

    if (!token) {
      console.warn('TokenAuthGuard: No token provided in URL');
      this.router.navigate(['/auth/login']);
      return false;
    }

    try {
      // Decode JWT token
      const decodedToken = jwt_decode<any>(token);

      // Validate token structure
      if (!decodedToken || !decodedToken.sub) {
        throw new Error('Invalid token structure');
      }

      // Check if token is expired
      if (this.isTokenExpired(token)) {
        console.warn('TokenAuthGuard: Token is expired');
        this.router.navigate(['/auth/login'], {
          queryParams: { returnUrl: state.url, expired: 'true' }
        });
        return false;
      }

      // Set language if provided
      if (lang) {
        const langCode = lang === 'tha' || lang === 'th' ? 'th' : 'en';
        this.translate.use(langCode);
        sessionStorage.setItem('Lang', langCode);
      } else {
        // Use language from token if available
        const tokenLang = decodedToken.lang;
        if (tokenLang) {
          const langCode = tokenLang === 'tha' || tokenLang === 'th' ? 'th' : 'en';
          this.translate.use(langCode);
          sessionStorage.setItem('Lang', langCode);
        }
      }

      // Set hiddenHeader if needed (for ESS mode)
      // This can be determined from token or route parameter
      const isEssMode = route.queryParams['ess'] === 'true' || decodedToken.ess === true;
      if (isEssMode) {
        sessionStorage.setItem('hiddenHeader', 'hidden');
      }

      // Store token and user in sessionStorage
      sessionStorage.setItem('userToken', token);
      sessionStorage.setItem('currentUser', JSON.stringify(decodedToken));

      // Set user in AuthService
      this.authService.setUserFromToken(token, decodedToken);

      // Navigation will be handled by the route structure
      // The route already includes MainLayoutComponent with children routes
      // If moduleName and page are provided, they will be handled by the router
      // We store navigation info in sessionStorage for MainLayoutComponent to use
      if (moduleName || page) {
        sessionStorage.setItem('tokenNavModule', moduleName || '');
        sessionStorage.setItem('tokenNavPage', page || '');
      }

      return true;
    } catch (error) {
      console.error('TokenAuthGuard: Error processing token', error);
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: state.url, error: 'invalid_token' }
      });
      return false;
    }
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded = jwt_decode<any>(token);
      if (!decoded.exp) {
        // If no expiration, consider it valid (but warn)
        console.warn('TokenAuthGuard: Token has no expiration claim');
        return false;
      }
      const exp = decoded.exp * 1000; // Convert to milliseconds
      return Date.now() >= exp;
    } catch (error) {
      console.error('TokenAuthGuard: Error checking token expiration', error);
      return true; // If we can't decode, consider it expired
    }
  }
}

