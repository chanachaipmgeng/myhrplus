import { Component, ChangeDetectionStrategy, input, output, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent {
  accept = input<string>('*', { alias: 'accept' });
  multiple = input<boolean>(false, { alias: 'multiple' });
  maxSize = input<number>(10 * 1024 * 1024, { alias: 'maxSize' }); // 10MB default
  fileSelected = output<File[]>();
  error = output<string>();

  fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

  selectedFiles: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);

      // Validate file sizes
      const invalidFiles = files.filter(file => file.size > this.maxSize());
      if (invalidFiles.length > 0) {
        this.error.emit(`File size exceeds maximum allowed size of ${this.maxSize() / 1024 / 1024}MB`);
        return;
      }

      this.selectedFiles = this.multiple() ? files : [files[0]];
      this.fileSelected.emit(this.selectedFiles);
    }
  }

  triggerFileInput(): void {
    this.fileInput().nativeElement.click();
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

