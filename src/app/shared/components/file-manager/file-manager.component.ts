import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectionStrategy, input, output, effect, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
import {
  FileManagerComponent as SyncfusionFileManagerComponent,
  NavigationPaneSettingsModel,
  ToolbarSettingsModel,
  DetailsViewSettingsModel,
  ContextMenuSettingsModel,
  UploadSettingsModel
} from '@syncfusion/ej2-angular-filemanager';

export interface FileManagerAjaxSettings {
  url: string;
  getImageUrl?: string;
  uploadUrl?: string;
  downloadUrl?: string;
  [key: string]: any;
}

export interface FileManagerConfig {
  ajaxSettings?: FileManagerAjaxSettings;
  view?: 'Details' | 'LargeIcons';
  allowMultiSelection?: boolean;
  showFileExtension?: boolean;
  showHiddenItems?: boolean;
  showThumbnail?: boolean;
  enablePersistence?: boolean;
  enableRtl?: boolean;
  locale?: string;
  navigationPaneSettings?: NavigationPaneSettingsModel;
  toolbarSettings?: ToolbarSettingsModel;
  detailsViewSettings?: DetailsViewSettingsModel;
  contextMenuSettings?: ContextMenuSettingsModel;
  uploadSettings?: UploadSettingsModel;
  height?: string | number;
  width?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [CommonModule, FileManagerModule],
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileManagerComponent implements OnInit, AfterViewInit, OnDestroy {
  filemanager = viewChild<SyncfusionFileManagerComponent>('filemanager');

  // Data Source
  ajaxSettings = input<FileManagerAjaxSettings>({
    url: ''
  });

  // View Settings
  view = input<'Details' | 'LargeIcons'>('Details');
  allowMultiSelection = input<boolean>(true);
  showFileExtension = input<boolean>(true);
  showHiddenItems = input<boolean>(false);
  showThumbnail = input<boolean>(true);

  // Behavior
  enablePersistence = input<boolean>(false);
  enableRtl = input<boolean>(false);
  locale = input<string>('en');

  // Settings
  navigationPaneSettings = input<NavigationPaneSettingsModel>({
    visible: true,
    maxWidth: '250px',
    minWidth: '200px'
  });
  toolbarSettings = input<ToolbarSettingsModel>({
    visible: true,
    items: ['NewFolder', 'Upload', 'Delete', 'Download', 'Rename', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Selection', 'View', 'Details']
  });
  detailsViewSettings = input<DetailsViewSettingsModel>({
    columns: [
      { field: 'name', headerText: 'Name', minWidth: 120, width: 'auto' },
      { field: 'size', headerText: 'Size', minWidth: 120, width: 'auto', template: '' },
      { field: 'dateModified', headerText: 'Date Modified', minWidth: 120, width: 'auto' },
      { field: 'type', headerText: 'Type', minWidth: 120, width: 'auto' }
    ]
  });
  contextMenuSettings = input<ContextMenuSettingsModel>({
    file: ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'],
    folder: ['Open', '|', 'Cut', 'Copy', 'Paste', 'Delete', 'Rename', '|', 'Details'],
    layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'],
    visible: true
  });
  uploadSettings = input<UploadSettingsModel>({
    autoUpload: false,
    minFileSize: 0,
    maxFileSize: 0,
    allowedExtensions: ''
  });

  // Appearance
  height = input<string | number>('600px');
  width = input<string | number>('100%');
  customClass = input<string | undefined>(undefined);
  config = input<FileManagerConfig | undefined>(undefined);

  // Events
  fileLoad = output<any>();
  fileOpen = output<any>();
  fileSelect = output<any>();
  fileDeselect = output<any>();
  beforeFileLoad = output<any>();
  beforeFileOpen = output<any>();
  beforeDownload = output<any>();
  beforeUpload = output<any>();
  beforeImageLoad = output<any>();
  beforeSend = output<any>();
  successFileUpload = output<any>();
  failureFileUpload = output<any>();
  created = output<any>();

  constructor() {
    effect(() => {
      // Handle config changes or other side effects if necessary
      // Note: FileManager component handles many inputs directly via template bindings which are now signals.
      // Complex object updates might need specific handling if Syncfusion doesn't pick them up automatically via binding changes.
      // For now, relying on template bindings.
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    const fm = this.filemanager();
    if (fm) {
      this.created.emit({ filemanager: fm });
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get File Manager instance
   */
  getFileManagerInstance(): SyncfusionFileManagerComponent | null {
    return this.filemanager() || null;
  }

  /**
   * Refresh File Manager
   */
  refresh(): void {
    this.filemanager()?.refresh();
  }

  /**
   * Navigate to path
   */
  navigateTo(path: string): void {
    const fm = this.filemanager();
    if (fm) {
      fm.path = path;
      fm.refresh();
    }
  }

  /**
   * Get current path
   */
  getCurrentPath(): string {
    return this.filemanager()?.path || '';
  }

  /**
   * Get selected items
   */
  getSelectedItems(): any[] {
    return this.filemanager()?.selectedItems || [];
  }

  /**
   * Clear selection
   */
  clearSelection(): void {
    const fm = this.filemanager();
    if (fm) {
      fm.selectedItems = [];
    }
  }

  /**
   * Event handlers
   */
  onFileLoad(event: any): void {
    this.fileLoad.emit(event);
  }

  onFileOpen(event: any): void {
    this.fileOpen.emit(event);
  }

  onFileSelect(event: any): void {
    this.fileSelect.emit(event);
  }

  onFileDeselect(event: any): void {
    this.fileDeselect.emit(event);
  }

  onBeforeFileLoad(event: any): void {
    this.beforeFileLoad.emit(event);
  }

  onBeforeFileOpen(event: any): void {
    this.beforeFileOpen.emit(event);
  }

  onBeforeDownload(event: any): void {
    this.beforeDownload.emit(event);
  }

  onBeforeUpload(event: any): void {
    this.beforeUpload.emit(event);
  }

  onBeforeImageLoad(event: any): void {
    this.beforeImageLoad.emit(event);
  }

  onBeforeSend(event: any): void {
    this.beforeSend.emit(event);
  }

  onSuccessFileUpload(event: any): void {
    this.successFileUpload.emit(event);
  }

  onFailureFileUpload(event: any): void {
    this.failureFileUpload.emit(event);
  }

  onCreated(event: any): void {
    this.created.emit(event);
  }
}



