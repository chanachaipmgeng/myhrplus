import { Component, ChangeDetectionStrategy, input, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewModule, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import {
  IDataOptions,
  IDataSet,
  FieldListService,
  CalculatedFieldService,
  ToolbarService,
  ConditionalFormattingService,
  GroupingBarService,
  VirtualScrollService,
  DrillThroughService
} from '@syncfusion/ej2-angular-pivotview';

export interface PivotTableConfig {
  dataSource?: IDataOptions;
  dataSourceSettings?: IDataOptions;
  width?: string;
  height?: string;
  gridSettings?: any;
  showToolbar?: boolean;
  showGroupingBar?: boolean;
  showFieldList?: boolean;
  allowCalculatedField?: boolean;
  allowConditionalFormatting?: boolean;
  allowDrillThrough?: boolean;
  enableVirtualization?: boolean;
}

@Component({
  selector: 'app-pivot-table',
  standalone: true,
  imports: [CommonModule, PivotViewModule],
  providers: [
    FieldListService,
    CalculatedFieldService,
    ToolbarService,
    ConditionalFormattingService,
    GroupingBarService,
    VirtualScrollService,
    DrillThroughService
  ],
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PivotTableComponent {
  pivotview = viewChild<PivotViewComponent>('pivotview');

  dataSource = input<IDataOptions | null>(null);
  dataSourceSettings = input<IDataOptions | null>(null);
  width = input<string>('100%');
  height = input<string>('600px');
  showToolbar = input<boolean>(true);
  showGroupingBar = input<boolean>(true);
  showFieldList = input<boolean>(false);
  allowCalculatedField = input<boolean>(true);
  allowConditionalFormatting = input<boolean>(true);
  allowDrillThrough = input<boolean>(true);
  enableVirtualization = input<boolean>(false);
  gridSettings = input<any>({});
  customClass = input<string>('');

  public dataSourceOptions: IDataOptions = {
    dataSource: [],
    expandAll: false,
    enableSorting: true,
    columns: [],
    rows: [],
    values: [],
    filters: [],
    formatSettings: [],
    showGrandTotals: true,
    showSubTotals: true,
    showRowGrandTotals: true,
    showColumnGrandTotals: true,
    showHeaderWhenEmpty: false,
    emptyCellsTextContent: '',
    valueSortSettings: {
      headerText: '',
      headerDelimiter: ' - '
    },
    filterSettings: [],
    sortSettings: [],
    calculatedFieldSettings: [],
    conditionalFormatSettings: [],
    drilledMembers: []
  };

  constructor() {
    effect(() => {
      const ds = this.dataSource();
      const dsSettings = this.dataSourceSettings();

      if (ds) {
        this.dataSourceOptions = { ...this.dataSourceOptions, ...ds };
      } else if (dsSettings) {
        this.dataSourceOptions = { ...this.dataSourceOptions, ...dsSettings };
      }

      const pivot = this.pivotview();
      if (pivot) {
        pivot.dataSourceSettings = this.dataSourceOptions;
        pivot.refresh();
      }
    });
  }

  /**
   * Update data source
   * @deprecated Use input binding [dataSource] or [dataSourceSettings] instead
   */
  updateDataSource(dataSource: IDataOptions): void {
    this.dataSourceOptions = { ...this.dataSourceOptions, ...dataSource };
    const pivot = this.pivotview();
    if (pivot) {
      pivot.dataSourceSettings = this.dataSourceOptions;
      pivot.refresh();
    }
  }

  /**
   * Refresh pivot table
   */
  refresh(): void {
    this.pivotview()?.refresh();
  }

  /**
   * Export to Excel
   */
  exportToExcel(): void {
    this.pivotview()?.excelExport();
  }

  /**
   * Export to PDF
   */
  exportToPDF(): void {
    this.pivotview()?.pdfExport();
  }

  /**
   * Export to CSV
   */
  exportToCSV(): void {
    this.pivotview()?.csvExport();
  }

  /**
   * Print
   */
  print(): void {
    (this.pivotview() as any)?.print();
  }

  /**
   * Get pivot table instance
   */
  getPivotViewInstance(): any {
    return this.pivotview() ?? null;
  }
}

