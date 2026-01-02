import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter, inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  VirtualScrollService,
  AggregateService,
  ColumnMenuService
} from '@syncfusion/ej2-angular-grids';
import { L10n } from '@syncfusion/ej2-base';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

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
  aggregates?: any[]; // Allow defining aggregates directly on the column
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
    VirtualScrollService,
    AggregateService,
    ColumnMenuService
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy, OnChanges {
  private translate = inject(TranslateService);
  @ViewChild('grid', { static: false }) grid!: GridComponent;

  // Data Source
  @Input() dataSource: any[] = [];

  // Columns
  @Input() columns: DataGridColumn[] = [];

  // Features
  // Features
  @Input() allowPaging: boolean = true;
  @Input() allowSorting: boolean = true;
  @Input() allowFiltering: boolean = true;
  @Input() allowGrouping: boolean = true;
  @Input() allowSelection: boolean = true;
  @Input() allowResizing: boolean = true;
  @Input() allowReordering: boolean = true;
  @Input() allowEditing: boolean = false;
  @Input() allowExcelExport: boolean = true;
  @Input() allowPdfExport: boolean = true;
  @Input() showColumnMenu: boolean = true;
  @Input() showColumnChooser: boolean = true;
  @Input() showToolbar: boolean = true;

  // New Feature Inputs
  @Input() aggregates: any[] = []; // Support for Aggregates

  // Toolbar Configuration
  @Input() showAdd: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showUpdate: boolean = false;
  @Input() showCancel: boolean = false;
  @Input() showSearch: boolean = true;
  @Input() showPrint: boolean = true;
  @Input() showExcelExport: boolean = true;
  @Input() showPdfExport: boolean = true;
  @Input() showCsvExport: boolean = true;

  // Column Menu Items
  @Input() columnMenuItems: any[] = [
    'SortAscending',
    'SortDescending',
    'Group',
    'Ungroup',
    'Filter',
    'ColumnChooser',
    'AutoFit'
  ];

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
    columns: [],
    showDropArea: true
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

  // Toolbar - If passed explicitly, it overrides the auto-generated one
  @Input() toolbar?: any[];

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
  @Output() commandClick = new EventEmitter<any>();

  ngOnInit(): void {
    this.setupLocalization();
    this.setupToolbar();
    this.setupAggregates();

    // Subscribe to language changes
    this.translate.onLangChange.subscribe(() => {
      this.setupLocalization();
      if (this.grid) {
        this.grid.refresh();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Re-setup localization if language changes
    if (changes && this.grid) {
      if (changes['toolbar'] || changes['showAdd'] || changes['showEdit'] || changes['showDelete']) {
        this.setupToolbar();
      }
      if (changes['columns']) {
        this.setupAggregates();
      }
      this.setupLocalization();
    }
  }

  private setupToolbar(): void {
    if (this.toolbar) return; // Use explicit toolbar if provided

    const items = [];
    if (this.showAdd) items.push('Add');
    if (this.showEdit) items.push('Edit');
    if (this.showDelete) items.push('Delete');
    if (this.showUpdate) items.push('Update');
    if (this.showCancel) items.push('Cancel');
    if (this.showSearch) items.push('Search');
    if (this.showColumnChooser) items.push('ColumnChooser');
    if (this.showExcelExport) items.push('ExcelExport');
    if (this.showPdfExport) items.push('PdfExport');
    if (this.showCsvExport) items.push('CsvExport');
    if (this.showPrint) items.push('Print');

    this.toolbar = items;
  }

  /**
   * Process columns to extract column-level aggregates and merge with main aggregates
   */
  private setupAggregates(): void {
    if (!this.columns || this.columns.length === 0) return;

    // Extract aggregates from columns
    const columnAggregates = this.columns
      .filter(col => col.aggregates && col.aggregates.length > 0)
      .map(col => ({
        columns: col.aggregates?.map(agg => ({
          type: agg.type,
          field: col.field,
          footerTemplate: agg.footerTemplate || null,
          groupFooterTemplate: agg.groupFooterTemplate || null,
          groupCaptionTemplate: agg.groupCaptionTemplate || null,
          customAggregate: agg.customAggregate || null,
          format: agg.format || col.format // Inherit format from column if not specified
        }))
      }));

    // If we have column aggregates, merge them into the main aggregates array
    if (columnAggregates.length > 0) {
      // Avoid duplicates or overwriting if called multiple times (though simple assignment is usually safe in OnChanges if we rebuild)
      // We'll create a new array combining explicit aggregates input + extracted ones
      // Note: This modifies the effective aggregates passed to the grid, but we should be careful not to mutate the original @Input aggregates if possible, 
      // but binding directly to [aggregates] means we should probably update the input variable or a separate property.
      // Easiest is to push to 'this.aggregates' if it's not already there? 
      // Better: Use a separate property 'effectiveAggregates' for binding, but for now I will push to this.aggregates if valid.
      // Actually, merging is safer.

      this.aggregates = [...(this.aggregates || []), ...columnAggregates];
    }
  }

  /**
   * Setup Syncfusion Grid localization based on current language
   */
  private setupLocalization(): void {
    const currentLang = this.translate.currentLang || this.translate.defaultLang || 'th';
    const isThai = currentLang === 'th';

    // Syncfusion Grid localization
    const gridLocale: any = {
      'en': {
        'grid': {
          'EmptyRecord': 'No records to display',
          'GroupDropArea': 'Drag a column header here to group its column',
          'UnGroup': 'Click here to ungroup',
          'EmptyDataSourceError': 'DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid',
          'Item': 'item',
          'Items': 'items',
          'FilterButton': 'Filter',
          'ClearButton': 'Clear',
          'StartsWith': 'Starts With',
          'EndsWith': 'Ends With',
          'Contains': 'Contains',
          'Equal': 'Equal',
          'NotEqual': 'Not Equal',
          'LessThan': 'Less Than',
          'LessThanOrEqual': 'Less Than Or Equal',
          'GreaterThan': 'Greater Than',
          'GreaterThanOrEqual': 'Greater Than Or Equal',
          'Between': 'Between',
          'CustomFilter': 'Custom Filter',
          'CustomFilterPlaceHolder': 'Enter value',
          'CustomFilterDatePlaceHolder': 'Select a date',
          'AND': 'AND',
          'OR': 'OR',
          'ShowRowsWhere': 'Show rows where:',
          'CurrentPageInfo': '{0} of {1} pages',
          'TotalItemsInfo': '({0} items)',
          'FirstPageTooltip': 'Go to first page',
          'LastPageTooltip': 'Go to last page',
          'NextPageTooltip': 'Go to next page',
          'PreviousPageTooltip': 'Go to previous page',
          'NextPagerTooltip': 'Go to next pager',
          'PreviousPagerTooltip': 'Go to previous pager',
          'PagerDropDown': 'Items per page',
          'PagerAllDropDown': 'Items',
          'All': 'All',
          'Add': 'Add',
          'Edit': 'Edit',
          'Delete': 'Delete',
          'Update': 'Update',
          'Cancel': 'Cancel',
          'Save': 'Save',
          'Search': 'Search',
          'ExcelExport': 'Excel Export',
          'PdfExport': 'PDF Export',
          'CsvExport': 'CSV Export',
          'Print': 'Print',
          'ColumnChooser': 'Columns'
        },
        'pager': {
          'currentPageInfo': '{0} of {1} pages',
          'totalItemsInfo': '({0} items)',
          'firstPageTooltip': 'Go to first page',
          'lastPageTooltip': 'Go to last page',
          'nextPageTooltip': 'Go to next page',
          'previousPageTooltip': 'Go to previous page',
          'nextPagerTooltip': 'Go to next pager',
          'previousPagerTooltip': 'Go to previous pager',
          'pagerDropDown': 'Items per page',
          'pagerAllDropDown': 'Items',
          'All': 'All'
        }
      },
      'th': {
        'grid': {
          'EmptyRecord': 'ไม่มีข้อมูล',
          'GroupDropArea': 'ลากหัวคอลัมน์มาวางที่นี่เพื่อจัดกลุ่ม',
          'UnGroup': 'คลิกที่นี่เพื่อยกเลิกการจัดกลุ่ม',
          'EmptyDataSourceError': 'DataSource ต้องไม่ว่างเปล่าเมื่อโหลดครั้งแรก เนื่องจากคอลัมน์จะถูกสร้างจาก dataSource ใน AutoGenerate Column Grid',
          'Item': 'รายการ',
          'Items': 'รายการ',
          'FilterButton': 'กรอง',
          'ClearButton': 'ล้าง',
          'StartsWith': 'ขึ้นต้นด้วย',
          'EndsWith': 'ลงท้ายด้วย',
          'Contains': 'ประกอบด้วย',
          'Equal': 'เท่ากับ',
          'NotEqual': 'ไม่เท่ากับ',
          'LessThan': 'น้อยกว่า',
          'LessThanOrEqual': 'น้อยกว่าหรือเท่ากับ',
          'GreaterThan': 'มากกว่า',
          'GreaterThanOrEqual': 'มากกว่าหรือเท่ากับ',
          'Between': 'ระหว่าง',
          'CustomFilter': 'กรองแบบกำหนดเอง',
          'CustomFilterPlaceHolder': 'กรอกค่า',
          'CustomFilterDatePlaceHolder': 'เลือกวันที่',
          'AND': 'และ',
          'OR': 'หรือ',
          'ShowRowsWhere': 'แสดงแถวที่:',
          'CurrentPageInfo': '{0} จาก {1} หน้า',
          'TotalItemsInfo': '({0} รายการ)',
          'FirstPageTooltip': 'ไปหน้าแรก',
          'LastPageTooltip': 'ไปหน้าสุดท้าย',
          'NextPageTooltip': 'ไปหน้าถัดไป',
          'PreviousPageTooltip': 'ไปหน้าก่อนหน้า',
          'NextPagerTooltip': 'ไปหน้า pager ถัดไป',
          'PreviousPagerTooltip': 'ไปหน้า pager ก่อนหน้า',
          'PagerDropDown': 'รายการต่อหน้า',
          'PagerAllDropDown': 'รายการ',
          'All': 'ทั้งหมด',
          'Add': 'เพิ่ม',
          'Edit': 'แก้ไข',
          'Delete': 'ลบ',
          'Update': 'อัพเดท',
          'Cancel': 'ยกเลิก',
          'Save': 'บันทึก',
          'Search': 'ค้นหา',
          'ExcelExport': 'ส่งออก Excel',
          'PdfExport': 'ส่งออก PDF',
          'CsvExport': 'ส่งออก CSV',
          'Print': 'พิมพ์',
          'ColumnChooser': 'คอลัมน์'
        },
        'pager': {
          'currentPageInfo': '{0} จาก {1} หน้า',
          'totalItemsInfo': '({0} รายการ)',
          'firstPageTooltip': 'ไปหน้าแรก',
          'lastPageTooltip': 'ไปหน้าสุดท้าย',
          'nextPageTooltip': 'ไปหน้าถัดไป',
          'previousPageTooltip': 'ไปหน้าก่อนหน้า',
          'nextPagerTooltip': 'ไปหน้า pager ถัดไป',
          'previousPagerTooltip': 'ไปหน้า pager ก่อนหน้า',
          'pagerDropDown': 'รายการต่อหน้า',
          'pagerAllDropDown': 'รายการ',
          'All': 'ทั้งหมด'
        }
      }
    };

    const locale = isThai ? 'th' : 'en';
    L10n.load(gridLocale[locale]);
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
   * Get selected rows data
   */
  getSelectedRows(): any[] {
    if (this.grid) {
      const selectedElements = this.grid.getSelectedRows();
      // Convert DOM elements to data objects
      const selectedData: any[] = [];
      selectedElements.forEach((element: any) => {
        // Get row index from element
        const rowIndex = parseInt(element.getAttribute('aria-rowindex') || '0', 10) - 1;
        if (rowIndex >= 0 && this.dataSource && this.dataSource[rowIndex]) {
          selectedData.push(this.dataSource[rowIndex]);
        }
      });
      return selectedData;
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

  onCommandClick(args: any): void {
    this.commandClick.emit(args);
  }
}

