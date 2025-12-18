import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
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
  styleUrls: ['./pivot-table.component.scss']
})
export class PivotTableComponent implements OnInit, OnDestroy {
  @ViewChild('pivotview', { static: false }) pivotview!: any;

  @Input() dataSource: IDataOptions | null = null;
  @Input() dataSourceSettings: IDataOptions | null = null;
  @Input() width: string = '100%';
  @Input() height: string = '600px';
  @Input() showToolbar: boolean = true;
  @Input() showGroupingBar: boolean = true;
  @Input() showFieldList: boolean = false;
  @Input() allowCalculatedField: boolean = true;
  @Input() allowConditionalFormatting: boolean = true;
  @Input() allowDrillThrough: boolean = true;
  @Input() enableVirtualization: boolean = false;
  @Input() gridSettings: any = {};
  @Input() customClass: string = '';

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

  ngOnInit(): void {
    // Initialize data source
    if (this.dataSource) {
      this.dataSourceOptions = { ...this.dataSourceOptions, ...this.dataSource };
    } else if (this.dataSourceSettings) {
      this.dataSourceOptions = { ...this.dataSourceOptions, ...this.dataSourceSettings };
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Update data source
   */
  updateDataSource(dataSource: IDataOptions): void {
    this.dataSourceOptions = { ...this.dataSourceOptions, ...dataSource };
    if (this.pivotview) {
      this.pivotview.dataSourceSettings = this.dataSourceOptions;
      this.pivotview.refresh();
    }
  }

  /**
   * Refresh pivot table
   */
  refresh(): void {
    if (this.pivotview) {
      this.pivotview.refresh();
    }
  }

  /**
   * Export to Excel
   */
  exportToExcel(): void {
    if (this.pivotview) {
      this.pivotview.excelExport();
    }
  }

  /**
   * Export to PDF
   */
  exportToPDF(): void {
    if (this.pivotview) {
      this.pivotview.pdfExport();
    }
  }

  /**
   * Export to CSV
   */
  exportToCSV(): void {
    if (this.pivotview) {
      this.pivotview.csvExport();
    }
  }

  /**
   * Print
   */
  print(): void {
    if (this.pivotview) {
      this.pivotview.print();
    }
  }

  /**
   * Get pivot table instance
   */
  getPivotViewInstance(): any {
    return this.pivotview || null;
  }
}

