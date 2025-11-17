import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, LoginRequest } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string = '';
  companies: any[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private menuService: MenuService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      dbcomp: ['']
    });
  }

  ngOnInit(): void {
    // Get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
    // If already logged in, redirect
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }

    // Load companies if needed
    this.loadCompanies();
  }

  loadCompanies(): void {
    // This would typically come from an API
    // For now, we'll leave it empty or load from a config
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      const credentials: LoginRequest = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Login successful');
            // Clear menu cache to reload with new user permissions
            this.menuService.clearCache();
            this.router.navigate([this.returnUrl]);
          } else {
            this.notificationService.showError(response.message || 'Login failed');
          }
          this.loading = false;
        },
        error: (error) => {
          const errorMessage = error?.error?.message || 'Login failed. Please check your credentials.';
          this.notificationService.showError(errorMessage);
          this.loading = false;
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields');
    }
  }
}
