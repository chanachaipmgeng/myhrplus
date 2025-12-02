/**
 * Personal Setup Screens Helper
 * ใช้สำหรับสร้าง Setup screens แบบ batch
 */

import {
  ScreenDefinition,
  createScreenDefinition,
  ScreenType
} from '../models/screen.model';
import { ROUTES as APP_ROUTES } from './routes.constant';

/**
 * Helper function to create setup screen with common properties
 */
function createSetupScreen(
  menuCode: string,
  menuNameThai: string,
  menuNameEnglish: string,
  jspFile: string,
  routePath: string
): ScreenDefinition {
  return createScreenDefinition({
    menuCode,
    menuNameThai,
    menuNameEnglish,
    jspFiles: [{ filename: jspFile, description: 'Main screen' }],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath,
    screenType: ScreenType.SETUP
  });
}

/**
 * 1.5 Setup Screens (PS01A01) - 53 screens
 */
export const setupScreens: ScreenDefinition[] = [
  createSetupScreen('PS01A0101', 'ทะเบียนคำนำหน้าชื่อ', 'Title Prefix Table', 'PSM001.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.TITLE_PREFIX_TABLE),
  createSetupScreen('PS01A0102', 'ทะเบียนประเภทสถาบัน', 'Institution Type', 'PSM002.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.INSTITUTION_TYPE),
  createSetupScreen('PS01A0103', 'ทะเบียนสถาบันการศึกษา', 'Educational Institution Category', 'PSM003.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EDUCATIONAL_INSTITUTION_CATEGORY),
  createSetupScreen('PS01A0137', 'ทะเบียนวุฒิการศึกษา', 'Educational Background Table', 'PSM007.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EDUCATIONAL_BACKGROUND_TABLE),
  createSetupScreen('PS01A0104', 'ทะเบียนสาขาการศึกษา', 'Educational Major Subject Table', 'PSM004.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EDUCATIONAL_MAJOR_SUBJECT_TABLE),
  createSetupScreen('PS01A0105', 'ทะเบียนคณะการศึกษา', 'Faculty Table', 'PSM005.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.FACULTY_TABLE),
  createSetupScreen('PS01A0106', 'ทะเบียนระดับการศึกษา', 'Educational Level Table', 'PSM006.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EDUCATIONAL_LEVEL_TABLE),
  createSetupScreen('PS01A0154', 'ทะเบียนอำเภอ', 'District Table', 'PSM051.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.DISTRICT_TABLE),
  createSetupScreen('PS01A0107', 'ทะเบียนจังหวัด', 'Province Table', 'PSM010.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.PROVINCE_TABLE),
  createSetupScreen('PS01A0108', 'ทะเบียนประเทศ', 'Country Table', 'PSM011.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.COUNTRY_TABLE),
  createSetupScreen('PS01A0109', 'ทะเบียนรหัสไปรษณีย์', 'Zipcode Table (New)', 'PSM052.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.ZIPCODE_TABLE),
  createSetupScreen('PS01A0110', 'ทะเบียนสัญชาติ', 'Race Table', 'PSM013.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.RACE_TABLE),
  createSetupScreen('PS01A0111', 'ทะเบียนเชื้อชาติ', 'Nationality Table', 'PSM014.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.NATIONALITY_TABLE),
  createSetupScreen('PS01A0112', 'ทะเบียนศาสนา', 'Religion Table', 'PSM015.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.RELIGION_TABLE),
  createSetupScreen('PS01A0113', 'ทะเบียนความสัมพันธ์', 'Relation Table', 'PSM016.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.RELATION_TABLE),
  createSetupScreen('PS01A0114', 'ทะเบียนระดับเกรด', 'Grade Level Table', 'PSM043.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.GRADE_LEVEL_TABLE),
  createSetupScreen('PSM018', 'ทะเบียนกลุ่มความสามารถพิเศษ', 'Special Abilities Group Table', 'PSM018.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.SPECIAL_ABILITIES_GROUP_TABLE),
  createSetupScreen('PS01A0115', 'ทะเบียนความสามารถพิเศษ', 'Special Abilities Table', 'PSM019.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.SPECIAL_ABILITIES_TABLE),
  createSetupScreen('PS01A0160', 'ทะเบียนความสามารถทางภาษา', 'Languague Skill', 'LANGUAGE_RECORD.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.LANGUAGE_SKILL),
  createSetupScreen('PS01A0116', 'ทะเบียนบัตรต่าง ๆ', 'Personal Cards Detail Table', 'PSM020.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.PERSONAL_CARDS_DETAIL_TABLE),
  createSetupScreen('PS01A01167', 'ทะเบียนค่าพาหนะ', 'Vehicle Table', 'CS013.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.VEHICLE_TABLE),
  createSetupScreen('PS01A0121', 'ทะเบียนธนาคาร', 'Bank Table', 'PSM023.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.BANK_TABLE),
  createSetupScreen('PS01A0122', 'ทะเบียนสาขาธนาคาร', 'Bank Branch Table', 'PSM024.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.BANK_BRANCH_TABLE),
  createSetupScreen('PS01A0123', 'ทะเบียนประเภทเงินกู้', 'Loan Type Table', 'PSM021.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.LOAN_TYPE_TABLE),
  createSetupScreen('PS01A0124', 'ทะเบียนอาชีพ', 'Occupation Table', 'PSM025.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.OCCUPATION_TABLE),
  createSetupScreen('PS01A0125', 'ทะเบียนสิทธิในการเข้าถึงข้อมูล', 'Employee Level Access Register', 'CS048.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EMPLOYEE_LEVEL_ACCESS_REGISTER),
  createSetupScreen('PS01A0126', 'ทะเบียนตำแหน่งตามหน้าที่', 'Function Position Table', 'PS001.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.FUNCTION_POSITION_TABLE),
  createSetupScreen('PS01A0127', 'ทะเบียนกลุ่มพนักงาน', 'Employee Group Table', 'PRU011.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EMPLOYEE_GROUP_TABLE),
  createSetupScreen('PS01A0128', 'ทะเบียนสถานที่ใช้สวัสดิการ', 'Welfare Location Table', 'PRU026.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.WELFARE_LOCATION_TABLE),
  createSetupScreen('PS01A0129', 'ทะเบียนเหตุผลการเคลื่อนไหว', 'Adjustment Reason Table', 'PSM035.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.ADJUSTMENT_REASON_TABLE),
  createSetupScreen('PS01A0130', 'ทะเบียนความดี-ความผิด', 'Goodness or Badness Table', 'CS044.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.GOODNESS_BADNESS_TABLE),
  createSetupScreen('PS01A0131', 'ทะเบียนรางวัลหรือบทลงโทษ', 'Reward Merit Table', 'CS047.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.REWARD_MERIT_TABLE),
  createSetupScreen('PS01A0132', 'ทะเบียนเอกสาร', 'Document Table', 'PSM041.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.DOCUMENT_TABLE),
  createSetupScreen('PS01A0133', 'ทะเบียนเหตุผลการลาออก', 'Resignation Reason Table', 'PSM033.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.RESIGNATION_REASON_TABLE),
  createSetupScreen('PS01A0134', 'ทะเบียนหัวข้อการประเมินของพนักงานกรณีลาออก', 'Resigned Assess Table', 'PSM034.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.RESIGNED_ASSESS_TABLE),
  createSetupScreen('PS01A0120', 'ทะเบียนผลประโยชน์', 'Benefit Table', 'PSM028.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.BENEFIT_TABLE),
  createSetupScreen('PSM029', 'ทะเบียนประเภททรัพย์สิน/พัสดุ', 'Assets Type Table', 'PSM029.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.ASSETS_TYPE_TABLE),
  createSetupScreen('PSM030', 'ทะเบียนทรัพย์สิน/พัสดุ', 'Assets Table', 'PSM030.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.ASSETS_TABLE),
  createSetupScreen('PSM032', 'ทะเบียนเครื่องราชอิสริยาภรณ์', 'Insignia Table', 'PSM032.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.INSIGNIA_TABLE),
  createSetupScreen('PSM042', 'ทะเบียนสาเหตุการแจ้งสิ้นสุดความเป็นผู้ประกันตน', 'SSO Resignation Reason Table', 'PSM042.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.SSO_RESIGNATION_REASON_TABLE),
  createSetupScreen('PSM044', 'ตั้งค่าประเภทการปรับการเคลื่อนไหว', 'Movement Type Active', 'PSM044.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.MOVEMENT_TYPE_ACTIVE),
  createSetupScreen('PSM045', 'รูปแบบรหัสพนักงาน', 'Master Setup Employee ID', 'PSM045.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.MASTER_SETUP_EMPLOYEE_ID),
  createSetupScreen('PSM0451', 'ตั้งค่ารูปแบบรหัสพนักงาน', 'Setup EmployeeID Format', 'PSM0451.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.SETUP_EMPLOYEE_ID_FORMAT),
  createSetupScreen('PSM046', 'ตั้งค่าการเคลียร์ค่าลดหย่อน', 'Tax Allowance list For clearing', 'PSM046.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.TAX_ALLOWANCE_LIST_CLEARING),
  createSetupScreen('PRU202', 'ทะเบียนประเภทพนักงาน', 'Employment Type', 'PRU202.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.EMPLOYMENT_TYPE),
  createSetupScreen('PSM047', 'ทะเบียนสถานะพนักงาน', 'Status Detail', 'PSM047.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.STATUS_DETAIL),
  createSetupScreen('PRU204', 'ทะเบียนประเภทผู้ค้ำประกัน', 'Surety Type', 'PRU204.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.SURETY_TYPE),
  createSetupScreen('PSM048', 'ทะเบียนกลุ่มบัญชีดำ', 'Black List Group', 'PSM048.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.BLACK_LIST_GROUP),
  createSetupScreen('PSM049', 'ทะเบียนบัญชีดำ', 'Black List', 'PSM049.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.BLACK_LIST),
  createSetupScreen('PSM050', 'ทะเบียนประเภทความพิการ', 'Handicapped Type', 'PSM050.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.HANDICAPPED_TYPE),
  createScreenDefinition({
    menuCode: 'PSM105',
    menuNameThai: 'ทะเบียนแม่แบบการขอหนังสือรับรอง',
    menuNameEnglish: 'Certificate Request Template',
    jspFiles: [
      { filename: 'PSM105.jsp', description: 'Main screen' },
      { filename: 'DOCUMENT_PORTAL.jsp', description: 'Related screen' },
      { filename: 'PRU091_PRI.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.CERTIFICATE_REQUEST_TEMPLATE,
    screenType: ScreenType.SETUP
  }),
  createSetupScreen('PSM121', 'ทะเบียนคู่สัญญา', 'Contract Party', 'PSM121.jsp', APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.CONTRACT_PARTY),
  createScreenDefinition({
    menuCode: 'PRU211',
    menuNameThai: 'ทะเบียนกำหนดอัตราค่าจ้างตามตำแหน่งและประเภทพนักงาน',
    menuNameEnglish: 'Custom Salary Rate Table',
    jspFiles: [
      { filename: 'PRU211.jsp', description: 'Main screen' },
      { filename: 'PRU211E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SETUP.CUSTOM_SALARY_RATE_TABLE,
    screenType: ScreenType.SETUP
  })
];

