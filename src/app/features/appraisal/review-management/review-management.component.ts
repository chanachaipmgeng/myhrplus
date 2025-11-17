import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppraisalService, AppraisalReview } from '../services/appraisal.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-review-management',
  templateUrl: './review-management.component.html',
  styleUrls: ['./review-management.component.scss']
})
export class ReviewManagementComponent implements OnInit {
  reviews: AppraisalReview[] = [];
  loading = false;
  appraisalId: string | null = null;
  activeTab = 0;

  constructor(
    private appraisalService: AppraisalService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['appraisalId']) {
        this.appraisalId = params['appraisalId'];
        this.loadReviews(params['appraisalId']);
      }
    });
  }

  loadReviews(appraisalId: string): void {
    this.loading = true;
    this.appraisalService.getReviews(appraisalId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.reviews = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading reviews:', error);
        this.loading = false;
      }
    });
  }

  getReviewsByType(type: string): AppraisalReview[] {
    return this.reviews.filter(review => review.reviewType === type);
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'pending': 'accent',
      'in-progress': 'primary',
      'completed': 'accent',
      'submitted': 'primary'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getReviewTypeLabel(type: string): string {
    const typeLabels: { [key: string]: string } = {
      'self': 'Self Review',
      'manager': 'Manager Review',
      'peer': 'Peer Review',
      '360': '360 Review'
    };
    return typeLabels[type.toLowerCase()] || type;
  }

  viewReviewDetails(review: AppraisalReview): void {
    this.router.navigate(['/appraisal/reviews', review.reviewId]);
  }

  onActionClick(event: {action: string, row: AppraisalReview}): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.viewReviewDetails(event.row);
    }
  }

  reviewColumns = [
    { key: 'reviewType', label: 'Type' },
    { key: 'reviewerName', label: 'Reviewer' },
    { key: 'reviewDate', label: 'Review Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

