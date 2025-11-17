import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppraisalService, AppraisalHistory } from '../services/appraisal.service';

@Component({
  selector: 'app-appraisal-history',
  templateUrl: './appraisal-history.component.html',
  styleUrls: ['./appraisal-history.component.scss']
})
export class AppraisalHistoryComponent implements OnInit {
  appraisalHistory: AppraisalHistory[] = [];
  loading = false;
  selectedYear = new Date().getFullYear();
  selectedStatus = '';

  statuses = [
    { value: '', label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'submitted', label: 'Submitted' },
    { value: 'in-review', label: 'In Review' },
    { value: 'approved', label: 'Approved' },
    { value: 'completed', label: 'Completed' }
  ];

  constructor(
    private appraisalService: AppraisalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppraisalHistory();
  }

  loadAppraisalHistory(): void {
    this.loading = true;
    const params: any = {
      year: this.selectedYear
    };
    if (this.selectedStatus) {
      params.status = this.selectedStatus;
    }

    this.appraisalService.getAppraisalHistory(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.appraisalHistory = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading appraisal history:', error);
        this.loading = false;
      }
    });
  }

  onFilterChange(): void {
    this.loadAppraisalHistory();
  }

  viewAppraisalDetails(appraisal: AppraisalHistory): void {
    this.router.navigate(['/appraisal', appraisal.appraisalId]);
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'draft': '',
      'submitted': 'primary',
      'in-review': 'accent',
      'approved': 'accent',
      'rejected': 'warn',
      'completed': 'primary'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 5; i--) {
      years.push(i);
    }
    return years;
  }

  onActionClick(event: {action: string, row: AppraisalHistory}): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.viewAppraisalDetails(event.row);
    }
  }

  historyColumns = [
    { key: 'appraisalYear', label: 'Year' },
    { key: 'appraisalPeriod', label: 'Period' },
    { key: 'employeeName', label: 'Employee' },
    { key: 'overallScore', label: 'Overall Score' },
    { key: 'overallRating', label: 'Rating' },
    { key: 'status', label: 'Status' },
    { key: 'completedDate', label: 'Completed Date', type: 'date' as const }
  ];
}

