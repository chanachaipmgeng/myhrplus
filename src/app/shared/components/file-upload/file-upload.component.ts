import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  private translate = inject(TranslateService);
  
  @Input() accept = '*';
  @Input() multiple = false;
  @Input() maxSize = 10 * 1024 * 1024; // 10MB default
  @Output() fileSelected = new EventEmitter<File[]>();
  @Output() error = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  selectedFiles: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      
      // Validate file sizes
      const invalidFiles = files.filter(file => file.size > this.maxSize);
      if (invalidFiles.length > 0) {
        const maxSizeMB = this.maxSize / 1024 / 1024;
        const errorMessage = this.translate.instant('common.fileUpload.error.maxSize', { maxSize: maxSizeMB });
        this.error.emit(errorMessage);
        return;
      }

      this.selectedFiles = this.multiple ? files : [files[0]];
      this.fileSelected.emit(this.selectedFiles);
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.fileSelected.emit(this.selectedFiles);
  }

  getFileSize(size: number): string {
    if (size < 1024) return size + ' B';
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }
}

