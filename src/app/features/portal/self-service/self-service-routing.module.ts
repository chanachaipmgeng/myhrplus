import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/self-service-dashboard.component').then(m => m.SelfServiceDashboardComponent),
    data: {
      title: 'Employee Self Service',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' }
      ]
    }
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule),
    data: {
      title: 'ลงเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลงเวลา', route: '/portal/self-service/time' }
      ]
    }
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
    data: {
      title: 'ขอเอกสาร',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ขอเอกสาร', route: '/portal/self-service/documents' }
      ]
    }
  },
  {
    path: 'payslip',
    loadChildren: () => import('./payslip/payslip.module').then(m => m.PayslipModule),
    data: {
      title: 'สลิปเงินเดือน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สลิปเงินเดือน', route: '/portal/self-service/payslip' }
      ]
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    data: {
      title: 'ตรวจสอบข้อมูลตัวเอง',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ตรวจสอบข้อมูลตัวเอง', route: '/portal/self-service/profile' }
      ]
    }
  },
  {
    path: 'subordinates',
    loadChildren: () => import('./subordinates/subordinates.module').then(m => m.SubordinatesModule),
    data: {
      title: 'ลูกน้อง',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลูกน้อง', route: '/portal/self-service/subordinates' }
      ]
    }
  },
  {
    path: 'welfare',
    loadChildren: () => import('./welfare/welfare.module').then(m => m.WelfareModule),
    data: {
      title: 'สวัสดิการ',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สวัสดิการ', route: '/portal/self-service/welfare' }
      ]
    }
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule),
    data: {
      title: 'ลาพักผ่อน',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลาพักผ่อน', route: '/portal/self-service/leave' }
      ]
    }
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule),
    data: {
      title: 'การลงเวลา',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'การลงเวลา', route: '/portal/self-service/attendance' }
      ]
    }
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),
    data: {
      title: 'สถิติ',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สถิติ', route: '/portal/self-service/statistics' }
      ]
    }
  }
  // TODO: Uncomment when modules are created
  // {
  //   path: 'time',
  //   loadChildren: () => import('./time/time.module').then(m => m.TimeModule),
  //   data: {
  //     title: 'ลงเวลา',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'ลงเวลา', route: '/portal/self-service/time' }
  //     ]
  //   }
  // },
  // {
  //   path: 'documents',
  //   loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
  //   data: {
  //     title: 'ขอเอกสาร',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'ขอเอกสาร', route: '/portal/self-service/documents' }
  //     ]
  //   }
  // },
  // {
  //   path: 'payslip',
  //   loadChildren: () => import('./payslip/payslip.module').then(m => m.PayslipModule),
  //   data: {
  //     title: 'สลิปเงินเดือน',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'สลิปเงินเดือน', route: '/portal/self-service/payslip' }
  //     ]
  //   }
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  //   data: {
  //     title: 'ตรวจสอบข้อมูลตัวเอง',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'ตรวจสอบข้อมูลตัวเอง', route: '/portal/self-service/profile' }
  //     ]
  //   }
  // },
  // {
  //   path: 'subordinates',
  //   loadChildren: () => import('./subordinates/subordinates.module').then(m => m.SubordinatesModule),
  //   data: {
  //     title: 'ลูกน้อง',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'ลูกน้อง', route: '/portal/self-service/subordinates' }
  //     ]
  //   }
  // },
  // {
  //   path: 'welfare',
  //   loadChildren: () => import('./welfare/welfare.module').then(m => m.WelfareModule),
  //   data: {
  //     title: 'สวัสดิการ',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'สวัสดิการ', route: '/portal/self-service/welfare' }
  //     ]
  //   }
  // },
  // {
  //   path: 'leave',
  //   loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule),
  //   data: {
  //     title: 'ลาพักผ่อน',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'ลาพักผ่อน', route: '/portal/self-service/leave' }
  //     ]
  //   }
  // },
  // {
  //   path: 'attendance',
  //   loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule),
  //   data: {
  //     title: 'การลงเวลา',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'การลงเวลา', route: '/portal/self-service/attendance' }
  //     ]
  //   }
  // },
  // {
  //   path: 'statistics',
  //   loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),
  //   data: {
  //     title: 'สถิติ',
  //     breadcrumbs: [
  //       { label: 'Portal', route: '/portal' },
  //       { label: 'Self Service', route: '/portal/self-service' },
  //       { label: 'สถิติ', route: '/portal/self-service/statistics' }
  //     ]
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfServiceRoutingModule { }

