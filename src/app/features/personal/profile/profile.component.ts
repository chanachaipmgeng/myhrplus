import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../../../core/services/auth.service';
import { PersonalService, PersonalProfile } from '../services/personal.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  user: User | null = null;
  loading = false;

  profilePicture: string | null = null;
  profilePictureFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private personalService: PersonalService,
    private notificationService: NotificationService
  ) {
    this.profileForm = this.fb.group({
      tfullname: ['', [Validators.required]],
      efullname: [''],
      email: ['', [Validators.email]],
      phone: [''],
      mobile: [''],
      birthDate: [''],
      gender: [''],
      nationality: [''],
      religion: [''],
      maritalStatus: [''],
      idCard: [''],
      idCardExpiryDate: [''],
      passportNo: [''],
      passportExpiryDate: [''],
      emergencyContact: [''],
      emergencyPhone: ['']
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.personalService.getProfile().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const profile = response.data;
          this.profileForm.patchValue(profile);
          if (profile.picture) {
            this.profilePicture = profile.picture;
          }
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.loading = false;
      }
    });
  }

  onPictureSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        this.notificationService.showError('File size must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        this.notificationService.showError('Please select an image file');
        return;
      }
      this.profilePictureFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      this.loading = true;
      const profileData: PersonalProfile = this.profileForm.value;

      // First update profile data
      this.personalService.updateProfile(profileData).subscribe({
        next: (response) => {
          if (response.success) {
            // Then upload picture if selected
            if (this.profilePictureFile) {
              this.personalService.uploadProfilePicture(this.profilePictureFile).subscribe({
                next: (picResponse) => {
                  if (picResponse.success) {
                    this.notificationService.showSuccess('Profile and picture updated successfully');
                    this.profilePictureFile = null;
                    this.loadProfile();
                  } else {
                    this.notificationService.showSuccess('Profile updated, but picture upload failed');
                  }
                  this.loading = false;
                },
                error: (error) => {
                  this.notificationService.showWarning('Profile updated, but picture upload failed');
                  this.loading = false;
                }
              });
            } else {
              this.notificationService.showSuccess('Profile updated successfully');
              this.loading = false;
            }
          } else {
            this.notificationService.showError(response.error?.message || 'Failed to update profile');
            this.loading = false;
          }
        },
        error: (error) => {
          this.notificationService.showError('Failed to update profile');
          this.loading = false;
        }
      });
    }
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      this.loading = true;
      const passwordData = {
        oldPassword: this.passwordForm.value.currentPassword,
        newPassword: this.passwordForm.value.newPassword
      };

      this.personalService.changePassword(passwordData.oldPassword, passwordData.newPassword).subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.showSuccess('Password changed successfully');
            this.passwordForm.reset();
          } else {
            this.notificationService.showError(response.error?.message || 'Failed to change password');
          }
          this.loading = false;
        },
        error: (error) => {
          this.notificationService.showError('Failed to change password');
          this.loading = false;
        }
      });
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }
}

