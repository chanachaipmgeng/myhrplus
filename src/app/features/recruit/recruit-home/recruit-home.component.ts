import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '@core/services';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@Component({
  selector: 'app-recruit-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './recruit-home.component.html',
  styleUrls: ['./recruit-home.component.scss']
})
export class RecruitHomeComponent implements OnInit {
  currentUser: User | null = null;

  statistics = {
    totalJobs: 24,
    totalApplicants: 342,
    interviews: 48,
    hired: 12
  };

  menuItems = [
    {
      title: 'ประกาศรับสมัคร',
      description: 'จัดการประกาศรับสมัครงาน',
      icon: 'description',
      route: '/recruit',
      color: 'bg-blue-500'
    },
    {
      title: 'จัดการผู้สมัคร',
      description: 'จัดการข้อมูลผู้สมัครงาน',
      icon: 'people',
      route: '/recruit',
      color: 'bg-green-500'
    },
    {
      title: 'นัดสัมภาษณ์',
      description: 'จัดการนัดสัมภาษณ์',
      icon: 'calendar_today',
      route: '/recruit',
      color: 'bg-purple-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานการรับสมัคร',
      icon: 'assessment',
      route: '/recruit',
      color: 'bg-indigo-500'
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

  /**
   * Navigate to route (for keyboard navigation)
   */
  navigateToRoute(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}













