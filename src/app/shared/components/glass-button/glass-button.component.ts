import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-button.component.html',
  styleUrls: ['./glass-button.component.scss']
})
export class GlassButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'secondary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() customClass: string = '';
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  @Output() clicked = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-smooth cursor-pointer border border-transparent relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed hover-lift active-scale';

    // Variant classes with Tailwind utilities
    // Using CSS variables for primary color to support dynamic theme colors
    const variantClasses = {
      'primary': 'bg-gradient-primary text-white shadow-md hover:bg-gradient-primary hover:shadow-lg glow-primary transition-all duration-200',
      'secondary': 'glass text-slate-700 shadow-sm hover:glass-strong hover:shadow-md hover-scale-sm dark:glass-dark dark:text-slate-200 dark:hover:glass-dark-strong theme-gemini:glass-gemini theme-gemini:text-white theme-gemini:hover:glass-gemini-strong',
      'danger': 'bg-gradient-to-r from-error-500 to-error-600 text-white shadow-md hover:from-error-600 hover:to-error-700 hover:shadow-lg glow-error dark:from-error-600 dark:to-error-700'
    }[this.variant];

    const sizeClasses = {
      'sm': 'px-4 py-1.5 text-sm min-h-[44px]',
      'md': 'px-5 py-2 text-sm min-h-[44px]',
      'lg': 'px-6 py-2.5 text-base min-h-[44px]'
    }[this.size];

    const widthClass = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${this.customClass}`.trim();
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.disabled && !this.loading) {
        this.handleClick(event as any);
      }
    }
  }
}

