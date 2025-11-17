import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WelfareService, BenefitEnrollment, WelfareBenefit } from '../services/welfare.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-benefit-enrollment',
  templateUrl: './benefit-enrollment.component.html',
  styleUrls: ['./benefit-enrollment.component.scss']
})
export class BenefitEnrollmentComponent implements OnInit {
  enrollmentForm: FormGroup;
  benefit: WelfareBenefit | null = null;
  myEnrollments: BenefitEnrollment[] = [];
  loading = false;
  activeTab = 0;
  benefitId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private welfareService: WelfareService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.enrollmentForm = this.fb.group({
      effectiveDate: ['', [Validators.required]],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['benefitId']) {
        this.benefitId = params['benefitId'];
        this.loadBenefitDetails(params['benefitId']);
      }
    });
    this.loadMyEnrollments();
  }

  loadBenefitDetails(benefitId: string): void {
    this.loading = true;
    this.welfareService.getBenefit(benefitId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.benefit = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading benefit details:', error);
        this.loading = false;
      }
    });
  }

  loadMyEnrollments(): void {
    this.loading = true;
    this.welfareService.getMyEnrollments().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.myEnrollments = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading enrollments:', error);
        this.loading = false;
      }
    });
  }

  submitEnrollment(): void {
    if (!this.benefitId) {
      this.notificationService.showWarning('Please select a benefit first');
      return;
    }

    if (this.enrollmentForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Enroll in Benefit',
          message: `Are you sure you want to enroll in "${this.benefit?.benefitName}"?`,
          confirmText: 'Enroll',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.enrollBenefit();
        }
      });
    }
  }

  enrollBenefit(): void {
    if (!this.benefitId) return;

    this.loading = true;
    const enrollmentData = this.enrollmentForm.value;
    
    this.welfareService.enrollInBenefit(this.benefitId, enrollmentData).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Successfully enrolled in benefit');
          this.loadMyEnrollments();
          this.enrollmentForm.reset();
          if (this.benefit) {
            this.router.navigate(['/welfare/benefits']);
          }
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to enroll in benefit');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to enroll in benefit');
        this.loading = false;
      }
    });
  }

  cancelEnrollment(enrollment: BenefitEnrollment): void {
    if (!enrollment.enrollmentId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Cancel Enrollment',
        message: 'Are you sure you want to cancel this enrollment?',
        confirmText: 'Cancel Enrollment',
        cancelText: 'Keep Enrollment'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.welfareService.cancelEnrollment(enrollment.enrollmentId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Enrollment cancelled successfully');
              this.loadMyEnrollments();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to cancel enrollment');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to cancel enrollment');
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'pending': 'accent',
      'active': 'primary',
      'cancelled': 'warn',
      'expired': ''
    };
    return statusColors[status.toLowerCase()] || '';
  }

  navigateToBenefits(): void {
    this.router.navigate(['/welfare/benefits']);
  }

  enrollmentColumns = [
    { key: 'benefitId', label: 'Benefit ID' },
    { key: 'enrollmentDate', label: 'Enrollment Date', type: 'date' as const },
    { key: 'effectiveDate', label: 'Effective Date', type: 'date' as const },
    { key: 'expiryDate', label: 'Expiry Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

