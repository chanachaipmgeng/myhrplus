import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassRadioComponent } from '@shared/components/glass-radio/glass-radio.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-glass-radio-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassRadioComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-radio-demo.component.html',
  styleUrls: ['./glass-radio-demo.component.scss']
})
export class GlassRadioDemoComponent {
  selectedOption: string = 'option1';
  requiredOption: string = '';
  errorOption: string = '';

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Radio button label text',
      required: false
    },
    {
      name: 'value',
      type: 'any',
      default: 'undefined',
      description: 'Radio button value',
      required: true
    },
    {
      name: 'name',
      type: 'string',
      default: "''",
      description: 'Radio group name (must be same for all radios in group)',
      required: true
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Radio button checked state',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable radio button interaction',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark radio button as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below radio button',
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

  basicExample = `<app-glass-radio
  label="Option 1"
  value="option1"
  name="options"
  [(ngModel)]="selected">
</app-glass-radio>

<app-glass-radio
  label="Option 2"
  value="option2"
  name="options"
  [(ngModel)]="selected">
</app-glass-radio>`;

  statesExample = `<app-glass-radio
  label="Unchecked Radio"
  value="unchecked"
  name="options"
  [checked]="false">
</app-glass-radio>

<app-glass-radio
  label="Checked Radio"
  value="checked"
  name="options"
  [checked]="true">
</app-glass-radio>

<app-glass-radio
  label="Disabled Radio"
  value="disabled"
  name="options"
  [disabled]="true"
  [checked]="true">
</app-glass-radio>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  gender: ['', Validators.required]
});

// In template
<app-glass-radio
  label="Male"
  value="male"
  name="gender"
  formControlName="gender">
</app-glass-radio>

<app-glass-radio
  label="Female"
  value="female"
  name="gender"
  formControlName="gender">
</app-glass-radio>`;
}

