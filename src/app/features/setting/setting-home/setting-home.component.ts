import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService, User } from '../../../core/services/auth.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { GlassCardComponent } from '../../../shared/components/glass-card/glass-card.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { StaggerDirective } from '../../../shared/directives/stagger.directive';

@Component({
  selector: 'app-setting-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective
  ],
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.scss']
})
export class SettingHomeComponent implements OnInit {
  currentUser: User | null = null;

  menuItems = [
    {
      title: 'ตั้งค่าระบบ',
      description: 'จัดการตั้งค่าระบบ',
      icon: 'settings',
      route: '/portal/admin/settings',
      color: 'bg-blue-500'
    },
    {
      title: 'ตั้งค่าผู้ใช้',
      description: 'จัดการผู้ใช้งาน',
      icon: 'person',
      route: '/portal/admin/settings',
      color: 'bg-green-500'
    },
    {
      title: 'ตั้งค่าสิทธิ์',
      description: 'จัดการสิทธิ์การเข้าถึง',
      icon: 'lock',
      route: '/portal/admin/settings',
      color: 'bg-purple-500'
    },
    {
      title: 'ตั้งค่าเมนู',
      description: 'จัดการเมนูระบบ',
      icon: 'menu',
      route: '/portal/admin/settings',
      color: 'bg-yellow-500'
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













