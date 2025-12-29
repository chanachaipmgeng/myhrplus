import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export interface PaginationConfig {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  maxPages?: number; // Maximum number of page buttons to show
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() maxPages: number = 7; // Default: show 7 page buttons
  @Input() showPageSizeSelector: boolean = true;
  @Input() pageSizeOptions: number[] = [10, 20, 50, 100];
  @Input() showTotalItems: boolean = true;
  @Input() disabled: boolean = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    this.calculatePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] || changes['totalItems'] || changes['itemsPerPage'] || changes['maxPages']) {
      this.calculatePages();
    }
  }

  private calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = this.getPageNumbers();
  }

  private getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxPages = this.maxPages;
    const current = this.currentPage;
    const total = this.totalPages;

    if (total <= maxPages) {
      // Show all pages if total is less than max
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Calculate start and end page numbers
      let start = Math.max(1, current - Math.floor(maxPages / 2));
      let end = Math.min(total, start + maxPages - 1);

      // Adjust start if we're near the end
      if (end - start < maxPages - 1) {
        start = Math.max(1, end - maxPages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  goToPage(page: number): void {
    if (this.disabled || page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.pageChange.emit(page);
    this.calculatePages();
  }

  goToFirst(): void {
    this.goToPage(1);
  }

  goToPrevious(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNext(): void {
    this.goToPage(this.currentPage + 1);
  }

  goToLast(): void {
    this.goToPage(this.totalPages);
  }

  onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);
    this.itemsPerPage = newPageSize;
    this.currentPage = 1; // Reset to first page
    this.pageSizeChange.emit(newPageSize);
    this.calculatePages();
  }

  get startItem(): number {
    return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages || this.totalPages === 0;
  }

  trackByPage(index: number, page: number): number {
    return page;
  }
}

