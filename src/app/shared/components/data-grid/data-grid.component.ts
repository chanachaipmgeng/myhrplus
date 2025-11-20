import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {
  GridComponent,
  PageService,
  SortService,
  FilterService,
  GroupService,
  SearchService,
  ToolbarService,
  ExcelExportService,
  PdfExportService,
  ColumnChooserService,
  ResizeService,
  ReorderService,
  EditService,
  CommandColumnService,
  ContextMenuService,
  FreezeService,
  SelectionService,
  VirtualScrollService
} from '@syncfusion/ej2-angular-grids';

export interface DataGridColumn {
  field: string;
  headerText?: string;
  width?: string | number;
  textAlign?: 'Left' | 'Center' | 'Right';
  format?: string;
  type?: 'string' | 'number' | 'boolean' | 'date' | 'datetime';
  template?: any;
  visible?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  allowGrouping?: boolean;
  allowEditing?: boolean;
  isPrimaryKey?: boolean;
  editType?: 'defaultedit' | 'dropdownedit' | 'booleanedit' | 'datepickeredit' | 'numericedit';
  edit?: any;
  commands?: any[];
}

export interface DataGridConfig {
  dataSource?: any[];
  columns?: DataGridColumn[];
  allowPaging?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  allowGrouping?: boolean;
  allowSelection?: boolean;
  allowResizing?: boolean;
  allowReordering?: boolean;
  allowEditing?: boolean;
  allowExcelExport?: boolean;
  allowPdfExport?: boolean;
  showColumnChooser?: boolean;
  showToolbar?: boolean;
  pageSettings?: any;
  filterSettings?: any;
  sortSettings?: any;
  groupSettings?: any;
  selectionSettings?: any;
  editSettings?: any;
  toolbar?: any[];
  height?: string | number;
  width?: string | number;
}

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, GridModule],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    ExcelExportService,
    PdfExportService,
    ColumnChooserService,
    ResizeService,
    ReorderService,
    EditService,
    CommandColumnService,
    ContextMenuService,
    FreezeService,
    SelectionService,
    VirtualScrollService
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {
  @ViewChild('grid', { static: false }) grid!: GridComponent;

  // Data Source
  @Input() dataSource: any[] = [];
  
  // Columns
  @Input() columns: DataGridColumn[] = [];
  
  // Features
  @Input() allowPaging: boolean = true;
  @Input() allowSorting: boolean = true;
  @Input() allowFiltering: boolean = true;
  @Input() allowGrouping: boolean = false;
  @Input() allowSelection: boolean = true;
  @Input() allowResizing: boolean = true;
  @Input() allowReordering: boolean = true;
  @Input() allowEditing: boolean = false;
  @Input() allowExcelExport: boolean = true;
  @Input() allowPdfExport: boolean = true;
  @Input() showColumnChooser: boolean = false;
  @Input() showToolbar: boolean = true;
  
  // Settings
  @Input() pageSettings: any = {
    pageSize: 10,
    pageSizes: [5, 10, 20, 50, 100],
    pageCount: 5
  };
  @Input() filterSettings: any = {
    type: 'Menu'
  };
  @Input() sortSettings: any = {
    columns: []
  };
  @Input() groupSettings: any = {
    columns: []
  };
  @Input() selectionSettings: any = {
    type: 'Single',
    mode: 'Row'
  };
  @Input() editSettings: any = {
    allowAdding: false,
    allowEditing: false,
    allowDeleting: false,
    mode: 'Normal'
  };
  
  // Toolbar
  @Input() toolbar: any[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExcelExport', 'PdfExport', 'CsvExport', 'Print', 'ColumnChooser'];
  
  // Size
  @Input() height: string | number = '600px';
  @Input() width: string | number = '100%';
  
  // Styling
  @Input() customClass: string = '';
  
  // Events
  @Output() rowSelected = new EventEmitter<any>();
  @Output() rowDeselected = new EventEmitter<any>();
  @Output() cellSave = new EventEmitter<any>();
  @Output() rowAdded = new EventEmitter<any>();
  @Output() rowDeleted = new EventEmitter<any>();
  @Output() dataBound = new EventEmitter<any>();
  @Output() actionBegin = new EventEmitter<any>();
  @Output() actionComplete = new EventEmitter<any>();

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Refresh grid
   */
  refresh(): void {
    if (this.grid) {
      this.grid.refresh();
    }
  }

  /**
   * Export to Excel
   */
  exportToExcel(): void {
    if (this.grid) {
      this.grid.excelExport();
    }
  }

  /**
   * Export to PDF
   */
  exportToPDF(): void {
    if (this.grid) {
      this.grid.pdfExport();
    }
  }

  /**
   * Export to CSV
   */
  exportToCSV(): void {
    if (this.grid) {
      this.grid.csvExport();
    }
  }

  /**
   * Print
   */
  print(): void {
    if (this.grid) {
      this.grid.print();
    }
  }

  /**
   * Get selected rows
   */
  getSelectedRows(): any[] {
    if (this.grid) {
      return this.grid.getSelectedRowsData();
    }
    return [];
  }

  /**
   * Clear selection
   */
  clearSelection(): void {
    if (this.grid) {
      this.grid.clearSelection();
    }
  }

  /**
   * Get grid instance
   */
  getGridInstance(): GridComponent | null {
    return this.grid || null;
  }

  /**
   * Update data source
   */
  updateDataSource(data: any[]): void {
    this.dataSource = data;
    if (this.grid) {
      this.grid.dataSource = data;
      this.grid.refresh();
    }
  }

  /**
   * Event handlers
   */
  onRowSelected(args: any): void {
    this.rowSelected.emit(args);
  }

  onRowDeselected(args: any): void {
    this.rowDeselected.emit(args);
  }

  onCellSave(args: any): void {
    this.cellSave.emit(args);
  }

  onRowAdded(args: any): void {
    this.rowAdded.emit(args);
  }

  onRowDeleted(args: any): void {
    this.rowDeleted.emit(args);
  }

  onDataBound(args: any): void {
    this.dataBound.emit(args);
  }

  onActionBegin(args: any): void {
    this.actionBegin.emit(args);
  }

  onActionComplete(args: any): void {
    this.actionComplete.emit(args);
  }
}

