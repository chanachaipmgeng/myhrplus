import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitService, Candidate } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  candidate: Candidate | null = null;
  loading = false;

  constructor(
    private recruitService: RecruitService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['candidateId']) {
        this.loadCandidateDetails(params['candidateId']);
      }
    });
  }

  loadCandidateDetails(candidateId: string): void {
    this.loading = true;
    this.recruitService.getCandidate(candidateId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.candidate = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading candidate details:', error);
        this.loading = false;
      }
    });
  }

  backToCandidates(): void {
    this.router.navigate(['/recruit/candidates']);
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'applied': 'accent',
      'shortlisted': 'primary',
      'interviewed': 'primary',
      'offered': 'primary',
      'accepted': 'primary',
      'rejected': 'warn'
    };
    return statusColors[status.toLowerCase()] || '';
  }
}

