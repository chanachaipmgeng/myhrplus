/**
 * Auth Feature Module - Public API
 *
 * This file exports the public API for the auth feature module.
 * Use this file for cleaner imports instead of relative paths.
 *
 * @example
 * ```typescript
 * // Instead of:
 * import { AuthModule } from './features/auth/auth.module';
 *
 * // Use:
 * import { AuthModule } from '@features/auth';
 * ```
 */

// Module exports
export * from './auth.module';
export * from './auth-routing.module';

// Component exports
export * from './login/login.component';
export * from './forgot-password/forgot-password.component';
export * from './unauthorized/unauthorized.component';

