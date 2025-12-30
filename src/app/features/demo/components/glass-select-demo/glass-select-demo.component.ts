import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlassSelectComponent, SelectOption } from '@shared/components/glass-select/glass-select.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassSelectComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './glass-select-demo.component.html',
  styleUrls: ['./glass-select-demo.component.scss']
})
export class GlassSelectDemoComponent {
  singleValue: any = null;
  multiValue: any[] = [];
  searchableValue: any = null;
  requiredValue: any = null;
  errorValue: any = null;
  disabledValue: any = 'option1';

  options: SelectOption[] = [
    { value: 'option1', label: 'ตัวเลือกที่ 1' },
    { value: 'option2', label: 'ตัวเลือกที่ 2' },
    { value: 'option3', label: 'ตัวเลือกที่ 3' },
    { value: 'option4', label: 'ตัวเลือกที่ 4' },
    { value: 'option5', label: 'ตัวเลือกที่ 5' }
  ];

  countryOptions: SelectOption[] = [
    { value: 'th', label: 'ประเทศไทย' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' }
  ];

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Select label text',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'เลือก...'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'options',
      type: 'SelectOption[]',
      default: '[]',
      description: 'Array of select options',
      required: true
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Enable multiple selection',
      required: false
    },
    {
      name: 'searchable',
      type: 'boolean',
      default: 'true',
      description: 'Enable search/filter functionality',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable select interaction',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark select as required',
      required: false
    },
    {
      name: 'hint',
      type: 'string',
      default: "''",
      description: 'Hint text shown below select',
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

  basicExample = `<app-glass-select
  label="เลือกตัวเลือก"
  [options]="options"
  [(ngModel)]="selectedValue">
</app-glass-select>`;

  multipleExample = `<app-glass-select
  label="เลือกหลายตัวเลือก"
  [options]="options"
  [multiple]="true"
  [(ngModel)]="selectedValues">
</app-glass-select>`;

  searchableExample = `<app-glass-select
  label="ค้นหาตัวเลือก"
  [options]="options"
  [searchable]="true"
  [(ngModel)]="selectedValue">
</app-glass-select>`;

  reactiveFormExample = `// In component.ts
form = this.fb.group({
  country: ['', Validators.required]
});

// In template
<app-glass-select
  label="ประเทศ"
  [options]="countryOptions"
  formControlName="country"
  [errorMessage]="getErrorMessage('country')">
</app-glass-select>`;
}

