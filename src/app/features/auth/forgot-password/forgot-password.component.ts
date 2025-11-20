import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, DatabaseModel } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  dbList: DatabaseModel[] = [];
  dbSelected: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  
  // For Syncfusion components
  username: string = '';
  email: string = '';
  dbFields: object = { text: 'dbDisplay', value: 'db' };
  dbDataSource: any[] = [];

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
        // Prepare data for Syncfusion DropDownList
        this.dbDataSource = result.map(db => ({
          db: db.db,
          dbName: db.dbName,
          dbDisplay: db.dbDisplay || db.dbName || db.db
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

  onDbChange(args: any): void {
    if (args.value) {
      this.dbSelected = args.value;
      this.forgotPasswordForm.patchValue({ dbName: args.value });
    }
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
            this.successMessage = 'ส่งรหัสผ่านไปยังอีเมลสำเร็จแล้ว';
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
              : 'ไม่สามารถส่งรหัสผ่านได้ กรุณาลองใหม่อีกครั้ง';
            this.notificationService.showError(this.errorMessage);
          }
          
          this.loading = false;
        })
        .catch((error: HttpErrorResponse) => {
          console.error('Forgot password failed. Reason:', error);
          this.loading = false;

          if (error.status === 401) {
            this.errorMessage = 'ชื่อผู้ใช้หรืออีเมลไม่ถูกต้อง';
            this.notificationService.showError(this.errorMessage);
          } else {
            this.errorMessage = error.message || 'ไม่สามารถส่งรหัสผ่านได้ กรุณาลองใหม่อีกครั้ง';
            this.notificationService.showError(this.errorMessage);
          }
        });
    } else {
      this.notificationService.showWarning('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }
}

