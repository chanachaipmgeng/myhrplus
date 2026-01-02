import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './handlers/global-error-handler';

import { HasRoleDirective } from './directives/has-role.directive';
import { HasPermissionDirective } from './directives/has-permission.directive';

/**
 * CoreModule
 * 
 * Provides core directives and modules for the application.
 * 
 * Note: All services use `providedIn: 'root'` and should NOT be declared here
 * to avoid duplicate service instances and follow Angular best practices.
 */
@NgModule({
  declarations: [
    HasRoleDirective,
    HasPermissionDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HasRoleDirective,
    HasPermissionDirective
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

