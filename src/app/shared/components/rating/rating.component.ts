import { Component, ChangeDetectionStrategy, input, model, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  rating = model<number>(0);
  maxRating = input<number>(5);
  readonly = input<boolean>(false);
  showValue = input<boolean>(false);
  icon = input<'star' | 'heart'>('star');

  hoveredRating = signal<number>(0);

  stars = computed(() => Array(this.maxRating()).fill(0).map((_, i) => i));

  onStarClick(value: number): void {
    if (!this.readonly()) {
      this.rating.set(value);
    }
  }

  getStarClass(index: number): string {
    const isActive = index <= (this.hoveredRating() || this.rating());
    if (this.icon() === 'heart') {
      return isActive
        ? 'text-red-500 hover:text-red-600'
        : 'text-slate-300 dark:text-slate-600 hover:text-red-400';
    }
    return isActive
      ? 'text-yellow-400 hover:text-yellow-500'
      : 'text-slate-300 dark:text-slate-600 hover:text-yellow-400';
  }

  getStarIcon(index: number): string {
    if (this.icon() === 'heart') {
      return index <= (this.hoveredRating() || this.rating()) ? '❤️' : '🤍';
    }
    return index <= (this.hoveredRating() || this.rating()) ? '★' : '☆';
  }
}
