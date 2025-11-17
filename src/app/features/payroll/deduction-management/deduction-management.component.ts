import { Component, OnInit } from '@angular/core';
import { PayrollService, Deduction } from '../services/payroll.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-deduction-management',
  templateUrl: './deduction-management.component.html',
  styleUrls: ['./deduction-management.component.scss']
})
export class DeductionManagementComponent implements OnInit {
  deductions: Deduction[] = [];
  deductionTypes: any[] = [];
  loading = false;
  activeTab = 0;
  selectedYear = new Date().getFullYear();

  constructor(
    private payrollService: PayrollService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadDeductions();
    this.loadDeductionTypes();
  }

  loadDeductions(): void {
    this.loading = true;
    const params = {
      year: this.selectedYear
    };

    this.payrollService.getDeductions(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.deductions = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading deductions:', error);
        this.loading = false;
      }
    });
  }

  loadDeductionTypes(): void {
    this.payrollService.getDeductionTypes().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.deductionTypes = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading deduction types:', error);
      }
    });
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.loadDeductions();
  }

  getTotalDeductions(): number {
    return this.deductions.reduce((total, deduction) => total + deduction.amount, 0);
  }

  getActiveDeductions(): Deduction[] {
    return this.deductions.filter(d => d.status === 'active');
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'active': 'primary',
      'inactive': '',
      'completed': 'accent',
      'cancelled': 'warn'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getFrequencyLabel(frequency: string): string {
    const frequencies: { [key: string]: string } = {
      'monthly': 'Monthly',
      'one-time': 'One-time',
      'quarterly': 'Quarterly',
      'yearly': 'Yearly'
    };
    return frequencies[frequency.toLowerCase()] || frequency;
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 3; i--) {
      years.push(i);
    }
    return years;
  }

  deductionColumns = [
    { key: 'deductionType', label: 'Type' },
    { key: 'description', label: 'Description' },
    { key: 'amount', label: 'Amount', type: 'currency' as const },
    { key: 'frequency', label: 'Frequency' },
    { key: 'startDate', label: 'Start Date', type: 'date' as const },
    { key: 'endDate', label: 'End Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

