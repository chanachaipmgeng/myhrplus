/**
 * Company Screens Constant
 * ข้อมูลหน้าจอ Company Module จากระบบเก่า (JSP)
 * ใช้สำหรับการ migrate จากระบบเดิม
 */

import {
  CompanyScreenDefinition,
  CompanyScreenCategory,
  CompanyModuleInventory,
  createScreenDefinition,
  ScreenType
} from '../models/company-screen.model';
import { ROUTES as APP_ROUTES } from './routes.constant';

/**
 * 1.1 Company Information Screens (CO01A01)
 */
const companyInformationScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO01A0102',
    menuNameThai: 'ทะเบียนประเภทบริษัท',
    menuNameEnglish: 'Company Type',
    jspFiles: [
      { filename: 'CS008.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    relatedFiles: ['CS008031001.jsp'],
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.COMPANY_TYPE
  }),
  createScreenDefinition({
    menuCode: 'CO04A10',
    menuNameThai: 'การจัดการกลุ่มบริษัท',
    menuNameEnglish: 'Company Group',
    jspFiles: [
      { filename: 'CS001_STD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Replaces old CS001.jsp',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.COMPANY_GROUP
  }),
  createScreenDefinition({
    menuCode: 'CO01A0110',
    menuNameThai: 'ข้อมูลธนาคารของบริษัท',
    menuNameEnglish: "Bank's Company Information",
    jspFiles: [
      { filename: 'CS006.jsp', description: 'Main screen' },
      { filename: 'CS002.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.BANK_INFO
  }),
  createScreenDefinition({
    menuCode: 'CO01A0116',
    menuNameThai: 'ทะเบียนทรัพย์สินบริษัท',
    menuNameEnglish: 'Company Assets Information',
    jspFiles: [
      { filename: 'CS043.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.ASSETS
  }),
  createScreenDefinition({
    menuCode: 'CO01A0117',
    menuNameThai: 'ทะเบียนเอกสาร',
    menuNameEnglish: 'Company Papers Information',
    jspFiles: [
      { filename: 'CS045.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.PAPERS
  }),
  createScreenDefinition({
    menuCode: 'CO01A0122',
    menuNameThai: 'โครงสร้างบริษัท',
    menuNameEnglish: 'Company Structure',
    jspFiles: [
      { filename: 'COBRANCHLIST.jsp', description: 'Main screen' },
      { filename: 'ALLBRANCHLIST.jsp', description: 'All branches list' },
      { filename: 'ALLEMPLIST.jsp', description: 'All employees list' },
      { filename: 'COBRANCHLIST_PRE_EXPORT.jsp', description: 'Pre-export screen' },
      { filename: 'COBRANCHLIST_EXPORT.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.COMPANY_INFO.STRUCTURE
  })
];

/**
 * 1.2 Branch and Business Unit Screens (CO01A02)
 */
const branchBusinessUnitScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO01A0201',
    menuNameThai: 'ทะเบียนสาขาประกันสังคม',
    menuNameEnglish: 'Branch Social Security',
    jspFiles: [
      { filename: 'CS047.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.BRANCH_SOCIAL_SECURITY
  }),
  createScreenDefinition({
    menuCode: 'CO01A0202',
    menuNameThai: 'ทะเบียนฝ่าย',
    menuNameEnglish: 'Division',
    jspFiles: [
      { filename: 'PRU002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU01',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.DIVISION
  }),
  createScreenDefinition({
    menuCode: 'CO01A0203',
    menuNameThai: 'ทะเบียนแผนก',
    menuNameEnglish: 'Department',
    jspFiles: [
      { filename: 'PRU003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU02',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.DEPARTMENT
  }),
  createScreenDefinition({
    menuCode: 'CO01A0204',
    menuNameThai: 'ทะเบียนส่วน',
    menuNameEnglish: 'Section',
    jspFiles: [
      { filename: 'PRU004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU03',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.SECTION
  }),
  createScreenDefinition({
    menuCode: 'CO01A0205',
    menuNameThai: 'ทะเบียนทีมงาน',
    menuNameEnglish: 'TEAM',
    jspFiles: [
      { filename: 'PRU005.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU4_B',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.TEAM
  }),
  createScreenDefinition({
    menuCode: 'CO01A0206',
    menuNameThai: 'T2',
    menuNameEnglish: 'T2',
    jspFiles: [
      { filename: 'PRU037.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU5_A',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.T2
  }),
  createScreenDefinition({
    menuCode: 'CO01A0208',
    menuNameThai: 'T3',
    menuNameEnglish: 'T3',
    jspFiles: [
      { filename: 'PRU238.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU6_A',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.T3
  }),
  createScreenDefinition({
    menuCode: 'CO01A0209',
    menuNameThai: 'T4',
    menuNameEnglish: 'T4',
    jspFiles: [
      { filename: 'PRU239.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BU7_A',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.T4
  }),
  createScreenDefinition({
    menuCode: 'CO01A0207',
    menuNameThai: 'ทะเบียนบริษัท',
    menuNameEnglish: 'Company',
    jspFiles: [
      { filename: 'PRU009.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'COMPANYMENU',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.COMPANY
  }),
  createScreenDefinition({
    menuCode: 'CO01A0210',
    menuNameThai: 'ทะเบียนสาขาบริษัท',
    menuNameEnglish: 'Branch',
    jspFiles: [
      { filename: 'PRU009_BRANCH.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BRANCHMENU',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.BRANCH
  }),
  createScreenDefinition({
    menuCode: 'CO01A0224',
    menuNameThai: 'ทะเบียนสถานที่ทำงาน',
    menuNameEnglish: 'Working Area Table',
    jspFiles: [
      { filename: 'PRU031.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'WORKAREAMENU',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.WORKING_AREA
  }),
  createScreenDefinition({
    menuCode: 'CO01A0224',
    menuNameThai: 'ทะเบียนประเภทสถานที่ทำงาน',
    menuNameEnglish: 'Working Area Type Table',
    jspFiles: [
      { filename: 'PRU150_YUM.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'WORKAREAMENU',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.WORKING_AREA_TYPE
  }),
  createScreenDefinition({
    menuCode: 'CO01A0215',
    menuNameThai: 'ทะเบียน PL',
    menuNameEnglish: 'PL Table',
    jspFiles: [
      { filename: 'CO030_PL.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'PLMENU',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.PL_TABLE
  }),
  createScreenDefinition({
    menuCode: 'CO01A0213',
    menuNameThai: 'ทะเบียนสิทธิ์การอนุมัติ',
    menuNameEnglish: 'Approve Level Table',
    jspFiles: [
      { filename: 'PRU_APPRVLEVEL.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.APPROVE_LEVEL
  }),
  createScreenDefinition({
    menuCode: 'CO01A0219',
    menuNameThai: 'ทะเบียนละติจูดลองจิจูดสถานที่ทำงาน',
    menuNameEnglish: 'Latitude Longitude Work Area',
    jspFiles: [
      { filename: 'CS052.jsp', description: 'Main screen' },
      { filename: 'CS052_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.LAT_LNG_WORK_AREA
  }),
  createScreenDefinition({
    menuCode: 'CO01A0220',
    menuNameThai: 'ทะเบียนสถานที่ทำงานโดยใช้บีคอน',
    menuNameEnglish: 'Work Area Location By Bacon',
    jspFiles: [
      { filename: 'CS053.jsp', description: 'Main screen' },
      { filename: 'CS053_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.WORK_AREA_BEACON
  }),
  createScreenDefinition({
    menuCode: 'CO01A0221',
    menuNameThai: 'สถานที่ทำงาน (WorkArea)',
    menuNameEnglish: 'WorkArea',
    jspFiles: [
      { filename: 'PRU148_STORE.jsp', description: 'Main screen' },
      { filename: 'PRU148_VIEW.jsp', description: 'View screen' },
      { filename: 'PRU148_VIEW_CHILD.jsp', description: 'View child screen' },
      { filename: 'PRU148_VIEW_EMP.jsp', description: 'View employee screen' },
      { filename: 'PRU0310_YUM1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.WORKAREA
  }),
  createScreenDefinition({
    menuCode: 'CO01A0222',
    menuNameThai: 'ทะเบียนสาขาสโตร์ (STORE)',
    menuNameEnglish: 'Brand Store Table (STORE)',
    jspFiles: [
      { filename: 'CS050.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    languageCode: 'BST1',
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.BRAND_STORE
  }),
  createScreenDefinition({
    menuCode: 'CO01A0223',
    menuNameThai: 'ทะเบียน Zone Type',
    menuNameEnglish: 'Zone Type Table',
    jspFiles: [
      { filename: 'CO050.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.BRANCH_BUSINESS_UNIT.ZONE_TYPE
  })
];

/**
 * 1.3 Reporting Line Screens (CO01A03)
 */
const reportingLineScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO01A0301',
    menuNameThai: 'สายบังคับบัญชา',
    menuNameEnglish: 'Reporting Line Definition',
    jspFiles: [
      { filename: 'CI_01_22.jsp', description: 'Main screen' },
      { filename: 'CI_01_20.jsp', description: 'Related screen' },
      { filename: 'CI_01_21.jsp', description: 'Related screen' },
      { filename: 'PRU085.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.REPORTING_LINE.DEFINITION
  }),
  createScreenDefinition({
    menuCode: 'CO01A0302',
    menuNameThai: 'เปลี่ยนหัวหน้างาน',
    menuNameEnglish: 'Change Boss',
    jspFiles: [
      { filename: 'CI_01_23.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.HR.REPORTING_LINE.CHANGE_BOSS
  })
];

/**
 * 2. Approve Screens (TA01A08)
 */
const approveScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TA01A0801',
    menuNameThai: 'ตั้งค่ากล่องการอนุมัติ',
    menuNameEnglish: 'ApproveBox',
    jspFiles: [
      { filename: 'TAB01.jsp', description: 'Main screen' },
      { filename: 'TAB011.jsp', description: 'Related screen' },
      { filename: 'TAB012.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.APPROVE.APPROVE_BOX
  }),
  createScreenDefinition({
    menuCode: 'TA01A0802',
    menuNameThai: 'กำหนดกล่องการอนุมัติของพนักงานรายบุคคล',
    menuNameEnglish: 'ApproveBoxEmployee',
    jspFiles: [
      { filename: 'TAM01.jsp', description: 'Main screen' },
      { filename: 'TAM011.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.APPROVE.APPROVE_BOX_EMPLOYEE
  }),
  createScreenDefinition({
    menuCode: 'TA01A0803',
    menuNameThai: 'กำหนดกล่องการอนุมัติของพนักงานรายกลุ่ม',
    menuNameEnglish: 'ApproveBoxEmployeeGroup',
    jspFiles: [
      { filename: 'TAMG01.jsp', description: 'Main screen' },
      { filename: 'TAMG011.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.APPROVE.APPROVE_BOX_EMPLOYEE_GROUP
  }),
  createScreenDefinition({
    menuCode: 'TA01A0804',
    menuNameThai: 'ปรับปรุงประเภทกล่องการอนุมัติของพนักงาน',
    menuNameEnglish: 'AdjustApproveBoxEmployee',
    jspFiles: [
      { filename: 'TAMC01.jsp', description: 'Main screen' },
      { filename: 'TAMC011.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.APPROVE.ADJUST_APPROVE_BOX_EMPLOYEE
  })
];

/**
 * 3. Employee Self Service Screens (CO04A)
 */
const employeeSelfServiceScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO04A01',
    menuNameThai: 'การจัดการข่าว',
    menuNameEnglish: 'News Setup',
    jspFiles: [
      { filename: 'NEWS_SETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.ESS.NEWS_SETUP
  }),
  createScreenDefinition({
    menuCode: 'CO04A02',
    menuNameThai: 'การจัดการกิจกรรม',
    menuNameEnglish: 'Event Setup',
    jspFiles: [
      { filename: 'EVENT_SETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.ESS.EVENT_SETUP
  }),
  createScreenDefinition({
    menuCode: 'CO04A04',
    menuNameThai: 'การจัดการแบนเนอร์',
    menuNameEnglish: 'Banner Setup',
    jspFiles: [
      { filename: 'TBANNER_SETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.ESS.BANNER_SETUP
  })
  // TODO: เพิ่ม screens อื่นๆ ตาม COMPANY_MODULE_INVENTORY.md
];

/**
 * 4. Reports (CO02A)
 */
const reportScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO02A01',
    menuNameThai: 'ROI1001 รายงานข้อมูลประเภทบริษัท',
    menuNameEnglish: 'ROI1001 Business Type Setup',
    reportCode: 'CS081-CS0081',
    screenType: ScreenType.REPORT,
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.REPORTS.ROI1001
  }),
  createScreenDefinition({
    menuCode: 'CO02A02',
    menuNameThai: 'ROI1002 รายงานทะเบียนกลุ่มบริษัท',
    menuNameEnglish: 'ROI1002 Company Group Code',
    reportCode: 'CS15-CS015',
    screenType: ScreenType.REPORT,
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.REPORTS.ROI1002
  })
  // TODO: เพิ่ม reports อื่นๆ ตาม COMPANY_MODULE_INVENTORY.md
];

/**
 * 5. Terms Of Use (CO05A)
 */
const termsOfUseScreens: CompanyScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CO05A1',
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
    basePath: 'hrAppWeb.war/COMPANY/',
    routePath: APP_ROUTES.PORTAL.ADMIN.COMPANY.TERMS.USER_MANUAL
  })
];

/**
 * Company Module Inventory
 * ข้อมูลทั้งหมดของ Company Module
 */
export const COMPANY_MODULE_INVENTORY: CompanyModuleInventory = {
  moduleCode: 'CO',
  moduleName: 'Company',
  basePath: 'hrAppWeb.war/COMPANY/',
  totalScreens: 150,
  summaryStatistics: {
    'Company Information': 7,
    'Branch and Business Unit': 18,
    'Reporting Line': 2,
    'Job Description': 6,
    'Master File': 7,
    'Manpower Analyst': 4,
    'Manpower': 5,
    'Setup': 1,
    'Approve': 4,
    'Employee Self Service': 13,
    'Reports': 21,
    'Terms Of Use': 1
  },
  mainCategories: [
    {
      categoryCode: 'CO01A',
      categoryNameThai: 'Human Resources',
      categoryNameEnglish: 'Human Resources',
      screens: [],
      subCategories: [
        {
          categoryCode: 'CO01A01',
          categoryNameThai: 'Company Information',
          categoryNameEnglish: 'Company Information',
          screens: companyInformationScreens
        },
        {
          categoryCode: 'CO01A02',
          categoryNameThai: 'Branch and Business Unit',
          categoryNameEnglish: 'Branch and Business Unit',
          screens: branchBusinessUnitScreens
        },
        {
          categoryCode: 'CO01A03',
          categoryNameThai: 'Reporting Line',
          categoryNameEnglish: 'Reporting Line',
          screens: reportingLineScreens
        }
        // TODO: เพิ่ม subCategories อื่นๆ (Job Description, Master File, Manpower Analyst, Manpower, Setup)
      ]
    },
    {
      categoryCode: 'TA01A08',
      categoryNameThai: 'Approve',
      categoryNameEnglish: 'Approve',
      screens: approveScreens
    },
    {
      categoryCode: 'CO04A',
      categoryNameThai: 'Employee Self Service',
      categoryNameEnglish: 'Employee Self Service',
      screens: employeeSelfServiceScreens
    },
    {
      categoryCode: 'CO02A',
      categoryNameThai: 'Reports',
      categoryNameEnglish: 'Reports',
      screens: reportScreens
    },
    {
      categoryCode: 'CO05A',
      categoryNameThai: 'Terms Of Use',
      categoryNameEnglish: 'Terms Of Use',
      screens: termsOfUseScreens
    }
  ]
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): CompanyScreenDefinition | undefined {
  for (const category of COMPANY_MODULE_INVENTORY.mainCategories) {
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        const screen = subCategory.screens.find(s => s.menuCode === menuCode);
        if (screen) {
          return screen;
        }
      }
    }
    const screen = category.screens.find(s => s.menuCode === menuCode);
    if (screen) {
      return screen;
    }
  }
  return undefined;
}

/**
 * Helper function: Get screens by category code
 */
export function getScreensByCategoryCode(categoryCode: string): CompanyScreenDefinition[] {
  for (const category of COMPANY_MODULE_INVENTORY.mainCategories) {
    if (category.categoryCode === categoryCode) {
      return category.screens;
    }
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        if (subCategory.categoryCode === categoryCode) {
          return subCategory.screens;
        }
      }
    }
  }
  return [];
}

/**
 * Helper function: Get all screens
 */
export function getAllScreens(): CompanyScreenDefinition[] {
  const screens: CompanyScreenDefinition[] = [];
  for (const category of COMPANY_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

