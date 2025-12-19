import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService, User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.scss']
})
export class SettingHomeComponent implements OnInit {
  currentUser: User | null = null;

  menuItems = [
    {
      title: 'ตั้งค่าระบบ',
      description: 'จัดการตั้งค่าระบบ',
      icon: 'e-icons e-settings',
      route: '/portal/admin/settings',
      color: 'bg-blue-500'
    },
    {
      title: 'ตั้งค่าผู้ใช้',
      description: 'จัดการผู้ใช้งาน',
      icon: 'e-icons e-user',
      route: '/portal/admin/settings',
      color: 'bg-green-500'
    },
    {
      title: 'ตั้งค่าสิทธิ์',
      description: 'จัดการสิทธิ์การเข้าถึง',
      icon: 'e-icons e-lock',
      route: '/portal/admin/settings',
      color: 'bg-purple-500'
    },
    {
      title: 'ตั้งค่าเมนู',
      description: 'จัดการเมนูระบบ',
      icon: 'e-icons e-menu',
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













