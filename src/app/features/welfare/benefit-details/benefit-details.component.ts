import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelfareService, WelfareBenefit } from '../services/welfare.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-benefit-details',
  templateUrl: './benefit-details.component.html',
  styleUrls: ['./benefit-details.component.scss']
})
export class BenefitDetailsComponent implements OnInit {
  benefit: WelfareBenefit | null = null;
  loading = false;
  isEnrolled = false;

  constructor(
    private welfareService: WelfareService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['benefitId']) {
        this.loadBenefitDetails(params['benefitId']);
        this.checkEnrollment(params['benefitId']);
      }
    });
  }

  loadBenefitDetails(benefitId: string): void {
    this.loading = true;
    this.welfareService.getBenefit(benefitId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.benefit = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading benefit details:', error);
        this.loading = false;
      }
    });
  }

  checkEnrollment(benefitId: string): void {
    this.welfareService.getMyEnrollments({ benefitId }).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.isEnrolled = true;
        }
      },
      error: (error) => {
        console.error('Error checking enrollment:', error);
      }
    });
  }

  enrollInBenefit(): void {
    if (this.benefit?.benefitId) {
      this.router.navigate(['/welfare/enroll', this.benefit.benefitId]);
    }
  }

  isEnrollmentOpen(): boolean {
    if (!this.benefit) return false;
    if (this.benefit.status !== 'active') return false;
    const now = new Date();
    if (this.benefit.enrollmentStartDate && new Date(this.benefit.enrollmentStartDate) > now) {
      return false;
    }
    if (this.benefit.enrollmentEndDate && new Date(this.benefit.enrollmentEndDate) < now) {
      return false;
    }
    return true;
  }

  backToBenefits(): void {
    this.router.navigate(['/welfare/benefits']);
  }
}

