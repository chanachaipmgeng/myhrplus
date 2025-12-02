/**
 * Route Constants
 * Constants สำหรับ route paths ทั้งหมด
 */

export const ROUTES = {
  // Auth Routes
  AUTH: {
    BASE: '/auth',
    LOGIN: '/auth/login',
    UNAUTHORIZED: '/unauthorized',
    FORBIDDEN: '/forbidden'
  },

  // Dashboard & Home
  HOME: '/home',
  DASHBOARD: '/dashboard',
  
  // Portal Routes
  PORTAL: {
    BASE: '/portal',
    HOME: '/portal',
    SELF_SERVICE: {
      BASE: '/portal/self-service',
      TIME: '/portal/self-service/time',
      DOCUMENTS: '/portal/self-service/documents',
      PAYSLIP: '/portal/self-service/payslip',
      PROFILE: '/portal/self-service/profile',
      SUBORDINATES: '/portal/self-service/subordinates',
      WELFARE: '/portal/self-service/welfare',
      LEAVE: '/portal/self-service/leave',
      ATTENDANCE: '/portal/self-service/attendance',
      STATISTICS: '/portal/self-service/statistics'
    },
    ADMIN: {
      BASE: '/portal/admin',
      EMPLOYEES: '/portal/admin/employees',
      COMPANY: '/portal/admin/company',
      PAYROLL: '/portal/admin/payroll',
      TIME: '/portal/admin/time',
      TRAINING: '/portal/admin/training',
      WELFARE: '/portal/admin/welfare',
      RECRUIT: '/portal/admin/recruit',
      APPRAISAL: '/portal/admin/appraisal',
      SETTINGS: '/portal/admin/settings'
    }
  },

  // Feature Modules
  PERSONAL: {
    BASE: '/personal',
    HOME: '/personal/home',
    PROFILE: '/personal/profile',
    PREFERENCES: '/personal/preferences',
    ADDRESS: '/personal/address',
    FAMILY: '/personal/family',
    EDUCATION: '/personal/education',
    WORK_EXPERIENCE: '/personal/work-experience',
    DOCUMENTS: '/personal/documents'
  },

  TA: {
    BASE: '/ta',
    HOME: '/ta/home',
    LEAVE_REQUEST: '/ta/leave-request',
    TIME_EDIT: '/ta/time-edit',
    SHIFT_CHANGE: '/ta/shift-change',
    EXCHANGE_SHIFT: '/ta/exchange-shift',
    OVERTIME: '/ta/overtime',
    MANAGER_APPROVALS: '/ta/manager-approvals',
    REPORTS: '/ta/reports'
  },

  PAYROLL: {
    BASE: '/payroll',
    HOME: '/payroll/home',
    PAYSLIP: '/payroll/payslip',
    TAX_INFO: '/payroll/tax-information',
    DEDUCTIONS: '/payroll/deductions',
    REPORTS: '/payroll/reports'
  },

  TRAINING: {
    BASE: '/training',
    HOME: '/training/home',
    CATALOG: '/training/catalog',
    REGISTRATION: '/training/registration',
    HISTORY: '/training/history',
    CERTIFICATES: '/training/certificates',
    DETAILS: '/training/details',
    REPORTS: '/training/reports'
  },

  APPRAISAL: {
    BASE: '/appraisal',
    HOME: '/appraisal/home',
    GOAL_SETTING: '/appraisal/goal-setting',
    PERFORMANCE: '/appraisal/performance',
    REVIEW: '/appraisal/review',
    HISTORY: '/appraisal/history',
    REPORTS: '/appraisal/reports'
  },

  RECRUIT: {
    BASE: '/recruit',
    HOME: '/recruit/home',
    JOB_POSTINGS: '/recruit/job-postings',
    JOB_DETAILS: '/recruit/job-details',
    CANDIDATE_MANAGEMENT: '/recruit/candidate-management',
    CANDIDATE_DETAILS: '/recruit/candidate-details',
    APPLICATION: '/recruit/application',
    INTERVIEW: '/recruit/interview',
    REPORTS: '/recruit/reports'
  },

  WELFARE: {
    BASE: '/welfare',
    HOME: '/welfare/home',
    BENEFITS: '/welfare/benefits',
    BENEFIT_DETAILS: '/welfare/benefit-details',
    ENROLLMENT: '/welfare/enrollment',
    HISTORY: '/welfare/history',
    REPORTS: '/welfare/reports'
  },

  WORKFLOW: {
    BASE: '/workflow',
    HOME: '/workflow/home',
    INBOX: '/workflow/inbox',
    SENTBOX: '/workflow/sentbox',
    CREATE: '/workflow/create'
  },

  COMPANY: {
    BASE: '/company',
    HOME: '/company/home'
  },

  SETTING: {
    BASE: '/setting',
    HOME: '/setting/home'
  },

  // Demo
  DEMO: '/demo',

  // UI Kit
  UI_KIT: '/ui-kit',
  UI_KIT_BLOCKS: {
    BASE: '/ui-kit/blocks',
    SHOWCASE: '/ui-kit/blocks/showcase',
    AUTH: {
      SIGNIN: '/ui-kit/blocks/auth/signin',
      SIGNUP: '/ui-kit/blocks/auth/signup',
      FORGOT_PASSWORD: '/ui-kit/blocks/auth/forgot-password',
      RESET_PASSWORD: '/ui-kit/blocks/auth/reset-password'
    },
    DASHBOARD: {
      ANALYTICS: '/ui-kit/blocks/dashboard/analytics'
    },
    FORMS: {
      CONTACT: '/ui-kit/blocks/forms/contact'
    }
  },

  // Wildcard
  NOT_FOUND: '/404'
} as const;

