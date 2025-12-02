/**
 * Appraisal Screens Constant
 * ข้อมูลหน้าจอ Appraisal Module จากระบบเก่า (JSP)
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
 * 1. Appraisal Type Screens (AS03A)
 */
const appraisalTypeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS010',
    menuNameThai: 'ทะเบียนประเภทการประเมิน',
    menuNameEnglish: 'Appraisal Type Table',
    jspFiles: [
      { filename: 'AS010.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_TYPE.APPRAISAL_TYPE_TABLE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 2. Appraisal Grade Screens (AS04A)
 */
const appraisalGradeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS015',
    menuNameThai: 'ทะเบียนกลุ่มเกรด',
    menuNameEnglish: 'Appraisal Grade',
    jspFiles: [
      { filename: 'AS015.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_GRADE.APPRAISAL_GRADE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS016',
    menuNameThai: 'ทะเบียนเกรด',
    menuNameEnglish: 'Grade Table',
    jspFiles: [
      { filename: 'AS016.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_GRADE.GRADE_TABLE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS020',
    menuNameThai: 'เกณฑ์การหักคะแนน',
    menuNameEnglish: 'Score Deduct Criteria',
    jspFiles: [
      { filename: 'AS020.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_GRADE.SCORE_DEDUCT_CRITERIA,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS018',
    menuNameThai: 'ทะเบียนกลุ่มการปรับเงินเดือน',
    menuNameEnglish: 'Grop Grade Salary adjustment',
    jspFiles: [
      { filename: 'AS018.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_GRADE.GROUP_GRADE_SALARY_ADJUSTMENT,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS019',
    menuNameThai: 'ทะเบียนเกรดการปรับเงินเดือน',
    menuNameEnglish: 'Grade Salary adjustment',
    jspFiles: [
      { filename: 'AS019.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_GRADE.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 3. Appraisal Topic Screens (AS05A)
 */
const appraisalTopicScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS002',
    menuNameThai: 'ทะเบียนกลุ่มหัวข้อประเมินผล',
    menuNameEnglish: 'Appraisal Category Table',
    jspFiles: [
      { filename: 'AS002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_TOPIC.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS030',
    menuNameThai: 'หัวข้อประเมินผล',
    menuNameEnglish: 'Appraisal Topic Table',
    jspFiles: [
      { filename: 'AS030.jsp', description: 'Main screen' },
      { filename: 'AS000.jsp', description: 'Related screen' },
      { filename: 'AS17_1.jsp', description: 'Related screen' },
      { filename: 'AS17_2.jsp', description: 'Related screen' },
      { filename: 'AS031.jsp', description: 'Related screen' },
      { filename: 'AS032.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_TOPIC.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 4. Appraisal Form Screens (AS06A)
 */
const appraisalFormScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS003',
    menuNameThai: 'ทะเบียนสร้างแบบฟอร์มประเมินผล',
    menuNameEnglish: 'Appraisal Form Table',
    jspFiles: [
      { filename: 'AS003.jsp', description: 'Main screen' },
      { filename: 'AS03_1.jsp', description: 'Related screen' },
      { filename: 'AS03HELP_2.jsp', description: 'Help screen' },
      { filename: 'AS03HELP_4.jsp', description: 'Help screen' },
      { filename: 'AS03HELP_3.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_FORM.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 5. Appraisal Form Type Screens (AS08A)
 */
const appraisalFormTypeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS011',
    menuNameThai: 'ทะเบียนประเภทฟอร์มการประเมิน',
    menuNameEnglish: 'Appraisal Form Type Table',
    jspFiles: [
      { filename: 'AS011.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_FORM_TYPE.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 6. Appraisal Document Screens (AS07A)
 */
const appraisalDocumentScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'ASP801',
    menuNameThai: 'กำหนดผู้อนุมัติเอกสารประเมินผล (process)',
    menuNameEnglish: 'Define Approvor (process)',
    jspFiles: [
      { filename: 'ASP801.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ASP802',
    menuNameThai: 'กำหนดผู้อนุมัติเอกสารประเมินผล ตามช่วงพนักงาน(process)',
    menuNameEnglish: 'Define Approvor By Employeelist (process)',
    jspFiles: [
      { filename: 'ASP802.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS300_KKB',
    menuNameThai: 'กำหนดผู้อนุมัติเอกสารประเมินผล',
    menuNameEnglish: 'Config Approvor',
    jspFiles: [
      { filename: 'AS300_KKB.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'KKB variant (company-specific)',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS004_4_M',
    menuNameThai: 'จัดการเอกสารประเมินผล',
    menuNameEnglish: 'Manage Appraisal Form',
    jspFiles: [
      { filename: 'AS004_4_M.jsp', description: 'Main screen' },
      { filename: 'AS09HELP2.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS004_4',
    menuNameThai: 'สร้างเอกสารประเมินผล',
    menuNameEnglish: 'Create Appraisal Form',
    jspFiles: [
      { filename: 'AS004_4.jsp', description: 'Main screen' },
      { filename: 'AS09HELP2.jsp', description: 'Help screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS300_KKB_AP',
    menuNameThai: 'เปลื่ยนผู้อนุมัติเอกสาร (หลังสร้างเอกสารแล้ว)',
    menuNameEnglish: 'Change Approvor (After Create Appraisal Documents)',
    jspFiles: [
      { filename: 'AS300_KKB_AP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'KKB variant (company-specific)',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS300_CKT',
    menuNameThai: 'เปลื่ยนผู้อนุมัติเอกสารหลายคน (หลังสร้างเอกสารแล้ว)',
    menuNameEnglish: 'Change Approvor Many People (After Create Appraisal Documents)',
    jspFiles: [
      { filename: 'AS300_CKT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'CKT variant (company-specific)',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ASP803',
    menuNameThai: 'Appraisal Group',
    menuNameEnglish: 'Appraisal Group',
    jspFiles: [
      { filename: 'ASP803.jsp', description: 'Main screen' },
      { filename: 'ASP803_PRO.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS105',
    menuNameThai: 'จัดการผู้อนุมัติและสถานะเอกสารประเมินผล',
    menuNameEnglish: 'Manage Approver and Status Appraisal Document',
    jspFiles: [
      { filename: 'AS105.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ASP800',
    menuNameThai: 'บันทึกข้อมูลการประเมินเป็นประวัติ',
    menuNameEnglish: 'Move appraisal data to history',
    jspFiles: [
      { filename: 'ASP800.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_DOCUMENT.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 7. Other Data Setup Screens (AS11A)
 */
const otherDataSetupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'KPICATEGSETUP',
    menuNameThai: 'MBO กำหนด KPIs Category',
    menuNameEnglish: 'MBO KPIs Category Setup',
    jspFiles: [
      { filename: 'KPICATEGSETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ASP100',
    menuNameThai: 'MBO กำหนดน้ำหนัก',
    menuNameEnglish: 'MBO Objective Weighting',
    jspFiles: [
      { filename: 'ASP100.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ASP101',
    menuNameThai: 'กำหนดน้ำหนัก KPIs',
    menuNameEnglish: 'KPIs Objective Weighting',
    jspFiles: [
      { filename: 'ASP101.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS102',
    menuNameThai: 'ข้อมูล KPIs',
    menuNameEnglish: 'KPIs Category',
    jspFiles: [
      { filename: 'AS102.jsp', description: 'Main screen' },
      { filename: 'AS102CH.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'APS200',
    menuNameThai: 'ข้อมูลคะแนนประเมินย้อนหลัง',
    menuNameEnglish: 'Grade History Detail',
    jspFiles: [
      { filename: 'APS200.jsp', description: 'Main screen' },
      { filename: 'APS200_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APS300',
    menuNameThai: 'สถิติการลางาน(.csv)',
    menuNameEnglish: 'Leave Record(.csv)',
    jspFiles: [
      { filename: 'APS300.jsp', description: 'Main screen' },
      { filename: 'APS300_IMPORT.jsp', description: 'Import screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APS301',
    menuNameThai: 'กำหนดรายชื่อพนักงานโดยตัวแทน(CKT)',
    menuNameEnglish: 'Define Approver By Admin(CKT)',
    jspFiles: [
      { filename: 'APS301.jsp', description: 'Main screen' },
      { filename: 'APS301_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'CKT variant (company-specific)',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OTHER_DATA_SETUP.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 8. Appraisal Period Screens (AS12A)
 */
const appraisalPeriodScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'UP_CONFIG',
    menuNameThai: 'กำหนดรอบการประเมินประจำปี',
    menuNameEnglish: 'Appraisal Annual Setting',
    jspFiles: [
      { filename: 'UP_CONFIG.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_PERIOD.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS101',
    menuNameThai: 'กำหนดรอบการประเมินตามช่วงเวลา',
    menuNameEnglish: 'Appraisal Period Setting',
    jspFiles: [
      { filename: 'AS101.jsp', description: 'Main screen' },
      { filename: 'AS101CH.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_PERIOD.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS103',
    menuNameThai: 'กำหนดการประเมินตามหน่วยงาน',
    menuNameEnglish: 'Appraisal Period Setting By Business Unit',
    jspFiles: [
      { filename: 'AS103.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_PERIOD.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'APS_CONFIG',
    menuNameThai: 'กำหนดรอบการประเมินแบบ 360 องศา',
    menuNameEnglish: '360 Degree Assessment Schedule',
    jspFiles: [
      { filename: 'APS_CONFIG.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.APPRAISAL_PERIOD.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 9. Admin Screens (AS10A)
 */
const adminScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'SET_OFF_ON',
    menuNameThai: 'กำหนดเปิดปิดหน้าจอ',
    menuNameEnglish: 'Set Off-On Screen',
    jspFiles: [
      { filename: 'SET_OFF_ON.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ASP709',
    menuNameThai: 'สถานะ / ส่งเมล์แจ้งผู้ประเมิน',
    menuNameEnglish: 'Status / E-Mail Remind Appraiser',
    jspFiles: [
      { filename: 'ASP709.jsp', description: 'Main screen' },
      { filename: 'ATTACH_FILE.jsp', description: 'Attach file screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APP_EMV_HR_T',
    menuNameThai: 'แก้ไขสถานะ / ผลการประเมิน',
    menuNameEnglish: 'Change Performance / Results Status',
    jspFiles: [
      { filename: 'APP_EMV_HR_T.jsp', description: 'Main screen' },
      { filename: 'APP_EMV_HR.jsp', description: 'Related screen' },
      { filename: 'AS004_HR_T.jsp', description: 'Related screen' },
      { filename: 'AS004_1_HR.jsp', description: 'Related screen' },
      { filename: 'AS004_2_HR.jsp', description: 'Related screen' },
      { filename: 'AS004_3_HR.jsp', description: 'Related screen' },
      { filename: 'EMPVIEW/APP_EMV707.jsp', description: 'Employee view screen' },
      { filename: 'EMPVIEW/APP_EMV706.jsp', description: 'Employee view screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APP_EMV_HIS_KPI',
    menuNameThai: 'ประวัติการประเมินผล(KPI)',
    menuNameEnglish: 'KPI History Record',
    jspFiles: [
      { filename: 'APP_EMV_HIS_KPI.jsp', description: 'Main screen' },
      { filename: 'EMPVIEW/APP_EMV707_HIS.jsp', description: 'Employee view history screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APP_EMV_HIS_KC',
    menuNameThai: 'ประวัติการประเมินผล(KC)',
    menuNameEnglish: 'KC History Record',
    jspFiles: [
      { filename: 'APP_EMV_HIS_KC.jsp', description: 'Main screen' },
      { filename: 'EMPVIEW/APP_EMV706_HIS.jsp', description: 'Employee view history screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS036',
    menuNameThai: 'หน้าจอกำหนดเกรด',
    menuNameEnglish: 'Setup Grade',
    jspFiles: [
      { filename: 'AS036.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APS360',
    menuNameThai: 'จัดการการประเมินแบบ 360 องศา',
    menuNameEnglish: 'Manage Performance 360 celsius',
    jspFiles: [
      { filename: 'APS360.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'APS_DEL360',
    menuNameThai: 'ลบข้อมูลการประเมินผลหน่วยงาน(ปัจจุบัน)',
    menuNameEnglish: 'Delete Performance Results (Current)',
    jspFiles: [
      { filename: 'APS_DEL360.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ASP711',
    menuNameThai: 'กำหนดกลุ่มการประเมินแบบ 360 องศา',
    menuNameEnglish: 'Determine the 360 degree evaluation group',
    jspFiles: [
      { filename: 'ASP711.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ASP712',
    menuNameThai: 'คำนวณก่อนออกรายงานสรุปภาพรวมคะแนนประเมินผล 360 องศา',
    menuNameEnglish: 'calculate Summary Report 360 Degree',
    jspFiles: [
      { filename: 'ASP712.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.ADMIN.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 10. OKR Appraisal Screens (AS50A)
 */
const okrAppraisalScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'AS03A001',
    menuNameThai: 'ทะเบียนประเภทการประเมิน',
    menuNameEnglish: 'Appraisal Type Table',
    jspFiles: [
      { filename: 'AS03A001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS07A001',
    menuNameThai: 'กำหนดผู้อนุมัติเอกสารประเมินผล',
    menuNameEnglish: 'Define Approver',
    jspFiles: [
      { filename: 'AS07A001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS07A002',
    menuNameThai: 'สร้างเอกสารประเมินผล',
    menuNameEnglish: 'Create Appraisal Form',
    jspFiles: [
      { filename: 'AS07A002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS07A003',
    menuNameThai: 'เปลื่ยนผู้อนุมัติเอกสาร (หลังสร้างเอกสารแล้ว)',
    menuNameEnglish: 'Change Approver (After Create Appraisal Documents)',
    jspFiles: [
      { filename: 'AS07A003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'AS07A004',
    menuNameThai: 'บันทึกข้อมูลการประเมินเป็นประวัติ',
    menuNameEnglish: 'Move Appraisal Data to History',
    jspFiles: [
      { filename: 'AS07A004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'AS50A001',
    menuNameThai: 'กำหนดช่วงเวลาการกำหนดหัวข้อ/ปรับหัวข้อ',
    menuNameEnglish: 'Config OKR Subject Period',
    jspFiles: [
      { filename: 'AS50A001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS50A002',
    menuNameThai: 'กำหนดช่วงเวลาการประเมินผลการปฏิบัติงาน',
    menuNameEnglish: 'Config OKR Appraisal Period',
    jspFiles: [
      { filename: 'AS50A002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'AS50B001',
    menuNameThai: 'รายงานการกำหนดตัวชี้วัดผล (KRIs) ประจำปี',
    menuNameEnglish: 'KRIs Yearly Report',
    jspFiles: [
      { filename: 'AS50B001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Report screen but included as it\'s part of OKR module',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'AS50B002',
    menuNameThai: 'ประวัติการกำหนดตัวชี้วัดผล (KRIs)',
    menuNameEnglish: 'KRIs History Report',
    jspFiles: [
      { filename: 'AS50B002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Report screen but included as it\'s part of OKR module',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'AS50B003',
    menuNameThai: 'รายงานการประเมินผล OKR ประจำปี',
    menuNameEnglish: 'OKR Appraisal Yearly Report',
    jspFiles: [
      { filename: 'AS50B003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Report screen but included as it\'s part of OKR module',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'AS50B004',
    menuNameThai: 'ประวัติการประเมินผล OKR',
    menuNameEnglish: 'OKR Appraisal History Report',
    jspFiles: [
      { filename: 'AS50B004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Report screen but included as it\'s part of OKR module',
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.OKR_APPRAISAL.BASE,
    screenType: ScreenType.REPORT
  })
];

/**
 * 11. Terms Of Use Screens (AS14)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'MODULE_MANUAL',
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
    basePath: 'hrAppWeb.war/APPRAISAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.APPRAISAL.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Categories
 */
const appraisalTypeCategory: ScreenCategory = {
  categoryCode: 'AS03A',
  categoryNameThai: 'ทะเบียนประเภทการประเมิน',
  categoryNameEnglish: 'Appraisal Type',
  screens: appraisalTypeScreens
};

const appraisalGradeCategory: ScreenCategory = {
  categoryCode: 'AS04A',
  categoryNameThai: 'ทะเบียนเกรดประเมินผล',
  categoryNameEnglish: 'Appraisal Grade',
  screens: appraisalGradeScreens
};

const appraisalTopicCategory: ScreenCategory = {
  categoryCode: 'AS05A',
  categoryNameThai: 'ทะเบียนหัวข้อประเมินผล',
  categoryNameEnglish: 'Appraisal Topic',
  screens: appraisalTopicScreens
};

const appraisalFormCategory: ScreenCategory = {
  categoryCode: 'AS06A',
  categoryNameThai: 'ทะเบียนแบบฟอร์มประเมินผล',
  categoryNameEnglish: 'Appraisal Form',
  screens: appraisalFormScreens
};

const appraisalFormTypeCategory: ScreenCategory = {
  categoryCode: 'AS08A',
  categoryNameThai: 'ทะเบียนประเภทฟอร์มการประเมิน',
  categoryNameEnglish: 'Appraisal Form Type',
  screens: appraisalFormTypeScreens
};

const appraisalDocumentCategory: ScreenCategory = {
  categoryCode: 'AS07A',
  categoryNameThai: 'ทะเบียนเอกสารประเมินผล',
  categoryNameEnglish: 'Appraisal Document',
  screens: appraisalDocumentScreens
};

const otherDataSetupCategory: ScreenCategory = {
  categoryCode: 'AS11A',
  categoryNameThai: 'จัดการข้อมูลอื่นๆ',
  categoryNameEnglish: 'Other Data Setup',
  screens: otherDataSetupScreens
};

const appraisalPeriodCategory: ScreenCategory = {
  categoryCode: 'AS12A',
  categoryNameThai: 'รอบการประเมิน',
  categoryNameEnglish: 'Appraisal Period',
  screens: appraisalPeriodScreens
};

const adminCategory: ScreenCategory = {
  categoryCode: 'AS10A',
  categoryNameThai: 'Admin',
  categoryNameEnglish: 'Admin',
  screens: adminScreens
};

const okrAppraisalCategory: ScreenCategory = {
  categoryCode: 'AS50A',
  categoryNameThai: 'การประเมินผลการปฏิบัติงาน OKR ประจำปี',
  categoryNameEnglish: 'Objectives and Key Results Appraisal',
  screens: okrAppraisalScreens
};

const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'AS14',
  categoryNameThai: 'แนะนำการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Appraisal Module Inventory
 * ข้อมูลทั้งหมดของ Appraisal Module
 */
export const APPRAISAL_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'AS',
  moduleName: 'Appraisal',
  basePath: 'hrAppWeb.war/APPRAISAL/',
  totalScreens: 60, // Total: 1 (Type) + 5 (Grade) + 2 (Topic) + 1 (Form) + 1 (Form Type) + 10 (Document) + 7 (Other Data) + 4 (Period) + 11 (Admin) + 11 (OKR) + 1 (Terms) = 54 screens
  mainCategories: [
    appraisalTypeCategory,
    appraisalGradeCategory,
    appraisalTopicCategory,
    appraisalFormCategory,
    appraisalFormTypeCategory,
    appraisalDocumentCategory,
    otherDataSetupCategory,
    appraisalPeriodCategory,
    adminCategory,
    okrAppraisalCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'Appraisal Type': 1,
    'Appraisal Grade': 5,
    'Appraisal Topic': 2,
    'Appraisal Form': 1,
    'Appraisal Form Type': 1,
    'Appraisal Document': 10,
    'Other Data Setup': 7,
    'Appraisal Period': 4,
    'Admin': 11,
    'OKR Appraisal': 11,
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

  for (const category of APPRAISAL_MODULE_INVENTORY.mainCategories) {
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

  for (const category of APPRAISAL_MODULE_INVENTORY.mainCategories) {
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
  for (const category of APPRAISAL_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

