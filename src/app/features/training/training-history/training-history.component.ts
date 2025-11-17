import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService, TrainingHistory } from '../services/training.service';

@Component({
  selector: 'app-training-history',
  templateUrl: './training-history.component.html',
  styleUrls: ['./training-history.component.scss']
})
export class TrainingHistoryComponent implements OnInit {
  trainingHistory: TrainingHistory[] = [];
  loading = false;
  activeTab = 0;
  selectedYear = new Date().getFullYear();
  selectedStatus = '';

  statuses = [
    { value: '', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  constructor(
    private trainingService: TrainingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTrainingHistory();
  }

  loadTrainingHistory(): void {
    this.loading = true;
    const params: any = {
      year: this.selectedYear
    };
    if (this.selectedStatus) {
      params.status = this.selectedStatus;
    }

    this.trainingService.getTrainingHistory(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.trainingHistory = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading training history:', error);
        this.loading = false;
      }
    });
  }

  onFilterChange(): void {
    this.loadTrainingHistory();
  }

  viewTrainingDetails(training: TrainingHistory): void {
    this.router.navigate(['/training/history', training.trainingId]);
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'completed': 'primary',
      'in-progress': 'accent',
      'cancelled': 'warn'
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

  onActionClick(event: {action: string, row: TrainingHistory}): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.viewTrainingDetails(event.row);
    }
  }

  historyColumns = [
    { key: 'courseName', label: 'Course Name' },
    { key: 'title', label: 'Title' },
    { key: 'startDate', label: 'Start Date', type: 'date' as const },
    { key: 'endDate', label: 'End Date', type: 'date' as const },
    { key: 'status', label: 'Status' },
    { key: 'hours', label: 'Hours' },
    { key: 'grade', label: 'Grade' }
  ];
}

