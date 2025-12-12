import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlassCardComponent {
  variant = input<'default' | 'strong' | 'weak'>('default');
  animate = input<'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | null>(null);
  padding = input<string>('p-6');
  customClass = input<string>('');

  cardClass = computed(() => {
    const baseClass = this.variant() === 'strong'
      ? 'glass-card-strong'
      : this.variant() === 'weak'
        ? 'glass-card-weak'
        : 'glass-card';

    return `${baseClass} ${this.padding()} ${this.customClass()}`.trim();
  });
}


