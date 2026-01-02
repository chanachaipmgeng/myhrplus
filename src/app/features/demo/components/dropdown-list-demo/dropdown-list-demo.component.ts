import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-dropdown-list-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './dropdown-list-demo.component.html',
  styleUrls: ['./dropdown-list-demo.component.scss']
})
export class DropdownListDemoComponent {
  selectedValue: string | null = null;
  dataSource: any[] = [
    { id: '1', text: 'Thailand' },
    { id: '2', text: 'United States' },
    { id: '3', text: 'United Kingdom' },
    { id: '4', text: 'Japan' },
    { id: '5', text: 'South Korea' },
    { id: '6', text: 'China' },
    { id: '7', text: 'Singapore' },
    { id: '8', text: 'Malaysia' },
    { id: '9', text: 'Indonesia' },
    { id: '10', text: 'Philippines' }
  ];
  fields: any = { value: 'id', text: 'text' };
  placeholder: string = 'Select a country';
  allowFiltering: boolean = true;
  enabled: boolean = true;
  readonly: boolean = false;
  showClearButton: boolean = true;

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'string | null',
      default: 'null',
      description: 'Selected value',
      required: false
    },
    {
      name: 'dataSource',
      type: 'any[]',
      default: '[]',
      description: 'Data source for the dropdown',
      required: true
    },
    {
      name: 'fields',
      type: 'object',
      default: '{ value: "id", text: "text" }',
      description: 'Field mapping for data source',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Select an item'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'allowFiltering',
      type: 'boolean',
      default: 'true',
      description: 'Enable filtering',
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
    }
  ];

  basicExample = `<ejs-dropdownlist
  [(value)]="selectedValue"
  [dataSource]="dataSource"
  [fields]="fields"
  [placeholder]="'Select a country'"
  [allowFiltering]="true">
</ejs-dropdownlist>`;

  readonlyExample = `<ejs-dropdownlist
  [(value)]="selectedValue"
  [dataSource]="dataSource"
  [fields]="fields"
  [readonly]="true">
</ejs-dropdownlist>`;

  disabledExample = `<ejs-dropdownlist
  [(value)]="selectedValue"
  [dataSource]="dataSource"
  [fields]="fields"
  [enabled]="false">
</ejs-dropdownlist>`;

  onValueChange(args: any): void {
    console.log('Value changed:', args.value);
  }
}

