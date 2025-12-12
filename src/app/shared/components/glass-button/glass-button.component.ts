import { Component, ChangeDetectionStrategy, input, output, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-button.component.html',
  styleUrls: ['./glass-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlassButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  variant = input<'primary' | 'secondary' | 'danger'>('secondary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  fullWidth = input<boolean>(false);
  customClass = input<string>('');
  ariaLabel = input<string | undefined>(undefined);
  ariaDescribedBy = input<string | undefined>(undefined);

  clicked = output<MouseEvent>();

  buttonClasses = computed(() => {
    const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      'primary': 'glass-button-primary',
      'secondary': 'glass-button',
      'danger': 'glass-button-danger'
    }[this.variant()];

    const sizeClasses = {
      'sm': 'px-4 py-1.5 text-sm',
      'md': 'px-5 py-2 text-sm',
      'lg': 'px-6 py-2.5 text-base'
    }[this.size()];

    const widthClass = this.fullWidth() ? 'w-full' : '';

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${this.customClass()}`;
  });

  handleClick(event: MouseEvent): void {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.disabled() && !this.loading()) {
        this.handleClick(event as any);
      }
    }
  }
}

