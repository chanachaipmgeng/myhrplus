import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-datetime-picker-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './datetime-picker-demo.component.html',
  styleUrls: ['./datetime-picker-demo.component.scss']
})
export class DatetimePickerDemoComponent {
  selectedDateTime: Date | null = null;
  minDateTime: Date = new Date(2020, 0, 1, 0, 0);
  maxDateTime: Date = new Date(2030, 11, 31, 23, 59);
  placeholder: string = 'Select date and time';
  enabled: boolean = true;
  readonly: boolean = false;
  showClearButton: boolean = true;
  format: string = 'dd/MM/yyyy HH:mm';
  step: number = 30; // minutes

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'Date | null',
      default: 'null',
      description: 'Selected date and time value',
      required: false
    },
    {
      name: 'min',
      type: 'Date',
      default: 'null',
      description: 'Minimum selectable date and time',
      required: false
    },
    {
      name: 'max',
      type: 'Date',
      default: 'null',
      description: 'Maximum selectable date and time',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Select date and time'",
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
      default: "'dd/MM/yyyy HH:mm'",
      description: 'Date and time format string',
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

  basicExample = `<ejs-datetimepicker
  [(value)]="selectedDateTime"
  [placeholder]="'Select date and time'"
  [format]="'dd/MM/yyyy HH:mm'"
  [showClearButton]="true">
</ejs-datetimepicker>`;

  withMinMaxExample = `<ejs-datetimepicker
  [(value)]="selectedDateTime"
  [min]="minDateTime"
  [max]="maxDateTime"
  [placeholder]="'Select date and time'">
</ejs-datetimepicker>`;

  withStepExample = `<ejs-datetimepicker
  [(value)]="selectedDateTime"
  [step]="30"
  [format]="'dd/MM/yyyy HH:mm'">
</ejs-datetimepicker>`;

  onDateTimeChange(args: any): void {
    console.log('Date and time changed:', args.value);
  }
}

