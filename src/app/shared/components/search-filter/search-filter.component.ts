import { Component, ChangeDetectionStrategy, input, output, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { IconComponent } from '../icon/icon.component';

export interface FilterOption {
  key: string;
  label: string;
  type: 'select' | 'checkbox' | 'date' | 'daterange';
  options?: { value: any; label: string }[];
  value?: any;
}

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GlassCardComponent, IconComponent],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFilterComponent implements OnInit {
  placeholder = input<string>('ค้นหา...');
  filters = input<FilterOption[]>([]);
  showAdvanced = input<boolean>(false);
  debounceTime = input<number>(300);
  showFilterChips = input<boolean>(true);

  search = output<string>();
  filterChange = output<Record<string, any>>();
  advancedToggle = output<boolean>();

  searchForm: FormGroup;
  filterForm: FormGroup;
  isAdvancedOpen: boolean = false;
  activeFilters: Record<string, any> = {};
  searchControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      search: this.searchControl
    });

    this.filterForm = this.fb.group({});

    // Effect to rebuild form when filters change
    effect(() => {
      const filters = this.filters();
      // Clear existing controls
      Object.keys(this.filterForm.controls).forEach(key => {
        this.filterForm.removeControl(key);
      });
      // Add new controls
      filters.forEach(filter => {
        this.filterForm.addControl(filter.key, this.fb.control(filter.value || ''));
      });
    });
  }

  ngOnInit(): void {
    // Setup search debounce
    this.searchForm.get('search')?.valueChanges
      .pipe(
        debounceTime(this.debounceTime()),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.search.emit(value);
      });

    // Setup filter changes
    this.filterForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(values => {
        this.activeFilters = { ...values };
        this.filterChange.emit(this.activeFilters);
      });
  }

  onClearSearch(): void {
    this.searchForm.patchValue({ search: '' });
    this.search.emit('');
  }

  onToggleAdvanced(): void {
    this.isAdvancedOpen = !this.isAdvancedOpen;
    this.advancedToggle.emit(this.isAdvancedOpen);
  }

  onRemoveFilter(key: string): void {
    this.filterForm.patchValue({ [key]: '' });
    delete this.activeFilters[key];
    this.filterChange.emit(this.activeFilters);
  }

  onClearAllFilters(): void {
    this.filters().forEach(filter => {
      this.filterForm.patchValue({ [filter.key]: '' });
    });
    this.activeFilters = {};
    this.filterChange.emit({});
  }

  getActiveFilterCount(): number {
    return Object.values(this.activeFilters).filter(v => v !== '' && v !== null && v !== undefined).length;
  }

  getFilterLabel(key: string): string {
    const filter = this.filters().find(f => f.key === key);
    return filter?.label || key;
  }

  getFilterDisplayValue(key: string): string {
    const value = this.activeFilters[key];
    if (!value) return '';

    const filter = this.filters().find(f => f.key === key);
    if (filter?.type === 'select' && filter.options) {
      const option = filter.options.find(o => o.value === value);
      return option?.label || value;
    }
    return value.toString();
  }

  getActiveFilterKeys(): string[] {
    return Object.keys(this.activeFilters).filter(key => {
      const value = this.activeFilters[key];
      return value !== '' && value !== null && value !== undefined;
    });
  }
}
