import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-contextual-help',
  standalone: true,
  imports: [CommonModule, TooltipComponent, IconComponent],
  templateUrl: './contextual-help.component.html',
  styleUrls: ['./contextual-help.component.scss']
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

