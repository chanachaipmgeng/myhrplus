/**
 * Models Index
 * Central export for all models
 *
 * IVAP Models - Recreated from doc-backend/angular-models.ts
 */

// Common models (types, pagination, errors)
export * from './common.models';

// Authentication models
export * from './authentication.models';

// Company models
export * from './company.models';

// Employee models
export * from './employee.models';

// Time & Attendance models
export * from './time-attendance.models';

// Device & Door models
export * from './device-door.models';

// Verification models
export * from './verification.models';

// Visitor & Guest models
export * from './visitor-guest.models';

// Event models
export * from './event.models';

// Vehicle & Parking models
export * from './vehicle-parking.models';

// Analytics & Monitoring models
export * from './analytics.models';

// Legacy models (kept for backward compatibility)
export * from './swaplangCode.model';
export * from './menu.model';

// IVAP Models (from previous structure - deprecated, use root models instead)
// Note: These are kept for backward compatibility but should be migrated to root models
// export * from './ivap'; // Commented out to avoid duplicate exports
