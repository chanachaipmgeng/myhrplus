import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-listview-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './listview-demo.component.html',
  styleUrls: ['./listview-demo.component.scss']
})
export class ListviewDemoComponent {
  selectedItems: string[] = [];
  dataSource: any[] = [
    { id: '1', text: 'Thailand', icon: 'flag' },
    { id: '2', text: 'United States', icon: 'flag' },
    { id: '3', text: 'United Kingdom', icon: 'flag' },
    { id: '4', text: 'Japan', icon: 'flag' },
    { id: '5', text: 'South Korea', icon: 'flag' },
    { id: '6', text: 'China', icon: 'flag' },
    { id: '7', text: 'Singapore', icon: 'flag' },
    { id: '8', text: 'Malaysia', icon: 'flag' },
    { id: '9', text: 'Indonesia', icon: 'flag' },
    { id: '10', text: 'Philippines', icon: 'flag' }
  ];
  fields: any = { id: 'id', text: 'text', iconCss: 'icon' };
  showCheckBox: boolean = false;
  enableRtl: boolean = false;
  enableHtmlSanitizer: boolean = true;

  props: PropDefinition[] = [
    {
      name: 'dataSource',
      type: 'any[]',
      default: '[]',
      description: 'Data source for the list',
      required: true
    },
    {
      name: 'fields',
      type: 'object',
      default: '{ id: "id", text: "text" }',
      description: 'Field mapping for data source',
      required: false
    },
    {
      name: 'showCheckBox',
      type: 'boolean',
      default: 'false',
      description: 'Show checkboxes for selection',
      required: false
    },
    {
      name: 'enableRtl',
      type: 'boolean',
      default: 'false',
      description: 'Enable right-to-left layout',
      required: false
    },
    {
      name: 'enableHtmlSanitizer',
      type: 'boolean',
      default: 'true',
      description: 'Enable HTML sanitizer for security',
      required: false
    }
  ];

  basicExample = `<ejs-listview
  [dataSource]="dataSource"
  [fields]="fields">
</ejs-listview>`;

  withCheckboxExample = `<ejs-listview
  [dataSource]="dataSource"
  [fields]="fields"
  [showCheckBox]="true">
</ejs-listview>`;

  onItemSelect(args: any): void {
    console.log('Item selected:', args);
  }
}

