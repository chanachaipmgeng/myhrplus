import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
// EmptyStateComponent and RatingComponent are now standalone - removed from declarations
import { ErrorStateComponent } from './components/error-state/error-state.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { FormValidationMessagesComponent } from './components/form-validation-messages/form-validation-messages.component';
import { IconComponent } from './components/icon/icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';

// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

const COMPONENTS = [
  LoadingSpinnerComponent,
  DataTableComponent,
  ConfirmDialogComponent,
  FileUploadComponent,
  // EmptyStateComponent and RatingComponent are standalone - removed from declarations
  ErrorStateComponent,
  AvatarComponent,
  StatusBadgeComponent,
  SearchFilterComponent,
  BreadcrumbsComponent,
  StepperComponent,
  TimelineComponent,
  DateRangePickerComponent,
  SkeletonLoaderComponent,
  ImageUploadComponent,
  FormValidationMessagesComponent,
  IconComponent,
  SpinnerComponent,
  NotificationComponent
];

const DIRECTIVES = [
  ClickOutsideDirective
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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }

