import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-glass-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassInputComponent),
      multi: true
    }
  ],
  templateUrl: './glass-input.component.html',
  styleUrls: ['./glass-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlassInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() fullWidth: boolean = true;
  @Input() inputId: string = `glass-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  value: string = '';
  hasError: boolean = false;

  private onChange = (value: string) => { };
  private onTouched = () => { };

  get containerClass(): string {
    return this.fullWidth ? 'w-full' : '';
  }

  get errorMessageId(): string {
    return `${this.inputId}-error`;
  }

  get hintId(): string {
    return `${this.inputId}-hint`;
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
    return ids.join(' ') || undefined || '';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.hasError = this.required && !this.value.trim();
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onFocus(): void {
    this.hasError = false;
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



