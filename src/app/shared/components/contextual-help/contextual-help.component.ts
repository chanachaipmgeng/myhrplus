import { Component, Input, TemplateRef, ChangeDetectionStrategy, input } from '@angular/core';
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
  text = input<string | undefined>(undefined);
  title = input<string | undefined>(undefined);
  icon = input<string>('help_outline');
  position = input<'top' | 'bottom' | 'left' | 'right'>('top');
  variant = input<'default' | 'inline' | 'icon-only'>('default');
  customTemplate = input<TemplateRef<any> | undefined>(undefined);
  showOnHover = input<boolean>(true);

  showTooltip: boolean = false;

  toggleTooltip(): void {
    if (!this.showOnHover()) {
      this.showTooltip = !this.showTooltip;
    }
  }

  onMouseEnter(): void {
    if (this.showOnHover()) {
      this.showTooltip = true;
    }
  }

  onMouseLeave(): void {
    if (this.showOnHover()) {
      this.showTooltip = false;
    }
  }
}

