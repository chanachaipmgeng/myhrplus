import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

export type ErrorType = 'network' | 'server' | 'validation' | 'permission' | 'notfound' | 'generic';

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss']
})
export class ErrorStateComponent {
  private translate = inject(TranslateService);
  
  @Input() type: ErrorType = 'generic';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() errorCode: string | number = '';
  @Input() showRetry: boolean = false;
  @Input() retryText?: string;
  @Input() showDetails: boolean = false;
  @Input() details: string = '';

  @Output() retry = new EventEmitter<void>();

  get errorIcon(): string {
    const iconMap: Record<ErrorType, string> = {
      network: 'wifi_off',
      server: 'dns',
      validation: 'error_outline',
      permission: 'lock',
      notfound: 'search_off',
      generic: 'error_outline'
    };
    return iconMap[this.type] || 'error_outline';
  }

  get defaultTitle(): string {
    const keyMap: Record<ErrorType, string> = {
      network: 'common.error.network.title',
      server: 'common.error.server.title',
      validation: 'common.error.validation.title',
      permission: 'common.error.permission.title',
      notfound: 'common.error.notfound.title',
      generic: 'common.error.generic.title'
    };
    return this.translate.instant(keyMap[this.type] || 'common.error.generic.title');
  }

  get defaultMessage(): string {
    const keyMap: Record<ErrorType, string> = {
      network: 'common.error.network.message',
      server: 'common.error.server.message',
      validation: 'common.error.validation.message',
      permission: 'common.error.permission.message',
      notfound: 'common.error.notfound.message',
      generic: 'common.error.generic.message'
    };
    return this.translate.instant(keyMap[this.type] || 'common.error.generic.message');
  }

  get displayRetryText(): string {
    return this.retryText || this.translate.instant('common.retry');
  }

  onRetry(): void {
    this.retry.emit();
  }
}


