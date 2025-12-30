import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService, DatabaseModel } from '@core/services';
import { NotificationService } from '@core/services';
import { HttpErrorResponse } from '@angular/common/http';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassSelectComponent } from '@shared/components/glass-select/glass-select.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    GlassInputComponent,
    GlassSelectComponent,
    GlassButtonComponent,
    AlertComponent,
    IconComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private translate = inject(TranslateService);
  
  forgotPasswordForm: FormGroup;
  loading = false;
  dbList: DatabaseModel[] = [];
  dbSelected: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  
  // For reusable components
  username: string = '';
  email: string = '';
  dbSelectOptions: Array<{ value: string; label: string; disabled?: boolean }> = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.forgotPasswordForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dbName: ['']
    });
  }

  ngOnInit(): void {
    // Load database list
    this.loadDatabases();
  }

  loadDatabases(): void {
    this.authService.getDatabase().subscribe({
      next: (result) => {
        this.dbList = result;
        // Prepare data for Glass Select
        this.dbSelectOptions = result.map(db => ({
          value: db.db,
          label: db.dbDisplay || db.dbName || db.db,
          disabled: false
        }));

        if (result && result.length > 0) {
          this.dbSelected = result[0].db;
          this.forgotPasswordForm.patchValue({ dbName: result[0].db });
        }
      },
      error: (error: HttpErrorResponse) => {
        console.warn('Failed to load databases:', error);
        this.errorMessage = error.message || 'Failed to load database list';
        this.notificationService.showError(this.errorMessage);
      }
    });
  }

  onDbChangeSelect(value: string): void {
    if (value) {
      this.dbSelected = value;
      this.forgotPasswordForm.patchValue({ dbName: value });
    }
  }

  getEmailErrorMessage(): string {
    const emailControl = this.forgotPasswordForm.get('email');
    if (emailControl?.hasError('email') && emailControl?.touched) {
      return this.translate.instant('auth.forgotPassword.error.emailInvalid');
    }
    if (!this.email && emailControl?.touched && !emailControl?.hasError('email')) {
      return this.translate.instant('auth.forgotPassword.error.emailRequired');
    }
    return '';
  }

  onUsernameChange(value: string): void {
    this.username = value;
    this.forgotPasswordForm.patchValue({ username: value });
  }

  onEmailChange(value: string): void {
    this.email = value;
    this.forgotPasswordForm.patchValue({ email: value });
  }

  onBackToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  formatErrorMessage(message: string): string {
    if (!message) return '';
    return message.replace(/\n/g, '<br>');
  }

  onSubmit(): void {
    // Update form values from component properties
    this.forgotPasswordForm.patchValue({
      username: this.username,
      email: this.email,
      dbName: this.dbSelected
    });

    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.authService.setMailForgetPassword(
        this.username,
        this.email,
        this.dbSelected || this.forgotPasswordForm.value.dbName
      )
        .then((result: any) => {
          console.log('Forgot password result:', result);
          
          if (result.status) {
            this.successMessage = this.translate.instant('auth.forgotPassword.successMessage');
            this.notificationService.showSuccess(this.successMessage);
            // Clear form after success
            this.forgotPasswordForm.reset();
            this.username = '';
            this.email = '';
            
            // Auto redirect to login after 3 seconds
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, 3000);
          } else {
            // Handle error messages from API
            const errorMessages = [];
            if (result.msgEmail) errorMessages.push(result.msgEmail);
            if (result.msgEmployeeid) errorMessages.push(result.msgEmployeeid);
            if (result.msgUsername) errorMessages.push(result.msgUsername);
            
            this.errorMessage = errorMessages.length > 0 
              ? errorMessages.join('\n') 
              : this.translate.instant('auth.forgotPassword.error.sendFailed');
            this.notificationService.showError(this.errorMessage);
          }
          
          this.loading = false;
        })
        .catch((error: HttpErrorResponse) => {
          console.error('Forgot password failed. Reason:', error);
          this.loading = false;

          if (error.status === 401) {
            this.errorMessage = this.translate.instant('auth.forgotPassword.error.invalidCredentials');
            this.notificationService.showError(this.errorMessage);
          } else {
            this.errorMessage = error.message || this.translate.instant('auth.forgotPassword.error.sendFailed');
            this.notificationService.showError(this.errorMessage);
          }
        });
    } else {
      this.notificationService.showWarning(this.translate.instant('auth.forgotPassword.error.incompleteData'));
    }
  }
}

