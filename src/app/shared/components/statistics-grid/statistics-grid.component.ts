import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsCardComponent } from '../statistics-card/statistics-card.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

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
  styleUrls: ['./statistics-grid.component.scss']
})
export class StatisticsGridComponent {
  @Input() stats: StatCard[] = [];
  @Input() columns: number = 3;

  get gridClass(): string {
    // Grid columns handled by Tailwind classes in HTML
    return '';
  }
}




