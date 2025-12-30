import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassSwitchComponent } from '@shared/components/glass-switch/glass-switch.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-glass-switch-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassSwitchComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-switch-demo.component.html',
  styleUrls: ['./glass-switch-demo.component.scss']
})
export class GlassSwitchDemoComponent {
  switch1: boolean = false;
  switch2: boolean = true;
  switch3: boolean = false;
  requiredSwitch: boolean = false;
  errorSwitch: boolean = false;

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Switch label text',
      required: false
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Switch checked state',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable switch interaction',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Switch size variant',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark switch as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below switch',
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

  basicExample = `<app-glass-switch
  label="Enable notifications"
  [(ngModel)]="enabled">
</app-glass-switch>`;

  sizesExample = `<app-glass-switch
  label="Small Switch"
  size="sm"
  [(ngModel)]="smallSwitch">
</app-glass-switch>

<app-glass-switch
  label="Medium Switch"
  size="md"
  [(ngModel)]="mediumSwitch">
</app-glass-switch>

<app-glass-switch
  label="Large Switch"
  size="lg"
  [(ngModel)]="largeSwitch">
</app-glass-switch>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  notifications: [false, Validators.requiredTrue]
});

// In template
<app-glass-switch
  label="Enable notifications"
  formControlName="notifications"
  [errorMessage]="getErrorMessage('notifications')">
</app-glass-switch>`;
}

