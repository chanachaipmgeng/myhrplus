import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NavigationChild } from '@core/constants';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input() item!: NavigationChild;
  @Input() level: number = 2; // Start from level 2 (level 1 is the Rail icon)
  @Input() activeRoute: string = '';
  @Output() routeChange = new EventEmitter<string>();

  isExpanded: boolean = false;
  isActive: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize expanded state
    this.isExpanded = this.item.expanded ?? false;

    // Check if this item or any child is active
    this.checkActiveState();

    // Subscribe to route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkActiveState();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Check if this item or any of its children is active
   */
  private checkActiveState(): void {
    const currentRoute = this.activeRoute || this.router.url;

    // Check if current route matches this item's route
    if (this.item.route && currentRoute.startsWith(this.item.route)) {
      this.isActive = true;
      // Auto-expand if has children and is active
      if (this.hasChildren()) {
        this.isExpanded = true;
      }
    } else {
      this.isActive = false;
    }

    // Check if any child is active (recursive)
    if (this.hasChildren()) {
      const hasActiveChild = this.item.children!.some(child => {
        if (child.route && currentRoute.startsWith(child.route)) {
          return true;
        }
        // Recursively check nested children
        return this.checkChildActive(child, currentRoute);
      });

      if (hasActiveChild) {
        this.isExpanded = true;
      }
    }
  }

  /**
   * Recursively check if any child is active
   */
  private checkChildActive(child: NavigationChild, currentRoute: string): boolean {
    if (child.route && currentRoute.startsWith(child.route)) {
      return true;
    }
    if (child.children) {
      return child.children.some(c => this.checkChildActive(c, currentRoute));
    }
    return false;
  }

  /**
   * Toggle expand/collapse state
   */
  toggleExpand(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.hasChildren()) {
      this.isExpanded = !this.isExpanded;
    }
  }

  /**
   * Check if item has children
   */
  hasChildren(): boolean {
    return !!(this.item.children && this.item.children.length > 0);
  }

  /**
   * Get padding class based on level
   */
  getPaddingClass(): string {
    if (this.level === 2) {
      return ''; // No padding for level 2
    } else if (this.level === 3) {
      return 'pl-4'; // Level 3: pl-4
    } else if (this.level >= 4) {
      return 'pl-8'; // Level 4+: pl-8
    }
    return '';
  }

  /**
   * Get icon class for chevron
   */
  getChevronIcon(): string {
    return this.isExpanded ? 'expand_more' : 'chevron_right';
  }

  /**
   * Handle route navigation
   */
  navigate(route: string | undefined, event: Event): void {
    if (!route) {
      // If no route, toggle expand instead
      this.toggleExpand(event);
      return;
    }

    event.preventDefault();
    this.router.navigate([route]).then(() => {
      this.routeChange.emit(route);
    });
  }

  /**
   * Check if item should be clickable (has route)
   */
  isClickable(): boolean {
    return !!this.item.route;
  }
}

