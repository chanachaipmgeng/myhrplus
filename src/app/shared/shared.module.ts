import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Legacy Non-Standalone Components (to be migrated to standalone)
import { AvatarComponent } from './components/avatar/avatar.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';

// Standalone Components used by legacy components
import { IconComponent } from './components/icon/icon.component';

// Directives (Standalone)
import { ClickOutsideDirective } from './directives/click-outside.directive';

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

/**
 * Shared Module
 *
 * Legacy module for non-standalone components, directives, and pipes.
 *
 * Note: Most components are now standalone. For standalone components, use:
 * - Import directly: `import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';`
 * - Or use SharedStandaloneModule: `import { SharedStandaloneModule } from '@shared/shared-standalone.module';`
 *
 * This module will be deprecated once all components are migrated to standalone.
 */
const LEGACY_COMPONENTS = [
  AvatarComponent,
  DateRangePickerComponent,
  SkeletonLoaderComponent
];

// ClickOutsideDirective is now standalone, import it instead of declaring

const PIPES = [
  SafeHtmlPipe,
  DateFormatPipe
];

@NgModule({
  declarations: [
    ...LEGACY_COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Standalone components used by legacy components
    IconComponent,
    // Standalone directives
    ClickOutsideDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...LEGACY_COMPONENTS,
    ...PIPES,
    // Export standalone components for use in legacy components
    IconComponent,
    // Export standalone directives
    ClickOutsideDirective
  ]
})
export class SharedModule { }
