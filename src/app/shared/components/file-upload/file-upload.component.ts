import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
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
        this.error.emit(`File size exceeds maximum allowed size of ${this.maxSize / 1024 / 1024}MB`);
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

