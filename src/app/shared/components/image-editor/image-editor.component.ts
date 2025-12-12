import { Component, OnInit, ChangeDetectionStrategy, input, output, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageEditorModule, ImageEditorComponent as SyncfusionImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  selector: 'app-image-editor',
  standalone: true,
  imports: [CommonModule, ImageEditorModule],
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageEditorComponent implements OnInit {
  imageEditor = viewChild<SyncfusionImageEditorComponent>('imageEditor');

  // Configuration
  theme = input<string>('Bootstrap5');
  width = input<string>('100%');
  height = input<string>('550px');
  allowZoom = input<boolean>(true);
  allowUndoRedo = input<boolean>(true); // Added missing input
  toolbar = input<string[] | undefined>(undefined);
  disabled = input<boolean>(false);

  // Renamed cssClass to customClass to match template error "customClass()"
  customClass = input<string>('');

  // Data
  imageUrl = input<string | undefined>(undefined);

  // Events
  created = output<any>();
  fileOpened = output<any>();
  saved = output<any>();
  toolbarCreated = output<any>();
  zooming = output<any>();
  panning = output<any>();
  cropping = output<any>();
  flipped = output<any>();
  rotated = output<any>();
  shapeChanging = output<any>();
  shapeChange = output<any>();
  filtering = output<any>();
  finetuning = output<any>();

  // Renamed to match template bindings
  selectionChanging = output<any>();
  editComplete = output<any>();
  toolbarItemClickedOut = output<any>(); // Renamed to avoid collision with handler

  constructor() {
    effect(() => {
      const url = this.imageUrl();
      const editor = this.imageEditor();
      if (editor && url) {
        editor.open(url);
      }
    });
  }

  ngOnInit(): void {
    // Initialization handled by effect
  }

  // Event Handlers
  onCreated(event: any): void {
    this.created.emit(event);
  }

  onImageLoaded(event: any): void {
    this.fileOpened.emit(event);
  }

  onToolbarItemClicked(event: any): void {
    this.toolbarItemClickedOut.emit(event);
  }

  onSelectionChanged(event: any): void {
    this.selectionChanging.emit(event);
  }

  onShapeChanged(event: any): void {
    this.shapeChange.emit(event);
  }

  onImageChanged(event: any): void {
    this.editComplete.emit(event);
  }


  /**
   * Open image from URL
   */
  open(imageUrl: string): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.open(imageUrl);
    }
  }

  /**
   * Get image data URL
   */
  getImageData(): string {
    const editor = this.imageEditor();
    if (editor) {
      const imageData = editor.getImageData();
      if (imageData && typeof imageData === 'object' && 'data' in imageData) {
        const canvas = document.createElement('canvas');
        canvas.width = (imageData as any).width || 0;
        canvas.height = (imageData as any).height || 0;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.putImageData(imageData as ImageData, 0, 0);
          return canvas.toDataURL();
        }
      }
      if (typeof imageData === 'string') {
        return imageData;
      }
      const editorAny = editor as any;
      if (editorAny.imageCanvas) {
        return editorAny.imageCanvas.toDataURL();
      }
    }
    return '';
  }

  /**
   * Get image as Blob
   */
  async getImageBlob(): Promise<Blob> {
    const dataUrl = this.getImageData();
    if (dataUrl) {
      const response = await fetch(dataUrl);
      return await response.blob();
    }
    return Promise.reject('Image editor not initialized');
  }

  /**
   * Export image
   */
  export(type: 'PNG' | 'JPEG' | 'SVG' = 'PNG', fileName: string = 'image'): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.export(type, fileName);
    }
  }

  /**
   * Save image (triggers download)
   */
  save(): void {
    this.export('PNG', 'image');
  }

  /**
   * Reset image
   */
  reset(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.reset();
    }
  }

  /**
   * Undo
   */
  undo(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.undo();
    }
  }

  /**
   * Redo
   */
  redo(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.redo();
    }
  }

  /**
   * Crop image
   */
  crop(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.crop();
    }
  }

  /**
   * Transform image
   */
  transform(type: 'RotateLeft' | 'RotateRight' | 'FlipHorizontal' | 'FlipVertical'): void {
    const editor = this.imageEditor();
    if (editor) {
      switch (type) {
        case 'RotateLeft':
          editor.rotateImage('rotateleft' as any);
          break;
        case 'RotateRight':
          editor.rotateImage('rotateright' as any);
          break;
        case 'FlipHorizontal':
          editor.flip('Horizontal' as any);
          break;
        case 'FlipVertical':
          editor.flip('Vertical' as any);
          break;
      }
    }
  }

  /**
   * Rotate image
   */
  rotate(degree: number): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.rotate(degree);
    }
  }

  /**
   * Flip image
   */
  flip(direction: 'Horizontal' | 'Vertical'): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.flip(direction as any);
    }
  }

  /**
   * Zoom image
   */
  zoom(zoomFactor: number): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.zoom(zoomFactor);
    }
  }

  zoomIn(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.zoom(0.1); // Assuming 0.1 increment
    }
  }

  zoomOut(): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.zoom(-0.1); // Assuming -0.1 decrement
    }
  }

  /**
   * Pan image
   */
  pan(x: number, y: number): void {
    const editor = this.imageEditor();
    if (editor) {
      editor.pan(x as any, y as any); // Type cast if necessary
    }
  }

  /**
   * Get image editor instance
   */
  getImageEditorInstance(): SyncfusionImageEditorComponent | null {
    return this.imageEditor() || null;
  }
}
