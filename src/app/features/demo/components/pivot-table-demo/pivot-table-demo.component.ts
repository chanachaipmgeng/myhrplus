import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotTableComponent } from '@shared/components/pivot-table/pivot-table.component';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-pivot-table-demo',
  standalone: true,
  imports: [CommonModule, PivotTableComponent, GlassCardComponent, CodeViewerComponent],
  templateUrl: './pivot-table-demo.component.html',
  styleUrls: ['./pivot-table-demo.component.scss']
})
export class PivotTableDemoComponent {
  // Sample data
  sampleData: IDataOptions = {
    dataSource: [
      { Country: 'USA', Product: 'Laptop', Year: 2023, Sales: 100000, Quantity: 500 },
      { Country: 'USA', Product: 'Mobile', Year: 2023, Sales: 80000, Quantity: 800 },
      { Country: 'USA', Product: 'Tablet', Year: 2023, Sales: 60000, Quantity: 300 },
      { Country: 'UK', Product: 'Laptop', Year: 2023, Sales: 90000, Quantity: 450 },
      { Country: 'UK', Product: 'Mobile', Year: 2023, Sales: 70000, Quantity: 700 },
      { Country: 'UK', Product: 'Tablet', Year: 2023, Sales: 50000, Quantity: 250 },
      { Country: 'Germany', Product: 'Laptop', Year: 2023, Sales: 85000, Quantity: 425 },
      { Country: 'Germany', Product: 'Mobile', Year: 2023, Sales: 75000, Quantity: 750 },
      { Country: 'Germany', Product: 'Tablet', Year: 2023, Sales: 55000, Quantity: 275 },
      { Country: 'USA', Product: 'Laptop', Year: 2024, Sales: 120000, Quantity: 600 },
      { Country: 'USA', Product: 'Mobile', Year: 2024, Sales: 95000, Quantity: 950 },
      { Country: 'USA', Product: 'Tablet', Year: 2024, Sales: 70000, Quantity: 350 },
      { Country: 'UK', Product: 'Laptop', Year: 2024, Sales: 100000, Quantity: 500 },
      { Country: 'UK', Product: 'Mobile', Year: 2024, Sales: 80000, Quantity: 800 },
      { Country: 'UK', Product: 'Tablet', Year: 2024, Sales: 60000, Quantity: 300 },
      { Country: 'Germany', Product: 'Laptop', Year: 2024, Sales: 95000, Quantity: 475 },
      { Country: 'Germany', Product: 'Mobile', Year: 2024, Sales: 85000, Quantity: 850 },
      { Country: 'Germany', Product: 'Tablet', Year: 2024, Sales: 65000, Quantity: 325 }
    ],
    rows: [{ name: 'Country' }, { name: 'Product' }],
    columns: [{ name: 'Year' }],
    values: [
      { name: 'Sales', caption: 'Total Sales' },
      { name: 'Quantity', caption: 'Total Quantity' }
    ],
    formatSettings: [
      { name: 'Sales', format: 'C0' },
      { name: 'Quantity', format: 'N0' }
    ],
    showGrandTotals: true,
    showSubTotals: true,
    showRowGrandTotals: true,
    showColumnGrandTotals: true
  };

  // Basic configuration
  basicConfig: IDataOptions = {
    dataSource: [
      { Region: 'North', Product: 'Laptop', Sales: 50000 },
      { Region: 'North', Product: 'Mobile', Sales: 30000 },
      { Region: 'South', Product: 'Laptop', Sales: 45000 },
      { Region: 'South', Product: 'Mobile', Sales: 35000 }
    ],
    rows: [{ name: 'Region' }],
    columns: [{ name: 'Product' }],
    values: [{ name: 'Sales', caption: 'Total Sales' }],
    formatSettings: [{ name: 'Sales', format: 'C0' }]
  };

  // Code examples
  basicExample = `<app-pivot-table
  [dataSource]="pivotData"
  [width]="'100%'"
  [height]="'600px'"
  [showToolbar]="true"
  [showGroupingBar]="true"
  [showFieldList]="false"
  [allowCalculatedField]="true"
  [allowConditionalFormatting]="true">
</app-pivot-table>`;
}

