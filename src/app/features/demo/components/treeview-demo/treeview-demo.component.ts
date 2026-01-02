import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-treeview-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './treeview-demo.component.html',
  styleUrls: ['./treeview-demo.component.scss']
})
export class TreeviewDemoComponent {
  treeData: any[] = [
    {
      id: '1',
      text: 'Documents',
      expanded: true,
      child: [
        { id: '1-1', text: 'Work' },
        { id: '1-2', text: 'Personal' }
      ]
    },
    {
      id: '2',
      text: 'Downloads',
      child: [
        { id: '2-1', text: 'Images' },
        { id: '2-2', text: 'Videos' },
        { id: '2-3', text: 'Documents' }
      ]
    },
    {
      id: '3',
      text: 'Music',
      child: [
        { id: '3-1', text: 'Artists' },
        { id: '3-2', text: 'Albums' },
        { id: '3-3', text: 'Songs' }
      ]
    },
    {
      id: '4',
      text: 'Pictures',
      child: [
        { id: '4-1', text: 'Camera' },
        { id: '4-2', text: 'Screenshots' }
      ]
    }
  ];

  fields: any = { dataSource: this.treeData, id: 'id', text: 'text', child: 'child' };

  showCheckBox: boolean = false;
  allowMultiSelection: boolean = false;
  allowDragAndDrop: boolean = false;

  props: PropDefinition[] = [
    {
      name: 'fields',
      type: 'object',
      default: '{ dataSource: [], id: "id", text: "text", child: "child" }',
      description: 'Field mapping for tree data',
      required: true
    },
    {
      name: 'showCheckBox',
      type: 'boolean',
      default: 'false',
      description: 'Show checkboxes for selection',
      required: false
    },
    {
      name: 'allowMultiSelection',
      type: 'boolean',
      default: 'false',
      description: 'Allow multiple node selection',
      required: false
    },
    {
      name: 'allowDragAndDrop',
      type: 'boolean',
      default: 'false',
      description: 'Enable drag and drop',
      required: false
    }
  ];

  basicExample = `<ejs-treeview
  [fields]="fields">
</ejs-treeview>`;

  withCheckboxExample = `<ejs-treeview
  [fields]="fields"
  [showCheckBox]="true">
</ejs-treeview>`;

  onNodeSelect(args: any): void {
    console.log('Node selected:', args.nodeData.text);
  }
}

