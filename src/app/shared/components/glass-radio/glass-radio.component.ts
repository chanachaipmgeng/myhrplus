import { Component, Input, forwardRef, Optional, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-radio',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassRadioComponent),
      multi: true
    }
  ],
  templateUrl: './glass-radio.component.html',
  styleUrls: ['./glass-radio.component.scss']
})
export class GlassRadioComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() value: any;
  @Input() name: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() radioId: string = `glass-radio-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  hasError: boolean = false;
  isValid: boolean = false;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
    // Generate unique name if not provided
    if (!this.name) {
      this.name = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  get errorMessageId(): string {
    return `${this.radioId}-error`;
  }

  get hintId(): string {
    return `${this.radioId}-hint`;
  }

  get describedByIds(): string {
    const ids: string[] = [];
    if (this.ariaDescribedBy) {
      ids.push(this.ariaDescribedBy);
    }
    if (this.hasError && this.errorMessage) {
      ids.push(this.errorMessageId);
    } else if (this.hint && !this.hasError) {
      ids.push(this.hintId);
    }
    return ids.join(' ') || '';
  }

  select(): void {
    if (!this.disabled && !this.checked) {
      this.checked = true;

      // Reset states
      this.hasError = false;
      this.isValid = true;

      this.onChange(this.value);
      this.onTouched();
    }
  }

  onBlur(): void {
    this.onTouched();
    this.validate();
  }

  validate(): void {
    if (this.required && !this.checked) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
  }

  writeValue(value: any): void {
    this.checked = value === this.value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

