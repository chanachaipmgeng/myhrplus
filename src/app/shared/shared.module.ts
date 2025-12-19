import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { FormValidationMessagesComponent } from './components/form-validation-messages/form-validation-messages.component';
// Standalone Components - Import only
import { IconComponent } from './components/icon/icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ErrorStateComponent } from './components/error-state/error-state.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { StepperComponent } from './components/stepper/stepper.component';

// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { LazyImageDirective } from './directives/lazy-image.directive'; // Standalone directive

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

const COMPONENTS = [
  FileUploadComponent,
  AvatarComponent,
  BreadcrumbsComponent,
  DateRangePickerComponent,
  SkeletonLoaderComponent,
  ImageUploadComponent,
  FormValidationMessagesComponent
  // Standalone components are imported/exported separately:
  // ConfirmDialogComponent, ErrorStateComponent, StatusBadgeComponent, StepperComponent
  // SearchFilterComponent, TimelineComponent, NotificationComponent
  // IconComponent, BackToTopComponent, MenuItemComponent
];

const DIRECTIVES = [
  ClickOutsideDirective
  // LazyImageDirective removed - now standalone directive
];

const PIPES = [
  SafeHtmlPipe,
  DateFormatPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
    // BackToTopComponent is standalone, not declared here
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Standalone Components
    SpinnerComponent,
    IconComponent,
    BackToTopComponent,
    MenuItemComponent,
    NotificationComponent,
    SearchFilterComponent,
    TimelineComponent,
    ConfirmDialogComponent,
    ErrorStateComponent,
    StatusBadgeComponent,
    StepperComponent,
    // Standalone Directives
    LazyImageDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    // Standalone Components
    SpinnerComponent,
    IconComponent,
    BackToTopComponent,
    MenuItemComponent,
    NotificationComponent,
    SearchFilterComponent,
    TimelineComponent,
    ConfirmDialogComponent,
    ErrorStateComponent,
    StatusBadgeComponent,
    StepperComponent,
    // Standalone Directives
    LazyImageDirective
  ]
})
export class SharedModule { }
