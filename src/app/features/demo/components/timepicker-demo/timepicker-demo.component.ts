import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-timepicker-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './timepicker-demo.component.html',
  styleUrls: ['./timepicker-demo.component.scss']
})
export class TimepickerDemoComponent {
  selectedTime: Date | null = null;
  minTime: Date = new Date(2000, 0, 1, 0, 0);
  maxTime: Date = new Date(2000, 0, 1, 23, 59);
  placeholder: string = 'Select time';
  enabled: boolean = true;
  readonly: boolean = false;
  showClearButton: boolean = true;
  format: string = 'HH:mm';
  step: number = 30; // minutes

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'Date | null',
      default: 'null',
      description: 'Selected time value',
      required: false
    },
    {
      name: 'min',
      type: 'Date',
      default: 'null',
      description: 'Minimum selectable time',
      required: false
    },
    {
      name: 'max',
      type: 'Date',
      default: 'null',
      description: 'Maximum selectable time',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Select time'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'enabled',
      type: 'boolean',
      default: 'true',
      description: 'Enable/disable the component',
      required: false
    },
    {
      name: 'readonly',
      type: 'boolean',
      default: 'false',
      description: 'Make the component readonly',
      required: false
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      default: 'true',
      description: 'Show clear button',
      required: false
    },
    {
      name: 'format',
      type: 'string',
      default: "'HH:mm'",
      description: 'Time format string',
      required: false
    },
    {
      name: 'step',
      type: 'number',
      default: '30',
      description: 'Time step in minutes',
      required: false
    }
  ];

  basicExample = `<ejs-timepicker
  [(value)]="selectedTime"
  [placeholder]="'Select time'"
  [format]="'HH:mm'"
  [showClearButton]="true">
</ejs-timepicker>`;

  withMinMaxExample = `<ejs-timepicker
  [(value)]="selectedTime"
  [min]="minTime"
  [max]="maxTime"
  [placeholder]="'Select time'">
</ejs-timepicker>`;

  withStepExample = `<ejs-timepicker
  [(value)]="selectedTime"
  [step]="30"
  [format]="'HH:mm'">
</ejs-timepicker>`;

  onTimeChange(args: any): void {
    console.log('Time changed:', args.value);
  }
}

