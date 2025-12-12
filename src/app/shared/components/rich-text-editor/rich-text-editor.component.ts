import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import {
  RichTextEditorComponent as SyncfusionRichTextEditorComponent,
  ToolbarSettingsModel,
  QuickToolbarSettingsModel,
  ImageSettingsModel,
  FileManagerSettingsModel,
  TableSettingsModel,
  PasteCleanupSettingsModel,
  ToolbarService,
  LinkService,
  ImageService,
  QuickToolbarService,
  ResizeService,
  TableService,
  PasteCleanupService,
  HtmlEditorService,
  MarkdownEditorService,
  FileManagerService,
  FormatPainterService,
  CountService
} from '@syncfusion/ej2-angular-richtexteditor';

export interface RichTextEditorConfig {
  value?: string;
  placeholder?: string;
  height?: string | number;
  width?: string | number;
  toolbarSettings?: ToolbarSettingsModel;
  quickToolbarSettings?: QuickToolbarSettingsModel;
  imageSettings?: ImageSettingsModel;
  fileManagerSettings?: FileManagerSettingsModel;
  tableSettings?: TableSettingsModel;
  pasteCleanupSettings?: PasteCleanupSettingsModel;
  htmlEditorSettings?: any;
  markdownSettings?: any;
  enableRtl?: boolean;
  enableResize?: boolean;
  enableTabKey?: boolean;
  enablePersistence?: boolean;
  enableAutoUrl?: boolean;
  enableHtmlEncode?: boolean;
  showCharCount?: boolean;
  maxLength?: number;
  readonly?: boolean;
}

@Component({
  selector: 'app-rich-text-editor',
  standalone: true,
  imports: [CommonModule, RichTextEditorModule],
  providers: [
    // Required services for Rich Text Editor
    ToolbarService,
    LinkService,
    ImageService,
    QuickToolbarService,
    ResizeService,
    TableService,
    PasteCleanupService,
    HtmlEditorService,
    MarkdownEditorService,
    FileManagerService,
    FormatPainterService,
    CountService
  ],
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextEditorComponent implements OnInit, OnDestroy {
  rte = viewChild<SyncfusionRichTextEditorComponent>('rte');

  // Value
  value = input<string>('', { alias: 'value' });

  // Placeholder
  placeholder = input<string>('Enter text here...', { alias: 'placeholder' });

  // Size
  height = input<string | number>('400px', { alias: 'height' });
  width = input<string | number>('100%', { alias: 'width' });

  // Toolbar Settings
  toolbarSettings = input<ToolbarSettingsModel>({
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
    ]
  }, { alias: 'toolbarSettings' });

  // Quick Toolbar Settings
  quickToolbarSettings = input<QuickToolbarSettingsModel>({
    image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink',
      '-', 'Display', 'AltText', 'Dimension'
    ],
    text: [
      'Cut', 'Copy', 'Paste', 'Delete', '|',
      'FormatPainter', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|',
      'SuperScript', 'SubScript', '|',
      'ClearFormat', '|',
      'CreateLink', 'UnLink', '|',
      'SourceCode'
    ],
    table: [
      'TableHeader', 'TableRows', 'TableColumns', 'TableCell',
      '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign',
      'TableProperties'
    ]
  }, { alias: 'quickToolbarSettings' });

  // Image Settings
  imageSettings = input<ImageSettingsModel>({
    allowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
    minWidth: 16,
    maxWidth: 1000,
    minHeight: 16,
    maxHeight: 1000,
    saveUrl: '',
    path: '',
    resize: true
  }, { alias: 'imageSettings' });

  // File Manager Settings
  fileManagerSettings = input<FileManagerSettingsModel>({}, { alias: 'fileManagerSettings' });

  // Table Settings
  tableSettings = input<TableSettingsModel>({
    width: '100%'
  }, { alias: 'tableSettings' });

  // Paste Cleanup Settings
  pasteCleanupSettings = input<PasteCleanupSettingsModel>({
    prompt: true,
    plainText: false,
    keepFormat: false,
    deniedTags: [],
    deniedAttrs: [],
    allowedStyleProps: []
  }, { alias: 'pasteCleanupSettings' });

  // HTML Editor Settings
  htmlEditorSettings = input<any>({}, { alias: 'htmlEditorSettings' });

  // Markdown Settings
  markdownSettings = input<any>({}, { alias: 'markdownSettings' });

  // Features
  enableRtl = input<boolean>(false, { alias: 'enableRtl' });
  enableResize = input<boolean>(true, { alias: 'enableResize' });
  enableTabKey = input<boolean>(true, { alias: 'enableTabKey' });
  enablePersistence = input<boolean>(false, { alias: 'enablePersistence' });
  enableAutoUrl = input<boolean>(true, { alias: 'enableAutoUrl' });
  enableHtmlEncode = input<boolean>(false, { alias: 'enableHtmlEncode' });
  showCharCount = input<boolean>(false, { alias: 'showCharCount' });
  maxLength = input<number>(0, { alias: 'maxLength' });
  readonly = input<boolean>(false, { alias: 'readonly' });

  // Styling
  customClass = input<string>('', { alias: 'customClass' });

  // Events
  created = output<any>();
  change = output<any>();
  actionBegin = output<any>();
  actionComplete = output<any>();
  focus = output<any>();
  blur = output<any>();
  toolbarClick = output<any>();
  imageUploading = output<any>();
  imageUploadSuccess = output<any>();
  imageUploadFailed = output<any>();
  imageRemoving = output<any>();
  fileUploading = output<any>();
  fileUploadSuccess = output<any>();
  fileUploadFailed = output<any>();
  beforeDialogOpen = output<any>();
  dialogOpen = output<any>();
  dialogClose = output<any>();
  beforeImageUpload = output<any>();
  beforeFileUpload = output<any>();
  beforePaste = output<any>();
  beforeDrop = output<any>();
  beforeSanitizeHtml = output<any>();

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get value
   */
  getValue(): string {
    const rte = this.rte();
    if (rte) {
      return rte.value;
    }
    return this.value();
  }

  /**
   * Set value
   */
  setValue(value: string): void {
    // Note: Since 'value' is an input signal, we cannot assign to it.
    // However, we can update the internal RTE value if it exists.
    const rte = this.rte();
    if (rte) {
      rte.value = value;
      rte.dataBind();
    }
  }

  /**
   * Get HTML content
   */
  getHtml(): string {
    const rte = this.rte();
    if (rte) {
      return rte.getHtml();
    }
    return this.value();
  }

  /**
   * Get text content
   */
  getText(): string {
    const rte = this.rte();
    if (rte) {
      return rte.getText();
    }
    return '';
  }

  /**
   * Get selected text
   */
  getSelectedText(): string {
    const rte = this.rte();
    if (rte) {
      return rte.getSelectedHtml();
    }
    return '';
  }

  /**
   * Insert text
   */
  insertText(text: string): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand('insertText', text);
    }
  }

  /**
   * Insert HTML
   */
  insertHtml(html: string): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand('insertHTML', html);
    }
  }

  /**
   * Format text
   */
  formatText(format: string, value?: string): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand(format as any, value);
    }
  }

  /**
   * Undo
   */
  undo(): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand('undo');
    }
  }

  /**
   * Redo
   */
  redo(): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand('redo');
    }
  }

  /**
   * Clear format
   */
  clearFormat(): void {
    const rte = this.rte();
    if (rte) {
      rte.executeCommand('removeFormat');
    }
  }

  /**
   * Refresh
   */
  refresh(): void {
    const rte = this.rte();
    if (rte) {
      rte.dataBind();
    }
  }

  /**
   * Get editor instance
   */
  getEditorInstance(): SyncfusionRichTextEditorComponent | null {
    return this.rte() || null;
  }

  /**
   * Event handlers
   */
  onCreated(args: any): void {
    this.created.emit(args);
  }

  onChange(args: any): void {
    // Note: cannot update readonly input signal 'value'
    this.change.emit(args);
  }

  onActionBegin(args: any): void {
    this.actionBegin.emit(args);
  }

  onActionComplete(args: any): void {
    this.actionComplete.emit(args);
  }

  onFocus(args: any): void {
    this.focus.emit(args);
  }

  onBlur(args: any): void {
    this.blur.emit(args);
  }

  onToolbarClick(args: any): void {
    this.toolbarClick.emit(args);
  }

  onImageUploading(args: any): void {
    this.imageUploading.emit(args);
  }

  onImageUploadSuccess(args: any): void {
    this.imageUploadSuccess.emit(args);
  }

  onImageUploadFailed(args: any): void {
    this.imageUploadFailed.emit(args);
  }

  onImageRemoving(args: any): void {
    this.imageRemoving.emit(args);
  }

  onFileUploading(args: any): void {
    this.fileUploading.emit(args);
  }

  onFileUploadSuccess(args: any): void {
    this.fileUploadSuccess.emit(args);
  }

  onFileUploadFailed(args: any): void {
    this.fileUploadFailed.emit(args);
  }

  onBeforeDialogOpen(args: any): void {
    this.beforeDialogOpen.emit(args);
  }

  onDialogOpen(args: any): void {
    this.dialogOpen.emit(args);
  }

  onDialogClose(args: any): void {
    this.dialogClose.emit(args);
  }

  onBeforeImageUpload(args: any): void {
    this.beforeImageUpload.emit(args);
  }

  onBeforeFileUpload(args: any): void {
    this.beforeFileUpload.emit(args);
  }

  onBeforePaste(args: any): void {
    this.beforePaste.emit(args);
  }

  onBeforeDrop(args: any): void {
    this.beforeDrop.emit(args);
  }

  onBeforeSanitizeHtml(args: any): void {
    this.beforeSanitizeHtml.emit(args);
  }
}

