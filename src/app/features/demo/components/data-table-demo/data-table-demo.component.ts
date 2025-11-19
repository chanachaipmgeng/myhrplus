import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';
import { TableColumn } from '../../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-data-table-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent {
  columns: TableColumn[] = [
    { key: 'id', label: 'ID', type: 'number' },
    { key: 'name', label: 'ชื่อ', type: 'text' },
    { key: 'email', label: 'อีเมล', type: 'text' },
    { key: 'status', label: 'สถานะ', type: 'text' },
    { key: 'date', label: 'วันที่', type: 'date' }
  ];

  tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', date: new Date('2024-01-15') },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', date: new Date('2024-01-16') },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'Active', date: new Date('2024-01-17') },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending', date: new Date('2024-01-18') },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'Active', date: new Date('2024-01-19') }
  ];

  props: PropDefinition[] = [
    {
      name: 'columns',
      type: 'TableColumn[]',
      default: '[]',
      description: 'Table column definitions',
      required: true
    },
    {
      name: 'data',
      type: 'any[]',
      default: '[]',
      description: 'Table data array',
      required: true
    },
    {
      name: 'pageSize',
      type: 'number',
      default: '10',
      description: 'Items per page',
      required: false
    },
    {
      name: 'pageSizeOptions',
      type: 'number[]',
      default: '[5, 10, 25, 100]',
      description: 'Page size options',
      required: false
    },
    {
      name: 'showActions',
      type: 'boolean',
      default: 'false',
      description: 'Show action column',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'actionClick',
      type: 'EventEmitter<{action: string, row: any}>',
      default: '-',
      description: 'Emitted when action is clicked',
      required: false
    }
  ];

  basicExample = `<app-data-table
  [columns]="columns"
  [data]="tableData">
</app-data-table>`;

  withActionsExample = `<app-data-table
  [columns]="columns"
  [data]="tableData"
  [showActions]="true"
  (actionClick)="onActionClick($event)">
</app-data-table>`;

  columnsExample = `columns: TableColumn[] = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'email', label: 'Email', type: 'text' },
  { key: 'date', label: 'Date', type: 'date' }
];`;

  onActionClick(event: {action: string, row: any}): void {
    console.log('Action:', event.action, 'Row:', event.row);
  }
}
