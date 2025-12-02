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
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    roles: ['user', 'admin'],
    children: [
      {
        label: 'หน้าแรก',
        route: '/portal',
        icon: 'home'
      }
    ]
  },
  // กลุ่ม 1: Employee Self Service (ทุกคนมีสิทธิ์เห็น)
  {
    id: 'ess',
    label: 'Self Service',
    icon: 'person',    // icon หลักใน Rail ซ้ายสุด (ใช้ person แทน user-circle)
    roles: ['user', 'admin'],
    children: [              // Level 2 - รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
      {
        label: 'ลงเวลา (Time)',
        route: '/portal/self-service/time',
        icon: 'access_time',
        children: [ // Level 3-4
          { label: 'ลงเวลาเข้า-ออก', route: '/portal/self-service/time/timestamp', icon: 'login' },
          { label: 'แจ้งเตือนเวลา', route: '/portal/self-service/time/time-warning', icon: 'warning' }
        ]
      },
      {
        label: 'ขอเอกสาร (Request)',
        route: '/portal/self-service/documents',
        icon: 'description',
        children: [ // Level 3-4
          { label: 'PND91', route: '/portal/self-service/documents/pnd91', icon: 'description' },
          { label: 'TWI50', route: '/portal/self-service/documents/twi50', icon: 'description' }
        ]
      },
      {
        label: 'สลิปเงินเดือน (Payslip)',
        route: '/portal/self-service/payslip',
        icon: 'receipt'
      },
      {
        label: 'ตรวจสอบข้อมูลตัวเอง',
        route: '/portal/self-service/profile',
        icon: 'person'
      },
      {
        label: 'ลูกน้อง',
        route: '/portal/self-service/subordinates',
        icon: 'people'
      },
      {
        label: 'สวัสดิการ',
        route: '/portal/self-service/welfare',
        icon: 'favorite'
      },
      {
        label: 'ลาพักผ่อน',
        route: '/portal/self-service/leave',
        icon: 'event'
      },
      {
        label: 'การลงเวลา',
        route: '/portal/self-service/attendance',
        icon: 'access_time'
      },
      {
        label: 'สถิติ',
        route: '/portal/self-service/statistics',
        icon: 'bar_chart',
        children: [ // Level 3-4
          { label: 'สถิติการลา', route: '/portal/self-service/statistics/leave', icon: 'bar_chart' },
          { label: 'สถิติ OT', route: '/portal/self-service/statistics/ot', icon: 'bar_chart' },
          { label: 'สถิติแก้ไขเวลา', route: '/portal/self-service/statistics/edit-time', icon: 'bar_chart' }
        ]
      }
    ]
  },

  // กลุ่ม 2: Admin (เห็นเฉพาะผู้ที่มีสิทธิ์)
  {
    id: 'admin',
    label: 'Admin',
    icon: 'shield-check',   // icon หลักใน Rail ซ้ายสุด
    roles: ['admin'],       // User ทั่วไปจะไม่เห็น Icon นี้
    children: [
      // Level 2: Company Management (มี Level 3-4)
      {
        label: 'Company Management',
        icon: 'business',
        children: [ // Level 3 - เมนูของโมดูล Company
          {
            label: 'ข้อมูลบริษัท',
            route: '/portal/admin/company',
            icon: 'business',
            children: [ // Level 4
              { label: 'ข้อมูลพื้นฐาน', route: '/portal/admin/company/profile', icon: 'info' },
              { label: 'โครงสร้างองค์กร', route: '/portal/admin/company/organization', icon: 'account_tree' },
              { label: 'ข้อมูลติดต่อ', route: '/portal/admin/company/contact', icon: 'contact_mail' }
            ]
          },
          {
            label: 'แผนก',
            route: '/portal/admin/company/departments',
            icon: 'folder',
            children: [ // Level 4
              { label: 'รายชื่อแผนก', route: '/portal/admin/company/departments/list', icon: 'list' },
              { label: 'โครงสร้างแผนก', route: '/portal/admin/company/departments/structure', icon: 'account_tree' }
            ]
          },
          {
            label: 'ตำแหน่งงาน',
            route: '/portal/admin/company/positions',
            icon: 'work',
            children: [ // Level 4
              { label: 'รายชื่อตำแหน่ง', route: '/portal/admin/company/positions/list', icon: 'list' },
              { label: 'ระดับตำแหน่ง', route: '/portal/admin/company/positions/levels', icon: 'trending_up' }
            ]
          }
        ]
      },
      // Level 2: Personal Management (มี Level 3-4)
      {
        label: 'Personal Management',
        icon: 'people',
        children: [ // Level 3 - เมนูของโมดูล Personal
          {
            label: 'Dashboard ภาพรวม',
            route: '/portal/admin/employees/dashboard',
            icon: 'dashboard'
          },
          {
            label: 'ทะเบียนประวัติหลัก', // Level 3 Group
            expanded: false,
            icon: 'folder',
            children: [ // Level 4
              {
                label: 'รายชื่อพนักงานทั้งหมด',
                route: '/portal/admin/employees/master/list',
                icon: 'list'
              },
              {
                label: 'ข้อมูลครอบครัว',
                route: '/portal/admin/employees/master/family',
                icon: 'family_restroom'
              },
              {
                label: 'ประวัติการทำงาน',
                route: '/portal/admin/employees/master/work-history',
                icon: 'work_history'
              },
              {
                label: 'ข้อมูลการศึกษา',
                route: '/portal/admin/employees/master/education',
                icon: 'school'
              },
              {
                label: 'ข้อมูลการฝึกอบรม',
                route: '/portal/admin/employees/master/training',
                icon: 'book'
              }
            ]
          },
          {
            label: 'รายงาน (Reports)',
            route: '/portal/admin/employees/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานพนักงาน', route: '/portal/admin/employees/reports/employee', icon: 'assessment' },
              { label: 'รายงานสถิติ', route: '/portal/admin/employees/reports/statistics', icon: 'bar_chart' }
            ]
          },
          {
            label: 'ประมวลผล (Processing)',
            route: '/portal/admin/employees/processing',
            icon: 'settings',
            children: [ // Level 4
              { label: 'ประมวลผลข้อมูล', route: '/portal/admin/employees/processing/data', icon: 'settings' },
              { label: 'ประมวลผลรายงาน', route: '/portal/admin/employees/processing/reports', icon: 'assessment' }
            ]
          }
        ]
      },
      // Level 2: Payroll Management (มี Level 3-4)
      {
        label: 'Payroll Management',
        icon: 'attach_money',
        children: [ // Level 3
          {
            label: 'จัดการเงินเดือน',
            route: '/portal/admin/payroll',
            icon: 'money',
            children: [ // Level 4
              { label: 'คำนวณเงินเดือน', route: '/portal/admin/payroll/calculate', icon: 'calculate' },
              { label: 'ปรับเงินเดือน', route: '/portal/admin/payroll/adjust', icon: 'edit' }
            ]
          },
          {
            label: 'สลิปเงินเดือน',
            route: '/portal/admin/payroll/payslip',
            icon: 'receipt',
            children: [ // Level 4
              { label: 'สร้างสลิป', route: '/portal/admin/payroll/payslip/create', icon: 'add' },
              { label: 'ดูสลิป', route: '/portal/admin/payroll/payslip/view', icon: 'visibility' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/payroll/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานเงินเดือน', route: '/portal/admin/payroll/reports/salary', icon: 'assessment' },
              { label: 'รายงานภาษี', route: '/portal/admin/payroll/reports/tax', icon: 'receipt' }
            ]
          }
        ]
      },
      // Level 2: Time Management (มี Level 3-4)
      {
        label: 'Time Management',
        icon: 'access_time',
        children: [ // Level 3
          {
            label: 'การลงเวลา',
            route: '/portal/admin/time/attendance',
            icon: 'access_time',
            children: [ // Level 4
              { label: 'รายการลงเวลา', route: '/portal/admin/time/attendance/list', icon: 'list' },
              { label: 'แก้ไขเวลา', route: '/portal/admin/time/attendance/edit', icon: 'edit' }
            ]
          },
          {
            label: 'คำขอลา',
            route: '/portal/admin/time/leave',
            icon: 'event',
            children: [ // Level 4
              { label: 'อนุมัติการลา', route: '/portal/admin/time/leave/approve', icon: 'check' },
              { label: 'ประวัติการลา', route: '/portal/admin/time/leave/history', icon: 'history' }
            ]
          },
          {
            label: 'คำขอ OT',
            route: '/portal/admin/time/overtime',
            icon: 'schedule',
            children: [ // Level 4
              { label: 'อนุมัติ OT', route: '/portal/admin/time/overtime/approve', icon: 'check' },
              { label: 'รายงาน OT', route: '/portal/admin/time/overtime/reports', icon: 'assessment' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/time/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานการลงเวลา', route: '/portal/admin/time/reports/attendance', icon: 'assessment' },
              { label: 'รายงานการลา', route: '/portal/admin/time/reports/leave', icon: 'event' }
            ]
          }
        ]
      },
      // Level 2: Training Management (มี Level 3-4)
      {
        label: 'Training Management',
        icon: 'school',
        children: [ // Level 3
          {
            label: 'หลักสูตรการฝึกอบรม',
            route: '/portal/admin/training/catalog',
            icon: 'book',
            children: [ // Level 4
              { label: 'รายชื่อหลักสูตร', route: '/portal/admin/training/catalog/list', icon: 'list' },
              { label: 'สร้างหลักสูตร', route: '/portal/admin/training/catalog/create', icon: 'add' }
            ]
          },
          {
            label: 'ลงทะเบียนอบรม',
            route: '/portal/admin/training/registration',
            icon: 'check',
            children: [ // Level 4
              { label: 'ลงทะเบียน', route: '/portal/admin/training/registration/register', icon: 'check' },
              { label: 'ประวัติการอบรม', route: '/portal/admin/training/registration/history', icon: 'history' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/training/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานการอบรม', route: '/portal/admin/training/reports/training', icon: 'assessment' },
              { label: 'รายงานผู้เข้าร่วม', route: '/portal/admin/training/reports/participants', icon: 'people' }
            ]
          }
        ]
      },
      // Level 2: Welfare Management (มี Level 3-4)
      {
        label: 'Welfare Management',
        icon: 'favorite',
        children: [ // Level 3
          {
            label: 'สวัสดิการ',
            route: '/portal/admin/welfare/benefits',
            icon: 'favorite',
            children: [ // Level 4
              { label: 'รายการสวัสดิการ', route: '/portal/admin/welfare/benefits/list', icon: 'list' },
              { label: 'จัดการสวัสดิการ', route: '/portal/admin/welfare/benefits/manage', icon: 'settings' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/welfare/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานสวัสดิการ', route: '/portal/admin/welfare/reports/benefits', icon: 'assessment' },
              { label: 'รายงานการใช้', route: '/portal/admin/welfare/reports/usage', icon: 'bar_chart' }
            ]
          }
        ]
      },
      // Level 2: Recruit Management (มี Level 3-4)
      {
        label: 'Recruit Management',
        icon: 'person_add',
        children: [ // Level 3
          {
            label: 'ประกาศรับสมัคร',
            route: '/portal/admin/recruit/job-postings',
            icon: 'file',
            children: [ // Level 4
              { label: 'รายการประกาศ', route: '/portal/admin/recruit/job-postings/list', icon: 'list' },
              { label: 'สร้างประกาศ', route: '/portal/admin/recruit/job-postings/create', icon: 'add' }
            ]
          },
          {
            label: 'จัดการผู้สมัคร',
            route: '/portal/admin/recruit/candidates',
            icon: 'people',
            children: [ // Level 4
              { label: 'รายชื่อผู้สมัคร', route: '/portal/admin/recruit/candidates/list', icon: 'list' },
              { label: 'ประเมินผู้สมัคร', route: '/portal/admin/recruit/candidates/evaluate', icon: 'assessment' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/recruit/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานการรับสมัคร', route: '/portal/admin/recruit/reports/recruitment', icon: 'assessment' },
              { label: 'รายงานผู้สมัคร', route: '/portal/admin/recruit/reports/candidates', icon: 'people' }
            ]
          }
        ]
      },
      // Level 2: Appraisal Management (มี Level 3-4)
      {
        label: 'Appraisal Management',
        icon: 'assessment',
        children: [ // Level 3
          {
            label: 'การประเมินผล',
            route: '/portal/admin/appraisal',
            icon: 'chart',
            children: [ // Level 4
              { label: 'สร้างการประเมิน', route: '/portal/admin/appraisal/create', icon: 'add' },
              { label: 'รายการประเมิน', route: '/portal/admin/appraisal/list', icon: 'list' },
              { label: 'ผลการประเมิน', route: '/portal/admin/appraisal/results', icon: 'assessment' }
            ]
          },
          {
            label: 'รายงาน',
            route: '/portal/admin/appraisal/reports',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'รายงานการประเมิน', route: '/portal/admin/appraisal/reports/appraisal', icon: 'assessment' },
              { label: 'รายงานผลการประเมิน', route: '/portal/admin/appraisal/reports/results', icon: 'bar_chart' }
            ]
          }
        ]
      },
      // Level 2: Settings (มี Level 3-4)
      {
        label: 'Settings',
        icon: 'settings',
        children: [ // Level 3
          {
            label: 'ตั้งค่าระบบ',
            route: '/portal/admin/settings',
            icon: 'settings',
            children: [ // Level 4
              { label: 'ตั้งค่าทั่วไป', route: '/portal/admin/settings/general', icon: 'settings' },
              { label: 'ตั้งค่าโมดูล', route: '/portal/admin/settings/modules', icon: 'apps' }
            ]
          },
          {
            label: 'ตั้งค่าผู้ใช้',
            route: '/portal/admin/settings/users',
            icon: 'person',
            children: [ // Level 4
              { label: 'รายชื่อผู้ใช้', route: '/portal/admin/settings/users/list', icon: 'list' },
              { label: 'สร้างผู้ใช้', route: '/portal/admin/settings/users/create', icon: 'add' }
            ]
          },
          {
            label: 'ตั้งค่าสิทธิ์',
            route: '/portal/admin/settings/permissions',
            icon: 'lock',
            children: [ // Level 4
              { label: 'จัดการสิทธิ์', route: '/portal/admin/settings/permissions/manage', icon: 'lock' },
              { label: 'กำหนดบทบาท', route: '/portal/admin/settings/permissions/roles', icon: 'admin_panel_settings' }
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
  // Normalize roles to lowercase for comparison
  const normalizedUserRoles = userRoles.map(role => role.toLowerCase());

  // Check if user has 'All' role (should see everything)
  const hasAllRole = normalizedUserRoles.includes('all');

  return NAVIGATION_ITEMS.filter(item => {
    // If user has 'All' role, show all items
    if (hasAllRole) {
      return true;
    }

    // Check if user has any of the required roles (case-insensitive)
    return item.roles.some(role => normalizedUserRoles.includes(role.toLowerCase()));
  }).map(item => {
    // Filter children by roles if specified
    if (item.children) {
      const filteredChildren = item.children.filter(child => {
        // If user has 'All' role, show all children
        if (hasAllRole) {
          return true;
        }

        if (!child.roles || child.roles.length === 0) {
          return true; // No role restriction
        }
        // Check roles (case-insensitive)
        return child.roles.some(role => normalizedUserRoles.includes(role.toLowerCase()));
      });
      return { ...item, children: filteredChildren };
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

