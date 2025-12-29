import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../../../shared/components/alert/alert.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [CommonModule, AlertComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss']
})
export class AlertDemoComponent {
  showAlert = true;

  props: PropDefinition[] = [
    {
      name: 'variant',
      type: 'AlertVariant',
      default: "'info'",
      description: 'Alert variant (success, error, warning, info)',
      required: false
    },
    {
      name: 'title',
      type: 'string',
      default: "''",
      description: 'Alert title text',
      required: false
    },
    {
      name: 'message',
      type: 'string',
      default: "''",
      description: 'Alert message text',
      required: false
    },
    {
      name: 'dismissible',
      type: 'boolean',
      default: 'false',
      description: 'Show dismiss button',
      required: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show icon',
      required: false
    },
    {
      name: 'customIcon',
      type: 'string',
      default: "''",
      description: 'Custom icon name',
      required: false
    }
  ];

  basicExample = `<app-alert
  variant="info"
  message="This is an info alert">
</app-alert>`;

  variantsExample = `<app-alert variant="success" message="Operation successful"></app-alert>
<app-alert variant="error" message="An error occurred"></app-alert>
<app-alert variant="warning" message="Warning message"></app-alert>
<app-alert variant="info" message="Information message"></app-alert>`;

  dismissibleExample = `<app-alert
  variant="info"
  title="Dismissible Alert"
  message="Click X to dismiss"
  [dismissible]="true"
  (dismissed)="onDismiss()">
</app-alert>`;

  usageExample = `// In component.ts
showAlert = true;

onDismiss(): void {
  this.showAlert = false;
}`;

  onDismiss(): void {
    this.showAlert = false;
  }
}

