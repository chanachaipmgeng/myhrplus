import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, input, output, computed, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';
import {
  SpreadsheetComponent as SyncfusionSpreadsheetComponent
} from '@syncfusion/ej2-angular-spreadsheet';

export interface SpreadsheetConfig {
  sheets?: any[];
  allowOpen?: boolean;
  allowSave?: boolean;
  allowEditing?: boolean;
  allowInsert?: boolean;
  allowDelete?: boolean;
  allowFormatting?: boolean;
  allowUndoRedo?: boolean;
  allowFindAndReplace?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  allowResizing?: boolean;
  allowFreezing?: boolean;
  allowMerging?: boolean;
  allowHyperlink?: boolean;
  allowChart?: boolean;
  allowImage?: boolean;
  allowConditionalFormat?: boolean;
  allowDataValidation?: boolean;
  allowFormulaBar?: boolean;
  showSheetTabs?: boolean;
  showRibbon?: boolean;
  showFormulaBar?: boolean;
  showStatusBar?: boolean;
  height?: string | number;
  width?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-spreadsheet',
  standalone: true,
  imports: [CommonModule, SpreadsheetModule],
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetComponent implements OnInit, OnDestroy {
  spreadsheet = viewChild<SyncfusionSpreadsheetComponent>('spreadsheet');

  // Data
  sheetsInput = input<any[]>([], { alias: 'sheets' });
  dataSource = input<any | undefined>(undefined, { alias: 'dataSource' });

  // Computed Sheets (handle initialization logic)
  sheets = computed(() => {
    const s = this.sheetsInput();
    if ((!s || s.length === 0) && this.dataSource()) {
      return [{
        name: 'Sheet1',
        ranges: [{ dataSource: this.dataSource() }]
      }];
    }
    return s || [];
  });

  // Features
  allowOpen = input<boolean>(true, { alias: 'allowOpen' });
  allowSave = input<boolean>(true, { alias: 'allowSave' });
  allowEditing = input<boolean>(true, { alias: 'allowEditing' });
  allowInsert = input<boolean>(true, { alias: 'allowInsert' });
  allowDelete = input<boolean>(true, { alias: 'allowDelete' });
  allowUndoRedo = input<boolean>(true, { alias: 'allowUndoRedo' });
  allowFindAndReplace = input<boolean>(true, { alias: 'allowFindAndReplace' });
  allowSorting = input<boolean>(true, { alias: 'allowSorting' });
  allowFiltering = input<boolean>(true, { alias: 'allowFiltering' });
  allowResizing = input<boolean>(true, { alias: 'allowResizing' });
  allowHyperlink = input<boolean>(true, { alias: 'allowHyperlink' });
  allowChart = input<boolean>(true, { alias: 'allowChart' });
  allowImage = input<boolean>(true, { alias: 'allowImage' });
  allowConditionalFormat = input<boolean>(true, { alias: 'allowConditionalFormat' });
  allowDataValidation = input<boolean>(true, { alias: 'allowDataValidation' });
  showSheetTabs = input<boolean>(true, { alias: 'showSheetTabs' });
  showRibbon = input<boolean>(true, { alias: 'showRibbon' });
  showFormulaBar = input<boolean>(true, { alias: 'showFormulaBar' });

  // Size
  height = input<string | number>('600px', { alias: 'height' });
  width = input<string | number>('100%', { alias: 'width' });
  customClass = input<string | undefined>(undefined, { alias: 'customClass' });

  // Events
  created = output<any>();
  cellEdit = output<any>();
  cellSave = output<any>();
  beforeOpen = output<any>();
  openComplete = output<any>();
  beforeSave = output<any>();
  saveComplete = output<any>();
  actionBegin = output<any>();
  actionComplete = output<any>();

  ngOnInit(): void {
    // Initialization logic handled by computed 'sheets'
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get spreadsheet instance
   */
  getSpreadsheetInstance(): SyncfusionSpreadsheetComponent | null {
    return this.spreadsheet() || null;
  }

  /**
   * Open file
   */
  open(file: File | Blob | string): void {
    const s = this.spreadsheet();
    if (s) {
      if (typeof file === 'string') {
        // If string, treat as file path or URL
        (s as any).open({ file: file });
      } else {
        // If File or Blob, use directly
        (s as any).open({ file: file });
      }
    }
  }

  /**
   * Save as Excel
   */
  saveAsExcel(fileName?: string): void {
    const s = this.spreadsheet();
    if (s) {
      const saveOptions: any = {
        fileName: fileName || 'Spreadsheet',
        saveType: 'Xlsx' as any
      };
      s.save(saveOptions);
    }
  }

  /**
   * Save as CSV
   */
  saveAsCsv(fileName?: string): void {
    const s = this.spreadsheet();
    if (s) {
      const saveOptions: any = {
        fileName: fileName || 'Spreadsheet',
        saveType: 'Csv' as any
      };
      s.save(saveOptions);
    }
  }

  /**
   * Save as PDF
   */
  saveAsPdf(fileName?: string): void {
    const s = this.spreadsheet();
    if (s) {
      const saveOptions: any = {
        fileName: fileName || 'Spreadsheet',
        saveType: 'Pdf' as any
      };
      s.save(saveOptions);
    }
  }

  /**
   * Insert row
   */
  insertRow(index: number, count: number = 1): void {
    this.spreadsheet()?.insertRow(index, count);
  }

  /**
   * Insert column
   */
  insertColumn(index: number, count: number = 1): void {
    this.spreadsheet()?.insertColumn(index, count);
  }

  /**
   * Delete row
   */
  deleteRow(index: number, count: number = 1): void {
    const s = this.spreadsheet();
    if (s) {
      // Use delete method with row model
      (s as any).delete(index, index + count - 1, 'Row');
    }
  }

  /**
   * Delete column
   */
  deleteColumn(index: number, count: number = 1): void {
    const s = this.spreadsheet();
    if (s) {
      // Use delete method with column model
      (s as any).delete(index, index + count - 1, 'Column');
    }
  }

  /**
   * Undo
   */
  undo(): void {
    this.spreadsheet()?.undo();
  }

  /**
   * Redo
   */
  redo(): void {
    this.spreadsheet()?.redo();
  }

  /**
   * Cut
   */
  cut(): void {
    this.spreadsheet()?.cut();
  }

  /**
   * Copy
   */
  copy(): void {
    this.spreadsheet()?.copy();
  }

  /**
   * Paste
   */
  paste(): void {
    this.spreadsheet()?.paste();
  }

  /**
   * Find
   */
  find(text: string): void {
    const s = this.spreadsheet();
    if (s) {
      (s as any).find(text);
    }
  }

  /**
   * Replace
   */
  replace(text: string, replaceText: string): void {
    const s = this.spreadsheet();
    if (s) {
      (s as any).replace(text, replaceText);
    }
  }

  /**
   * Sort
   */
  sort(range: string, sortOptions: any): void {
    const s = this.spreadsheet();
    if (s) {
      // Use sort method with proper options
      (s as any).sort(sortOptions || {}, range);
    }
  }

  /**
   * Filter
   */
  applyFilter(range: string): void {
    const s = this.spreadsheet();
    if (s) {
      // Apply filter using range
      (s as any).applyFilter([], range);
    }
  }

  /**
   * Clear filter
   */
  clearFilter(): void {
    this.spreadsheet()?.clearFilter();
  }

  /**
   * Merge cells
   */
  merge(range: string): void {
    this.spreadsheet()?.merge(range);
  }

  /**
   * Unmerge cells
   */
  unmerge(range: string): void {
    this.spreadsheet()?.unMerge(range);
  }

  /**
   * Freeze panes
   */
  freeze(row: number, col: number): void {
    const s = this.spreadsheet();
    if (s) {
      // Use public method or type assertion
      (s as any).freezePanes(row, col);
    }
  }

  /**
   * Unfreeze panes
   */
  unfreeze(): void {
    this.spreadsheet()?.Unfreeze();
  }

  /**
   * Add sheet
   */
  addSheet(sheetName?: string): void {
    this.spreadsheet()?.insertSheet([{ name: sheetName || `Sheet${(this.sheets()?.length || 0) + 1}` }]);
  }

  /**
   * Delete sheet
   */
  deleteSheet(sheetIndex: number): void {
    const s = this.spreadsheet();
    if (s) {
      // Use removeSheet method
      (s as any).removeSheet([sheetIndex]);
    }
  }

  /**
   * Go to cell
   */
  goToCell(address: string): void {
    this.spreadsheet()?.goTo(address);
  }

  /**
   * Select range
   */
  selectRange(range: string): void {
    this.spreadsheet()?.selectRange(range);
  }

  /**
   * Get cell value
   */
  getCellValue(address: string): any {
    const s = this.spreadsheet();
    if (s) {
      // Parse address to row and column indices
      const match = address.match(/([A-Z]+)(\d+)/);
      if (match) {
        const colStr = match[1];
        const rowIndex = parseInt(match[2], 10) - 1;
        let colIndex = 0;
        for (let i = 0; i < colStr.length; i++) {
          colIndex = colIndex * 26 + (colStr.charCodeAt(i) - 64);
        }
        colIndex -= 1;
        const cell = s.getCell(rowIndex, colIndex);
        if (cell) {
          // Get value from cell element or use type assertion
          return (cell as any).value || (cell as HTMLElement).textContent || null;
        }
      }
    }
    return null;
  }

  /**
   * Set cell value
   */
  setCellValue(address: string, value: any): void {
    this.spreadsheet()?.updateCell({ value: value }, address);
  }

  /**
   * Get used range
   */
  getUsedRange(): any {
    const s = this.spreadsheet();
    if (s) {
      // Get used range from active sheet
      const activeSheet = (s as any).activeSheetIndex || 0;
      const sheet = (s as any).sheets[activeSheet];
      if (sheet) {
        return {
          rowIndex: sheet.usedRange?.rowIndex || 0,
          colIndex: sheet.usedRange?.colIndex || 0,
          rowCount: sheet.usedRange?.rowCount || 0,
          colCount: sheet.usedRange?.colCount || 0
        };
      }
    }
    return null;
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.spreadsheet()?.dataBind();
  }

  /**
   * Event handlers
   * Removed manual wrappers
   */
}

