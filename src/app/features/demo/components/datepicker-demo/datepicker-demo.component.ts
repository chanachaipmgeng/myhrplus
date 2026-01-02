import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-datepicker-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './datepicker-demo.component.html',
  styleUrls: ['./datepicker-demo.component.scss']
})
export class DatepickerDemoComponent {
  selectedDate: Date | null = null;
  minDate: Date = new Date(2020, 0, 1);
  maxDate: Date = new Date(2030, 11, 31);
  placeholder: string = 'Select a date';
  enabled: boolean = true;
  readonly: boolean = false;
  showClearButton: boolean = true;
  format: string = 'dd/MM/yyyy';
  firstDayOfWeek: number = 0; // Sunday

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'Date | null',
      default: 'null',
      description: 'Selected date value',
      required: false
    },
    {
      name: 'min',
      type: 'Date',
      default: 'null',
      description: 'Minimum selectable date',
      required: false
    },
    {
      name: 'max',
      type: 'Date',
      default: 'null',
      description: 'Maximum selectable date',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Select a date'",
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
      default: "'dd/MM/yyyy'",
      description: 'Date format string',
      required: false
    },
    {
      name: 'firstDayOfWeek',
      type: 'number',
      default: '0',
      description: 'First day of week (0=Sunday, 1=Monday, etc.)',
      required: false
    }
  ];

  basicExample = `<ejs-datepicker
  [(value)]="selectedDate"
  [placeholder]="'Select a date'"
  [format]="'dd/MM/yyyy'"
  [showClearButton]="true">
</ejs-datepicker>`;

  withMinMaxExample = `<ejs-datepicker
  [(value)]="selectedDate"
  [min]="minDate"
  [max]="maxDate"
  [placeholder]="'Select a date'">
</ejs-datepicker>`;

  readonlyExample = `<ejs-datepicker
  [(value)]="selectedDate"
  [readonly]="true"
  [placeholder]="'Readonly date picker'">
</ejs-datepicker>`;

  disabledExample = `<ejs-datepicker
  [(value)]="selectedDate"
  [enabled]="false"
  [placeholder]="'Disabled date picker'">
</ejs-datepicker>`;

  onDateChange(args: any): void {
    console.log('Date changed:', args.value);
  }
}

