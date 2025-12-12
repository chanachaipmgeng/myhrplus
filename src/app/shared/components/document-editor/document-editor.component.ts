import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
import {
  DocumentEditorComponent as SyncfusionDocumentEditorComponent,
  DocumentEditorSettingsModel,
  CollaborativeEditingSettingsModel,
  DocumentEditorContainerComponent
} from '@syncfusion/ej2-angular-documenteditor';

export interface DocumentEditorConfig {
  width?: string | number;
  height?: string | number;
  enableSpellCheck?: boolean;
  enableSuggestion?: boolean;
  enableOptimizedTextMeasuring?: boolean;
  enableSelection?: boolean;
  enableEditor?: boolean;
  enableEditorHistory?: boolean;
  enableContextMenu?: boolean;
  enableHyperlinkDialog?: boolean;
  enableImageResizer?: boolean;
  enableTableDialog?: boolean;
  enableBookmarkDialog?: boolean;
  enableTableOfContentsDialog?: boolean;
  enablePageSetupDialog?: boolean;
  enableStyleDialog?: boolean;
  enableListDialog?: boolean;
  enableParagraphDialog?: boolean;
  enableFontDialog?: boolean;
  enableTablePropertiesDialog?: boolean;
  enableBordersAndShadingDialog?: boolean;
  enableTableOptionsDialog?: boolean;
  enableCellOptionsDialog?: boolean;
  enableComments?: boolean;
  enableTrackChanges?: boolean;
  enableFormField?: boolean;
  enableOptionsPane?: boolean;
  showRuler?: boolean;
  showComments?: boolean;
  showHiddenMarks?: boolean;
  showBookmarks?: boolean;
  showRevisions?: boolean;
  zoomFactor?: number;
  isReadOnly?: boolean;
  enablePrint?: boolean;
  enableWordExport?: boolean;
  enablePdfExport?: boolean;
  enableSfdtExport?: boolean;
  enableTextExport?: boolean;
  enableDocumentTitle?: boolean;
  enableHeaderFooter?: boolean;
  enableSearch?: boolean;
  enableNavigationPane?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [CommonModule, DocumentEditorModule],
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentEditorComponent implements OnInit, OnDestroy {
  documentEditor = viewChild<SyncfusionDocumentEditorComponent>('documentEditor');

  // Size
  width = input<string | number>('100%', { alias: 'width' });
  height = input<string | number>('800px', { alias: 'height' });

  // Features
  enableSpellCheck = input<boolean>(true, { alias: 'enableSpellCheck' });
  enableSelection = input<boolean>(true, { alias: 'enableSelection' });
  enableEditor = input<boolean>(true, { alias: 'enableEditor' });
  enableEditorHistory = input<boolean>(true, { alias: 'enableEditorHistory' });
  enableContextMenu = input<boolean>(true, { alias: 'enableContextMenu' });
  enableHyperlinkDialog = input<boolean>(true, { alias: 'enableHyperlinkDialog' });
  enableImageResizer = input<boolean>(true, { alias: 'enableImageResizer' });
  enableTableDialog = input<boolean>(true, { alias: 'enableTableDialog' });
  enableBookmarkDialog = input<boolean>(true, { alias: 'enableBookmarkDialog' });
  enableTableOfContentsDialog = input<boolean>(true, { alias: 'enableTableOfContentsDialog' });
  enablePageSetupDialog = input<boolean>(true, { alias: 'enablePageSetupDialog' });
  enableStyleDialog = input<boolean>(true, { alias: 'enableStyleDialog' });
  enableListDialog = input<boolean>(true, { alias: 'enableListDialog' });
  enableParagraphDialog = input<boolean>(true, { alias: 'enableParagraphDialog' });
  enableFontDialog = input<boolean>(true, { alias: 'enableFontDialog' });
  enableTablePropertiesDialog = input<boolean>(true, { alias: 'enableTablePropertiesDialog' });
  enableBordersAndShadingDialog = input<boolean>(true, { alias: 'enableBordersAndShadingDialog' });
  enableTableOptionsDialog = input<boolean>(true, { alias: 'enableTableOptionsDialog' });
  enableTrackChanges = input<boolean>(true, { alias: 'enableTrackChanges' });
  enableFormField = input<boolean>(true, { alias: 'enableFormField' });
  enableOptionsPane = input<boolean>(true, { alias: 'enableOptionsPane' });
  showComments = input<boolean>(false, { alias: 'showComments' });
  showRevisions = input<boolean>(false, { alias: 'showRevisions' });
  zoomFactor = input<number>(1, { alias: 'zoomFactor' });
  isReadOnly = input<boolean>(false, { alias: 'isReadOnly' });
  enablePrint = input<boolean>(true, { alias: 'enablePrint' });
  enableWordExport = input<boolean>(true, { alias: 'enableWordExport' });
  enableSfdtExport = input<boolean>(true, { alias: 'enableSfdtExport' });
  enableTextExport = input<boolean>(true, { alias: 'enableTextExport' });
  enableSearch = input<boolean>(true, { alias: 'enableSearch' });

  // Styling
  customClass = input<string>('', { alias: 'customClass' });

  // Events
  created = output<any>();
  documentChange = output<any>();
  selectionChange = output<any>();
  contentChange = output<any>();
  zoomFactorChange = output<any>();
  requestNavigate = output<any>();
  beforePaneSwitch = output<any>();
  paneSwitch = output<any>();
  beforeServiceFailure = output<any>();
  serviceFailure = output<any>();
  customContextMenuBeforeOpen = output<any>();
  customContextMenuOpen = output<any>();
  beforeRestrictEditing = output<any>();
  restrictEditing = output<any>();
  documentEditorSettingsChange = output<any>();

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Open document from SFDT
   */
  open(document: string): void {
    this.documentEditor()?.open(document);
  }

  /**
   * Save document as SFDT
   */
  saveAsSfdt(): string {
    const editor = this.documentEditor();
    if (editor) {
      return editor.serialize();
    }
    return '';
  }

  /**
   * Save document as Blob
   */
  saveAsBlob(format: 'Docx' | 'Sfdt' | 'Txt'): Promise<Blob> {
    const editor = this.documentEditor();
    if (editor) {
      return editor.saveAsBlob(format as any);
    }
    return Promise.reject('Document editor not initialized');
  }

  /**
   * Print document
   */
  print(): void {
    this.documentEditor()?.print();
  }

  /**
   * Export document
   */
  export(format: 'Docx' | 'Sfdt' | 'Txt', fileName?: string): void {
    const editor = this.documentEditor();
    if (editor) {
      const formatType = format as any;
      const file = (fileName || 'document') as any;
      editor.save(formatType, file);
    }
  }

  /**
   * Export as PDF (requires server-side conversion)
   */
  exportAsPdf(fileName?: string): void {
    if (this.documentEditor()) {
      // PDF export requires server-side conversion
      // Use saveAsBlob('Sfdt') and convert on server
      console.warn('PDF export requires server-side conversion. Use exportAsSfdt() and convert on server.');
    }
  }

  /**
   * Insert text
   */
  insertText(text: string): void {
    this.documentEditor()?.editor.insertText(text);
  }

  /**
   * Insert image
   */
  insertImage(base64: string): void {
    this.documentEditor()?.editor.insertImage(base64);
  }

  /**
   * Insert table
   */
  insertTable(rowCount: number, columnCount: number): void {
    this.documentEditor()?.editor.insertTable(rowCount, columnCount);
  }

  /**
   * Undo
   */
  undo(): void {
    this.documentEditor()?.editorHistoryModule.undo();
  }

  /**
   * Redo
   */
  redo(): void {
    this.documentEditor()?.editorHistoryModule.redo();
  }

  /**
   * Select all
   */
  selectAll(): void {
    this.documentEditor()?.selection.selectAll();
  }

  /**
   * Copy
   */
  copy(): void {
    const editor = this.documentEditor();
    if (editor) {
      // Use document editor's built-in copy functionality
      const ed = (editor as any).editor;
      if (ed && ed.copy) {
        ed.copy();
      } else {
        // Fallback: use clipboard API
        const selectedText = editor.selection.text;
        if (selectedText) {
          navigator.clipboard.writeText(selectedText);
        }
      }
    }
  }

  /**
   * Cut
   */
  cut(): void {
    const editor = this.documentEditor();
    if (editor) {
      // Use document editor's built-in cut functionality
      const ed = (editor as any).editor;
      if (ed && ed.cut) {
        ed.cut();
      } else {
        // Fallback: copy then delete
        this.copy();
        editor.editor.delete();
      }
    }
  }

  /**
   * Paste
   */
  paste(): void {
    const editor = this.documentEditor();
    if (editor) {
      // Use document editor's built-in paste functionality
      const ed = (editor as any).editor;
      if (ed && ed.paste) {
        ed.paste();
      } else {
        // Fallback: use clipboard API
        navigator.clipboard.readText().then(text => {
          this.insertText(text);
        });
      }
    }
  }

  /**
   * Find and replace
   */
  find(text: string): boolean {
    const editor = this.documentEditor();
    if (editor) {
      try {
        editor.searchModule.findAll(text);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }

  /**
   * Replace
   */
  replace(text: string, replaceText: string): boolean {
    const editor = this.documentEditor();
    if (editor) {
      try {
        const results = editor.searchModule.findAll(text) as any;
        if (results && Array.isArray(results) && results.length > 0) {
          // replaceAll expects TextSearchResults (array) as first parameter and string as second
          editor.searchModule.replaceAll(results as any, replaceText as any);
          return true;
        }
      } catch (error) {
        console.warn('Replace failed:', error);
        return false;
      }
    }
    return false;
  }

  /**
   * Set zoom factor
   */
  setZoomFactor(factor: number): void {
    const editor = this.documentEditor();
    if (editor) {
      editor.zoomFactor = factor;
    }
  }

  /**
   * Focus
   */
  focus(): void {
    this.documentEditor()?.focusIn();
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.documentEditor()?.dataBind();
  }

  /**
   * Get document editor instance
   */
  getDocumentEditorInstance(): SyncfusionDocumentEditorComponent | null {
    return this.documentEditor() || null;
  }

  /**
   * Event handlers
   * Removed manual wrappers
   */
}

