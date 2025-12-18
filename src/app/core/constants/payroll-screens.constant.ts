/**
 * Payroll Screens Constant
 * ข้อมูลหน้าจอ Payroll Module จากระบบเก่า (JSP)
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
 * 1.1 Before Payroll Processing Screens (PR03A01)
 */
const beforeProcessingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU134_DETAIL',
    menuNameThai: 'ข้อมูลการทำงานของพนักงาน',
    menuNameEnglish: 'Employee Working Hour',
    jspFiles: [
      { filename: 'PRU134_DETAIL.jsp', description: 'Main screen' },
      { filename: 'TAU122.jsp', description: 'Related screen' },
      { filename: 'TAU123.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.EMPLOYEE_WORKING_HOUR,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU072',
    menuNameThai: 'เงินได้และเงินหักไม่ประจำ',
    menuNameEnglish: 'Irregular Income and Deduction',
    jspFiles: [
      { filename: 'PRU072.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.IRREGULAR_INCOME_DEDUCTION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU140',
    menuNameThai: 'รายได้หรือรายหักอื่นๆ',
    menuNameEnglish: 'Other Incomes and Deductions',
    jspFiles: [
      { filename: 'PRU140.jsp', description: 'Main screen' },
      { filename: 'PRU071.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.OTHER_INCOMES_DEDUCTIONS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU132_NSTDA',
    menuNameThai: 'สร้างรายการเงินตกเบิก',
    menuNameEnglish: 'Generate Salary Retroact Transaction',
    jspFiles: [
      { filename: 'PRU132_NSTDA.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.GENERATE_SALARY_RETROACT,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU047PSN',
    menuNameThai: 'รายได้และรายหักที่จ่ายทุกเดือน',
    menuNameEnglish: 'Fixed Income and Deduction',
    jspFiles: [
      { filename: 'PRU047PSN.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.FIXED_INCOME_DEDUCTION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU169',
    menuNameThai: 'ทะเบียนรายได้-รายหักไม่ประจำสำหรับพนักงาน',
    menuNameEnglish: 'Irregular Income and Deduction for Employee',
    jspFiles: [
      { filename: 'PRU169.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.IRREGULAR_INCOME_DEDUCTION_EMP,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU100',
    menuNameThai: 'โอนข้อมูลพนักงานไปยังฐานข้อมูลเงินเดือน (In source)',
    menuNameEnglish: 'Transfer Employee Information to DB Payroll (In source)',
    jspFiles: [
      { filename: 'PRU100.jsp', description: 'Main screen' },
      { filename: 'FILTER_EXPORT.jsp', description: 'Export filter screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.TRANSFER_EMPLOYEE_INFO,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU101',
    menuNameThai: 'ดึงข้อมูลพนักงานจากฐานข้อมูลเงินเดือน (In source)',
    menuNameEnglish: 'Pull Employee Information from DB Payroll (In source)',
    jspFiles: [
      { filename: 'PRU101.jsp', description: 'Main screen' },
      { filename: 'FILTER_EXPORT.jsp', description: 'Export filter screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.BEFORE_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 1.2 Run Payroll Processing Screens (PR03A03)
 */
const runProcessingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU125',
    menuNameThai: 'ทดสอบการคำนวณรายได้',
    menuNameEnglish: 'Test Payroll Calculation',
    jspFiles: [
      { filename: 'PRU125.jsp', description: 'Main screen' },
      { filename: 'PRU125HELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.RUN_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU126_OEI',
    menuNameThai: 'ยืนยันผลการคำนวณรายได้',
    menuNameEnglish: 'Payroll Computation Confirmation',
    jspFiles: [
      { filename: 'PRU126_OEI.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.RUN_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU127_TN',
    menuNameThai: 'ผ่านรายการระบบเงินเดือน',
    menuNameEnglish: 'Period End Process',
    jspFiles: [
      { filename: 'PRU127_TN.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.RUN_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU124',
    menuNameThai: 'ปิดบัญชีสิ้นเดือน',
    menuNameEnglish: 'Month End Process',
    jspFiles: [
      { filename: 'PRU124.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.RUN_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU129_STD',
    menuNameThai: 'ปิดบัญชีสิ้นปี',
    menuNameEnglish: 'Year End Process',
    jspFiles: [
      { filename: 'PRU129_STD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.RUN_PROCESSING.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 1.3 After Payroll Processing Screens (PR03A02)
 */
const afterProcessingScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU029_NSTDA',
    menuNameThai: 'ข้อมูลหลังการคำนวณเงินเดือน',
    menuNameEnglish: 'Data after Payroll Calculation',
    jspFiles: [
      { filename: 'PRU029_NSTDA.jsp', description: 'Main screen' },
      { filename: 'PRU030.jsp', description: 'Related screen' },
      { filename: 'TAU134P.jsp', description: 'Related screen' },
      { filename: 'EMPTAXINFO.jsp', description: 'Tax information screen' },
      { filename: 'PRU029HELP.jsp', description: 'Help screen' },
      { filename: 'PRU029_TAX_1.jsp', description: 'Tax related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU031_2',
    menuNameThai: 'ข้อมูลการเปรียบเทียบเงินเดือน',
    menuNameEnglish: 'Payroll Reconciliation',
    jspFiles: [
      { filename: 'PRU031_2.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU173',
    menuNameThai: 'ข้อมูลหลังการคำนวณเงินเดือนพนักงานทั้งหมด',
    menuNameEnglish: 'Current Payment Record',
    jspFiles: [
      { filename: 'PRU173.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU180',
    menuNameThai: 'ข้อมูลหลังการคำนวณเงินเดือน (Cost Center)',
    menuNameEnglish: 'Data after Payroll Calculation (Cost Center)',
    jspFiles: [
      { filename: 'PRU180.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TRANSACTION.AFTER_PROCESSING.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Before Processing Category
 */
const beforeProcessingCategory: ScreenCategory = {
  categoryCode: 'PR03A01',
  categoryNameThai: 'ก่อนประมวลผล',
  categoryNameEnglish: 'Before Processing',
  screens: beforeProcessingScreens
};

/**
 * Run Processing Category
 */
const runProcessingCategory: ScreenCategory = {
  categoryCode: 'PR03A03',
  categoryNameThai: 'ประมวลผล',
  categoryNameEnglish: 'Run Processing',
  screens: runProcessingScreens
};

/**
 * After Processing Category
 */
const afterProcessingCategory: ScreenCategory = {
  categoryCode: 'PR03A02',
  categoryNameThai: 'หลังประมวลผล',
  categoryNameEnglish: 'After Processing',
  screens: afterProcessingScreens
};

/**
 * 1.4 E-PaySlip Screens (PR03A04)
 */
const ePaySlipScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU174',
    menuNameThai: 'E-PaySlip Process',
    menuNameEnglish: 'E-PaySlip Process',
    jspFiles: [
      { filename: 'PRU174.jsp', description: 'Main screen' },
      { filename: 'PRU174_HELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.E_PAYSLIP.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU175',
    menuNameThai: 'E-PaySlip Management',
    menuNameEnglish: 'E-PaySlip Management',
    jspFiles: [
      { filename: 'PRU175.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.E_PAYSLIP.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU176',
    menuNameThai: 'E-PaySlip Footer Management',
    menuNameEnglish: 'E-PaySlip Footer Management',
    jspFiles: [
      { filename: 'PRU176.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.E_PAYSLIP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU130_STD',
    menuNameThai: 'E-PaySlip Regeneration',
    menuNameEnglish: 'E-PaySlip Regeneration',
    jspFiles: [
      { filename: 'PRU130_STD.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.E_PAYSLIP.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 2. Text File Transfer Screens (PR06A)
 * Note: มี screens มาก (50+ screens) ส่วนใหญ่เป็น export functions สำหรับธนาคารต่างๆ
 */
const textFileTransferScreens: ScreenDefinition[] = [
  // Bank Transfer Screens (ตัวอย่าง - มีหลายเวอร์ชันสำหรับแต่ละธนาคาร)
  createScreenDefinition({
    menuCode: 'PR06A0101',
    menuNameThai: 'นำส่งธนาคาร',
    menuNameEnglish: 'Transfer to bank',
    jspFiles: [
      { filename: 'PRT003-BANK', description: 'Bank transfer screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExport)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0103',
    menuNameThai: 'นำส่งธนาคาร (SCB)',
    menuNameEnglish: 'Transfer to bank (SCB)',
    jspFiles: [
      { filename: 'PRT003-BANKSCB.jsp', description: 'SCB bank transfer screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0110',
    menuNameThai: 'นำส่งธนาคาร (SCB V.2)',
    menuNameEnglish: 'Transfer to bank (SCB V.2)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExportBank)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0102',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ',
    menuNameEnglish: 'Provident Fund',
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExportPVF)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0201',
    menuNameThai: 'นำส่งภาษี ภ.ง.ด.1',
    menuNameEnglish: 'Tax PND1',
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExportTAX), XML File: EXPORTTAX.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0205',
    menuNameThai: 'นำส่งประกันสังคม',
    menuNameEnglish: 'Social Security',
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExportSOC), XML File: EXPORTSOC.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0206',
    menuNameThai: 'บัญชีแยกประเภท',
    menuNameEnglish: 'General Ledger',
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses goExport1)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0401',
    menuNameThai: 'นำส่งประกันสังคมด้วยสื่อข้อมูลอิเล็กทรอนิกส์',
    menuNameEnglish: 'Transfer to Social Security',
    jspFiles: [
      { filename: 'PRT003-SSO', description: 'SSO screen' },
      { filename: 'PRT003-SSO-OPTION', description: 'SSO option screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Export function (uses golinkpageSSO)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // SCB Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0110_NAME',
    menuNameThai: 'นำส่งธนาคาร (SCB V.2 Name)',
    menuNameEnglish: 'Transfer to bank (SCB V.2 Name)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0119',
    menuNameThai: 'นำส่งธนาคาร (SCB V.3)',
    menuNameEnglish: 'Transfer to bank (SCB V.3)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A012',
    menuNameThai: 'นำส่งธนาคาร (SCB BCM)',
    menuNameEnglish: 'Transfer to bank (SCB BCM)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0152',
    menuNameThai: 'นำส่งธนาคาร (SCB V.4)',
    menuNameEnglish: 'Transfer to bank (SCB V.4)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0153',
    menuNameThai: 'นำส่งธนาคาร (SCB V.6)',
    menuNameEnglish: 'Transfer to bank (SCB V.6)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0112',
    menuNameThai: 'นำส่งธนาคาร (SCB Surety)',
    menuNameEnglish: 'Transfer to bank (SCB Surety)',
    jspFiles: [
      { filename: 'PRT003-BANKSCBSURETY.jsp', description: 'SCB Surety screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // BBL Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0104',
    menuNameThai: 'นำส่งธนาคาร (BBL)',
    menuNameEnglish: 'Transfer to bank (BBL)',
    jspFiles: [
      { filename: 'PRT003-BANKBBL.jsp', description: 'BBL bank transfer screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0115',
    menuNameThai: 'นำส่งธนาคาร (BBL V.2)',
    menuNameEnglish: 'Transfer to bank (BBL V.2)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0115_OTHER',
    menuNameThai: 'นำส่งธนาคาร (BBL OTHER)',
    menuNameEnglish: 'Transfer to bank (BBL OTHER)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0122',
    menuNameThai: 'นำส่งธนาคาร (BBL V.3)',
    menuNameEnglish: 'Transfer to bank (BBL V.3)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0129',
    menuNameThai: 'นำส่งธนาคาร (BBL 80 V.4)',
    menuNameEnglish: 'Transfer to bank (BBL 80 V.4)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0128',
    menuNameThai: 'นำส่งธนาคาร (BBL KCG)',
    menuNameEnglish: 'Transfer to bank (BBL KCG)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0133',
    menuNameThai: 'นำส่งธนาคาร (BBL KCG V.2)',
    menuNameEnglish: 'Transfer to bank (BBL KCG V.2)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // KTB Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0126',
    menuNameThai: 'นำส่งธนาคาร (KTB KCG)',
    menuNameEnglish: 'Transfer to bank (KTB KCG)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0136',
    menuNameThai: 'นำส่งธนาคาร (KTB) V2',
    menuNameEnglish: 'Transfer to bank (KTB) V2',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // TBANK Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0127',
    menuNameThai: 'นำส่งธนาคาร (TBANK KCG)',
    menuNameEnglish: 'Transfer to bank (TBANK KCG)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0132',
    menuNameThai: 'นำส่งธนาคาร (TBANK JT)',
    menuNameEnglish: 'Transfer to bank (TBANK JT)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // KBANK Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0105',
    menuNameThai: 'นำส่งธนาคาร (KBANK)',
    menuNameEnglish: 'Transfer to bank (KBANK)',
    jspFiles: [
      { filename: 'PRT003-BANKKBK.jsp', description: 'KBANK bank transfer screen' },
      { filename: 'EXPORTBANKKBK', description: 'Export screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0111',
    menuNameThai: 'นำส่งธนาคาร (KBANK V.2)',
    menuNameEnglish: 'Transfer to bank (KBANK V.2)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0123',
    menuNameThai: 'นำส่งธนาคาร (KBANK V.3)',
    menuNameEnglish: 'Transfer to bank (KBANK V.3)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0123_THAI',
    menuNameThai: 'นำส่งธนาคาร (KBANK V.3) ไทย',
    menuNameEnglish: 'Transfer to bank (KBANK V.3) THAI',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0140',
    menuNameThai: 'นำส่งธนาคาร (KBANK V.4)',
    menuNameEnglish: 'Transfer to bank (KBANK V.4)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' },
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // TMB Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0120',
    menuNameThai: 'นำส่งธนาคาร (TMB)',
    menuNameEnglish: 'Transfer to bank (TMB)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0121',
    menuNameThai: 'นำส่งธนาคาร (TMB V.2)',
    menuNameEnglish: 'Transfer to bank (TMB V.2)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0125',
    menuNameThai: 'นำส่งธนาคาร (TMB V.3)',
    menuNameEnglish: 'Transfer to bank (TMB V.3)',
    jspFiles: [
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // CITI Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0134',
    menuNameThai: 'นำส่งธนาคาร (CITI)',
    menuNameEnglish: 'Transfer to bank (CITI)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // Emporium Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0135',
    menuNameThai: 'นำส่งข้อมูลธนาคาร (Emporium)',
    menuNameEnglish: 'Transfer data to bank (Emporium)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0137',
    menuNameThai: 'นำส่งข้อมูลธนาคาร (Emporium)(UPAYDAT)',
    menuNameEnglish: 'Transfer data to bank (Emporium)(UPAYDAT)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // SMBC JP Bank Transfers
  createScreenDefinition({
    menuCode: 'PR06A0144',
    menuNameThai: 'นำส่งธนาคาร (SMBC JP)',
    menuNameEnglish: 'Transfer to bank (SMBC JP)',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0151',
    menuNameThai: 'นำส่งธนาคาร (SMBC JP)แบบที่ 2',
    menuNameEnglish: 'Transfer to bank (SMBC JP) Ver 2',
    jspFiles: [
      { filename: 'PRT003-BANKOPTION.jsp', description: 'Option screen' },
      { filename: 'PRT003-BANKV2.jsp', description: 'Bank V2 screen' },
      { filename: 'PRT004TABLE.jsp', description: 'Table screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // Provident Fund Transfers
  createScreenDefinition({
    menuCode: 'PR06A0106',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (UOB)',
    menuNameEnglish: 'Provident Fund (UOB)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportPVF2)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0109',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (AIA)',
    menuNameEnglish: 'Provident Fund (AIA)',
    jspFiles: [
      { filename: 'TEXTFILE_AIA.jsp', description: 'AIA text file screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0113',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (ITE)',
    menuNameEnglish: 'Provident Fund (ITE)',
    jspFiles: [
      { filename: 'TEXTFILE_PVF_ITE.jsp', description: 'ITE text file screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0108',
    menuNameThai: 'JV',
    menuNameEnglish: 'JV',
    jspFiles: [
      { filename: 'EXPORTEXCEL_TOA', description: 'Excel export screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportExcel)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0114',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (CIMB)',
    menuNameEnglish: 'Provident Fund (CIMB)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportPVF2)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0124',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (ASIA PLUS)',
    menuNameEnglish: 'Provident Fund (ASIA PLUS)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportPVF2)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0141',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 2103',
    menuNameEnglish: 'Provident Fund JTFOOD 2103',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0142',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 4103',
    menuNameEnglish: 'Provident Fund JTFOOD 4103',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0143',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 6103',
    menuNameEnglish: 'Provident Fund JTFOOD 6103',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0116',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART1)',
    menuNameEnglish: 'Provident Fund (TISCO PART1)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0117',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART2)',
    menuNameEnglish: 'Provident Fund (TISCO PART2)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0118',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART3)',
    menuNameEnglish: 'Provident Fund (TISCO PART3)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0145',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART1)',
    menuNameEnglish: 'Provident Fund .PRN (TISCO PART1)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0146',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART2)',
    menuNameEnglish: 'Provident Fund .PRN (TISCO PART2)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0147',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART3)',
    menuNameEnglish: 'Provident Fund .PRN (TISCO PART3)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0148',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART1)',
    menuNameEnglish: 'Provident Fund .TXT(TISCO PART1)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0149',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART2)',
    menuNameEnglish: 'Provident Fund .TXT(TISCO PART2)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0150',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART3)',
    menuNameEnglish: 'Provident Fund .TXT(TISCO PART3)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A010210',
    menuNameThai: 'นำส่งกองทุนฯ (CIMB)',
    menuNameEnglish: 'Provident Fund (CIMB)',
    jspFiles: [
      { filename: 'PVFCIMBV2.jsp', description: 'CIMB V2 screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0154',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพ (BBLAM)',
    menuNameEnglish: 'Provident Fund (BBLAM)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A010310',
    menuNameThai: 'นำส่งสหกรณ์ (Walcoal)',
    menuNameEnglish: 'Deliver the cooperative (Walcoal)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0107',
    menuNameThai: 'หลักทรัพย์จัดการกองทุนกสิกรไทย',
    menuNameEnglish: 'KASSET',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportTAX)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  // Tax Exports (After Period End)
  createScreenDefinition({
    menuCode: 'PR06A0202',
    menuNameThai: 'นำส่งภาษี ภ.ง.ด.1ก',
    menuNameEnglish: 'Tax PND1 Kor',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function, XML File: EXPORTTAX_1KOR.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0208',
    menuNameThai: 'นำส่งภาษี ภ.ง.ด.1ก (โปรแกรม RD Prep)',
    menuNameEnglish: 'Tax PND1 Kor (RD Prep)',
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function, XML File: EXPORTTAX_1KOR_RDPREP.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0209',
    menuNameThai: 'นำส่งภาษี ภ.ง.ด.3',
    menuNameEnglish: 'Tax PND3',
    jspFiles: [
      { filename: 'EXPORTTAX3', description: 'Export screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function, XML File: EXPORTTAX3.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0210',
    menuNameThai: 'นำส่งภาษี ภ.ง.ด.3ก',
    menuNameEnglish: 'Tax PND3 Kor',
    jspFiles: [
      { filename: 'EXPORTTAX_3KOR', description: 'Export screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function, XML File: EXPORTTAX_3KOR.xml',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR06A0207',
    menuNameThai: 'นำส่งกองทุนสำรองเลี้ยงชีพธนชาติ',
    menuNameEnglish: 'Provident Fund Thanachart',
    jspFiles: [
      { filename: 'EXPORTPVF_HIS', description: 'Export history screen' }
    ],
    permissions: { active: true, edit: false, save: false, delete: false },
    note: 'Export function (uses goExportPVF_HIS)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TEXT_FILE_TRANSFER.BASE,
    screenType: ScreenType.EXPORT
  })
];

/**
 * 3. Options Screens (PR05A)
 */
const optionsScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU131',
    menuNameThai: 'ตารางจัดกลุ่มเงินเดือน',
    menuNameEnglish: 'Group Payroll Setting Table',
    jspFiles: [
      { filename: 'PRU131.jsp', description: 'Main screen' },
      { filename: 'PRU159.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU316',
    menuNameThai: 'ดึงข้อมูลระบบเงินเดือน',
    menuNameEnglish: 'Import Payroll Data',
    jspFiles: [
      { filename: 'PRU316.jsp', description: 'Main screen' },
      { filename: 'ViewData.jsp', description: 'View data screen' },
      { filename: 'PRU316_IMPORT.jsp', description: 'Import screen' },
      { filename: 'PRU316_EXCEL.jsp', description: 'Excel screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRT002',
    menuNameThai: 'นำข้อมูลออกสู่ระบบ',
    menuNameEnglish: 'Export Data',
    jspFiles: [
      { filename: 'PRT002.jsp', description: 'Main screen' },
      { filename: 'PRT003-EASYBUY.jsp', description: 'EasyBuy screen' },
      { filename: 'PRT004.jsp', description: 'Related screen' },
      { filename: 'PRT003-SOC.jsp', description: 'Social security screen' },
      { filename: 'PRT003-TAX.jsp', description: 'Tax screen' },
      { filename: 'PRT005.jsp', description: 'Related screen' },
      { filename: 'PRT006.jsp', description: 'Related screen' },
      { filename: 'PRT007.jsp', description: 'Related screen' },
      { filename: 'PRT008.jsp', description: 'Related screen' },
      { filename: 'PRR002.jsp', description: 'Report screen' },
      { filename: 'PRR044.jsp', description: 'Report screen' },
      { filename: 'PRT003-PVF.jsp', description: 'Provident fund screen' },
      { filename: 'PRT003-BANK.jsp', description: 'Bank screen' },
      { filename: 'EXPORTPVF', description: 'Export PVF' },
      { filename: 'EXPORTTAX', description: 'Export tax' },
      { filename: 'EXPORTSOC', description: 'Export social security' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU135',
    menuNameThai: 'กำหนดงวดเงินเดือน',
    menuNameEnglish: 'Define Payroll Period',
    jspFiles: [
      { filename: 'PRU135.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU119',
    menuNameThai: 'คำนวณภาษีใหม่',
    menuNameEnglish: 'Tax Recalculating',
    jspFiles: [
      { filename: 'PRU119.jsp', description: 'Main screen' },
      { filename: 'PRU119HELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU121',
    menuNameThai: 'ลบข้อมูลการคำนวณรายได้',
    menuNameEnglish: 'Delete Payroll Transaction',
    jspFiles: [
      { filename: 'PRU121.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU161',
    menuNameThai: 'ลบข้อมูลการทำงานที่โอนมาจาก Time',
    menuNameEnglish: 'Delete Working Hour from TA',
    jspFiles: [
      { filename: 'PRU161.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU338',
    menuNameThai: 'นำส่งอีเมล Epay Slip',
    menuNameEnglish: 'Sent E-Mail Epay Slip',
    jspFiles: [
      { filename: 'PRU338.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' },
      { filename: 'PRU338_PROCESS.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU339',
    menuNameThai: 'นำส่งอีเมล ภงด. 91',
    menuNameEnglish: 'Sent E-Mail P.N.D. 91',
    jspFiles: [
      { filename: 'PRU339.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' },
      { filename: 'PRU339_PROCESS.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU340',
    menuNameThai: 'นำส่งอีเมล หนังสือรับรองการหักภาษี ณ ที่จ่าย (ใบ 50 ทวิ)',
    menuNameEnglish: 'Sent E-Mail Withholding tax certificate',
    jspFiles: [
      { filename: 'PRU340.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' },
      { filename: 'PRU340_PROCESS.jsp', description: 'Process screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.OPTIONS.BASE,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 4. Setup Screens (PR01A)
 * Note: มี screens มาก (30+ screens) ส่วนใหญ่เป็น master data tables
 */
const setupScreens: ScreenDefinition[] = [
  // Bonus Setup
  createScreenDefinition({
    menuCode: 'PR01A2500',
    menuNameThai: 'รหัสโบนัส',
    menuNameEnglish: 'Bonus code',
    jspFiles: [
      { filename: 'PRU257.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2501',
    menuNameThai: 'ตารางเงื่อนไขโบนัส',
    menuNameEnglish: 'Bonus table setup',
    jspFiles: [
      { filename: 'PRU256.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2505',
    menuNameThai: 'ทะเบียนสูตรโบนัส',
    menuNameEnglish: 'Bonus formula',
    jspFiles: [
      { filename: 'PR_BONUS_FORMULA.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2502',
    menuNameThai: 'ทะเบียนโบนัส',
    menuNameEnglish: 'Bonus master setup',
    jspFiles: [
      { filename: 'PR_BONUS_001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Tax and Social Security Setup
  createScreenDefinition({
    menuCode: 'CS012',
    menuNameThai: 'ค่าลดหย่อนในการคำนวณภาษี',
    menuNameEnglish: 'Tax Allowance',
    jspFiles: [
      { filename: 'CS012.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'CS013',
    menuNameThai: 'เงื่อนไขการคำนวณภาษีกรณีรับเงินบำเหน็จ',
    menuNameEnglish: 'Compensation Tax Computation',
    jspFiles: [
      { filename: 'CS013.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'CS022',
    menuNameThai: 'กำหนดค่าเกี่ยวกับภาษีและประกันสังคมบริษัท',
    menuNameEnglish: 'Social Security Setup',
    jspFiles: [
      { filename: 'CS022.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'CS023',
    menuNameThai: 'กำหนดค่า กองทุนสงเคราะห์ลูกจ้าง',
    menuNameEnglish: 'Employee Welfare Fund Setup',
    jspFiles: [
      { filename: 'CS023.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'CS004',
    menuNameThai: 'ตารางภาษีคำนวณจากเงินได้สุทธิ',
    menuNameEnglish: 'Personal Income Tax Table',
    jspFiles: [
      { filename: 'CS004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Income and Deduction Setup
  createScreenDefinition({
    menuCode: 'PRU082',
    menuNameThai: 'ทะเบียนกลุ่มรายได้',
    menuNameEnglish: 'Income Group',
    jspFiles: [
      { filename: 'PRU082.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU077',
    menuNameThai: 'รายได้และรายหักที่จ่ายทุกเดือน',
    menuNameEnglish: 'Income and Deduction Setup',
    jspFiles: [
      { filename: 'PRU077.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU095',
    menuNameThai: 'ทะเบียนบันทึกรายได้และเงินหักประจำ',
    menuNameEnglish: 'Regular Income and Deduction',
    jspFiles: [
      { filename: 'PRU095.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU092',
    menuNameThai: 'ทะเบียนบันทึกรายได้และเงินหักไม่ประจำ',
    menuNameEnglish: 'Irregular Income and Deduction',
    jspFiles: [
      { filename: 'PRU092.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Cost Center and Journal Voucher
  createScreenDefinition({
    menuCode: 'PR01A2301',
    menuNameThai: 'ทะเบียนกระจายต้นทุน (Cost Center)',
    menuNameEnglish: 'Cost Center',
    jspFiles: [
      { filename: 'PRU006_SETUP.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2302',
    menuNameThai: 'ทะเบียน Main Cost Center',
    menuNameEnglish: 'Main Cost Center',
    jspFiles: [
      { filename: 'PRU164.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2304',
    menuNameThai: 'บัญชีแยกประเภท Setup',
    menuNameEnglish: 'Payroll Journal Voucher Setup',
    jspFiles: [
      { filename: 'PRU165.jsp', description: 'Main screen' },
      { filename: 'PRU165_DETAIL.jsp', description: 'Detail screen' },
      { filename: 'PRU165_HELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Provident Fund Setup
  createScreenDefinition({
    menuCode: 'PRU007',
    menuNameThai: 'ตารางเงินสะสมกองทุน',
    menuNameEnglish: 'Provident Fund Contribution Table',
    jspFiles: [
      { filename: 'PRU007.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU0901',
    menuNameThai: 'ตารางเงินสะสมกรณีลาออก',
    menuNameEnglish: 'Provident Fund Vesting Table',
    jspFiles: [
      { filename: 'PRU090.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU104',
    menuNameThai: 'ทะเบียนผู้จัดการกองทุน',
    menuNameEnglish: 'Fund Manager',
    jspFiles: [
      { filename: 'PRU104.jsp', description: 'Main screen' },
      { filename: 'PRT075.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU076',
    menuNameThai: 'ทะเบียนกองทุน',
    menuNameEnglish: 'Fund Table',
    jspFiles: [
      { filename: 'PRU076.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Other Setup
  createScreenDefinition({
    menuCode: 'PRU018',
    menuNameThai: 'ทะเบียนระยะเวลาการจ่ายเงินเดือน',
    menuNameEnglish: 'Pay Frequency Table',
    jspFiles: [
      { filename: 'PRU018.jsp', description: 'Main screen' },
      { filename: 'PRU102.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU019',
    menuNameThai: 'ทะเบียนอัตราการแลกเปลี่ยน',
    menuNameEnglish: 'Exchange Rate Table',
    jspFiles: [
      { filename: 'PRU019.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU0211',
    menuNameThai: 'ทะเบียนรหัสบัญชี',
    menuNameEnglish: 'Account Code Table',
    jspFiles: [
      { filename: 'PRU021.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU143',
    menuNameThai: 'ทะเบียนลำดับภาษี',
    menuNameEnglish: 'Tax Index Table',
    jspFiles: [
      { filename: 'PRU143.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU105',
    menuNameThai: 'ทะเบียนประเภทกองทุน',
    menuNameEnglish: 'Fund Type',
    jspFiles: [
      { filename: 'PRU105.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU090',
    menuNameThai: 'ทะเบียนเงินทุนคิดภายหน้า',
    menuNameEnglish: 'Provident Fund Resign',
    jspFiles: [
      { filename: 'PRU090.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU318',
    menuNameThai: 'ทะเบียนสัญลักษณ์สกุลเงิน',
    menuNameEnglish: 'Currency Sign Table',
    jspFiles: [
      { filename: 'PRU318.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  // Bonus Processing
  createScreenDefinition({
    menuCode: 'PR01A2503',
    menuNameThai: 'คำนวณตั้งยอดโบนัส',
    menuNameEnglish: 'Bonus accrual',
    jspFiles: [
      { filename: 'PR_BONUS_ACC.jsp', description: 'Main screen' },
      { filename: 'PR_BONUS_ACC_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PR01A2504',
    menuNameThai: 'คำนวณโบนัส',
    menuNameEnglish: 'Bonus processing',
    jspFiles: [
      { filename: 'PR_BONUS_PROCESS.jsp', description: 'Main screen' },
      { filename: 'PR_BONUS_PROCESS_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.PROCESS
  }),
  // Journal Voucher Screens
  createScreenDefinition({
    menuCode: 'PR01A2303',
    menuNameThai: 'รหัสบัญชีแยกประเภท',
    menuNameEnglish: 'Journal Voucher Sequence Number',
    jspFiles: [
      { filename: 'PRU166.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2305',
    menuNameThai: 'สร้าง Template บัญชีแยกประเภท',
    menuNameEnglish: 'Payroll Journal Voucher Template (Process)',
    jspFiles: [
      { filename: 'PRU167.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PR01A2306',
    menuNameThai: 'Template บัญชีแยกประเภท',
    menuNameEnglish: 'Payroll Journal Voucher Template',
    jspFiles: [
      { filename: 'PRU168.jsp', description: 'Main screen' },
      { filename: 'PRU168_DETAIL.jsp', description: 'Detail screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PR01A2307',
    menuNameThai: 'Data บัญชีแยกประเภท (Process)',
    menuNameEnglish: 'Payroll Journal Voucher Data (Process)',
    jspFiles: [
      { filename: 'PRU170.jsp', description: 'Main screen' },
      { filename: 'PRU170_HELP.jsp', description: 'Help screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PR01A2308',
    menuNameThai: 'Data บัญชีแยกประเภท',
    menuNameEnglish: 'Payroll Journal Voucher Data',
    jspFiles: [
      { filename: 'PRU171.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PR01A2309',
    menuNameThai: 'รายงานบัญชีแยกประเภท (Report PDF)',
    menuNameEnglish: 'Payroll Journal Voucher (Report PDF)',
    jspFiles: [
      { filename: 'PRRJVDATAEXPORT', description: 'Export screen' },
      { filename: 'PRRJVDATAOPTION', description: 'Option screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Report (uses linkpageReport1)',
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PR01A2310',
    menuNameThai: 'รายงานบัญชีแยกประเภท (Report EXCEL)',
    menuNameEnglish: 'Payroll Journal Voucher (Report EXCEL)',
    jspFiles: [
      { filename: 'PRRJVDATAEXCEL.jsp', description: 'Excel screen' },
      { filename: 'PRRJVDATAEXCEL_EX.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PR01A2311',
    menuNameThai: 'รายงานบัญชีแยกประเภท (Report EXCEL SAP)',
    menuNameEnglish: 'Payroll Journal Voucher (Report EXCEL SAP)',
    jspFiles: [
      { filename: 'PRRJVDATAEXCELSAP.jsp', description: 'SAP Excel screen' },
      { filename: 'PRRJVDATAEXCELSAP_EX.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PR01A2322',
    menuNameThai: 'นำส่งข้อมูลบัญชีแยกประเภท SAP',
    menuNameEnglish: 'Transfer data to SAP',
    jspFiles: [
      { filename: 'PRRJVDATAEXPORT_KEX.jsp', description: 'KEX export screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.EXPORT
  }),
  createScreenDefinition({
    menuCode: 'PR01A2321',
    menuNameThai: 'ทะเบียนระยะเวลาการจ่ายเงินเดือน',
    menuNameEnglish: 'Pay Frequency Table',
    jspFiles: [
      { filename: 'PRU018HISTORY.jsp', description: 'History screen' },
      { filename: 'PRU102HISTORY.jsp', description: 'History screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SCREEN
  }),
  // Other Setup Screens
  createScreenDefinition({
    menuCode: 'PRU006',
    menuNameThai: 'ทะเบียนกระจายต้นทุน (Cost Center) (OLD)',
    menuNameEnglish: 'Cost Center (OLD)',
    jspFiles: [
      { filename: 'PRU006.jsp', description: 'Main screen' },
      { filename: 'PRU025.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU0212',
    menuNameThai: 'ทะเบียนรหัสการตัดจ่าย (Funcenter)',
    menuNameEnglish: 'Fund Center Code Table',
    jspFiles: [
      { filename: 'PRU163.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRU018SVC',
    menuNameThai: 'ทะเบียนระยะเวลาการจ่ายเงินเดือน',
    menuNameEnglish: 'Pay Frequency Table',
    jspFiles: [
      { filename: 'PRU018SVC.jsp', description: 'Main screen' },
      { filename: 'PRU102SVC.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PRR205',
    menuNameThai: 'ทะเบียนเงินได้และเงินหักไม่ประจำ (STORE)',
    menuNameEnglish: 'Irregular Income and Deduction (STORE)',
    jspFiles: [
      { filename: 'PRR205.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.SETUP.BASE,
    screenType: ScreenType.SETUP
  })
];

/**
 * 5. Terms Of Use Screens (PR07A)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PR07A1',
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
    basePath: 'hrAppWeb.war/PAYROLL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.PAYROLL.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Transaction Category (Parent)
 */
const transactionCategory: ScreenCategory = {
  categoryCode: 'PR03A',
  categoryNameThai: 'รายการ',
  categoryNameEnglish: 'Transaction',
  screens: [],
  subCategories: [
    beforeProcessingCategory,
    runProcessingCategory,
    afterProcessingCategory
  ]
};

/**
 * E-PaySlip Category
 */
const ePaySlipCategory: ScreenCategory = {
  categoryCode: 'PR03A04',
  categoryNameThai: 'E-PaySlip',
  categoryNameEnglish: 'E-PaySlip',
  screens: ePaySlipScreens
};

/**
 * Text File Transfer Category
 */
const textFileTransferCategory: ScreenCategory = {
  categoryCode: 'PR06A',
  categoryNameThai: 'ส่งไฟล์',
  categoryNameEnglish: 'Text File Transfer',
  screens: textFileTransferScreens
};

/**
 * Options Category
 */
const optionsCategory: ScreenCategory = {
  categoryCode: 'PR05A',
  categoryNameThai: 'ตัวเลือก',
  categoryNameEnglish: 'Options',
  screens: optionsScreens
};

/**
 * Setup Category
 */
const setupCategory: ScreenCategory = {
  categoryCode: 'PR01A',
  categoryNameThai: 'ตั้งค่า (Master Data)',
  categoryNameEnglish: 'Setup (Master Data)',
  screens: setupScreens
};

/**
 * Terms Of Use Category
 */
const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'PR07A',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * Payroll Module Inventory
 * ข้อมูลทั้งหมดของ Payroll Module
 */
export const PAYROLL_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'PR',
  moduleName: 'Payroll',
  basePath: 'hrAppWeb.war/PAYROLL/',
  totalScreens: 200, // Total: 8 (Before) + 5 (Run) + 4 (After) + 4 (E-PaySlip) + 64 (Text Transfer) + 10 (Options) + 35 (Setup) + 1 (Terms) = 131 screens
  mainCategories: [
    transactionCategory,
    ePaySlipCategory,
    textFileTransferCategory,
    optionsCategory,
    setupCategory,
    termsOfUseCategory
  ],
  summaryStatistics: {
    'Transaction (Before Processing)': 9,
    'Transaction (Run Processing)': 5,
    'Transaction (After Processing)': 5,
    'E-PaySlip': 4,
    'Text File Transfer': 50,
    'Options/Configuration': 15,
    'Setup (Master Data)': 30,
    'Terms Of Use': 1
  }
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): ScreenDefinition | undefined {
  for (const category of PAYROLL_MODULE_INVENTORY.mainCategories) {
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
  for (const category of PAYROLL_MODULE_INVENTORY.mainCategories) {
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
  for (const category of PAYROLL_MODULE_INVENTORY.mainCategories) {
    screens.push(...category.screens);
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

