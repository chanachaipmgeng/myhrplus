import { Component, OnInit, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatureModule, SignatureComponent as SyncfusionSignatureComponent } from '@syncfusion/ej2-angular-inputs';

export interface SignatureConfig {
  backgroundColor?: string;
  strokeColor?: string;
  minStrokeWidth?: number;
  maxStrokeWidth?: number;
  velocity?: number;
  isReadOnly?: boolean;
  saveWithBackground?: boolean;
  allowClear?: boolean;
  height?: string | number;
  width?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-signature',
  standalone: true,
  imports: [CommonModule, SignatureModule],
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignatureComponent {
  signature = viewChild<SyncfusionSignatureComponent>('signature');

  // Appearance
  backgroundColor = input<string>('#ffffff');
  strokeColor = input<string>('#000000');
  minStrokeWidth = input<number>(0.5);
  maxStrokeWidth = input<number>(2.5);
  velocity = input<number>(0.7);

  // Behavior
  isReadOnly = input<boolean>(false);
  saveWithBackground = input<boolean>(true);
  allowClear = input<boolean>(true);

  // Size
  height = input<string | number>('300px');
  width = input<string | number>('100%');
  customClass = input<string | undefined>(undefined);

  // Events
  change = output<any>();
  created = output<any>();

  /**
   * Get signature instance
   */
  getSignatureInstance(): SyncfusionSignatureComponent | null {
    return this.signature() || null;
  }

  /**
   * Clear signature
   */
  clear(): void {
    const sig = this.signature();
    if (sig) {
      sig.clear();
    }
  }

  /**
   * Undo last stroke
   */
  undo(): void {
    const sig = this.signature();
    if (sig) {
      sig.undo();
    }
  }

  /**
   * Redo last undone stroke
   */
  redo(): void {
    const sig = this.signature();
    if (sig) {
      sig.redo();
    }
  }

  /**
   * Check if signature is empty
   */
  isEmpty(): boolean {
    const sig = this.signature();
    if (sig) {
      return sig.isEmpty();
    }
    return true;
  }

  /**
   * Save signature as base64
   */
  saveAsBase64(): string {
    const sig = this.signature();
    if (sig) {
      // getSignature accepts SignatureFileType: 'Png' | 'Svg' | 'Jpeg'
      const fileType = 'Png' as any;
      return sig.getSignature(fileType);
    }
    return '';
  }

  /**
   * Save signature as blob
   */
  saveAsBlob(): Blob | null {
    if (this.signature()) {
      const base64 = this.saveAsBase64();
      if (base64) {
        // Convert base64 to blob
        const byteString = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      }
    }
    return null;
  }

  /**
   * Download signature as image
   */
  download(fileName?: string): void {
    if (this.signature()) {
      const base64 = this.saveAsBase64();
      if (base64) {
        const link = document.createElement('a');
        link.href = base64;
        link.download = fileName || 'signature.png';
        link.click();
      }
    }
  }

  /**
   * Load signature from base64
   */
  load(base64: string): void {
    const sig = this.signature();
    if (sig && base64) {
      sig.load(base64);
    }
  }

  /**
   * Load signature from URL
   */
  loadFromUrl(url: string): void {
    const sig = this.signature();
    if (sig && url) {
      // Convert image URL to base64
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const base64 = canvas.toDataURL('image/png');
          this.load(base64);
        }
      };
      img.src = url;
    }
  }

  /**
   * Event handlers
   */
  onChange(event: any): void {
    this.change.emit(event);
  }

  onCreated(event: any): void {
    this.created.emit(event);
  }
}
