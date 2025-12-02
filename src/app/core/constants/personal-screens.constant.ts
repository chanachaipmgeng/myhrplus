/**
 * Personal Screens Constant
 * ข้อมูลหน้าจอ Personal Module จากระบบเก่า (JSP)
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
import { setupScreens } from './personal-screens-setup';

/**
 * 1.1 Personal Information Screens (PS01A02)
 */
const personalInformationScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PRU339',
    menuNameThai: 'พนักงานเข้าใหม่',
    menuNameEnglish: 'New Hiring',
    jspFiles: [
      { filename: 'PRU339.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: '1',
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.NEW_HIRING,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU339OS_KEX',
    menuNameThai: 'พนักงานเข้าใหม่ภายใต้คู่สัญญา (Outsource)',
    menuNameEnglish: 'New Hiring Under Contract (Outsource)',
    jspFiles: [
      { filename: 'PRU339OS_KEX.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.NEW_HIRING_OUTSOURCE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0201',
    menuNameThai: 'ข้อมูลส่วนตัว',
    menuNameEnglish: 'Personal Information',
    jspFiles: [
      { filename: 'PRU039.jsp', description: 'Main screen' },
      { filename: 'MYJOB.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.PERSONAL_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0204',
    menuNameThai: 'ข้อมูลส่วนตัว (ไม่ได้กำหนดสิทธิ์)',
    menuNameEnglish: 'Personal Information (no permissions)',
    jspFiles: [
      { filename: 'PRU039_Areeya.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.PERSONAL_INFORMATION_NO_PERM,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0202',
    menuNameThai: 'ข้อมูลเงินเดือน',
    menuNameEnglish: 'Salary Information',
    jspFiles: [
      { filename: 'PRU085.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.SALARY_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0203',
    menuNameThai: 'ข้อมูลการทำงาน',
    menuNameEnglish: 'Work Information',
    jspFiles: [
      { filename: 'PRU040.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.WORK_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU040OS_KEX',
    menuNameThai: 'ข้อมูลการทำงานพนักงานภายใต้คู่สัญญา (Outsource)',
    menuNameEnglish: 'Work Information Under Contract (Outsource)',
    jspFiles: [
      { filename: 'PRU040OS_KEX.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.WORK_INFORMATION_OUTSOURCE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0205',
    menuNameThai: 'ข้อมูลภาษี',
    menuNameEnglish: 'Tax/PVF',
    jspFiles: [
      { filename: 'PRU041.jsp', description: 'Main screen' },
      { filename: 'PRU041_PVF_KKB.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.TAX_PVF,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0207',
    menuNameThai: 'แจงรายได้ในแต่ละเดือน',
    menuNameEnglish: 'Y-T-D Detail',
    jspFiles: [
      { filename: 'PRU045.jsp', description: 'Main screen' },
      { filename: 'PRU046.jsp', description: 'Related screen' },
      { filename: 'PRU045_TAXCOMPUTE.jsp', description: 'Tax compute screen' },
      { filename: 'PRU045_EXP.jsp', description: 'Export screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.YTD_DETAIL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0208',
    menuNameThai: 'ยอดรายได้สะสมปีนี้',
    menuNameEnglish: 'L-T-D Yearly Summary',
    jspFiles: [
      { filename: 'PRU043.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.LTD_YEARLY_SUMMARY,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0210',
    menuNameThai: 'ข้อมูลเงินกู้',
    menuNameEnglish: 'Loan Details',
    jspFiles: [
      { filename: 'PRU096.jsp', description: 'Main screen' },
      { filename: 'PRU097.jsp', description: 'Related screen' },
      { filename: 'PRU097_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.LOAN_DETAILS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0211',
    menuNameThai: 'ข้อมูลเกรดและการประเมิน',
    menuNameEnglish: 'Grade and Appraisal',
    jspFiles: [
      { filename: 'PRU048.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.GRADE_APPRAISAL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0213',
    menuNameThai: 'ข้อมูลความสามารถพิเศษ',
    menuNameEnglish: 'Special Skill',
    jspFiles: [
      { filename: 'PRU051.jsp', description: 'Main screen' },
      { filename: 'PRU052.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.SPECIAL_SKILL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0246',
    menuNameThai: 'ข้อมูลความสามารถทางภาษา',
    menuNameEnglish: 'Language Skills',
    jspFiles: [
      { filename: 'LANGUAGE_SKILL.jsp', description: 'Main screen' },
      { filename: 'LANGUAGE_SKILL_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.LANGUAGE_SKILLS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0214',
    menuNameThai: 'ข้อมูลผู้รับผลประโยชน์',
    menuNameEnglish: 'Beneficiary Details',
    jspFiles: [
      { filename: 'PRU053.jsp', description: 'Main screen' },
      { filename: 'PRU054.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.BENEFICIARY_DETAILS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0219',
    menuNameThai: 'ข้อมูลผู้ค้ำประกัน',
    menuNameEnglish: 'Surety Details',
    jspFiles: [
      { filename: 'PRU078.jsp', description: 'Main screen' },
      { filename: 'PRU078_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.SURETY_DETAILS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU063',
    menuNameThai: 'ข้อมูลประกัน',
    menuNameEnglish: 'Insurance Details',
    jspFiles: [
      { filename: 'PRU063.jsp', description: 'Main screen' },
      { filename: 'PRU064.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.INSURANCE_DETAILS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSU115',
    menuNameThai: 'ข้อมูลประวัติการศึกษา',
    menuNameEnglish: 'Education Background',
    jspFiles: [
      { filename: 'PSU115.jsp', description: 'Main screen' },
      { filename: 'PSU115E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.EDUCATION_BACKGROUND,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0216',
    menuNameThai: 'ข้อมูลบุคคลผู้เกี่ยวข้อง',
    menuNameEnglish: 'Employee Relations',
    jspFiles: [
      { filename: 'PSU117.jsp', description: 'Main screen' },
      { filename: 'PSU117E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.EMPLOYEE_RELATIONS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0217',
    menuNameThai: 'ข้อมูลประสบการณ์การทำงาน',
    menuNameEnglish: 'Working Experiences',
    jspFiles: [
      { filename: 'PRU061.jsp', description: 'Main screen' },
      { filename: 'PRU062.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.WORKING_EXPERIENCES,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0218',
    menuNameThai: 'ข้อมูลบัตรต่างๆ',
    menuNameEnglish: 'Other Card',
    jspFiles: [
      { filename: 'PRU055.jsp', description: 'Main screen' },
      { filename: 'PRU056.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.OTHER_CARD,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0220',
    menuNameThai: 'ข้อมูลช่วงเวลาที่ไม่ทำงาน',
    menuNameEnglish: 'Period of Absence Details',
    jspFiles: [
      { filename: 'PRU065.jsp', description: 'Main screen' },
      { filename: 'PRU066.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.PERIOD_OF_ABSENCE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0221',
    menuNameThai: 'ข้อมูลที่อยู่',
    menuNameEnglish: 'Address Information',
    jspFiles: [
      { filename: 'PRU083.jsp', description: 'Main screen' },
      { filename: 'PRU070.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.ADDRESS_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0222',
    menuNameThai: 'ข้อมูลธนาคาร',
    menuNameEnglish: 'Salary - Bank Distribution',
    jspFiles: [
      { filename: 'PRU067.jsp', description: 'Main screen' },
      { filename: 'PRU068.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.SALARY_BANK_DISTRIBUTION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0223',
    menuNameThai: 'ข้อมูลกองทุนสำรองเลี้ยงชีพ',
    menuNameEnglish: 'Provident Fund',
    jspFiles: [
      { filename: 'PRU074.jsp', description: 'Main screen' },
      { filename: 'PRU075.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.PROVIDENT_FUND,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0224',
    menuNameThai: 'ข้อมูลตารางคำนวณภาษี',
    menuNameEnglish: 'Tax Index',
    jspFiles: [
      { filename: 'PRU080.jsp', description: 'Main screen' },
      { filename: 'PRU081.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.TAX_INDEX,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU099',
    menuNameThai: 'ประวัติการจ่ายโบนัส',
    menuNameEnglish: 'Bonus Adjustment History',
    jspFiles: [
      { filename: 'PRU099.jsp', description: 'Main screen' },
      { filename: 'PRU100.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.BONUS_ADJUSTMENT_HISTORY,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0227',
    menuNameThai: 'ข้อมูลเอกสารอ้างอิง',
    menuNameEnglish: 'Document Reference',
    jspFiles: [
      { filename: 'PRU105.jsp', description: 'Main screen' },
      { filename: 'PRU106.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.DOCUMENT_REFERENCE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0228',
    menuNameThai: 'ข้อมูลความดี/ความผิด',
    menuNameEnglish: 'Awarding and Warning',
    jspFiles: [
      { filename: 'PRU107.jsp', description: 'Main screen' },
      { filename: 'PRU108.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.AWARDING_WARNING,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0229',
    menuNameThai: 'ข้อมูลทรัพย์สินบริษัท',
    menuNameEnglish: 'Assets Information',
    jspFiles: [
      { filename: 'PRU109.jsp', description: 'Main screen' },
      { filename: 'PRU111.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.ASSETS_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU192',
    menuNameThai: 'ข้อมูลการทำสัญญาปฎิบัติงาน',
    menuNameEnglish: 'Contract Information',
    jspFiles: [
      { filename: 'PRU192.jsp', description: 'Main screen' },
      { filename: 'PRU192E.jsp', description: 'Related screen' },
      { filename: 'PRU192E_O.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.CONTRACT_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSU144',
    menuNameThai: 'ข้อมูลตำแหน่งตามหน้าที่',
    menuNameEnglish: 'Position Information',
    jspFiles: [
      { filename: 'PSU001.jsp', description: 'Main screen' },
      { filename: 'PSU001C.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.POSITION_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSU145',
    menuNameThai: 'ข้อมูลการขอหนังสือรับรอง',
    menuNameEnglish: 'Request certificate data',
    jspFiles: [
      { filename: 'PRU089.jsp', description: 'Main screen' },
      { filename: 'PRU090.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.REQUEST_CERTIFICATE_DATA,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU205',
    menuNameThai: 'รายละเอียดบัญชีดำ',
    menuNameEnglish: 'Black List Detail',
    jspFiles: [
      { filename: 'PRU205.jsp', description: 'Main screen' },
      { filename: 'PRU205E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.BLACK_LIST_DETAIL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU206',
    menuNameThai: 'ประวัติผู้พิการ',
    menuNameEnglish: 'Handicapped history',
    jspFiles: [
      { filename: 'PRU206.jsp', description: 'Main screen' },
      { filename: 'PRU206E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.HANDICAPPED_HISTORY,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU207',
    menuNameThai: 'บันทึกส่วนตัว',
    menuNameEnglish: 'Personal Note',
    jspFiles: [
      { filename: 'PRU207.jsp', description: 'Main screen' },
      { filename: 'PRU208.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.PERSONAL_NOTE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSU129',
    menuNameThai: 'ข้อมูลเครื่องราชอิสริยาภรณ์',
    menuNameEnglish: 'Insignia Information',
    jspFiles: [
      { filename: 'PSU129.jsp', description: 'Main screen' },
      { filename: 'PSU129E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.INSIGNIA_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0247',
    menuNameThai: 'ข้อมูลกิจกรรม',
    menuNameEnglish: 'Activity Detail',
    jspFiles: [
      { filename: 'ACTIVITY_DETAIL.jsp', description: 'Main screen' },
      { filename: 'ACTIVITY_DETAIL_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.ACTIVITY_DETAIL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0248',
    menuNameThai: 'ข้อมูลการอบรม',
    menuNameEnglish: 'Training Detail',
    jspFiles: [
      { filename: 'TRAINING_DETAIL.jsp', description: 'Main screen' },
      { filename: 'TRAINING_DETAIL_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.TRAINING_DETAIL,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PRU210',
    menuNameThai: 'รายชื่อผู้ถือครองอัตรา',
    menuNameEnglish: 'Mempl Manpower Number',
    jspFiles: [
      { filename: 'PRU210.jsp', description: 'Main screen' },
      { filename: 'PRU210E.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.MEMPL_MANPOWER_NUMBER,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSU211',
    menuNameThai: 'ข้อมูลตำแหน่งรักษาการ',
    menuNameEnglish: 'Act for Position',
    jspFiles: [
      { filename: 'PSU211.jsp', description: 'Main screen' },
      { filename: 'PSU211_DETAIL.jsp', description: 'Detail screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.ACT_FOR_POSITION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0261',
    menuNameThai: 'ตำแหน่งสถานที่ทำงาน',
    menuNameEnglish: 'Workarea Location',
    jspFiles: [
      { filename: 'PRU261.jsp', description: 'Main screen' },
      { filename: 'PRU261_CHILD.jsp', description: 'Child screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PERSONAL_INFO.WORKAREA_LOCATION,
    screenType: ScreenType.SCREEN
  })
];

/**
 * 1.2 Staff Movement Screens (PS01A08)
 */
const staffMovementScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS01A0225',
    menuNameThai: 'บันทึกการเคลื่อนไหวของพนักงาน',
    menuNameEnglish: 'Create Staff Movement',
    jspFiles: [
      { filename: 'PRU102.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.CREATE_STAFF_MOVEMENT,
    screenType: ScreenType.TRANSACTION
  }),
  createScreenDefinition({
    menuCode: 'PRU102_KEX',
    menuNameThai: 'บันทึกการเคลื่อนไหวของพนักงานภายใต้คู่สัญญา',
    menuNameEnglish: 'Create Staff Under Contract Movement',
    jspFiles: [
      { filename: 'PRU102_KEX.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.CREATE_STAFF_CONTRACT_MOVEMENT,
    screenType: ScreenType.TRANSACTION
  }),
  createScreenDefinition({
    menuCode: 'PS01A0234',
    menuNameThai: 'บันทึกประวัติการเคลื่อนไหวของพนักงาน',
    menuNameEnglish: 'Employee Movement Retraceable Record',
    jspFiles: [
      { filename: 'PRU170.jsp', description: 'Main screen' },
      { filename: 'PRU171.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.EMPLOYEE_MOVEMENT_RETRACEABLE,
    screenType: ScreenType.HISTORY
  }),
  createScreenDefinition({
    menuCode: 'PS01A0226',
    menuNameThai: 'ประวัติการเคลื่อนไหวของพนักงาน',
    menuNameEnglish: 'View Movement Summary',
    jspFiles: [
      { filename: 'PSN113.jsp', description: 'Main screen' },
      { filename: 'PSN114.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.VIEW_MOVEMENT_SUMMARY,
    screenType: ScreenType.HISTORY
  }),
  createScreenDefinition({
    menuCode: 'PS01A0230',
    menuNameThai: 'บันทึกพ้นสภาพ',
    menuNameEnglish: 'Create Resign',
    jspFiles: [
      { filename: 'PSU130.jsp', description: 'Main screen' },
      { filename: 'PSU131.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.CREATE_RESIGN,
    screenType: ScreenType.TRANSACTION
  }),
  createScreenDefinition({
    menuCode: 'PSU132',
    menuNameThai: 'รายชื่อพนักงานที่ไม่มีประวัติการปรับตำแหน่ง',
    menuNameEnglish: 'List of employee without any promotion',
    jspFiles: [
      { filename: 'PSU132.jsp', description: 'Main screen' },
      { filename: 'PSU133.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.LIST_NO_PROMOTION,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PS01A0231',
    menuNameThai: 'รายงาน Turn Over Rate',
    menuNameEnglish: 'Turn Over Rate Report',
    jspFiles: [
      { filename: 'PRU194.jsp', description: 'Main screen' },
      { filename: 'PRU194_EXP.jsp', description: 'Export screen' },
      { filename: 'PRU194_01.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    note: 'Uses linkpageEmp function',
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.TURN_OVER_RATE_REPORT,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PRU212',
    menuNameThai: 'การเคลื่อนไหวรายได้และรายหักประจำ',
    menuNameEnglish: 'Adjust Income and Deduction',
    jspFiles: [
      { filename: 'PRU212.jsp', description: 'Main screen' },
      { filename: 'PRU212A.jsp', description: 'Related screen' },
      { filename: 'PRU212B.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.ADJUST_INCOME_DEDUCTION,
    screenType: ScreenType.TRANSACTION
  }),
  createScreenDefinition({
    menuCode: 'PRU213',
    menuNameThai: 'ประวัติการเคลื่อนไหวรายได้และรายหักประจำ',
    menuNameEnglish: 'Adjust Income and Deduction History',
    jspFiles: [
      { filename: 'PRU213.jsp', description: 'Main screen' },
      { filename: 'PRU213B.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.STAFF_MOVEMENT.ADJUST_INCOME_DEDUCTION_HISTORY,
    screenType: ScreenType.HISTORY
  })
];

/**
 * 1.3 Process Screens (PS01A03)
 */
const processScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS01A0306',
    menuNameThai: 'ประมวลผลพนักงานเข้าใหม่',
    menuNameEnglish: 'Generate New Staff Movement',
    jspFiles: [
      { filename: 'PSP001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.GENERATE_NEW_STAFF_MOVEMENT,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A0302',
    menuNameThai: 'ประมวลผลการเคลื่อนไหว',
    menuNameEnglish: 'Generate Team Movement',
    jspFiles: [
      { filename: 'PSN110.jsp', description: 'Main screen' },
      { filename: 'PSN115.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.GENERATE_TEAM_MOVEMENT,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A1312',
    menuNameThai: 'ประมวลผลพนักงานไม่มาเริ่มงาน',
    menuNameEnglish: 'Disclaimed Processing',
    jspFiles: [
      { filename: 'PSN117.jsp', description: 'Main screen' },
      { filename: 'PSN118.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.DISCLAIMED_PROCESSING,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A0304',
    menuNameThai: 'โอนย้ายหน่วยงาน',
    menuNameEnglish: 'Transfer Organize Structure',
    jspFiles: [
      { filename: 'PSU003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.TRANSFER_ORGANIZE_STRUCTURE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'SM1004',
    menuNameThai: 'ประมวลผลสายบังคับบัญชา',
    menuNameEnglish: 'Process Organization chart',
    jspFiles: [
      { filename: 'SM1004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.PROCESS_ORGANIZATION_CHART,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PRU200',
    menuNameThai: 'นำเข้าข้อมูลการปรับเงินเดือนประจำปีของพนักงาน',
    menuNameEnglish: 'Import Yearly Salary Increase',
    jspFiles: [
      { filename: 'PRU200.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.IMPORT_YEARLY_SALARY_INCREASE,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A0314',
    menuNameThai: 'ส่งข้อมูลเงินกู้เข้า Payroll',
    menuNameEnglish: 'Transfer Loan Data To Payroll',
    jspFiles: [
      { filename: 'PSP003.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.TRANSFER_LOAN_DATA_TO_PAYROLL,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A0315',
    menuNameThai: 'ส่งข้อมูลเงินกรมบังคับคดีเข้า Payroll',
    menuNameEnglish: 'Transfer Enforcement Data To Payroll',
    jspFiles: [
      { filename: 'PSP004.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.TRANSFER_ENFORCEMENT_DATA_TO_PAYROLL,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PS01A0320',
    menuNameThai: 'ประมวลผลการเคลื่อนไหวรายได้และรายหักประจำ',
    menuNameEnglish: 'Generate Income and Deduction Movement',
    jspFiles: [
      { filename: 'PSN111.jsp', description: 'Main screen' },
      { filename: 'PRU212B.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PROCESS.GENERATE_INCOME_DEDUCTION_MOVEMENT,
    screenType: ScreenType.PROCESS
  })
];

/**
 * 1.4 Import Data Screens (PS01A09)
 */
const importDataScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS01A0901',
    menuNameThai: 'คัดลอกข้อมูลพนักงาน',
    menuNameEnglish: 'Copy Employee Information',
    jspFiles: [
      { filename: 'PSU002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.COPY_EMPLOYEE_INFORMATION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0902',
    menuNameThai: 'นำเข้าข้อมูลการปรับตำแหน่งและเงินเดือน',
    menuNameEnglish: 'Import Movement Transaction',
    jspFiles: [
      { filename: 'PSP002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.IMPORT_MOVEMENT_TRANSACTION,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0910',
    menuNameThai: 'นำเข้าข้อมูลพนักงานเข้าใหม่/Rehire',
    menuNameEnglish: 'Import New/Rehire Employee Data',
    jspFiles: [
      { filename: 'PRU341_NEWANDREHIRE_IFRAME.jsp', description: 'Iframe screen' },
      { filename: 'PRU341_NEWANDREHIRE.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.IMPORT_NEW_REHIRE_EMPLOYEE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSN0407',
    menuNameThai: 'ปรับปรุงข้อมูลพนักงาน',
    menuNameEnglish: 'Update Employee',
    jspFiles: [
      { filename: 'PSN0407.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.UPDATE_EMPLOYEE,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0911',
    menuNameThai: 'นำเข้าข้อมูลธนาคาร',
    menuNameEnglish: 'Import Employee Bank',
    jspFiles: [
      { filename: 'PRU343_IFRAME.jsp', description: 'Iframe screen' },
      { filename: 'PRU343.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.IMPORT_EMPLOYEE_BANK,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0905',
    menuNameThai: 'นำเข้าข้อมูลบุคคลผู้เกี่ยวข้อง',
    menuNameEnglish: 'Import Employee Relations Data',
    jspFiles: [
      { filename: 'PRU342.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.IMPORT_EMPLOYEE_RELATIONS,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS01A0906',
    menuNameThai: 'นำเข้าข้อมูลบันทึกพ้นสภาพ',
    menuNameEnglish: 'Import termination of employment',
    jspFiles: [
      { filename: 'PSP005.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.IMPORT_DATA.IMPORT_TERMINATION,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Personal Information Category
 */
const personalInformationCategory: ScreenCategory = {
  categoryCode: 'PS01A02',
  categoryNameThai: 'ข้อมูลส่วนตัว',
  categoryNameEnglish: 'Personal Information',
  screens: personalInformationScreens
};

/**
 * Staff Movement Category
 */
const staffMovementCategory: ScreenCategory = {
  categoryCode: 'PS01A08',
  categoryNameThai: 'การเคลื่อนไหวของพนักงาน',
  categoryNameEnglish: 'Staff Movement',
  screens: staffMovementScreens
};

/**
 * Process Category
 */
const processCategory: ScreenCategory = {
  categoryCode: 'PS01A03',
  categoryNameThai: 'ประมวลผล',
  categoryNameEnglish: 'Process',
  screens: processScreens
};

/**
 * Import Data Category
 */
const importDataCategory: ScreenCategory = {
  categoryCode: 'PS01A09',
  categoryNameThai: 'นำเข้าข้อมูล',
  categoryNameEnglish: 'Import Data',
  screens: importDataScreens
};

/**
 * 1.5 Setup Screens (PS01A01) - 53 screens
 * Imported from personal-screens-setup.ts
 */

/**
 * Setup Category
 */
const setupCategory: ScreenCategory = {
  categoryCode: 'PS01A01',
  categoryNameThai: 'ตั้งค่า (Master Data)',
  categoryNameEnglish: 'Setup (Master Data)',
  screens: setupScreens
};

/**
 * 1.6 Legal Execution Screens (PS01A05)
 */
const legalExecutionScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PSN319',
    menuNameThai: 'ข้อมูลเงินนำส่งกรมบังคับคดี',
    menuNameEnglish: 'Money register sent to the Department of Enforcement',
    jspFiles: [
      { filename: 'PSN319.jsp', description: 'Main screen' },
      { filename: 'PSN319_1.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.MONEY_REGISTER_ENFORCEMENT,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PSN318',
    menuNameThai: 'ทะเบียนเงื่อนไขกรมบังคับคดี',
    menuNameEnglish: 'Enforcement Conditions',
    jspFiles: [
      { filename: 'PSN318.jsp', description: 'Main screen' },
      { filename: 'PRU086.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.ENFORCEMENT_CONDITIONS,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PSM119',
    menuNameThai: 'ทะเบียนศาล',
    menuNameEnglish: 'Court Master',
    jspFiles: [
      { filename: 'PSM119.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.COURT_MASTER,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PSM107',
    menuNameThai: 'ทะเบียนสำนักงาน',
    menuNameEnglish: 'Office Master',
    jspFiles: [
      { filename: 'PSM107.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.OFFICE_MASTER,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PSM108',
    menuNameThai: 'ทะเบียนวิธีชำระ',
    menuNameEnglish: 'Payment Method Master',
    jspFiles: [
      { filename: 'PSM108.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.PAYMENT_METHOD_MASTER,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PSM109',
    menuNameThai: 'ประมวลผลนำส่งกรมบังคับคดี',
    menuNameEnglish: 'Legal Execution Transfer Process',
    jspFiles: [
      { filename: 'PSM109.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.LEGAL_EXECUTION_TRANSFER_PROCESS,
    screenType: ScreenType.PROCESS
  }),
  createScreenDefinition({
    menuCode: 'PSM110',
    menuNameThai: 'รายงานประวัตินำส่งเงินกรมบังคับคดี',
    menuNameEnglish: 'Legal execution history transfer Report',
    jspFiles: [
      { filename: 'PSM110.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.LEGAL_EXECUTION_HISTORY_TRANSFER_REPORT,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM111',
    menuNameThai: 'รายงานสรุปรายชื่อนำส่งกรมบังคับคดีแยกตามสำนักงาน',
    menuNameEnglish: 'Summary list by office Report',
    jspFiles: [
      { filename: 'PSM111.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.SUMMARY_LIST_BY_OFFICE_REPORT,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM112',
    menuNameThai: 'แบบฟอร์มใบปะหน้าจดหมายนำส่งกรมบังคับคดี',
    menuNameEnglish: 'Cover form, envelope, submission to the Legal Execution Department',
    jspFiles: [
      { filename: 'PSM112.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.COVER_FORM_ENVELOPE,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM113',
    menuNameThai: 'แบบฟอร์มนำส่งเงินตามอายัด',
    menuNameEnglish: 'Remittance form',
    jspFiles: [
      { filename: 'PSM113.jsp', description: 'Main screen' },
      { filename: 'PSM113_OPTION.jsp', description: 'Option screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.REMITTANCE_FORM,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM114',
    menuNameThai: 'แบบฟอร์มใบนำส่งไปรษณีย์',
    menuNameEnglish: 'Mailing form',
    jspFiles: [
      { filename: 'PSM114.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.MAILING_FORM,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM115',
    menuNameThai: 'รายงานสรุปตามพนักงาน (กรมบังคับคดี)',
    menuNameEnglish: 'Employee summary report (Legal Execution Department)',
    jspFiles: [
      { filename: 'PSM115.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.EMPLOYEE_SUMMARY_REPORT,
    screenType: ScreenType.REPORT
  }),
  createScreenDefinition({
    menuCode: 'PSM120',
    menuNameThai: 'รายงานนำส่งเงินอายัดกรมบังคับคดี',
    menuNameEnglish: 'Legal execution sequestration money Report',
    jspFiles: [
      { filename: 'PSM120.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: true
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.LEGAL_EXECUTION.LEGAL_EXECUTION_SEQUESTRATION_MONEY_REPORT,
    screenType: ScreenType.REPORT
  })
];

/**
 * Legal Execution Category
 */
const legalExecutionCategory: ScreenCategory = {
  categoryCode: 'PS01A05',
  categoryNameThai: 'กรมบังคับคดี',
  categoryNameEnglish: 'Legal Execution',
  screens: legalExecutionScreens
};

/**
 * 2. Options Screens (PS04A)
 */
const optionsScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS04A01',
    menuNameThai: 'นำข้อมูลออกจากระบบ',
    menuNameEnglish: 'Export Data',
    jspFiles: [
      { filename: 'PRT002.jsp', description: 'Main screen' },
      { filename: 'PRT003.jsp', description: 'Related screen' },
      { filename: 'PRT004.jsp', description: 'Related screen' },
      { filename: 'PRT005.jsp', description: 'Related screen' },
      { filename: 'PRT006.jsp', description: 'Related screen' },
      { filename: 'PRT007.jsp', description: 'Related screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.OPTIONS.EXPORT_DATA,
    screenType: ScreenType.SCREEN
  }),
  createScreenDefinition({
    menuCode: 'PS04A02',
    menuNameThai: 'เส้นทางเวิร์กโฟล์',
    menuNameEnglish: 'Route Workflow',
    jspFiles: [
      { filename: 'RWF001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.OPTIONS.ROUTE_WORKFLOW,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Options Category
 */
const optionsCategory: ScreenCategory = {
  categoryCode: 'PS04A',
  categoryNameThai: 'ตัวเลือก',
  categoryNameEnglish: 'Options',
  screens: optionsScreens
};

/**
 * 3. Service Charge Screens (PS05A)
 */
const serviceChargeScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS05A01',
    menuNameThai: 'เงื่อนไขค่าบริการ',
    menuNameEnglish: 'Service Charge Condition',
    jspFiles: [
      { filename: 'SVC001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SERVICE_CHARGE.SERVICE_CHARGE_CONDITION,
    screenType: ScreenType.SETUP
  }),
  createScreenDefinition({
    menuCode: 'PS05A02',
    menuNameThai: 'ข้อมูลเงินค่าบริการ',
    menuNameEnglish: 'Service Charge Profile',
    jspFiles: [
      { filename: 'SVC002.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: true,
      save: true,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.SERVICE_CHARGE.SERVICE_CHARGE_PROFILE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Service Charge Category
 */
const serviceChargeCategory: ScreenCategory = {
  categoryCode: 'PS05A',
  categoryNameThai: 'ค่าบริการ',
  categoryNameEnglish: 'Service Charge',
  screens: serviceChargeScreens
};

/**
 * 4. Terms Of Use Screens (PS09A)
 */
const termsOfUseScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS09A1',
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
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.TERMS.USER_MANUAL,
    screenType: ScreenType.OTHER
  })
];

/**
 * Terms Of Use Category
 */
const termsOfUseCategory: ScreenCategory = {
  categoryCode: 'PS09A',
  categoryNameThai: 'ข้อกำหนดการใช้งาน',
  categoryNameEnglish: 'Terms Of Use',
  screens: termsOfUseScreens
};

/**
 * 5. Export to Concur Screens (PS06A)
 */
const exportConcurScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS06A',
    menuNameThai: 'Export data to Concur',
    menuNameEnglish: 'Export data to Concur',
    jspFiles: [
      { filename: 'EXDTC001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.EXPORT_CONCUR.BASE,
    screenType: ScreenType.SCREEN
  })
];

/**
 * Export to Concur Category
 */
const exportConcurCategory: ScreenCategory = {
  categoryCode: 'PS06A',
  categoryNameThai: 'ส่งข้อมูลไป Concur',
  categoryNameEnglish: 'Export to Concur',
  screens: exportConcurScreens
};

/**
 * 6. PDPA Consent Screens (PS010A)
 */
const pdpaConsentScreens: ScreenDefinition[] = [
  createScreenDefinition({
    menuCode: 'PS010A1',
    menuNameThai: 'PDPA Consent Configuration',
    menuNameEnglish: 'PDPA Consent Configuration',
    jspFiles: [
      { filename: 'PDPA001.jsp', description: 'Main screen' }
    ],
    permissions: {
      active: true,
      edit: false,
      save: false,
      delete: false
    },
    basePath: 'hrAppWeb.war/PERSONAL/',
    routePath: APP_ROUTES.PORTAL.ADMIN.EMPLOYEES.PDPA_CONSENT.PDPA_CONSENT_CONFIG,
    screenType: ScreenType.SETUP
  })
];

/**
 * PDPA Consent Category
 */
const pdpaConsentCategory: ScreenCategory = {
  categoryCode: 'PS010A',
  categoryNameThai: 'การตั้งค่าความยินยอม PDPA',
  categoryNameEnglish: 'PDPA Consent Configuration',
  screens: pdpaConsentScreens
};

/**
 * Personal Module Inventory
 * ข้อมูลทั้งหมดของ Personal Module
 */
export const PERSONAL_MODULE_INVENTORY: ModuleInventory = {
  moduleCode: 'PS',
  moduleName: 'Personal',
  basePath: 'hrAppWeb.war/PERSONAL/',
  totalScreens: 142, // Total: 42 (Personal Info) + 9 (Staff Movement) + 9 (Process) + 7 (Import) + 53 (Setup) + 13 (Legal) + 2 (Options) + 2 (Service) + 1 (Terms) + 1 (Concur) + 1 (PDPA) = 140
  mainCategories: [
    {
      categoryCode: 'PS01A',
      categoryNameThai: 'Human Resources',
      categoryNameEnglish: 'Human Resources',
      screens: [],
      subCategories: [
        personalInformationCategory,
        staffMovementCategory,
        processCategory,
        importDataCategory,
        setupCategory,
        legalExecutionCategory
      ]
    },
    {
      categoryCode: 'PS04A',
      categoryNameThai: 'ตัวเลือก',
      categoryNameEnglish: 'Options',
      screens: [],
      subCategories: [optionsCategory]
    },
    {
      categoryCode: 'PS05A',
      categoryNameThai: 'ค่าบริการ',
      categoryNameEnglish: 'Service Charge',
      screens: [],
      subCategories: [serviceChargeCategory]
    },
    {
      categoryCode: 'PS09A',
      categoryNameThai: 'ข้อกำหนดการใช้งาน',
      categoryNameEnglish: 'Terms Of Use',
      screens: [],
      subCategories: [termsOfUseCategory]
    },
    {
      categoryCode: 'PS06A',
      categoryNameThai: 'ส่งข้อมูลไป Concur',
      categoryNameEnglish: 'Export to Concur',
      screens: [],
      subCategories: [exportConcurCategory]
    },
    {
      categoryCode: 'PS010A',
      categoryNameThai: 'การตั้งค่าความยินยอม PDPA',
      categoryNameEnglish: 'PDPA Consent Configuration',
      screens: [],
      subCategories: [pdpaConsentCategory]
    }
  ],
  summaryStatistics: {
    'Personal Information': 50,
    'Staff Movement': 10,
    'Process': 10,
    'Import Data': 7,
    'Setup (Master Data)': 60,
    'Legal Execution': 13,
    'Options': 2,
    'Service Charge': 2,
    'Terms Of Use': 1,
    'Export to Concur': 1,
    'PDPA Consent': 1
  }
};

/**
 * Helper function: Get screen by menu code
 */
export function getScreenByMenuCode(menuCode: string): ScreenDefinition | undefined {
  for (const category of PERSONAL_MODULE_INVENTORY.mainCategories) {
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        const screen = subCategory.screens.find(s => s.menuCode === menuCode);
        if (screen) {
          return screen;
        }
      }
    }
  }
  return undefined;
}

/**
 * Helper function: Get screens by category code
 */
export function getScreensByCategoryCode(categoryCode: string): ScreenDefinition[] {
  for (const category of PERSONAL_MODULE_INVENTORY.mainCategories) {
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
export function getAllScreens(): ScreenDefinition[] {
  const screens: ScreenDefinition[] = [];
  for (const category of PERSONAL_MODULE_INVENTORY.mainCategories) {
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        screens.push(...subCategory.screens);
      }
    }
  }
  return screens;
}

