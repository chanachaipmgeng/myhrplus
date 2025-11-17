import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitService, Interview, JobApplication } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-interview-scheduling',
  templateUrl: './interview-scheduling.component.html',
  styleUrls: ['./interview-scheduling.component.scss']
})
export class InterviewSchedulingComponent implements OnInit {
  interviewForm: FormGroup;
  interviews: Interview[] = [];
  applications: JobApplication[] = [];
  loading = false;
  activeTab = 0;
  applicationId: string | null = null;

  interviewTypes = [
    { value: 'phone', label: 'Phone Interview' },
    { value: 'video', label: 'Video Interview' },
    { value: 'in-person', label: 'In-Person Interview' },
    { value: 'panel', label: 'Panel Interview' }
  ];

  constructor(
    private fb: FormBuilder,
    private recruitService: RecruitService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.interviewForm = this.fb.group({
      applicationId: ['', [Validators.required]],
      interviewType: ['', [Validators.required]],
      interviewDate: ['', [Validators.required]],
      interviewTime: ['', [Validators.required]],
      location: [''],
      interviewerId: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['applicationId']) {
        this.applicationId = params['applicationId'];
        this.interviewForm.patchValue({ applicationId: params['applicationId'] });
      }
    });
    this.loadInterviews();
    this.loadApplications();
  }

  loadInterviews(): void {
    this.loading = true;
    const params: any = {};
    if (this.applicationId) {
      params.applicationId = this.applicationId;
    }

    this.recruitService.getInterviews(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.interviews = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading interviews:', error);
        this.loading = false;
      }
    });
  }

  loadApplications(): void {
    this.recruitService.getApplications().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.applications = response.data.filter((app: JobApplication) => 
            app.status === 'shortlisted' || app.status === 'reviewing'
          );
        }
      },
      error: (error) => {
        console.error('Error loading applications:', error);
      }
    });
  }

  submitInterview(): void {
    if (this.interviewForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Schedule Interview',
          message: 'Are you sure you want to schedule this interview?',
          confirmText: 'Schedule',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.scheduleInterviewData();
        }
      });
    }
  }

  scheduleInterviewData(): void {
    this.loading = true;
    const interviewData: Interview = {
      ...this.interviewForm.value,
      status: 'scheduled'
    };
    
    this.recruitService.scheduleInterview(interviewData).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Interview scheduled successfully');
          this.loadInterviews();
          this.interviewForm.reset();
          if (this.applicationId) {
            this.interviewForm.patchValue({ applicationId: this.applicationId });
          }
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to schedule interview');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to schedule interview');
        this.loading = false;
      }
    });
  }

  cancelInterview(interview: Interview): void {
    if (!interview.interviewId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Cancel Interview',
        message: 'Are you sure you want to cancel this interview?',
        confirmText: 'Cancel Interview',
        cancelText: 'Keep Interview'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruitService.cancelInterview(interview.interviewId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Interview cancelled successfully');
              this.loadInterviews();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to cancel interview');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to cancel interview');
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'scheduled': 'primary',
      'completed': 'accent',
      'cancelled': 'warn',
      'rescheduled': 'accent'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getInterviewTypeLabel(type: string): string {
    const typeObj = this.interviewTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  }

  interviewColumns = [
    { key: 'candidateName', label: 'Candidate' },
    { key: 'jobTitle', label: 'Job Title' },
    { key: 'interviewType', label: 'Type' },
    { key: 'interviewDate', label: 'Date', type: 'date' as const },
    { key: 'interviewTime', label: 'Time' },
    { key: 'status', label: 'Status' }
  ];
}

