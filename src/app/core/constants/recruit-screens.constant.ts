/**
 * Recruitment Screens Constant
 * ข้อมูลหน้าจอ Recruitment Module จากระบบเก่า (JSP)
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
 * 1.1 Setup Screens (RE01A01)
 */
const setupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'RE01A0101',
    menuNameThai: 'การตั้งค่าพื้นฐาน',
    menuNameEnglish: 'Basic Configuration',
    jspFiles: [
      { filename: 'BasicConfig.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASIC_CONFIG,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0102',
    menuNameThai: 'ทะเบียนกรรมการสัมภาษณ์',
    menuNameEnglish: 'Interview Committee',
    jspFiles: [
      { filename: 'RCM0011_GIT.jsp', description: 'Main screen' },
      { filename: 'PRU084_bothLang.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.INTERVIEW_COMMITTEE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0110',
    menuNameThai: 'กำหนดค่าของระดับความสามารถ',
    menuNameEnglish: 'Skill Level Configuration',
    jspFiles: [
      { filename: 'RCM008.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.SKILL_LEVEL_CONFIG,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0113',
    menuNameThai: 'สื่อสมัครงาน',
    menuNameEnglish: 'Source Of Job',
    jspFiles: [
      { filename: 'SOURCEJOB.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.SOURCE_OF_JOB,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0114',
    menuNameThai: 'สถานะผู้สมัคร',
    menuNameEnglish: 'Candidate Status',
    jspFiles: [
      { filename: 'STATUS.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.CANDIDATE_STATUS,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0117',
    menuNameThai: 'สถานะความเร่งด่วนขอใบขออัตรากำลัง',
    menuNameEnglish: 'Urgency status, requesting a power request',
    jspFiles: [
      { filename: 'RCM010.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.URGENCY_STATUS,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RCM009',
    menuNameThai: 'กำหนดหน้าจอของฟอร์มสมัครงาน',
    menuNameEnglish: 'Applicant Form Configuration',
    jspFiles: [
      { filename: 'RCM009.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0112',
    menuNameThai: 'กำหนดอีเมล์',
    menuNameEnglish: 'E-mail Configuration',
    jspFiles: [
      { filename: 'EmailConfig.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0115',
    menuNameThai: 'กำหนดอีเมล์แจ้งเตือนเมื่อมีผู้สมัคร',
    menuNameEnglish: 'Notification E-mail Configuration',
    jspFiles: [
      { filename: 'NotiEmailConfig.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0116',
    menuNameThai: 'การสมัครงานแบบด่วน',
    menuNameEnglish: 'Quick apply Configuration',
    jspFiles: [
      { filename: 'QuickApply.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RE01A0111',
    menuNameThai: 'ข่าวประชาสัมพันธ์',
    menuNameEnglish: 'Announce',
    jspFiles: [
      { filename: 'Announce.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.SETUP.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.2 Process Screens (RE01A02)
 */
const processScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'RE01A0201',
    menuNameThai: 'กรอกใบสมัครงาน',
    menuNameEnglish: 'Fill in Application Form',
    jspFiles: [
      { filename: 'FillFormApplicant.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0202',
    menuNameThai: 'ใบขออัตรากำลัง',
    menuNameEnglish: 'Manpower Request',
    jspFiles: [
      { filename: 'ManpowerRequest.jsp', description: 'Main screen' },
      { filename: 'REC100.jsp', description: 'Related screen' },
      { filename: 'REC101.jsp', description: 'Related screen' },
      { filename: 'REC101C.jsp', description: 'Related screen' },
      { filename: 'REC101S.jsp', description: 'Related screen' },
      { filename: 'REC101ADDRESPON.jsp', description: 'Add responsible screen' },
      { filename: 'REC101EDITRESPON.jsp', description: 'Edit responsible screen' },
      { filename: 'PRU084_angular.jsp', description: 'Angular related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Complex screen with multiple related pages',
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0207',
    menuNameThai: 'รายชื่อผู้ฝากประวัติ',
    menuNameEnglish: 'Dropped Resume',
    jspFiles: [
      { filename: 'DropResume.jsp', description: 'Main screen' },
      { filename: 'DropResumePrint.jsp', description: 'Print screen' },
      { filename: 'DropResumePrint_Monthly.jsp', description: 'Monthly print screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0203',
    menuNameThai: 'รายชื่อผู้สมัคร',
    menuNameEnglish: 'Applicant List',
    jspFiles: [
      { filename: 'FormApplicant.jsp', description: 'Main screen' },
      { filename: 'ApplicantPrint_APF_Daily_NEW.jsp', description: 'Daily print screen (APF)' },
      { filename: 'ApplicantPrint_APF_Monthly_NEW.jsp', description: 'Monthly print screen (APF)' },
      { filename: 'ApplicantPrint_ITALTHAI.jsp', description: 'Print screen (ITALTHAI)' },
      { filename: 'ApplicantPrint_WORKPOINT.jsp', description: 'Print screen (WORKPOINT)' },
      { filename: 'ApplicantPrint_PLANETCOMM.jsp', description: 'Print screen (PLANETCOMM)' },
      { filename: 'ApplicantPrint_KOKOTEL.jsp', description: 'Print screen (KOKOTEL)' },
      { filename: 'CandidatePrint_KOKOTEL.jsp', description: 'Candidate print screen (KOKOTEL)' },
      { filename: 'ApplicantTest_ITALTHAI.jsp', description: 'Test screen (ITALTHAI)' },
      { filename: 'ApplicantPrint_CHATRIUM.jsp', description: 'Print screen (CHATRIUM)' },
      { filename: 'ApplicantPrint_MONTIEN.jsp', description: 'Print screen (MONTIEN)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Multiple print formats for different companies',
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0204',
    menuNameThai: 'รายชื่อผู้ผ่านการคัดเลือก',
    menuNameEnglish: 'Candidate List',
    jspFiles: [
      { filename: 'Candidate.jsp', description: 'Main screen' },
      { filename: 'CandidatePrint_ITALTHAI.jsp', description: 'Print screen (ITALTHAI)' },
      { filename: 'CandidatePrint_WORKPOINT.jsp', description: 'Print screen (WORKPOINT)' },
      { filename: 'CandidatePrint_PLANETCOMM.jsp', description: 'Print screen (PLANETCOMM)' },
      { filename: 'CandidatePrint_CHATRIUM.jsp', description: 'Print screen (CHATRIUM)' },
      { filename: 'CandidatePrint_MONTIEN.jsp', description: 'Print screen (MONTIEN)' },
      { filename: 'CandidateTest_ITALTHAI.jsp', description: 'Test screen (ITALTHAI)' },
      { filename: 'PRU102.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Multiple print formats for different companies',
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0205',
    menuNameThai: 'ตารางการนัดหมายสัมภาษณ์และสอบข้อเขียน',
    menuNameEnglish: 'Interview / Exam Schedule',
    jspFiles: [
      { filename: 'Appointment.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0206',
    menuNameThai: 'ประวัติใบสมัคร',
    menuNameEnglish: 'Recruit History',
    jspFiles: [
      { filename: 'RecruitHistory.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'RE01A0230',
    menuNameThai: 'จำนวนผู้เข้าชม Jobboard',
    menuNameEnglish: 'Jobboard View count',
    jspFiles: [
      { filename: 'JobboardViewsCount.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.PROCESS.BASE,
    screenType: ScreenType.REPORT
  })
];

/**
 * 2. Send data for Jobboard Screens (RE06A)
 */
const jobboardScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'RE06A01',
    menuNameThai: 'ส่งข้อมูลพื้นฐาน',
    menuNameEnglish: 'Send Master Data',
    jspFiles: [
      { filename: 'REC_MPO_JB.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Data transfer function - Sends master data to Jobboard system',
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.JOBBOARD.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'RE06A02',
    menuNameThai: 'ส่งข้อมูลใบขออัตรากำลัง',
    menuNameEnglish: 'Send Manpower Request Form',
    jspFiles: [
      { filename: 'REC_06A2.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Data transfer function - Sends manpower request data to Jobboard system',
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.JOBBOARD.BASE,
    screenType: ScreenType.EXPORT
  })
];

/**
 * 3. Terms Of Use Screens (RE07A)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'RE07A01',
    menuNameThai: 'คู่มือการใช้งาน',
    menuNameEnglish: 'User Manual',
    jspFiles: [
      { filename: 'MODULE_MANUAL.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/RECRUIT/',
    routePath: APP_ROUTES.PORTAL.ADMIN.RECRUIT.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Categories
 */
const setupCategory: ScreenCategory = {
  categoryCode: 'RE01A01',
  categoryNameThai: 'ตั้งค่า (Master Data)',
  categoryNameEnglish: 'Setup (Master Data)',
  screens: setupScreens
};

const processCategory: ScreenCategory = {
  categoryCode: 'RE01A02',
  categoryNameThai: 'กระบวนการ',
  categoryNameEnglish: 'Process',
  screens: processScreens
};

const jobboardCategory: ScreenCategory = {
  categoryCode: 'RE06A',
  categoryNameThai: 'ส่งข้อมูลสำหรับ Jobboard',
  categoryNameEnglish: 'Send data for Jobboard',
  screens: jobboardScreens
};

const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'RE07A',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Human Resources Category (Parent)
 */
const humanResourcesCategory: ScreenCategory = {
  categoryCode: 'RE01A',
  categoryNameThai: 'ทรัพยากรบุคคล',
  categoryNameEnglish: 'Human Resources',
  screens: [],
  subCategories: [
    setupCategory,
    processCategory
  ]
};

/**
 * Recruitment Module Inventory
 * ข้อมูลทั้งหมดของ Recruitment Module
 */
export const RECRUIT_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'RE',
  moduleName: 'Recruitment',
  basePath: 'hrAppWeb.war/RECRUIT/',
  totalScreens: 50, // Total: 11 (Setup) + 8 (Process) + 2 (Jobboard) + 1 (Terms) = 22 screens
  mainCategories: [
    humanResourcesCategory,
    jobboardCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'Setup (Master Data)': 11,
    'Process (Operations)': 8,
    'Send data for Jobboard': 2,
    'Terms Of Use': 1
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

  for (const category of RECRUIT_MODULE_INVENTORY.mainCategories) {
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

  for (const category of RECRUIT_MODULE_INVENTORY.mainCategories) {
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
  for (const category of RECRUIT_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

