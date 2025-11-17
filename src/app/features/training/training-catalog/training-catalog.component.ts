import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService, Training } from '../services/training.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-training-catalog',
  templateUrl: './training-catalog.component.html',
  styleUrls: ['./training-catalog.component.scss']
})
export class TrainingCatalogComponent implements OnInit {
  trainings: Training[] = [];
  filteredTrainings: Training[] = [];
  loading = false;
  searchTerm = '';
  selectedCategory = '';
  selectedStatus = '';
  selectedDateRange = 'upcoming'; // upcoming, all, past

  categories: string[] = [];
  statuses = [
    { value: '', label: 'All Status' },
    { value: 'open', label: 'Open for Registration' },
    { value: 'full', label: 'Full' },
    { value: 'closed', label: 'Closed' },
    { value: 'completed', label: 'Completed' }
  ];

  dateRanges = [
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'all', label: 'All' },
    { value: 'past', label: 'Past' }
  ];

  constructor(
    private trainingService: TrainingService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadTrainingCatalog();
  }

  loadTrainingCatalog(): void {
    this.loading = true;
    this.trainingService.getTrainingCatalog().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.trainings = response.data;
          this.filteredTrainings = this.trainings;
          this.extractCategories();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading training catalog:', error);
        this.loading = false;
      }
    });
  }

  extractCategories(): void {
    const categorySet = new Set<string>();
    this.trainings.forEach(training => {
      if (training.category) {
        categorySet.add(training.category);
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
    this.filteredTrainings = this.trainings.filter(training => {
      // Search filter
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const matchesSearch = 
          training.courseName.toLowerCase().includes(searchLower) ||
          training.title.toLowerCase().includes(searchLower) ||
          (training.description && training.description.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (this.selectedCategory && training.category !== this.selectedCategory) {
        return false;
      }

      // Status filter
      if (this.selectedStatus && training.status !== this.selectedStatus) {
        return false;
      }

      // Date range filter
      if (this.selectedDateRange === 'upcoming') {
        return new Date(training.startDate) >= new Date();
      } else if (this.selectedDateRange === 'past') {
        return new Date(training.endDate) < new Date();
      }

      return true;
    });
  }

  viewTrainingDetails(training: Training): void {
    this.router.navigate(['/training/catalog', training.trainingId]);
  }

  registerForTraining(training: Training): void {
    this.router.navigate(['/training/register', training.trainingId]);
  }

  isRegistrationOpen(training: Training): boolean {
    if (training.status !== 'open') return false;
    if (training.maxParticipants && training.currentParticipants && 
        training.currentParticipants >= training.maxParticipants) {
      return false;
    }
    const now = new Date();
    if (training.registrationStartDate && new Date(training.registrationStartDate) > now) {
      return false;
    }
    if (training.registrationEndDate && new Date(training.registrationEndDate) < now) {
      return false;
    }
    return true;
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'open': 'primary',
      'full': 'accent',
      'closed': '',
      'completed': 'accent'
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      'open': 'Open for Registration',
      'full': 'Full',
      'closed': 'Closed',
      'completed': 'Completed'
    };
    return statusLabels[status.toLowerCase()] || status;
  }
}

