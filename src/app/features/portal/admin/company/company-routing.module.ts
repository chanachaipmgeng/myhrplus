import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing company module
    redirectTo: '/company/home',
    pathMatch: 'full'
  },
  // 1. Human Resources (CO01A)
  {
    path: 'hr',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      // 1.1 Company Information
      {
        path: 'company-info',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'company-type',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'company-group',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'bank-info',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'assets',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'papers',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'structure',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.2 Branch and Business Unit
      {
        path: 'branch-business-unit',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'branch-social-security',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'division',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'department',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'section',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'team',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 't2',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 't3',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 't4',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'company',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'branch',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'working-area',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'working-area-type',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'pl-table',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'approve-level',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'lat-lng-work-area',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'work-area-beacon',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'workarea',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'brand-store',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'zone-type',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.3 Reporting Line
      {
        path: 'reporting-line',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'definition',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'change-boss',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.4 Job Description
      {
        path: 'job-description',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'position',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'position-group',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'job-group',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'job-grade',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'job-title',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'job-code-level',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.5 Master File
      {
        path: 'master-file',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'rounding-off',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'change-code',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'e-payslip-signature',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'kc-kpi-group',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'key-competency',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'kpi',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.6 Manpower Analyst
      {
        path: 'manpower-analyst',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'type',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'number-table',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'number-data',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'number-detail',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.7 Manpower
      {
        path: 'manpower',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'generate-budget',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'approve-budget',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'turnover-report',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'compare-payroll',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'report-reconcile',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      },
      // 1.8 Setup
      {
        path: 'setup',
        children: [
          {
            path: '',
            redirectTo: '/company/home',
            pathMatch: 'full'
          },
          {
            path: 'project-table',
            redirectTo: '/company/home',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  // 2. Approve (TA01A08)
  {
    path: 'approve',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'approve-box',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'approve-box-employee',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'approve-box-employee-group',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'adjust-approve-box-employee',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  },
  // 3. Employee Self Service (CO04A)
  {
    path: 'ess',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'news-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'event-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'banner-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'handbook-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'video-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'logo-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'external-links-setup',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'vision-table',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'mission-table',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'company-history',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'regulation-group',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'regulation-type',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'regulation-table',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  },
  // 4. Reports (CO02A)
  {
    path: 'reports',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1001',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1002',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1003',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1004',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1005',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1006',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1007',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1008',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1009',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1010',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1011',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1012',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1012-t3',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1012-t4',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1013',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1014',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1015',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1016',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'roi1017',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'rpi3030',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'rpi3031',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  },
  // 5. Terms Of Use (CO05A)
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate company module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

