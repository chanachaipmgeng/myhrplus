import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationChild } from '../../../core/constants/navigation.constant';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nested-menu-accordion',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './nested-menu-accordion.component.html',
  styleUrls: ['./nested-menu-accordion.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)', maxHeight: '0' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)', maxHeight: '1000px' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)', maxHeight: '0' }))
      ])
    ])
  ]
})
export class NestedMenuAccordionComponent {
  @Input() items: NavigationChild[] = [];
  @Input() activeRoute: string = '';
  @Input() level: number = 3; // 3 or 4
  @Input() expandedItems: Set<string> = new Set();
  @Output() itemClick = new EventEmitter<NavigationChild>();
  @Output() toggleExpand = new EventEmitter<{ item: NavigationChild; expanded: boolean }>();

  /**
   * Check if item has children
   */
  hasChildren(item: NavigationChild): boolean {
    return !!(item.children && item.children.length > 0);
  }

  /**
   * Check if item is expanded
   */
  isExpanded(item: NavigationChild): boolean {
    if (!this.hasChildren(item)) {
      return false;
    }
    // Use label as key for tracking expanded state
    return this.expandedItems.has(item.label);
  }

  /**
   * Toggle expand/collapse
   */
  onToggleExpand(item: NavigationChild, event: Event): void {
    event.stopPropagation();
    const expanded = !this.isExpanded(item);
    
    if (expanded) {
      this.expandedItems.add(item.label);
    } else {
      this.expandedItems.delete(item.label);
    }
    
    this.toggleExpand.emit({ item, expanded });
  }

  /**
   * Handle item click
   */
  onItemClick(item: NavigationChild, event: Event): void {
    if (this.hasChildren(item)) {
      // If has children, toggle expand instead of navigate
      this.onToggleExpand(item, event);
      return;
    }

    // If has route, emit click event
    if (item.route) {
      this.itemClick.emit(item);
    }
  }

  /**
   * Check if item is active (current route matches)
   */
  isActive(item: NavigationChild): boolean {
    if (!item.route || !this.activeRoute) {
      return false;
    }
    return this.activeRoute.startsWith(item.route);
  }

  /**
   * Get icon class from icon name
   */
  getIconClass(iconName?: string): string {
    if (!iconName) {
      return 'e-icons e-folder';
    }

    // Map icon names to Syncfusion icon classes
    const iconMap: { [key: string]: string } = {
      'access_time': 'e-icons e-clock',
      'description': 'e-icons e-file',
      'people': 'e-icons e-user',
      'business': 'e-icons e-briefcase',
      'person_check': 'e-icons e-user-check',
      'work': 'e-icons e-briefcase',
      'folder': 'e-icons e-folder',
      'attach_money': 'e-icons e-money',
      'menu': 'e-icons e-menu',
      'home': 'e-icons e-home',
      'dashboard': 'e-icons e-dashboard',
      'settings': 'e-icons e-settings',
      'user': 'e-icons e-user',
      'logout': 'e-icons e-logout',
      'event': 'e-icons e-calendar',
      'receipt': 'e-icons e-receipt',
      'person': 'e-icons e-user',
      'arrow_forward': 'e-icons e-arrow-right',
      'favorite': 'e-icons e-heart',
      'bar_chart': 'e-icons e-chart',
      'school': 'e-icons e-book',
      'person_add': 'e-icons e-user-plus',
      'assessment': 'e-icons e-chart-line',
      'shield-check': 'e-icons e-shield',
      'shield_check': 'e-icons e-shield',
      'warning': 'e-icons e-warning',
      'login': 'e-icons e-login',
      'list': 'e-icons e-list',
      'family_restroom': 'e-icons e-people',
      'work_history': 'e-icons e-history'
    };

    return iconMap[iconName.toLowerCase()] || 'e-icons e-folder';
  }

  /**
   * Track by function for ngFor
   */
  trackByLabel(index: number, item: NavigationChild): string {
    return item.label || `item-${index}`;
  }
}

