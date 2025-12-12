import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  data = input.required<ConfirmDialogData>();
  closed = output<boolean>();

  displayData = computed(() => ({
    ...this.data(),
    confirmText: this.data().confirmText || 'Confirm',
    cancelText: this.data().cancelText || 'Cancel'
  }));

  onCancel(): void {
    this.closed.emit(false);
  }

  onConfirm(): void {
    this.closed.emit(true);
  }
}
