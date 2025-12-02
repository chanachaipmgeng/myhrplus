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
      PAYROLL: {
        BASE: '/portal/admin/payroll',
        TRANSACTION: {
          BASE: '/portal/admin/payroll/transaction',
          BEFORE_PROCESSING: {
            BASE: '/portal/admin/payroll/transaction/before-processing',
            EMPLOYEE_WORKING_HOUR: '/portal/admin/payroll/transaction/before-processing/employee-working-hour',
            IRREGULAR_INCOME_DEDUCTION: '/portal/admin/payroll/transaction/before-processing/irregular-income-deduction',
            OTHER_INCOMES_DEDUCTIONS: '/portal/admin/payroll/transaction/before-processing/other-incomes-deductions',
            GENERATE_SALARY_RETROACT: '/portal/admin/payroll/transaction/before-processing/generate-salary-retroact',
            FIXED_INCOME_DEDUCTION: '/portal/admin/payroll/transaction/before-processing/fixed-income-deduction',
            IRREGULAR_INCOME_DEDUCTION_EMP: '/portal/admin/payroll/transaction/before-processing/irregular-income-deduction-emp',
            TRANSFER_EMPLOYEE_INFO: '/portal/admin/payroll/transaction/before-processing/transfer-employee-info'
          },
          RUN_PROCESSING: {
            BASE: '/portal/admin/payroll/transaction/run-processing'
          },
          AFTER_PROCESSING: {
            BASE: '/portal/admin/payroll/transaction/after-processing'
          }
        },
        E_PAYSLIP: {
          BASE: '/portal/admin/payroll/e-payslip'
        },
        TEXT_FILE_TRANSFER: {
          BASE: '/portal/admin/payroll/text-file-transfer'
        },
        OPTIONS: {
          BASE: '/portal/admin/payroll/options'
        },
        SETUP: {
          BASE: '/portal/admin/payroll/setup'
        },
        TERMS: {
          BASE: '/portal/admin/payroll/terms',
          USER_MANUAL: '/portal/admin/payroll/terms/user-manual'
        }
      },
      TIME: {
        BASE: '/portal/admin/time',
        DAILY_ATTENDANCE: {
          BASE: '/portal/admin/time/daily-attendance',
          DAILY_ATTENDANCE: '/portal/admin/time/daily-attendance/daily',
          WORKING_TIME_DETAIL: '/portal/admin/time/daily-attendance/working-time-detail',
          WORKING_TIME_DETAIL_HISTORY: '/portal/admin/time/daily-attendance/working-time-detail-history'
        },
        TRANSACTION: {
          BASE: '/portal/admin/time/transaction',
          FORGET_PUNCH_TIME: '/portal/admin/time/transaction/forget-punch-time',
          WORKING_HOUR_REQUEST: '/portal/admin/time/transaction/working-hour-request',
          WORK_HOUR_REQUEST_BY_SUPERVISOR: '/portal/admin/time/transaction/work-hour-request-by-supervisor'
        },
        DATA_BEFORE_PROCESSING: {
          BASE: '/portal/admin/time/data-before-processing'
        },
        ON_PROCESS: {
          BASE: '/portal/admin/time/on-process'
        },
        DATA_AFTER_PROCESSING: {
          BASE: '/portal/admin/time/data-after-processing'
        },
        HISTORY: {
          BASE: '/portal/admin/time/history'
        },
        OPTIONS: {
          BASE: '/portal/admin/time/options'
        },
        SETUP: {
          BASE: '/portal/admin/time/setup'
        },
        OT_SCOPE: {
          BASE: '/portal/admin/time/ot-scope'
        },
        ROSTER: {
          BASE: '/portal/admin/time/roster'
        },
        TERMS: {
          BASE: '/portal/admin/time/terms',
          USER_MANUAL: '/portal/admin/time/terms/user-manual'
        }
      },
      TRAINING: {
        BASE: '/portal/admin/training',
        SETUP: {
          BASE: '/portal/admin/training/setup',
          COURSES: {
            BASE: '/portal/admin/training/setup/courses',
            COURSE_TYPES: '/portal/admin/training/setup/courses/course-types',
            COURSE_GROUPS: '/portal/admin/training/setup/courses/course-groups',
            COURSE_CATEGORIES: '/portal/admin/training/setup/courses/course-categories',
            TRAINING_TYPE_TABLE: '/portal/admin/training/setup/courses/training-type-table',
            COURSES_PROGRAM: '/portal/admin/training/setup/courses/courses-program',
            DSD_TRAINING_TYPE: '/portal/admin/training/setup/courses/dsd-training-type'
          },
          OTHER_MASTER: {
            BASE: '/portal/admin/training/setup/other-master'
          }
        },
        EVALUATION_PROCESS: {
          BASE: '/portal/admin/training/evaluation-process'
        },
        TRANSACTION: {
          BASE: '/portal/admin/training/transaction'
        },
        HISTORY: {
          BASE: '/portal/admin/training/history'
        },
        TERMS: {
          BASE: '/portal/admin/training/terms',
          USER_MANUAL: '/portal/admin/training/terms/user-manual'
        }
      },
      WELFARE: {
        BASE: '/portal/admin/welfare',
        MASTER: {
          BASE: '/portal/admin/welfare/master',
          BUDGET_GROUP: '/portal/admin/welfare/master/budget-group',
          BUDGET_OF_YEAR: '/portal/admin/welfare/master/budget-of-year',
          LOCATION_GROUP: '/portal/admin/welfare/master/location-group',
          LOCATION: '/portal/admin/welfare/master/location',
          DISEASE_ACCIDENT: '/portal/admin/welfare/master/disease-accident',
          DISEASE_ACCIDENT_GROUP: '/portal/admin/welfare/master/disease-accident-group',
          REFERENCE_DOCUMENT: '/portal/admin/welfare/master/reference-document'
        },
        NURSING_ROOM: {
          BASE: '/portal/admin/welfare/nursing-room'
        },
        REQUISITION: {
          BASE: '/portal/admin/welfare/requisition'
        },
        HISTORY: {
          BASE: '/portal/admin/welfare/history'
        },
        PROCESS: {
          BASE: '/portal/admin/welfare/process'
        },
        WEBBOARD: {
          BASE: '/portal/admin/welfare/webboard'
        },
        EMPLOYEE: {
          BASE: '/portal/admin/welfare/employee'
        },
        TERMS: {
          BASE: '/portal/admin/welfare/terms',
          USER_MANUAL: '/portal/admin/welfare/terms/user-manual'
        }
      },
      RECRUIT: {
        BASE: '/portal/admin/recruit',
        SETUP: {
          BASE: '/portal/admin/recruit/setup',
          BASIC_CONFIG: '/portal/admin/recruit/setup/basic-config',
          INTERVIEW_COMMITTEE: '/portal/admin/recruit/setup/interview-committee',
          SKILL_LEVEL_CONFIG: '/portal/admin/recruit/setup/skill-level-config',
          SOURCE_OF_JOB: '/portal/admin/recruit/setup/source-of-job',
          CANDIDATE_STATUS: '/portal/admin/recruit/setup/candidate-status',
          URGENCY_STATUS: '/portal/admin/recruit/setup/urgency-status'
        },
        PROCESS: {
          BASE: '/portal/admin/recruit/process'
        },
        JOBBOARD: {
          BASE: '/portal/admin/recruit/jobboard'
        },
        TERMS: {
          BASE: '/portal/admin/recruit/terms',
          USER_MANUAL: '/portal/admin/recruit/terms/user-manual'
        }
      },
      APPRAISAL: {
        BASE: '/portal/admin/appraisal',
        APPRAISAL_TYPE: {
          BASE: '/portal/admin/appraisal/appraisal-type',
          APPRAISAL_TYPE_TABLE: '/portal/admin/appraisal/appraisal-type/appraisal-type-table'
        },
        APPRAISAL_GRADE: {
          BASE: '/portal/admin/appraisal/appraisal-grade',
          APPRAISAL_GRADE: '/portal/admin/appraisal/appraisal-grade/appraisal-grade',
          GRADE_TABLE: '/portal/admin/appraisal/appraisal-grade/grade-table',
          SCORE_DEDUCT_CRITERIA: '/portal/admin/appraisal/appraisal-grade/score-deduct-criteria',
          GROUP_GRADE_SALARY_ADJUSTMENT: '/portal/admin/appraisal/appraisal-grade/group-grade-salary-adjustment'
        },
        APPRAISAL_TOPIC: {
          BASE: '/portal/admin/appraisal/appraisal-topic'
        },
        APPRAISAL_FORM: {
          BASE: '/portal/admin/appraisal/appraisal-form'
        },
        APPRAISAL_FORM_TYPE: {
          BASE: '/portal/admin/appraisal/appraisal-form-type'
        },
        APPRAISAL_DOCUMENT: {
          BASE: '/portal/admin/appraisal/appraisal-document'
        },
        OTHER_DATA_SETUP: {
          BASE: '/portal/admin/appraisal/other-data-setup'
        },
        APPRAISAL_PERIOD: {
          BASE: '/portal/admin/appraisal/appraisal-period'
        },
        ADMIN: {
          BASE: '/portal/admin/appraisal/admin'
        },
        OKR_APPRAISAL: {
          BASE: '/portal/admin/appraisal/okr-appraisal'
        },
        TERMS: {
          BASE: '/portal/admin/appraisal/terms',
          USER_MANUAL: '/portal/admin/appraisal/terms/user-manual'
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
      },
      EMPLOYEES: {
        BASE: '/portal/admin/employees',
        PERSONAL_INFO: {
          BASE: '/portal/admin/employees/personal-info',
          NEW_HIRING: '/portal/admin/employees/personal-info/new-hiring',
          NEW_HIRING_OUTSOURCE: '/portal/admin/employees/personal-info/new-hiring-outsource',
          PERSONAL_INFORMATION: '/portal/admin/employees/personal-info/personal-information',
          PERSONAL_INFORMATION_NO_PERM: '/portal/admin/employees/personal-info/personal-information-no-perm',
          SALARY_INFORMATION: '/portal/admin/employees/personal-info/salary-information',
          WORK_INFORMATION: '/portal/admin/employees/personal-info/work-information',
          WORK_INFORMATION_OUTSOURCE: '/portal/admin/employees/personal-info/work-information-outsource',
          TAX_PVF: '/portal/admin/employees/personal-info/tax-pvf',
          YTD_DETAIL: '/portal/admin/employees/personal-info/ytd-detail',
          LTD_YEARLY_SUMMARY: '/portal/admin/employees/personal-info/ltd-yearly-summary',
          LOAN_DETAILS: '/portal/admin/employees/personal-info/loan-details',
          GRADE_APPRAISAL: '/portal/admin/employees/personal-info/grade-appraisal',
          SPECIAL_SKILL: '/portal/admin/employees/personal-info/special-skill',
          LANGUAGE_SKILLS: '/portal/admin/employees/personal-info/language-skills',
          BENEFICIARY_DETAILS: '/portal/admin/employees/personal-info/beneficiary-details',
          SURETY_DETAILS: '/portal/admin/employees/personal-info/surety-details',
          INSURANCE_DETAILS: '/portal/admin/employees/personal-info/insurance-details',
          EDUCATION_BACKGROUND: '/portal/admin/employees/personal-info/education-background',
          EMPLOYEE_RELATIONS: '/portal/admin/employees/personal-info/employee-relations',
          WORKING_EXPERIENCES: '/portal/admin/employees/personal-info/working-experiences',
          OTHER_CARD: '/portal/admin/employees/personal-info/other-card',
          PERIOD_OF_ABSENCE: '/portal/admin/employees/personal-info/period-of-absence',
          ADDRESS_INFORMATION: '/portal/admin/employees/personal-info/address-information',
          SALARY_BANK_DISTRIBUTION: '/portal/admin/employees/personal-info/salary-bank-distribution',
          PROVIDENT_FUND: '/portal/admin/employees/personal-info/provident-fund',
          TAX_INDEX: '/portal/admin/employees/personal-info/tax-index',
          BONUS_ADJUSTMENT_HISTORY: '/portal/admin/employees/personal-info/bonus-adjustment-history',
          DOCUMENT_REFERENCE: '/portal/admin/employees/personal-info/document-reference',
          AWARDING_WARNING: '/portal/admin/employees/personal-info/awarding-warning',
          ASSETS_INFORMATION: '/portal/admin/employees/personal-info/assets-information',
          CONTRACT_INFORMATION: '/portal/admin/employees/personal-info/contract-information',
          POSITION_INFORMATION: '/portal/admin/employees/personal-info/position-information',
          REQUEST_CERTIFICATE_DATA: '/portal/admin/employees/personal-info/request-certificate-data',
          BLACK_LIST_DETAIL: '/portal/admin/employees/personal-info/black-list-detail',
          HANDICAPPED_HISTORY: '/portal/admin/employees/personal-info/handicapped-history',
          PERSONAL_NOTE: '/portal/admin/employees/personal-info/personal-note',
          INSIGNIA_INFORMATION: '/portal/admin/employees/personal-info/insignia-information',
          ACTIVITY_DETAIL: '/portal/admin/employees/personal-info/activity-detail',
          TRAINING_DETAIL: '/portal/admin/employees/personal-info/training-detail',
          MEMPL_MANPOWER_NUMBER: '/portal/admin/employees/personal-info/mempl-manpower-number',
          ACT_FOR_POSITION: '/portal/admin/employees/personal-info/act-for-position',
          WORKAREA_LOCATION: '/portal/admin/employees/personal-info/workarea-location'
        },
        STAFF_MOVEMENT: {
          BASE: '/portal/admin/employees/staff-movement',
          CREATE_STAFF_MOVEMENT: '/portal/admin/employees/staff-movement/create-staff-movement',
          CREATE_STAFF_CONTRACT_MOVEMENT: '/portal/admin/employees/staff-movement/create-staff-contract-movement',
          EMPLOYEE_MOVEMENT_RETRACEABLE: '/portal/admin/employees/staff-movement/employee-movement-retraceable',
          VIEW_MOVEMENT_SUMMARY: '/portal/admin/employees/staff-movement/view-movement-summary',
          CREATE_RESIGN: '/portal/admin/employees/staff-movement/create-resign',
          LIST_NO_PROMOTION: '/portal/admin/employees/staff-movement/list-no-promotion',
          TURN_OVER_RATE_REPORT: '/portal/admin/employees/staff-movement/turn-over-rate-report',
          ADJUST_INCOME_DEDUCTION: '/portal/admin/employees/staff-movement/adjust-income-deduction',
          ADJUST_INCOME_DEDUCTION_HISTORY: '/portal/admin/employees/staff-movement/adjust-income-deduction-history'
        },
        PROCESS: {
          BASE: '/portal/admin/employees/process',
          GENERATE_NEW_STAFF_MOVEMENT: '/portal/admin/employees/process/generate-new-staff-movement',
          GENERATE_TEAM_MOVEMENT: '/portal/admin/employees/process/generate-team-movement',
          DISCLAIMED_PROCESSING: '/portal/admin/employees/process/disclaimed-processing',
          TRANSFER_ORGANIZE_STRUCTURE: '/portal/admin/employees/process/transfer-organize-structure',
          PROCESS_ORGANIZATION_CHART: '/portal/admin/employees/process/process-organization-chart',
          IMPORT_YEARLY_SALARY_INCREASE: '/portal/admin/employees/process/import-yearly-salary-increase',
          TRANSFER_LOAN_DATA_TO_PAYROLL: '/portal/admin/employees/process/transfer-loan-data-to-payroll',
          TRANSFER_ENFORCEMENT_DATA_TO_PAYROLL: '/portal/admin/employees/process/transfer-enforcement-data-to-payroll',
          GENERATE_INCOME_DEDUCTION_MOVEMENT: '/portal/admin/employees/process/generate-income-deduction-movement'
        },
        IMPORT_DATA: {
          BASE: '/portal/admin/employees/import-data',
          COPY_EMPLOYEE_INFORMATION: '/portal/admin/employees/import-data/copy-employee-information',
          IMPORT_MOVEMENT_TRANSACTION: '/portal/admin/employees/import-data/import-movement-transaction',
          IMPORT_NEW_REHIRE_EMPLOYEE: '/portal/admin/employees/import-data/import-new-rehire-employee',
          UPDATE_EMPLOYEE: '/portal/admin/employees/import-data/update-employee',
          IMPORT_EMPLOYEE_BANK: '/portal/admin/employees/import-data/import-employee-bank',
          IMPORT_EMPLOYEE_RELATIONS: '/portal/admin/employees/import-data/import-employee-relations',
          IMPORT_TERMINATION: '/portal/admin/employees/import-data/import-termination'
        },
        SETUP: {
          BASE: '/portal/admin/employees/setup',
          TITLE_PREFIX_TABLE: '/portal/admin/employees/setup/title-prefix-table',
          INSTITUTION_TYPE: '/portal/admin/employees/setup/institution-type',
          EDUCATIONAL_INSTITUTION_CATEGORY: '/portal/admin/employees/setup/educational-institution-category',
          EDUCATIONAL_BACKGROUND_TABLE: '/portal/admin/employees/setup/educational-background-table',
          EDUCATIONAL_MAJOR_SUBJECT_TABLE: '/portal/admin/employees/setup/educational-major-subject-table',
          FACULTY_TABLE: '/portal/admin/employees/setup/faculty-table',
          EDUCATIONAL_LEVEL_TABLE: '/portal/admin/employees/setup/educational-level-table',
          DISTRICT_TABLE: '/portal/admin/employees/setup/district-table',
          PROVINCE_TABLE: '/portal/admin/employees/setup/province-table',
          COUNTRY_TABLE: '/portal/admin/employees/setup/country-table',
          ZIPCODE_TABLE: '/portal/admin/employees/setup/zipcode-table',
          RACE_TABLE: '/portal/admin/employees/setup/race-table',
          NATIONALITY_TABLE: '/portal/admin/employees/setup/nationality-table',
          RELIGION_TABLE: '/portal/admin/employees/setup/religion-table',
          RELATION_TABLE: '/portal/admin/employees/setup/relation-table',
          GRADE_LEVEL_TABLE: '/portal/admin/employees/setup/grade-level-table',
          SPECIAL_ABILITIES_GROUP_TABLE: '/portal/admin/employees/setup/special-abilities-group-table',
          SPECIAL_ABILITIES_TABLE: '/portal/admin/employees/setup/special-abilities-table',
          LANGUAGE_SKILL: '/portal/admin/employees/setup/language-skill',
          PERSONAL_CARDS_DETAIL_TABLE: '/portal/admin/employees/setup/personal-cards-detail-table',
          VEHICLE_TABLE: '/portal/admin/employees/setup/vehicle-table',
          BANK_TABLE: '/portal/admin/employees/setup/bank-table',
          BANK_BRANCH_TABLE: '/portal/admin/employees/setup/bank-branch-table',
          LOAN_TYPE_TABLE: '/portal/admin/employees/setup/loan-type-table',
          OCCUPATION_TABLE: '/portal/admin/employees/setup/occupation-table',
          EMPLOYEE_LEVEL_ACCESS_REGISTER: '/portal/admin/employees/setup/employee-level-access-register',
          FUNCTION_POSITION_TABLE: '/portal/admin/employees/setup/function-position-table',
          EMPLOYEE_GROUP_TABLE: '/portal/admin/employees/setup/employee-group-table',
          WELFARE_LOCATION_TABLE: '/portal/admin/employees/setup/welfare-location-table',
          ADJUSTMENT_REASON_TABLE: '/portal/admin/employees/setup/adjustment-reason-table',
          GOODNESS_BADNESS_TABLE: '/portal/admin/employees/setup/goodness-badness-table',
          REWARD_MERIT_TABLE: '/portal/admin/employees/setup/reward-merit-table',
          DOCUMENT_TABLE: '/portal/admin/employees/setup/document-table',
          RESIGNATION_REASON_TABLE: '/portal/admin/employees/setup/resignation-reason-table',
          RESIGNED_ASSESS_TABLE: '/portal/admin/employees/setup/resigned-assess-table',
          BENEFIT_TABLE: '/portal/admin/employees/setup/benefit-table',
          ASSETS_TYPE_TABLE: '/portal/admin/employees/setup/assets-type-table',
          ASSETS_TABLE: '/portal/admin/employees/setup/assets-table',
          INSIGNIA_TABLE: '/portal/admin/employees/setup/insignia-table',
          SSO_RESIGNATION_REASON_TABLE: '/portal/admin/employees/setup/sso-resignation-reason-table',
          MOVEMENT_TYPE_ACTIVE: '/portal/admin/employees/setup/movement-type-active',
          MASTER_SETUP_EMPLOYEE_ID: '/portal/admin/employees/setup/master-setup-employee-id',
          SETUP_EMPLOYEE_ID_FORMAT: '/portal/admin/employees/setup/setup-employee-id-format',
          TAX_ALLOWANCE_LIST_CLEARING: '/portal/admin/employees/setup/tax-allowance-list-clearing',
          EMPLOYMENT_TYPE: '/portal/admin/employees/setup/employment-type',
          STATUS_DETAIL: '/portal/admin/employees/setup/status-detail',
          SURETY_TYPE: '/portal/admin/employees/setup/surety-type',
          BLACK_LIST_GROUP: '/portal/admin/employees/setup/black-list-group',
          BLACK_LIST: '/portal/admin/employees/setup/black-list',
          HANDICAPPED_TYPE: '/portal/admin/employees/setup/handicapped-type',
          CERTIFICATE_REQUEST_TEMPLATE: '/portal/admin/employees/setup/certificate-request-template',
          CONTRACT_PARTY: '/portal/admin/employees/setup/contract-party',
          CUSTOM_SALARY_RATE_TABLE: '/portal/admin/employees/setup/custom-salary-rate-table'
        },
        LEGAL_EXECUTION: {
          BASE: '/portal/admin/employees/legal-execution',
          MONEY_REGISTER_ENFORCEMENT: '/portal/admin/employees/legal-execution/money-register-enforcement',
          ENFORCEMENT_CONDITIONS: '/portal/admin/employees/legal-execution/enforcement-conditions',
          COURT_MASTER: '/portal/admin/employees/legal-execution/court-master',
          OFFICE_MASTER: '/portal/admin/employees/legal-execution/office-master',
          PAYMENT_METHOD_MASTER: '/portal/admin/employees/legal-execution/payment-method-master',
          LEGAL_EXECUTION_TRANSFER_PROCESS: '/portal/admin/employees/legal-execution/legal-execution-transfer-process',
          LEGAL_EXECUTION_HISTORY_TRANSFER_REPORT: '/portal/admin/employees/legal-execution/legal-execution-history-transfer-report',
          SUMMARY_LIST_BY_OFFICE_REPORT: '/portal/admin/employees/legal-execution/summary-list-by-office-report',
          COVER_FORM_ENVELOPE: '/portal/admin/employees/legal-execution/cover-form-envelope',
          REMITTANCE_FORM: '/portal/admin/employees/legal-execution/remittance-form',
          MAILING_FORM: '/portal/admin/employees/legal-execution/mailing-form',
          EMPLOYEE_SUMMARY_REPORT: '/portal/admin/employees/legal-execution/employee-summary-report',
          LEGAL_EXECUTION_SEQUESTRATION_MONEY_REPORT: '/portal/admin/employees/legal-execution/legal-execution-sequestration-money-report'
        },
        OPTIONS: {
          BASE: '/portal/admin/employees/options',
          EXPORT_DATA: '/portal/admin/employees/options/export-data',
          ROUTE_WORKFLOW: '/portal/admin/employees/options/route-workflow'
        },
        SERVICE_CHARGE: {
          BASE: '/portal/admin/employees/service-charge',
          SERVICE_CHARGE_CONDITION: '/portal/admin/employees/service-charge/service-charge-condition',
          SERVICE_CHARGE_PROFILE: '/portal/admin/employees/service-charge/service-charge-profile'
        },
        EXPORT_CONCUR: {
          BASE: '/portal/admin/employees/export-concur',
          EXPORT_DATA_TO_CONCUR: '/portal/admin/employees/export-concur/export-data-to-concur'
        },
        PDPA_CONSENT: {
          BASE: '/portal/admin/employees/pdpa-consent',
          PDPA_CONSENT_CONFIG: '/portal/admin/employees/pdpa-consent/pdpa-consent-config'
        },
        TERMS: {
          BASE: '/portal/admin/employees/terms',
          USER_MANUAL: '/portal/admin/employees/terms/user-manual'
        }
      }
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

