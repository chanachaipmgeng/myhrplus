import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, input, output, viewChild, computed } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  createImageData,
  assessImageQuality,
  isImageQualitySufficient,
  ImageQualityAssessment
} from '../../../core/utils/image-quality.utils';

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
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageUploadComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent implements ControlValueAccessor {
  label = input<string>('อัปโหลดรูปภาพ', { alias: 'label' });
  placeholder = input<string>('ลากไฟล์มาวางที่นี่หรือคลิกเพื่อเลือก', { alias: 'placeholder' });
  accept = input<string>('image/*', { alias: 'accept' });
  multiple = input<boolean>(false, { alias: 'multiple' });
  disabledInput = input<boolean>(false, { alias: 'disabled' });
  required = input<boolean>(false, { alias: 'required' });
  config = input<ImageUploadConfig>({
    maxSize: 5, // 5MB
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    enablePreview: true
  }, { alias: 'config' });

  fileSelect = output<UploadedImage[]>();
  fileRemove = output<UploadedImage>();
  error = output<string>();
  qualityCheck = output<{ image: UploadedImage; assessment: ImageQualityAssessment }>();

  fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

  // Derived config with defaults
  effectiveConfig = computed(() => {
    const c = { ...this.config() };
    if (!c.maxSize) c.maxSize = 5;
    if (!c.maxFiles) c.maxFiles = this.multiple() ? 5 : 1;
    if (!c.allowedTypes) {
      c.allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    }
    if (c.enablePreview === undefined) {
      c.enablePreview = true;
    }
    if (c.enableQualityCheck === undefined) {
      c.enableQualityCheck = false;
    }
    if (c.requireQualityCheck === undefined) {
      c.requireQualityCheck = false;
    }
    if (!c.minQuality) {
      c.minQuality = 'good';
    }
    return c;
  });


  uploadedImages: UploadedImage[] = [];
  isDragging = false;
  errors: string[] = [];
  disabled = false;

  private onChange = (value: UploadedImage[]) => { };
  private onTouched = () => { };

  // ngOnInit removed as logic is now in effectiveConfig computed

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
    this.disabled = isDisabled || this.disabledInput();
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
    const config = this.effectiveConfig();
    const totalFiles = this.uploadedImages.length + files.length;
    if (totalFiles > config.maxFiles!) {
      const error = `สามารถอัปโหลดได้สูงสุด ${config.maxFiles} ไฟล์`;
      this.errors.push(error);
      this.error.emit(error);
      return;
    }

    for (const file of files) {
      // Check file type
      if (!config.allowedTypes!.includes(file.type)) {
        const error = `ไฟล์ ${file.name} ไม่ใช่ประเภทที่รองรับ (${config.allowedTypes!.join(', ')})`;
        this.errors.push(error);
        this.error.emit(error);
        continue;
      }

      // Check file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > config.maxSize!) {
        const error = `ไฟล์ ${file.name} ใหญ่เกินไป (สูงสุด ${config.maxSize}MB)`;
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
      if (config.enableQualityCheck) {
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
          if (config.requireQualityCheck) {
            const qualityOrder = ['poor', 'fair', 'good', 'excellent'];
            const minQualityIndex = qualityOrder.indexOf(config.minQuality!);
            const actualQualityIndex = qualityOrder.indexOf(qualityAssessment.quality);

            if (actualQualityIndex < minQualityIndex) {
              const error = `คุณภาพภาพ ${file.name} ไม่เพียงพอ (${qualityAssessment.quality}). ${qualityAssessment.feedback}`;
              this.errors.push(error);
              this.error.emit(error);
              continue;
            }
          }

          // Warn if quality is poor but not required
          if (qualityAssessment.quality === 'poor' || qualityAssessment.quality === 'fair') {
            const warning = `⚠️ คุณภาพภาพ ${file.name}: ${qualityAssessment.feedback}`;
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
      this.fileInput().nativeElement.click();
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
    return this.uploadedImages.length < this.effectiveConfig().maxFiles!;
  }

  // Quality Assessment Helpers
  getQualityLabel(quality: 'excellent' | 'good' | 'fair' | 'poor'): string {
    const labels: Record<string, string> = {
      'excellent': 'คุณภาพดีมาก',
      'good': 'คุณภาพดี',
      'fair': 'คุณภาพปานกลาง',
      'poor': 'คุณภาพต่ำ'
    };
    return labels[quality] || quality;
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

