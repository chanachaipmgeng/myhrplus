import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Layout Components
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ContentLayoutComponent } from '../../shared/components/content-layout/content-layout.component';

// UI Components
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../shared/components/glass-button/glass-button.component';
import { GlassInputComponent } from '../../shared/components/glass-input/glass-input.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import { NotificationComponent } from '../../shared/components/notification/notification.component';

// Services
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { StorageService } from '../../core/services/storage.service';

/**
 * Component Name Component
 * 
 * Description: Brief description of what this component does
 * 
 * Usage:
 * ```html
 * <app-component-name
 *   [inputProperty]="value"
 *   (outputEvent)="handleEvent($event)">
 * </app-component-name>
 * ```
 */
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageLayoutComponent,
    PageHeaderComponent,
    ContentLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    GlassInputComponent,
    LoadingComponent,
    EmptyStateComponent,
    SkeletonLoaderComponent,
    NotificationComponent
  ],
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})
export class ComponentNameComponent implements OnInit, OnDestroy {
  // ============================================
  // Public Properties
  // ============================================
  
  @Input() inputProperty: string = '';
  @Output() outputEvent = new EventEmitter<any>();

  // State Management
  isLoading = false;
  isEmpty = false;
  data: any[] = [];

  // Header Actions
  headerActions = [
    {
      label: 'Add New',
      variant: 'primary' as const,
      onClick: () => this.onAddNew()
    }
  ];

  // Empty State Action
  emptyStateAction = {
    label: 'Create New',
    variant: 'primary' as const,
    onClick: () => this.onAddNew()
  };

  // ============================================
  // Private Properties
  // ============================================
  
  private destroy$ = new Subject<void>();

  // ============================================
  // Constructor
  // ============================================
  
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private storageService: StorageService
  ) {}

  // ============================================
  // Lifecycle Hooks
  // ============================================
  
  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ============================================
  // Public Methods
  // ============================================
  
  /**
   * Initialize component
   */
  initializeComponent(): void {
    this.loadData();
  }

  /**
   * Load data from API
   */
  loadData(): void {
    this.isLoading = true;
    
    this.apiService.get<any[]>('/api/endpoint')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.data = response.data || [];
          this.isEmpty = this.data.length === 0;
          this.isLoading = false;
        },
        error: (error) => {
          this.handleError(error);
          this.isLoading = false;
        }
      });
  }

  /**
   * Handle add new action
   */
  onAddNew(): void {
    // Implementation
    this.notificationService.showSuccess('New item added');
  }

  /**
   * Handle edit action
   */
  onEdit(item: any): void {
    // Implementation
  }

  /**
   * Handle delete action
   */
  onDelete(item: any): void {
    // Implementation
    this.notificationService.showSuccess('Item deleted');
  }

  // ============================================
  // Private Methods
  // ============================================
  
  /**
   * Handle errors
   */
  private handleError(error: any): void {
    console.error('Error:', error);
    this.notificationService.showError('An error occurred');
  }

  /**
   * Track by function for *ngFor
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}

