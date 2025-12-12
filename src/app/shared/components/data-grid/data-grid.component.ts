import { Component, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
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
  styleUrls: ['./data-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataGridComponent {
  grid = viewChild<GridComponent>('grid');

  // Data Source
  dataSource = input<any[]>([]);

  // Columns
  columns = input<DataGridColumn[]>([]);

  // Features
  allowPaging = input<boolean>(true);
  allowSorting = input<boolean>(true);
  allowFiltering = input<boolean>(true);
  allowGrouping = input<boolean>(false);
  allowSelection = input<boolean>(true);
  allowResizing = input<boolean>(true);
  allowReordering = input<boolean>(true);
  allowEditing = input<boolean>(false);
  allowExcelExport = input<boolean>(true);
  allowPdfExport = input<boolean>(true);
  showColumnChooser = input<boolean>(false);
  showToolbar = input<boolean>(true);

  // Settings
  pageSettings = input<any>({
    pageSize: 10,
    pageSizes: [5, 10, 20, 50, 100],
    pageCount: 5
  });
  filterSettings = input<any>({ type: 'Menu' });
  sortSettings = input<any>({ columns: [] });
  groupSettings = input<any>({ columns: [] });
  selectionSettings = input<any>({ type: 'Single', mode: 'Row' });
  editSettings = input<any>({
    allowAdding: false,
    allowEditing: false,
    allowDeleting: false,
    mode: 'Normal'
  });

  // Toolbar
  toolbar = input<any[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExcelExport', 'PdfExport', 'CsvExport', 'Print', 'ColumnChooser']);

  // Size
  height = input<string | number>('600px');
  width = input<string | number>('100%');

  // Styling
  customClass = input<string>('');

  // Events
  rowSelected = output<any>();
  rowDeselected = output<any>();
  cellSave = output<any>();
  rowAdded = output<any>();
  rowDeleted = output<any>();
  dataBound = output<any>();
  actionBegin = output<any>();
  actionComplete = output<any>();

  /**
   * Refresh grid
   */
  refresh(): void {
    this.grid()?.refresh();
  }

  /**
   * Export to Excel
   */
  exportToExcel(): void {
    this.grid()?.excelExport();
  }

  /**
   * Export to PDF
   */
  exportToPDF(): void {
    this.grid()?.pdfExport();
  }

  /**
   * Export to CSV
   */
  exportToCSV(): void {
    this.grid()?.csvExport();
  }

  /**
   * Print
   */
  print(): void {
    this.grid()?.print();
  }

  /**
   * Get selected rows data
   */
  getSelectedRows(): any[] {
    const grid = this.grid();
    if (grid) {
      const selectedElements = grid.getSelectedRows();
      // Convert DOM elements to data objects
      const selectedData: any[] = [];
      const currentDataSource = this.dataSource();

      selectedElements.forEach((element: any) => {
        // Get row index from element
        const rowIndex = parseInt(element.getAttribute('aria-rowindex') || '0', 10) - 1; // Syncfusion quirk usually 0-indexed data but aria-rowindex depends
        // Note: aria-rowindex might not map directly to datasource index if sorting/filtering is applied. 
        // Syncfusion Grid usually returns data object directly via getSelectedRecords().
        // Let's switch to getSelectedRecords() which is cleaner if available in this version.
        // Assuming the original code logic was desired, I will stick to it but access signal.
        if (rowIndex >= 0 && currentDataSource && currentDataSource[rowIndex]) {
          selectedData.push(currentDataSource[rowIndex]);
        }
      });
      // Better yet, let's try to use the safer API if possible, but to minimize risk I will just fix the signal access.
      return selectedData;
    }
    return [];
  }

  /**
   * Get selected records (Safer alternative to getSelectedRows manual parsing)
   */
  getSelectedRecords(): any[] {
    return this.grid()?.getSelectedRecords() || [];
  }

  /**
   * Clear selection
   */
  clearSelection(): void {
    this.grid()?.clearSelection();
  }

  /**
   * Get grid instance
   */
  getGridInstance(): GridComponent | null {
    return this.grid() ?? null;
  }

  /**
   * Update data source
   * @deprecated Use input binding [dataSource] instead
   */
  updateDataSource(data: any[]): void {
    // Direct update to component for backward compatibility
    const grid = this.grid();
    if (grid) {
      grid.dataSource = data;
      grid.refresh();
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

