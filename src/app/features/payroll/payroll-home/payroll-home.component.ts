import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  menuItems = [
    {
      title: 'จัดการเงินเดือน',
      description: 'จัดการข้อมูลเงินเดือนพนักงาน',
      icon: 'payments',
      route: '/payroll',
      color: 'bg-green-500'
    },
    {
      title: 'สลิปเงินเดือน',
      description: 'ดูและจัดการสลิปเงินเดือน',
      icon: 'receipt',
      route: '/payroll',
      color: 'bg-blue-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานเงินเดือน',
      icon: 'assessment',
      route: '/payroll',
      color: 'bg-purple-500'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}













