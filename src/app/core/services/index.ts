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

// IVAP Services (legacy - to be migrated)
export * from './ivap';

// New Services (from doc-backend)
export * from './company.service';
export * from './employee.service';
export * from './timestamp.service';
export * from './shift.service';
export * from './leave.service';
export * from './device.service';
export * from './door.service';
export * from './visitor.service';
export * from './guest.service';
export * from './event.service';
export * from './vehicle.service';
export * from './parking.service';

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
