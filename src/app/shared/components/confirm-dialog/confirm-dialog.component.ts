import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  private translate = inject(TranslateService);
  
  @Input() data!: ConfirmDialogData;
  @Output() closed = new EventEmitter<boolean>();

  constructor() {
    if (this.data) {
      this.data.confirmText = this.data.confirmText || this.translate.instant('common.confirm');
      this.data.cancelText = this.data.cancelText || this.translate.instant('common.cancel');
    }
  }

  get displayConfirmText(): string {
    return this.data?.confirmText || this.translate.instant('common.confirm');
  }

  get displayCancelText(): string {
    return this.data?.cancelText || this.translate.instant('common.cancel');
  }

  onCancel(): void {
    this.closed.emit(false);
  }

  onConfirm(): void {
    this.closed.emit(true);
  }
}
