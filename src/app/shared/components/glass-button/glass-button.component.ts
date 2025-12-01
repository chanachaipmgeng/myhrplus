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
    const variantClasses = {
      'primary': 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md hover:from-primary-600 hover:to-primary-700 hover:shadow-lg glow-primary dark:from-primary-600 dark:to-primary-700 theme-gemini:from-primary-400 theme-gemini:to-primary-600 theme-gemini:shadow-gemini',
      'secondary': 'glass text-slate-700 shadow-sm hover:glass-strong hover:shadow-md hover-scale-sm dark:glass-dark dark:text-slate-200 dark:hover:glass-dark-strong theme-gemini:glass-gemini theme-gemini:text-white theme-gemini:hover:glass-gemini-strong',
      'danger': 'bg-gradient-to-r from-error-500 to-error-600 text-white shadow-md hover:from-error-600 hover:to-error-700 hover:shadow-lg glow-error dark:from-error-600 dark:to-error-700'
    }[this.variant];

    const sizeClasses = {
      'sm': 'px-4 py-1.5 text-sm',
      'md': 'px-5 py-2 text-sm',
      'lg': 'px-6 py-2.5 text-base'
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

