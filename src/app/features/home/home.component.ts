import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService, User } from '@core/services';
import { HomeService, MenuCategory, MenuItem } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  loading = false;

  statistics = {
    totalEmployees: 1250,
    newEmployeesThisMonth: 12,
    todayAttendance: 1180,
    attendanceRate: 94.4,
    pendingApprovals: 23,
    activePayroll: 1245,
    totalBranches: 18
  };

  recentActivities = [
    {
      title: 'พนักงานใหม่เข้าทำงาน: นายสมชาย ใจดี',
      time: '2 ชั่วโมงที่แล้ว',
      icon: 'person_add'
    },
    {
      title: 'อนุมัติคำขอลา: นางสาวสมหญิง รักงาน',
      time: '5 ชั่วโมงที่แล้ว',
      icon: 'check_circle'
    },
    {
      title: 'อัพเดทข้อมูลเงินเดือน: เดือนมกราคม 2025',
      time: '1 วันที่แล้ว',
      icon: 'attach_money'
    },
    {
      title: 'เพิ่มสาขาใหม่: สาขากรุงเทพมหานคร',
      time: '2 วันที่แล้ว',
      icon: 'business'
    }
  ];

  pendingApprovals = [
    {
      title: 'คำขอลา',
      count: 15,
      icon: 'event',
      route: '/ta'
    },
    {
      title: 'คำขอ OT',
      count: 5,
      icon: 'schedule',
      route: '/ta'
    },
    {
      title: 'คำขอแก้ไขเวลา',
      count: 3,
      icon: 'edit',
      route: '/ta'
    }
  ];

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
    public router: Router
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.loading = true;
    // TODO: Load real data from API
    // this.homeService.getDashboardStatistics().subscribe({
    //   next: (data) => {
    //     this.statistics = data;
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Error loading dashboard data:', error);
    //     this.loading = false;
    //   }
    // });
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'สวัสดีตอนเช้า';
    if (hour < 18) return 'สวัสดีตอนบ่าย';
    return 'สวัสดีตอนเย็น';
  }
}
