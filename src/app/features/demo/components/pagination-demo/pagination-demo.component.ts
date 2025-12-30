import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-pagination-demo',
  standalone: true,
  imports: [CommonModule, PaginationComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent {
  currentPage1 = 1;
  totalItems1 = 100;
  itemsPerPage1 = 10;

  currentPage2 = 1;
  totalItems2 = 250;
  itemsPerPage2 = 20;

  currentPage3 = 1;
  totalItems3 = 50;
  itemsPerPage3 = 10;

  props: PropDefinition[] = [
    {
      name: 'currentPage',
      type: 'number',
      default: '1',
      description: 'Current active page number',
      required: true
    },
    {
      name: 'totalItems',
      type: 'number',
      default: '0',
      description: 'Total number of items',
      required: true
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      default: '10',
      description: 'Number of items per page',
      required: true
    },
    {
      name: 'maxPages',
      type: 'number',
      default: '7',
      description: 'Maximum number of page buttons to show',
      required: false
    },
    {
      name: 'showPageSizeSelector',
      type: 'boolean',
      default: 'true',
      description: 'Show page size selector dropdown',
      required: false
    },
    {
      name: 'pageSizeOptions',
      type: 'number[]',
      default: '[10, 20, 50, 100]',
      description: 'Available page size options',
      required: false
    },
    {
      name: 'showTotalItems',
      type: 'boolean',
      default: 'true',
      description: 'Show total items display',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable pagination controls',
      required: false
    }
  ];

  basicExample = `<app-pagination
  [currentPage]="currentPage"
  [totalItems]="100"
  [itemsPerPage]="10"
  (pageChange)="onPageChange($event)">
</app-pagination>`;

  advancedExample = `<app-pagination
  [currentPage]="currentPage"
  [totalItems]="250"
  [itemsPerPage]="itemsPerPage"
  [maxPages]="5"
  [showPageSizeSelector]="true"
  [pageSizeOptions]="[10, 20, 50, 100]"
  [showTotalItems]="true"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)">
</app-pagination>`;

  usageExample = `// In component.ts
currentPage = 1;
totalItems = 100;
itemsPerPage = 10;

onPageChange(page: number): void {
  this.currentPage = page;
  // Load data for new page
}

onPageSizeChange(size: number): void {
  this.itemsPerPage = size;
  this.currentPage = 1; // Reset to first page
  // Reload data with new page size
}`;

  onPageChange1(page: number): void {
    this.currentPage1 = page;
  }

  onPageChange2(page: number): void {
    this.currentPage2 = page;
  }

  onPageChange3(page: number): void {
    this.currentPage3 = page;
  }

  onPageSizeChange2(size: number): void {
    this.itemsPerPage2 = size;
    this.currentPage2 = 1;
  }
}

