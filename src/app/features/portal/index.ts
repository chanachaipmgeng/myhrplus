/**
 * Portal Feature Module - Public API
 * 
 * This file exports the public API for the portal feature module.
 * Use this file for cleaner imports instead of relative paths.
 * 
 * @example
 * ```typescript
 * // Instead of:
 * import { PortalModule } from './features/portal/portal.module';
 * 
 * // Use:
 * import { PortalModule } from '@features/portal';
 * ```
 */

// Module exports
export * from './portal.module';
export * from './portal-routing.module';

// Component exports
export * from './portal-home/portal-home.component';

