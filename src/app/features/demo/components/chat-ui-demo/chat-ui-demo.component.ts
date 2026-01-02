import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-chat-ui-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './chat-ui-demo.component.html',
  styleUrls: ['./chat-ui-demo.component.scss']
})
export class ChatUiDemoComponent {
  height: string = '600px';
  width: string = '100%';
  placeholder: string = 'Type a message...';

  props: PropDefinition[] = [
    {
      name: 'height',
      type: 'string',
      default: "'600px'",
      description: 'Component height',
      required: false
    },
    {
      name: 'width',
      type: 'string',
      default: "'100%'",
      description: 'Component width',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Type a message...'",
      description: 'Input placeholder text',
      required: false
    }
  ];

  basicExample = `<div
  ejs-chatui
  [height]="'600px'"
  [width]="'100%'"
  [placeholder]="'Type a message...'"
  (messageSend)="onMessageSent($event)">
</div>`;

  messageHandlingExample = `onMessageSent(args: any): void {
  console.log('Message sent:', args);
  // Process message, send to server, or display in chat history
}`;

  placeholderExample = `<div
  ejs-chatui
  [placeholder]="'Enter your message here...'"
  (messageSend)="onMessageSent($event)">
</div>`;

  responsiveExample = `<div
  ejs-chatui
  [height]="'400px'"
  [width]="'100%'"
  class="w-full md:h-[600px]">
</div>`;

  onMessageSent(args: any): void {
    console.log('Message sent:', args);
  }
}

