import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService, DatabaseModel } from '@core/services';
import { NotificationService } from '@core/services';
import { StorageService } from '@core/services';
import { HttpErrorResponse } from '@angular/common/http';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassSelectComponent } from '@shared/components/glass-select/glass-select.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ThemeToggleComponent } from '@shared/components/theme-toggle/theme-toggle.component';
import { FormValidationMessagesComponent } from '@shared/components/form-validation-messages/form-validation-messages.component';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { Language, isSupportedLanguage, DEFAULT_LANGUAGE, getFlagPath } from '@core/types/language.type';
import { STORAGE_KEYS } from '@core/constants/storage-keys.constant';

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
    GlassCardComponent,
    AlertComponent,
    IconComponent,
    ThemeToggleComponent,
    FormValidationMessagesComponent,
    ClickOutsideDirective
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

  // Language
  currentLang: Language = 'th';
  showLanguageMenu = false;
  availableLanguages = [
    { code: 'th' as Language, name: 'ไทย', flagPath: getFlagPath('th') },
    { code: 'en' as Language, name: 'English', flagPath: getFlagPath('en') },
    { code: 'lo' as Language, name: 'ລາວ', flagPath: getFlagPath('lo') },
    { code: 'my' as Language, name: 'မြန်မာ', flagPath: getFlagPath('my') },
    { code: 'vi' as Language, name: 'Tiếng Việt', flagPath: getFlagPath('vi') },
    { code: 'zh' as Language, name: '中文', flagPath: getFlagPath('zh') }
  ];

  get currentLanguage() {
    return this.availableLanguages.find(lang => lang.code === this.currentLang) || this.availableLanguages[0];
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private storageService: StorageService
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

    // Initialize language from storage
    const savedLang = this.storageService.getItem<Language>(STORAGE_KEYS.LANGUAGE);
    this.currentLang = (savedLang && isSupportedLanguage(savedLang)) ? savedLang : (this.translate.currentLang as Language) || DEFAULT_LANGUAGE;

    // Subscribe to language changes
    this.translate.onLangChange.subscribe(event => {
      const lang = event.lang as Language;
      if (isSupportedLanguage(lang)) {
        this.currentLang = lang;
      }
    });
  }

  toggleLanguageMenu(): void {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  closeLanguageMenu(): void {
    this.showLanguageMenu = false;
  }

  changeLanguage(language: Language): void {
    // Validate language
    if (!isSupportedLanguage(language)) {
      console.warn(`Language ${language} is not supported.`);
      return;
    }

    // Change language
    this.translate.use(language);

    // Save to storage
    this.storageService.setItem(STORAGE_KEYS.LANGUAGE, language);

    // Update document language attribute
    document.documentElement.setAttribute('lang', language);

    this.currentLang = language;
    this.showLanguageMenu = false;
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

  onUsernameChange(value: string): void {
    this.username = value;
    // Form control will be updated automatically via formControlName
  }

  onEmailChange(value: string): void {
    this.email = value;
    // Form control will be updated automatically via formControlName
  }

  onBackToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  formatErrorMessage(message: string): string {
    if (!message) return '';
    return message.replace(/\n/g, '<br>');
  }

  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    this.forgotPasswordForm.markAllAsTouched();

    // Update form values
    this.forgotPasswordForm.patchValue({
      dbName: this.dbSelected
    });

    // Get values from form controls
    const username = this.forgotPasswordForm.get('username')?.value || '';
    const email = this.forgotPasswordForm.get('email')?.value || '';

    // Update component properties for consistency
    this.username = username;
    this.email = email;

    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.authService.setMailForgetPassword(
        username,
        email,
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

