import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitService, JobPosting } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: JobPosting | null = null;
  loading = false;
  hasApplied = false;

  constructor(
    private recruitService: RecruitService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['jobId']) {
        this.loadJobDetails(params['jobId']);
        this.checkApplication(params['jobId']);
      }
    });
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

  checkApplication(jobId: string): void {
    this.recruitService.getMyApplications({ jobId }).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.hasApplied = true;
        }
      },
      error: (error) => {
        console.error('Error checking application:', error);
      }
    });
  }

  applyForJob(): void {
    if (this.job?.jobId) {
      this.router.navigate(['/recruit/apply', this.job.jobId]);
    }
  }

  isJobOpen(): boolean {
    if (!this.job) return false;
    if (this.job.status !== 'open') return false;
    if (this.job.closingDate) {
      return new Date(this.job.closingDate) >= new Date();
    }
    return true;
  }

  backToJobs(): void {
    this.router.navigate(['/recruit/jobs']);
  }
}

