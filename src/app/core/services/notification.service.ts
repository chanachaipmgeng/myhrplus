import { Injectable, ViewContainerRef, ComponentRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationComponent } from '../../shared/components/notification/notification.component';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  route?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications = new BehaviorSubject<Notification[]>([]);
  readonly notifications$ = this._notifications.asObservable();

  private container?: ViewContainerRef;
  private activeToastComponents: ComponentRef<NotificationComponent>[] = [];

  constructor() {
    this.loadInitialNotifications();
  }

  /**
   * Set the ViewContainerRef for dynamic toast notifications
   */
  setContainer(container: ViewContainerRef): void {
    this.container = container;
  }

  /**
   * Show error toast notification
   */
  showError(message: string, duration: number = 5000): void {
    this.showToast(message, 'error', duration);
  }

  /**
   * Show success toast notification
   */
  showSuccess(message: string, duration: number = 3000): void {
    this.showToast(message, 'success', duration);
  }

  /**
   * Show warning toast notification
   */
  showWarning(message: string, duration: number = 4000): void {
    this.showToast(message, 'warning', duration);
  }

  /**
   * Show info toast notification
   */
  showInfo(message: string, duration: number = 3000): void {
    this.showToast(message, 'info', duration);
  }

  /**
   * Internal method to create and show toast notification
   */
  private showToast(message: string, type: 'success' | 'error' | 'warning' | 'info', duration: number): void {
    if (!this.container) {
      console.warn('NotificationService: Container not set. Call setContainer() first.');
      return;
    }

    // Create component dynamically
    const componentRef = this.container.createComponent(NotificationComponent);
    const component = componentRef.instance;

    // Set component properties
    component.message = message;
    component.type = type;
    component.duration = duration;
    component.onClose = () => {
      this.removeToastComponent(componentRef);
    };

    // Store reference for cleanup
    this.activeToastComponents.push(componentRef);

    // Auto-remove after duration (if duration > 0)
    if (duration > 0) {
      setTimeout(() => {
        this.removeToastComponent(componentRef);
      }, duration);
    }
  }

  /**
   * Remove toast component from container
   */
  private removeToastComponent(componentRef: ComponentRef<NotificationComponent>): void {
    const index = this.activeToastComponents.indexOf(componentRef);
    if (index > -1) {
      this.activeToastComponents.splice(index, 1);
    }
    componentRef.destroy();
  }

  private loadInitialNotifications(): void {
    // Mock data for notification dropdown (not toast)
    const mockNotifications: Notification[] = [
      {
        id: '1',
        title: 'การอนุมัติใหม่',
        message: 'มีเอกสารรอการอนุมัติ 3 รายการ',
        type: 'info',
        timestamp: new Date(),
        read: false,
        route: '/workflow/inbox'
      },
      {
        id: '2',
        title: 'อัพเดทระบบ',
        message: 'ระบบจะปิดปรับปรุงในวันที่ 15 มกราคม',
        type: 'warning',
        timestamp: new Date(Date.now() - 3600000),
        read: false
      }
    ];
    this._notifications.next(mockNotifications);
  }

  markAsRead(id: string): void {
    const current = this._notifications.value;
    const updated = current.map(n => n.id === id ? { ...n, read: true } : n);
    this._notifications.next(updated);
  }

  markAllAsRead(): void {
    const current = this._notifications.value;
    const updated = current.map(n => ({ ...n, read: true }));
    this._notifications.next(updated);
  }

  addNotification(notification: Notification): void {
    const current = this._notifications.value;
    this._notifications.next([notification, ...current]);
  }
}
