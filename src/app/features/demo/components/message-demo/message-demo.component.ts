import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-message-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './message-demo.component.html',
  styleUrls: ['./message-demo.component.scss']
})
export class MessageDemoComponent {
  severity: 'Normal' | 'Success' | 'Info' | 'Warning' | 'Error' = 'Normal';
  content: string = 'This is a message component.';
  showIcon: boolean = true;
  showCloseIcon: boolean = false;
  cssClass: string = '';

  props: PropDefinition[] = [
    {
      name: 'severity',
      type: "'Normal' | 'Success' | 'Info' | 'Warning' | 'Error'",
      default: "'Normal'",
      description: 'Message severity type',
      required: false
    },
    {
      name: 'content',
      type: 'string',
      default: "''",
      description: 'Message content',
      required: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show severity icon',
      required: false
    },
    {
      name: 'showCloseIcon',
      type: 'boolean',
      default: 'false',
      description: 'Show close icon',
      required: false
    },
    {
      name: 'cssClass',
      type: 'string',
      default: "''",
      description: 'Custom CSS class',
      required: false
    }
  ];

  basicExample = `<ejs-message
  [severity]="'Success'"
  [content]="'Operation completed successfully!'"
  [showIcon]="true">
</ejs-message>`;

  severityExample = `<ejs-message
  [severity]="'Error'"
  [content]="'An error occurred!'"
  [showIcon]="true">
</ejs-message>`;

  withCloseIconExample = `<ejs-message
  [severity]="'Warning'"
  [content]="'This is a warning message.'"
  [showIcon]="true"
  [showCloseIcon]="true">
</ejs-message>`;
}

