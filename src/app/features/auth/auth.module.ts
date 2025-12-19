import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { SyncfusionModule } from '../../shared/syncfusion/syncfusion.module';
import { IconComponent } from '../../shared/components/icon/icon.component';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
    // ForgotPasswordComponent and UnauthorizedComponent are now standalone
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    // SharedModule,
    SyncfusionModule,
    IconComponent,
    ForgotPasswordComponent,
    UnauthorizedComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }

