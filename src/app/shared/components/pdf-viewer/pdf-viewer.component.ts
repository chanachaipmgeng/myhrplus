import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
import {
  PdfViewerComponent as SyncfusionPdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormDesignerService,
  FormFieldsService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

export interface PdfViewerConfig {
  documentPath?: string;
  serviceUrl?: string;
  enableToolbar?: boolean;
  enableNavigation?: boolean;
  enableThumbnail?: boolean;
  enableBookmark?: boolean;
  enableTextSelection?: boolean;
  enableTextSearch?: boolean;
  enablePrint?: boolean;
  enableDownload?: boolean;
  enableFormFields?: boolean;
  enableAnnotations?: boolean;
  enableHyperlinks?: boolean;
  enableMagnification?: boolean;
  enableStickyNotes?: boolean;
  enableHandTool?: boolean;
  enableTextMarkup?: boolean;
  enableShapeAnnotation?: boolean;
  enableStampAnnotation?: boolean;
  enableSignature?: boolean;
  enableMeasurement?: boolean;
  isReadOnly?: boolean;
  zoomFactor?: number;
  height?: string | number;
  width?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormDesignerService,
    FormFieldsService,
    AnnotationService
  ],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent implements OnInit, OnDestroy {
  pdfviewer = viewChild<SyncfusionPdfViewerComponent>('pdfviewer');

  // Logic
  documentPath = input<string | undefined>(undefined, { alias: 'documentPath' });
  serviceUrl = input<string | undefined>(undefined, { alias: 'serviceUrl' });

  // Features
  enableToolbar = input<boolean>(true, { alias: 'enableToolbar' });
  enableNavigation = input<boolean>(true, { alias: 'enableNavigation' });
  enableThumbnail = input<boolean>(true, { alias: 'enableThumbnail' });
  enableBookmark = input<boolean>(true, { alias: 'enableBookmark' });
  enableTextSelection = input<boolean>(true, { alias: 'enableTextSelection' });
  enableTextSearch = input<boolean>(true, { alias: 'enableTextSearch' });
  enablePrint = input<boolean>(true, { alias: 'enablePrint' });
  enableDownload = input<boolean>(true, { alias: 'enableDownload' });
  enableFormFields = input<boolean>(true, { alias: 'enableFormFields' });
  enableMagnification = input<boolean>(true, { alias: 'enableMagnification' });

  // Size
  height = input<string | number>('640px', { alias: 'height' });
  width = input<string | number>('100%', { alias: 'width' });
  customClass = input<string>('', { alias: 'customClass' });

  // Events
  documentLoad = output<any>();
  pageChange = output<any>();
  zoomChange = output<any>();
  annotationAdd = output<any>();
  annotationRemove = output<any>();
  annotationSelect = output<any>();
  hyperlinkClick = output<any>();
  textSelection = output<any>();
  formFieldFocus = output<any>();
  formFieldBlur = output<any>();

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Load document
   */
  loadDocument(document: string, password?: string): void {
    const viewer = this.pdfviewer();
    if (viewer && document) {
      (viewer as any).load(document, password);
    }
  }

  /**
   * Unload document
   */
  unload(): void {
    this.pdfviewer()?.unload();
  }

  /**
   * Get PDF viewer instance
   */
  getPdfViewerInstance(): SyncfusionPdfViewerComponent | null {
    return this.pdfviewer() || null;
  }

  /**
   * Print
   */
  print(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).toolbarModule.print();
    }
  }

  /**
   * Download
   */
  download(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).toolbarModule?.download();
    }
  }

  /**
   * Go to page
   */
  goToPage(pageNumber: number): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).navigationModule?.goToPage(pageNumber);
    }
  }

  /**
   * Go to next page
   */
  nextPage(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).navigationModule?.goToNextPage();
    }
  }

  /**
   * Go to previous page
   */
  previousPage(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).navigationModule?.goToPreviousPage();
    }
  }

  /**
   * Go to first page
   */
  firstPage(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).navigationModule?.goToFirstPage();
    }
  }

  /**
   * Go to last page
   */
  lastPage(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).navigationModule?.goToLastPage();
    }
  }

  /**
   * Zoom to
   */
  zoomTo(zoomValue: number): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).magnificationModule?.zoomTo(zoomValue);
    }
  }

  /**
   * Zoom in
   */
  zoomIn(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).magnificationModule?.zoomIn();
    }
  }

  /**
   * Zoom out
   */
  zoomOut(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).magnificationModule?.zoomOut();
    }
  }

  /**
   * Set zoom factor
   */
  setZoomFactor(zoomFactor: number): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      // Use zoom method with factor
      (viewer as any).magnificationModule.zoom(zoomFactor);
    }
  }

  /**
   * Fit to page
   */
  fitToPage(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).magnificationModule?.fitToPage();
    }
  }

  /**
   * Fit to width
   */
  fitToWidth(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).magnificationModule?.fitToWidth();
    }
  }

  /**
   * Search text
   */
  searchText(text: string, isMatchCase: boolean = false): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).textSearch.searchText(text, isMatchCase);
    }
  }

  /**
   * Search next
   */
  searchNext(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).textSearch.searchNext();
    }
  }

  /**
   * Search previous
   */
  searchPrevious(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).textSearch.searchPrevious();
    }
  }

  /**
   * Cancel search
   */
  clearSearch(): void {
    const viewer = this.pdfviewer();
    if (viewer) {
      (viewer as any).textSearch.cancelTextSearch();
    }
  }

  /**
   * Get current page number
   */
  getCurrentPage(): number {
    const viewer = this.pdfviewer();
    if (viewer) {
      // Get current page from navigation module
      return (viewer as any).navigationModule?.currentPageNumber || 1;
    }
    return 0;
  }

  /**
   * Get total pages
   */
  getTotalPages(): number {
    const viewer = this.pdfviewer();
    if (viewer) {
      return viewer.pageCount || 0;
    }
    return 0;
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.pdfviewer()?.refresh();
  }

  /**
   * Event handlers
   * Removed manual wrappers
   */
}

