/**
 * Core Constants - Public API
 *
 * This file exports all core constants for cleaner imports.
 * Use this file instead of importing from individual constant files.
 *
 * @example
 * ```typescript
 * // Instead of:
 * import { ROUTES } from '@core/constants/routes.constant';
 * import { STORAGE_KEYS } from '@core/constants/storage-keys.constant';
 *
 * // Use:
 * import { ROUTES, STORAGE_KEYS } from '@core/constants';
 * ```
 *
 * Note: Screen constants files contain duplicate function names.
 * Import them directly if you need specific screen functions:
 * ```typescript
 * import { getAllScreens as getCompanyScreens } from '@core/constants/company-screens.constant';
 * ```
 */

// Core Constants (no conflicts)
export * from './routes.constant';
export * from './storage-keys.constant';
export * from './app-config.constant';
export * from './error-codes.constant';
export * from './log-levels.constant';
export * from './navigation.constant';
export * from './sidebar-modules.constant';
export * from './translation-keys.constant';

// Screen Constants
// Note: These files contain duplicate function names (getAllScreens, getScreenByMenuCode, etc.)
// Import them directly if you need specific screen functions to avoid conflicts:
// import { getAllScreens as getCompanyScreens } from '@core/constants/company-screens.constant';
//
// We only export types/interfaces here, not functions to avoid conflicts
export type {
  ScreenDefinition,
  ScreenCategory,
  ModuleInventory,
  ScreenType
} from '../models/screen.model';

// Re-export screen constants types only (not functions)
// Users should import screen constants directly when needed

