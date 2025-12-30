import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassTextareaComponent } from '@shared/components/glass-textarea/glass-textarea.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-textarea-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassTextareaComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-textarea-demo.component.html',
  styleUrls: ['./glass-textarea-demo.component.scss']
})
export class GlassTextareaDemoComponent {
  textareaValue: string = '';
  autoResizeValue: string = '';
  counterValue: string = '';
  requiredValue: string = '';
  errorValue: string = '';

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Textarea label text',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "''",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'rows',
      type: 'number',
      default: '4',
      description: 'Number of visible rows',
      required: false
    },
    {
      name: 'maxLength',
      type: 'number | null',
      default: 'null',
      description: 'Maximum character length',
      required: false
    },
    {
      name: 'autoResize',
      type: 'boolean',
      default: 'false',
      description: 'Automatically resize based on content',
      required: false
    },
    {
      name: 'showCounter',
      type: 'boolean',
      default: 'false',
      description: 'Show character counter',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable textarea interaction',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark textarea as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below textarea',
      required: false
    },
    {
      name: 'errorMessage',
      type: 'string',
      default: "''",
      description: 'Error message to display',
      required: false
    }
  ];

  basicExample = `<app-glass-textarea
  label="Description"
  placeholder="Enter description..."
  [(ngModel)]="description">
</app-glass-textarea>`;

  autoResizeExample = `<app-glass-textarea
  label="Auto Resize Textarea"
  [autoResize]="true"
  [(ngModel)]="content">
</app-glass-textarea>`;

  counterExample = `<app-glass-textarea
  label="Message"
  [maxLength]="200"
  [showCounter]="true"
  [(ngModel)]="message">
</app-glass-textarea>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  description: ['', [Validators.required, Validators.maxLength(500)]]
});

// In template
<app-glass-textarea
  label="Description"
  formControlName="description"
  [maxLength]="500"
  [showCounter]="true"
  [errorMessage]="getErrorMessage('description')">
</app-glass-textarea>`;
}

