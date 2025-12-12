import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter, AfterViewInit, ChangeDetectionStrategy, input, output, viewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import {
  AutoCompleteComponent as SyncfusionAutoCompleteComponent,
  FilteringEventArgs,
  PopupEventArgs
} from '@syncfusion/ej2-angular-dropdowns';

export interface AutocompleteItem {
  [key: string]: any;
}

export interface AutocompleteConfig {
  dataSource?: AutocompleteItem[];
  fields?: any;
  placeholder?: string;
  allowFiltering?: boolean;
  caseSensitive?: boolean;
  filterType?: 'Contains' | 'StartsWith' | 'EndsWith';
  minLength?: number;
  showClearButton?: boolean;
  enableVirtualization?: boolean;
  allowCustom?: boolean;
  autofill?: boolean;
  highlight?: boolean;
  ignoreAccent?: boolean;
  sortOrder?: 'None' | 'Ascending' | 'Descending';
  suggestionCount?: number;
  width?: string | number;
  height?: string | number;
  enabled?: boolean;
  readonly?: boolean;
  enableRtl?: boolean;
  locale?: string;
  value?: string | number | AutocompleteItem;
  customClass?: string;
}

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, AutoCompleteModule],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit, AfterViewInit, OnDestroy {
  autocomplete = viewChild<SyncfusionAutoCompleteComponent>('autocomplete');

  // Data Source
  dataSource = input<AutocompleteItem[]>([]);
  fields = input<any>({
    value: 'value',
    text: 'text'
  });

  // Appearance
  placeholder = input<string>('Type to search...');
  width = input<string | number>('100%');
  height = input<string | number>('auto');
  customClass = input<string | undefined>(undefined);

  // Behavior
  allowFiltering = input<boolean>(true);
  caseSensitive = input<boolean>(false);
  filterType = input<'Contains' | 'StartsWith' | 'EndsWith'>('Contains');
  minLength = input<number>(1);
  showClearButton = input<boolean>(true);
  enableVirtualization = input<boolean>(false);
  allowCustom = input<boolean>(false);
  autofill = input<boolean>(true);
  highlight = input<boolean>(true);
  ignoreAccent = input<boolean>(false);
  sortOrder = input<'None' | 'Ascending' | 'Descending'>('None');
  suggestionCount = input<number>(20);
  enabled = input<boolean>(true);
  readonly = input<boolean>(false);
  enableRtl = input<boolean>(false);
  locale = input<string>('en');
  value = input<string | number | AutocompleteItem | undefined>(undefined);

  // Events
  change = output<any>();
  select = output<any>();
  focus = output<any>();
  blur = output<any>();
  filtering = output<any>();
  open = output<any>();
  close = output<any>();
  created = output<any>();

  config = input<AutocompleteConfig | undefined>(undefined);

  effectiveOptions = computed(() => {
    const cfg = this.config();
    return {
      dataSource: cfg?.dataSource ?? this.dataSource(),
      fields: cfg?.fields ?? this.fields(),
      placeholder: cfg?.placeholder ?? this.placeholder(),
      width: cfg?.width ?? this.width(),
      height: cfg?.height ?? this.height(),
      customClass: cfg?.customClass ?? this.customClass(),
      allowFiltering: cfg?.allowFiltering ?? this.allowFiltering(),
      caseSensitive: cfg?.caseSensitive ?? this.caseSensitive(),
      filterType: cfg?.filterType ?? this.filterType(),
      minLength: cfg?.minLength ?? this.minLength(),
      showClearButton: cfg?.showClearButton ?? this.showClearButton(),
      enableVirtualization: cfg?.enableVirtualization ?? this.enableVirtualization(),
      allowCustom: cfg?.allowCustom ?? this.allowCustom(),
      autofill: cfg?.autofill ?? this.autofill(),
      highlight: cfg?.highlight ?? this.highlight(),
      ignoreAccent: cfg?.ignoreAccent ?? this.ignoreAccent(),
      sortOrder: cfg?.sortOrder ?? this.sortOrder(),
      suggestionCount: cfg?.suggestionCount ?? this.suggestionCount(),
      enabled: cfg?.enabled ?? this.enabled(),
      readonly: cfg?.readonly ?? this.readonly(),
      enableRtl: cfg?.enableRtl ?? this.enableRtl(),
      locale: cfg?.locale ?? this.locale(),
      value: cfg?.value ?? this.value()
    };
  });


  ngOnInit(): void {
    // Logic moved to effectiveOptions computed signal
  }

  ngAfterViewInit(): void {
    const autocomplete = this.autocomplete();
    if (autocomplete) {
      this.created.emit({ autocomplete });
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get Autocomplete instance
   */
  getAutocompleteInstance(): SyncfusionAutoCompleteComponent | null {
    return this.autocomplete() || null;
  }

  /**
   * Get value
   */
  getValue(): string | number | AutocompleteItem | undefined {
    const autocomplete = this.autocomplete();
    if (autocomplete) {
      const value = autocomplete.value;
      if (value === null || value === undefined) {
        return undefined;
      }
      // Filter out boolean values and handle object types
      if (typeof value === 'boolean') {
        return undefined;
      }
      if (typeof value === 'object') {
        return value as AutocompleteItem;
      }
      // string or number
      return value as string | number;
    }
    return this.value();
  }

  /**
   * Set value
   */
  setValue(value: string | number | AutocompleteItem): void {
    const autocomplete = this.autocomplete();
    if (autocomplete) {
      autocomplete.value = value;
    }
  }

  /**
   * Get text
   */
  getText(): string {
    const autocomplete = this.autocomplete();
    if (autocomplete) {
      return autocomplete.text || '';
    }
    return '';
  }

  /**
   * Get data item
   */
  getDataItem(): AutocompleteItem | null {
    const autocomplete = this.autocomplete();
    if (autocomplete && autocomplete.value !== null && autocomplete.value !== undefined) {
      const value = autocomplete.value;
      if (typeof value === 'string' || typeof value === 'number') {
        return autocomplete.getDataByValue(value) as AutocompleteItem;
      }
    }
    return null;
  }

  /**
   * Show popup
   */
  showPopup(): void {
    this.autocomplete()?.showPopup();
  }

  /**
   * Hide popup
   */
  hidePopup(): void {
    this.autocomplete()?.hidePopup();
  }

  /**
   * Focus
   */
  focusIn(): void {
    this.autocomplete()?.focusIn();
  }

  /**
   * Blur
   */
  focusOut(): void {
    this.autocomplete()?.focusOut();
  }

  /**
   * Clear
   */
  clear(): void {
    const autocomplete = this.autocomplete();
    if (autocomplete) {
      autocomplete.value = null;
    }
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.autocomplete()?.dataBind();
  }

  /**
   * Event handlers
   */
  onChange(event: any): void {
    this.change.emit(event);
  }

  onSelect(event: any): void {
    this.select.emit(event);
  }

  onFocus(event: any): void {
    this.focus.emit(event);
  }

  onBlur(event: any): void {
    this.blur.emit(event);
  }

  onFiltering(event: FilteringEventArgs): void {
    this.filtering.emit(event);
  }

  onOpen(event: PopupEventArgs): void {
    this.open.emit(event);
  }

  onClose(event: PopupEventArgs): void {
    this.close.emit(event);
  }

  onCreated(event: any): void {
    this.created.emit(event);
  }
}

