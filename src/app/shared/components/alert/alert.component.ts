import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() dismissible: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() customIcon: string = ''; // Custom icon name

  @Output() dismissed = new EventEmitter<void>();

  get iconName(): string {
    if (this.customIcon) {
      return this.customIcon;
    }

    const iconMap: Record<AlertVariant, string> = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return iconMap[this.variant] || 'info';
  }

  onDismiss(): void {
    this.dismissed.emit();
  }
}

