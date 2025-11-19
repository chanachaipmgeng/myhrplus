import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';
import { DatePreset } from '../../../../shared/components/date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-date-range-picker-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './date-range-picker-demo.component.html',
  styleUrls: ['./date-range-picker-demo.component.scss']
})
export class DateRangePickerDemoComponent {
  presets: DatePreset[] = [
    {
      label: 'วันนี้',
      startDate: new Date(),
      endDate: new Date()
    },
    {
      label: 'สัปดาห์นี้',
      startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
      endDate: new Date()
    },
    {
      label: 'เดือนนี้',
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      endDate: new Date()
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'startDate',
      type: 'Date | null',
      default: 'null',
      description: 'Start date',
      required: false
    },
    {
      name: 'endDate',
      type: 'Date | null',
      default: 'null',
      description: 'End date',
      required: false
    },
    {
      name: 'presets',
      type: 'DatePreset[]',
      default: '[]',
      description: 'Date preset options',
      required: false
    },
    {
      name: 'showPresets',
      type: 'boolean',
      default: 'true',
      description: 'Show preset options',
      required: false
    },
    {
      name: 'minDate',
      type: 'Date | null',
      default: 'null',
      description: 'Minimum selectable date',
      required: false
    },
    {
      name: 'maxDate',
      type: 'Date | null',
      default: 'null',
      description: 'Maximum selectable date',
      required: false
    },
    {
      name: 'format',
      type: 'string',
      default: "'dd/MM/yyyy'",
      description: 'Date format',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'rangeChange',
      type: 'EventEmitter<{start: Date | null, end: Date | null}>',
      default: '-',
      description: 'Emitted when date range changes',
      required: false
    }
  ];

  basicExample = `<app-date-range-picker
  (rangeChange)="onRangeChange($event)">
</app-date-range-picker>`;

  withPresetsExample = `<app-date-range-picker
  [presets]="presets"
  (rangeChange)="onRangeChange($event)">
</app-date-range-picker>`;

  onRangeChange(range: {start: Date | null, end: Date | null}): void {
    console.log('Date range:', range);
  }
}
