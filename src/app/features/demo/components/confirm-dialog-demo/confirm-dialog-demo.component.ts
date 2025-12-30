import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { ConfirmDialogComponent, ConfirmDialogData } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-confirm-dialog-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, GlassButtonComponent, ConfirmDialogComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './confirm-dialog-demo.component.html',
  styleUrls: ['./confirm-dialog-demo.component.scss']
})
export class ConfirmDialogDemoComponent {
  showDialog: boolean = false;
  dialogData: ConfirmDialogData = {
    title: 'ยืนยันการลบ',
    message: 'คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?',
    confirmText: 'ลบ',
    cancelText: 'ยกเลิก'
  };

  props: PropDefinition[] = [
    {
      name: 'data',
      type: 'ConfirmDialogData',
      default: '-',
      description: 'Dialog data object',
      required: true
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'closed',
      type: 'EventEmitter<boolean>',
      default: '-',
      description: 'Emitted when dialog is closed (true = confirmed, false = cancelled)',
      required: false
    }
  ];

  basicExample = `<app-confirm-dialog
  [data]="dialogData"
  (closed)="onDialogClosed($event)">
</app-confirm-dialog>`;

  usageExample = `// In component.ts
dialogData: ConfirmDialogData = {
  title: 'ยืนยันการลบ',
  message: 'คุณแน่ใจหรือไม่?',
  confirmText: 'ลบ',
  cancelText: 'ยกเลิก'
};

onDialogClosed(confirmed: boolean) {
  if (confirmed) {
    // Handle confirmation
  }
}`;

  openDialog(): void {
    this.showDialog = true;
  }

  onDialogClosed(confirmed: boolean): void {
    this.showDialog = false;
    if (confirmed) {
      alert('Confirmed!');
    } else {
      alert('Cancelled!');
    }
  }
}
