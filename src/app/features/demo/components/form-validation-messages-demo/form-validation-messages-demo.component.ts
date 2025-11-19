import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '../../../../shared/components/glass-input/glass-input.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-form-validation-messages-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, GlassCardComponent, GlassInputComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './form-validation-messages-demo.component.html',
  styleUrls: ['./form-validation-messages-demo.component.scss']
})
export class FormValidationMessagesDemoComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  phoneControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);

  props: PropDefinition[] = [
    {
      name: 'control',
      type: 'AbstractControl | null',
      default: '-',
      description: 'Form control to validate',
      required: true
    },
    {
      name: 'customMessages',
      type: '{ [key: string]: string }',
      default: '{}',
      description: 'Custom validation messages',
      required: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show error icon',
      required: false
    },
    {
      name: 'showOnlyFirst',
      type: 'boolean',
      default: 'true',
      description: 'Show only first error',
      required: false
    },
    {
      name: 'position',
      type: "'below' | 'inline'",
      default: "'below'",
      description: 'Message position',
      required: false
    }
  ];

  basicExample = `<app-form-validation-messages [control]="emailControl"></app-form-validation-messages>`;

  withInputExample = `<app-glass-input
  label="Email"
  [(ngModel)]="email"
  [required]="true">
</app-glass-input>
<app-form-validation-messages [control]="emailControl"></app-form-validation-messages>`;

  customMessagesExample = `<app-form-validation-messages
  [control]="control"
  [customMessages]="{
    required: 'กรุณากรอกอีเมล',
    email: 'รูปแบบอีเมลไม่ถูกต้อง'
  }">
</app-form-validation-messages>`;
}
