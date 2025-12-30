import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '@core/services';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@Component({
  selector: 'app-training-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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

  statistics = {
    totalCourses: 45,
    activeCourses: 12,
    enrolled: 324,
    completed: 289,
    certificates: 267
  };

  menuItems = [
    {
      title: 'หลักสูตรการฝึกอบรม',
      description: 'จัดการหลักสูตรการฝึกอบรม',
      icon: 'menu_book',
      route: '/training',
      color: 'bg-blue-500'
    },
    {
      title: 'ลงทะเบียนอบรม',
      description: 'ลงทะเบียนการฝึกอบรม',
      icon: 'check_circle',
      route: '/training',
      color: 'bg-green-500'
    },
    {
      title: 'ประวัติการอบรม',
      description: 'ดูประวัติการฝึกอบรม',
      icon: 'history',
      route: '/training',
      color: 'bg-purple-500'
    },
    {
      title: 'ใบรับรอง',
      description: 'จัดการใบรับรองการอบรม',
      icon: 'description',
      route: '/training',
      color: 'bg-yellow-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานการฝึกอบรม',
      icon: 'assessment',
      route: '/training',
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













