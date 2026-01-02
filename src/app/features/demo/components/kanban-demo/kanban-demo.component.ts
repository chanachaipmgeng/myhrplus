import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-kanban-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './kanban-demo.component.html',
  styleUrls: ['./kanban-demo.component.scss']
})
export class KanbanDemoComponent {
  kanbanData: any[] = [
    {
      Id: 1,
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1
    },
    {
      Id: 2,
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1
    },
    {
      Id: 3,
      Status: 'Testing',
      Summary: 'Test the application in the IE browser.',
      Type: 'Testing',
      Priority: 'Critical',
      Tags: 'Testing,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 1
    },
    {
      Id: 4,
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Release Breaker',
      Tags: 'SQL,Server',
      Estimate: 2.5,
      Assignee: 'Steven walker',
      RankId: 1
    }
  ];

  columns: any[] = [
    { headerText: 'To Do', keyField: 'Open' },
    { headerText: 'In Progress', keyField: 'InProgress' },
    { headerText: 'Testing', keyField: 'Testing' },
    { headerText: 'Done', keyField: 'Close' }
  ];

  cardSettings: any = {
    contentField: 'Summary',
    headerField: 'Id',
    tagsField: 'Tags',
    grabberField: 'Type',
    footerField: 'Assignee'
  };

  props: PropDefinition[] = [
    {
      name: 'dataSource',
      type: 'any[]',
      default: '[]',
      description: 'Kanban data source',
      required: true
    },
    {
      name: 'columns',
      type: 'any[]',
      default: '[]',
      description: 'Column definitions',
      required: true
    },
    {
      name: 'cardSettings',
      type: 'object',
      default: '{}',
      description: 'Card display settings',
      required: false
    },
    {
      name: 'allowDragAndDrop',
      type: 'boolean',
      default: 'true',
      description: 'Enable drag and drop',
      required: false
    },
    {
      name: 'allowToggle',
      type: 'boolean',
      default: 'true',
      description: 'Allow column toggle',
      required: false
    }
  ];

  basicExample = `<ejs-kanban
  [dataSource]="kanbanData"
  [columns]="columns"
  [cardSettings]="cardSettings"
  [allowDragAndDrop]="true">
</ejs-kanban>`;

  dragDropExample = `<ejs-kanban
  [dataSource]="kanbanData"
  [columns]="columns"
  [cardSettings]="cardSettings"
  [allowDragAndDrop]="true"
  (actionComplete)="onActionComplete($event)">
</ejs-kanban>`;

  columnCustomizationExample = `columns: any[] = [
  { headerText: 'To Do', keyField: 'Open' },
  { headerText: 'In Progress', keyField: 'InProgress' },
  { headerText: 'Testing', keyField: 'Testing' },
  { headerText: 'Done', keyField: 'Close' }
];`;

  cardTemplateExample = `cardSettings: any = {
  contentField: 'Summary',
  headerField: 'Id',
  tagsField: 'Tags',
  grabberField: 'Type',
  footerField: 'Assignee'
};`;

  onActionComplete(args: any): void {
    console.log('Kanban action completed:', args);
  }
}

