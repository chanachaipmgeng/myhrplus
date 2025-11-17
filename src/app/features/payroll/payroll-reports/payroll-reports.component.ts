import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSummary } from '../services/payroll.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-payroll-reports',
  templateUrl: './payroll-reports.component.html',
  styleUrls: ['./payroll-reports.component.scss']
})
export class PayrollReportsComponent implements OnInit {
  loading = false;
  activeTab = 0;
  
  // Summary Report
  summaryData: PayrollSummary | null = null;
  summaryParams = {
    startMonth: new Date().getMonth() + 1,
    startYear: new Date().getFullYear(),
    endMonth: new Date().getMonth() + 1,
    endYear: new Date().getFullYear()
  };

  // Detailed Report
  detailedReportData: any[] = [];
  detailedReportParams = {
    startMonth: new Date().getMonth() + 1,
    startYear: new Date().getFullYear(),
    endMonth: new Date().getMonth() + 1,
    endYear: new Date().getFullYear(),
    department: '',
    employeeId: ''
  };

  constructor(
    private payrollService: PayrollService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  }

  loadSummaryReport(): void {
    this.loading = true;
    this.payrollService.getPayrollSummary(this.summaryParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.summaryData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading summary report:', error);
        this.loading = false;
      }
    });
  }

  loadDetailedReport(): void {
    this.loading = true;
    this.payrollService.getPayrollReport(this.detailedReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.detailedReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading detailed report:', error);
        this.loading = false;
      }
    });
  }

  exportSummaryReport(): void {
    this.payrollService.exportPayrollReport(this.summaryParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `payroll_summary_${this.summaryParams.startYear}_${this.summaryParams.startMonth}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  exportDetailedReport(): void {
    this.payrollService.exportPayrollReport(this.detailedReportParams).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `payroll_detailed_${this.detailedReportParams.startYear}_${this.detailedReportParams.startMonth}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Report exported successfully');
      },
      error: (error) => {
        this.notificationService.showError('Failed to export report');
      }
    });
  }

  getMonthOptions(): number[] {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 3; i--) {
      years.push(i);
    }
    return years;
  }

  getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1] || '';
  }

  detailedReportColumns = [
    { key: 'employeeId', label: 'Employee ID' },
    { key: 'employeeName', label: 'Employee Name' },
    { key: 'periodMonth', label: 'Month' },
    { key: 'periodYear', label: 'Year' },
    { key: 'grossSalary', label: 'Gross Salary', type: 'currency' as const },
    { key: 'deductions', label: 'Deductions', type: 'currency' as const },
    { key: 'tax', label: 'Tax', type: 'currency' as const },
    { key: 'netSalary', label: 'Net Salary', type: 'currency' as const }
  ];
}

