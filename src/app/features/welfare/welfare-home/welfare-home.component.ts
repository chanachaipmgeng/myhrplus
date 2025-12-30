import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { GlassCardComponent } from '../../../shared/components/glass-card/glass-card.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { StaggerDirective } from '../../../shared/directives/stagger.directive';

@Component({
  selector: 'app-welfare-home',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './welfare-home.component.html',
  styleUrls: ['./welfare-home.component.scss']
})
export class WelfareHomeComponent implements OnInit {
  currentUser: User | null = null;

  menuItems = [
    {
      title: 'สวัสดิการ',
      description: 'จัดการสวัสดิการพนักงาน',
      icon: 'favorite',
      route: '/portal/admin/welfare',
      color: 'bg-pink-500'
    },
    {
      title: 'ลงทะเบียนสวัสดิการ',
      description: 'ลงทะเบียนสวัสดิการ',
      icon: 'check_circle',
      route: '/portal/admin/welfare',
      color: 'bg-purple-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานสวัสดิการ',
      icon: 'assessment',
      route: '/portal/admin/welfare',
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
}













