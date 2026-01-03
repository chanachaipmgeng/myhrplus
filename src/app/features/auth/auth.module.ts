import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { IconComponent } from '@shared/components/icon/icon.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassSelectComponent } from '@shared/components/glass-select/glass-select.component';
import { GlassCheckboxComponent } from '@shared/components/glass-checkbox/glass-checkbox.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { ThemeToggleComponent } from '@shared/components/theme-toggle/theme-toggle.component';
import { FormValidationMessagesComponent } from '@shared/components/form-validation-messages/form-validation-messages.component';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    // All components are now standalone
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    // Standalone components
    LoginComponent,
    ForgotPasswordComponent,
    UnauthorizedComponent,
    IconComponent,
    GlassInputComponent,
    GlassSelectComponent,
    GlassCheckboxComponent,
    GlassButtonComponent,
    GlassCardComponent,
    AlertComponent,
    ThemeToggleComponent,
    FormValidationMessagesComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }

