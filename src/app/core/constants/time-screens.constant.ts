/**
 * Time Attendance Screens Constant
 * ข้อมูลหน้าจอ Time Attendance Module จากระบบเก่า (JSP)
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
 * 1.1 Daily Attendance Screens (TA01A051)
 */
const dailyAttendanceScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU134_DAILY',
    menuNameThai: 'ตารางการทำงาน',
    menuNameEnglish: 'Daily Attendance',
    jspFiles: [
      { filename: 'TAU134_DAILY.jsp', description: 'Main screen' },
      { filename: 'TAU122.jsp', description: 'Related screen' },
      { filename: 'TAU123.jsp', description: 'Related screen' },
      { filename: 'TAU1212_DAILY.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DAILY_ATTENDANCE.DAILY_ATTENDANCE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'MG_WORKINGTIME',
    menuNameThai: 'ข้อมูลเวลาการทำงาน',
    menuNameEnglish: 'Working Time Detail',
    jspFiles: [
      { filename: 'MG_WORKINGTIME.jsp', description: 'Main screen' },
      { filename: 'EMP_WORKINGTIME.jsp', description: 'Employee working time screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DAILY_ATTENDANCE.WORKING_TIME_DETAIL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'MG_WORKINGTIME_HISTORY',
    menuNameThai: 'ข้อมูลประวัติเวลาการทำงาน',
    menuNameEnglish: 'Working Time Detail History',
    jspFiles: [
      { filename: 'MG_WORKINGTIME_HISTORY.jsp', description: 'Main screen' },
      { filename: 'EMP_WORKINGTIME_HISTORY.jsp', description: 'Employee working time history screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DAILY_ATTENDANCE.WORKING_TIME_DETAIL_HISTORY,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.2 Transaction Screens (TA01A02)
 */
const transactionScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU141',
    menuNameThai: 'ใบลงเวลา',
    menuNameEnglish: 'Forget Punch Time',
    jspFiles: [
      { filename: 'TAU141.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.FORGET_PUNCH_TIME,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU223',
    menuNameThai: 'ใบขอลงเวลาการทำงาน',
    menuNameEnglish: 'Working Hour Request Form',
    jspFiles: [
      { filename: 'TAU223.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.WORKING_HOUR_REQUEST,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU_BOSS_FORGETCARD',
    menuNameThai: 'ใบขอลงเวลาการทำงานโดยหัวหน้า',
    menuNameEnglish: 'Work Hour Request Form by Supervisor',
    jspFiles: [
      { filename: 'TAU_BOSS_FORGETCARD.jsp', description: 'Main screen' },
      { filename: 'TAU_BOSS_FORGETCARD_VIEW.jsp', description: 'View screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.WORK_HOUR_REQUEST_BY_SUPERVISOR,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU120',
    menuNameThai: 'ใบลา',
    menuNameEnglish: 'Leave Form',
    jspFiles: [
      { filename: 'TAU120_NSTDA.jsp', description: 'Main screen' },
      { filename: 'SHOWNLEAVE_showAll.jsp', description: 'Show all leave screen' },
      { filename: 'SHOWLATE_WF_DESC.jsp', description: 'Workflow description screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU152',
    menuNameThai: 'ใบขอโอทีหลายวัน',
    menuNameEnglish: 'Several Days OT Form',
    jspFiles: [
      { filename: 'TAU152.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU154',
    menuNameThai: 'ใบขอโอทีพนักงานหลายคน',
    menuNameEnglish: 'Several Employees OT Form',
    jspFiles: [
      { filename: 'TAU154.jsp', description: 'Main screen' },
      { filename: 'PRU087.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU145',
    menuNameThai: 'ใบเปลี่ยนกะ',
    menuNameEnglish: 'Change Shift',
    jspFiles: [
      { filename: 'TAU145_NSTDA.jsp', description: 'Main screen' },
      { filename: 'SHOWNSHIFT_NSTDA.jsp', description: 'Show shift screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU_BOSS_CHANGESHIFT',
    menuNameThai: 'ใบเปลี่ยนกะโดยหัวหน้า',
    menuNameEnglish: 'Change Shift by Supervisor',
    jspFiles: [
      { filename: 'TAU_BOSS_CHANGESHIFT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU146',
    menuNameThai: 'ใบแลกกะ',
    menuNameEnglish: 'Exchange Shift',
    jspFiles: [
      { filename: 'TAU146_NSTDA.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU188_SENA',
    menuNameThai: 'ใบสลับวันหยุด',
    menuNameEnglish: 'Holiday switch',
    jspFiles: [
      { filename: 'TAU188_SENA.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU177',
    menuNameThai: 'บันทึกการลงเวลาประจำเดือน',
    menuNameEnglish: 'Punch Time of Month',
    jspFiles: [
      { filename: 'TAU177.jsp', description: 'Main screen' },
      { filename: 'TAU223.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU177_HR',
    menuNameThai: 'บันทึกการลงเวลาประจำเดือน [HR]',
    menuNameEnglish: 'Maintenance Raw Data',
    jspFiles: [
      { filename: 'TAU177_HR.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU182',
    menuNameThai: 'แก้ไขขาเข้า-ออกการลงเวลาประจำเดือน',
    menuNameEnglish: 'Edit Punch In-Out Data',
    jspFiles: [
      { filename: 'TAU182.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TA01A0227',
    menuNameThai: 'กำหนดกะการทำงานของพนักงาน',
    menuNameEnglish: 'Employees Shift Setup',
    jspFiles: [
      { filename: 'TAU425.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TRANSACTION.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.3 Data before Processing Screens (TA01A03)
 */
const dataBeforeProcessingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU147',
    menuNameThai: 'แผนการทำงานของพนักงาน',
    menuNameEnglish: 'Employee Working Plan',
    jspFiles: [
      { filename: 'TAU147.jsp', description: 'Main screen' },
      { filename: 'TAU154_DETAIL.jsp', description: 'OT detail screen' },
      { filename: 'TAU152_DETAIL.jsp', description: 'OT detail screen' },
      { filename: 'TAU120_NSTDA_DETAIL.jsp', description: 'Leave detail screen' },
      { filename: 'TAU145_NSTDA_DETAIL.jsp', description: 'Change shift detail screen' },
      { filename: 'TAU188_DETAIL.jsp', description: 'Holiday switch detail screen' },
      { filename: 'TAU146_NSTDA_DETAIL.jsp', description: 'Exchange shift detail screen' },
      { filename: 'TAU150_DETAIL.jsp', description: 'OT detail screen' },
      { filename: 'SHOWNSHIFT_NSTDA.jsp', description: 'Show shift screen' },
      { filename: 'TAU_BOSS_CHANGESHIFT_DETAIL.jsp', description: 'Boss change shift detail screen' },
      { filename: 'TAU146_EX_DETAIL.jsp', description: 'Exchange shift detail screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DATA_BEFORE_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU1181',
    menuNameThai: 'แสดงสถิติการลงเวลา',
    menuNameEnglish: 'Statistic Data for Punch In/Out',
    jspFiles: [
      { filename: 'TAU118.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DATA_BEFORE_PROCESSING.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'TAU1402',
    menuNameThai: 'แสดงสถิติการลาของพนักงาน',
    menuNameEnglish: 'Statistic Data of Leave',
    jspFiles: [
      { filename: 'TAU143_1.jsp', description: 'Main screen' },
      { filename: 'TAU144.jsp', description: 'Related screen' },
      { filename: 'TARS001.jsp', description: 'Report screen' },
      { filename: 'TAU_LVALLOWANCE.jsp', description: 'Leave allowance screen' },
      { filename: 'TAU_PHALLOWANCE.jsp', description: 'Personal holiday allowance screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DATA_BEFORE_PROCESSING.BASE,
    screenType: ScreenType.REPORT
  })
];

/**
 * 1.4 On the Process Screens (TA01A04)
 */
const onProcessScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TA_IMPTIME2',
    menuNameThai: 'ดึงข้อมูลตารางเวร (Excel)',
    menuNameEnglish: 'Import Mtime (Excel)',
    jspFiles: [
      { filename: 'TA_IMPTIME2.jsp', description: 'Main screen' },
      { filename: 'TA_IMPTIME2_PRO.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TA_IMPTMTRANS',
    menuNameThai: 'นำเข้าข้อมูลวันหยุด (Excel)',
    menuNameEnglish: 'Import Data',
    jspFiles: [
      { filename: 'TA_IMPTMTRANS.jsp', description: 'Main screen' },
      { filename: 'TA_IMPTMTRANS_PRO.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU128',
    menuNameThai: 'ดึงข้อมูลการลงเวลางาน (Text)',
    menuNameEnglish: 'Import Punch In/Out Data',
    jspFiles: [
      { filename: 'TAU128.jsp', description: 'Main screen' },
      { filename: 'TAU128_IMPORT.jsp', description: 'Import screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU353',
    menuNameThai: 'นำเข้าสิทธิการลา (CSV)',
    menuNameEnglish: 'Import Leave Balance (CSV)',
    jspFiles: [
      { filename: 'TAU353.jsp', description: 'Main screen' },
      { filename: 'TAU353_ADMIN.jsp', description: 'Admin screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU127',
    menuNameThai: 'ประมวลผลระบบเวลาการทำงาน',
    menuNameEnglish: 'Working Hour Process',
    jspFiles: [
      { filename: 'TAU127.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU137',
    menuNameThai: 'ล้างข้อมูลการประมวลผล',
    menuNameEnglish: 'Clear Time Process',
    jspFiles: [
      { filename: 'TAU137.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU149',
    menuNameThai: 'โอนข้อมูลการทำงานของพนักงานสู่ระบบเงินเดือน',
    menuNameEnglish: 'Transfer Employee Data to Payroll',
    jspFiles: [
      { filename: 'TAU149.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU142',
    menuNameThai: 'โอนข้อมูลการทำงานของพนักงานลงประวัติ',
    menuNameEnglish: 'Transfer Employee Data to History',
    jspFiles: [
      { filename: 'TAU142.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU_CHGSHIFT',
    menuNameThai: 'เปลี่ยนแผนการทำงานอัตโนมัติตามการรูดเข้า',
    menuNameEnglish: 'CreateChangeShift',
    jspFiles: [
      { filename: 'TAU_CHGSHIFT.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAVAC001_PROCESS',
    menuNameThai: 'ประมวลผลการสะสมวันหยุด',
    menuNameEnglish: 'Vacation accrual process',
    jspFiles: [
      { filename: 'TAVAC001_PROCESS.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU_CALLEAVE',
    menuNameThai: 'กำหนดสิทธิการลา',
    menuNameEnglish: 'Leave Balance Entry',
    jspFiles: [
      { filename: 'TAU_CALLEAVE.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU253',
    menuNameThai: 'ประมวลผลระบบเวลาการทำงาน Store',
    menuNameEnglish: 'Time Process Store',
    jspFiles: [
      { filename: 'TAU253.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU256',
    menuNameThai: 'ประมวลผลระบบเวลาการทำงาน Store by Query',
    menuNameEnglish: 'Time Process Store by Query',
    jspFiles: [
      { filename: 'TAU256.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU410',
    menuNameThai: 'ประมวลผลระบบเวลาการทำงาน(Approve)',
    menuNameEnglish: 'Working Hour Process(Approve)',
    jspFiles: [
      { filename: 'TAU410.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU257',
    menuNameThai: 'Gen plan roster',
    menuNameEnglish: 'Gen plan roster',
    jspFiles: [
      { filename: 'TAU257.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU_DeleteTimeAfterResign',
    menuNameThai: 'ลบข้อมูลเวลาหลังจากวันที่พ้นสภาพ',
    menuNameEnglish: 'Delete Time Data After Resign Date',
    jspFiles: [
      { filename: 'TAU_DeleteTimeAfterResign.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ON_PROCESS.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 1.5 Data after Processing Screens (TA01A05)
 */
const dataAfterProcessingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU125',
    menuNameThai: 'ข้อมูลความผิดปกติ',
    menuNameEnglish: 'Working Time Warning',
    jspFiles: [
      { filename: 'TAU1211.jsp', description: 'Main screen' },
      { filename: 'TAU1212.jsp', description: 'Related screen' },
      { filename: 'TAU1211_Exp.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DATA_AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TAU134_DETAIL',
    menuNameThai: 'ข้อมูลการทำงานของพนักงาน',
    menuNameEnglish: 'Current Data',
    jspFiles: [
      { filename: 'TAU134_DETAIL.jsp', description: 'Main screen' },
      { filename: 'TAU122.jsp', description: 'Related screen' },
      { filename: 'TAU123.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.DATA_AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.6 History Screens (TA01A06)
 */
const historyScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU164',
    menuNameThai: 'ประวัติข้อมูลการทำงานของพนักงาน',
    menuNameEnglish: 'Working Hour History',
    jspFiles: [
      { filename: 'TAU164.jsp', description: 'Main screen' },
      { filename: 'TAU165.jsp', description: 'Related screen' },
      { filename: 'TAU166.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.HISTORY.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.7 Options Screens (TA01A07)
 */
const optionsScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU167',
    menuNameThai: 'เจนเนอร์เรตตารางเวร',
    menuNameEnglish: 'Generating Shift Pattern',
    jspFiles: [
      { filename: 'TAU167.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU196',
    menuNameThai: 'สำเนาตารางเวร',
    menuNameEnglish: 'Copying Shift Pattern',
    jspFiles: [
      { filename: 'TAU196.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU176',
    menuNameThai: 'ตัวช่วยบันทึกข้อมูลการลงเวลา',
    menuNameEnglish: 'Generate Default Punch In/Out',
    jspFiles: [
      { filename: 'TAU176.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU151',
    menuNameThai: 'ประมวลผลระบบเวลาการทำงานแบบพื้นฐาน',
    menuNameEnglish: 'Generate Default Working Hour',
    jspFiles: [
      { filename: 'TAU151.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU124',
    menuNameThai: 'คำนวณสิทธิการลาพักร้อน',
    menuNameEnglish: 'Vacation Calculation',
    jspFiles: [
      { filename: 'TAU124.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TAU189',
    menuNameThai: 'คำนวณเอกสารใหม่',
    menuNameEnglish: 'Re-calculate Document',
    jspFiles: [
      { filename: 'TAU189.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'TA_IMP_VC',
    menuNameThai: 'นำเข้าข้อมูลVC',
    menuNameEnglish: 'Import VC',
    jspFiles: [
      { filename: 'TA_IMP_VC.jsp', description: 'Main screen' },
      { filename: 'TA_IMP_VC_IMPORT.jsp', description: 'Import screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'TA_IMP_VACATION',
    menuNameThai: 'นำเข้าข้อมูล Vacation',
    menuNameEnglish: 'Import Vacation',
    jspFiles: [
      { filename: 'TA_IMP_VACATION.jsp', description: 'Main screen' },
      { filename: 'TA_IMP_VACATION_IMPORT.jsp', description: 'Import screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OPTIONS.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.8 Setup Screens (TA01A01)
 */
const setupScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU102',
    menuNameThai: 'ทะเบียนเวลาการทำงาน',
    menuNameEnglish: 'Define Timetable',
    jspFiles: [
      { filename: 'TAU102.jsp', description: 'Main screen (uses linkpageHol function)' },
      { filename: 'TAU103.jsp', description: 'Related screen (holiday)' },
      { filename: 'TAU104.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageHol function for holiday integration',
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU106',
    menuNameThai: 'ทะเบียนตารางเวร',
    menuNameEnglish: 'Define Shift Pattern',
    jspFiles: [
      { filename: 'TAU106.jsp', description: 'Main screen (uses linkpageHol function)' },
      { filename: 'TAU107.jsp', description: 'Related screen (holiday)' },
      { filename: 'TAU108.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageHol function for holiday integration',
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU130',
    menuNameThai: 'ทะเบียนประเภทวัน',
    menuNameEnglish: 'Type of Leave Table',
    jspFiles: [
      { filename: 'TAU130.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU130_CHILD',
    menuNameThai: 'ทะเบียนประเภทวัน (แยกตามสาขา)',
    menuNameEnglish: 'Type of Leave Table (classified by Branch)',
    jspFiles: [
      { filename: 'TAU130_CHILD.jsp', description: 'Main screen' },
      { filename: 'TAU130_CHILD1.jsp', description: 'Related screen' },
      { filename: 'PRU084_TIMEHELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU131',
    menuNameThai: 'ทะเบียนวันหยุด',
    menuNameEnglish: 'Holiday Table',
    jspFiles: [
      { filename: 'TAU131.jsp', description: 'Main screen' },
      { filename: 'TAU132.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU140',
    menuNameThai: 'ทะเบียนสูตรโอที',
    menuNameEnglish: 'OT Formula Calculation',
    jspFiles: [
      { filename: 'TAU140.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU192',
    menuNameThai: 'ทะเบียนเหตุผลการเปลี่ยนแปลง',
    menuNameEnglish: 'Reason of Changing',
    jspFiles: [
      { filename: 'TAU192.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU701',
    menuNameThai: 'ทะเบียนเหตุผลการขอโอที',
    menuNameEnglish: 'Reason for OT Request',
    jspFiles: [
      { filename: 'TAU701.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU187_KKB_NEW',
    menuNameThai: 'ทะเบียนเงื่อนไขสิทธิการลาพักร้อน',
    menuNameEnglish: 'Vacation Condition',
    jspFiles: [
      { filename: 'TAU187_KKB_NEW.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU133',
    menuNameThai: 'กำหนดคอลัมน์รายงานรายละเอียดการลา',
    menuNameEnglish: 'Define Detail Leave Report',
    jspFiles: [
      { filename: 'TAU133.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TA_CONFIG',
    menuNameThai: 'กำหนดค่าเริ่มต้นของระบบเวลาการทำงาน',
    menuNameEnglish: 'TA System Configuration',
    jspFiles: [
      { filename: 'TA_CONFIG.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU186',
    menuNameThai: 'ทะเบียนเครื่องบันทึกเวลา',
    menuNameEnglish: 'Time Machine Table',
    jspFiles: [
      { filename: 'TAU186.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU133_CPN',
    menuNameThai: 'กำหนดคอลัมน์รายงานเวลาทำงานประจำเดือน',
    menuNameEnglish: 'Define Column Report Eve',
    jspFiles: [
      { filename: 'TAU133_CPN.jsp', description: 'Main screen' },
      { filename: 'PRU084_LIST.jsp', description: 'List screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU1100',
    menuNameThai: 'กำหนดค่าการเปลี่ยนกะอัตโนมัติ',
    menuNameEnglish: 'Config Auto Change Shift',
    jspFiles: [
      { filename: 'TAU1100.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'ZK_DEVICE',
    menuNameThai: 'ทะเบียนเครื่องบันทึกเวลา',
    menuNameEnglish: 'Finger Scan Entry',
    jspFiles: [
      { filename: 'ZK_DEVICE.jsp', description: 'Main screen' },
      { filename: 'ZK_EMPLIST.jsp', description: 'Employee list screen' },
      { filename: 'ZK_ADDEMPLIST.jsp', description: 'Add employee list screen' },
      { filename: 'ZK_ALLOWEMPLIST.jsp', description: 'Allow employee list screen' },
      { filename: 'ZK_ADDALLOWEMPLIST.jsp', description: 'Add allow employee list screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Integration with ZK fingerprint scanner devices',
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU426',
    menuNameThai: 'ทะเบียนเหตุการขอลา',
    menuNameEnglish: 'leave reason',
    jspFiles: [
      { filename: 'TAU426.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TAU262',
    menuNameThai: 'กำหนดรูปแบบกะ',
    menuNameEnglish: 'Define Shift Roster',
    jspFiles: [
      { filename: 'TAU262.jsp', description: 'Main screen (uses linkpageHol function)' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageHol function for holiday integration',
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.SETUP.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 1.9 OT Scope Screens (TA10A)
 */
const otScopeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TA10A01',
    menuNameThai: 'ประเภทกรอบการอนุมัติ OT',
    menuNameEnglish: 'OT Type Scope',
    jspFiles: [
      { filename: 'TAU421.jsp', description: 'Main screen' },
      { filename: 'TAU421_CHILD1.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OT_SCOPE.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'TA10A02',
    menuNameThai: 'กรอบการอนุมัติ OT (พนักงาน)',
    menuNameEnglish: 'OT Scope (Employee)',
    jspFiles: [
      { filename: 'TAU422.jsp', description: 'Main screen' },
      { filename: 'TAU422E.jsp', description: 'Edit screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.OT_SCOPE.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 2. Roster Screens (TA08A)
 */
const rosterScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TAU254',
    menuNameThai: 'ประเภทตกเบิก',
    menuNameEnglish: 'Type Backpay',
    jspFiles: [
      { filename: 'TAU254.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.ROSTER.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 3. Terms Of Use Screens (TA05A)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'TA05A1',
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
    basePath: 'hrAppWeb.war/TIME/',
    routePath: APP_ROUTES.PORTAL.ADMIN.TIME.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Categories
 */
const dailyAttendanceCategory: ScreenCategory = {
  categoryCode: 'TA01A051',
  categoryNameThai: 'การลงเวลาประจำวัน',
  categoryNameEnglish: 'Daily Attendance',
  screens: dailyAttendanceScreens
};

const transactionCategory: ScreenCategory = {
  categoryCode: 'TA01A02',
  categoryNameThai: 'รายการ',
  categoryNameEnglish: 'Transaction',
  screens: transactionScreens
};

const dataBeforeProcessingCategory: ScreenCategory = {
  categoryCode: 'TA01A03',
  categoryNameThai: 'ข้อมูลก่อนประมวลผล',
  categoryNameEnglish: 'Data before Processing',
  screens: dataBeforeProcessingScreens
};

const onProcessCategory: ScreenCategory = {
  categoryCode: 'TA01A04',
  categoryNameThai: 'ระหว่างประมวลผล',
  categoryNameEnglish: 'On the Process',
  screens: onProcessScreens
};

const dataAfterProcessingCategory: ScreenCategory = {
  categoryCode: 'TA01A05',
  categoryNameThai: 'ข้อมูลหลังประมวลผล',
  categoryNameEnglish: 'Data after Processing',
  screens: dataAfterProcessingScreens
};

const historyCategory: ScreenCategory = {
  categoryCode: 'TA01A06',
  categoryNameThai: 'ประวัติ',
  categoryNameEnglish: 'History',
  screens: historyScreens
};

const optionsCategory: ScreenCategory = {
  categoryCode: 'TA01A07',
  categoryNameThai: 'ตัวเลือก',
  categoryNameEnglish: 'Options',
  screens: optionsScreens
};

const setupCategory: ScreenCategory = {
  categoryCode: 'TA01A01',
  categoryNameThai: 'ตั้งค่า (Master Data)',
  categoryNameEnglish: 'Setup (Master Data)',
  screens: setupScreens
};

const otScopeCategory: ScreenCategory = {
  categoryCode: 'TA10A',
  categoryNameThai: 'กรอบการอนุมัติ OT',
  categoryNameEnglish: 'OT Scope',
  screens: otScopeScreens
};

const rosterCategory: ScreenCategory = {
  categoryCode: 'TA08A',
  categoryNameThai: 'ตารางเวร',
  categoryNameEnglish: 'Roster',
  screens: rosterScreens
};

const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'TA05A',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Human Resources Category (Parent)
 */
const humanResourcesCategory: ScreenCategory = {
  categoryCode: 'TA01A',
  categoryNameThai: 'ทรัพยากรบุคคล',
  categoryNameEnglish: 'Human Resources',
  screens: [],
  subCategories: [
    dailyAttendanceCategory,
    transactionCategory,
    dataBeforeProcessingCategory,
    onProcessCategory,
    dataAfterProcessingCategory,
    historyCategory,
    optionsCategory,
    setupCategory
  ]
};

/**
 * Time Attendance Module Inventory
 * ข้อมูลทั้งหมดของ Time Attendance Module
 */
export const TIME_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'TA',
  moduleName: 'Time Attendance',
  basePath: 'hrAppWeb.war/TIME/',
  totalScreens: 100, // Total: 3 (Daily) + 14 (Transaction) + 3 (Before) + 16 (On Process) + 2 (After) + 1 (History) + 8 (Options) + 17 (Setup) + 2 (OT Scope) + 1 (Roster) + 1 (Terms) = 68 screens
  mainCategories: [
    humanResourcesCategory,
    otScopeCategory,
    rosterCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'Daily Attendance': 3,
    'Transaction (Daily Operations)': 14,
    'Data before Processing': 3,
    'On the Process': 16,
    'Data after Processing': 2,
    'History': 1,
    'Options': 8,
    'Setup (Master Data)': 17,
    'OT Scope': 2,
    'Roster': 1,
    'Terms Of Use': 1
  }
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): ScreenDefinition | undefined {
  for (const category of TIME_MODULE_INVENTORY.mainCategories) {
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
export function getScreensByCategoryCode(categoryCode: string): ScreenDefinition[] {
  for (const category of TIME_MODULE_INVENTORY.mainCategories) {
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        if (subCategory.categoryCode === categoryCode) {
          return subCategory.screens;
        }
      }
    }
    if (category.categoryCode === categoryCode) {
      return category.screens;
    }
  }
  return [];
}

/**
 * Helper function: Get all screens
 */
export function getAllScreens(): ScreenDefinition[] {
  const screens: ScreenDefinition[] = [];
  for (const category of TIME_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

