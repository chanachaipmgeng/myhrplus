import { Component, OnInit } from '@angular/core';
import { WelfareService } from '../services/welfare.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-welfare-reports',
  templateUrl: './welfare-reports.component.html',
  styleUrls: ['./welfare-reports.component.scss']
})
export class WelfareReportsComponent implements OnInit {
  loading = false;
  activeTab = 0;
  
  // Statistics
  statistics: any = null;
  statisticsParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  };

  // Welfare Report
  welfareReportData: any[] = [];
  welfareReportParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear(),
    category: '',
    status: ''
  };

  constructor(
    private welfareService: WelfareService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  }

  loadStatistics(): void {
    this.loading = true;
    this.welfareService.getWelfareStatistics(this.statisticsParams).subscribe({
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

  loadWelfareReport(): void {
    this.loading = true;
    this.welfareService.getWelfareReport(this.welfareReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.welfareReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading welfare report:', error);
        this.loading = false;
      }
    });
  }

  exportStatistics(): void {
    this.welfareService.exportWelfareReport(this.statisticsParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `welfare_statistics_${this.statisticsParams.startYear}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  exportWelfareReport(): void {
    this.welfareService.exportWelfareReport(this.welfareReportParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `welfare_report.xlsx`;
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

  welfareReportColumns = [
    { key: 'benefitId', label: 'Benefit ID' },
    { key: 'benefitName', label: 'Benefit Name' },
    { key: 'category', label: 'Category' },
    { key: 'totalEnrollments', label: 'Total Enrollments' },
    { key: 'totalCost', label: 'Total Cost', type: 'currency' as const },
    { key: 'status', label: 'Status' }
  ];
}

