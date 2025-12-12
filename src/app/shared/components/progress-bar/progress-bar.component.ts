import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  value = input<number>(0);
  label = input<string | undefined>(undefined);
  description = input<string | undefined>(undefined);
  showValue = input<boolean>(true);
  variant = input<'primary' | 'success' | 'warning' | 'danger'>('primary');
  ariaLabel = input<string | undefined>(undefined);
  customAriaValueText = input<string | undefined>(undefined);

  progressClass = computed(() => {
    const variants = {
      primary: 'bg-primary-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500'
    };
    return variants[this.variant()] || variants.primary;
  });

  progressId = computed(() => `progress-${Math.random().toString(36).substr(2, 9)}`);

  ariaValueText = computed(() => {
    if (this.customAriaValueText()) {
      return this.customAriaValueText()!;
    }
    return `${this.value()}%`;
  });
}



