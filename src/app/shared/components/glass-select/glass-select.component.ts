import { Component, Input, forwardRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export interface SelectOption {
  value: any;
  label: string;
  disabled?: boolean;
  group?: string;
}

@Component({
  selector: 'app-glass-select',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassSelectComponent),
      multi: true
    }
  ],
  templateUrl: './glass-select.component.html',
  styleUrls: ['./glass-select.component.scss']
})
export class GlassSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = 'เลือก...';
  @Input() options: SelectOption[] = [];
  @Input() multiple: boolean = false;
  @Input() searchable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() showSuccess: boolean = false;
  @Input() successMessage: string = '';
  @Input() fullWidth: boolean = true;
  @Input() selectId: string = `glass-select-${Math.random().toString(36).substr(2, 9)}`;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  value: any = null;
  searchTerm: string = '';
  isOpen: boolean = false;
  hasError: boolean = false;
  isValid: boolean = false;
  filteredOptions: SelectOption[] = [];

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
    this.filteredOptions = [...this.options];
  }

  get containerClass(): string {
    return this.fullWidth ? 'w-full' : '';
  }

  get errorMessageId(): string {
    return `${this.selectId}-error`;
  }

  get hintId(): string {
    return `${this.selectId}-hint`;
  }

  get successMessageId(): string {
    return `${this.selectId}-success`;
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
    return ids.join(' ') || '';
  }

  get displayValue(): string {
    if (this.multiple) {
      if (Array.isArray(this.value) && this.value.length > 0) {
        const selectedLabels = this.value
          .map((val: any) => {
            const option = this.options.find(opt => opt.value === val);
            return option ? option.label : val;
          })
          .join(', ');
        return selectedLabels;
      }
      // Placeholder will be translated in template
      return this.placeholder;
    } else {
      if (this.value !== null && this.value !== undefined) {
        const option = this.options.find(opt => opt.value === this.value);
        return option ? option.label : String(this.value);
      }
      // Placeholder will be translated in template
      return this.placeholder;
    }
  }

  get isPlaceholder(): boolean {
    if (this.multiple) {
      return !Array.isArray(this.value) || this.value.length === 0;
    }
    return this.value === null || this.value === undefined;
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.filteredOptions = [...this.options];
        this.searchTerm = '';
      }
    }
  }

  closeDropdown(): void {
    this.isOpen = false;
    this.searchTerm = '';
    this.filteredOptions = [...this.options];
    this.onTouched();
  }

  selectOption(option: SelectOption): void {
    if (option.disabled) {
      return;
    }

    if (this.multiple) {
      const currentValue = Array.isArray(this.value) ? [...this.value] : [];
      const index = currentValue.indexOf(option.value);
      
      if (index > -1) {
        currentValue.splice(index, 1);
      } else {
        currentValue.push(option.value);
      }
      
      this.value = currentValue;
    } else {
      this.value = option.value;
      this.closeDropdown();
    }

    // Reset states
    this.hasError = false;
    if (this.showSuccess && this.value) {
      this.isValid = true;
    }

    this.onChange(this.value);
  }

  isSelected(option: SelectOption): boolean {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(option.value);
    }
    return this.value === option.value;
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    
    if (this.searchTerm) {
      this.filteredOptions = this.options.filter(opt =>
        opt.label.toLowerCase().includes(this.searchTerm) &&
        !opt.disabled
      );
    } else {
      this.filteredOptions = [...this.options];
    }
  }

  clearSelection(): void {
    this.value = this.multiple ? [] : null;
    this.hasError = false;
    this.isValid = false;
    this.onChange(this.value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest(`#${this.selectId}`)) {
      this.closeDropdown();
    }
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    this.closeDropdown();
  }

  writeValue(value: any): void {
    this.value = value;
    if (this.multiple && !Array.isArray(value)) {
      this.value = value ? [value] : [];
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.isOpen = false;
    }
  }

  validate(): void {
    if (this.required) {
      if (this.multiple) {
        this.hasError = !Array.isArray(this.value) || this.value.length === 0;
      } else {
        this.hasError = this.value === null || this.value === undefined;
      }
    }
  }

  trackByValue(index: number, option: SelectOption): any {
    return option.value;
  }
}

