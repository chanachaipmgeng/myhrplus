import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/services';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@Component({
  selector: 'app-workflow-home',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './workflow-home.component.html',
  styleUrls: ['./workflow-home.component.scss']
})
export class WorkflowHomeComponent implements OnInit {
  currentUser: User | null = null;
  loading = false;

  menuItems = [
    {
      title: 'การขอเอกสาร',
      description: 'ยื่นคำขอเอกสารต่างๆ',
      icon: 'description',
      route: '/workflow/requests',
      color: 'bg-blue-500'
    },
    {
      title: 'เอกสารรออนุมัติ',
      description: 'เอกสารที่รอการอนุมัติ',
      icon: 'check_circle',
      route: '/workflow/pending',
      color: 'bg-yellow-500'
    },
    {
      title: 'ประวัติการขอ',
      description: 'ดูประวัติการขอเอกสาร',
      icon: 'history',
      route: '/workflow/history',
      color: 'bg-green-500'
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














