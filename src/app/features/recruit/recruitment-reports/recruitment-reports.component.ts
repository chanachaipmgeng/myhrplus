import { Component, OnInit } from '@angular/core';
import { RecruitService } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-recruitment-reports',
  templateUrl: './recruitment-reports.component.html',
  styleUrls: ['./recruitment-reports.component.scss']
})
export class RecruitmentReportsComponent implements OnInit {
  loading = false;
  activeTab = 0;
  
  statistics: any = null;
  statisticsParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  };

  recruitmentReportData: any[] = [];
  recruitmentReportParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear(),
    status: '',
    department: ''
  };

  constructor(
    private recruitService: RecruitService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  }

  loadStatistics(): void {
    this.loading = true;
    this.recruitService.getRecruitmentStatistics(this.statisticsParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.statistics = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading statistics:', error);
        this.loading = false;
      }
    });
  }

  loadRecruitmentReport(): void {
    this.loading = true;
    this.recruitService.getRecruitmentReport(this.recruitmentReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.recruitmentReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recruitment report:', error);
        this.loading = false;
      }
    });
  }

  exportStatistics(): void {
    this.recruitService.exportRecruitmentReport(this.statisticsParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `recruitment_statistics_${this.statisticsParams.startYear}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  exportRecruitmentReport(): void {
    this.recruitService.exportRecruitmentReport(this.recruitmentReportParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `recruitment_report.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 5; i--) {
      years.push(i);
    }
    return years;
  }

  recruitmentReportColumns = [
    { key: 'jobId', label: 'Job ID' },
    { key: 'jobTitle', label: 'Job Title' },
    { key: 'department', label: 'Department' },
    { key: 'totalApplications', label: 'Total Applications' },
    { key: 'shortlisted', label: 'Shortlisted' },
    { key: 'hired', label: 'Hired' },
    { key: 'status', label: 'Status' }
  ];
}

