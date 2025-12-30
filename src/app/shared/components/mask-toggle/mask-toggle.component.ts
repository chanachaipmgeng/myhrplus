import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FieldMaskingService } from '@core/services';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

/**
 * Component for toggling masked/unmasked display of sensitive data
 * 
 * Usage:
 * <app-mask-toggle [value]="employee.mobile" [fieldName]="'mobile'"></app-mask-toggle>
 */
@Component({
  selector: 'app-mask-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mask-toggle-container d-inline-flex align-items-center gap-2">
      <span class="mask-value">{{ display }}</span>
      <button
        type="button"
        class="btn btn-sm btn-link p-0 mask-toggle-btn"
        (click)="toggle()"
        [title]="show ? 'ซ่อน' : 'แสดง'">
        <i class="fa" [ngClass]="show ? 'fa-eye-slash' : 'fa-eye'"></i>
      </button>
    </div>
  `,
  styles: [`
    .mask-toggle-container {
      font-family: monospace;
    }
    .mask-toggle-btn {
      color: var(--bs-link-color);
      text-decoration: none;
    }
    .mask-toggle-btn:hover {
      color: var(--bs-link-hover-color);
    }
  `]
})
export class MaskToggleComponent {
  @Input() value: string | null | undefined = '';
  @Input() fieldName = '';

  /** true = show raw value / false = show masked value */
  show = false;

  constructor(private maskService: FieldMaskingService) {}

  get display(): string | null | undefined {
    return this.show ? this.value : this.maskService.mask(this.fieldName, this.value);
  }

  toggle(): void {
    this.show = !this.show;
  }
}

