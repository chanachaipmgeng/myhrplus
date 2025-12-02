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

  // Portal Routes (Primary - Use these routes)
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

  // Legacy Routes (Deprecated - Redirect to Portal Routes)
  // Use PORTAL.* routes instead
  LEGACY: {
    HOME: '/home',                    // → PORTAL.HOME
    DASHBOARD: '/dashboard',          // → PORTAL.SELF_SERVICE.BASE
    PERSONAL: {
      BASE: '/personal',              // → PORTAL.ADMIN.EMPLOYEES
      HOME: '/personal/home'
    },
    TA: {
      BASE: '/ta',                    // → PORTAL.ADMIN.TIME
      HOME: '/ta/home'
    },
    PAYROLL: {
      BASE: '/payroll',               // → PORTAL.ADMIN.PAYROLL
      HOME: '/payroll/home'
    },
    TRAINING: {
      BASE: '/training',              // → PORTAL.ADMIN.TRAINING
      HOME: '/training/home'
    },
    APPRAISAL: {
      BASE: '/appraisal',             // → PORTAL.ADMIN.APPRAISAL
      HOME: '/appraisal/home'
    },
    RECRUIT: {
      BASE: '/recruit',               // → PORTAL.ADMIN.RECRUIT
      HOME: '/recruit/home'
    },
    WELFARE: {
      BASE: '/welfare',               // → PORTAL.ADMIN.WELFARE
      HOME: '/welfare/home'
    },
    COMPANY: {
      BASE: '/company',               // → PORTAL.ADMIN.COMPANY
      HOME: '/company/home'
    },
    SETTING: {
      BASE: '/setting',               // → PORTAL.ADMIN.SETTINGS
      HOME: '/setting/home'
    }
  },

  // Other Routes
  WORKFLOW: {
    BASE: '/workflow',
    HOME: '/workflow/home',
    INBOX: '/workflow/inbox',
    SENTBOX: '/workflow/sentbox',
    CREATE: '/workflow/create'
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

