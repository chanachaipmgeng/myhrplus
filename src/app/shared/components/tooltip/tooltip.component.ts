import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() showOnHover: boolean = true;
  @Input() show?: boolean;
  @Input() ariaDescribedBy?: string;

  private _internalShow: boolean = false;
  tooltipId: string = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  get isVisible(): boolean {
    // If show input is provided, use it; otherwise use internal state
    if (this.show !== undefined) {
      return this.show;
    }
    return this._internalShow;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.showOnHover && this.show === undefined) {
      this._internalShow = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.showOnHover && this.show === undefined) {
      this._internalShow = false;
    }
  }

  get tooltipClasses(): string {
    return 'bg-slate-800/90 dark:bg-slate-700/90 backdrop-blur-md';
  }
}




