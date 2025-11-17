import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelfareService, WelfareBenefit } from '../services/welfare.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-welfare-benefits',
  templateUrl: './welfare-benefits.component.html',
  styleUrls: ['./welfare-benefits.component.scss']
})
export class WelfareBenefitsComponent implements OnInit {
  benefits: WelfareBenefit[] = [];
  filteredBenefits: WelfareBenefit[] = [];
  loading = false;
  searchTerm = '';
  selectedCategory = '';
  selectedStatus = '';

  categories: string[] = [];
  statuses = [
    { value: '', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ];

  constructor(
    private welfareService: WelfareService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadBenefits();
  }

  loadBenefits(): void {
    this.loading = true;
    this.welfareService.getBenefits().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.benefits = response.data;
          this.filteredBenefits = this.benefits;
          this.extractCategories();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading benefits:', error);
        this.loading = false;
      }
    });
  }

  extractCategories(): void {
    const categorySet = new Set<string>();
    this.benefits.forEach(benefit => {
      if (benefit.category) {
        categorySet.add(benefit.category);
      }
    });
    this.categories = Array.from(categorySet).sort();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredBenefits = this.benefits.filter(benefit => {
      // Search filter
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const matchesSearch = 
          benefit.benefitName.toLowerCase().includes(searchLower) ||
          benefit.benefitCode.toLowerCase().includes(searchLower) ||
          (benefit.description && benefit.description.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (this.selectedCategory && benefit.category !== this.selectedCategory) {
        return false;
      }

      // Status filter
      if (this.selectedStatus && benefit.status !== this.selectedStatus) {
        return false;
      }

      return true;
    });
  }

  viewBenefitDetails(benefit: WelfareBenefit): void {
    if (benefit.benefitId) {
      this.router.navigate(['/welfare/benefits', benefit.benefitId]);
    }
  }

  enrollInBenefit(benefit: WelfareBenefit): void {
    this.router.navigate(['/welfare/enroll', benefit.benefitId]);
  }

  isEnrollmentOpen(benefit: WelfareBenefit): boolean {
    if (benefit.status !== 'active') return false;
    const now = new Date();
    if (benefit.enrollmentStartDate && new Date(benefit.enrollmentStartDate) > now) {
      return false;
    }
    if (benefit.enrollmentEndDate && new Date(benefit.enrollmentEndDate) < now) {
      return false;
    }
    return true;
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'active': 'primary',
      'inactive': '',
      'pending': 'accent'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      'active': 'Active',
      'inactive': 'Inactive',
      'pending': 'Pending'
    };
    return statusLabels[status.toLowerCase()] || status;
  }
}

