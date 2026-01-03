/**
 * Menu Models
 * Models for menu navigation and context switching
 */

export interface MenuItem {
  id: string;
  label: string;
  route?: string;
  icon?: string;
  roles?: string[];
  badge?: string;
  badgeColor?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

export interface MenuContext {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  isActive?: boolean;
}

// Type alias for backward compatibility
export type MenuContextId = string;

export interface MenuGroup {
  id: string;
  name: string;
  label: string;
  icon?: string;
  items: MenuItem[];
}

export interface SearchResult {
  id: string;
  label: string;
  name?: string; // Alias for label (legacy compatibility)
  route?: string;
  icon?: string;
  category?: string;
  description?: string;
  breadcrumb?: string; // Breadcrumb path
  level?: number; // Menu level (1-5)
  context?: string; // Menu context
  groupName?: string; // Group name
  children?: SearchResult[];
}

