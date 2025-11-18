import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { GlassButtonComponent } from '../glass-button/glass-button.component';

export interface EmptyStateAction {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, GlassButtonComponent],
  template: `
    <app-glass-card padding="p-12" customClass="text-center">
      <div class="flex flex-col items-center justify-center">
        <!-- Icon -->
        <div class="mb-4" [class]="iconSizeClass">
          {{ icon || defaultIcon }}
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
          {{ title || 'ไม่มีข้อมูล' }}
        </h3>

        <!-- Description -->
        <p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
          {{ description || 'ยังไม่มีข้อมูลในส่วนนี้' }}
        </p>

        <!-- Action Button -->
        <app-glass-button
          *ngIf="action"
          [variant]="action.variant || 'primary'"
          (clicked)="action.onClick()">
          <span *ngIf="action.icon" class="mr-2">{{ action.icon }}</span>
          {{ action.label }}
        </app-glass-button>
      </div>
    </app-glass-card>
  `,
  styles: []
})
export class EmptyStateComponent {
  @Input() icon?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() action?: EmptyStateAction;
  @Input() iconSize: 'sm' | 'md' | 'lg' = 'md';

  defaultIcon = '📭';

  get iconSizeClass(): string {
    const sizes = {
      sm: 'text-4xl',
      md: 'text-6xl',
      lg: 'text-8xl'
    };
    return sizes[this.iconSize] || sizes.md;
  }
}
