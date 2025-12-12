import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

export type SkeletonType = 'text' | 'card' | 'table' | 'list' | 'avatar' | 'custom';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent {
  type = input<SkeletonType>('text');
  rows = input<number>(3);
  columns = input<number>(3);
  showAvatar = input<boolean>(false);
  showTitle = input<boolean>(true);
  animation = input<'pulse' | 'wave' | 'shimmer' | 'none'>('pulse');
  width = input<string>('100%');
  height = input<string>('');

  rowsArray = computed(() => {
    return Array(this.rows()).fill(0).map(() => ({ width: this.getRandomWidth() }));
  });

  columnsArray = computed(() => {
    return Array(this.columns()).fill(0).map(() => 0);
  });

  // Helper method for generating random widths
  private getRandomWidth(): string {
    const widths = ['60%', '80%', '90%', '100%'];
    return widths[Math.floor(Math.random() * widths.length)];
  }
}


