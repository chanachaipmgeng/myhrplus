import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationChild } from '@core/constants';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nested-menu-accordion',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, IconComponent],
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
  private translate = inject(TranslateService);
  
  @Input() items: NavigationChild[] = [];
  @Input() activeRoute: string = '';
  @Input() level: number = 3; // 3 or 4
  @Input() expandedItems: Set<string> = new Set();
  @Input() navId?: string; // Navigation ID for translation context
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
   * Handle item click (for items with children only)
   * Items with routes use routerLink instead
   */
  onItemClick(item: NavigationChild, event: Event): void {
    // This method is only called for items with children
    // Items with routes use routerLink directly
    if (this.hasChildren(item)) {
      this.onToggleExpand(item, event);
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
   * Translate navigation label
   * Converts label to translation key and returns translated text
   */
  translateLabel(label: string): string {
    if (!label) return '';
    
    // Try to find translation key
    // Pattern: navigation.{navId}.{labelKey} or navigation.{labelKey}
    const labelKey = this.normalizeLabelToKey(label);
    let translationKey = '';
    
    if (this.navId && this.level) {
      // Try with navigation id and level
      translationKey = `navigation.${this.navId}.level${this.level}.${labelKey}`;
      const translated = this.translate.instant(translationKey);
      if (translated !== translationKey) return translated;
    }
    
    if (this.navId) {
      // Try with navigation id only
      translationKey = `navigation.${this.navId}.${labelKey}`;
      const translated = this.translate.instant(translationKey);
      if (translated !== translationKey) return translated;
    }
    
    // Try generic navigation key
    translationKey = `navigation.${labelKey}`;
    const translated = this.translate.instant(translationKey);
    if (translated !== translationKey) return translated;
    
    // If no translation found, return original label
    return label;
  }

  /**
   * Normalize label to translation key format
   * Converts "ลงเวลา (Time)" to "time" or "Self Service" to "selfService"
   */
  private normalizeLabelToKey(label: string): string {
    if (!label) return '';
    
    // First, try to extract English text from parentheses (e.g., "ลงเวลา (Time)" -> "Time")
    const parenthesesMatch = label.match(/\(([^)]+)\)/);
    if (parenthesesMatch && parenthesesMatch[1]) {
      const englishText = parenthesesMatch[1].trim();
      // Convert to camelCase
      return englishText
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map((word, index) => {
          if (index === 0) return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
    }
    
    // If no parentheses, process the whole label
    let key = label
      .replace(/\([^)]*\)/g, '') // Remove any remaining parentheses
      .trim();
    
    // Convert to camelCase
    key = key
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim()
      .split(' ')
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
    
    return key;
  }

  /**
   * Track by function for ngFor
   */
  trackByLabel(index: number, item: NavigationChild): string {
    return item.label || `item-${index}`;
  }
}

