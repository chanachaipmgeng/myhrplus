import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  TreeGridComponent as SyncfusionTreeGridComponent,
  PageService,
  SortService,
  FilterService,
  ToolbarService,
  ExcelExportService,
  PdfExportService,
  ColumnChooserService,
  ResizeService,
  ReorderService,
  EditService,
  CommandColumnService,
  ContextMenuService,
  SelectionService,
  VirtualScrollService
} from '@syncfusion/ej2-angular-treegrid';

export interface TreeGridColumn {
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
  allowEditing?: boolean;
  isPrimaryKey?: boolean;
  editType?: 'defaultedit' | 'dropdownedit' | 'booleanedit' | 'datepickeredit' | 'numericedit';
  edit?: any;
  commands?: any[];
}

export interface TreeGridConfig {
  dataSource?: any[];
  columns?: TreeGridColumn[];
  childMapping?: string;
  hasChildMapping?: string;
  allowPaging?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  allowSearching?: boolean;
  allowSelection?: boolean;
  allowResizing?: boolean;
  allowReordering?: boolean;
  allowEditing?: boolean;
  allowExcelExport?: boolean;
  allowPdfExport?: boolean;
  showColumnChooser?: boolean;
  enableVirtualization?: boolean;
  pageSettings?: any;
  selectionSettings?: any;
  editSettings?: any;
  toolbar?: any[];
  customClass?: string;
}

@Component({
  selector: 'app-tree-grid',
  standalone: true,
  imports: [CommonModule, TreeGridModule],
  providers: [
    PageService,
    SortService,
    FilterService,
    ToolbarService,
    ExcelExportService,
    PdfExportService,
    ColumnChooserService,
    ResizeService,
    ReorderService,
    EditService,
    CommandColumnService,
    ContextMenuService,
    SelectionService,
    VirtualScrollService
  ],
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeGridComponent implements OnInit, OnDestroy {
  treegrid = viewChild<SyncfusionTreeGridComponent>('treegrid');

  // Data
  dataSource = input<any[]>([], { alias: 'dataSource' });
  columns = input<TreeGridColumn[]>([], { alias: 'columns' });

  // Tree Settings
  childMapping = input<string>('subtasks', { alias: 'childMapping' });
  hasChildMapping = input<string | undefined>(undefined, { alias: 'hasChildMapping' });
  idMapping = input<string | undefined>(undefined, { alias: 'idMapping' });
  parentIdMapping = input<string | undefined>(undefined, { alias: 'parentIdMapping' });

  // Features
  allowPaging = input<boolean>(true, { alias: 'allowPaging' });
  allowSorting = input<boolean>(true, { alias: 'allowSorting' });
  allowFiltering = input<boolean>(true, { alias: 'allowFiltering' });
  // Note: allowSearching is handled via toolbar search functionality
  allowSelection = input<boolean>(true, { alias: 'allowSelection' });
  allowResizing = input<boolean>(true, { alias: 'allowResizing' });
  allowReordering = input<boolean>(true, { alias: 'allowReordering' });
  // Note: allowEditing is controlled via editSettings
  allowExcelExport = input<boolean>(true, { alias: 'allowExcelExport' });
  allowPdfExport = input<boolean>(true, { alias: 'allowPdfExport' });
  showColumnChooser = input<boolean>(true, { alias: 'showColumnChooser' });
  enableVirtualization = input<boolean>(false, { alias: 'enableVirtualization' });

  // Settings
  pageSettings = input<any>({
    pageSize: 10,
    pageSizes: [10, 20, 50, 100]
  }, { alias: 'pageSettings' });
  selectionSettings = input<any>({
    mode: 'Row',
    type: 'Single'
  }, { alias: 'selectionSettings' });
  editSettings = input<any>({
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: 'Row'
  }, { alias: 'editSettings' });
  toolbar = input<any[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExcelExport', 'PdfExport', 'CsvExport', 'ColumnChooser'], { alias: 'toolbar' });

  // Styling
  customClass = input<string>('', { alias: 'customClass' });
  height = input<string | number>('400px', { alias: 'height' });
  width = input<string | number>('100%', { alias: 'width' });

  // Events
  created = output<any>();
  dataBound = output<any>();
  rowSelected = output<any>();
  rowDeselected = output<any>();
  cellSelected = output<any>();
  cellDeselected = output<any>();
  recordClick = output<any>();
  recordDoubleClick = output<any>();
  rowDragStart = output<any>();
  rowDrop = output<any>();
  actionBegin = output<any>();
  actionComplete = output<any>();
  dataStateChange = output<any>();

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
    this.treegrid()?.refresh();
  }

  /**
   * Get selected rows
   */
  getSelectedRows(): any[] {
    const tg = this.treegrid();
    if (tg) {
      const selectedRows = tg.getSelectedRows();
      const selectedData: any[] = [];
      selectedRows.forEach((row: any) => {
        const rowInfo = tg.getRowInfo(row);
        if (rowInfo) {
          // Get data from rowInfo or row element
          const rowData = (rowInfo as any).rowData || (row as any).data || row;
          if (rowData) {
            selectedData.push(rowData);
          }
        }
      });
      return selectedData;
    }
    return [];
  }

  /**
   * Select row by index
   */
  selectRow(index: number): void {
    this.treegrid()?.selectRow(index);
  }

  /**
   * Clear selection
   */
  clearSelection(): void {
    this.treegrid()?.clearSelection();
  }

  /**
   * Expand all rows
   */
  expandAll(): void {
    this.treegrid()?.expandAll();
  }

  /**
   * Collapse all rows
   */
  collapseAll(): void {
    this.treegrid()?.collapseAll();
  }

  /**
   * Expand row by index
   */
  expandRow(index: number): void {
    const tg = this.treegrid();
    if (tg) {
      // Get row element by index
      const rows = tg.getRows();
      if (rows && rows[index]) {
        tg.expandRow(rows[index]);
      }
    }
  }

  /**
   * Collapse row by index
   */
  collapseRow(index: number): void {
    const tg = this.treegrid();
    if (tg) {
      // Get row element by index
      const rows = tg.getRows();
      if (rows && rows[index]) {
        tg.collapseRow(rows[index]);
      }
    }
  }

  /**
   * Export to Excel
   */
  exportToExcel(fileName?: string): void {
    const tg = this.treegrid();
    if (tg) {
      const excelExportProperties = {
        fileName: fileName || 'TreeGrid'
      };
      tg.excelExport(excelExportProperties);
    }
  }

  /**
   * Export to PDF
   */
  exportToPdf(fileName?: string): void {
    const tg = this.treegrid();
    if (tg) {
      const pdfExportProperties = {
        fileName: fileName || 'TreeGrid'
      };
      tg.pdfExport(pdfExportProperties);
    }
  }

  /**
   * Export to CSV
   */
  exportToCsv(fileName?: string): void {
    const tg = this.treegrid();
    if (tg) {
      const csvExportProperties = {
        fileName: fileName || 'TreeGrid'
      };
      tg.csvExport(csvExportProperties);
    }
  }

  /**
   * Search
   */
  search(searchText: string): void {
    const tg = this.treegrid();
    if (tg && searchText) {
      // Use filter method for searching
      (tg as any).filterByColumn('', 'contains', searchText);
    }
  }

  /**
   * Clear search
   */
  clearSearch(): void {
    this.treegrid()?.clearFiltering();
  }

  /**
   * Get tree grid instance
   */
  getTreeGridInstance(): SyncfusionTreeGridComponent | null {
    return this.treegrid() || null;
  }

  /**
   * Event handlers
   * Removed manual wrappers; use emit directly in template
   */
}

