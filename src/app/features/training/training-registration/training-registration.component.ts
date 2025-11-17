import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService, TrainingRegistration } from '../services/training.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-training-registration',
  templateUrl: './training-registration.component.html',
  styleUrls: ['./training-registration.component.scss']
})
export class TrainingRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  training: any = null;
  myRegistrations: TrainingRegistration[] = [];
  loading = false;
  activeTab = 0;

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.registrationForm = this.fb.group({
      trainingId: ['', [Validators.required]],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.registrationForm.patchValue({ trainingId: params['id'] });
        this.loadTrainingDetails(params['id']);
      }
    });
    this.loadMyRegistrations();
  }

  loadTrainingDetails(trainingId: string): void {
    this.trainingService.getTrainingDetails(trainingId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.training = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading training details:', error);
      }
    });
  }

  loadMyRegistrations(): void {
    this.loading = true;
    this.trainingService.getMyRegistrations().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.myRegistrations = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading registrations:', error);
        this.loading = false;
      }
    });
  }

  submitRegistration(): void {
    if (this.registrationForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Register for Training',
          message: 'Are you sure you want to register for this training?',
          confirmText: 'Register',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.registerTraining();
        }
      });
    }
  }

  registerTraining(): void {
    this.loading = true;
    const formValue = this.registrationForm.value;
    
    this.trainingService.registerForTraining(formValue.trainingId, formValue.remarks).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Successfully registered for training');
          this.loadMyRegistrations();
          this.registrationForm.reset();
          if (this.training) {
            this.router.navigate(['/training/catalog']);
          }
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to register for training');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to register for training');
        this.loading = false;
      }
    });
  }

  cancelRegistration(registration: TrainingRegistration): void {
    if (!registration.registrationId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Cancel Registration',
        message: 'Are you sure you want to cancel this registration?',
        confirmText: 'Cancel Registration',
        cancelText: 'Keep Registration'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingService.cancelRegistration(registration.registrationId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Registration cancelled successfully');
              this.loadMyRegistrations();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to cancel registration');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to cancel registration');
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'pending': 'accent',
      'confirmed': 'primary',
      'cancelled': 'warn',
      'completed': 'accent'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  onActionClick(event: {action: string, row: TrainingRegistration}): void {
    if (event.action === 'cancel') {
      this.cancelRegistration(event.row);
    }
  }

  navigateToCatalog(): void {
    this.router.navigate(['/training/catalog']);
  }

  registrationColumns = [
    { key: 'trainingId', label: 'Training ID' },
    { key: 'registrationDate', label: 'Registration Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

