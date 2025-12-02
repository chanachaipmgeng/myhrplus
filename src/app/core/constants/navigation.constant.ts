/**
 * Navigation Constants
 * Constants สำหรับ sidebar navigation structure
 * รองรับ Rail + Drawer structure (Two-layer sidebar)
 */

export interface NavigationChild {
  label: string;
  route: string;
  icon?: string;
  roles?: string[];
  badge?: string;
  badgeColor?: string;
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
    children: [              // รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
      { 
        label: 'ลงเวลา (Time)', 
        route: '/portal/self-service/time',
        icon: 'access_time'
      },
      { 
        label: 'ขอเอกสาร (Request)', 
        route: '/portal/self-service/documents',
        icon: 'description'
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
        icon: 'bar_chart'
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
      { 
        label: 'จัดการพนักงาน', 
        route: '/portal/admin/employees',
        icon: 'people'
      },
      { 
        label: 'จัดการบริษัท', 
        route: '/portal/admin/company',
        icon: 'business'
      },
      { 
        label: 'จัดการเงินเดือน', 
        route: '/portal/admin/payroll',
        icon: 'attach_money'
      },
      { 
        label: 'จัดการเวลา', 
        route: '/portal/admin/time',
        icon: 'access_time'
      },
      { 
        label: 'จัดการการฝึกอบรม', 
        route: '/portal/admin/training',
        icon: 'school'
      },
      { 
        label: 'จัดการสวัสดิการ', 
        route: '/portal/admin/welfare',
        icon: 'favorite'
      },
      { 
        label: 'จัดการการสรรหา', 
        route: '/portal/admin/recruit',
        icon: 'person_add'
      },
      { 
        label: 'จัดการการประเมิน', 
        route: '/portal/admin/appraisal',
        icon: 'assessment'
      },
      { 
        label: 'ตั้งค่าระบบ', 
        route: '/portal/admin/settings',
        icon: 'settings'
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
  return NAVIGATION_ITEMS.filter(item => {
    // Check if user has any of the required roles
    return item.roles.some(role => userRoles.includes(role));
  }).map(item => {
    // Filter children by roles if specified
    if (item.children) {
      const filteredChildren = item.children.filter(child => {
        if (!child.roles || child.roles.length === 0) {
          return true; // No role restriction
        }
        return child.roles.some(role => userRoles.includes(role));
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

