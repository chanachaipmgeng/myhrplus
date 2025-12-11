import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
  @Input() value: number = 0;
  @Input() label?: string;
  @Input() description?: string;
  @Input() showValue: boolean = true;
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() ariaLabel?: string;
  @Input() customAriaValueText?: string;

  get progressClass(): string {
    const variants = {
      primary: 'bg-primary-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500'
    };
    return variants[this.variant] || variants.primary;
  }

  get progressId(): string {
    return `progress-${Math.random().toString(36).substr(2, 9)}`;
  }

  get ariaValueText(): string {
    if (this.customAriaValueText) {
      return this.customAriaValueText;
    }
    return `${this.value}%`;
  }
}



