import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitService, JobPosting } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.scss']
})
export class JobPostingsComponent implements OnInit {
  jobPostings: JobPosting[] = [];
  filteredJobPostings: JobPosting[] = [];
  loading = false;
  searchTerm = '';
  selectedDepartment = '';
  selectedStatus = '';
  selectedEmploymentType = '';

  departments: string[] = [];
  employmentTypes = [
    { value: '', label: 'All Types' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' }
  ];

  statuses = [
    { value: '', label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' },
    { value: 'draft', label: 'Draft' }
  ];

  constructor(
    private recruitService: RecruitService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadJobPostings();
  }

  loadJobPostings(): void {
    this.loading = true;
    this.recruitService.getJobPostings().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.jobPostings = response.data;
          this.filteredJobPostings = this.jobPostings;
          this.extractDepartments();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading job postings:', error);
        this.loading = false;
      }
    });
  }

  extractDepartments(): void {
    const departmentSet = new Set<string>();
    this.jobPostings.forEach(job => {
      if (job.department) {
        departmentSet.add(job.department);
      }
    });
    this.departments = Array.from(departmentSet).sort();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredJobPostings = this.jobPostings.filter(job => {
      // Search filter
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const matchesSearch = 
          job.jobTitle.toLowerCase().includes(searchLower) ||
          job.jobCode.toLowerCase().includes(searchLower) ||
          (job.description && job.description.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Department filter
      if (this.selectedDepartment && job.department !== this.selectedDepartment) {
        return false;
      }

      // Status filter
      if (this.selectedStatus && job.status !== this.selectedStatus) {
        return false;
      }

      // Employment type filter
      if (this.selectedEmploymentType && job.employmentType !== this.selectedEmploymentType) {
        return false;
      }

      return true;
    });
  }

  viewJobDetails(job: JobPosting): void {
    if (job.jobId) {
      this.router.navigate(['/recruit/jobs', job.jobId]);
    }
  }

  applyForJob(job: JobPosting): void {
    if (job.jobId) {
      this.router.navigate(['/recruit/apply', job.jobId]);
    }
  }

  isJobOpen(job: JobPosting): boolean {
    if (job.status !== 'open') return false;
    if (job.closingDate) {
      return new Date(job.closingDate) >= new Date();
    }
    return true;
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'open': 'primary',
      'closed': '',
      'draft': 'accent'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      'open': 'Open',
      'closed': 'Closed',
      'draft': 'Draft'
    };
    return statusLabels[status.toLowerCase()] || status;
  }
}

