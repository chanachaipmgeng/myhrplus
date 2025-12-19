/**
 * Human Resources Menu Configuration
 * Configuration for menu items displayed in Human Resources list page
 */

export interface HumanResourcesMenuItem {
  code: string;           // Module code (e.g., CO01A0102)
  route: string;          // Route path (relative to /human-resources)
  icon: string;           // Material icon name
  labelThai: string;      // Thai label
  labelEnglish: string;   // English label
  description: string;    // Description (e.g., "Company Type (CS008)")
  category: 'company-information' | 'branch-business-unit'; // Category for grouping
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'red'; // Badge color
}

export const HUMAN_RESOURCES_MENU_ITEMS: HumanResourcesMenuItem[] = [
  // Company Information Section
  {
    code: 'CO01A0102',
    route: 'company-type',
    icon: 'business',
    labelThai: 'ประเภทบริษัท',
    labelEnglish: 'Company Type',
    description: 'Company Type (CS008)',
    category: 'company-information',
    badgeColor: 'blue'
  },
  {
    code: 'CO04A10',
    route: 'company-group',
    icon: 'layers',
    labelThai: 'กลุ่มบริษัท',
    labelEnglish: 'Company Group',
    description: 'Company Group (CS001)',
    category: 'company-information',
    badgeColor: 'blue'
  },
  {
    code: 'CO01A0110',
    route: 'bank-company',
    icon: 'account_balance',
    labelThai: 'ข้อมูลธนาคาร',
    labelEnglish: "Bank's Company Information",
    description: 'Bank Info (CS006)',
    category: 'company-information',
    badgeColor: 'blue'
  },
  {
    code: 'CO01A0116',
    route: 'company-asset',
    icon: 'inventory',
    labelThai: 'ทะเบียนทรัพย์สิน',
    labelEnglish: 'Company Assets Information',
    description: 'Company Assets (CS043)',
    category: 'company-information',
    badgeColor: 'blue'
  },
  {
    code: 'CO01A0117',
    route: 'company-paper',
    icon: 'description',
    labelThai: 'ทะเบียนเอกสาร',
    labelEnglish: 'Company Papers Information',
    description: 'Company Papers (CS045)',
    category: 'company-information',
    badgeColor: 'blue'
  },

  // Branch and Business Unit Section
  {
    code: 'CO01A0201',
    route: 'branch-social-security',
    icon: 'security',
    labelThai: 'ทะเบียนสาขาประกันสังคม',
    labelEnglish: 'Branch Social Security',
    description: 'Branch Social Security (CS047)',
    category: 'branch-business-unit',
    badgeColor: 'green'
  },
  {
    code: 'CO01A0202',
    route: 'division',
    icon: 'business',
    labelThai: 'ทะเบียนฝ่าย',
    labelEnglish: 'Division',
    description: 'Division (PRU002)',
    category: 'branch-business-unit',
    badgeColor: 'green'
  },
  {
    code: 'CO01A0203',
    route: 'department',
    icon: 'folder',
    labelThai: 'ทะเบียนแผนก',
    labelEnglish: 'Department',
    description: 'Department (PRU003)',
    category: 'branch-business-unit',
    badgeColor: 'green'
  },
  {
    code: 'CO01A0204',
    route: 'section',
    icon: 'folder_open',
    labelThai: 'ทะเบียนส่วน',
    labelEnglish: 'Section',
    description: 'Section (PRU004)',
    category: 'branch-business-unit',
    badgeColor: 'green'
  },
  {
    code: 'CO01A0205',
    route: 'team',
    icon: 'group',
    labelThai: 'ทะเบียนทีมงาน',
    labelEnglish: 'Team',
    description: 'Team (PRU005)',
    category: 'branch-business-unit',
    badgeColor: 'green'
  }
];

/**
 * Get menu items by category
 */
export function getMenuItemsByCategory(category: HumanResourcesMenuItem['category']): HumanResourcesMenuItem[] {
  return HUMAN_RESOURCES_MENU_ITEMS.filter(item => item.category === category);
}

/**
 * Get all categories
 */
export function getCategories(): HumanResourcesMenuItem['category'][] {
  return Array.from(new Set(HUMAN_RESOURCES_MENU_ITEMS.map(item => item.category)));
}
