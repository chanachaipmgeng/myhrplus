import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';
import { ImageUploadConfig, UploadedImage } from '../../../../shared/components/image-upload/image-upload.component';
import { ImageQualityAssessment } from '../../../../core/utils/image-quality.utils';

@Component({
  selector: 'app-image-upload-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './image-upload-demo.component.html',
  styleUrls: ['./image-upload-demo.component.scss']
})
export class ImageUploadDemoComponent {
  config: ImageUploadConfig = {
    maxSize: 5,
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif'],
    enablePreview: true
  };

  configMultiple: ImageUploadConfig = {
    maxSize: 5,
    maxFiles: 5,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true
  };

  configWithQualityCheck: ImageUploadConfig = {
    maxSize: 5,
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true,
    enableQualityCheck: true, // Enable quality assessment
    requireQualityCheck: false, // Don't reject poor quality images, just warn
    minQuality: 'good' // Minimum quality threshold
  };

  configWithRequiredQuality: ImageUploadConfig = {
    maxSize: 5,
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true,
    enableQualityCheck: true,
    requireQualityCheck: true, // Reject images with poor quality
    minQuality: 'good' // Only accept 'good' or 'excellent' quality
  };

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "'อัปโหลดรูปภาพ'",
      description: 'Upload label',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'ลากไฟล์มาวางที่นี่หรือคลิกเพื่อเลือก'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'accept',
      type: 'string',
      default: "'image/*'",
      description: 'Accepted image types',
      required: false
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Allow multiple images',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable upload',
      required: false
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Mark as required',
      required: false
    },
    {
      name: 'config',
      type: 'ImageUploadConfig',
      default: '-',
      description: 'Upload configuration',
      required: false
    }
  ];

  configProps: PropDefinition[] = [
    {
      name: 'enableQualityCheck',
      type: 'boolean',
      default: 'false',
      description: 'Enable image quality assessment (brightness, blur detection)',
      required: false
    },
    {
      name: 'requireQualityCheck',
      type: 'boolean',
      default: 'false',
      description: 'Reject images that don\'t meet minimum quality requirements',
      required: false
    },
    {
      name: 'minQuality',
      type: "'excellent' | 'good' | 'fair' | 'poor'",
      default: "'good'",
      description: 'Minimum required quality level when requireQualityCheck is true',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'fileSelect',
      type: 'EventEmitter<UploadedImage[]>',
      default: '-',
      description: 'Emitted when images are selected',
      required: false
    },
    {
      name: 'fileRemove',
      type: 'EventEmitter<UploadedImage>',
      default: '-',
      description: 'Emitted when image is removed',
      required: false
    },
    {
      name: 'error',
      type: 'EventEmitter<string>',
      default: '-',
      description: 'Emitted when error occurs',
      required: false
    },
    {
      name: 'qualityCheck',
      type: 'EventEmitter<{ image: UploadedImage; assessment: ImageQualityAssessment }>',
      default: '-',
      description: 'Emitted when quality assessment is performed (when enableQualityCheck is true)',
      required: false
    }
  ];

  basicExample = `<app-image-upload
  (fileSelect)="onImageSelected($event)">
</app-image-upload>`;

  multipleExample = `<app-image-upload
  [multiple]="true"
  [config]="config"
  (fileSelect)="onImageSelected($event)">
</app-image-upload>`;

  withConfigExample = `<app-image-upload
  [config]="{
    maxSize: 5,
    maxFiles: 3,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true
  }"
  (fileSelect)="onImageSelected($event)">
</app-image-upload>`;

  withQualityCheckExample = `<app-image-upload
  [config]="{
    maxSize: 5,
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true,
    enableQualityCheck: true,
    requireQualityCheck: false,
    minQuality: 'good'
  }"
  (fileSelect)="onImageSelected($event)"
  (qualityCheck)="onQualityCheck($event)">
</app-image-upload>`;

  withRequiredQualityExample = `<app-image-upload
  [config]="{
    maxSize: 5,
    maxFiles: 1,
    allowedTypes: ['image/jpeg', 'image/png'],
    enablePreview: true,
    enableQualityCheck: true,
    requireQualityCheck: true,
    minQuality: 'good'
  }"
  (fileSelect)="onImageSelected($event)"
  (qualityCheck)="onQualityCheck($event)">
</app-image-upload>`;

  onImageSelected(images: any[]): void {
    console.log('Images selected:', images);
    // Access quality assessment if available
    images.forEach(image => {
      if (image.qualityAssessment) {
        console.log('Quality:', image.qualityAssessment.quality);
        console.log('Feedback:', image.qualityAssessment.feedback);
        console.log('Recommendations:', image.qualityAssessment.recommendations);
      }
    });
  }

  onQualityCheck(event: { image: any; assessment: any }): void {
    console.log('Quality check result:', event);
    console.log('Quality:', event.assessment.quality);
    console.log('Brightness:', event.assessment.brightness);
    console.log('Blurriness:', event.assessment.blurriness);
    console.log('Feedback:', event.assessment.feedback);
    console.log('Recommendations:', event.assessment.recommendations);
  }
}
