/**
 * Menu Models for Nested Menu Structure
 * Supports 3 levels: Group > Item > Children
 */

export interface MenuItem {
  name: string;
  icon: string;
  url?: string;
  route?: string;
  children?: MenuItem[]; // Level 3 - shown as tabs in content area
}

export interface MenuGroup {
  groupName: string;
  items: MenuItem[];
}

export interface MenuData {
  personal: MenuGroup[]; // Employee Self Service
  admin: MenuGroup[]; // Admin Management
}

export type MenuContext = 'personal' | 'admin';

export interface SearchResult {
  name: string;
  icon: string;
  route: string;
  breadcrumb: string; // e.g., "Admin > พนักงาน > รายงาน"
  context: MenuContext;
  groupName: string;
  level: 1 | 2 | 3; // Menu level
}


