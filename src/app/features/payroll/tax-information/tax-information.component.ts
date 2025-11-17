import { Component, OnInit } from '@angular/core';
import { PayrollService, TaxInformation } from '../services/payroll.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-tax-information',
  templateUrl: './tax-information.component.html',
  styleUrls: ['./tax-information.component.scss']
})
export class TaxInformationComponent implements OnInit {
  taxInfo: TaxInformation | null = null;
  taxHistory: TaxInformation[] = [];
  loading = false;
  selectedYear = new Date().getFullYear();
  activeTab = 0;

  documentTypes = [
    { value: 'pnd1', label: 'PND1 (Withholding Tax)' },
    { value: 'pnd91', label: 'PND91 (Annual Tax Summary)' },
    { value: 'pnd50', label: 'PND50 (Tax Certificate)' }
  ];

  constructor(
    private payrollService: PayrollService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadTaxInformation();
    this.loadTaxHistory();
  }

  loadTaxInformation(): void {
    this.loading = true;
    this.payrollService.getTaxInformation(this.selectedYear).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.taxInfo = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading tax information:', error);
        this.loading = false;
      }
    });
  }

  loadTaxHistory(): void {
    this.payrollService.getTaxHistory().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.taxHistory = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading tax history:', error);
      }
    });
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.loadTaxInformation();
  }

  downloadTaxDocument(documentType: string): void {
    this.payrollService.downloadTaxDocument(this.selectedYear, documentType).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `tax_${documentType}_${this.selectedYear}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Tax document downloaded successfully');
      },
      error: (error) => {
        console.error('Error downloading tax document:', error);
        this.notificationService.showError('Failed to download tax document');
      }
    });
  }

  getDocumentTypeLabel(type: string): string {
    const docType = this.documentTypes.find(t => t.value === type);
    return docType ? docType.label : type;
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 5; i--) {
      years.push(i);
    }
    return years;
  }

  taxHistoryColumns = [
    { key: 'taxYear', label: 'Year' },
    { key: 'totalIncome', label: 'Total Income', type: 'currency' as const },
    { key: 'totalDeductions', label: 'Total Deductions', type: 'currency' as const },
    { key: 'taxableIncome', label: 'Taxable Income', type: 'currency' as const },
    { key: 'taxPaid', label: 'Tax Paid', type: 'currency' as const }
  ];
}

