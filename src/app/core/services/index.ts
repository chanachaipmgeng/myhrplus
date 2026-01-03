/**
 * Core Services - Public API
 *
 * This file exports all core services for cleaner imports.
 * IVAP Services - Cleaned up to only include essential core services
 *
 * @example
 * ```typescript
 * // Instead of:
 * import { ApiService } from '@core/services/api.service';
 * import { AuthService } from '@core/services/auth.service';
 *
 * // Use:
 * import { ApiService, AuthService } from '@core/services';
 * ```
 */

// API Services
export * from './api.service';
export * from './base-api.service';

// Auth Services
export * from './auth.service';
export * from './token-manager.service';
export * from './user-context.service';

// IVAP Services
export * from './ivap-company.service';
export * from './ivap-employee.service';
export * from './ivap-visitor.service';
export * from './ivap-guest.service';
export * from './ivap-event.service';
export * from './ivap-vehicle.service';
export * from './ivap-parking.service';
export * from './ivap-device.service';
export * from './ivap-door.service';
export * from './ivap-timestamp.service';
export * from './ivap-shift.service';
export * from './ivap-leave.service';

// UI Services
export * from './notification.service';
export * from './dialog.service';
export * from './loading.service';
export * from './layout.service';
export * from './nav.service';
export * from './menu.service';
export * from './menu-context.service';
export * from './theme.service';
export * from './dashboard-preferences.service';

// Utility Services
export * from './cache.service';
export * from './storage.service';
export * from './encryption.service';
export * from './field-masking.service';
export * from './device-detection.service';
export * from './swaplang-code.service';

// System Services
export * from './error.service';
export * from './log-history.service';
export * from './monitoring.service';
export * from './idle-timeout.service';
