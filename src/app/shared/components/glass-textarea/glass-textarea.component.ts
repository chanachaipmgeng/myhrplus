import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassTextareaComponent),
      multi: true
    }
  ],
  templateUrl: './glass-textarea.component.html',
  styleUrls: ['./glass-textarea.component.scss']
})
export class GlassTextareaComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() rows: number = 4;
  @Input() maxLength: number | null = null;
  @Input() autoResize: boolean = false;
  @Input() showCounter: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() showSuccess: boolean = false;
  @Input() successMessage: string = '';
  @Input() fullWidth: boolean = true;
  @Input() textareaId: string = `glass-textarea-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  value: string = '';
  hasError: boolean = false;
  isValid: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get containerClass(): string {
    return this.fullWidth ? 'w-full' : '';
  }

  get errorMessageId(): string {
    return `${this.textareaId}-error`;
  }

  get hintId(): string {
    return `${this.textareaId}-hint`;
  }

  get successMessageId(): string {
    return `${this.textareaId}-success`;
  }

  get characterCount(): number {
    return this.value ? this.value.length : 0;
  }

  get remainingCharacters(): number | null {
    return this.maxLength ? this.maxLength - this.characterCount : null;
  }

  get isOverLimit(): boolean {
    return this.maxLength !== null && this.characterCount > this.maxLength;
  }

  get describedByIds(): string {
    const ids: string[] = [];
    if (this.ariaDescribedBy) {
      ids.push(this.ariaDescribedBy);
    }
    if (this.hasError && this.errorMessage) {
      ids.push(this.errorMessageId);
    } else if (this.isValid && this.showSuccess && this.successMessage) {
      ids.push(this.successMessageId);
    } else if (this.hint && !this.hasError && !this.isValid) {
      ids.push(this.hintId);
    }
    if (this.showCounter && this.maxLength) {
      ids.push(`${this.textareaId}-counter`);
    }
    return ids.join(' ') || '';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    
    // Auto resize
    if (this.autoResize) {
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
    
    // Reset states
    this.hasError = false;
    this.isValid = false;
    
    // Validate if required
    if (this.required && !this.value.trim()) {
      this.hasError = true;
    } else if (this.value.trim() && this.showSuccess) {
      this.isValid = true;
    }
    
    // Check max length
    if (this.maxLength && this.value.length > this.maxLength) {
      this.hasError = true;
    }
    
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
    
    // Validate on blur if required
    if (this.required && !this.value.trim()) {
      this.hasError = true;
      this.isValid = false;
    } else if (this.value.trim() && this.showSuccess) {
      this.isValid = true;
      this.hasError = false;
    }
  }

  onFocus(): void {
    // Clear error on focus (user is fixing it)
    if (this.hasError) {
      this.hasError = false;
    }
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

