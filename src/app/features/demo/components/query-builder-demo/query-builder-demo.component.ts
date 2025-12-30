import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryBuilderComponent, QueryBuilderColumn } from '@shared/components/query-builder/query-builder.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';

@Component({
  selector: 'app-query-builder-demo',
  standalone: true,
  imports: [CommonModule, QueryBuilderComponent, GlassCardComponent, CodeViewerComponent],
  templateUrl: './query-builder-demo.component.html',
  styleUrls: ['./query-builder-demo.component.scss']
})
export class QueryBuilderDemoComponent {
  // Sample data
  sampleData: any[] = [
    { EmployeeID: 1, EmployeeName: 'John Doe', Designation: 'Developer', Country: 'USA', Salary: 50000 },
    { EmployeeID: 2, EmployeeName: 'Jane Smith', Designation: 'Manager', Country: 'UK', Salary: 60000 },
    { EmployeeID: 3, EmployeeName: 'Bob Wilson', Designation: 'Designer', Country: 'USA', Salary: 45000 },
    { EmployeeID: 4, EmployeeName: 'Alice Brown', Designation: 'Developer', Country: 'Canada', Salary: 55000 }
  ];

  // Columns configuration
  columns: QueryBuilderColumn[] = [
    {
      field: 'EmployeeID',
      label: 'Employee ID',
      type: 'number',
      operators: [
        { key: 'equal', value: 'Equal' },
        { key: 'notequal', value: 'Not Equal' },
        { key: 'greaterthan', value: 'Greater Than' },
        { key: 'lessthan', value: 'Less Than' }
      ]
    },
    {
      field: 'EmployeeName',
      label: 'Employee Name',
      type: 'string',
      operators: [
        { key: 'equal', value: 'Equal' },
        { key: 'notequal', value: 'Not Equal' },
        { key: 'contains', value: 'Contains' },
        { key: 'startswith', value: 'Starts With' },
        { key: 'endswith', value: 'Ends With' }
      ]
    },
    {
      field: 'Designation',
      label: 'Designation',
      type: 'string',
      operators: [
        { key: 'equal', value: 'Equal' },
        { key: 'notequal', value: 'Not Equal' },
        { key: 'contains', value: 'Contains' }
      ],
      values: ['Developer', 'Manager', 'Designer', 'Analyst']
    },
    {
      field: 'Country',
      label: 'Country',
      type: 'string',
      operators: [
        { key: 'equal', value: 'Equal' },
        { key: 'notequal', value: 'Not Equal' }
      ],
      values: ['USA', 'UK', 'Canada', 'Australia']
    },
    {
      field: 'Salary',
      label: 'Salary',
      type: 'number',
      operators: [
        { key: 'equal', value: 'Equal' },
        { key: 'notequal', value: 'Not Equal' },
        { key: 'greaterthan', value: 'Greater Than' },
        { key: 'lessthan', value: 'Less Than' },
        { key: 'greaterthanorequal', value: 'Greater Than Or Equal' },
        { key: 'lessthanorequal', value: 'Less Than Or Equal' }
      ]
    }
  ];

  // Basic columns (simpler example)
  basicColumns: QueryBuilderColumn[] = [
    {
      field: 'EmployeeName',
      label: 'Employee Name',
      type: 'string'
    },
    {
      field: 'Designation',
      label: 'Designation',
      type: 'string'
    },
    {
      field: 'Salary',
      label: 'Salary',
      type: 'number'
    }
  ];

  // Initial rule
  initialRule: RuleModel = {
    condition: 'and',
    rules: [
      {
        label: 'Employee Name',
        field: 'EmployeeName',
        type: 'string',
        operator: 'contains',
        value: 'John'
      },
      {
        label: 'Salary',
        field: 'Salary',
        type: 'number',
        operator: 'greaterthan',
        value: 50000
      }
    ]
  };

  // Event handlers
  onRuleChange(event: any): void {
    console.log('Rule changed:', event);
  }

  onChange(event: any): void {
    console.log('Query changed:', event);
  }

  onCreated(event: any): void {
    console.log('Query Builder created:', event);
  }

  // Code examples
  basicExample = `<app-query-builder
  [dataSource]="sampleData"
  [columns]="columns"
  [rule]="initialRule"
  [width]="'100%'"
  [height]="'500px'"
  [allowValidation]="true"
  [enableNotCondition]="true"
  [maxGroupCount]="5"
  [displayMode]="'Horizontal'"
  [showButtons]="true"
  (ruleChange)="onRuleChange($event)"
  (change)="onChange($event)"
  (created)="onCreated($event)">
</app-query-builder>`;
}

