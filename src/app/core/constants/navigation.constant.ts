/**
 * Navigation Constants
 * Constants สำหรับ sidebar navigation structure
 * รองรับ Rail + Drawer structure (Two-layer sidebar)
 */

export interface NavigationChild {
  label: string;
  route?: string; // Optional - parent groups may not have routes
  icon?: string;
  roles?: string[];
  badge?: string;
  badgeColor?: string;
  expanded?: boolean; // For accordion/collapsible state
  children?: NavigationChild[]; // Support nested children for sub-modules (up to 4 levels)
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;              // Icon หลักใน Rail ซ้ายสุด
  roles: string[];          // ['user', 'admin'] - ใครเห็นได้บ้าง
  route?: string;            // Optional - Dashboard route สำหรับโมดูล (หน้าแรกของโมดูล)
  children?: NavigationChild[]; // รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
  badge?: string;
  badgeColor?: string;
}

/**
 * Navigation Items Configuration
 * กำหนดโครงสร้างเมนูสำหรับ sidebar
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  // กลุ่ม 0: Home (ทุกคนมีสิทธิ์เห็น)


  // กลุ่ม 1: Admin (ทุกคนเห็น - เป็น admin ตั้งแต่แรก)
  {
    id: 'admin',
    label: 'Admin',
    icon: 'home',   // icon หลักใน Rail ซ้ายสุด
    roles: ['user', 'admin'], // ทุกคนเห็น (เป็น admin ตั้งแต่แรก)
    route: '/home', // Dashboard route - หน้าแรกของโมดูล (default to home)
    children: [
      {
        label: 'Home',
        route: '/home',
        icon: 'home'
      },
      // Level 2: Company Management (มี Level 3-4)
      {
        label: 'Company Management',
        icon: 'business',
        route: '/company', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3 - เมนูของโมดูล Company
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/company',
            icon: 'dashboard'
          },
          // 1. Human Resources (CO01A)
          {
            label: 'Human Resources',
            icon: 'business',
            children: [ // Level 4
              // 1.1 Company Information
              {
                label: 'Company Information',
                icon: 'info',
                children: [
                  { label: 'Company Type', route: '/company/human-resources/company-type', icon: 'category' },
                  { label: 'Company Group', route: '/company/human-resources/company-group', icon: 'group_work' },
                  { label: "Bank's Company Information", route: '/company/human-resources/bank-company', icon: 'account_balance' },
                  { label: 'Company Assets Information', route: '/company/human-resources/company-asset', icon: 'inventory' },
                  { label: 'Company Papers Information', route: '/company/human-resources/company-paper', icon: 'description' },
                  { label: 'Company Structure', route: '/company/human-resources/company-structure', icon: 'account_tree' }
                ]
              },
              // 1.2 Branch and Business Unit
              {
                label: 'Branch and Business Unit',
                icon: 'account_tree',
                children: [
                  { label: 'Branch Social Security', route: '/company/human-resources/branch-social-security', icon: 'security' },
                  { label: 'Division', route: '/company/human-resources/division', icon: 'business' },
                  { label: 'Department', route: '/company/human-resources/department', icon: 'folder' },
                  { label: 'Section', route: '/company/human-resources/section', icon: 'folder_open' },
                  { label: 'Team', route: '/company/human-resources/team', icon: 'group' },
                  { label: 'T2', route: '/company/human-resources/t2', icon: 'label' },
                  { label: 'T3', route: '/company/human-resources/t3', icon: 'label' },
                  { label: 'T4', route: '/company/human-resources/t4', icon: 'label' },
                  { label: 'Company', route: '/company/human-resources/company', icon: 'business' },
                  { label: 'Branch', route: '/company/human-resources/branch', icon: 'store' },
                  { label: 'Working Area Table', route: '/company/human-resources/working-area', icon: 'location_on' },
                  { label: 'Working Area Type Table', route: '/company/human-resources/working-area-type', icon: 'category' },
                  { label: 'PL Table', route: '/company/human-resources/pl', icon: 'table_chart' },
                  { label: 'Approve Level Table', route: '/company/human-resources/approve-level', icon: 'verified' },
                  { label: 'Cost Center Table', route: '/company/human-resources/cost-center', icon: 'account_tree' },
                  { label: 'Latitude Longitude Work Area', route: '/company/human-resources/workarea-location', icon: 'location_on' },
                  { label: 'Work Area Location By Beacon', route: '/company/human-resources/workarea-beacon', icon: 'bluetooth_searching' },
                  { label: 'Brand Store Table (STORE)', route: '/company/human-resources/brand-store', icon: 'store' },
                  { label: 'Zone Type Table', route: '/company/human-resources/zone-type', icon: 'map' },
                  { label: 'WorkArea', route: '/company/human-resources/workarea-store', icon: 'work' }
                ]
              },
              // 1.3 Reporting Line
              {
                label: 'Reporting Line',
                icon: 'account_tree',
                children: [
                  { label: 'Reporting Line Definition', route: '/company/hr/reporting-line/definition', icon: 'account_tree' },
                  { label: 'Change Boss', route: '/company/hr/reporting-line/change-boss', icon: 'swap_horiz' }
                ]
              },
              // 1.4 Job Description
              {
                label: 'Job Description',
                icon: 'work',
                children: [
                  { label: 'Position Table', route: '/company/hr/job-description/position', icon: 'work' },
                  { label: 'Position Group Register', route: '/company/hr/job-description/position-group', icon: 'group_work' },
                  { label: 'Job Group Table', route: '/company/hr/job-description/job-group', icon: 'folder' },
                  { label: 'Job Grade Table', route: '/company/hr/job-description/job-grade', icon: 'trending_up' },
                  { label: 'Job Title Table', route: '/company/hr/job-description/job-title', icon: 'title' },
                  { label: 'Job Code Level Table', route: '/company/hr/job-description/job-code-level', icon: 'layers' }
                ]
              },
              // 1.5 Master File
              {
                label: 'Master File',
                icon: 'folder',
                children: [
                  { label: 'Rounding-off Table', route: '/company/hr/master-file/rounding-off', icon: 'calculate' },
                  { label: 'Change Master File Code', route: '/company/hr/master-file/change-code', icon: 'edit' },
                  { label: 'Signature for e-Payslip Master', route: '/company/hr/master-file/e-payslip-signature', icon: 'draw' },
                  { label: 'KC/KPI Group', route: '/company/hr/master-file/kc-kpi-group', icon: 'group' },
                  { label: 'Key Competency', route: '/company/hr/master-file/key-competency', icon: 'star' },
                  { label: 'Key Performance Indicators', route: '/company/hr/master-file/kpi', icon: 'assessment' }
                ]
              },
              // 1.6 Manpower Analyst
              {
                label: 'Manpower Analyst',
                icon: 'people',
                children: [
                  { label: 'Manpower Type', route: '/company/hr/manpower-analyst/type', icon: 'category' },
                  { label: 'Manpower Number Table', route: '/company/hr/manpower-analyst/number-table', icon: 'table_chart' },
                  { label: 'Manpower Number Data', route: '/company/hr/manpower-analyst/number-data', icon: 'data_usage' },
                  { label: 'Manpower Number Detail', route: '/company/hr/manpower-analyst/number-detail', icon: 'details' }
                ]
              },
              // 1.7 Manpower
              {
                label: 'Manpower',
                icon: 'people',
                children: [
                  { label: 'Generate Manpower Budget', route: '/company/hr/manpower/generate-budget', icon: 'add_chart' },
                  { label: 'Approve Manpower Budget', route: '/company/hr/manpower/approve-budget', icon: 'check_circle' },
                  { label: 'Turnover Report', route: '/company/hr/manpower/turnover-report', icon: 'assessment' },
                  { label: 'Compare Manpower and Payroll', route: '/company/hr/manpower/compare-payroll', icon: 'compare' },
                  { label: 'Report Excel Report Reconcile', route: '/company/hr/manpower/report-reconcile', icon: 'description' }
                ]
              },
              // 1.8 Setup
              {
                label: 'Setup',
                icon: 'settings',
                children: [
                  { label: 'Project Table', route: '/company/hr/setup/project-table', icon: 'folder' }
                ]
              }
            ]
          },
          // 2. Approve (TA01A08)
          {
            label: 'Approve',
            icon: 'check_circle',
            children: [ // Level 4
              { label: 'ApproveBox', route: '/company/approve/approve-box', icon: 'check_circle' },
              { label: 'ApproveBoxEmployee', route: '/company/approve/approve-box-employee', icon: 'person_check' },
              { label: 'ApproveBoxEmployeeGroup', route: '/company/approve/approve-box-employee-group', icon: 'group' },
              { label: 'AdjustApproveBoxEmployee', route: '/company/approve/adjust-approve-box-employee', icon: 'edit' }
            ]
          },
          // 3. Employee Self Service (CO04A)
          {
            label: 'Employee Self Service',
            icon: 'person',
            children: [ // Level 4
              { label: 'News Setup', route: '/company/ess/news-setup', icon: 'article' },
              { label: 'Event Setup', route: '/company/ess/event-setup', icon: 'event' },
              { label: 'Banner Setup', route: '/company/ess/banner-setup', icon: 'image' },
              { label: 'Handbook Setup', route: '/company/ess/handbook-setup', icon: 'book' },
              { label: 'Video Setup', route: '/company/ess/video-setup', icon: 'video_library' },
              { label: 'Logo Setup', route: '/company/ess/logo-setup', icon: 'image' },
              { label: 'External Links Setup', route: '/company/ess/external-links-setup', icon: 'link' },
              { label: 'Vision Table', route: '/company/ess/vision-table', icon: 'visibility' },
              { label: 'Mission Table', route: '/company/ess/mission-table', icon: 'flag' },
              { label: 'Company History', route: '/company/ess/company-history', icon: 'history' },
              { label: 'Regulation/Order/Notice Group Table', route: '/company/ess/regulation-group', icon: 'gavel' },
              { label: 'Regulation/Order/Notice Type Table', route: '/company/ess/regulation-type', icon: 'category' },
              { label: 'Regulation/Order/Notice Table', route: '/company/ess/regulation-table', icon: 'gavel' }
            ]
          }
        ]
      },
      // Level 2: Settings (มี Level 3-4)
      {
        label: 'Settings',
        icon: 'settings',
        route: '/setting', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/setting',
            icon: 'dashboard'
          },
          // 1. User (ST01A)
          {
            label: 'User',
            icon: 'person',
            children: [ // Level 4
              {
                label: 'Email Reminder',
                icon: 'email',
                children: [
                  { label: 'Email Master', route: '/setting/user/email-reminder/email-master', icon: 'email' },
                  { label: 'Email Template Content', route: '/setting/user/email-reminder/email-template-content', icon: 'description' },
                  { label: 'Probation Period Notification', route: '/setting/user/email-reminder/probation-period-notification', icon: 'notifications' },
                  { label: 'New Hire Notification', route: '/setting/user/email-reminder/new-hire-notification', icon: 'person_add' }
                ]
              }
            ]
          },
          // 2. System Access
          {
            label: 'System Access',
            icon: 'security',
            children: [ // Level 4
              { label: 'System Access', route: '/setting/system-access', icon: 'security' }
            ]
          },
          // 3. User Level
          {
            label: 'User Level',
            icon: 'trending_up',
            children: [ // Level 4
              { label: 'User Level', route: '/setting/user-level', icon: 'trending_up' }
            ]
          },
          // 4. Personal Data
          {
            label: 'Personal Data',
            icon: 'person',
            children: [ // Level 4
              { label: 'Personal Data', route: '/setting/personal-data', icon: 'person' }
            ]
          },
          // 5. Options
          {
            label: 'Options',
            icon: 'tune',
            children: [ // Level 4
              { label: 'Options', route: '/setting/options', icon: 'tune' }
            ]
          },
          // 6. Excel Report
          {
            label: 'Excel Report',
            icon: 'description',
            children: [ // Level 4
              { label: 'Excel Report', route: '/setting/excel-report', icon: 'description' }
            ]
          },
          // 7. Main Master Data
          {
            label: 'Main Master Data',
            icon: 'folder',
            children: [ // Level 4
              { label: 'Main Master Data', route: '/setting/main-master-data', icon: 'folder' }
            ]
          },
          // 8. Workflow Screen
          {
            label: 'Workflow Screen',
            icon: 'account_tree',
            children: [ // Level 4
              { label: 'Workflow Screen', route: '/setting/workflow-screen', icon: 'account_tree' }
            ]
          },
          // 9. Swap Language
          {
            label: 'Swap Language',
            icon: 'translate',
            children: [ // Level 4
              { label: 'Swap Language', route: '/setting/swap-language', icon: 'translate' }
            ]
          },
          // 10. Zeeme Interface
          {
            label: 'Zeeme Interface',
            icon: 'api',
            children: [ // Level 4
              { label: 'Zeeme Interface', route: '/setting/zeeme-interface', icon: 'api' }
            ]
          },
          // 11. Barcode Generator
          {
            label: 'Barcode Generator',
            icon: 'qr_code',
            children: [ // Level 4
              { label: 'Barcode Generator', route: '/setting/barcode-generator', icon: 'qr_code' }
            ]
          },
          // 12. Token Generator
          {
            label: 'Token Generator',
            icon: 'vpn_key',
            children: [ // Level 4
              { label: 'Token Generator', route: '/setting/token-generator', icon: 'vpn_key' }
            ]
          },
          // 13. Data Shop
          {
            label: 'Data Shop',
            icon: 'store',
            children: [ // Level 4
              { label: 'Data Shop', route: '/setting/data-shop', icon: 'store' }
            ]
          },
          // 14. Routing Config
          {
            label: 'Routing Config',
            icon: 'route',
            children: [ // Level 4
              { label: 'Routing Config', route: '/setting/routing-config', icon: 'route' }
            ]
          },
          // 15. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/setting/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      }
    ]
  }
];

/**
 * Get navigation items filtered by user roles
 * @param userRoles User roles array
 * @returns Filtered navigation items
 */
export function getNavigationItemsByRoles(userRoles: string[]): NavigationItem[] {
  // Always return all navigation items - admin by default
  // No role filtering - everyone sees admin menu
  return NAVIGATION_ITEMS.map(item => {
    // Return all children without filtering
    if (item.children) {
      return { ...item, children: item.children };
    }
    return item;
  });
}

/**
 * Get navigation item by ID
 * @param id Navigation item ID
 * @returns Navigation item or null
 */
export function getNavigationItemById(id: string): NavigationItem | null {
  return NAVIGATION_ITEMS.find(item => item.id === id) || null;
}

/**
 * Get navigation child by route
 * @param route Route path
 * @returns Navigation child or null
 */
export function getNavigationChildByRoute(route: string): NavigationChild | null {
  for (const item of NAVIGATION_ITEMS) {
    if (item.children) {
      const child = item.children.find(c => c.route === route);
      if (child) {
        return child;
      }
    }
  }
  return null;
}

