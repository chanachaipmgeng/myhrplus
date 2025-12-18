import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent {
  @Input() variant: 'default' | 'strong' | 'weak' = 'default';
  @Input() animate: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | null = null;
  @Input() padding: string = 'p-6';
  @Input() customClass: string = '';

  get cardClass(): string {
    // Use Tailwind glass utilities
    const glassClass = this.variant === 'strong'
      ? 'glass-strong'
      : this.variant === 'weak'
      ? 'glass-weak'
      : 'glass';
    
    // Base classes with hover effect and transitions
    const baseClasses = `${glassClass} rounded-lg shadow-glass hover-lift transition-smooth dark:glass-dark`;
    
    // Gemini theme support - use conditional classes
    const geminiClasses = this.variant === 'strong'
      ? 'theme-gemini:glass-gemini-strong theme-gemini:shadow-gemini-lg'
      : this.variant === 'weak'
      ? 'theme-gemini:glass-gemini-weak theme-gemini:shadow-gemini-sm'
      : 'theme-gemini:glass-gemini theme-gemini:shadow-gemini';

    return `${baseClasses} ${geminiClasses} ${this.padding} ${this.customClass}`.trim();
  }
}


