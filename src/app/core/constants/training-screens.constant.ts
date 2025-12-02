/**
 * Training Screens Constant
 * ข้อมูลหน้าจอ Training Module จากระบบเก่า (JSP)
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
 * 1.1.1 Courses Setup Screens (TR01011)
 */
const coursesSetupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR0101101',
    menuNameThai: 'ทะเบียนประเภทหลักสูตร',
    menuNameEnglish: 'Course types',
    jspFiles: [
      { filename: 'TRA001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.COURSE_TYPES,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101102',
    menuNameThai: 'ทะเบียนกลุ่มหลักสูตร',
    menuNameEnglish: 'Course groups',
    jspFiles: [
      { filename: 'TRA0021.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.COURSE_GROUPS,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101103',
    menuNameThai: 'ทะเบียนสาขาหลักสูตร',
    menuNameEnglish: 'Course Categories',
    jspFiles: [
      { filename: 'TRA044.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.COURSE_CATEGORIES,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101104',
    menuNameThai: 'ทะเบียนประเภทการอบรม',
    menuNameEnglish: 'Training Type Table',
    jspFiles: [
      { filename: 'TRA002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.TRAINING_TYPE_TABLE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101107',
    menuNameThai: 'ทะเบียนหลักสูตร',
    menuNameEnglish: 'Courses/ Program',
    jspFiles: [
      { filename: 'TRA004.jsp', description: 'Main screen' },
      { filename: 'TRA004_1.jsp', description: 'Related screen' },
      { filename: 'TRA004_2.jsp', description: 'Related screen' },
      { filename: 'TRA004_3.jsp', description: 'Related screen' },
      { filename: 'TRA004_1C.jsp', description: 'Child screen' },
      { filename: 'TRA004_2C.jsp', description: 'Child screen' },
      { filename: 'TRA004_3C.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Complex screen with multiple related pages',
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.COURSES_PROGRAM,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101105',
    menuNameThai: 'ทะเบียนประเภทการฝึก',
    menuNameEnglish: 'DSD Training Type',
    jspFiles: [
      { filename: 'TRA045.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.COURSES.DSD_TRAINING_TYPE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.1.2 Other Master Setup Screens (TR01012)
 */
const otherMasterSetupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR0101201',
    menuNameThai: 'ทะเบียนกลุ่มค่าใช้จ่าย',
    menuNameEnglish: 'Group of Expense',
    jspFiles: [
      { filename: 'TRA036A.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TRA036B',
    menuNameThai: 'ทะเบียนค่าใช้จ่าย',
    menuNameEnglish: 'Expenses',
    jspFiles: [
      { filename: 'TRA036B.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101202',
    menuNameThai: 'ทะเบียนอุปกรณ์',
    menuNameEnglish: 'Equipments',
    jspFiles: [
      { filename: 'TRA010.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101203',
    menuNameThai: 'ทะเบียนวิทยากร',
    menuNameEnglish: 'Course Instructors',
    jspFiles: [
      { filename: 'TRE003.jsp', description: 'Main screen' },
      { filename: 'TRE003_1.jsp', description: 'Related screen' },
      { filename: 'TRE003_2.jsp', description: 'Related screen' },
      { filename: 'TRE003_3.jsp', description: 'Related screen' },
      { filename: 'TRE003_4.jsp', description: 'Related screen' },
      { filename: 'TRE003_5.jsp', description: 'Related screen' },
      { filename: 'TRE003_6.jsp', description: 'Related screen' },
      { filename: 'UPLOADFILE.jsp', description: 'File upload screen' },
      { filename: 'DELETEFILE.jsp', description: 'File delete screen' },
      { filename: 'TRE003_7.jsp', description: 'Related screen' },
      { filename: 'TRE003_8.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Complex screen with file upload functionality',
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101204',
    menuNameThai: 'ทะเบียนสถาบันที่จัดอบรม',
    menuNameEnglish: 'Training Academy',
    jspFiles: [
      { filename: 'TRA008.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101205',
    menuNameThai: 'ทะเบียนสถานที่อบรม',
    menuNameEnglish: 'Training Location',
    jspFiles: [
      { filename: 'TRA006NEW.jsp', description: 'Main screen' },
      { filename: 'TRA007.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.1.3 Evaluation/Assessment Setup Screens (TR01013)
 */
const evaluationSetupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR0101301',
    menuNameThai: 'ทะเบียนสถานะการฝึกอบรม',
    menuNameEnglish: 'Training Status',
    jspFiles: [
      { filename: 'TRA003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101302',
    menuNameThai: 'ทะเบียนกลุ่มหัวข้อการประเมิน',
    menuNameEnglish: 'Group Evaluation',
    jspFiles: [
      { filename: 'TRM001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR01013021',
    menuNameThai: 'ทะเบียนกลุ่มย่อยหัวข้อการประเมิน',
    menuNameEnglish: 'Sub Group Evaluation',
    jspFiles: [
      { filename: 'TRA0056.jsp', description: 'Main screen' },
      { filename: 'TRA0055.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101303',
    menuNameThai: 'ทะเบียนแบบฟอร์มประเมิน',
    menuNameEnglish: 'Evaluation Form Report',
    jspFiles: [
      { filename: 'TRE010.jsp', description: 'Main screen' },
      { filename: 'TRH006.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR0101304',
    menuNameThai: 'ทะเบียบแบบฟอร์มสำรวจความจำเป็นในการฝึกอบรม',
    menuNameEnglish: 'Training Survey Form',
    jspFiles: [
      { filename: 'TRE021.jsp', description: 'Main screen' },
      { filename: 'PRU084_A.jsp', description: 'Related screen' },
      { filename: 'PRU084_B.jsp', description: 'Related screen' },
      { filename: 'TRE021_DEMO.jsp', description: 'Demo screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TRE022',
    menuNameThai: 'ทะเบียนผลการสำรวจการฝึกอบรม',
    menuNameEnglish: 'Registration of training results',
    jspFiles: [
      { filename: 'TRE022.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.SETUP.OTHER_MASTER.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.2 Evaluation Process Screens (TR0102)
 */
const evaluationProcessScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR010201',
    menuNameThai: 'กำหนดแผนการอบรมตามพนักงาน',
    menuNameEnglish: 'Define Training Plan for Employee',
    jspFiles: [
      { filename: 'TRE002.jsp', description: 'Main screen' },
      { filename: 'TRE002_1.jsp', description: 'Related screen' },
      { filename: 'TRE002_2.jsp', description: 'Related screen' },
      { filename: 'TRE002H.jsp', description: 'History screen' },
      { filename: 'TRE002T.jsp', description: 'Related screen' },
      { filename: 'TRE002_Recurrent.jsp', description: 'Recurrent screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.EVALUATION_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010202',
    menuNameThai: 'ประมวลผลแผนการอบรมตามหลักสูตร',
    menuNameEnglish: 'Course Resulting',
    jspFiles: [
      { filename: 'TRA051.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.EVALUATION_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TR010209',
    menuNameThai: 'กำหนดเงื่อนไขหลักสูตร',
    menuNameEnglish: 'Set up Course Profile Condition',
    jspFiles: [
      { filename: 'TRA061.jsp', description: 'Main screen' },
      { filename: 'TRA061HELP.jsp', description: 'Help screen' },
      { filename: 'TRA061EXP.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.EVALUATION_PROCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TR010203',
    menuNameThai: 'กำหนดแผนการอบรมตามหลักสูตร',
    menuNameEnglish: 'Define Training Plan for Course',
    jspFiles: [
      { filename: 'TRA058.jsp', description: 'Main screen' },
      { filename: 'TRA058H.jsp', description: 'History screen' },
      { filename: 'TRA058_2.jsp', description: 'Related screen' },
      { filename: 'TRA058_1.jsp', description: 'Related screen' },
      { filename: 'TRA058T.jsp', description: 'Related screen' },
      { filename: 'PRU084__TRA058.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.EVALUATION_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.3 Transaction Screens (TR0103)
 */
const transactionScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR010312',
    menuNameThai: 'สำรวจการขออบรม',
    menuNameEnglish: 'Surveying Training Request',
    jspFiles: [
      { filename: 'TRA037.jsp', description: 'Main screen' },
      { filename: 'TRA037_S.jsp', description: 'Search screen' },
      { filename: 'TRA037_1.jsp', description: 'Related screen' },
      { filename: 'TRA038.jsp', description: 'Related screen' },
      { filename: 'TRA039.jsp', description: 'Related screen' },
      { filename: 'TRA0132.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010302',
    menuNameThai: 'รายชื่อพนักงานตามแผนการอบรม',
    menuNameEnglish: 'Employee List Corresponding in Training Plan',
    jspFiles: [
      { filename: 'TRA043_1.jsp', description: 'Main screen' },
      { filename: 'TRA043_2.jsp', description: 'Related screen' },
      { filename: 'TRA043_3.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010308',
    menuNameThai: 'เปิดการอบรม',
    menuNameEnglish: 'Opening Training Session',
    jspFiles: [
      { filename: 'TRA011_PHATRA.jsp', description: 'Main screen' },
      { filename: 'TRH003_3H.jsp', description: 'History screen' },
      { filename: 'TRA012_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRH002_2H.jsp', description: 'History screen' },
      { filename: 'TRA021.jsp', description: 'Related screen' },
      { filename: 'TRA0212.jsp', description: 'Related screen' },
      { filename: 'TRA0211.jsp', description: 'Related screen' },
      { filename: 'TRA0213.jsp', description: 'Related screen' },
      { filename: 'TRA0214.jsp', description: 'Related screen' },
      { filename: 'TRA0215.jsp', description: 'Related screen' },
      { filename: 'TRA0216.jsp', description: 'Related screen' },
      { filename: 'TRA0121_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0122_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0123_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0124_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0125_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0125_EXCEL.jsp', description: 'Excel export screen' },
      { filename: 'TRA0125_EXCEL_APF.jsp', description: 'Excel export screen (APF)' },
      { filename: 'TRA0126_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0121E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0122E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0123E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0124E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0125E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0126E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0129H_PHATRA.jsp', description: 'History screen' },
      { filename: 'TRA0128H_PHATRA.jsp', description: 'History screen' },
      { filename: 'TRA0126T_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA035_S.jsp', description: 'Search screen' },
      { filename: 'TRA0130_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0130H_PHATRA.jsp', description: 'History screen' },
      { filename: 'TRA0130T_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA012_P1.jsp', description: 'Related screen' },
      { filename: 'TRA012_P2.jsp', description: 'Related screen' },
      { filename: 'TRA012_P1_OPT.jsp', description: 'Option screen' },
      { filename: 'TRA012_P2_OPT.jsp', description: 'Option screen' },
      { filename: 'TRA200.jsp', description: 'Related screen' },
      { filename: 'TRA021_CH.jsp', description: 'Related screen' },
      { filename: 'TRA0212_CH.jsp', description: 'Related screen' },
      { filename: 'TRA0130E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA0131H_PHATRA.jsp', description: 'History screen' },
      { filename: 'TRA0127.jsp', description: 'Related screen' },
      { filename: 'TRA0127E.jsp', description: 'Edit screen' },
      { filename: 'TRA0128.jsp', description: 'Related screen' },
      { filename: 'TRA0129.jsp', description: 'Related screen' },
      { filename: 'TRA0129E.jsp', description: 'Edit screen' },
      { filename: 'TRA0133.jsp', description: 'Related screen' },
      { filename: 'TRA0133E.jsp', description: 'Edit screen' },
      { filename: 'fckeditor/INDEX.jsp', description: 'FCK Editor' },
      { filename: 'TRA012_ONLINE.jsp', description: 'Online screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Very complex screen with many related pages and company-specific variants',
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010304',
    menuNameThai: 'อนุมัติการจอง',
    menuNameEnglish: 'Approved Reserve',
    jspFiles: [
      { filename: 'TRA011C.jsp', description: 'Main screen' },
      { filename: 'TRE004.jsp', description: 'Related screen' },
      { filename: 'TRA011_S.jsp', description: 'Search screen' },
      { filename: 'TRE004_1.jsp', description: 'Related screen' },
      { filename: 'TRA0212.jsp', description: 'Related screen' },
      { filename: 'TRH001.jsp', description: 'Related screen' },
      { filename: 'TRH001_1.jsp', description: 'Related screen' },
      { filename: 'TRE004M.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010305',
    menuNameThai: 'แบบประเมินการอบรมตามรุ่น',
    menuNameEnglish: 'Course Training Evaluation Form',
    jspFiles: [
      { filename: 'TRE011.jsp', description: 'Main screen' },
      { filename: 'TRE011H1.jsp', description: 'History screen' },
      { filename: 'TRE012.jsp', description: 'Related screen' },
      { filename: 'TRE011G.jsp', description: 'Related screen' },
      { filename: 'TRE011_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010309',
    menuNameThai: 'ปิดการอบรม',
    menuNameEnglish: 'Closing Training',
    jspFiles: [
      { filename: 'TRA026_PHATRA.jsp', description: 'Main screen' },
      { filename: 'TRH003_3H.jsp', description: 'History screen' },
      { filename: 'TRA0252_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA0252E.jsp', description: 'Edit screen' },
      { filename: 'TRA02522E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRH002_2H.jsp', description: 'History screen' },
      { filename: 'TRA0212.jsp', description: 'Related screen' },
      { filename: 'TRA02522_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA02525_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA02526_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRA02526E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRA02525E_PHATRA.jsp', description: 'Edit screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010313',
    menuNameThai: 'สำรวจการขออบรมภายใน',
    menuNameEnglish: 'Surveying Training In-House Request',
    jspFiles: [
      { filename: 'TRA062.jsp', description: 'Main screen' },
      { filename: 'TRA062_1.jsp', description: 'Related screen' },
      { filename: 'TRA062_S.jsp', description: 'Search screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.4 History Screens (TR0104)
 */
const historyScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR010401',
    menuNameThai: 'บันทึกประวัติการอบรม(ตามหลักสูตร)(Old)',
    menuNameEnglish: 'Recording Course Training History(Old)',
    jspFiles: [
      { filename: 'TRE005.jsp', description: 'Main screen (with clean parameter)' },
      { filename: 'TRE005_1.jsp', description: 'Related screen' },
      { filename: 'TRE005_1C.jsp', description: 'Child screen' },
      { filename: 'TRE005_2.jsp', description: 'Related screen' },
      { filename: 'TRE005_2C.jsp', description: 'Child screen' },
      { filename: 'TRE005_3.jsp', description: 'Related screen' },
      { filename: 'TRE005_3C.jsp', description: 'Child screen' },
      { filename: 'TRE005_4.jsp', description: 'Related screen' },
      { filename: 'TRE005_4C.jsp', description: 'Child screen' },
      { filename: 'TRE005_5.jsp', description: 'Related screen' },
      { filename: 'TRE005_5C.jsp', description: 'Child screen' },
      { filename: 'TRE005_6.jsp', description: 'Related screen' },
      { filename: 'TRE005_6C.jsp', description: 'Child screen' },
      { filename: 'TRE005_7.jsp', description: 'Related screen' },
      { filename: 'TRE005_7E.jsp', description: 'Edit screen' },
      { filename: 'TRE005_7C.jsp', description: 'Child screen' },
      { filename: 'TRE005_7D.jsp', description: 'Related screen' },
      { filename: 'TRE005_7Z.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Legacy version, complex screen with many child pages',
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010407',
    menuNameThai: 'บันทึกประวัติการอบรม(ตามหลักสูตร)',
    menuNameEnglish: 'Training History by Class',
    jspFiles: [
      { filename: 'TRA011HIS.jsp', description: 'Main screen' },
      { filename: 'TRE005_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_1_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_1C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_2_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_2C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_3_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_3C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_4_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_4C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_5_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_5C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_6_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_6C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_7_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_7E_PHATRA.jsp', description: 'Edit screen' },
      { filename: 'TRE005_7C_PHATRA.jsp', description: 'Child screen' },
      { filename: 'TRE005_7D_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRE005_7Z_PHATRA.jsp', description: 'Related screen' },
      { filename: 'TRH002_3H.jsp', description: 'History screen' },
      { filename: 'TRA0212_H.jsp', description: 'History screen' },
      { filename: 'TRA0212_CHIS.jsp', description: 'History screen' },
      { filename: 'TRA011_S.jsp', description: 'Search screen' },
      { filename: 'TRA011_HTRN.jsp', description: 'History screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Current version, complex screen with many related pages',
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010402',
    menuNameThai: 'ประวัติการเป็นวิทยากร',
    menuNameEnglish: 'Instructor Experiences History',
    jspFiles: [
      { filename: 'TRE006.jsp', description: 'Main screen' },
      { filename: 'TRE006C.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010403',
    menuNameThai: 'ประวัติการประเมินตามรุ่น',
    menuNameEnglish: 'Evaluation History',
    jspFiles: [
      { filename: 'TRH010.jsp', description: 'Main screen' },
      { filename: 'TRE012_H.jsp', description: 'History screen' },
      { filename: 'TRE014_H.jsp', description: 'History screen' },
      { filename: 'TRE012_TNR_H.jsp', description: 'History screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010404',
    menuNameThai: 'ประวัติการอบรมตามพนักงาน',
    menuNameEnglish: 'Training History by Employee',
    jspFiles: [
      { filename: 'TRH011.jsp', description: 'Main screen' },
      { filename: 'TRH003_6H.jsp', description: 'History screen' },
      { filename: 'TRH011_T.jsp', description: 'Related screen' },
      { filename: 'TRH011_A.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010405',
    menuNameThai: 'ประวัติการอบรมตามหลักสูตร',
    menuNameEnglish: 'Training History by course',
    jspFiles: [
      { filename: 'TRH012.jsp', description: 'Main screen' },
      { filename: 'TRE002H.jsp', description: 'History screen' },
      { filename: 'TRE002_2.jsp', description: 'Related screen' },
      { filename: 'TRE002.jsp', description: 'Related screen' },
      { filename: 'TRH012_1.jsp', description: 'Related screen' },
      { filename: 'TRH012_2.jsp', description: 'Related screen' },
      { filename: 'TRH012_3.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TR010406',
    menuNameThai: 'หนังสือรับรองหลักสูตร',
    menuNameEnglish: 'Certicate',
    jspFiles: [
      { filename: 'TRE020.jsp', description: 'Main screen' },
      { filename: 'TRE020_1.jsp', description: 'Related screen' },
      { filename: 'TRE020_2.jsp', description: 'Related screen' },
      { filename: 'TRRE022.jsp', description: 'Related screen' },
      { filename: 'TRRE023.jsp', description: 'Related screen' },
      { filename: 'ASR002.jsp', description: 'Related screen' },
      { filename: 'TRRE025.jsp', description: 'Related screen' },
      { filename: 'TRRE004.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 2. Terms Of Use Screens (TR055)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TR05501',
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
    basePath: 'hrAppWeb.war/TRAINING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TRAINING.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Categories
 */
const coursesSetupCategory: ScreenCategory = {
  categoryCode: 'TR01011',
  categoryNameThai: 'หลักสูตร',
  categoryNameEnglish: 'Courses',
  screens: coursesSetupScreens
};

const otherMasterSetupCategory: ScreenCategory = {
  categoryCode: 'TR01012',
  categoryNameThai: 'Master Data อื่นๆ',
  categoryNameEnglish: 'Other Master',
  screens: otherMasterSetupScreens
};

const evaluationSetupCategory: ScreenCategory = {
  categoryCode: 'TR01013',
  categoryNameThai: 'การประเมิน/การสำรวจ',
  categoryNameEnglish: 'Evaluation/ Assessment',
  screens: evaluationSetupScreens
};

const setupCategory: ScreenCategory = {
  categoryCode: 'TR0101',
  categoryNameThai: 'ตั้งค่า (Master Data)',
  categoryNameEnglish: 'Setup (Master Data)',
  screens: [],
  subCategories: [
    coursesSetupCategory,
    otherMasterSetupCategory,
    evaluationSetupCategory
  ]
};

const evaluationProcessCategory: ScreenCategory = {
  categoryCode: 'TR0102',
  categoryNameThai: 'กระบวนการประเมิน',
  categoryNameEnglish: 'Evaluation Process',
  screens: evaluationProcessScreens
};

const transactionCategory: ScreenCategory = {
  categoryCode: 'TR0103',
  categoryNameThai: 'รายการ',
  categoryNameEnglish: 'Transaction',
  screens: transactionScreens
};

const historyCategory: ScreenCategory = {
  categoryCode: 'TR0104',
  categoryNameThai: 'ประวัติ',
  categoryNameEnglish: 'History',
  screens: historyScreens
};

const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'TR055',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Human Resources Category (Parent)
 */
const humanResourcesCategory: ScreenCategory = {
  categoryCode: 'TR01',
  categoryNameThai: 'ทรัพยากรบุคคล',
  categoryNameEnglish: 'Human Resources',
  screens: [],
  subCategories: [
    setupCategory,
    evaluationProcessCategory,
    transactionCategory,
    historyCategory
  ]
};

/**
 * Training Module Inventory
 * ข้อมูลทั้งหมดของ Training Module
 */
export const TRAINING_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'TR',
  moduleName: 'Training',
  basePath: 'hrAppWeb.war/TRAINING/',
  totalScreens: 150, // Total: 6 (Courses Setup) + 6 (Other Master) + 6 (Evaluation Setup) + 4 (Evaluation Process) + 7 (Transaction) + 6 (History) + 1 (Terms) = 36 screens
  mainCategories: [
    humanResourcesCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'Setup (Master Data)': 18,
    'Evaluation Process': 4,
    'Transaction (Operations)': 7,
    'History': 6,
    'Terms Of Use': 1
  }
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): ScreenDefinition | undefined {
  function searchInCategory(category: ScreenCategory): ScreenDefinition | undefined {
    // Search in current category screens
    const screen = category.screens.find(s => s.menuCode === menuCode);
    if (screen) {
      return screen;
    }
    // Search in subCategories
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

  for (const category of TRAINING_MODULE_INVENTORY.mainCategories) {
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

  for (const category of TRAINING_MODULE_INVENTORY.mainCategories) {
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
  for (const category of TRAINING_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
        if (subCategory.subCategories) {
          for (const subSubCategory of subCategory.subCategories) {
            screens.push(...subSubCategory.screens);
          }
        }
      }
    }
  }
  return screens;
}

