import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  
  @Input() message: string = '';
  @Input() type: NotificationType = 'info';
  @Input() duration: number = 3000;
  @Input() onClose?: () => void;

  private destroy$ = new Subject<void>();

  get closeAriaLabel(): string {
    return this.translate.instant('common.notification.close');
  }

  get iconName(): string {
    const iconMap = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return iconMap[this.type] || 'info';
  }

  get iconColor(): string {
    const colorMap = {
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      info: 'text-blue-600 dark:text-blue-400'
    };
    return colorMap[this.type] || 'text-blue-600 dark:text-blue-400';
  }

  ngOnInit(): void {
    if (this.duration > 0) {
      timer(this.duration)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.close());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  close(): void {
    if (this.onClose) {
      this.onClose();
    }
  }
}

