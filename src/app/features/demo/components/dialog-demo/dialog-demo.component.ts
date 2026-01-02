import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    GlassButtonComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent {
  dialogVisible: boolean = false;
  alertDialogVisible: boolean = false;
  confirmDialogVisible: boolean = false;
  dialogHeader: string = 'Dialog Title';
  dialogContent: string = 'This is a dialog content. You can add any content here.';
  dialogWidth: string = '400px';
  dialogHeight: string = 'auto';
  showCloseIcon: boolean = true;
  isModal: boolean = true;
  closeOnEscape: boolean = true;

  props: PropDefinition[] = [
    {
      name: 'visible',
      type: 'boolean',
      default: 'false',
      description: 'Show/hide the dialog',
      required: false
    },
    {
      name: 'header',
      type: 'string',
      default: "''",
      description: 'Dialog header text',
      required: false
    },
    {
      name: 'width',
      type: 'string',
      default: "'400px'",
      description: 'Dialog width',
      required: false
    },
    {
      name: 'height',
      type: 'string',
      default: "'auto'",
      description: 'Dialog height',
      required: false
    },
    {
      name: 'showCloseIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show close icon',
      required: false
    },
    {
      name: 'isModal',
      type: 'boolean',
      default: 'true',
      description: 'Enable modal mode',
      required: false
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      default: 'true',
      description: 'Close dialog on Escape key',
      required: false
    }
  ];

  basicExample = `<ejs-dialog
  #dialog
  [(visible)]="dialogVisible"
  [header]="'Dialog Title'"
  [width]="'400px'"
  [showCloseIcon]="true"
  [isModal]="true">
  <ng-template #content>
    <div>Dialog content here</div>
  </ng-template>
</ejs-dialog>`;

  alertExample = `<ejs-dialog
  #alertDialog
  [(visible)]="alertDialogVisible"
  [header]="'Alert'"
  [width]="'350px'"
  [isModal]="true">
  <ng-template #content>
    <div>This is an alert message.</div>
  </ng-template>
  <ng-template #footerTemplate>
    <button (click)="alertDialogVisible = false">OK</button>
  </ng-template>
</ejs-dialog>`;

  confirmExample = `<ejs-dialog
  #confirmDialog
  [(visible)]="confirmDialogVisible"
  [header]="'Confirm'"
  [width]="'350px'"
  [isModal]="true">
  <ng-template #content>
    <div>Are you sure you want to proceed?</div>
  </ng-template>
  <ng-template #footerTemplate>
    <button (click)="onConfirm()">Yes</button>
    <button (click)="confirmDialogVisible = false">No</button>
  </ng-template>
</ejs-dialog>`;

  openDialog(): void {
    this.dialogVisible = true;
  }

  closeDialog(): void {
    this.dialogVisible = false;
  }

  openAlert(): void {
    this.alertDialogVisible = true;
  }

  openConfirm(): void {
    this.confirmDialogVisible = true;
  }

  onConfirm(): void {
    console.log('Confirmed!');
    this.confirmDialogVisible = false;
  }

  onDialogClose(): void {
    console.log('Dialog closed');
  }
}

