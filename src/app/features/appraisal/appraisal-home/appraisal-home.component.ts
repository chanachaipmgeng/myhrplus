import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '@core/services';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';

@Component({
  selector: 'app-appraisal-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './appraisal-home.component.html',
  styleUrls: ['./appraisal-home.component.scss']
})
export class AppraisalHomeComponent implements OnInit {
  currentUser: User | null = null;

  statistics = {
    totalAppraisals: 156,
    inProgress: 42,
    completed: 114,
    averageScore: 4.2
  };

  menuItems = [
    {
      title: 'การประเมินผล',
      description: 'จัดการการประเมินผลการทำงาน',
      icon: 'assessment',
      route: '/appraisal',
      color: 'bg-blue-500'
    },
    {
      title: 'รายงาน',
      description: 'รายงานการประเมินผล',
      icon: 'description',
      route: '/appraisal',
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













