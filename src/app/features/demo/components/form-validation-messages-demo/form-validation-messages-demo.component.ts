import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { FormValidationMessagesComponent } from '@shared/components/form-validation-messages/form-validation-messages.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-form-validation-messages-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GlassCardComponent, GlassInputComponent, FormValidationMessagesComponent, CodeViewerComponent, PropsTableComponent],
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

  // Advanced Usage Examples
  advancedExample = `<!-- Complete Form with Validation -->
<form [formGroup]="form">
  <app-glass-input
    label="Email"
    formControlName="email"
    [useFormValidationMessages]="true">
    <app-form-validation-messages [control]="form.get('email')"></app-form-validation-messages>
  </app-glass-input>

  <app-glass-input
    label="Password"
    type="password"
    formControlName="password"
    [useFormValidationMessages]="true">
    <app-form-validation-messages [control]="form.get('password')"></app-form-validation-messages>
  </app-glass-input>
</form>

<!-- Custom Messages -->
<app-form-validation-messages
  [control]="control"
  [customMessages]="{
    required: 'This field is required',
    minlength: 'Minimum length is 8 characters',
    pattern: 'Invalid format'
  }">
</app-form-validation-messages>`;

  integrationExample = `// Complete Form Integration
@Component({
  selector: 'app-registration-form',
  template: \`
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <app-glass-card padding="p-6">
        <div class="space-y-4">
          <app-glass-input
            label="Email"
            type="email"
            formControlName="email"
            [useFormValidationMessages]="true">
            <app-form-validation-messages [control]="email"></app-form-validation-messages>
          </app-glass-input>

          <app-glass-input
            label="Password"
            type="password"
            formControlName="password"
            [useFormValidationMessages]="true">
            <app-form-validation-messages [control]="password"></app-form-validation-messages>
          </app-glass-input>

          <app-glass-button
            type="submit"
            [disabled]="registrationForm.invalid">
            Register
          </app-glass-button>
        </div>
      </app-glass-card>
    </form>
  \`
})
export class RegistrationFormComponent {
  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder) {}

  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    // Handle form submission
  }
}`;
}
