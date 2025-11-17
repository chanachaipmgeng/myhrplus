import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.getCurrentUser();
    
    if (!user) {
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }

    // Check if route requires specific roles
    const requiredRoles = route.data['roles'] as string[];
    const requiredPermissions = route.data['permissions'] as string[];
    
    // If no role or permission requirements, allow access
    if ((!requiredRoles || requiredRoles.length === 0) && 
        (!requiredPermissions || requiredPermissions.length === 0)) {
      return true;
    }

    // Check roles
    if (requiredRoles && requiredRoles.length > 0) {
      const hasRole = this.authService.hasAnyRole(requiredRoles);
      if (!hasRole) {
        this.notificationService.showError('You do not have permission to access this resource');
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    // Check permissions
    if (requiredPermissions && requiredPermissions.length > 0) {
      const hasPermission = this.authService.hasAnyPermission(requiredPermissions);
      if (!hasPermission) {
        this.notificationService.showError('You do not have permission to access this resource');
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    return true;
  }
}
