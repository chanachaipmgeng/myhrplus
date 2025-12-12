import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit, OnDestroy {
  message = input<string>('');
  type = input<NotificationType>('info');
  duration = input<number>(3000);
  onClose = input<(() => void) | undefined>(undefined);

  private destroy$ = new Subject<void>();

  iconName = computed(() => {
    const iconMap = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return iconMap[this.type()] || 'info';
  });

  iconColor = computed(() => {
    const colorMap = {
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      info: 'text-blue-600 dark:text-blue-400'
    };
    return colorMap[this.type()] || 'text-blue-600 dark:text-blue-400';
  });

  ngOnInit(): void {
    if (this.duration() > 0) {
      timer(this.duration())
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.close());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  close(): void {
    const closeFn = this.onClose();
    if (closeFn) {
      closeFn();
    }
  }
}

