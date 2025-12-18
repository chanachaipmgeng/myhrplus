/**
 * Settings Screens Constant
 * ข้อมูลหน้าจอ Settings Module จากระบบเก่า (JSP)
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
 * 1.1 Email Reminder Settings Screens (ST01A0103)
 */
const emailReminderScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'REM001',
    menuNameThai: 'ทะเบียนอีเมล์',
    menuNameEnglish: 'Email Master',
    jspFiles: [
      { filename: 'REM001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.EMAIL_MASTER,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM002',
    menuNameThai: 'รูปแบบและเนื้อหาอีเมล์',
    menuNameEnglish: 'Setting Email Template and Content',
    jspFiles: [
      { filename: 'REM002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.EMAIL_TEMPLATE_CONTENT,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM003',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ทดลองงาน)',
    menuNameEnglish: 'Notifications of Probation Period',
    jspFiles: [
      { filename: 'REM003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.PROBATION_PERIOD_NOTIFICATION,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM004',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ประมวลผลพนักงานใหม่)',
    menuNameEnglish: 'Notifications of New Hire',
    jspFiles: [
      { filename: 'REM004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.NEW_HIRE_NOTIFICATION,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM005',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ประมวลผลพนักงานลาออก)',
    menuNameEnglish: 'Notifications of Resign',
    jspFiles: [
      { filename: 'REM005.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM006',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (การอบรมซ้ำ)',
    menuNameEnglish: 'Notifications of Recurrent Training',
    jspFiles: [
      { filename: 'REM006.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM007',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (เอกสารอ้างอิง)',
    menuNameEnglish: 'Notifications of Document Reference',
    jspFiles: [
      { filename: 'REM007.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM008',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ครบกำหนดเกษียณอายุงาน)',
    menuNameEnglish: 'Notifications of Job Retire',
    jspFiles: [
      { filename: 'REM008.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM009',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ข้อมูลบัตรต่างๆ)',
    menuNameEnglish: 'Notifications of Register Other Card',
    jspFiles: [
      { filename: 'REM009.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM010',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (พนักงานสายหรือออกก่อนเวลา)',
    menuNameEnglish: 'Notifications of Empolyee Late or Early Departure',
    jspFiles: [
      { filename: 'REM010.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM011',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (พนักงานขาดงาน)',
    menuNameEnglish: 'Notifications of Employee Absent',
    jspFiles: [
      { filename: 'REM011.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'REM012',
    menuNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน (ขาด ลา)',
    menuNameEnglish: 'Notifications of Empolyee Discrepancies',
    jspFiles: [
      { filename: 'REM012.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.EMAIL_REMINDER.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.2 User Setting Screens (ST01A01)
 */
const userSettingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'ADDKEYWORDGROUP',
    menuNameThai: 'กลุ่มรหัสผ่านที่ไม่ต้องการ',
    menuNameEnglish: 'keyword group',
    jspFiles: [
      { filename: 'ADDKEYWORDGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ADDKEYWORD',
    menuNameThai: 'รหัสผ่านที่ไม่ต้องการ',
    menuNameEnglish: 'keyword',
    jspFiles: [
      { filename: 'ADDKEYWORD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ADDROLE',
    menuNameThai: 'กำหนดข้อจำกัดการสร้างชื่อผู้ใช้',
    menuNameEnglish: 'User Role',
    jspFiles: [
      { filename: 'ADDROLE.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ADDUSER',
    menuNameThai: 'สร้างผู้ใช้งาน',
    menuNameEnglish: 'Create User Profile',
    jspFiles: [
      { filename: 'ADDUSER.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'CHGPWD',
    menuNameThai: 'กำหนดรหัสผ่าน',
    menuNameEnglish: 'Set password',
    jspFiles: [
      { filename: 'CHGPWD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'SECURITY',
    menuNameThai: 'กำหนดสิทธิการเข้าถึงข้อมูล (พนักงาน)',
    menuNameEnglish: 'Setting Data Access Permissions (Emp)',
    jspFiles: [
      { filename: 'SECURITY.jsp', description: 'Main screen' },
      { filename: 'SECURITYHELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'EMPCENTER',
    menuNameThai: 'นำเข้ารายชื่อพนักงานของ EmpCenter',
    menuNameEnglish: 'EmpCenter',
    jspFiles: [
      { filename: 'EMPCENTER.jsp', description: 'Main screen' },
      { filename: 'EMPCENTERHELP.jsp', description: 'Help screen' },
      { filename: 'EMPCENTERSTCHELP.jsp', description: 'Setup help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'MNGUSER',
    menuNameThai: 'จัดการผู้ใช้งาน',
    menuNameEnglish: 'Manage Users',
    jspFiles: [
      { filename: 'SM1013.jsp', description: 'Main screen' },
      { filename: 'SM1012.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'SM1014',
    menuNameThai: 'นำเข้าผู้ใช้งาน (เอ็กเซล)',
    menuNameEnglish: 'Import Users',
    jspFiles: [
      { filename: 'SM1014.jsp', description: 'Main screen' },
      { filename: 'SM1014_IMPORT.jsp', description: 'Import screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'SETHELPFILE',
    menuNameThai: 'จัดการหน้าช่วยเหลือ',
    menuNameEnglish: 'Help Page Setup',
    jspFiles: [
      { filename: 'SETHELPFILE.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ST01A0116',
    menuNameThai: 'นำเข้าปรับปรุงข้อมูลผู้ใช้งาน',
    menuNameEnglish: 'Import Update User Data',
    jspFiles: [
      { filename: 'ST01A0116.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.3 System Access Permissions Screens (ST01A04)
 */
const systemAccessScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'GLOBALMENU',
    menuNameThai: 'กำหนดสิทธิ์การเข้าใช้งาน',
    menuNameEnglish: 'Module Access Permissions',
    jspFiles: [
      { filename: 'GLOBALMENU.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'COMGROUP',
    menuNameThai: 'การกำหนดข้อมูลองค์กร',
    menuNameEnglish: 'Organization Information',
    jspFiles: [
      { filename: 'COMGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PSNGROUP',
    menuNameThai: 'การจัดการข้อมูลพนักงาน',
    menuNameEnglish: 'Personal Information',
    jspFiles: [
      { filename: 'PSNGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TIMEGROUP',
    menuNameThai: 'การจัดการเวลาทำงาน',
    menuNameEnglish: 'Time Attendance',
    jspFiles: [
      { filename: 'TIMEGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PAYROLLGROUP',
    menuNameThai: 'การจัดการค่าจ้าง',
    menuNameEnglish: 'Payroll',
    jspFiles: [
      { filename: 'PAYROLLGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TRAINGROUP',
    menuNameThai: 'การจัดการงานฝึกอบรม',
    menuNameEnglish: 'Training',
    jspFiles: [
      { filename: 'TRAINGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'RECGROUP',
    menuNameThai: 'การจัดการงานสรรหา',
    menuNameEnglish: 'Recruitment',
    jspFiles: [
      { filename: 'RECGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WELGROUP',
    menuNameThai: 'การจัดการงานสวัสดิการ',
    menuNameEnglish: 'Welfare',
    jspFiles: [
      { filename: 'WELGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'APSGROUP',
    menuNameThai: 'การจัดการงานประเมินผล',
    menuNameEnglish: 'Appraisal',
    jspFiles: [
      { filename: 'APSGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WORKFLOWGROUP',
    menuNameThai: 'การจัดการงานเอกสาร',
    menuNameEnglish: 'Workflow',
    jspFiles: [
      { filename: 'WORKFLOWGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'EXAMGROUP',
    menuNameThai: 'การจัดการข้อสอบออนไลน์',
    menuNameEnglish: 'Examination Online',
    jspFiles: [
      { filename: 'EXAMGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SETGROUP',
    menuNameThai: 'การจัดการสิทธิ์ผู้ใช้งาน',
    menuNameEnglish: 'User Management',
    jspFiles: [
      { filename: 'SETGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'HRGROUP',
    menuNameThai: 'การจัดการผู้ดูแลระบบ',
    menuNameEnglish: 'Administrator',
    jspFiles: [
      { filename: 'HRGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SETEMVINDEX',
    menuNameThai: 'ตั้งค่ากระดานข้อมูลสำหรับพนักงาน',
    menuNameEnglish: 'Setting Information Board for Employee',
    jspFiles: [
      { filename: 'SETEMVINDEX.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'BRAINSTROMGROUP',
    menuNameThai: 'ระดมความคิด',
    menuNameEnglish: 'Brainstrom™',
    jspFiles: [
      { filename: 'BRAINSTROMGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'LIBRARYGROUP',
    menuNameThai: 'การจัดการห้องสมุด',
    menuNameEnglish: 'Library Management',
    jspFiles: [
      { filename: 'LIBRARYGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'MEETINGGROUP',
    menuNameThai: 'การจัดการห้องประชุม',
    menuNameEnglish: 'Meeting Management',
    jspFiles: [
      { filename: 'MEETINGGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'CARRESERVGROUP',
    menuNameThai: 'การจัดการการจองรถ',
    menuNameEnglish: 'Car Reservations Management',
    jspFiles: [
      { filename: 'CARRESERVGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'WFGROUP',
    menuNameThai: 'Workflow',
    menuNameEnglish: 'Workflow',
    jspFiles: [
      { filename: 'WFGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ZEEMEGROUP',
    menuNameThai: 'ZeeMe Menu',
    menuNameEnglish: 'ZeeMe Menu',
    jspFiles: [
      { filename: 'ZEEMEGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SPGROUP',
    menuNameThai: 'การจัดการแผนการทำงาน',
    menuNameEnglish: 'Shift Planning Management',
    jspFiles: [
      { filename: 'SPGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'EMVGROUP',
    menuNameThai: 'ระบบบริหารจัดการด้วยตัวเอง',
    menuNameEnglish: 'Employee Self Service',
    jspFiles: [
      { filename: 'EMVGROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SYSTEM_ACCESS.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 2. User Level Screens (ST02A)
 */
const userLevelScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'USERPERMIS',
    menuNameThai: 'เปลี่ยนแปลงระดับผู้ใช้งาน',
    menuNameEnglish: 'Change User Level',
    jspFiles: [
      { filename: 'SM1009.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER_LEVEL.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'EM1002',
    menuNameThai: 'ทะเบียนระดับพนักงาน',
    menuNameEnglish: 'Setting User Level',
    jspFiles: [
      { filename: 'EM1002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER_LEVEL.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ST02A08',
    menuNameThai: 'นำเข้าปรับปรุงสิทธิ์การเข้าถึงข้อมูลพนักงาน',
    menuNameEnglish: 'Import Update Employee Level',
    jspFiles: [
      { filename: 'ST02A08.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.USER_LEVEL.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 3. Personal Data Screens (ST03A)
 */
const personalDataScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CHANGLANG',
    menuNameThai: 'เปลี่ยนภาษา',
    menuNameEnglish: 'Changing Language',
    jspFiles: [
      { filename: 'CHANGLANG.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.PERSONAL_DATA.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PASSWD',
    menuNameThai: 'เปลี่ยนรหัสผ่าน',
    menuNameEnglish: 'Changing Password',
    jspFiles: [
      { filename: 'PASSWD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.PERSONAL_DATA.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'globalmenuorder',
    menuNameThai: 'จัดเรียงเมนูหลัก',
    menuNameEnglish: 'Set Global Menu Order',
    jspFiles: [
      { filename: 'GLOBALMENUORDER.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.PERSONAL_DATA.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 4. Options Screens (ST04A)
 */
const optionsScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'SM1001',
    menuNameThai: 'กำหนดค่าระบบ',
    menuNameEnglish: 'System Configuration',
    jspFiles: [
      { filename: 'SM1001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'EM1001',
    menuNameThai: 'กำหนดค่าเริ่มต้นของพนักงาน',
    menuNameEnglish: 'Employee Configuration',
    jspFiles: [
      { filename: 'EM1001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1002',
    menuNameThai: 'กำหนดการมองเห็นเงินเดือนตามระดับผู้ใช้งาน',
    menuNameEnglish: 'Setting Salary View by Employee Level',
    jspFiles: [
      { filename: 'SM1002.jsp', description: 'Main screen' },
      { filename: 'SM1006.jsp', description: 'Related screen' },
      { filename: 'SM1003.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1010',
    menuNameThai: 'ประมวลผลสายบังคับบัญชา(ตามกล่องอนุมัติ)',
    menuNameEnglish: 'Process Organization chart (by Approve box)',
    jspFiles: [
      { filename: 'SM1010.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'AGA001',
    menuNameThai: 'รายงานการแก้ไข',
    menuNameEnglish: 'Amendment Report',
    jspFiles: [
      { filename: 'AGA001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'This is a report but included in Options section',
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'SM1007',
    menuNameThai: 'ประวัติการเข้าใช้งาน',
    menuNameEnglish: 'List of Online User',
    jspFiles: [
      { filename: 'SM1007.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'SM1008',
    menuNameThai: 'สถิติการเข้าใช้งานระบบ',
    menuNameEnglish: 'Statistic Data of Online User',
    jspFiles: [
      { filename: 'SM1008.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'SM1011',
    menuNameThai: 'กำหนดสิทธิการทำเงินเดือนตามกลุ่ม',
    menuNameEnglish: 'Setting Payroll Calculation Access Permissinos',
    jspFiles: [
      { filename: 'SM1011.jsp', description: 'Main screen' },
      { filename: 'SM1011_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1012',
    menuNameThai: 'ตั้งค่าการรันตัวเลข',
    menuNameEnglish: 'Autonumber setup',
    jspFiles: [
      { filename: 'SET_AUTONUM.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1013',
    menuNameThai: 'ตั้งค่ากลุ่มการรันตัวเลข',
    menuNameEnglish: 'Autonumber Group setup',
    jspFiles: [
      { filename: 'SET_AUTONUM_GROUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1015',
    menuNameThai: 'ทะเบียนค่าเริ่มต้น',
    menuNameEnglish: 'Default Value Table',
    jspFiles: [
      { filename: 'SM1015.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ST04A16',
    menuNameThai: 'คู่มือการใช้',
    menuNameEnglish: 'User Manual',
    jspFiles: [
      { filename: 'SM1016.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.OTHER
  }),
  createScreenDefinition({
    menuCode: 'ST04A17',
    menuNameThai: 'กำหนดเซิร์ฟเวอร์สำหรับประมวลผล',
    menuNameEnglish: 'Server config queue',
    jspFiles: [
      { filename: 'SM1020.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 5. Excel Report Screens (WE04A00)
 */
const excelReportScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'EXCELLIST',
    menuNameThai: 'เพิ่มรายงาน',
    menuNameEnglish: 'Upload Excel Template',
    jspFiles: [
      { filename: 'EXCELLIST.jsp', description: 'Main screen' },
      { filename: 'UPLOADEXCEL.jsp', description: 'Upload screen' },
      { filename: 'EXPEXCEL.jsp', description: 'Export screen' },
      { filename: 'EXCHEAD.jsp', description: 'Header screen' },
      { filename: 'EXCCHILD.jsp', description: 'Child screen' },
      { filename: 'XLSOPTION_HR.jsp', description: 'Option screen' },
      { filename: 'EXCEL_PORTAL.jsp', description: 'Portal screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.EXCEL_REPORT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'MANAGEEXCELLIST',
    menuNameThai: 'เปิด-ปิด การใช้งานรายงาน',
    menuNameEnglish: 'Manage Excel Template',
    jspFiles: [
      { filename: 'MANAGEEXCELLIST.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.EXCEL_REPORT.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'EXCEL_EMV',
    menuNameThai: 'รายงาน excel สำหรับ empview',
    menuNameEnglish: 'Excel Report For Empview',
    jspFiles: [
      { filename: 'EXCEL_EMV.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.EXCEL_REPORT.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 6. Main Master Data Screens (SS05A)
 */
const mainMasterDataScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'CONFIG_GOHELP',
    menuNameThai: 'กำหนดลำดับ โครงสร้าง',
    menuNameEnglish: 'Set up Relation',
    jspFiles: [
      { filename: 'CONFIG_GOHELP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.MAIN_MASTER_DATA.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SM1018',
    menuNameThai: 'กำหนดสิทธิมองเห็นประเภทการเคลื่อนไหว',
    menuNameEnglish: 'Setting Movement Type View',
    jspFiles: [
      { filename: 'SM1018.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.MAIN_MASTER_DATA.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'SS05A05',
    menuNameThai: 'กำหนดรูปภาพหน้าเข้าสู่ระบบ',
    menuNameEnglish: 'Set up Login slide',
    jspFiles: [
      { filename: 'LOGIN_SETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.MAIN_MASTER_DATA.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 7. Workflow Screen Screens (SS011A)
 */
const workflowScreenScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'SM1017',
    menuNameThai: 'ตั้งค่าใบขออัตรากำลัง',
    menuNameEnglish: 'Setting WF Manpower Request Form',
    jspFiles: [
      { filename: 'SM1017.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.WORKFLOW_SCREEN.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 8. Swap Language Screens (SS06A)
 */
const swapLanguageScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'SWAPLANGEDIT',
    menuNameThai: 'Swap Language V.2',
    menuNameEnglish: 'Swap Language V.2',
    jspFiles: [
      { filename: 'SWAPLANGEDIT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SWAP_LANGUAGE.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'MSITENAME',
    menuNameThai: 'Add Site',
    menuNameEnglish: 'Add Site',
    jspFiles: [
      { filename: 'MSITENAME.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.SWAP_LANGUAGE.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 9. Zeeme Interface Screens (SS10A)
 */
const zeemeInterfaceScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'ZS001',
    menuNameThai: 'Set payslip config company',
    menuNameEnglish: 'Set payslip config company',
    jspFiles: [
      { filename: 'ZSLIP/ZS001.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ZS002',
    menuNameThai: 'Set payslip config employee',
    menuNameEnglish: 'Set payslip config employee',
    jspFiles: [
      { filename: 'ZSLIP/ZS002.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ZS007',
    menuNameThai: 'เชื่อมโยงข้อมูลกับ Zeeme with Option',
    menuNameEnglish: 'Syncronize Employee to Zeeme with Option',
    jspFiles: [
      { filename: 'ZSLIP/ZS007.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS009',
    menuNameThai: 'เชื่อมโยงข้อมูลหัวหน้ากับ Zeeme โดย Bossid',
    menuNameEnglish: 'Syncronize Boss to Zeeme with Bossid',
    jspFiles: [
      { filename: 'ZSLIP/ZS009.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS_WORKAREA',
    menuNameThai: 'เชื่อมโยงข้อมูลสถานที่ทำงานกับ Zeeme with Employee',
    menuNameEnglish: 'Syncronize Workarea to Zeeme with Employee',
    jspFiles: [
      { filename: 'ZSLIP/ZS_WORKAREA.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS003',
    menuNameThai: 'Upload payslip',
    menuNameEnglish: 'Upload payslip',
    jspFiles: [
      { filename: 'ZSLIP/ZS003.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS004',
    menuNameThai: 'Upload payslip log',
    menuNameEnglish: 'Upload payslip log',
    jspFiles: [
      { filename: 'ZSLIP/ZS004.jsp', description: 'Main screen (in ZSLIP subdirectory)' },
      { filename: 'ZSLIP/ZS005.jsp', description: 'Related screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS010',
    menuNameThai: 'Load loan transaction from DLS',
    menuNameEnglish: 'Load loan transaction from DLS',
    jspFiles: [
      { filename: 'ZSLIP/ZS010.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS011',
    menuNameThai: 'Post Payback Loan to ZeeServer',
    menuNameEnglish: 'Post Payback Loan to ZeeServer',
    jspFiles: [
      { filename: 'ZSLIP/ZS011.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS012',
    menuNameThai: 'Load loan transaction from DLS (NEW)',
    menuNameEnglish: 'Load loan transaction from DLS (NEW)',
    jspFiles: [
      { filename: 'ZSLIP/ZS012.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'ZS013',
    menuNameThai: 'Post Payback Loan to ZeeServer (NEW)',
    menuNameEnglish: 'Post Payback Loan to ZeeServer (NEW)',
    jspFiles: [
      { filename: 'ZSLIP/ZS013.jsp', description: 'Main screen (in ZSLIP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ZEEME_INTERFACE.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 10. Barcode Generator Screens (BAR10A)
 */
const barcodeGeneratorScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'BAR001',
    menuNameThai: 'Barcode Config',
    menuNameEnglish: 'Barcode Config',
    jspFiles: [
      { filename: 'BARCODE/BAR001.jsp', description: 'Main screen (in BARCODE subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.BARCODE_GENERATOR.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'BAR002',
    menuNameThai: 'Generate Barcode Process',
    menuNameEnglish: 'Generate Barcode Process',
    jspFiles: [
      { filename: 'BARCODE/BAR002.jsp', description: 'Main screen (in BARCODE subdirectory)' },
      { filename: 'BARCODE/PRU086.jsp', description: 'Related screen (in BARCODE subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.BARCODE_GENERATOR.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'BAR003',
    menuNameThai: 'View Barcode',
    menuNameEnglish: 'View Barcode',
    jspFiles: [
      { filename: 'BARCODE/BAR003.jsp', description: 'Main screen (in BARCODE subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.BARCODE_GENERATOR.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 11. Token Generator Screens (TOKEN10A)
 */
const tokenGeneratorScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TOKEN001',
    menuNameThai: 'Config Access Key',
    menuNameEnglish: 'Config Access Key',
    jspFiles: [
      { filename: 'TOKEN001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.TOKEN_GENERATOR.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TOKEN002',
    menuNameThai: 'Create Access Key',
    menuNameEnglish: 'Create Access Key',
    jspFiles: [
      { filename: 'TOKEN002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.TOKEN_GENERATOR.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TOKEN003',
    menuNameThai: 'Create Token',
    menuNameEnglish: 'Create Token',
    jspFiles: [
      { filename: 'TOKEN003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.TOKEN_GENERATOR.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TOKEN004',
    menuNameThai: 'Log Access Token',
    menuNameEnglish: 'Log Access Token',
    jspFiles: [
      { filename: 'TOKEN004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.TOKEN_GENERATOR.BASE,
    screenType: ScreenType.REPORT
  })
];

/**
 * 12. Data Shop Screens (DS01)
 */
const dataShopScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'DS00101',
    menuNameThai: 'Base Cube',
    menuNameEnglish: 'Base Cube',
    jspFiles: [
      { filename: 'DATASHOP/index.html', description: 'Main screen (HTML file in DATASHOP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'HTML file',
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.DATA_SHOP.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'DS00102',
    menuNameThai: 'Upload Basecube',
    menuNameEnglish: 'Upload Basecube',
    jspFiles: [
      { filename: 'DATASHOP/uploadcube.html', description: 'Upload screen (HTML file in DATASHOP subdirectory)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'HTML file',
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.DATA_SHOP.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 13. Routing Config Screens (ROUTING10A)
 */
const routingConfigScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'ROUTING001',
    menuNameThai: 'Routing Create',
    menuNameEnglish: 'Routing Create',
    jspFiles: [
      { filename: 'ROUTING001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.ROUTING_CONFIG.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 14. Terms Of Use Screens (ST09A)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'ST09A01',
    menuNameThai: 'คู่มือการใช้งาน',
    menuNameEnglish: 'User Manual',
    jspFiles: [
      { filename: 'MODULE_MANUAL.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/SETTING/',
    routePath: APP_ROUTES.PORTAL.ADMIN.SETTINGS.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Categories
 */
const emailReminderCategory: ScreenCategory = {
  categoryCode: 'ST01A0103',
  categoryNameThai: 'ตั้งค่าอีเมล์แจ้งเตือน',
  categoryNameEnglish: 'Setting Email Reminder',
  screens: emailReminderScreens
};

const userSettingCategory: ScreenCategory = {
  categoryCode: 'ST01A01',
  categoryNameThai: 'การตั้งค่าผู้ใช้งาน',
  categoryNameEnglish: 'User Setting',
  screens: userSettingScreens
};

const systemAccessCategory: ScreenCategory = {
  categoryCode: 'ST01A04',
  categoryNameThai: 'สิทธิ์การเข้าถึงระบบ',
  categoryNameEnglish: 'System Access Permissions',
  screens: systemAccessScreens
};

const userCategory: ScreenCategory = {
  categoryCode: 'ST01A',
  categoryNameThai: 'ผู้ใช้งาน',
  categoryNameEnglish: 'User',
  screens: [],
  subCategories: [
    emailReminderCategory,
    userSettingCategory,
    systemAccessCategory
  ]
};

const userLevelCategory: ScreenCategory = {
  categoryCode: 'ST02A',
  categoryNameThai: 'ระดับผู้ใช้งาน',
  categoryNameEnglish: 'Setting user Level',
  screens: userLevelScreens
};

const personalDataCategory: ScreenCategory = {
  categoryCode: 'ST03A',
  categoryNameThai: 'ข้อมูลส่วนตัว',
  categoryNameEnglish: 'Personal Data',
  screens: personalDataScreens
};

const optionsCategory: ScreenCategory = {
  categoryCode: 'ST04A',
  categoryNameThai: 'ตัวเลือก',
  categoryNameEnglish: 'Options',
  screens: optionsScreens
};

const excelReportCategory: ScreenCategory = {
  categoryCode: 'WE04A00',
  categoryNameThai: 'ตั้งค่ารายงาน Excel',
  categoryNameEnglish: 'Setting Export Report',
  screens: excelReportScreens
};

const mainMasterDataCategory: ScreenCategory = {
  categoryCode: 'SS05A',
  categoryNameThai: 'ข้อมูลหลัก',
  categoryNameEnglish: 'Main (Master Data)',
  screens: mainMasterDataScreens
};

const workflowScreenCategory: ScreenCategory = {
  categoryCode: 'SS011A',
  categoryNameThai: 'ตั้งค่าหน้าจอ Workflow',
  categoryNameEnglish: 'Setting Workflow screen',
  screens: workflowScreenScreens
};

const swapLanguageCategory: ScreenCategory = {
  categoryCode: 'SS06A',
  categoryNameThai: 'สลับภาษา',
  categoryNameEnglish: 'Swap Langauge',
  screens: swapLanguageScreens
};

const zeemeInterfaceCategory: ScreenCategory = {
  categoryCode: 'SS10A',
  categoryNameThai: 'เชื่อมต่อ Zeeme',
  categoryNameEnglish: 'Zeeme Interface',
  screens: zeemeInterfaceScreens
};

const barcodeGeneratorCategory: ScreenCategory = {
  categoryCode: 'BAR10A',
  categoryNameThai: 'สร้าง Barcode',
  categoryNameEnglish: 'Barcode Generator',
  screens: barcodeGeneratorScreens
};

const tokenGeneratorCategory: ScreenCategory = {
  categoryCode: 'TOKEN10A',
  categoryNameThai: 'สร้าง Token',
  categoryNameEnglish: 'Token Generator',
  screens: tokenGeneratorScreens
};

const dataShopCategory: ScreenCategory = {
  categoryCode: 'DS01',
  categoryNameThai: 'Data Shop',
  categoryNameEnglish: 'Data Shop',
  screens: dataShopScreens
};

const routingConfigCategory: ScreenCategory = {
  categoryCode: 'ROUTING10A',
  categoryNameThai: 'ตั้งค่า Routing',
  categoryNameEnglish: 'Routing Config',
  screens: routingConfigScreens
};

const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'ST09A',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Settings Module Inventory
 * ข้อมูลทั้งหมดของ Settings Module
 */
export const SETTINGS_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'ST',
  moduleName: 'Setting',
  basePath: 'hrAppWeb.war/SETTING/',
  totalScreens: 80, // Total: 12 (Email Reminder) + 11 (User Setting) + 22 (System Access) + 3 (User Level) + 3 (Personal Data) + 13 (Options) + 3 (Excel Report) + 3 (Main Master) + 1 (Workflow) + 2 (Swap Language) + 11 (Zeeme) + 3 (Barcode) + 4 (Token) + 2 (Data Shop) + 1 (Routing) + 1 (Terms) = 85 screens
  mainCategories: [
    userCategory,
    userLevelCategory,
    personalDataCategory,
    optionsCategory,
    excelReportCategory,
    mainMasterDataCategory,
    workflowScreenCategory,
    swapLanguageCategory,
    zeemeInterfaceCategory,
    barcodeGeneratorCategory,
    tokenGeneratorCategory,
    dataShopCategory,
    routingConfigCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'User Management': 23,
    'Email Reminder Settings': 12,
    'System Access Permissions': 22,
    'User Level Settings': 3,
    'Personal Data': 3,
    'Options/Configuration': 13,
    'Excel Report Settings': 3,
    'Main/Master Data': 3,
    'Workflow Screen Settings': 1,
    'Swap Language': 2,
    'Zeeme Interface': 11,
    'Barcode Generator': 3,
    'Token Generator': 4,
    'Data Shop': 2,
    'Routing Config': 1,
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

  for (const category of SETTINGS_MODULE_INVENTORY.mainCategories) {
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

  for (const category of SETTINGS_MODULE_INVENTORY.mainCategories) {
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
  for (const category of SETTINGS_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

