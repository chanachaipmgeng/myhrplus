import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-glass-switch',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassSwitchComponent),
      multi: true
    }
  ],
  templateUrl: './glass-switch.component.html',
  styleUrls: ['./glass-switch.component.scss']
})
export class GlassSwitchComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() switchId: string = `glass-switch-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  hasError: boolean = false;
  isValid: boolean = false;

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  get errorMessageId(): string {
    return `${this.switchId}-error`;
  }

  get hintId(): string {
    return `${this.switchId}-hint`;
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

  get sizeClasses(): { track: string; thumb: string } {
    const sizes = {
      sm: {
        track: 'w-9 h-5',
        thumb: 'w-4 h-4'
      },
      md: {
        track: 'w-11 h-6',
        thumb: 'w-5 h-5'
      },
      lg: {
        track: 'w-14 h-7',
        thumb: 'w-6 h-6'
      }
    };
    return sizes[this.size];
  }

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;

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

