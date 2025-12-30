import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { SearchFilterComponent, FilterOption } from '@shared/components/search-filter/search-filter.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-search-filter-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, SearchFilterComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './search-filter-demo.component.html',
  styleUrls: ['./search-filter-demo.component.scss']
})
export class SearchFilterDemoComponent {
  filters: FilterOption[] = [
    {
      key: 'status',
      label: 'สถานะ',
      type: 'select',
      options: [
        { value: 'all', label: 'ทั้งหมด' },
        { value: 'active', label: 'ใช้งาน' },
        { value: 'inactive', label: 'ไม่ใช้งาน' }
      ]
    },
    {
      key: 'category',
      label: 'หมวดหมู่',
      type: 'select',
      options: [
        { value: 'all', label: 'ทั้งหมด' },
        { value: 'tech', label: 'เทคโนโลยี' },
        { value: 'design', label: 'ดีไซน์' }
      ]
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'placeholder',
      type: 'string',
      default: "'ค้นหา...'",
      description: 'Search input placeholder',
      required: false
    },
    {
      name: 'filters',
      type: 'FilterOption[]',
      default: '[]',
      description: 'Filter options array',
      required: false
    },
    {
      name: 'showAdvanced',
      type: 'boolean',
      default: 'false',
      description: 'Show advanced filters',
      required: false
    },
    {
      name: 'debounceTime',
      type: 'number',
      default: '300',
      description: 'Search debounce time in ms',
      required: false
    },
    {
      name: 'showFilterChips',
      type: 'boolean',
      default: 'true',
      description: 'Show active filter chips',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'search',
      type: 'EventEmitter<string>',
      default: '-',
      description: 'Emitted when search value changes',
      required: false
    },
    {
      name: 'filterChange',
      type: 'EventEmitter<Record<string, any>>',
      default: '-',
      description: 'Emitted when filters change',
      required: false
    },
    {
      name: 'advancedToggle',
      type: 'EventEmitter<boolean>',
      default: '-',
      description: 'Emitted when advanced toggle changes',
      required: false
    }
  ];

  basicExample = `<app-search-filter
  placeholder="ค้นหา..."
  (search)="onSearch($event)">
</app-search-filter>`;

  withFiltersExample = `<app-search-filter
  [filters]="filters"
  (search)="onSearch($event)"
  (filterChange)="onFilterChange($event)">
</app-search-filter>`;

  onSearch(query: string): void {
    console.log('Search:', query);
  }

  onFilterChange(filters: Record<string, any>): void {
    console.log('Filters:', filters);
  }
}
