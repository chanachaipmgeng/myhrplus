/**
 * Welfare Screens Constant
 * ข้อมูลหน้าจอ Welfare Module จากระบบเก่า (JSP)
 * ใช้สำหรับการ migrate จากระบบเดิม
 */

import {
  ScreenDefinition,
  ScreenCategory,
  ModuleInventory,
  createScreenDefinition,
  ScreenType
} from '../models/screen.model';
import { ROUTES as APP_ROUTES } from './routes.constant';

/**
 * 1.1 Master Data Screens (WE01A01)
 */
const masterDataScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WEL034',
    menuNameThai: 'กลุ่มงบประมาณ',
    menuNameEnglish: 'Budget group',
    jspFiles: [
      { filename: 'WEL034.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BUDGET_GROUP,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL011',
    menuNameThai: 'กำหนดปีงบประมาณของสวัสดิการ',
    menuNameEnglish: 'Budget of year',
    jspFiles: [
      { filename: 'WEL011.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BUDGET_OF_YEAR,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL044',
    menuNameThai: 'ทะเบียนกลุ่มสถานที่ใช้สวัสดิการ',
    menuNameEnglish: 'Location group of welfare',
    jspFiles: [
      { filename: 'WEL044.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.LOCATION_GROUP,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL004',
    menuNameThai: 'ทะเบียนสถานที่ใช้สวัสดิการ',
    menuNameEnglish: 'Location of welfare',
    jspFiles: [
      { filename: 'WEL004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.LOCATION,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL005',
    menuNameThai: 'ทะเบียนโรค/อุบัติเหตุ',
    menuNameEnglish: 'Disease - accident',
    jspFiles: [
      { filename: 'WEL005.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.DISEASE_ACCIDENT,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL006',
    menuNameThai: 'ทะเบียนกลุ่มโรค/อุบัติเหตุ',
    menuNameEnglish: 'Disease - accident group',
    jspFiles: [
      { filename: 'WEL006.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.DISEASE_ACCIDENT_GROUP,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL018',
    menuNameThai: 'ทะเบียนเอกสารอ้างอิง',
    menuNameEnglish: 'Reference document',
    jspFiles: [
      { filename: 'WEL018.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.REFERENCE_DOCUMENT,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL019',
    menuNameThai: 'ทะเบียนกลุ่มเอกสารอ้างอิง',
    menuNameEnglish: 'Reference document group',
    jspFiles: [
      { filename: 'WEL019.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL020',
    menuNameThai: 'ประเภทสวัสดิการ',
    menuNameEnglish: 'Welfare type',
    jspFiles: [
      { filename: 'WEL020.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL012',
    menuNameThai: 'กลุ่มสวัสดิการ',
    menuNameEnglish: 'Welfare group',
    jspFiles: [
      { filename: 'WEL012.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL001',
    menuNameThai: 'กำหนดนโยบาย',
    menuNameEnglish: 'Welfare config',
    jspFiles: [
      { filename: 'WEL001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL107',
    menuNameThai: 'ทะเบียนงบประมาณ',
    menuNameEnglish: 'Welfare Table',
    jspFiles: [
      { filename: 'WEL107.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.MASTER.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.2 Nursing Room Screens (WE05A)
 */
const nursingRoomScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WEL105_TYT',
    menuNameThai: 'ทะเบียนประเภทยา',
    menuNameEnglish: 'MedicineType',
    jspFiles: [
      { filename: 'WEL105_TYT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'TYT variant (company-specific)',
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.NURSING_ROOM.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL104_TYT',
    menuNameThai: 'ทะเบียนประเภทยา',
    menuNameEnglish: 'MedicineType',
    jspFiles: [
      { filename: 'WEL104_TYT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'TYT variant (company-specific)',
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.NURSING_ROOM.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL099_TYT',
    menuNameThai: 'บันทึกใบตรวจโรค',
    menuNameEnglish: 'Diagnosis Information',
    jspFiles: [
      { filename: 'WEL099_TYT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'TYT variant (company-specific)',
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.NURSING_ROOM.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL102_TYT',
    menuNameThai: 'ประวัติการรักษาพยาบาล',
    menuNameEnglish: 'History of Cure',
    jspFiles: [
      { filename: 'WEL102_TYT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'TYT variant (company-specific)',
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.NURSING_ROOM.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.3 Requisition of Welfare Screens (WE01A02)
 */
const requisitionScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WEL002',
    menuNameThai: 'คำร้องขอสวัสดิการ',
    menuNameEnglish: 'Requisition of welfare',
    jspFiles: [
      { filename: 'WEL002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.REQUISITION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL051',
    menuNameThai: 'คำร้องขอสวัสดิการที่มีปัญหา',
    menuNameEnglish: 'Rollback requisition',
    jspFiles: [
      { filename: 'WEL051.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.REQUISITION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL030',
    menuNameThai: 'ยืนยันการจ่ายสวัสดิการ',
    menuNameEnglish: 'Approve payment',
    jspFiles: [
      { filename: 'WEL030.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.REQUISITION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL029',
    menuNameThai: 'เพิ่มประวัติการขอสวัสดิการของพนักงาน',
    menuNameEnglish: 'Addition welfare history',
    jspFiles: [
      { filename: 'WEL029.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.REQUISITION.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.4 History of Welfare Screens (WE01A03)
 */
const historyScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WEL003',
    menuNameThai: 'ประวัติการขอสวัสดิการงบประมาณปัจจุบัน',
    menuNameEnglish: 'History of welfare in budget this year',
    jspFiles: [
      { filename: 'WEL003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL041',
    menuNameThai: 'ประวัติการขอสวัสดิการงบประมาณที่ผ่านมา',
    menuNameEnglish: 'History of welfare in budget year ago',
    jspFiles: [
      { filename: 'WEL041.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.5 Process of Welfare Screens (WE01A04)
 */
const processScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WEL043',
    menuNameThai: 'ย้ายข้อมูลการทำงานลงประวัติ',
    menuNameEnglish: 'Move to history',
    jspFiles: [
      { filename: 'WEL043.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'WEL045',
    menuNameThai: 'สถานะการประมวลผล',
    menuNameEnglish: 'Process Status',
    jspFiles: [
      { filename: 'WEL045.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.PROCESS.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 2. Webboard Screens (WE02A)
 */
const webboardScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'WET001',
    menuNameThai: 'ประเภทกระทู้',
    menuNameEnglish: 'Webborad Type',
    jspFiles: [
      { filename: 'WET001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.WEBBOARD.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WEL026',
    menuNameThai: 'กระดานข่าว',
    menuNameEnglish: 'Webborad List',
    jspFiles: [
      { filename: 'WEL026.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.WEBBOARD.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL027',
    menuNameThai: 'สร้างกระทู้ใหม่',
    menuNameEnglish: 'New Webboard',
    jspFiles: [
      { filename: 'WEL027.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.WEBBOARD.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 3. Employee Screens (WE03A)
 */
const employeeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'Wel014',
    menuNameThai: 'รายการสวัสดิการ',
    menuNameEnglish: 'Welfare list',
    jspFiles: [
      { filename: 'WEL014.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL028',
    menuNameThai: 'กระทู้เอกสารคำร้อง',
    menuNameEnglish: 'Webboard of requisition',
    jspFiles: [
      { filename: 'WEL028.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL022',
    menuNameThai: 'คำร้องขอสวัสดิการ',
    menuNameEnglish: 'Requisition of welfare',
    jspFiles: [
      { filename: 'WEL022.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL048',
    menuNameThai: 'แก้ไขใบคำร้อง',
    menuNameEnglish: 'Edit requisition of welfare',
    jspFiles: [
      { filename: 'WEL048.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL016',
    menuNameThai: 'ประวัติการใช้สวัสดิการปีปัจุบัน',
    menuNameEnglish: 'History of welfare in budget this year',
    jspFiles: [
      { filename: 'WEL016.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'WEL050',
    menuNameThai: 'ประวัติการใช้สวัสดิการปีที่ผ่านมา',
    menuNameEnglish: 'History of welfare in budget year ago',
    jspFiles: [
      { filename: 'WEL050.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/WELFARE/',
    routePath: APP_ROUTES.PORTAL.ADMIN.WELFARE.EMPLOYEE.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Categories
 */
const masterDataCategory: ScreenCategory = {
  categoryCode: 'WE01A01',
  categoryNameThai: 'ทะเบียนหลัก',
  categoryNameEnglish: 'Master Data (Setup)',
  screens: masterDataScreens
};

const nursingRoomCategory: ScreenCategory = {
  categoryCode: 'WE05A',
  categoryNameThai: 'ห้องพยาบาล',
  categoryNameEnglish: 'Nursing Room',
  screens: nursingRoomScreens
};

const requisitionCategory: ScreenCategory = {
  categoryCode: 'WE01A02',
  categoryNameThai: 'คำร้องขอสวัสดิการ',
  categoryNameEnglish: 'Requisition of Welfare',
  screens: requisitionScreens
};

const historyCategory: ScreenCategory = {
  categoryCode: 'WE01A03',
  categoryNameThai: 'ประวัติการใช้สวัสดิการ',
  categoryNameEnglish: 'History of Welfare',
  screens: historyScreens
};

const processCategory: ScreenCategory = {
  categoryCode: 'WE01A04',
  categoryNameThai: 'ประมวลผลสวัสดิการ',
  categoryNameEnglish: 'Process of Welfare',
  screens: processScreens
};

const webboardCategory: ScreenCategory = {
  categoryCode: 'WE02A',
  categoryNameThai: 'กระดานข่าว',
  categoryNameEnglish: 'Webboard',
  screens: webboardScreens
};

const employeeCategory: ScreenCategory = {
  categoryCode: 'WE03A',
  categoryNameThai: 'พนักงาน',
  categoryNameEnglish: 'Employee',
  screens: employeeScreens
};

/**
 * Human Resources Category (Parent)
 */
const humanResourcesCategory: ScreenCategory = {
  categoryCode: 'WE01A',
  categoryNameThai: 'ทรัพยากรบุคคล',
  categoryNameEnglish: 'Human Resources',
  screens: [],
  subCategories: [
    masterDataCategory,
    nursingRoomCategory,
    requisitionCategory,
    historyCategory,
    processCategory
  ]
};

/**
 * Welfare Module Inventory
 * ข้อมูลทั้งหมดของ Welfare Module
 */
export const WELFARE_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'WE',
  moduleName: 'Welfare',
  basePath: 'hrAppWeb.war/WELFARE/',
  totalScreens: 25, // Total: 12 (Master) + 4 (Nursing Room) + 4 (Requisition) + 2 (History) + 2 (Process) + 3 (Webboard) + 6 (Employee) = 33 screens
  mainCategories: [
    humanResourcesCategory,
    webboardCategory,
    employeeCategory
  ],
  summaryStatistics: {
    'Master Data (Setup)': 12,
    'Nursing Room': 4,
    'Requisition of Welfare': 4,
    'History of Welfare': 2,
    'Process of Welfare': 2,
    'Webboard': 3,
    'Employee': 6
  }
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): ScreenDefinition | undefined {
  function searchInCategory(category: ScreenCategory): ScreenDefinition | undefined {
    const screen = category.screens.find(s => s.menuCode === menuCode);
    if (screen) {
      return screen;
    }
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        const found = searchInCategory(subCategory);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  }

  for (const category of WELFARE_MODULE_INVENTORY.mainCategories) {
    const found = searchInCategory(category);
    if (found) {
      return found;
    }
  }
  return undefined;
}

/**
 * Helper function: Get screens by category code
 */
export function getScreensByCategoryCode(categoryCode: string): ScreenDefinition[] {
  function searchInCategory(category: ScreenCategory): ScreenDefinition[] {
    if (category.categoryCode === categoryCode) {
      return category.screens;
    }
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        const found = searchInCategory(subCategory);
        if (found.length > 0) {
          return found;
        }
      }
    }
    return [];
  }

  for (const category of WELFARE_MODULE_INVENTORY.mainCategories) {
    const found = searchInCategory(category);
    if (found.length > 0) {
      return found;
    }
  }
  return [];
}

/**
 * Helper function: Get all screens
 */
export function getAllScreens(): ScreenDefinition[] {
  const screens: ScreenDefinition[] = [];
  for (const category of WELFARE_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

