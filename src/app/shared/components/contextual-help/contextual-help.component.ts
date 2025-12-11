import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-contextual-help',
  standalone: true,
  imports: [CommonModule, TooltipComponent, SharedModule],
  templateUrl: './contextual-help.component.html',
  styleUrls: ['./contextual-help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextualHelpComponent {
  @Input() text?: string;
  @Input() title?: string;
  @Input() icon: string = 'help_outline';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() variant: 'default' | 'inline' | 'icon-only' = 'default';
  @Input() customTemplate?: TemplateRef<any>;
  @Input() showOnHover: boolean = true;

  showTooltip: boolean = false;

  toggleTooltip(): void {
    if (!this.showOnHover) {
      this.showTooltip = !this.showTooltip;
    }
  }

  onMouseEnter(): void {
    if (this.showOnHover) {
      this.showTooltip = true;
    }
  }

  onMouseLeave(): void {
    if (this.showOnHover) {
      this.showTooltip = false;
    }
  }
}

