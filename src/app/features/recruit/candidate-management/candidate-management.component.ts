import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitService, Candidate } from '../services/recruit.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.scss']
})
export class CandidateManagementComponent implements OnInit {
  candidates: Candidate[] = [];
  filteredCandidates: Candidate[] = [];
  loading = false;
  searchTerm = '';
  selectedStatus = '';
  selectedPosition = '';

  statuses = [
    { value: '', label: 'All Status' },
    { value: 'applied', label: 'Applied' },
    { value: 'shortlisted', label: 'Shortlisted' },
    { value: 'interviewed', label: 'Interviewed' },
    { value: 'offered', label: 'Offered' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'rejected', label: 'Rejected' }
  ];

  positions: string[] = [];

  constructor(
    private recruitService: RecruitService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.loading = true;
    this.recruitService.getCandidates().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.candidates = response.data;
          this.filteredCandidates = this.candidates;
          this.extractPositions();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading candidates:', error);
        this.loading = false;
      }
    });
  }

  extractPositions(): void {
    const positionSet = new Set<string>();
    this.candidates.forEach(candidate => {
      if (candidate.positionApplied) {
        positionSet.add(candidate.positionApplied);
      }
    });
    this.positions = Array.from(positionSet).sort();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredCandidates = this.candidates.filter(candidate => {
      // Search filter
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const matchesSearch = 
          candidate.firstName.toLowerCase().includes(searchLower) ||
          candidate.lastName.toLowerCase().includes(searchLower) ||
          candidate.email.toLowerCase().includes(searchLower) ||
          (candidate.phone && candidate.phone.includes(this.searchTerm));
        if (!matchesSearch) return false;
      }

      // Status filter
      if (this.selectedStatus && candidate.status !== this.selectedStatus) {
        return false;
      }

      // Position filter
      if (this.selectedPosition && candidate.positionApplied !== this.selectedPosition) {
        return false;
      }

      return true;
    });
  }

  viewCandidateDetails(candidate: Candidate): void {
    if (candidate.candidateId) {
      this.router.navigate(['/recruit/candidates', candidate.candidateId]);
    }
  }

  updateCandidateStatus(candidate: Candidate, status: string): void {
    if (!candidate.candidateId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Update Candidate Status',
        message: `Are you sure you want to change the status to "${status}"?`,
        confirmText: 'Update',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruitService.updateCandidateStatus(candidate.candidateId!, status).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Candidate status updated successfully');
              this.loadCandidates();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update status');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update candidate status');
          }
        });
      }
    });
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

  onActionClick(event: {action: string, row: Candidate}): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.viewCandidateDetails(event.row);
    } else if (event.action === 'update-status') {
      // Handle status update - could open a dialog
    }
  }

  candidateColumns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'positionApplied', label: 'Position' },
    { key: 'applicationDate', label: 'Application Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

