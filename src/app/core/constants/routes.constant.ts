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
      COMPANY: {
        BASE: '/portal/admin/company',
        HR: {
          BASE: '/portal/admin/company/hr',
          COMPANY_INFO: {
            BASE: '/portal/admin/company/hr/company-info',
            COMPANY_TYPE: '/portal/admin/company/hr/company-info/company-type',
            COMPANY_GROUP: '/portal/admin/company/hr/company-info/company-group',
            BANK_INFO: '/portal/admin/company/hr/company-info/bank-info',
            ASSETS: '/portal/admin/company/hr/company-info/assets',
            PAPERS: '/portal/admin/company/hr/company-info/papers',
            STRUCTURE: '/portal/admin/company/hr/company-info/structure'
          },
          BRANCH_BUSINESS_UNIT: {
            BASE: '/portal/admin/company/hr/branch-business-unit',
            BRANCH_SOCIAL_SECURITY: '/portal/admin/company/hr/branch-business-unit/branch-social-security',
            DIVISION: '/portal/admin/company/hr/branch-business-unit/division',
            DEPARTMENT: '/portal/admin/company/hr/branch-business-unit/department',
            SECTION: '/portal/admin/company/hr/branch-business-unit/section',
            TEAM: '/portal/admin/company/hr/branch-business-unit/team',
            T2: '/portal/admin/company/hr/branch-business-unit/t2',
            T3: '/portal/admin/company/hr/branch-business-unit/t3',
            T4: '/portal/admin/company/hr/branch-business-unit/t4',
            COMPANY: '/portal/admin/company/hr/branch-business-unit/company',
            BRANCH: '/portal/admin/company/hr/branch-business-unit/branch',
            WORKING_AREA: '/portal/admin/company/hr/branch-business-unit/working-area',
            WORKING_AREA_TYPE: '/portal/admin/company/hr/branch-business-unit/working-area-type',
            PL_TABLE: '/portal/admin/company/hr/branch-business-unit/pl-table',
            APPROVE_LEVEL: '/portal/admin/company/hr/branch-business-unit/approve-level',
            LAT_LNG_WORK_AREA: '/portal/admin/company/hr/branch-business-unit/lat-lng-work-area',
            WORK_AREA_BEACON: '/portal/admin/company/hr/branch-business-unit/work-area-beacon',
            WORKAREA: '/portal/admin/company/hr/branch-business-unit/workarea',
            BRAND_STORE: '/portal/admin/company/hr/branch-business-unit/brand-store',
            ZONE_TYPE: '/portal/admin/company/hr/branch-business-unit/zone-type'
          },
          REPORTING_LINE: {
            BASE: '/portal/admin/company/hr/reporting-line',
            DEFINITION: '/portal/admin/company/hr/reporting-line/definition',
            CHANGE_BOSS: '/portal/admin/company/hr/reporting-line/change-boss'
          },
          JOB_DESCRIPTION: {
            BASE: '/portal/admin/company/hr/job-description',
            POSITION: '/portal/admin/company/hr/job-description/position',
            POSITION_GROUP: '/portal/admin/company/hr/job-description/position-group',
            JOB_GROUP: '/portal/admin/company/hr/job-description/job-group',
            JOB_GRADE: '/portal/admin/company/hr/job-description/job-grade',
            JOB_TITLE: '/portal/admin/company/hr/job-description/job-title',
            JOB_CODE_LEVEL: '/portal/admin/company/hr/job-description/job-code-level'
          },
          MASTER_FILE: {
            BASE: '/portal/admin/company/hr/master-file',
            ROUNDING_OFF: '/portal/admin/company/hr/master-file/rounding-off',
            CHANGE_CODE: '/portal/admin/company/hr/master-file/change-code',
            E_PAYSLIP_SIGNATURE: '/portal/admin/company/hr/master-file/e-payslip-signature',
            KC_KPI_GROUP: '/portal/admin/company/hr/master-file/kc-kpi-group',
            KEY_COMPETENCY: '/portal/admin/company/hr/master-file/key-competency',
            KPI: '/portal/admin/company/hr/master-file/kpi'
          },
          MANPOWER_ANALYST: {
            BASE: '/portal/admin/company/hr/manpower-analyst',
            TYPE: '/portal/admin/company/hr/manpower-analyst/type',
            NUMBER_TABLE: '/portal/admin/company/hr/manpower-analyst/number-table',
            NUMBER_DATA: '/portal/admin/company/hr/manpower-analyst/number-data',
            NUMBER_DETAIL: '/portal/admin/company/hr/manpower-analyst/number-detail'
          },
          MANPOWER: {
            BASE: '/portal/admin/company/hr/manpower',
            GENERATE_BUDGET: '/portal/admin/company/hr/manpower/generate-budget',
            APPROVE_BUDGET: '/portal/admin/company/hr/manpower/approve-budget',
            TURNOVER_REPORT: '/portal/admin/company/hr/manpower/turnover-report',
            COMPARE_PAYROLL: '/portal/admin/company/hr/manpower/compare-payroll',
            REPORT_RECONCILE: '/portal/admin/company/hr/manpower/report-reconcile'
          },
          SETUP: {
            BASE: '/portal/admin/company/hr/setup',
            PROJECT_TABLE: '/portal/admin/company/hr/setup/project-table'
          }
        },
        APPROVE: {
          BASE: '/portal/admin/company/approve',
          APPROVE_BOX: '/portal/admin/company/approve/approve-box',
          APPROVE_BOX_EMPLOYEE: '/portal/admin/company/approve/approve-box-employee',
          APPROVE_BOX_EMPLOYEE_GROUP: '/portal/admin/company/approve/approve-box-employee-group',
          ADJUST_APPROVE_BOX_EMPLOYEE: '/portal/admin/company/approve/adjust-approve-box-employee'
        },
        ESS: {
          BASE: '/portal/admin/company/ess',
          NEWS_SETUP: '/portal/admin/company/ess/news-setup',
          EVENT_SETUP: '/portal/admin/company/ess/event-setup',
          BANNER_SETUP: '/portal/admin/company/ess/banner-setup',
          HANDBOOK_SETUP: '/portal/admin/company/ess/handbook-setup',
          VIDEO_SETUP: '/portal/admin/company/ess/video-setup',
          LOGO_SETUP: '/portal/admin/company/ess/logo-setup',
          EXTERNAL_LINKS_SETUP: '/portal/admin/company/ess/external-links-setup',
          VISION_TABLE: '/portal/admin/company/ess/vision-table',
          MISSION_TABLE: '/portal/admin/company/ess/mission-table',
          COMPANY_HISTORY: '/portal/admin/company/ess/company-history',
          REGULATION_GROUP: '/portal/admin/company/ess/regulation-group',
          REGULATION_TYPE: '/portal/admin/company/ess/regulation-type',
          REGULATION_TABLE: '/portal/admin/company/ess/regulation-table'
        },
        REPORTS: {
          BASE: '/portal/admin/company/reports',
          ROI1001: '/portal/admin/company/reports/roi1001',
          ROI1002: '/portal/admin/company/reports/roi1002',
          ROI1003: '/portal/admin/company/reports/roi1003',
          ROI1004: '/portal/admin/company/reports/roi1004',
          ROI1005: '/portal/admin/company/reports/roi1005',
          ROI1006: '/portal/admin/company/reports/roi1006',
          ROI1007: '/portal/admin/company/reports/roi1007',
          ROI1008: '/portal/admin/company/reports/roi1008',
          ROI1009: '/portal/admin/company/reports/roi1009',
          ROI1010: '/portal/admin/company/reports/roi1010',
          ROI1011: '/portal/admin/company/reports/roi1011',
          ROI1012: '/portal/admin/company/reports/roi1012',
          ROI1012_T3: '/portal/admin/company/reports/roi1012-t3',
          ROI1012_T4: '/portal/admin/company/reports/roi1012-t4',
          ROI1013: '/portal/admin/company/reports/roi1013',
          ROI1014: '/portal/admin/company/reports/roi1014',
          ROI1015: '/portal/admin/company/reports/roi1015',
          ROI1016: '/portal/admin/company/reports/roi1016',
          ROI1017: '/portal/admin/company/reports/roi1017',
          RPI3030: '/portal/admin/company/reports/rpi3030',
          RPI3031: '/portal/admin/company/reports/rpi3031'
        },
        TERMS: {
          BASE: '/portal/admin/company/terms',
          USER_MANUAL: '/portal/admin/company/terms/user-manual'
        }
      },
      SETTINGS: {
        BASE: '/portal/admin/settings',
        USER: {
          BASE: '/portal/admin/settings/user',
          EMAIL_REMINDER: {
            BASE: '/portal/admin/settings/user/email-reminder',
            EMAIL_MASTER: '/portal/admin/settings/user/email-reminder/email-master',
            EMAIL_TEMPLATE_CONTENT: '/portal/admin/settings/user/email-reminder/email-template-content',
            PROBATION_PERIOD_NOTIFICATION: '/portal/admin/settings/user/email-reminder/probation-period-notification',
            NEW_HIRE_NOTIFICATION: '/portal/admin/settings/user/email-reminder/new-hire-notification'
          }
        },
        SYSTEM_ACCESS: {
          BASE: '/portal/admin/settings/system-access'
        },
        USER_LEVEL: {
          BASE: '/portal/admin/settings/user-level'
        },
        PERSONAL_DATA: {
          BASE: '/portal/admin/settings/personal-data'
        },
        OPTIONS: {
          BASE: '/portal/admin/settings/options'
        },
        EXCEL_REPORT: {
          BASE: '/portal/admin/settings/excel-report'
        },
        MAIN_MASTER_DATA: {
          BASE: '/portal/admin/settings/main-master-data'
        },
        WORKFLOW_SCREEN: {
          BASE: '/portal/admin/settings/workflow-screen'
        },
        SWAP_LANGUAGE: {
          BASE: '/portal/admin/settings/swap-language'
        },
        ZEEME_INTERFACE: {
          BASE: '/portal/admin/settings/zeeme-interface'
        },
        BARCODE_GENERATOR: {
          BASE: '/portal/admin/settings/barcode-generator'
        },
        TOKEN_GENERATOR: {
          BASE: '/portal/admin/settings/token-generator'
        },
        DATA_SHOP: {
          BASE: '/portal/admin/settings/data-shop'
        },
        ROUTING_CONFIG: {
          BASE: '/portal/admin/settings/routing-config'
        },
        TERMS: {
          BASE: '/portal/admin/settings/terms',
          USER_MANUAL: '/portal/admin/settings/terms/user-manual'
        }
      }
    }
  },

  // Legacy Routes (Deprecated - Redirect to Portal Routes)
  // Use PORTAL.* routes instead
  LEGACY: {
    HOME: '/home',                    // → PORTAL.HOME
    DASHBOARD: '/dashboard',          // → PORTAL.SELF_SERVICE.BASE
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
  // NOTE: Workflow module has been removed
  // WORKFLOW: {
  //   BASE: '/workflow',
  //   HOME: '/workflow/home',
  //   INBOX: '/workflow/inbox',
  //   SENTBOX: '/workflow/sentbox',
  //   CREATE: '/workflow/create'
  // },

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

