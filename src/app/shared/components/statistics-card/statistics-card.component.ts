import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../glass-card/glass-card.component';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [CommonModule, GlassCardComponent],
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsCardComponent {
  icon = input.required<string>();
  label = input.required<string>();
  value = input.required<string | number>();
  suffix = input<string | undefined>(undefined);
  change = input<number | undefined>(undefined);
  iconBgClass = input<string>('bg-blue-100 dark:bg-blue-900');

  changeClass = computed(() => {
    if (!this.change()) return '';
    return this.change()! > 0
      ? 'text-green-600 dark:text-green-400'
      : 'text-red-600 dark:text-red-400';
  });
}




