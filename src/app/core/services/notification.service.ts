import { Injectable, ViewContainerRef, ComponentRef } from '@angular/core';
import { NotificationComponent, NotificationType } from '@shared/components/notification/notification.component';
import { IvapNotificationService } from './ivap/notification.service';

/**
 * Notification Service
 * 
 * Toast notification service for showing success, error, warning, and info messages
 * Also provides access to IVAP notification API
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private container?: ViewContainerRef;
  private notifications: ComponentRef<NotificationComponent>[] = [];

  constructor(private ivapNotificationService: IvapNotificationService) {}

  /**
   * Set container for dynamic notifications
   * Should be called from app.component or main layout component
   */
  setContainer(container: ViewContainerRef): void {
    this.container = container;
  }

  /**
   * Show success notification
   */
  showSuccess(message: string, duration: number = 3000): void {
    this.show('success', message, duration);
  }

  /**
   * Show error notification
   */
  showError(message: string, duration: number = 5000): void {
    this.show('error', message, duration);
  }

  /**
   * Show warning notification
   */
  showWarning(message: string, duration: number = 4000): void {
    this.show('warning', message, duration);
  }

  /**
   * Show info notification
   */
  showInfo(message: string, duration: number = 3000): void {
    this.show('info', message, duration);
  }

  /**
   * Show notification
   */
  private show(type: NotificationType, message: string, duration: number): void {
    // If no container is set, try to find it from app component
    if (!this.container) {
      console.warn('NotificationService: Container not set. Call setContainer() first.');
      // Fallback to console
      console[type === 'error' ? 'error' : type === 'warning' ? 'warn' : 'log'](message);
      return;
    }

    // Create notification component (Angular 17+ API)
    const componentRef = this.container.createComponent(NotificationComponent);
    
    // Set properties
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    componentRef.instance.duration = duration;
    componentRef.instance.onClose = () => {
      this.removeNotification(componentRef);
    };

    // Add to notifications array
    this.notifications.push(componentRef);

    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => {
        this.removeNotification(componentRef);
      }, duration);
    }
  }

  /**
   * Remove notification
   */
  private removeNotification(componentRef: ComponentRef<NotificationComponent>): void {
    const index = this.notifications.indexOf(componentRef);
    if (index > -1) {
      this.notifications.splice(index, 1);
      componentRef.destroy();
    }
  }

  /**
   * Clear all notifications
   */
  clearAll(): void {
    this.notifications.forEach(ref => ref.destroy());
    this.notifications = [];
  }

  /**
   * Get IVAP notification service for API calls
   */
  get ivap(): IvapNotificationService {
    return this.ivapNotificationService;
  }
}

