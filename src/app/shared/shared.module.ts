import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
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
  ConfirmDialogComponent,
  FileUploadComponent,
  ErrorStateComponent,
  AvatarComponent,
  StatusBadgeComponent,
  SearchFilterComponent,
  BreadcrumbsComponent,
  StepperComponent,
  DateRangePickerComponent,
  SkeletonLoaderComponent,
  ImageUploadComponent,
  FormValidationMessagesComponent,
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
    RouterModule,
    SpinnerComponent,
    TimelineComponent,
    IconComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    SpinnerComponent,
    TimelineComponent,
    IconComponent
  ]
})
export class SharedModule { }
