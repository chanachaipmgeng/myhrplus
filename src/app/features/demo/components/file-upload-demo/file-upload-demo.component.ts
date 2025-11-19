import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-file-upload-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './file-upload-demo.component.html',
  styleUrls: ['./file-upload-demo.component.scss']
})
export class FileUploadDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'accept',
      type: 'string',
      default: "'*'",
      description: 'Accepted file types',
      required: false
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Allow multiple file selection',
      required: false
    },
    {
      name: 'maxSize',
      type: 'number',
      default: '10485760',
      description: 'Maximum file size in bytes (10MB default)',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'fileSelected',
      type: 'EventEmitter<File[]>',
      default: '-',
      description: 'Emitted when files are selected',
      required: false
    },
    {
      name: 'error',
      type: 'EventEmitter<string>',
      default: '-',
      description: 'Emitted when error occurs',
      required: false
    }
  ];

  basicExample = `<app-file-upload
  (fileSelected)="onFileSelected($event)">
</app-file-upload>`;

  multipleExample = `<app-file-upload
  [multiple]="true"
  accept=".pdf,.doc,.docx"
  [maxSize]="5242880"
  (fileSelected)="onFileSelected($event)"
  (error)="onError($event)">
</app-file-upload>`;

  onFileSelected(files: File[]): void {
    console.log('Files selected:', files);
  }

  onError(error: string): void {
    console.error('Upload error:', error);
  }
}
