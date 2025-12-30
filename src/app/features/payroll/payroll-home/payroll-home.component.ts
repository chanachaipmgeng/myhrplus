import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '@core/services';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@Component({
  selector: 'app-payroll-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './payroll-home.component.html',
  styleUrls: ['./payroll-home.component.scss']
})
export class PayrollHomeComponent implements OnInit {
  currentUser: User | null = null;

  currentPayrollPeriod = 'มกราคม 2025';

  statistics = {
    totalPayroll: 12500000,
    totalEmployees: 1245,
    pendingPayroll: 15,
    completedPayroll: 1230,
    averageSalary: 10040
  };

  recentActivities = [
    {
      title: 'จ่ายเงินเดือน: รอบมกราคม 2025',
      time: '2 ชั่วโมงที่แล้ว',
      icon: 'payments'
    },
    {
      title: 'สร้างสลิปเงินเดือน: 1,230 รายการ',
      time: '5 ชั่วโมงที่แล้ว',
      icon: 'receipt'
    },
    {
      title: 'อัพเดทข้อมูลสวัสดิการ: ประกันสังคม',
      time: '1 วันที่แล้ว',
      icon: 'savings'
    },
    {
      title: 'อนุมัติการจ่ายเงินเดือน: รอบมกราคม',
      time: '2 วันที่แล้ว',
      icon: 'check_circle'
    }
  ];

  pendingTasks = [
    {
      title: 'รอจ่ายเงินเดือน',
      count: 15,
      icon: 'pending',
      route: '/payroll'
    },
    {
      title: 'รอสร้างสลิป',
      count: 8,
      icon: 'receipt',
      route: '/payroll'
    },
    {
      title: 'รออนุมัติ',
      count: 5,
      icon: 'approval',
      route: '/payroll'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadPayrollData();
  }

  private loadPayrollData(): void {
    // TODO: Load real data from API
    // this.payrollService.getDashboardStatistics().subscribe({
    //   next: (data) => {
    //     this.statistics = data;
    //   },
    //   error: (error) => {
    //     console.error('Error loading payroll data:', error);
    //   }
    // });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  /**
   * Navigate to route (for keyboard navigation)
   */
  navigateToRoute(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}













