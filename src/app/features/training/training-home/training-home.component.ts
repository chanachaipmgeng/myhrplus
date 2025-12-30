import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { GlassCardComponent } from '../../../shared/components/glass-card/glass-card.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { StaggerDirective } from '../../../shared/directives/stagger.directive';

@Component({
  selector: 'app-training-home',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './training-home.component.html',
  styleUrls: ['./training-home.component.scss']
})
export class TrainingHomeComponent implements OnInit {
  currentUser: User | null = null;

  menuItems = [
    {
      title: 'หลักสูตรการฝึกอบรม',
      description: 'จัดการหลักสูตรการฝึกอบรม',
      icon: 'menu_book',
      route: '/portal/admin/training',
      color: 'bg-blue-500'
    },
    {
      title: 'ลงทะเบียนอบรม',
      description: 'ลงทะเบียนการฝึกอบรม',
      icon: 'check_circle',
      route: '/portal/admin/training',
      color: 'bg-green-500'
    },
    {
      title: 'ประวัติการอบรม',
      description: 'ดูประวัติการฝึกอบรม',
      icon: 'history',
      route: '/portal/admin/training',
      color: 'bg-purple-500'
    },
    {
      title: 'ใบรับรอง',
      description: 'จัดการใบรับรองการอบรม',
      icon: 'description',
      route: '/portal/admin/training',
      color: 'bg-yellow-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานการฝึกอบรม',
      icon: 'assessment',
      route: '/portal/admin/training',
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













