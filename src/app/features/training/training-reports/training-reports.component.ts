import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-training-reports',
  templateUrl: './training-reports.component.html',
  styleUrls: ['./training-reports.component.scss']
})
export class TrainingReportsComponent implements OnInit {
  loading = false;
  activeTab = 0;
  
  // Statistics
  statistics: any = null;
  statisticsParams = {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  };

  // Training Report
  trainingReportData: any[] = [];
  trainingReportParams = {
    startDate: '',
    endDate: '',
    courseId: '',
    status: ''
  };

  constructor(
    private trainingService: TrainingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  }

  loadStatistics(): void {
    this.loading = true;
    this.trainingService.getTrainingStatistics(this.statisticsParams).subscribe({
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

  loadTrainingReport(): void {
    this.loading = true;
    this.trainingService.getTrainingReport(this.trainingReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.trainingReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading training report:', error);
        this.loading = false;
      }
    });
  }

  exportStatistics(): void {
    this.trainingService.exportTrainingReport(this.statisticsParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `training_statistics_${this.statisticsParams.startYear}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  exportTrainingReport(): void {
    this.trainingService.exportTrainingReport(this.trainingReportParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `training_report.xlsx`;
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

  trainingReportColumns = [
    { key: 'trainingId', label: 'Training ID' },
    { key: 'courseName', label: 'Course Name' },
    { key: 'startDate', label: 'Start Date', type: 'date' as const },
    { key: 'endDate', label: 'End Date', type: 'date' as const },
    { key: 'participants', label: 'Participants' },
    { key: 'status', label: 'Status' }
  ];
}

