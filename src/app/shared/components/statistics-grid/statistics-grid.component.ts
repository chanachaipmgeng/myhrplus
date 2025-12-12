import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsCardComponent } from '../statistics-card/statistics-card.component';

export interface StatCard {
  icon: string;
  label: string;
  value: string | number;
  suffix?: string;
  change?: number;
  iconBgClass?: string;
}

@Component({
  selector: 'app-statistics-grid',
  standalone: true,
  imports: [CommonModule, StatisticsCardComponent],
  templateUrl: './statistics-grid.component.html',
  styleUrls: ['./statistics-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsGridComponent {
  stats = input<StatCard[]>([]);
  columns = input<number>(3);

  gridClass = computed(() => `grid-cols-${this.columns()}`);
}




