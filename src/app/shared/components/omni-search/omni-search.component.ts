import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MenuContextService } from '@core/services';
import { MenuData, MenuGroup, MenuItem, SearchResult, MenuContext } from '@core/models/menu.model';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-omni-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GlassCardComponent, IconComponent],
  templateUrl: './omni-search.component.html',
  styleUrls: ['./omni-search.component.scss']
})
export class OmniSearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('resultsContainer') resultsContainer!: ElementRef<HTMLDivElement>;
  @Output() resultSelected = new EventEmitter<SearchResult>();

  searchControl = new FormControl('');
  isOpen = false;
  searchResults: SearchResult[] = [];
  selectedIndex = -1;
  private destroy$ = new Subject<void>();

  // Menu data structure - Use portal routes
  menuData: MenuData = {
    personal: [
      {
        groupName: 'Employee Self Service',
        items: [
          { name: 'การลงเวลา (Time Attendance)', icon: 'clock', route: '/portal/self-service/attendance' },
          { name: 'การขอเอกสาร (Request)', icon: 'file-text', route: '/portal/self-service/documents' },
          { name: 'ข้อมูลลูกน้อง (My Team)', icon: 'users', route: '/portal/self-service/subordinates' }
        ]
      }
    ],
    admin: [
      {
        groupName: 'Admin Management',
        items: [
          { name: 'จัดการข้อมูลบริษัท', icon: 'building', route: '/portal/admin/company' },
          {
            name: 'จัดการข้อมูลพนักงาน',
            icon: 'user-check',
            route: '/portal/admin/employees',
            children: [
              { name: 'ข้อมูลการทำงาน', icon: 'briefcase', route: '/portal/admin/employees' },
              { name: 'รายงาน (Reports)', icon: 'file-text', route: '/portal/admin/employees/reports' },
              { name: 'ทะเบียนประวัติ', icon: 'folder', route: '/portal/admin/employees/master/list' }
            ]
          },
          { name: 'จัดการเงินเดือน', icon: 'dollar-sign', route: '/portal/admin/payroll' }
        ]
      }
    ]
  };

  constructor(
    private router: Router,
    private menuContextService: MenuContextService
  ) {}

  ngOnInit(): void {
    // Watch search input changes
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(query => {
        if (query && query.trim().length > 0) {
          this.performSearch(query.trim());
        } else {
          this.searchResults = [];
        }
      });

    // Close on route change
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Open search modal (Ctrl+K / Cmd+K)
   */
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Ctrl+K or Cmd+K
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.open();
    }

    // Escape to close
    if (event.key === 'Escape' && this.isOpen) {
      event.preventDefault();
      this.close();
    }

    // Arrow keys for navigation
    if (this.isOpen && this.searchResults.length > 0) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.searchResults.length - 1);
        this.scrollToSelected();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.scrollToSelected();
      } else if (event.key === 'Enter' && this.selectedIndex >= 0) {
        event.preventDefault();
        this.selectResult(this.searchResults[this.selectedIndex]);
      }
    }
  }

  open(): void {
    this.isOpen = true;
    this.searchControl.setValue('');
    this.searchResults = [];
    this.selectedIndex = -1;

    // Focus input after view update
    setTimeout(() => {
      this.searchInput?.nativeElement?.focus();
    }, 100);
  }

  close(): void {
    this.isOpen = false;
    this.searchControl.setValue('');
    this.searchResults = [];
    this.selectedIndex = -1;
  }

  /**
   * Perform fuzzy search across all menu items
   */
  private performSearch(query: string): void {
    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Get current context
    const currentContext = this.menuContextService.getCurrentContextValue();
    const contextData = this.menuData[currentContext];

    // Search in current context
    contextData.forEach(group => {
      group.items.forEach(item => {
        // Search in item name (Level 2)
        if (this.fuzzyMatch(item.name, lowerQuery)) {
          results.push({
            name: item.name,
            icon: item.icon,
            route: item.route || '',
            breadcrumb: `${this.getContextLabel(currentContext)} > ${group.groupName} > ${item.name}`,
            context: currentContext,
            groupName: group.groupName,
            level: 2
          });
        }

        // Search in children (Level 3)
        if (item.children) {
          item.children.forEach(child => {
            if (this.fuzzyMatch(child.name, lowerQuery)) {
              results.push({
                name: child.name,
                icon: child.icon,
                route: child.route || '',
                breadcrumb: `${this.getContextLabel(currentContext)} > ${group.groupName} > ${item.name} > ${child.name}`,
                context: currentContext,
                groupName: group.groupName,
                level: 3
              });
            }
          });
        }
      });
    });

    // Sort by relevance (exact match first, then fuzzy)
    this.searchResults = results.sort((a, b) => {
      const aExact = a.name.toLowerCase().startsWith(lowerQuery);
      const bExact = b.name.toLowerCase().startsWith(lowerQuery);
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  /**
   * Simple fuzzy match (contains)
   */
  private fuzzyMatch(text: string, query: string): boolean {
    return text.toLowerCase().includes(query);
  }

  /**
   * Get context label
   */
  private getContextLabel(context: MenuContext): string {
    return context === 'personal' ? 'Personal' : 'Admin';
  }

  /**
   * Select search result
   */
  selectResult(result: SearchResult): void {
    if (result.route) {
      this.resultSelected.emit(result);
      this.router.navigate([result.route]);
      this.close();
    }
  }

  /**
   * Scroll to selected result
   */
  private scrollToSelected(): void {
    if (this.resultsContainer && this.selectedIndex >= 0) {
      const selectedElement = this.resultsContainer.nativeElement.children[this.selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }
}

