import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassCheckboxComponent } from '@shared/components/glass-checkbox/glass-checkbox.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-glass-checkbox-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassCheckboxComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-checkbox-demo.component.html',
  styleUrls: ['./glass-checkbox-demo.component.scss']
})
export class GlassCheckboxDemoComponent {
  checked1: boolean = false;
  checked2: boolean = true;
  checked3: boolean = false;
  indeterminate: boolean = false;
  requiredChecked: boolean = false;
  errorChecked: boolean = false;

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Checkbox label text',
      required: false
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Checkbox checked state',
      required: false
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      default: 'false',
      description: 'Checkbox indeterminate state',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable checkbox interaction',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark checkbox as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below checkbox',
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

  basicExample = `<app-glass-checkbox
  label="Accept terms and conditions"
  [(ngModel)]="accepted">
</app-glass-checkbox>`;

  statesExample = `<app-glass-checkbox
  label="Checked Checkbox"
  [checked]="true">
</app-glass-checkbox>

<app-glass-checkbox
  label="Unchecked Checkbox"
  [checked]="false">
</app-glass-checkbox>

<app-glass-checkbox
  label="Disabled Checkbox"
  [disabled]="true"
  [checked]="true">
</app-glass-checkbox>`;

  indeterminateExample = `<app-glass-checkbox
  label="Select All"
  [indeterminate]="true">
</app-glass-checkbox>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  acceptTerms: [false, Validators.requiredTrue]
});

// In template
<app-glass-checkbox
  label="I accept the terms"
  formControlName="acceptTerms"
  [errorMessage]="getErrorMessage('acceptTerms')">
</app-glass-checkbox>`;
}

