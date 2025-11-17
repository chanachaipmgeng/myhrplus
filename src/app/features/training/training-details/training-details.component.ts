import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService, Training } from '../services/training.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  training: Training | null = null;
  loading = false;
  isRegistered = false;

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadTrainingDetails(params['id']);
        this.checkRegistration(params['id']);
      }
    });
  }

  loadTrainingDetails(trainingId: string): void {
    this.loading = true;
    this.trainingService.getTrainingDetails(trainingId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.training = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading training details:', error);
        this.loading = false;
      }
    });
  }

  checkRegistration(trainingId: string): void {
    this.trainingService.getMyRegistrations({ trainingId }).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.isRegistered = true;
        }
      },
      error: (error) => {
        console.error('Error checking registration:', error);
      }
    });
  }

  registerForTraining(): void {
    if (!this.training) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Register for Training',
        message: `Are you sure you want to register for "${this.training.courseName}"?`,
        confirmText: 'Register',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitRegistration();
      }
    });
  }

  submitRegistration(): void {
    if (!this.training) return;

    this.loading = true;
    this.trainingService.registerForTraining(this.training.trainingId).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Successfully registered for training');
          this.isRegistered = true;
          this.router.navigate(['/training/my-registrations']);
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

  isRegistrationOpen(): boolean {
    if (!this.training) return false;
    if (this.training.status !== 'open') return false;
    if (this.training.maxParticipants && this.training.currentParticipants && 
        this.training.currentParticipants >= this.training.maxParticipants) {
      return false;
    }
    const now = new Date();
    if (this.training.registrationStartDate && new Date(this.training.registrationStartDate) > now) {
      return false;
    }
    if (this.training.registrationEndDate && new Date(this.training.registrationEndDate) < now) {
      return false;
    }
    return true;
  }

  backToCatalog(): void {
    this.router.navigate(['/training/catalog']);
  }
}

