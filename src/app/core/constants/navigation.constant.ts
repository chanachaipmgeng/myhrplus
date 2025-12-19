/**
 * Navigation Constants
 * Constants สำหรับ sidebar navigation structure
 * รองรับ Rail + Drawer structure (Two-layer sidebar)
 */

export interface NavigationChild {
  label: string;
  route?: string; // Optional - parent groups may not have routes
  icon?: string;
  roles?: string[];
  badge?: string;
  badgeColor?: string;
  expanded?: boolean; // For accordion/collapsible state
  children?: NavigationChild[]; // Support nested children for sub-modules (up to 4 levels)
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;              // Icon หลักใน Rail ซ้ายสุด
  roles: string[];          // ['user', 'admin'] - ใครเห็นได้บ้าง
  route?: string;            // Optional - Dashboard route สำหรับโมดูล (หน้าแรกของโมดูล)
  children?: NavigationChild[]; // รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
  badge?: string;
  badgeColor?: string;
}

/**
 * Navigation Items Configuration
 * กำหนดโครงสร้างเมนูสำหรับ sidebar
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  // กลุ่ม 0: Home (ทุกคนมีสิทธิ์เห็น)
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    roles: ['user', 'admin'],
    route: '/portal', // Dashboard route - หน้าแรกของโมดูล
    children: [
      {
        label: 'Dashboard',
        route: '/portal',
        icon: 'dashboard'
      },
      {
        label: 'หน้าแรก',
        route: '/portal',
        icon: 'home'
      }
    ]
  },
  // กลุ่ม 1: Employee Self Service (ทุกคนมีสิทธิ์เห็น)
  {
    id: 'ess',
    label: 'Self Service',
    icon: 'person',    // icon หลักใน Rail ซ้ายสุด (ใช้ person แทน user-circle)
    roles: ['user', 'admin'],
    route: '/portal/self-service', // Dashboard route - หน้าแรกของโมดูล
    children: [              // Level 2 - รายการที่จะไปโผล่ใน Drawer (Rail ที่ 2)
      {
        label: 'Dashboard',
        route: '/portal/self-service',
        icon: 'dashboard'
      },
      {
        label: 'ลงเวลา (Time)',
        route: '/portal/self-service/time',
        icon: 'access_time',
        children: [ // Level 3-4
          { label: 'ลงเวลาเข้า-ออก', route: '/portal/self-service/time/timestamp', icon: 'login' },
          { label: 'แจ้งเตือนเวลา', route: '/portal/self-service/time/time-warning', icon: 'warning' }
        ]
      },
      {
        label: 'ขอเอกสาร (Request)',
        route: '/portal/self-service/documents',
        icon: 'description',
        children: [ // Level 3-4
          { label: 'PND91', route: '/portal/self-service/documents/pnd91', icon: 'description' },
          { label: 'TWI50', route: '/portal/self-service/documents/twi50', icon: 'description' }
        ]
      },
      {
        label: 'สลิปเงินเดือน (Payslip)',
        route: '/portal/self-service/payslip',
        icon: 'receipt'
      },
      {
        label: 'ตรวจสอบข้อมูลตัวเอง',
        route: '/portal/self-service/profile',
        icon: 'person'
      },
      {
        label: 'ลูกน้อง',
        route: '/portal/self-service/subordinates',
        icon: 'people'
      },
      {
        label: 'สวัสดิการ',
        route: '/portal/self-service/welfare',
        icon: 'favorite'
      },
      {
        label: 'ลาพักผ่อน',
        route: '/portal/self-service/leave',
        icon: 'event'
      },
      {
        label: 'การลงเวลา',
        route: '/portal/self-service/attendance',
        icon: 'access_time'
      },
      {
        label: 'สถิติ',
        route: '/portal/self-service/statistics',
        icon: 'bar_chart',
        children: [ // Level 3-4
          { label: 'สถิติการลา', route: '/portal/self-service/statistics/leave', icon: 'bar_chart' },
          { label: 'สถิติ OT', route: '/portal/self-service/statistics/ot', icon: 'bar_chart' },
          { label: 'สถิติแก้ไขเวลา', route: '/portal/self-service/statistics/edit-time', icon: 'bar_chart' }
        ]
      }
    ]
  },

  // กลุ่ม 2: Admin (เห็นเฉพาะผู้ที่มีสิทธิ์)
  {
    id: 'admin',
    label: 'Admin',
    icon: 'shield-check',   // icon หลักใน Rail ซ้ายสุด
    roles: ['admin'],       // User ทั่วไปจะไม่เห็น Icon นี้
    route: '/portal/admin', // Dashboard route - หน้าแรกของโมดูล
    children: [
      // Level 2: Company Management (มี Level 3-4)
      {
        label: 'Company Management',
        icon: 'business',
        route: '/portal/admin/company', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3 - เมนูของโมดูล Company
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/company',
            icon: 'dashboard'
          },
          // 1. Human Resources (CO01A)
          {
            label: 'Human Resources',
            icon: 'business',
            children: [ // Level 4
              // 1.1 Company Information
              {
                label: 'Company Information',
                icon: 'info',
                children: [
                  { label: 'Company Type', route: '/portal/admin/company/human-resources/company-type', icon: 'category' },
                  { label: 'Company Group', route: '/portal/admin/company/human-resources/company-group', icon: 'group_work' },
                  { label: "Bank's Company Information", route: '/portal/admin/company/human-resources/bank-company', icon: 'account_balance' },
                  { label: 'Company Assets Information', route: '/portal/admin/company/human-resources/company-asset', icon: 'inventory' },
                  { label: 'Company Papers Information', route: '/portal/admin/company/human-resources/company-paper', icon: 'description' },
                  { label: 'Company Structure', route: '/portal/admin/company/hr/company-info/structure', icon: 'account_tree' }
                ]
              },
              // 1.2 Branch and Business Unit
              {
                label: 'Branch and Business Unit',
                icon: 'account_tree',
                children: [
                  { label: 'Branch Social Security', route: '/portal/admin/company/human-resources/branch-social-security', icon: 'security' },
                  { label: 'Division', route: '/portal/admin/company/human-resources/division', icon: 'business' },
                  { label: 'Department', route: '/portal/admin/company/human-resources/department', icon: 'folder' },
                  { label: 'Section', route: '/portal/admin/company/human-resources/section', icon: 'folder_open' },
                  { label: 'Team', route: '/portal/admin/company/human-resources/team', icon: 'group' },
                  { label: 'T2', route: '/portal/admin/company/human-resources/t2', icon: 'label' },
                  { label: 'T3', route: '/portal/admin/company/human-resources/t3', icon: 'label' },
                  { label: 'T4', route: '/portal/admin/company/human-resources/t4', icon: 'label' },
                  { label: 'Company', route: '/portal/admin/company/human-resources/company', icon: 'business' },
                  { label: 'Branch', route: '/portal/admin/company/human-resources/branch', icon: 'store' },
                  { label: 'Working Area Table', route: '/portal/admin/company/human-resources/working-area', icon: 'location_on' },
                  { label: 'Working Area Type Table', route: '/portal/admin/company/human-resources/working-area-type', icon: 'category' },
                  { label: 'PL Table', route: '/portal/admin/company/human-resources/pl', icon: 'table_chart' },
                  { label: 'Approve Level Table', route: '/portal/admin/company/human-resources/approve-level', icon: 'verified' },
                  { label: 'Cost Center Table', route: '/portal/admin/company/human-resources/cost-center', icon: 'account_tree' },
                  { label: 'Latitude Longitude Work Area', route: '/portal/admin/company/human-resources/workarea-location', icon: 'location_on' },
                  { label: 'Work Area Location By Beacon', route: '/portal/admin/company/human-resources/workarea-beacon', icon: 'bluetooth_searching' },
                  { label: 'Brand Store Table (STORE)', route: '/portal/admin/company/human-resources/brand-store', icon: 'store' },
                  { label: 'Zone Type Table', route: '/portal/admin/company/human-resources/zone-type', icon: 'map' },
                  { label: 'WorkArea', route: '/portal/admin/company/human-resources/workarea-store', icon: 'work' },
                  { label: 'Brand Store Table (STORE)', route: '/portal/admin/company/hr/branch-business-unit/brand-store', icon: 'storefront' }
                ]
              },
              // 1.3 Reporting Line
              {
                label: 'Reporting Line',
                icon: 'account_tree',
                children: [
                  { label: 'Reporting Line Definition', route: '/portal/admin/company/hr/reporting-line/definition', icon: 'account_tree' },
                  { label: 'Change Boss', route: '/portal/admin/company/hr/reporting-line/change-boss', icon: 'swap_horiz' }
                ]
              },
              // 1.4 Job Description
              {
                label: 'Job Description',
                icon: 'work',
                children: [
                  { label: 'Position Table', route: '/portal/admin/company/hr/job-description/position', icon: 'work' },
                  { label: 'Position Group Register', route: '/portal/admin/company/hr/job-description/position-group', icon: 'group_work' },
                  { label: 'Job Group Table', route: '/portal/admin/company/hr/job-description/job-group', icon: 'folder' },
                  { label: 'Job Grade Table', route: '/portal/admin/company/hr/job-description/job-grade', icon: 'trending_up' },
                  { label: 'Job Title Table', route: '/portal/admin/company/hr/job-description/job-title', icon: 'title' },
                  { label: 'Job Code Level Table', route: '/portal/admin/company/hr/job-description/job-code-level', icon: 'layers' }
                ]
              },
              // 1.5 Master File
              {
                label: 'Master File',
                icon: 'folder',
                children: [
                  { label: 'Rounding-off Table', route: '/portal/admin/company/hr/master-file/rounding-off', icon: 'calculate' },
                  { label: 'Change Master File Code', route: '/portal/admin/company/hr/master-file/change-code', icon: 'edit' },
                  { label: 'Signature for e-Payslip Master', route: '/portal/admin/company/hr/master-file/e-payslip-signature', icon: 'draw' },
                  { label: 'KC/KPI Group', route: '/portal/admin/company/hr/master-file/kc-kpi-group', icon: 'group' },
                  { label: 'Key Competency', route: '/portal/admin/company/hr/master-file/key-competency', icon: 'star' },
                  { label: 'Key Performance Indicators', route: '/portal/admin/company/hr/master-file/kpi', icon: 'assessment' }
                ]
              },
              // 1.6 Manpower Analyst
              {
                label: 'Manpower Analyst',
                icon: 'people',
                children: [
                  { label: 'Manpower Type', route: '/portal/admin/company/hr/manpower-analyst/type', icon: 'category' },
                  { label: 'Manpower Number Table', route: '/portal/admin/company/hr/manpower-analyst/number-table', icon: 'table_chart' },
                  { label: 'Manpower Number Data', route: '/portal/admin/company/hr/manpower-analyst/number-data', icon: 'data_usage' },
                  { label: 'Manpower Number Detail', route: '/portal/admin/company/hr/manpower-analyst/number-detail', icon: 'details' }
                ]
              },
              // 1.7 Manpower
              {
                label: 'Manpower',
                icon: 'people',
                children: [
                  { label: 'Generate Manpower Budget', route: '/portal/admin/company/hr/manpower/generate-budget', icon: 'add_chart' },
                  { label: 'Approve Manpower Budget', route: '/portal/admin/company/hr/manpower/approve-budget', icon: 'check_circle' },
                  { label: 'Turnover Report', route: '/portal/admin/company/hr/manpower/turnover-report', icon: 'assessment' },
                  { label: 'Compare Manpower and Payroll', route: '/portal/admin/company/hr/manpower/compare-payroll', icon: 'compare' },
                  { label: 'Report Excel Report Reconcile', route: '/portal/admin/company/hr/manpower/report-reconcile', icon: 'description' }
                ]
              },
              // 1.8 Setup
              {
                label: 'Setup',
                icon: 'settings',
                children: [
                  { label: 'Project Table', route: '/portal/admin/company/hr/setup/project-table', icon: 'folder' }
                ]
              }
            ]
          },
          // 2. Approve (TA01A08)
          {
            label: 'Approve',
            icon: 'check_circle',
            children: [ // Level 4
              { label: 'ApproveBox', route: '/portal/admin/company/approve/approve-box', icon: 'check_circle' },
              { label: 'ApproveBoxEmployee', route: '/portal/admin/company/approve/approve-box-employee', icon: 'person_check' },
              { label: 'ApproveBoxEmployeeGroup', route: '/portal/admin/company/approve/approve-box-employee-group', icon: 'group' },
              { label: 'AdjustApproveBoxEmployee', route: '/portal/admin/company/approve/adjust-approve-box-employee', icon: 'edit' }
            ]
          },
          // 3. Employee Self Service (CO04A)
          {
            label: 'Employee Self Service',
            icon: 'person',
            children: [ // Level 4
              { label: 'News Setup', route: '/portal/admin/company/ess/news-setup', icon: 'article' },
              { label: 'Event Setup', route: '/portal/admin/company/ess/event-setup', icon: 'event' },
              { label: 'Banner Setup', route: '/portal/admin/company/ess/banner-setup', icon: 'image' },
              { label: 'Handbook Setup', route: '/portal/admin/company/ess/handbook-setup', icon: 'book' },
              { label: 'Video Setup', route: '/portal/admin/company/ess/video-setup', icon: 'video_library' },
              { label: 'Logo Setup', route: '/portal/admin/company/ess/logo-setup', icon: 'image' },
              { label: 'External Links Setup', route: '/portal/admin/company/ess/external-links-setup', icon: 'link' },
              { label: 'Vision Table', route: '/portal/admin/company/ess/vision-table', icon: 'visibility' },
              { label: 'Mission Table', route: '/portal/admin/company/ess/mission-table', icon: 'flag' },
              { label: 'Company History', route: '/portal/admin/company/ess/company-history', icon: 'history' },
              { label: 'Regulation/Order/Notice Group Table', route: '/portal/admin/company/ess/regulation-group', icon: 'gavel' },
              { label: 'Regulation/Order/Notice Type Table', route: '/portal/admin/company/ess/regulation-type', icon: 'category' },
              { label: 'Regulation/Order/Notice Table', route: '/portal/admin/company/ess/regulation-table', icon: 'gavel' }
            ]
          }
        ]
      },
      // Level 2: Personal Management (มี Level 3-4)
      {
        label: 'Personal Management',
        icon: 'people',
        route: '/portal/admin/employees', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3 - เมนูของโมดูล Personal
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/employees',
            icon: 'dashboard'
          },
          // 1. Personal Information (PS01A02)
          {
            label: 'Personal Information',
            icon: 'person',
            children: [ // Level 4
              { label: 'New Hiring', route: '/portal/admin/employees/personal-info/new-hiring', icon: 'person_add' },
              { label: 'New Hiring Outsource', route: '/portal/admin/employees/personal-info/new-hiring-outsource', icon: 'person_add' },
              { label: 'Personal Information', route: '/portal/admin/employees/personal-info/personal-information', icon: 'person' },
              { label: 'Salary Information', route: '/portal/admin/employees/personal-info/salary-information', icon: 'attach_money' },
              { label: 'Work Information', route: '/portal/admin/employees/personal-info/work-information', icon: 'work' },
              { label: 'Work Information Outsource', route: '/portal/admin/employees/personal-info/work-information-outsource', icon: 'work' },
              { label: 'Tax/PVF', route: '/portal/admin/employees/personal-info/tax-pvf', icon: 'receipt' },
              { label: 'Y-T-D Detail', route: '/portal/admin/employees/personal-info/ytd-detail', icon: 'calendar_today' },
              { label: 'L-T-D Yearly Summary', route: '/portal/admin/employees/personal-info/ltd-yearly-summary', icon: 'summarize' },
              { label: 'Loan Details', route: '/portal/admin/employees/personal-info/loan-details', icon: 'account_balance' },
              { label: 'Grade and Appraisal', route: '/portal/admin/employees/personal-info/grade-appraisal', icon: 'star' },
              { label: 'Special Skill', route: '/portal/admin/employees/personal-info/special-skill', icon: 'psychology' },
              { label: 'Language Skills', route: '/portal/admin/employees/personal-info/language-skills', icon: 'translate' },
              { label: 'Beneficiary Details', route: '/portal/admin/employees/personal-info/beneficiary-details', icon: 'people' },
              { label: 'Surety Details', route: '/portal/admin/employees/personal-info/surety-details', icon: 'verified_user' },
              { label: 'Insurance Details', route: '/portal/admin/employees/personal-info/insurance-details', icon: 'health_and_safety' },
              { label: 'Education Background', route: '/portal/admin/employees/personal-info/education-background', icon: 'school' },
              { label: 'Employee Relations', route: '/portal/admin/employees/personal-info/employee-relations', icon: 'group' },
              { label: 'Working Experiences', route: '/portal/admin/employees/personal-info/working-experiences', icon: 'work_history' },
              { label: 'Other Card', route: '/portal/admin/employees/personal-info/other-card', icon: 'credit_card' },
              { label: 'Period of Absence', route: '/portal/admin/employees/personal-info/period-of-absence', icon: 'event_busy' },
              { label: 'Address Information', route: '/portal/admin/employees/personal-info/address-information', icon: 'home' },
              { label: 'Salary Bank Distribution', route: '/portal/admin/employees/personal-info/salary-bank-distribution', icon: 'account_balance' },
              { label: 'Provident Fund', route: '/portal/admin/employees/personal-info/provident-fund', icon: 'savings' },
              { label: 'Tax Index', route: '/portal/admin/employees/personal-info/tax-index', icon: 'calculate' },
              { label: 'Bonus Adjustment History', route: '/portal/admin/employees/personal-info/bonus-adjustment-history', icon: 'history' },
              { label: 'Document Reference', route: '/portal/admin/employees/personal-info/document-reference', icon: 'description' },
              { label: 'Awarding and Warning', route: '/portal/admin/employees/personal-info/awarding-warning', icon: 'gavel' },
              { label: 'Assets Information', route: '/portal/admin/employees/personal-info/assets-information', icon: 'inventory' },
              { label: 'Contract Information', route: '/portal/admin/employees/personal-info/contract-information', icon: 'description' },
              { label: 'Position Information', route: '/portal/admin/employees/personal-info/position-information', icon: 'work' },
              { label: 'Request Certificate Data', route: '/portal/admin/employees/personal-info/request-certificate-data', icon: 'certificate' },
              { label: 'Black List Detail', route: '/portal/admin/employees/personal-info/black-list-detail', icon: 'block' },
              { label: 'Handicapped History', route: '/portal/admin/employees/personal-info/handicapped-history', icon: 'accessible' },
              { label: 'Personal Note', route: '/portal/admin/employees/personal-info/personal-note', icon: 'note' },
              { label: 'Insignia Information', route: '/portal/admin/employees/personal-info/insignia-information', icon: 'military_tech' },
              { label: 'Activity Detail', route: '/portal/admin/employees/personal-info/activity-detail', icon: 'event' },
              { label: 'Training Detail', route: '/portal/admin/employees/personal-info/training-detail', icon: 'school' },
              { label: 'Mempl Manpower Number', route: '/portal/admin/employees/personal-info/mempl-manpower-number', icon: 'people' },
              { label: 'Act for Position', route: '/portal/admin/employees/personal-info/act-for-position', icon: 'work' },
              { label: 'Workarea Location', route: '/portal/admin/employees/personal-info/workarea-location', icon: 'place' }
            ]
          },
          // 2. Staff Movement (PS01A08)
          {
            label: 'Staff Movement',
            icon: 'swap_horiz',
            children: [ // Level 4
              { label: 'Create Staff Movement', route: '/portal/admin/employees/staff-movement/create-staff-movement', icon: 'add' },
              { label: 'Create Staff Contract Movement', route: '/portal/admin/employees/staff-movement/create-staff-contract-movement', icon: 'add' },
              { label: 'Employee Movement Retraceable', route: '/portal/admin/employees/staff-movement/employee-movement-retraceable', icon: 'history' },
              { label: 'View Movement Summary', route: '/portal/admin/employees/staff-movement/view-movement-summary', icon: 'summarize' },
              { label: 'Create Resign', route: '/portal/admin/employees/staff-movement/create-resign', icon: 'exit_to_app' },
              { label: 'List No Promotion', route: '/portal/admin/employees/staff-movement/list-no-promotion', icon: 'list' },
              { label: 'Turn Over Rate Report', route: '/portal/admin/employees/staff-movement/turn-over-rate-report', icon: 'assessment' },
              { label: 'Adjust Income Deduction', route: '/portal/admin/employees/staff-movement/adjust-income-deduction', icon: 'edit' },
              { label: 'Adjust Income Deduction History', route: '/portal/admin/employees/staff-movement/adjust-income-deduction-history', icon: 'history' }
            ]
          },
          // 3. Process (PS01A03)
          {
            label: 'Process',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Generate New Staff Movement', route: '/portal/admin/employees/process/generate-new-staff-movement', icon: 'play_arrow' },
              { label: 'Generate Team Movement', route: '/portal/admin/employees/process/generate-team-movement', icon: 'play_arrow' },
              { label: 'Disclaimed Processing', route: '/portal/admin/employees/process/disclaimed-processing', icon: 'cancel' },
              { label: 'Transfer Organize Structure', route: '/portal/admin/employees/process/transfer-organize-structure', icon: 'swap_horiz' },
              { label: 'Process Organization Chart', route: '/portal/admin/employees/process/process-organization-chart', icon: 'account_tree' },
              { label: 'Import Yearly Salary Increase', route: '/portal/admin/employees/process/import-yearly-salary-increase', icon: 'upload' },
              { label: 'Transfer Loan Data To Payroll', route: '/portal/admin/employees/process/transfer-loan-data-to-payroll', icon: 'sync' },
              { label: 'Transfer Enforcement Data To Payroll', route: '/portal/admin/employees/process/transfer-enforcement-data-to-payroll', icon: 'sync' },
              { label: 'Generate Income Deduction Movement', route: '/portal/admin/employees/process/generate-income-deduction-movement', icon: 'play_arrow' }
            ]
          },
          // 4. Import Data (PS01A09)
          {
            label: 'Import Data',
            icon: 'upload',
            children: [ // Level 4
              { label: 'Copy Employee Information', route: '/portal/admin/employees/import-data/copy-employee-information', icon: 'content_copy' },
              { label: 'Import Movement Transaction', route: '/portal/admin/employees/import-data/import-movement-transaction', icon: 'upload' },
              { label: 'Import New/Rehire Employee', route: '/portal/admin/employees/import-data/import-new-rehire-employee', icon: 'upload' },
              { label: 'Update Employee', route: '/portal/admin/employees/import-data/update-employee', icon: 'update' },
              { label: 'Import Employee Bank', route: '/portal/admin/employees/import-data/import-employee-bank', icon: 'upload' },
              { label: 'Import Employee Relations', route: '/portal/admin/employees/import-data/import-employee-relations', icon: 'upload' },
              { label: 'Import Termination', route: '/portal/admin/employees/import-data/import-termination', icon: 'upload' }
            ]
          },
          // 5. Setup (PS01A01)
          {
            label: 'Setup',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Title Prefix Table', route: '/portal/admin/employees/setup/title-prefix-table', icon: 'badge' },
              { label: 'Institution Type', route: '/portal/admin/employees/setup/institution-type', icon: 'business' },
              { label: 'Educational Institution Category', route: '/portal/admin/employees/setup/educational-institution-category', icon: 'school' },
              { label: 'Educational Background Table', route: '/portal/admin/employees/setup/educational-background-table', icon: 'menu_book' },
              { label: 'Educational Major Subject Table', route: '/portal/admin/employees/setup/educational-major-subject-table', icon: 'subject' },
              { label: 'Faculty Table', route: '/portal/admin/employees/setup/faculty-table', icon: 'account_balance' },
              { label: 'Educational Level Table', route: '/portal/admin/employees/setup/educational-level-table', icon: 'trending_up' },
              { label: 'District Table', route: '/portal/admin/employees/setup/district-table', icon: 'location_city' },
              { label: 'Province Table', route: '/portal/admin/employees/setup/province-table', icon: 'map' },
              { label: 'Country Table', route: '/portal/admin/employees/setup/country-table', icon: 'public' },
              { label: 'Zipcode Table', route: '/portal/admin/employees/setup/zipcode-table', icon: 'markunread_mailbox' },
              { label: 'Race Table', route: '/portal/admin/employees/setup/race-table', icon: 'group' },
              { label: 'Nationality Table', route: '/portal/admin/employees/setup/nationality-table', icon: 'flag' },
              { label: 'Religion Table', route: '/portal/admin/employees/setup/religion-table', icon: 'church' },
              { label: 'Relation Table', route: '/portal/admin/employees/setup/relation-table', icon: 'family_restroom' },
              { label: 'Grade Level Table', route: '/portal/admin/employees/setup/grade-level-table', icon: 'star' },
              { label: 'Special Abilities Group Table', route: '/portal/admin/employees/setup/special-abilities-group-table', icon: 'group' },
              { label: 'Special Abilities Table', route: '/portal/admin/employees/setup/special-abilities-table', icon: 'psychology' },
              { label: 'Language Skill', route: '/portal/admin/employees/setup/language-skill', icon: 'translate' },
              { label: 'Personal Cards Detail Table', route: '/portal/admin/employees/setup/personal-cards-detail-table', icon: 'credit_card' },
              { label: 'Vehicle Table', route: '/portal/admin/employees/setup/vehicle-table', icon: 'directions_car' },
              { label: 'Bank Table', route: '/portal/admin/employees/setup/bank-table', icon: 'account_balance' },
              { label: 'Bank Branch Table', route: '/portal/admin/employees/setup/bank-branch-table', icon: 'store' },
              { label: 'Loan Type Table', route: '/portal/admin/employees/setup/loan-type-table', icon: 'account_balance_wallet' },
              { label: 'Occupation Table', route: '/portal/admin/employees/setup/occupation-table', icon: 'work' },
              { label: 'Employee Level Access Register', route: '/portal/admin/employees/setup/employee-level-access-register', icon: 'security' },
              { label: 'Function Position Table', route: '/portal/admin/employees/setup/function-position-table', icon: 'work' },
              { label: 'Employee Group Table', route: '/portal/admin/employees/setup/employee-group-table', icon: 'group' },
              { label: 'Welfare Location Table', route: '/portal/admin/employees/setup/welfare-location-table', icon: 'place' },
              { label: 'Adjustment Reason Table', route: '/portal/admin/employees/setup/adjustment-reason-table', icon: 'edit' },
              { label: 'Goodness Badness Table', route: '/portal/admin/employees/setup/goodness-badness-table', icon: 'gavel' },
              { label: 'Reward Merit Table', route: '/portal/admin/employees/setup/reward-merit-table', icon: 'emoji_events' },
              { label: 'Document Table', route: '/portal/admin/employees/setup/document-table', icon: 'description' },
              { label: 'Resignation Reason Table', route: '/portal/admin/employees/setup/resignation-reason-table', icon: 'exit_to_app' },
              { label: 'Resigned Assess Table', route: '/portal/admin/employees/setup/resigned-assess-table', icon: 'assessment' },
              { label: 'Benefit Table', route: '/portal/admin/employees/setup/benefit-table', icon: 'favorite' },
              { label: 'Assets Type Table', route: '/portal/admin/employees/setup/assets-type-table', icon: 'category' },
              { label: 'Assets Table', route: '/portal/admin/employees/setup/assets-table', icon: 'inventory' },
              { label: 'Insignia Table', route: '/portal/admin/employees/setup/insignia-table', icon: 'military_tech' },
              { label: 'SSO Resignation Reason Table', route: '/portal/admin/employees/setup/sso-resignation-reason-table', icon: 'exit_to_app' },
              { label: 'Movement Type Active', route: '/portal/admin/employees/setup/movement-type-active', icon: 'swap_horiz' },
              { label: 'Master Setup Employee ID', route: '/portal/admin/employees/setup/master-setup-employee-id', icon: 'badge' },
              { label: 'Setup Employee ID Format', route: '/portal/admin/employees/setup/setup-employee-id-format', icon: 'format_align_center' },
              { label: 'Tax Allowance List Clearing', route: '/portal/admin/employees/setup/tax-allowance-list-clearing', icon: 'calculate' },
              { label: 'Employment Type', route: '/portal/admin/employees/setup/employment-type', icon: 'work' },
              { label: 'Status Detail', route: '/portal/admin/employees/setup/status-detail', icon: 'info' },
              { label: 'Surety Type', route: '/portal/admin/employees/setup/surety-type', icon: 'verified_user' },
              { label: 'Black List Group', route: '/portal/admin/employees/setup/black-list-group', icon: 'group' },
              { label: 'Black List', route: '/portal/admin/employees/setup/black-list', icon: 'block' },
              { label: 'Handicapped Type', route: '/portal/admin/employees/setup/handicapped-type', icon: 'accessible' },
              { label: 'Certificate Request Template', route: '/portal/admin/employees/setup/certificate-request-template', icon: 'description' },
              { label: 'Contract Party', route: '/portal/admin/employees/setup/contract-party', icon: 'handshake' },
              { label: 'Custom Salary Rate Table', route: '/portal/admin/employees/setup/custom-salary-rate-table', icon: 'attach_money' }
            ]
          },
          // 6. Legal Execution (PS01A05)
          {
            label: 'Legal Execution',
            icon: 'gavel',
            children: [ // Level 4
              { label: 'Money Register Enforcement', route: '/portal/admin/employees/legal-execution/money-register-enforcement', icon: 'account_balance' },
              { label: 'Enforcement Conditions', route: '/portal/admin/employees/legal-execution/enforcement-conditions', icon: 'rule' },
              { label: 'Court Master', route: '/portal/admin/employees/legal-execution/court-master', icon: 'gavel' },
              { label: 'Office Master', route: '/portal/admin/employees/legal-execution/office-master', icon: 'business' },
              { label: 'Payment Method Master', route: '/portal/admin/employees/legal-execution/payment-method-master', icon: 'payment' },
              { label: 'Legal Execution Transfer Process', route: '/portal/admin/employees/legal-execution/legal-execution-transfer-process', icon: 'sync' },
              { label: 'Legal Execution History Transfer Report', route: '/portal/admin/employees/legal-execution/legal-execution-history-transfer-report', icon: 'history' },
              { label: 'Summary List By Office Report', route: '/portal/admin/employees/legal-execution/summary-list-by-office-report', icon: 'assessment' },
              { label: 'Cover Form Envelope', route: '/portal/admin/employees/legal-execution/cover-form-envelope', icon: 'mail' },
              { label: 'Remittance Form', route: '/portal/admin/employees/legal-execution/remittance-form', icon: 'description' },
              { label: 'Mailing Form', route: '/portal/admin/employees/legal-execution/mailing-form', icon: 'mail' },
              { label: 'Employee Summary Report', route: '/portal/admin/employees/legal-execution/employee-summary-report', icon: 'assessment' },
              { label: 'Legal Execution Sequestration Money Report', route: '/portal/admin/employees/legal-execution/legal-execution-sequestration-money-report', icon: 'assessment' }
            ]
          },
          // 7. Options (PS04A)
          {
            label: 'Options',
            icon: 'tune',
            children: [ // Level 4
              { label: 'Export Data', route: '/portal/admin/employees/options/export-data', icon: 'download' },
              { label: 'Route Workflow', route: '/portal/admin/employees/options/route-workflow', icon: 'account_tree' }
            ]
          },
          // 8. Service Charge (PS05A)
          {
            label: 'Service Charge',
            icon: 'receipt',
            children: [ // Level 4
              { label: 'Service Charge Condition', route: '/portal/admin/employees/service-charge/service-charge-condition', icon: 'rule' },
              { label: 'Service Charge Profile', route: '/portal/admin/employees/service-charge/service-charge-profile', icon: 'person' }
            ]
          },
          // 9. Export Concur (PS06A)
          {
            label: 'Export Concur',
            icon: 'sync',
            children: [ // Level 4
              { label: 'Export Data To Concur', route: '/portal/admin/employees/export-concur/export-data-to-concur', icon: 'sync' }
            ]
          },
          // 10. PDPA Consent (PS010A)
          {
            label: 'PDPA Consent',
            icon: 'security',
            children: [ // Level 4
              { label: 'PDPA Consent Config', route: '/portal/admin/employees/pdpa-consent/pdpa-consent-config', icon: 'security' }
            ]
          },
          // 11. Terms Of Use (PS09A)
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/employees/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Payroll Management (มี Level 3-4)
      {
        label: 'Payroll Management',
        icon: 'attach_money',
        route: '/portal/admin/payroll', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/payroll',
            icon: 'dashboard'
          },
          // 1. Transaction (PR03A)
          {
            label: 'Transaction',
            icon: 'swap_horiz',
            children: [ // Level 4
              {
                label: 'Before Processing',
                icon: 'play_circle_outline',
                children: [
                  { label: 'Employee Working Hour', route: '/portal/admin/payroll/transaction/before-processing/employee-working-hour', icon: 'access_time' },
                  { label: 'Irregular Income Deduction', route: '/portal/admin/payroll/transaction/before-processing/irregular-income-deduction', icon: 'edit' },
                  { label: 'Other Incomes Deductions', route: '/portal/admin/payroll/transaction/before-processing/other-incomes-deductions', icon: 'list' },
                  { label: 'Generate Salary Retroact', route: '/portal/admin/payroll/transaction/before-processing/generate-salary-retroact', icon: 'play_arrow' },
                  { label: 'Fixed Income Deduction', route: '/portal/admin/payroll/transaction/before-processing/fixed-income-deduction', icon: 'attach_money' },
                  { label: 'Irregular Income Deduction Emp', route: '/portal/admin/payroll/transaction/before-processing/irregular-income-deduction-emp', icon: 'person' },
                  { label: 'Transfer Employee Info', route: '/portal/admin/payroll/transaction/before-processing/transfer-employee-info', icon: 'sync' }
                ]
              },
              {
                label: 'Run Processing',
                icon: 'play_circle',
                children: [
                  { label: 'Run Processing', route: '/portal/admin/payroll/transaction/run-processing', icon: 'play_arrow' }
                ]
              },
              {
                label: 'After Processing',
                icon: 'check_circle',
                children: [
                  { label: 'After Processing', route: '/portal/admin/payroll/transaction/after-processing', icon: 'check_circle' }
                ]
              }
            ]
          },
          // 2. E-Payslip
          {
            label: 'E-Payslip',
            icon: 'receipt',
            children: [ // Level 4
              { label: 'E-Payslip', route: '/portal/admin/payroll/e-payslip', icon: 'receipt' }
            ]
          },
          // 3. Text File Transfer
          {
            label: 'Text File Transfer',
            icon: 'file_upload',
            children: [ // Level 4
              { label: 'Text File Transfer', route: '/portal/admin/payroll/text-file-transfer', icon: 'file_upload' }
            ]
          },
          // 4. Options
          {
            label: 'Options',
            icon: 'tune',
            children: [ // Level 4
              { label: 'Options', route: '/portal/admin/payroll/options', icon: 'tune' }
            ]
          },
          // 5. Setup
          {
            label: 'Setup',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Setup', route: '/portal/admin/payroll/setup', icon: 'settings' }
            ]
          },
          // 6. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/payroll/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Time Management (มี Level 3-4)
      {
        label: 'Time Management',
        icon: 'access_time',
        route: '/portal/admin/time', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/time',
            icon: 'dashboard'
          },
          // 1. Daily Attendance (TA01A051)
          {
            label: 'Daily Attendance',
            icon: 'calendar_today',
            children: [ // Level 4
              { label: 'Daily Attendance', route: '/portal/admin/time/daily-attendance/daily', icon: 'calendar_today' },
              { label: 'Working Time Detail', route: '/portal/admin/time/daily-attendance/working-time-detail', icon: 'access_time' },
              { label: 'Working Time Detail History', route: '/portal/admin/time/daily-attendance/working-time-detail-history', icon: 'history' }
            ]
          },
          // 2. Transaction (TA01A02)
          {
            label: 'Transaction',
            icon: 'swap_horiz',
            children: [ // Level 4
              { label: 'Forget Punch Time', route: '/portal/admin/time/transaction/forget-punch-time', icon: 'schedule' },
              { label: 'Working Hour Request', route: '/portal/admin/time/transaction/working-hour-request', icon: 'request_quote' },
              { label: 'Work Hour Request By Supervisor', route: '/portal/admin/time/transaction/work-hour-request-by-supervisor', icon: 'supervisor_account' }
            ]
          },
          // 3. Data Before Processing
          {
            label: 'Data Before Processing',
            icon: 'play_circle_outline',
            children: [ // Level 4
              { label: 'Data Before Processing', route: '/portal/admin/time/data-before-processing', icon: 'play_circle_outline' }
            ]
          },
          // 4. On Process
          {
            label: 'On Process',
            icon: 'play_circle',
            children: [ // Level 4
              { label: 'On Process', route: '/portal/admin/time/on-process', icon: 'play_circle' }
            ]
          },
          // 5. Data After Processing
          {
            label: 'Data After Processing',
            icon: 'check_circle',
            children: [ // Level 4
              { label: 'Data After Processing', route: '/portal/admin/time/data-after-processing', icon: 'check_circle' }
            ]
          },
          // 6. History
          {
            label: 'History',
            icon: 'history',
            children: [ // Level 4
              { label: 'History', route: '/portal/admin/time/history', icon: 'history' }
            ]
          },
          // 7. Options
          {
            label: 'Options',
            icon: 'tune',
            children: [ // Level 4
              { label: 'Options', route: '/portal/admin/time/options', icon: 'tune' }
            ]
          },
          // 8. Setup
          {
            label: 'Setup',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Setup', route: '/portal/admin/time/setup', icon: 'settings' }
            ]
          },
          // 9. OT Scope
          {
            label: 'OT Scope',
            icon: 'schedule',
            children: [ // Level 4
              { label: 'OT Scope', route: '/portal/admin/time/ot-scope', icon: 'schedule' }
            ]
          },
          // 10. Roster
          {
            label: 'Roster',
            icon: 'calendar_month',
            children: [ // Level 4
              { label: 'Roster', route: '/portal/admin/time/roster', icon: 'calendar_month' }
            ]
          },
          // 11. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/time/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Training Management (มี Level 3-4)
      {
        label: 'Training Management',
        icon: 'school',
        route: '/portal/admin/training', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/training',
            icon: 'dashboard'
          },
          // 1. Setup (TR0101)
          {
            label: 'Setup',
            icon: 'settings',
            children: [ // Level 4
              {
                label: 'Courses',
                icon: 'book',
                children: [
                  { label: 'Course Types', route: '/portal/admin/training/setup/courses/course-types', icon: 'category' },
                  { label: 'Course Groups', route: '/portal/admin/training/setup/courses/course-groups', icon: 'group_work' },
                  { label: 'Course Categories', route: '/portal/admin/training/setup/courses/course-categories', icon: 'folder' },
                  { label: 'Training Type Table', route: '/portal/admin/training/setup/courses/training-type-table', icon: 'table_chart' },
                  { label: 'Courses/Program', route: '/portal/admin/training/setup/courses/courses-program', icon: 'book' },
                  { label: 'DSD Training Type', route: '/portal/admin/training/setup/courses/dsd-training-type', icon: 'category' }
                ]
              },
              {
                label: 'Other Master',
                icon: 'folder',
                children: [
                  { label: 'Other Master', route: '/portal/admin/training/setup/other-master', icon: 'folder' }
                ]
              }
            ]
          },
          // 2. Evaluation Process
          {
            label: 'Evaluation Process',
            icon: 'assessment',
            children: [ // Level 4
              { label: 'Evaluation Process', route: '/portal/admin/training/evaluation-process', icon: 'assessment' }
            ]
          },
          // 3. Transaction
          {
            label: 'Transaction',
            icon: 'swap_horiz',
            children: [ // Level 4
              { label: 'Transaction', route: '/portal/admin/training/transaction', icon: 'swap_horiz' }
            ]
          },
          // 4. History
          {
            label: 'History',
            icon: 'history',
            children: [ // Level 4
              { label: 'History', route: '/portal/admin/training/history', icon: 'history' }
            ]
          },
          // 5. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/training/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Welfare Management (มี Level 3-4)
      {
        label: 'Welfare Management',
        icon: 'favorite',
        route: '/portal/admin/welfare', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/welfare',
            icon: 'dashboard'
          },
          // 1. Master (WE01A01)
          {
            label: 'Master',
            icon: 'folder',
            children: [ // Level 4
              { label: 'Budget Group', route: '/portal/admin/welfare/master/budget-group', icon: 'account_balance_wallet' },
              { label: 'Budget of Year', route: '/portal/admin/welfare/master/budget-of-year', icon: 'calendar_today' },
              { label: 'Location Group', route: '/portal/admin/welfare/master/location-group', icon: 'group' },
              { label: 'Location', route: '/portal/admin/welfare/master/location', icon: 'place' },
              { label: 'Disease Accident', route: '/portal/admin/welfare/master/disease-accident', icon: 'health_and_safety' },
              { label: 'Disease Accident Group', route: '/portal/admin/welfare/master/disease-accident-group', icon: 'group' },
              { label: 'Reference Document', route: '/portal/admin/welfare/master/reference-document', icon: 'description' }
            ]
          },
          // 2. Nursing Room (WE05A)
          {
            label: 'Nursing Room',
            icon: 'local_hospital',
            children: [ // Level 4
              { label: 'Nursing Room', route: '/portal/admin/welfare/nursing-room', icon: 'local_hospital' }
            ]
          },
          // 3. Requisition (WE01A02)
          {
            label: 'Requisition',
            icon: 'request_quote',
            children: [ // Level 4
              { label: 'Requisition', route: '/portal/admin/welfare/requisition', icon: 'request_quote' }
            ]
          },
          // 4. History (WE01A03)
          {
            label: 'History',
            icon: 'history',
            children: [ // Level 4
              { label: 'History', route: '/portal/admin/welfare/history', icon: 'history' }
            ]
          },
          // 5. Process (WE01A04)
          {
            label: 'Process',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Process', route: '/portal/admin/welfare/process', icon: 'settings' }
            ]
          },
          // 6. Webboard (WE02A)
          {
            label: 'Webboard',
            icon: 'forum',
            children: [ // Level 4
              { label: 'Webboard', route: '/portal/admin/welfare/webboard', icon: 'forum' }
            ]
          },
          // 7. Employee (WE03A)
          {
            label: 'Employee',
            icon: 'person',
            children: [ // Level 4
              { label: 'Employee', route: '/portal/admin/welfare/employee', icon: 'person' }
            ]
          },
          // 8. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/welfare/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Recruit Management (มี Level 3-4)
      {
        label: 'Recruit Management',
        icon: 'person_add',
        route: '/portal/admin/recruit', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/recruit',
            icon: 'dashboard'
          },
          // 1. Setup (RE01A01)
          {
            label: 'Setup',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Basic Configuration', route: '/portal/admin/recruit/setup/basic-config', icon: 'settings' },
              { label: 'Interview Committee', route: '/portal/admin/recruit/setup/interview-committee', icon: 'people' },
              { label: 'Skill Level Config', route: '/portal/admin/recruit/setup/skill-level-config', icon: 'trending_up' },
              { label: 'Source of Job', route: '/portal/admin/recruit/setup/source-of-job', icon: 'link' },
              { label: 'Candidate Status', route: '/portal/admin/recruit/setup/candidate-status', icon: 'info' },
              { label: 'Urgency Status', route: '/portal/admin/recruit/setup/urgency-status', icon: 'priority_high' }
            ]
          },
          // 2. Process (RE01A02)
          {
            label: 'Process',
            icon: 'swap_horiz',
            children: [ // Level 4
              { label: 'Process', route: '/portal/admin/recruit/process', icon: 'swap_horiz' }
            ]
          },
          // 3. Jobboard
          {
            label: 'Jobboard',
            icon: 'work',
            children: [ // Level 4
              { label: 'Jobboard', route: '/portal/admin/recruit/jobboard', icon: 'work' }
            ]
          },
          // 4. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/recruit/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Appraisal Management (มี Level 3-4)
      {
        label: 'Appraisal Management',
        icon: 'assessment',
        route: '/portal/admin/appraisal', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/appraisal',
            icon: 'dashboard'
          },
          // 1. Appraisal Type (AS03A)
          {
            label: 'Appraisal Type',
            icon: 'category',
            children: [ // Level 4
              { label: 'Appraisal Type Table', route: '/portal/admin/appraisal/appraisal-type/appraisal-type-table', icon: 'category' }
            ]
          },
          // 2. Appraisal Grade (AS04A)
          {
            label: 'Appraisal Grade',
            icon: 'star',
            children: [ // Level 4
              { label: 'Appraisal Grade', route: '/portal/admin/appraisal/appraisal-grade/appraisal-grade', icon: 'star' },
              { label: 'Grade Table', route: '/portal/admin/appraisal/appraisal-grade/grade-table', icon: 'table_chart' },
              { label: 'Score Deduct Criteria', route: '/portal/admin/appraisal/appraisal-grade/score-deduct-criteria', icon: 'remove_circle' },
              { label: 'Group Grade Salary Adjustment', route: '/portal/admin/appraisal/appraisal-grade/group-grade-salary-adjustment', icon: 'attach_money' }
            ]
          },
          // 3. Appraisal Topic (AS05A)
          {
            label: 'Appraisal Topic',
            icon: 'topic',
            children: [ // Level 4
              { label: 'Appraisal Topic', route: '/portal/admin/appraisal/appraisal-topic', icon: 'topic' }
            ]
          },
          // 4. Appraisal Form (AS06A)
          {
            label: 'Appraisal Form',
            icon: 'description',
            children: [ // Level 4
              { label: 'Appraisal Form', route: '/portal/admin/appraisal/appraisal-form', icon: 'description' }
            ]
          },
          // 5. Appraisal Form Type (AS08A)
          {
            label: 'Appraisal Form Type',
            icon: 'folder',
            children: [ // Level 4
              { label: 'Appraisal Form Type', route: '/portal/admin/appraisal/appraisal-form-type', icon: 'folder' }
            ]
          },
          // 6. Appraisal Document (AS07A)
          {
            label: 'Appraisal Document',
            icon: 'description',
            children: [ // Level 4
              { label: 'Appraisal Document', route: '/portal/admin/appraisal/appraisal-document', icon: 'description' }
            ]
          },
          // 7. Other Data Setup
          {
            label: 'Other Data Setup',
            icon: 'settings',
            children: [ // Level 4
              { label: 'Other Data Setup', route: '/portal/admin/appraisal/other-data-setup', icon: 'settings' }
            ]
          },
          // 8. Appraisal Period
          {
            label: 'Appraisal Period',
            icon: 'calendar_today',
            children: [ // Level 4
              { label: 'Appraisal Period', route: '/portal/admin/appraisal/appraisal-period', icon: 'calendar_today' }
            ]
          },
          // 9. Admin
          {
            label: 'Admin',
            icon: 'admin_panel_settings',
            children: [ // Level 4
              { label: 'Admin', route: '/portal/admin/appraisal/admin', icon: 'admin_panel_settings' }
            ]
          },
          // 10. OKR Appraisal
          {
            label: 'OKR Appraisal',
            icon: 'track_changes',
            children: [ // Level 4
              { label: 'OKR Appraisal', route: '/portal/admin/appraisal/okr-appraisal', icon: 'track_changes' }
            ]
          },
          // 11. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/appraisal/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      },
      // Level 2: Settings (มี Level 3-4)
      {
        label: 'Settings',
        icon: 'settings',
        route: '/portal/admin/settings', // Dashboard route - หน้าแรกของโมดูล
        children: [ // Level 3
          // 0. Dashboard (หน้าแรก)
          {
            label: 'Dashboard',
            route: '/portal/admin/settings',
            icon: 'dashboard'
          },
          // 1. User (ST01A)
          {
            label: 'User',
            icon: 'person',
            children: [ // Level 4
              {
                label: 'Email Reminder',
                icon: 'email',
                children: [
                  { label: 'Email Master', route: '/portal/admin/settings/user/email-reminder/email-master', icon: 'email' },
                  { label: 'Email Template Content', route: '/portal/admin/settings/user/email-reminder/email-template-content', icon: 'description' },
                  { label: 'Probation Period Notification', route: '/portal/admin/settings/user/email-reminder/probation-period-notification', icon: 'notifications' },
                  { label: 'New Hire Notification', route: '/portal/admin/settings/user/email-reminder/new-hire-notification', icon: 'person_add' }
                ]
              }
            ]
          },
          // 2. System Access
          {
            label: 'System Access',
            icon: 'security',
            children: [ // Level 4
              { label: 'System Access', route: '/portal/admin/settings/system-access', icon: 'security' }
            ]
          },
          // 3. User Level
          {
            label: 'User Level',
            icon: 'trending_up',
            children: [ // Level 4
              { label: 'User Level', route: '/portal/admin/settings/user-level', icon: 'trending_up' }
            ]
          },
          // 4. Personal Data
          {
            label: 'Personal Data',
            icon: 'person',
            children: [ // Level 4
              { label: 'Personal Data', route: '/portal/admin/settings/personal-data', icon: 'person' }
            ]
          },
          // 5. Options
          {
            label: 'Options',
            icon: 'tune',
            children: [ // Level 4
              { label: 'Options', route: '/portal/admin/settings/options', icon: 'tune' }
            ]
          },
          // 6. Excel Report
          {
            label: 'Excel Report',
            icon: 'description',
            children: [ // Level 4
              { label: 'Excel Report', route: '/portal/admin/settings/excel-report', icon: 'description' }
            ]
          },
          // 7. Main Master Data
          {
            label: 'Main Master Data',
            icon: 'folder',
            children: [ // Level 4
              { label: 'Main Master Data', route: '/portal/admin/settings/main-master-data', icon: 'folder' }
            ]
          },
          // 8. Workflow Screen
          {
            label: 'Workflow Screen',
            icon: 'account_tree',
            children: [ // Level 4
              { label: 'Workflow Screen', route: '/portal/admin/settings/workflow-screen', icon: 'account_tree' }
            ]
          },
          // 9. Swap Language
          {
            label: 'Swap Language',
            icon: 'translate',
            children: [ // Level 4
              { label: 'Swap Language', route: '/portal/admin/settings/swap-language', icon: 'translate' }
            ]
          },
          // 10. Zeeme Interface
          {
            label: 'Zeeme Interface',
            icon: 'api',
            children: [ // Level 4
              { label: 'Zeeme Interface', route: '/portal/admin/settings/zeeme-interface', icon: 'api' }
            ]
          },
          // 11. Barcode Generator
          {
            label: 'Barcode Generator',
            icon: 'qr_code',
            children: [ // Level 4
              { label: 'Barcode Generator', route: '/portal/admin/settings/barcode-generator', icon: 'qr_code' }
            ]
          },
          // 12. Token Generator
          {
            label: 'Token Generator',
            icon: 'vpn_key',
            children: [ // Level 4
              { label: 'Token Generator', route: '/portal/admin/settings/token-generator', icon: 'vpn_key' }
            ]
          },
          // 13. Data Shop
          {
            label: 'Data Shop',
            icon: 'store',
            children: [ // Level 4
              { label: 'Data Shop', route: '/portal/admin/settings/data-shop', icon: 'store' }
            ]
          },
          // 14. Routing Config
          {
            label: 'Routing Config',
            icon: 'route',
            children: [ // Level 4
              { label: 'Routing Config', route: '/portal/admin/settings/routing-config', icon: 'route' }
            ]
          },
          // 15. Terms Of Use
          {
            label: 'Terms Of Use',
            icon: 'menu_book',
            children: [ // Level 4
              { label: 'User Manual', route: '/portal/admin/settings/terms/user-manual', icon: 'menu_book' }
            ]
          }
        ]
      }
    ]
  }
];

/**
 * Get navigation items filtered by user roles
 * @param userRoles User roles array
 * @returns Filtered navigation items
 */
export function getNavigationItemsByRoles(userRoles: string[]): NavigationItem[] {
  // Normalize roles to lowercase for comparison
  const normalizedUserRoles = userRoles.map(role => role.toLowerCase());

  // Check if user has 'All' role (should see everything)
  const hasAllRole = normalizedUserRoles.includes('all');

  return NAVIGATION_ITEMS.filter(item => {
    // If user has 'All' role, show all items
    if (hasAllRole) {
      return true;
    }

    // Check if user has any of the required roles (case-insensitive)
    return item.roles.some(role => normalizedUserRoles.includes(role.toLowerCase()));
  }).map(item => {
    // Filter children by roles if specified
    if (item.children) {
      const filteredChildren = item.children.filter(child => {
        // If user has 'All' role, show all children
        if (hasAllRole) {
          return true;
        }

        if (!child.roles || child.roles.length === 0) {
          return true; // No role restriction
        }
        // Check roles (case-insensitive)
        return child.roles.some(role => normalizedUserRoles.includes(role.toLowerCase()));
      });
      return { ...item, children: filteredChildren };
    }
    return item;
  });
}

/**
 * Get navigation item by ID
 * @param id Navigation item ID
 * @returns Navigation item or null
 */
export function getNavigationItemById(id: string): NavigationItem | null {
  return NAVIGATION_ITEMS.find(item => item.id === id) || null;
}

/**
 * Get navigation child by route
 * @param route Route path
 * @returns Navigation child or null
 */
export function getNavigationChildByRoute(route: string): NavigationChild | null {
  for (const item of NAVIGATION_ITEMS) {
    if (item.children) {
      const child = item.children.find(c => c.route === route);
      if (child) {
        return child;
      }
    }
  }
  return null;
}

