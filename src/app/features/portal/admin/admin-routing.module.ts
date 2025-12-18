import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portal',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
    data: {
      title: 'จัดการพนักงาน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการพนักงาน', route: '/portal/admin/employees' }
      ]
    }
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    data: {
      title: 'จัดการบริษัท',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการบริษัท', route: '/portal/admin/company' }
      ]
    }
  },
  {
    path: 'payroll',
    loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule),
    data: {
      title: 'จัดการเงินเดือน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการเงินเดือน', route: '/portal/admin/payroll' }
      ]
    }
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule),
    data: {
      title: 'จัดการเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการเวลา', route: '/portal/admin/time' }
      ]
    }
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule),
    data: {
      title: 'จัดการการฝึกอบรม',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการการฝึกอบรม', route: '/portal/admin/training' }
      ]
    }
  },
  {
    path: 'welfare',
    loadChildren: () => import('./welfare/welfare.module').then(m => m.WelfareModule),
    data: {
      title: 'จัดการสวัสดิการ',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการสวัสดิการ', route: '/portal/admin/welfare' }
      ]
    }
  },
  {
    path: 'recruit',
    loadChildren: () => import('./recruit/recruit.module').then(m => m.RecruitModule),
    data: {
      title: 'จัดการการสรรหา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการการสรรหา', route: '/portal/admin/recruit' }
      ]
    }
  },
  {
    path: 'appraisal',
    loadChildren: () => import('./appraisal/appraisal.module').then(m => m.AppraisalModule),
    data: {
      title: 'จัดการการประเมิน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'จัดการการประเมิน', route: '/portal/admin/appraisal' }
      ]
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    data: {
      title: 'ตั้งค่าระบบ',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Admin', route: '/portal/admin' },
        { label: 'ตั้งค่าระบบ', route: '/portal/admin/settings' }
      ]
    }
  }
  // {
  //   path: 'employees',
  //   loadChildren: () => import('../../personal/personal.module').then(m => m.PersonalModule),
  //   data: {
  //     title: 'จัดการพนักงาน',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการพนักงาน', route: '/portal/admin/employees' }
  //     ]
  //   }
  // },
  // {
  //   path: 'company',
  //   loadChildren: () => import('../../company/company.module').then(m => m.CompanyModule),
  //   data: {
  //     title: 'จัดการบริษัท',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการบริษัท', route: '/portal/admin/company' }
  //     ]
  //   }
  // },
  // {
  //   path: 'payroll',
  //   loadChildren: () => import('../../payroll/payroll.module').then(m => m.PayrollModule),
  //   data: {
  //     title: 'จัดการเงินเดือน',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการเงินเดือน', route: '/portal/admin/payroll' }
  //     ]
  //   }
  // },
  // {
  //   path: 'time',
  //   loadChildren: () => import('../../ta/ta.module').then(m => m.TaModule),
  //   data: {
  //     title: 'จัดการเวลา',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการเวลา', route: '/portal/admin/time' }
  //     ]
  //   }
  // },
  // {
  //   path: 'training',
  //   loadChildren: () => import('../../training/training.module').then(m => m.TrainingModule),
  //   data: {
  //     title: 'จัดการการฝึกอบรม',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการการฝึกอบรม', route: '/portal/admin/training' }
  //     ]
  //   }
  // },
  // {
  //   path: 'welfare',
  //   loadChildren: () => import('../../welfare/welfare.module').then(m => m.WelfareModule),
  //   data: {
  //     title: 'จัดการสวัสดิการ',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการสวัสดิการ', route: '/portal/admin/welfare' }
  //     ]
  //   }
  // },
  // {
  //   path: 'recruit',
  //   loadChildren: () => import('../../recruit/recruit.module').then(m => m.RecruitModule),
  //   data: {
  //     title: 'จัดการการสรรหา',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการการสรรหา', route: '/portal/admin/recruit' }
  //     ]
  //   }
  // },
  // {
  //   path: 'appraisal',
  //   loadChildren: () => import('../../appraisal/appraisal.module').then(m => m.AppraisalModule),
  //   data: {
  //     title: 'จัดการการประเมิน',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'จัดการการประเมิน', route: '/portal/admin/appraisal' }
  //     ]
  //   }
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('../../setting/setting.module').then(m => m.SettingModule),
  //   data: {
  //     title: 'ตั้งค่าระบบ',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Admin', route: '/portal/admin' },
  //       { label: 'ตั้งค่าระบบ', route: '/portal/admin/settings' }
  //     ]
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

