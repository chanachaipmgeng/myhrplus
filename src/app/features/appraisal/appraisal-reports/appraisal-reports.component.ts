import { Component, OnInit } from '@angular/core';
import { AppraisalService } from '../services/appraisal.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-appraisal-reports',
  templateUrl: './appraisal-reports.component.html',
  styleUrls: ['./appraisal-reports.component.scss']
})
export class AppraisalReportsComponent implements OnInit {
  loading = false;
  activeTab = 0;
  
  // Statistics
  statistics: any = null;
  statisticsParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  };

  // Appraisal Report
  appraisalReportData: any[] = [];
  appraisalReportParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear(),
    status: '',
    department: ''
  };

  constructor(
    private appraisalService: AppraisalService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  }

  loadStatistics(): void {
    this.loading = true;
    this.appraisalService.getAppraisalStatistics(this.statisticsParams).subscribe({
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

  loadAppraisalReport(): void {
    this.loading = true;
    this.appraisalService.getAppraisalReport(this.appraisalReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.appraisalReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading appraisal report:', error);
        this.loading = false;
      }
    });
  }

  exportStatistics(): void {
    this.appraisalService.exportAppraisalReport(this.statisticsParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `appraisal_statistics_${this.statisticsParams.startYear}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  exportAppraisalReport(): void {
    this.appraisalService.exportAppraisalReport(this.appraisalReportParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `appraisal_report.xlsx`;
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

  appraisalReportColumns = [
    { key: 'appraisalId', label: 'Appraisal ID' },
    { key: 'employeeName', label: 'Employee' },
    { key: 'appraisalYear', label: 'Year' },
    { key: 'appraisalPeriod', label: 'Period' },
    { key: 'overallScore', label: 'Score' },
    { key: 'overallRating', label: 'Rating' },
    { key: 'status', label: 'Status' }
  ];
}

