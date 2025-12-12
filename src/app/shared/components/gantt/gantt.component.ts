import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, input, output, effect, viewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import {
  GanttComponent as SyncfusionGanttComponent,
  SelectionService,
  SortService,
  FilterService,
  ToolbarService,
  EditService,
  DayMarkersService,
  ResizeService,
  ReorderService,
  ExcelExportService,
  PdfExportService,
  CriticalPathService
} from '@syncfusion/ej2-angular-gantt';

export interface GanttTask {
  taskID: number;
  taskName: string;
  startDate?: Date | string;
  endDate?: Date | string;
  duration?: number;
  progress?: number;
  dependency?: string;
  resourceID?: number | number[];
  baselineStartDate?: Date | string;
  baselineEndDate?: Date | string;
  notes?: string;
  subtasks?: GanttTask[];
  [key: string]: any;
}

export interface GanttColumn {
  field: string;
  headerText?: string;
  width?: number | string;
  textAlign?: 'Left' | 'Right' | 'Center';
  format?: string;
  type?: 'string' | 'number' | 'date' | 'boolean';
  visible?: boolean;
  [key: string]: any;
}

export interface GanttConfig {
  dataSource?: GanttTask[];
  taskFields?: any;
  columns?: GanttColumn[];
  height?: string | number;
  width?: string | number;
  allowSelection?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  allowResizing?: boolean;
  allowReordering?: boolean;
  enableToolbar?: boolean;
  toolbar?: string[];
  allowExcelExport?: boolean;
  allowPdfExport?: boolean;
  enableCriticalPath?: boolean;
  timelineSettings?: any;
  labelSettings?: any;
  splitterSettings?: any;
  projectStartDate?: Date | string;
  projectEndDate?: Date | string;
  workWeek?: number[];
  holidays?: any[];
  eventMarkers?: any[];
  enableRtl?: boolean;
  locale?: string;
  customClass?: string;
}

@Component({
  selector: 'app-gantt',
  standalone: true,
  imports: [CommonModule, GanttModule],
  providers: [
    SelectionService,
    SortService,
    FilterService,
    ToolbarService,
    EditService,
    DayMarkersService,
    ResizeService,
    ReorderService,
    ExcelExportService,
    PdfExportService,
    CriticalPathService
  ],
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttComponent implements OnInit, OnDestroy {
  gantt = viewChild<SyncfusionGanttComponent>('gantt');

  // Config Object (Optional override)
  config = input<GanttConfig | undefined>(undefined);

  // Data Source
  dataSourceInput = input<GanttTask[]>([], { alias: 'dataSource' });
  taskFieldsInput = input<any>({
    id: 'taskID',
    name: 'taskName',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    progress: 'progress',
    dependency: 'dependency',
    child: 'subtasks'
  }, { alias: 'taskFields' });

  // Columns
  columnsInput = input<GanttColumn[]>([], { alias: 'columns' });

  // Behavior
  allowSelectionInput = input<boolean>(true, { alias: 'allowSelection' });
  allowSortingInput = input<boolean>(true, { alias: 'allowSorting' });
  allowFilteringInput = input<boolean>(true, { alias: 'allowFiltering' });
  allowResizingInput = input<boolean>(true, { alias: 'allowResizing' });
  allowReorderingInput = input<boolean>(true, { alias: 'allowReordering' });
  allowEditingInput = input<boolean>(true, { alias: 'allowEditing' });
  allowTaskbarDragDropInput = input<boolean>(true, { alias: 'allowTaskbarDragDrop' });
  allowTaskbarResizeInput = input<boolean>(true, { alias: 'allowTaskbarResize' });

  // Toolbar
  enableToolbarInput = input<boolean>(false, { alias: 'enableToolbar' });
  toolbarInput = input<string[]>(['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'PrevTimeSpan', 'NextTimeSpan', 'ExcelExport', 'CsvExport', 'PdfExport', 'Indent', 'Outdent'], { alias: 'toolbar' });

  // Export
  allowExcelExportInput = input<boolean>(false, { alias: 'allowExcelExport' });
  allowPdfExportInput = input<boolean>(false, { alias: 'allowPdfExport' });

  // Advanced
  enableCriticalPathInput = input<boolean>(false, { alias: 'enableCriticalPath' });
  timelineSettingsInput = input<any>({}, { alias: 'timelineSettings' });
  labelSettingsInput = input<any>({}, { alias: 'labelSettings' });
  splitterSettingsInput = input<any>({ position: '50%' }, { alias: 'splitterSettings' });
  projectStartDateInput = input<Date | string | undefined>(undefined, { alias: 'projectStartDate' });
  projectEndDateInput = input<Date | string | undefined>(undefined, { alias: 'projectEndDate' });
  workWeekInput = input<number[]>([0, 1, 2, 3, 4], { alias: 'workWeek' });
  holidaysInput = input<any[]>([], { alias: 'holidays' });
  eventMarkersInput = input<any[]>([], { alias: 'eventMarkers' });

  // Appearance
  heightInput = input<string | number>('450px', { alias: 'height' });
  widthInput = input<string | number>('100%', { alias: 'width' });
  enableRtlInput = input<boolean>(false, { alias: 'enableRtl' });
  localeInput = input<string>('en', { alias: 'locale' });
  customClassInput = input<string | undefined>(undefined, { alias: 'customClass' });

  // Computed Properties (Merge config + inputs)
  dataSource = computed(() => this.config()?.dataSource ?? this.dataSourceInput());
  taskFields = computed(() => this.config()?.taskFields ?? this.taskFieldsInput());
  columns = computed(() => this.config()?.columns ?? this.columnsInput());

  allowSelection = computed(() => this.config()?.allowSelection ?? this.allowSelectionInput());
  allowSorting = computed(() => this.config()?.allowSorting ?? this.allowSortingInput());
  allowFiltering = computed(() => this.config()?.allowFiltering ?? this.allowFilteringInput());
  allowResizing = computed(() => this.config()?.allowResizing ?? this.allowResizingInput());
  allowReordering = computed(() => this.config()?.allowReordering ?? this.allowReorderingInput());

  // Edit Settings Computed
  allowEditing = computed(() => this.allowEditingInput()); // Config doesn't have allowEditing top-level, it's usually inside settings but interface shows it
  // Wait, interface GanttConfig doesn't show allowEditing. It shows it in config? No, it's not in GanttConfig interface!
  // Checking GanttConfig interface: allowEditing IS NOT in GanttConfig.
  // So I don't need to merge it.
  // But wait, allowTaskbarDragDrop is also not in GanttConfig.

  allowTaskbarDragDrop = computed(() => this.allowTaskbarDragDropInput());
  allowTaskbarResize = computed(() => this.allowTaskbarResizeInput());

  computedEditSettings = computed(() => ({
    allowEditing: this.allowEditing(),
    allowTaskbarDragDrop: this.allowTaskbarDragDrop(),
    allowTaskbarResize: this.allowTaskbarResize()
  }));

  enableToolbar = computed(() => this.config()?.enableToolbar ?? this.enableToolbarInput());
  toolbar = computed(() => this.config()?.toolbar ?? this.toolbarInput());

  allowExcelExport = computed(() => this.config()?.allowExcelExport ?? this.allowExcelExportInput());
  allowPdfExport = computed(() => this.config()?.allowPdfExport ?? this.allowPdfExportInput());

  enableCriticalPath = computed(() => this.config()?.enableCriticalPath ?? this.enableCriticalPathInput());
  timelineSettings = computed(() => this.config()?.timelineSettings ?? this.timelineSettingsInput());
  labelSettings = computed(() => this.config()?.labelSettings ?? this.labelSettingsInput());
  splitterSettings = computed(() => this.config()?.splitterSettings ?? this.splitterSettingsInput());
  projectStartDate = computed(() => this.config()?.projectStartDate ?? this.projectStartDateInput());
  projectEndDate = computed(() => this.config()?.projectEndDate ?? this.projectEndDateInput());
  workWeek = computed(() => this.config()?.workWeek ?? this.workWeekInput());
  holidays = computed(() => this.config()?.holidays ?? this.holidaysInput());
  eventMarkers = computed(() => this.config()?.eventMarkers ?? this.eventMarkersInput());

  height = computed(() => this.config()?.height ?? this.heightInput());
  width = computed(() => this.config()?.width ?? this.widthInput());
  enableRtl = computed(() => this.config()?.enableRtl ?? this.enableRtlInput());
  locale = computed(() => this.config()?.locale ?? this.localeInput());
  customClass = computed(() => this.config()?.customClass ?? this.customClassInput());


  // Events
  actionBegin = output<any>();
  actionComplete = output<any>();
  cellEdit = output<any>();
  taskbarEdited = output<any>();
  rowSelected = output<any>();
  rowDeselected = output<any>();
  dataBound = output<any>();
  created = output<any>();

  constructor() {
    effect(() => {
      // Handle side effects if necessary
    });
  }

  ngOnInit(): void {
    // Logic moved to computed signals
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get Gantt instance
   */
  getGanttInstance(): SyncfusionGanttComponent | null {
    return this.gantt() || null;
  }

  /**
   * Refresh Gantt
   */
  refresh(): void {
    this.gantt()?.refresh();
  }

  /**
   * Export to Excel
   */
  exportToExcel(fileName?: string): void {
    const g = this.gantt();
    if (g) {
      const exportProperties = {
        fileName: fileName || 'GanttChart'
      };
      g.excelExport(exportProperties);
    }
  }

  /**
   * Export to PDF
   */
  exportToPdf(fileName?: string): void {
    const g = this.gantt();
    if (g) {
      const exportProperties = {
        fileName: fileName || 'GanttChart'
      };
      g.pdfExport(exportProperties);
    }
  }

  /**
   * Export to CSV
   */
  exportToCsv(fileName?: string): void {
    const g = this.gantt();
    if (g) {
      const exportProperties = {
        fileName: fileName || 'GanttChart'
      };
      g.csvExport(exportProperties);
    }
  }

  /**
   * Expand all tasks
   */
  expandAll(): void {
    this.gantt()?.expandAll();
  }

  /**
   * Collapse all tasks
   */
  collapseAll(): void {
    this.gantt()?.collapseAll();
  }

  /**
   * Expand row by index
   */
  expandByIndex(index: number): void {
    this.gantt()?.expandByIndex(index);
  }

  /**
   * Collapse row by index
   */
  collapseByIndex(index: number): void {
    this.gantt()?.collapseByIndex(index);
  }

  /**
   * Get selected rows
   */
  getSelectedRows(): any[] {
    const g = this.gantt();
    if (g) {
      // Get selected row indexes
      const selectedIndexes = g.selectionModule?.selectedRowIndexes || [];
      // Get row data from selected indexes
      const selectedRows: any[] = [];
      selectedIndexes.forEach((index: number) => {
        const row = g.getRowByIndex(index);
        if (row) {
          selectedRows.push(row);
        }
      });
      return selectedRows;
    }
    return [];
  }

  /**
   * Select row by index
   */
  selectRow(index: number): void {
    this.gantt()?.selectRows([index]);
  }

  /**
   * Clear selection
   */
  clearSelection(): void {
    this.gantt()?.selectionModule?.clearSelection();
  }

  /**
   * Search tasks
   */
  search(searchText: string): void {
    this.gantt()?.filterByColumn('taskName', 'contains', searchText);
  }

  /**
   * Clear search
   */
  clearSearch(): void {
    this.gantt()?.clearFiltering();
  }

  /**
   * Zoom in
   */
  zoomIn(): void {
    this.gantt()?.zoomIn();
  }

  /**
   * Zoom out
   */
  zoomOut(): void {
    this.gantt()?.zoomOut();
  }

  /**
   * Zoom to fit
   */
  zoomToFit(): void {
    this.gantt()?.fitToProject();
  }

  /**
   * Navigate to previous time span
   */
  previousTimeSpan(): void {
    this.gantt()?.previousTimeSpan();
  }

  /**
   * Navigate to next time span
   */
  nextTimeSpan(): void {
    this.gantt()?.nextTimeSpan();
  }

  /**
   * Add new task
   */
  addRecord(data?: GanttTask, rowIndex?: number): void {
    const g = this.gantt();
    if (g && g.editModule) {
      const position = rowIndex !== undefined ? { index: rowIndex } : undefined;
      g.editModule.addRecord(data as any, position as any);
    }
  }

  /**
   * Update task
   */
  updateRecord(field: string, data: GanttTask, rowIndex: number): void {
    const g = this.gantt();
    if (g && g.editModule) {
      // Update record using edit module
      const rowData = g.getRowByIndex(rowIndex);
      if (rowData) {
        const updatedData = { ...rowData, ...data };
        // Use updateRecordByID with task ID
        const taskId = (updatedData as any).taskID || (updatedData as any).ganttProperties?.taskId;
        if (taskId) {
          g.editModule.updateRecordByID(updatedData as any);
        }
      }
    }
  }

  /**
   * Delete task
   */
  deleteRecord(rowIndex: number): void {
    const g = this.gantt();
    if (g && g.editModule) {
      const rowData = g.getRowByIndex(rowIndex);
      if (rowData) {
        g.editModule.deleteRecord(rowData as any);
      }
    }
  }

  /**
   * Event handlers
   * Removed manual event handlers; template should bind directly to outputs via emit
   */
}

