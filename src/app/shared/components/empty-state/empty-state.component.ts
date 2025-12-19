import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { GlassButtonComponent } from '../glass-button/glass-button.component';

export interface EmptyStateAction {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, TranslateModule, GlassCardComponent, GlassButtonComponent],
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  private translate = inject(TranslateService);
  
  @Input() icon?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() action?: EmptyStateAction;
  @Input() iconSize: 'sm' | 'md' | 'lg' = 'md';

  defaultIcon = '📭';

  get iconSizeClass(): string {
    const sizes = {
      sm: 'text-4xl',
      md: 'text-6xl',
      lg: 'text-8xl'
    };
    return sizes[this.iconSize] || sizes.md;
  }

  get displayTitle(): string {
    return this.title || this.translate.instant('common.noData');
  }

  get displayDescription(): string {
    return this.description || this.translate.instant('common.noDataDescription');
  }
}
