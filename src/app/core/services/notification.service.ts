import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private defaultConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  };

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action: string = 'Close'): void {
    this.show(message, action, 'success');
  }

  showError(message: string, action: string = 'Close'): void {
    this.show(message, action, 'error');
  }

  showWarning(message: string, action: string = 'Close'): void {
    this.show(message, action, 'warning');
  }

  showInfo(message: string, action: string = 'Close'): void {
    this.show(message, action, 'info');
  }

  private show(message: string, action: string, type: NotificationType): void {
    const config: MatSnackBarConfig = {
      ...this.defaultConfig,
      panelClass: [`snackbar-${type}`]
    };

    this.snackBar.open(message, action, config);
  }
}

