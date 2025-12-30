/**
 * Demo Feature Module - Public API
 *
 * This file exports the public API for the demo feature module.
 * Use this file for cleaner imports instead of relative paths.
 *
 * @example
 * ```typescript
 * // Instead of:
 * import { DemoModule } from './features/demo/demo.module';
 *
 * // Use:
 * import { DemoModule } from '@features/demo';
 * ```
 */

// Module exports
export * from './demo.module';
export * from './demo-routing.module';

// Component exports
export * from './demo.component';
export * from './demo-index/demo-index.component';

// Shared demo components
export * from './shared/code-viewer/code-viewer.component';
export * from './shared/props-table/props-table.component';

