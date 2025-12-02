import { Injectable, ComponentRef, ViewContainerRef } from '@angular/core';
import { NotificationComponent, NotificationType } from '../../shared/components/notification/notification.component';
import { standardizeErrorMessage, formatErrorMessage, StandardizedError } from '../utils/error-message.util';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationContainer?: ViewContainerRef;
  private notifications: ComponentRef<NotificationComponent>[] = [];

  setContainer(container: ViewContainerRef): void {
    this.notificationContainer = container;
  }

  private show(message: string, type: NotificationType, duration: number = 3000): void {
    if (!this.notificationContainer) {
      console.warn('Notification container not set');
      return;
    }

    const componentRef = this.notificationContainer.createComponent(NotificationComponent);
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    componentRef.instance.duration = duration;
    componentRef.instance.onClose = () => {
      this.removeNotification(componentRef);
    };

    this.notifications.push(componentRef);

    // Auto remove after duration
    if (duration > 0) {
      setTimeout(() => {
        this.removeNotification(componentRef);
      }, duration);
    }
  }

  private removeNotification(componentRef: ComponentRef<NotificationComponent>): void {
    const index = this.notifications.indexOf(componentRef);
    if (index > -1) {
      this.notifications.splice(index, 1);
      componentRef.destroy();
    }
  }

  showSuccess(message: string, duration: number = 3000): void {
    this.show(message, 'success', duration);
  }

  showError(message: string, duration: number = 5000): void {
    this.show(message, 'error', duration);
  }

  showWarning(message: string, duration: number = 4000): void {
    this.show(message, 'warning', duration);
  }

  showInfo(message: string, duration: number = 3000): void {
    this.show(message, 'info', duration);
  }

  /**
   * Show standardized error message
   */
  showStandardizedError(error: any, options?: { duration?: number }): StandardizedError {
    const standardized = standardizeErrorMessage(error);
    const message = formatErrorMessage(standardized);
    this.showError(message, options?.duration || 5000);
    return standardized;
  }

  /**
   * Show error with retry option
   */
  showErrorWithRetry(error: any, onRetry?: () => void, duration: number = 0): StandardizedError {
    const standardized = standardizeErrorMessage(error);
    const message = formatErrorMessage(standardized);
    
    // For retryable errors, show longer duration (0 = no auto-close)
    if (standardized.retryable && onRetry) {
      this.show(message, 'error', duration);
      // Note: Retry button should be handled in the component that calls this
    } else {
      this.showError(message, duration || 5000);
    }
    
    return standardized;
  }
}
