import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-card-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-card-demo.component.html',
  styleUrls: ['./glass-card-demo.component.scss']
})
export class GlassCardDemoComponent {
  selectedVariant: 'default' | 'strong' | 'weak' = 'default';
  selectedAnimation: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | null = null;

  props: PropDefinition[] = [
    {
      name: 'variant',
      type: "'default' | 'strong' | 'weak'",
      default: "'default'",
      description: 'Glass card variant style',
      required: false
    },
    {
      name: 'animate',
      type: "'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | null",
      default: 'null',
      description: 'Animation type on mount',
      required: false
    },
    {
      name: 'padding',
      type: 'string',
      default: "'p-6'",
      description: 'Tailwind padding classes',
      required: false
    },
    {
      name: 'customClass',
      type: 'string',
      default: "''",
      description: 'Additional CSS classes',
      required: false
    }
  ];

  basicExample = `<app-glass-card padding="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</app-glass-card>`;

  variantExample = `<app-glass-card variant="default" padding="p-6">
  Default variant
</app-glass-card>

<app-glass-card variant="strong" padding="p-6">
  Strong variant
</app-glass-card>

<app-glass-card variant="weak" padding="p-6">
  Weak variant
</app-glass-card>`;

  animationExample = `<app-glass-card 
  variant="default" 
  padding="p-6"
  animate="fade-in">
  Fade in animation
</app-glass-card>

<app-glass-card 
  variant="default" 
  padding="p-6"
  animate="fade-in-up">
  Fade in up animation
</app-glass-card>`;

  customExample = `<app-glass-card 
  variant="default" 
  padding="p-8"
  customClass="text-center">
  Custom padding and classes
</app-glass-card>`;

  // Advanced Usage Examples
  advancedExample = `<!-- Dynamic Cards with Data -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <app-glass-card 
    *ngFor="let item of items; trackBy: trackByFn" 
    padding="p-6"
    animate="fade-in-up">
    <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
  </app-glass-card>
</div>

<!-- Card with Loading State -->
@if (isLoading) {
  <app-skeleton-loader></app-skeleton-loader>
} @else {
  <app-glass-card padding="p-6">
    <h3>Content</h3>
  </app-glass-card>
}

<!-- Card with Conditional Rendering -->
<app-glass-card padding="p-6">
  @if (hasData) {
    <div>Data available</div>
  } @else {
    <app-empty-state 
      iconName="inbox"
      title="No data"
      description="No data available">
    </app-empty-state>
  }
</app-glass-card>`;

  integrationExample = `<!-- Integration with Services -->
@Component({
  selector: 'app-dashboard',
  template: \`
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-glass-card 
        *ngFor="let stat of statistics$ | async" 
        padding="p-6"
        animate="fade-in-up">
        <h3 class="text-lg font-semibold mb-2">{{ stat.title }}</h3>
        <p class="text-3xl font-bold text-primary">{{ stat.value }}</p>
      </app-glass-card>
    </div>
  \`
})
export class DashboardComponent {
  statistics$ = this.apiService.get<Statistic[]>('/api/statistics')
    .pipe(
      map(response => response.data || []),
      catchError(error => {
        this.notificationService.showError('Failed to load statistics');
        return of([]);
      })
    );

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}
}`;

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}

