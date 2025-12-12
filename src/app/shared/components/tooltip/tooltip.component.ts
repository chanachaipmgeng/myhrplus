import { Component, HostListener, ChangeDetectionStrategy, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  text = input<string>('');
  position = input<'top' | 'bottom' | 'left' | 'right'>('bottom');
  showOnHover = input<boolean>(true);
  show = input<boolean | undefined>(undefined);
  ariaDescribedBy = input<string | undefined>(undefined);

  private internalShow = signal(false);
  tooltipId: string = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  isVisible = computed(() => {
    // If show input is provided, use it; otherwise use internal state
    if (this.show() !== undefined) {
      return this.show();
    }
    return this.internalShow();
  });

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.showOnHover() && this.show() === undefined) {
      this.internalShow.set(true);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.showOnHover() && this.show() === undefined) {
      this.internalShow.set(false);
    }
  }

  tooltipClasses = computed(() => {
    return 'bg-slate-800 dark:bg-slate-700';
  });
}




