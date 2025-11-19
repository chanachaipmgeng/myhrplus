import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-error-state-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './error-state-demo.component.html',
  styleUrls: ['./error-state-demo.component.scss']
})
export class ErrorStateDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'type',
      type: "'network' | 'server' | 'validation' | 'permission' | 'notfound' | 'generic'",
      default: "'generic'",
      description: 'Error type',
      required: false
    },
    {
      name: 'title',
      type: 'string',
      default: "''",
      description: 'Custom error title',
      required: false
    },
    {
      name: 'message',
      type: 'string',
      default: "''",
      description: 'Custom error message',
      required: false
    },
    {
      name: 'errorCode',
      type: 'string | number',
      default: "''",
      description: 'Error code',
      required: false
    },
    {
      name: 'showRetry',
      type: 'boolean',
      default: 'false',
      description: 'Show retry button',
      required: false
    },
    {
      name: 'retryText',
      type: 'string',
      default: "'ลองอีกครั้ง'",
      description: 'Retry button text',
      required: false
    },
    {
      name: 'showDetails',
      type: 'boolean',
      default: 'false',
      description: 'Show error details',
      required: false
    },
    {
      name: 'details',
      type: 'string',
      default: "''",
      description: 'Error details text',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'retry',
      type: 'EventEmitter<void>',
      default: '-',
      description: 'Emitted when retry button is clicked',
      required: false
    }
  ];

  basicExample = `<app-error-state type="generic"></app-error-state>`;

  typesExample = `<app-error-state type="network"></app-error-state>
<app-error-state type="server"></app-error-state>
<app-error-state type="notfound"></app-error-state>`;

  withRetryExample = `<app-error-state
  type="network"
  [showRetry]="true"
  (retry)="handleRetry()">
</app-error-state>`;

  customExample = `<app-error-state
  type="generic"
  title="Custom Error"
  message="This is a custom error message"
  errorCode="ERR-001"
  [showRetry]="true">
</app-error-state>`;

  onRetry(): void {
    alert('Retry clicked!');
  }
}
