import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitService, JobApplication, JobPosting } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-application-management',
  templateUrl: './application-management.component.html',
  styleUrls: ['./application-management.component.scss']
})
export class ApplicationManagementComponent implements OnInit {
  applicationForm: FormGroup;
  job: JobPosting | null = null;
  myApplications: JobApplication[] = [];
  allApplications: JobApplication[] = [];
  loading = false;
  activeTab = 0;
  jobId: string | null = null;
  selectedStatus = '';

  statuses = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'reviewing', label: 'Reviewing' },
    { value: 'shortlisted', label: 'Shortlisted' },
    { value: 'interviewed', label: 'Interviewed' },
    { value: 'offered', label: 'Offered' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'withdrawn', label: 'Withdrawn' }
  ];

  constructor(
    private fb: FormBuilder,
    private recruitService: RecruitService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.applicationForm = this.fb.group({
      coverLetter: [''],
      expectedSalary: [''],
      availabilityDate: [''],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['jobId']) {
        this.jobId = params['jobId'];
        this.loadJobDetails(params['jobId']);
      }
    });
    this.loadMyApplications();
    this.loadAllApplications();
  }

  loadJobDetails(jobId: string): void {
    this.loading = true;
    this.recruitService.getJobPosting(jobId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.job = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading job details:', error);
        this.loading = false;
      }
    });
  }

  loadMyApplications(): void {
    this.loading = true;
    this.recruitService.getMyApplications().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.myApplications = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading my applications:', error);
        this.loading = false;
      }
    });
  }

  loadAllApplications(): void {
    const params: any = {};
    if (this.jobId) {
      params.jobId = this.jobId;
    }
    if (this.selectedStatus) {
      params.status = this.selectedStatus;
    }

    this.recruitService.getApplications(this.jobId || undefined, params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.allApplications = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading applications:', error);
      }
    });
  }

  onStatusFilterChange(): void {
    this.loadAllApplications();
  }

  submitApplication(): void {
    if (!this.jobId) {
      this.notificationService.showWarning('Please select a job first');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Submit Application',
        message: `Are you sure you want to apply for "${this.job?.jobTitle}"?`,
        confirmText: 'Submit',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitApplicationData();
      }
    });
  }

  submitApplicationData(): void {
    if (!this.jobId) return;

    this.loading = true;
    const applicationData = this.applicationForm.value;
    
    this.recruitService.applyForJob(this.jobId, applicationData).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Application submitted successfully');
          this.loadMyApplications();
          this.applicationForm.reset();
          if (this.job) {
            this.router.navigate(['/recruit/jobs']);
          }
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit application');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit application');
        this.loading = false;
      }
    });
  }

  updateApplicationStatus(application: JobApplication, status: string): void {
    if (!application.applicationId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Update Application Status',
        message: `Are you sure you want to change the status to "${status}"?`,
        confirmText: 'Update',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruitService.updateApplicationStatus(application.applicationId!, status).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Application status updated successfully');
              this.loadAllApplications();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update status');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update application status');
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'pending': 'accent',
      'reviewing': 'primary',
      'shortlisted': 'primary',
      'interviewed': 'accent',
      'offered': 'primary',
      'accepted': 'primary',
      'rejected': 'warn',
      'withdrawn': ''
    };
    return statusColors[status.toLowerCase()] || '';
  }

  navigateToJobs(): void {
    this.router.navigate(['/recruit/jobs']);
  }

  onActionClick(event: {action: string, row: JobApplication}): void {
    if (event.action === 'view') {
      this.viewApplicationDetails(event.row);
    } else if (event.action === 'update-status') {
      // Handle status update
    }
  }

  viewApplicationDetails(application: JobApplication): void {
    if (application.applicationId) {
      this.router.navigate(['/recruit/applications', application.applicationId]);
    }
  }

  applicationColumns = [
    { key: 'jobTitle', label: 'Job Title' },
    { key: 'applicantName', label: 'Applicant' },
    { key: 'applicationDate', label: 'Application Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

