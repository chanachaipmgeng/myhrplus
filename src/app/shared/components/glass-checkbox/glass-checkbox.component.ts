import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassCheckboxComponent),
      multi: true
    }
  ],
  templateUrl: './glass-checkbox.component.html',
  styleUrls: ['./glass-checkbox.component.scss']
})
export class GlassCheckboxComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() checkboxId: string = `glass-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  hasError: boolean = false;
  isValid: boolean = false;

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  get errorMessageId(): string {
    return `${this.checkboxId}-error`;
  }

  get hintId(): string {
    return `${this.checkboxId}-hint`;
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

  get displayState(): 'checked' | 'unchecked' | 'indeterminate' {
    if (this.indeterminate) {
      return 'indeterminate';
    }
    return this.checked ? 'checked' : 'unchecked';
  }

  toggle(): void {
    if (!this.disabled) {
      if (this.indeterminate) {
        this.checked = true;
        this.indeterminate = false;
      } else {
        this.checked = !this.checked;
      }

      // Reset states
      this.hasError = false;
      if (this.checked) {
        this.isValid = true;
      }

      this.onChange(this.checked);
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

  writeValue(value: boolean): void {
    this.checked = value || false;
    this.indeterminate = false;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

