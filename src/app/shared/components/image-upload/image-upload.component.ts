import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  createImageData,
  assessImageQuality,
  isImageQualitySufficient,
  ImageQualityAssessment
} from '../../../core/utils/image-quality.utils';
import { IconComponent } from '../icon/icon.component';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

export interface ImageUploadConfig {
  maxSize?: number; // in MB
  maxFiles?: number;
  allowedTypes?: string[];
  aspectRatio?: number; // width/height
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  enableCrop?: boolean;
  enablePreview?: boolean;
  enableQualityCheck?: boolean; // Enable image quality assessment
  requireQualityCheck?: boolean; // Reject images with poor quality
  minQuality?: 'excellent' | 'good' | 'fair' | 'poor'; // Minimum required quality
}

export interface UploadedImage {
  file: File;
  preview?: string;
  url?: string;
  name: string;
  size: number;
  type: string;
  width?: number;
  height?: number;
  qualityAssessment?: ImageQualityAssessment; // Image quality assessment
}

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent, LazyImageDirective],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageUploadComponent,
      multi: true
    }
  ]
})
export class ImageUploadComponent implements OnInit, ControlValueAccessor {
  private translate = inject(TranslateService);
  
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() accept = 'image/*';
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() config: ImageUploadConfig = {
    maxSize: 5, // 5MB
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    enablePreview: true
  };

  @Output() fileSelect = new EventEmitter<UploadedImage[]>();
  @Output() fileRemove = new EventEmitter<UploadedImage>();
  @Output() error = new EventEmitter<string>();
  @Output() qualityCheck = new EventEmitter<{ image: UploadedImage; assessment: ImageQualityAssessment }>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  uploadedImages: UploadedImage[] = [];
  isDragging = false;
  errors: string[] = [];

  private onChange = (value: UploadedImage[]) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    if (!this.config.maxSize) this.config.maxSize = 5;
    if (!this.config.maxFiles) this.config.maxFiles = this.multiple ? 5 : 1;
    if (!this.config.allowedTypes) {
      this.config.allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    }
    if (this.config.enablePreview === undefined) {
      this.config.enablePreview = true;
    }
    if (this.config.enableQualityCheck === undefined) {
      this.config.enableQualityCheck = false;
    }
    if (this.config.requireQualityCheck === undefined) {
      this.config.requireQualityCheck = false;
    }
    if (!this.config.minQuality) {
      this.config.minQuality = 'good';
    }
  }

  writeValue(value: UploadedImage[]): void {
    if (value) {
      this.uploadedImages = value;
    }
  }

  registerOnChange(fn: (value: UploadedImage[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.disabled) {
      this.isDragging = true;
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (this.disabled) return;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFiles(Array.from(files));
    }
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFiles(Array.from(input.files));
    }
  }

  private async handleFiles(files: File[]): Promise<void> {
    this.errors = [];

    // Check max files
    const totalFiles = this.uploadedImages.length + files.length;
    if (totalFiles > this.config.maxFiles!) {
      const error = this.translate.instant('common.imageUpload.error.maxFiles', { maxFiles: this.config.maxFiles });
      this.errors.push(error);
      this.error.emit(error);
      return;
    }

    for (const file of files) {
      // Check file type
      if (!this.config.allowedTypes!.includes(file.type)) {
        const error = this.translate.instant('common.imageUpload.error.invalidType', {
          fileName: file.name,
          allowedTypes: this.config.allowedTypes!.join(', ')
        });
        this.errors.push(error);
        this.error.emit(error);
        continue;
      }

      // Check file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > this.config.maxSize!) {
        const error = this.translate.instant('common.imageUpload.error.maxSize', {
          fileName: file.name,
          maxSize: this.config.maxSize
        });
        this.errors.push(error);
        this.error.emit(error);
        continue;
      }

      // Create preview
      const preview = await this.createPreview(file);

      // Get image dimensions
      const dimensions = await this.getImageDimensions(file);

      // Image Quality Assessment
      let qualityAssessment: ImageQualityAssessment | undefined;
      if (this.config.enableQualityCheck) {
        try {
          const imageData = await createImageData(file);
          qualityAssessment = assessImageQuality(imageData);

          // Emit quality check event
          const tempImage: UploadedImage = {
            file,
            preview,
            name: file.name,
            size: file.size,
            type: file.type,
            width: dimensions.width,
            height: dimensions.height,
            qualityAssessment
          };
          this.qualityCheck.emit({ image: tempImage, assessment: qualityAssessment });

          // Check if quality is sufficient
          if (this.config.requireQualityCheck) {
            const qualityOrder = ['poor', 'fair', 'good', 'excellent'];
            const minQualityIndex = qualityOrder.indexOf(this.config.minQuality!);
            const actualQualityIndex = qualityOrder.indexOf(qualityAssessment.quality);

            if (actualQualityIndex < minQualityIndex) {
              const error = this.translate.instant('common.imageUpload.error.insufficientQuality', {
                fileName: file.name,
                quality: this.getQualityLabel(qualityAssessment.quality),
                feedback: qualityAssessment.feedback
              });
              this.errors.push(error);
              this.error.emit(error);
              continue;
            }
          }

          // Warn if quality is poor but not required
          if (qualityAssessment.quality === 'poor' || qualityAssessment.quality === 'fair') {
            const warning = this.translate.instant('common.imageUpload.warning.quality', {
              fileName: file.name,
              feedback: qualityAssessment.feedback
            });
            this.errors.push(warning);
          }
        } catch (error) {
          console.warn('Failed to assess image quality:', error);
          // Continue even if quality check fails
        }
      }

      const uploadedImage: UploadedImage = {
        file,
        preview,
        name: file.name,
        size: file.size,
        type: file.type,
        width: dimensions.width,
        height: dimensions.height,
        qualityAssessment
      };

      this.uploadedImages.push(uploadedImage);
    }

    this.onChange(this.uploadedImages);
    this.onTouched();
    this.fileSelect.emit(this.uploadedImages);
  }

  private createPreview(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  removeImage(index: number): void {
    if (this.disabled) return;

    const removed = this.uploadedImages.splice(index, 1)[0];
    this.onChange(this.uploadedImages);
    this.onTouched();
    this.fileRemove.emit(removed);
  }

  openFileDialog(): void {
    if (!this.disabled) {
      this.fileInput.nativeElement.click();
    }
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  get canAddMore(): boolean {
    return this.uploadedImages.length < this.config.maxFiles!;
  }

  get displayLabel(): string {
    return this.label || this.translate.instant('common.imageUpload.label');
  }

  get displayPlaceholder(): string {
    return this.placeholder || this.translate.instant('common.imageUpload.placeholder');
  }

  // Quality Assessment Helpers
  getQualityLabel(quality: 'excellent' | 'good' | 'fair' | 'poor'): string {
    const keyMap: Record<string, string> = {
      'excellent': 'common.imageUpload.quality.excellent',
      'good': 'common.imageUpload.quality.good',
      'fair': 'common.imageUpload.quality.fair',
      'poor': 'common.imageUpload.quality.poor'
    };
    return this.translate.instant(keyMap[quality] || 'common.imageUpload.quality.good');
  }

  getQualityIcon(quality: 'excellent' | 'good' | 'fair' | 'poor'): string {
    const icons: Record<string, string> = {
      'excellent': 'check_circle',
      'good': 'check',
      'fair': 'warning',
      'poor': 'error'
    };
    return icons[quality] || 'help';
  }

  getQualityIconColor(quality: 'excellent' | 'good' | 'fair' | 'poor'): string {
    const colors: Record<string, string> = {
      'excellent': 'text-green-600 dark:text-green-400',
      'good': 'text-blue-600 dark:text-blue-400',
      'fair': 'text-yellow-600 dark:text-yellow-400',
      'poor': 'text-red-600 dark:text-red-400'
    };
    return colors[quality] || 'text-gray-600 dark:text-gray-400';
  }
}

