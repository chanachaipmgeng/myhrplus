import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, LoginRequest, DatabaseModel } from '@core/services';
import { NotificationService } from '@core/services';
import { MenuService } from '@core/services';
import { EmployeeService, SetCharacter } from '@core/services';
import { SwaplangCodeService } from '@core/services';
import { StorageService } from '@core/services';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '@core/services';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import jwt_decode from 'jwt-decode';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
import { STORAGE_KEYS } from '@core/constants/storage-keys.constant';
import { Language, isSupportedLanguage, DEFAULT_LANGUAGE, getFlagPath } from '@core/types/language.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string = '';
  dbList: DatabaseModel[] = [];
  dbSelected: string = '';
  errorMessage: string = '';
  rememberMe: boolean = false;

  // For reusable components
  username: string = '';
  password: string = '';
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
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private menuService: MenuService,
    private employeeService: EmployeeService,
    private swapLangService: SwaplangCodeService,
    private translate: TranslateService,
    private storageService: StorageService,
    private themeService: ThemeService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      dbName: ['']
    });
  }

  ngOnInit(): void {
    // Get return url from route parameters or default to '/home' (Home)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    // If already logged in, redirect
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }

    // Load saved credentials if Remember Me was checked
    this.loadRememberedCredentials();

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

  loadRememberedCredentials(): void {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';

    if (rememberMe && savedUsername) {
      this.username = savedUsername;
      this.password = savedPassword || '';
      this.rememberMe = true;
      this.loginForm.patchValue({
        username: savedUsername,
        password: savedPassword || ''
      });
    }
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
          this.loginForm.patchValue({ dbName: result[0].db });
        }
      },
      error: (error: HttpErrorResponse) => {
        console.warn('Failed to load databases:', error);
        this.errorMessage = error.message || 'Failed to load database list';
      }
    });
  }

  onDbChangeSelect(value: string): void {
    if (value) {
      this.dbSelected = value;
      this.loginForm.patchValue({ dbName: value });
    }
  }

  onForgotPassword(): void {
    // Navigate to forgot password page
    this.router.navigate(['/auth/forgot-password']);
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

  onUsernameChange(value: string): void {
    this.username = value;
    this.loginForm.patchValue({ username: value });
  }

  onPasswordChange(value: string): void {
    this.password = value;
    this.loginForm.patchValue({ password: value });
  }

  onPasswordKeyUp(event: KeyboardEvent): void {
    const username = this.loginForm.get('username')?.value || '';
    const password = this.loginForm.get('password')?.value || '';
    if (event.key === 'Enter' && username && password) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    // Get values from form controls
    const username = this.loginForm.get('username')?.value || '';
    const password = this.loginForm.get('password')?.value || '';
    const dbName = this.loginForm.get('dbName')?.value || this.dbSelected;

    // Update component properties for consistency
    this.username = username;
    this.password = password;

    // Update form values
    this.loginForm.patchValue({
      username: username,
      password: password,
      dbName: dbName
    });

    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      // Clear session if username changed
      const currentUsername = sessionStorage.getItem('userName');
      if (currentUsername && currentUsername !== username) {
        sessionStorage.clear();
      }

      const credentials: LoginRequest = {
        username: username,
        password: password,
        dbName: dbName,
        dbcomp: '100',
        lang: 'th'
      };

      this.authService.login(credentials)
        .then((result: any) => {
          console.log('Login successful. Result:', result);

          if (result && result.accessToken) {
            // Save userName to sessionStorage
            sessionStorage.setItem('userName', username);

            // Save credentials if Remember Me is checked
            if (this.rememberMe) {
              localStorage.setItem('savedUsername', username);
              localStorage.setItem('savedPassword', password);
              localStorage.setItem('rememberMe', 'true');
            } else {
              localStorage.removeItem('savedUsername');
              localStorage.removeItem('savedPassword');
              localStorage.removeItem('rememberMe');
            }

            // Wait for token to be set in TokenManagerService before calling API
            // Use Promise to ensure token is available in interceptor
            Promise.resolve().then(() => {
              // Verify token is set before calling API
              const token = this.authService.getToken();
              if (!token) {
                console.error('Token not set after login');
                this.loading = false;
                this.errorMessage = 'Failed to set authentication token';
                this.notificationService.showError(this.errorMessage);
                return;
              }

              // Double check token is available in sessionStorage (for interceptor fallback)
              const sessionToken = sessionStorage.getItem('userToken');
              if (!sessionToken) {
                console.warn('Token not in sessionStorage, waiting...');
                setTimeout(() => {
                  this.callGetSetPass(result);
                }, 50);
                return;
              }

              // Token is ready, call API
              this.callGetSetPass(result);
            });
          } else {
            this.loading = false;
            this.errorMessage = 'Login failed: No access token received';
            this.notificationService.showError(this.errorMessage);
          }
        })
        .catch((error: HttpErrorResponse) => {
          console.error('Login failed. Reason:', error);
          this.loading = false;

          if (error.status === 401) {
            this.errorMessage = 'Invalid Username or Password';
            this.notificationService.showError(this.errorMessage);
          } else {
            this.errorMessage = error.message || 'Login failed. Please try again.';
            this.notificationService.showError(this.errorMessage);
          }

          this.loginForm.patchValue({ password: '' });
        });
    } else {
      this.notificationService.showWarning('Please fill in all required fields');
    }
  }

  /**
   * Call getSetPass API after token is verified
   */
  private callGetSetPass(result: any): void {
    // Check getSetPass for defaultpage and accountactive
    this.employeeService.getSetPass()
              .subscribe({
                next: (manageResult: SetCharacter) => {
                  // If defaultpage is '1', redirect to JSP page (legacy behavior)
                  if (manageResult.defaultpage === '1') {
                    const userToken = result.accessToken;
                    const lang = this.translate.currentLang === 'th' ? 'tha' : 'eng';
                    const urlHr = environment.jbossUrl;
                    window.location.href = `${urlHr}/TOKENVERFY.jsp?t=${userToken}&lang=${lang}`;
                    return;
                  }

                  // Decode token to check accountactive using jwt_decode
                  try {
                    const decodedToken = jwt_decode<any>(result.accessToken);
                    const accountActive = decodedToken.accountactive;
console.log(decodedToken); console.log(accountActive);
                    if (accountActive) {
                      if (accountActive === 'true') {
                        // Account is active - load swap language and navigate
                        this.swapLangService.getList().subscribe(swapResult => {
                          this.swapLangService.saveSwaplang(swapResult);
                          this.notificationService.showSuccess('Login successful');
                          this.menuService.clearCache();
                          this.router.navigate(['/home']);
                        }, (error) => {
                          console.error('Error loading swap language:', error);
                          // Proceed anyway
                          this.notificationService.showSuccess('Login successful');
                          this.menuService.clearCache();
                          this.router.navigate(['/home']);
                        });
                      } else if (accountActive === 'waiting') {
                        this.loading = false;
                        this.loginForm.patchValue({ password: '' });
                        this.errorMessage = 'Please wait for a moment to log in again.';
                        this.notificationService.showWarning(this.errorMessage);
                      } else {
                        this.loading = false;
                        this.loginForm.patchValue({ password: '' });
                        this.errorMessage = 'Please contact Admin';
                        this.notificationService.showError(this.errorMessage);
                      }
                    } else {
                      // No accountactive field - load swap language and navigate to company profile
                      this.swapLangService.getList().subscribe(swapResult => {
                        this.swapLangService.saveSwaplang(swapResult);
                        this.notificationService.showSuccess('Login successful');
                        this.menuService.clearCache();
                        // Navigate to company module as per backend management system
                        this.router.navigate(['/company']);
                      }, (error) => {
                        console.error('Error loading swap language:', error);
                        // Proceed anyway
                        this.notificationService.showSuccess('Login successful');
                        this.menuService.clearCache();
                        this.router.navigate(['/company']);
                      });
                    }
                  } catch (error) {
                    console.error('Error decoding token:', error);
                    // Proceed anyway - load swap language and navigate
                    this.swapLangService.getList().subscribe(swapResult => {
                      this.swapLangService.saveSwaplang(swapResult);
                      this.notificationService.showSuccess('Login successful');
                      this.menuService.clearCache();
                      this.router.navigate(['/home']);
                    }, (error) => {
                      console.error('Error loading swap language:', error);
                      // Proceed anyway
                      this.notificationService.showSuccess('Login successful');
                      this.menuService.clearCache();
                      this.router.navigate(['/home']);
                    });
                  }
                },
                error: (error: unknown) => {
                  console.error('Error getting setPass:', error);
                  // Proceed anyway if getSetPass fails - load swap language and navigate
                  this.swapLangService.getList().subscribe(swapResult => {
                    this.swapLangService.saveSwaplang(swapResult);
                    this.notificationService.showSuccess('Login successful');
                    this.menuService.clearCache();
                    this.router.navigate(['/home']);
                  }, (error) => {
                    console.error('Error loading swap language:', error);
                    // Proceed anyway
                    this.notificationService.showSuccess('Login successful');
                    this.menuService.clearCache();
                    this.router.navigate(['/home']);
                  });
                }
              });
  }
}
