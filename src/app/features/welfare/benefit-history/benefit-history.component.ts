import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelfareService, BenefitHistory } from '../services/welfare.service';

@Component({
  selector: 'app-benefit-history',
  templateUrl: './benefit-history.component.html',
  styleUrls: ['./benefit-history.component.scss']
})
export class BenefitHistoryComponent implements OnInit {
  benefitHistory: BenefitHistory[] = [];
  loading = false;
  selectedYear = new Date().getFullYear();
  selectedBenefit = '';

  benefits: string[] = [];

  constructor(
    private welfareService: WelfareService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBenefitHistory();
  }

  loadBenefitHistory(): void {
    this.loading = true;
    const params: any = {
      year: this.selectedYear
    };
    if (this.selectedBenefit) {
      params.benefitId = this.selectedBenefit;
    }

    this.welfareService.getBenefitHistory(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.benefitHistory = response.data;
          this.extractBenefits();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading benefit history:', error);
        this.loading = false;
      }
    });
  }

  extractBenefits(): void {
    const benefitSet = new Set<string>();
    this.benefitHistory.forEach(history => {
      if (history.benefitName) {
        benefitSet.add(history.benefitName);
      }
    });
    this.benefits = Array.from(benefitSet).sort();
  }

  onFilterChange(): void {
    this.loadBenefitHistory();
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'active': 'primary',
      'used': 'accent',
      'expired': 'warn',
      'cancelled': ''
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

  historyColumns = [
    { key: 'benefitName', label: 'Benefit Name' },
    { key: 'enrollmentDate', label: 'Enrollment Date', type: 'date' as const },
    { key: 'usageDate', label: 'Usage Date', type: 'date' as const },
    { key: 'amount', label: 'Amount', type: 'currency' as const },
    { key: 'quantity', label: 'Quantity' },
    { key: 'status', label: 'Status' }
  ];
}

