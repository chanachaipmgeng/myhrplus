import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassInputComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
   templateUrl: './glass-input-demo.component.html',
  styleUrls: ['./glass-input-demo.component.scss']
})
export class GlassInputDemoComponent {
  inputValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';
  disabledValue: string = 'Disabled input';
  readonlyValue: string = 'Readonly input';
  errorValue: string = '';
  hintValue: string = '';

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Input label text',
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
      name: 'type',
      type: 'string',
      default: "'text'",
      description: 'Input type (text, email, password, etc.)',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable input interaction',
      required: false
    },
    {
      name: 'readonly',
      type: 'boolean',
      default: 'false',
      description: 'Make input readonly',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark input as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below input',
      required: false
    },
    {
      name: 'errorMessage',
      type: 'string',
      default: "''",
      description: 'Error message to display',
      required: false
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'true',
      description: 'Make input full width',
      required: false
    }
  ];

  basicExample = `<app-glass-input
  label="Username"
  placeholder="Enter your username"
  [(ngModel)]="username">
</app-glass-input>`;

  typesExample = `<app-glass-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  [(ngModel)]="email">
</app-glass-input>

<app-glass-input
  label="Password"
  type="password"
  placeholder="Enter your password"
  [(ngModel)]="password">
</app-glass-input>`;

  validationExample = `<app-glass-input
  label="Required Field"
  placeholder="This field is required"
  [required]="true"
  [errorMessage]="errorMessage"
  [(ngModel)]="value">
</app-glass-input>`;

  statesExample = `<app-glass-input
  label="Disabled Input"
  [disabled]="true"
  value="Cannot edit this">
</app-glass-input>

<app-glass-input
  label="Readonly Input"
  [readonly]="true"
  value="Readonly value">
</app-glass-input>`;

  hintExample = `<app-glass-input
  label="Password"
  type="password"
  placeholder="Enter password"
  hint="Password must be at least 8 characters"
  [(ngModel)]="password">
</app-glass-input>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]]
});

// In template
<app-glass-input
  label="Username"
  formControlName="username"
  [useFormValidationMessages]="true">
  <app-form-validation-messages [control]="form.get('username')"></app-form-validation-messages>
</app-glass-input>`;

  // Advanced Usage Examples
  advancedExample = `<!-- Input with Form Validation Messages -->
<app-glass-input
  label="Email"
  type="email"
  formControlName="email"
  [useFormValidationMessages]="true">
  <app-form-validation-messages [control]="form.get('email')"></app-form-validation-messages>
</app-glass-input>

<!-- Input with Dynamic Validation -->
<app-glass-input
  label="Password"
  type="password"
  formControlName="password"
  [hint]="getPasswordHint()"
  [useFormValidationMessages]="true">
  <app-form-validation-messages [control]="form.get('password')"></app-form-validation-messages>
</app-glass-input>

<!-- Input with Conditional Disable -->
<app-glass-input
  label="Field"
  [disabled]="isReadonly"
  [(ngModel)]="value">
</app-glass-input>`;

  integrationExample = `// Complete Form Integration
@Component({
  selector: 'app-employee-form',
  template: \`
    <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">
      <app-glass-card padding="p-6">
        <div class="space-y-4">
          <app-glass-input
            label="Name"
            formControlName="name"
            [useFormValidationMessages]="true">
            <app-form-validation-messages [control]="name"></app-form-validation-messages>
          </app-glass-input>

          <app-glass-input
            label="Email"
            type="email"
            formControlName="email"
            [useFormValidationMessages]="true">
            <app-form-validation-messages [control]="email"></app-form-validation-messages>
          </app-glass-input>

          <div class="flex justify-end gap-4">
            <app-glass-button type="submit" [disabled]="employeeForm.invalid">
              Submit
            </app-glass-button>
          </div>
        </div>
      </app-glass-card>
    </form>
  \`
})
export class EmployeeFormComponent {
  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {}

  get name() { return this.employeeForm.get('name'); }
  get email() { return this.employeeForm.get('email'); }
}`;
}
