import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  size = input<'sm' | 'md' | 'lg'>('md');
  color = input<string>('text-primary-600');
  message = input<string | undefined>(undefined);
  fullScreen = input<boolean>(false);

  containerClass = computed(() => {
    return this.fullScreen()
      ? 'fixed inset-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      : '';
  });

  spinnerClass = computed(() => {
    return `spinner-${this.size()} ${this.color()}`;
  });
}

