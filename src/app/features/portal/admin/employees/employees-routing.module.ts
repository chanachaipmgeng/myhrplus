import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/employees-dashboard.component').then(m => m.EmployeesDashboardComponent),
    data: {
      title: 'Personal Management',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'Personal Management', route: '/portal/admin/employees' }
      ]
    }
  },
  // 1. Personal Information (PS01A02)
  {
    path: 'personal-info',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'new-hiring',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'new-hiring-outsource',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'personal-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'personal-information-no-perm',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'salary-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'work-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'work-information-outsource',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'tax-pvf',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'ytd-detail',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'ltd-yearly-summary',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'loan-details',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'grade-appraisal',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'special-skill',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'language-skills',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'beneficiary-details',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'surety-details',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'insurance-details',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'education-background',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee-relations',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'working-experiences',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'other-card',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'period-of-absence',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'address-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'salary-bank-distribution',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'provident-fund',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'tax-index',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'bonus-adjustment-history',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'document-reference',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'awarding-warning',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'assets-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'contract-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'position-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'request-certificate-data',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'black-list-detail',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'handicapped-history',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'personal-note',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'insignia-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'activity-detail',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'training-detail',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'mempl-manpower-number',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'act-for-position',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'workarea-location',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 2. Staff Movement (PS01A08)
  {
    path: 'staff-movement',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'create-staff-movement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'create-staff-contract-movement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee-movement-retraceable',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'view-movement-summary',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'create-resign',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'list-no-promotion',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'turn-over-rate-report',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'adjust-income-deduction',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'adjust-income-deduction-history',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 3. Process (PS01A03)
  {
    path: 'process',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'generate-new-staff-movement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'generate-team-movement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'disclaimed-processing',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'transfer-organize-structure',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'process-organization-chart',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-yearly-salary-increase',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'transfer-loan-data-to-payroll',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'transfer-enforcement-data-to-payroll',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'generate-income-deduction-movement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 4. Import Data (PS01A09)
  {
    path: 'import-data',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'copy-employee-information',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-movement-transaction',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-new-rehire-employee',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'update-employee',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-employee-bank',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-employee-relations',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'import-termination',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 5. Setup (PS01A01)
  {
    path: 'setup',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'title-prefix-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'institution-type',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'educational-institution-category',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'educational-background-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'educational-major-subject-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'faculty-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'educational-level-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'district-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'province-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'country-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'zipcode-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'race-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'nationality-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'religion-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'relation-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'grade-level-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'special-abilities-group-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'special-abilities-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'language-skill',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'personal-cards-detail-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'vehicle-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'bank-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'bank-branch-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'loan-type-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'occupation-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee-level-access-register',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'function-position-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee-group-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'welfare-location-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'adjustment-reason-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'goodness-badness-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'reward-merit-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'document-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'resignation-reason-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'resigned-assess-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'benefit-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'assets-type-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'assets-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'insignia-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'sso-resignation-reason-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'movement-type-active',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'master-setup-employee-id',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'setup-employee-id-format',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'tax-allowance-list-clearing',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employment-type',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'status-detail',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'surety-type',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'black-list-group',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'black-list',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'handicapped-type',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'certificate-request-template',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'contract-party',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'custom-salary-rate-table',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 6. Legal Execution (PS01A05)
  {
    path: 'legal-execution',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'money-register-enforcement',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'enforcement-conditions',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'court-master',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'office-master',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'payment-method-master',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'legal-execution-transfer-process',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'legal-execution-history-transfer-report',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'summary-list-by-office-report',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'cover-form-envelope',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'remittance-form',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'mailing-form',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'employee-summary-report',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'legal-execution-sequestration-money-report',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 7. Options (PS04A)
  {
    path: 'options',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'export-data',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'route-workflow',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 8. Service Charge (PS05A)
  {
    path: 'service-charge',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'service-charge-condition',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'service-charge-profile',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 9. Export Concur (PS06A)
  {
    path: 'export-concur',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'export-data-to-concur',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 10. PDPA Consent (PS010A)
  {
    path: 'pdpa-consent',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'pdpa-consent-config',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  },
  // 11. Terms Of Use (PS09A)
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate personal module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
