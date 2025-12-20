import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { HUMAN_RESOURCES_MENU_ITEMS, HumanResourcesMenuItem, getMenuItemsByCategory } from './config/human-resources-menu.config';

@Component({
  selector: 'app-human-resources-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent],
  templateUrl: './human-resources-list.component.html'
})
export class HumanResourcesListComponent {
  // Menu items from config
  readonly menuItems = HUMAN_RESOURCES_MENU_ITEMS;
  
  // Get menu items by category
  get companyInformationItems(): HumanResourcesMenuItem[] {
    return getMenuItemsByCategory('company-information');
  }

  get branchBusinessUnitItems(): HumanResourcesMenuItem[] {
    return getMenuItemsByCategory('branch-business-unit');
  }

  // Helper method to get badge color classes
  getBadgeColorClass(color?: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
    };
    return colorMap[color || 'blue'] || colorMap['blue'];
  }

  // Helper method to get hover border color classes
  getHoverBorderColorClass(color?: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'hover:border-blue-300 dark:hover:border-blue-600',
      green: 'hover:border-green-300 dark:hover:border-green-600',
      purple: 'hover:border-purple-300 dark:hover:border-purple-600',
      orange: 'hover:border-orange-300 dark:hover:border-orange-600',
      red: 'hover:border-red-300 dark:hover:border-red-600'
    };
    return colorMap[color || 'blue'] || colorMap['blue'];
  }

  // Helper method to get hover icon color classes
  getHoverIconColorClass(color?: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
      green: 'group-hover:text-green-500 dark:group-hover:text-green-400',
      purple: 'group-hover:text-purple-500 dark:group-hover:text-purple-400',
      orange: 'group-hover:text-orange-500 dark:group-hover:text-orange-400',
      red: 'group-hover:text-red-500 dark:group-hover:text-red-400'
    };
    return colorMap[color || 'blue'] || colorMap['blue'];
  }

  // Helper method to get hover text color classes
  getHoverTextColorClass(color?: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      green: 'group-hover:text-green-600 dark:group-hover:text-green-400',
      purple: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      orange: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
      red: 'group-hover:text-red-600 dark:group-hover:text-red-400'
    };
    return colorMap[color || 'blue'] || colorMap['blue'];
  }
}


