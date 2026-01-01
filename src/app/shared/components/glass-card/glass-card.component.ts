import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent {
  @Input() variant: 'default' | 'strong' | 'weak' | 'none' = 'default';
  @Input() animate: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | null = null;
  @Input() padding: string = 'p-6';
  @Input() customClass: string = '';

  get cardClass(): string {
    // Check if customClass contains gradient - if so, use 'none' variant to avoid background override
    const hasGradient = this.customClass.includes('bg-gradient-');

    // Use Tailwind glass utilities (skip if variant is 'none' or has gradient)
    let glassClass = '';
    let geminiClasses = '';

    if (this.variant === 'none' || hasGradient) {
      // No glass background - allow custom backgrounds (like gradients) to show
      glassClass = '';
      geminiClasses = '';
    } else {
      glassClass = this.variant === 'strong'
        ? 'glass-strong'
        : this.variant === 'weak'
        ? 'glass-weak'
        : 'glass';

      // Myhr theme support - use conditional classes
      geminiClasses = this.variant === 'strong'
        ? 'theme-myhr:glass-myhr-strong theme-myhr:shadow-myhr-lg'
        : this.variant === 'weak'
        ? 'theme-myhr:glass-myhr-weak theme-myhr:shadow-myhr-sm'
        : 'theme-myhr:glass-myhr theme-myhr:shadow-myhr';
    }

    // Base classes with hover effect and transitions
    const baseClasses = hasGradient || this.variant === 'none'
      ? 'rounded-lg shadow-md card-micro hover-lift transition-smooth'
      : `${glassClass} rounded-lg shadow-glass card-micro hover-lift transition-smooth dark:glass-dark`;

    return `${baseClasses} ${geminiClasses} ${this.padding} ${this.customClass}`.trim();
  }
}


