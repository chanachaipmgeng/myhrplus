import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
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
      primary: 'bg-gradient-primary shadow-primary relative overflow-hidden',
      success: 'bg-gradient-to-r from-success-500 to-success-600 shadow-md',
      warning: 'bg-gradient-to-r from-warning-500 to-warning-600 shadow-md',
      danger: 'bg-gradient-to-r from-error-500 to-error-600 shadow-md'
    };
    return `${variants[this.variant] || variants.primary}`;
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



