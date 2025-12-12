import { Component, ChangeDetectionStrategy, input, signal, computed, forwardRef } from '@angular/core';
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
  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text');
  disabled = input<boolean>(false); // From Template binding
  readonly = input<boolean>(false);
  required = input<boolean>(false);
  hint = input<string>('');
  errorMessage = input<string>('');
  fullWidth = input<boolean>(true);
  inputId = input<string>(`glass-input-${Math.random().toString(36).substr(2, 9)}`);
  ariaLabel = input<string | undefined>(undefined);
  ariaDescribedBy = input<string | undefined>(undefined);

  // Internal state
  value = signal<string>('');
  hasError = signal<boolean>(false);

  // CVA disabled state
  private formDisabled = signal<boolean>(false);

  // Effective disabled state
  effectiveDisabled = computed(() => this.disabled() || this.formDisabled());

  private onChange = (value: string) => { };
  private onTouched = () => { };

  containerClass = computed(() => this.fullWidth() ? 'w-full' : '');

  errorMessageId = computed(() => `${this.inputId()}-error`);

  hintId = computed(() => `${this.inputId()}-hint`);

  describedByIds = computed(() => {
    const ids: string[] = [];
    if (this.ariaDescribedBy()) {
      ids.push(this.ariaDescribedBy()!);
    }
    if (this.hasError() && this.errorMessage()) {
      ids.push(this.errorMessageId());
    } else if (this.hint() && !this.hasError()) {
      ids.push(this.hintId());
    }
    return ids.join(' ') || undefined || '';
  });

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    this.value.set(newValue);
    this.hasError.set(this.required() && !newValue.trim());
    this.onChange(newValue);
  }

  onBlur(): void {
    this.onTouched();
  }

  onFocus(): void {
    this.hasError.set(false);
  }

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }
}



