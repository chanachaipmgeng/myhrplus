import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    // Temporarily redirect to existing setting module
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 1. User (ST01A)
  {
    path: 'user',
    children: [
      {
        path: '',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      // 1.1 Email Reminder
      {
        path: 'email-reminder',
        children: [
          {
            path: '',
            redirectTo: '/setting/home',
            pathMatch: 'full'
          },
          {
            path: 'email-master',
            redirectTo: '/setting/home',
            pathMatch: 'full'
          },
          {
            path: 'email-template-content',
            redirectTo: '/setting/home',
            pathMatch: 'full'
          },
          {
            path: 'probation-period-notification',
            redirectTo: '/setting/home',
            pathMatch: 'full'
          },
          {
            path: 'new-hire-notification',
            redirectTo: '/setting/home',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  // 2. System Access
  {
    path: 'system-access',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 3. User Level
  {
    path: 'user-level',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 4. Personal Data
  {
    path: 'personal-data',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 5. Options
  {
    path: 'options',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 6. Excel Report
  {
    path: 'excel-report',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 7. Main Master Data
  {
    path: 'main-master-data',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 8. Workflow Screen
  {
    path: 'workflow-screen',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 9. Swap Language
  {
    path: 'swap-language',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 10. Zeeme Interface
  {
    path: 'zeeme-interface',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 11. Barcode Generator
  {
    path: 'barcode-generator',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 12. Token Generator
  {
    path: 'token-generator',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 13. Data Shop
  {
    path: 'data-shop',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 14. Routing Config
  {
    path: 'routing-config',
    redirectTo: '/setting/home',
    pathMatch: 'full'
  },
  // 15. Terms Of Use
  {
    path: 'terms',
    children: [
      {
        path: '',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      },
      {
        path: 'user-manual',
        redirectTo: '/setting/home',
        pathMatch: 'full'
      }
    ]
  }
  // TODO: Migrate setting module content to here
  // When components are created, replace redirects with actual component routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
