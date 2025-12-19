import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService, User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-setting-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.scss']
})
export class SettingHomeComponent implements OnInit {
  private translate = inject(TranslateService);
  
  currentUser: User | null = null;

  get menuItems() {
    return [
      {
        title: this.translate.instant('setting.dashboard.menu.systemSettings.title'),
        description: this.translate.instant('setting.dashboard.menu.systemSettings.description'),
        icon: 'e-icons e-settings',
        route: '/portal/admin/settings',
        color: 'bg-blue-500'
      },
      {
        title: this.translate.instant('setting.dashboard.menu.userSettings.title'),
        description: this.translate.instant('setting.dashboard.menu.userSettings.description'),
        icon: 'e-icons e-user',
        route: '/portal/admin/settings',
        color: 'bg-green-500'
      },
      {
        title: this.translate.instant('setting.dashboard.menu.permissionSettings.title'),
        description: this.translate.instant('setting.dashboard.menu.permissionSettings.description'),
        icon: 'e-icons e-lock',
        route: '/portal/admin/settings',
        color: 'bg-purple-500'
      },
      {
        title: this.translate.instant('setting.dashboard.menu.menuSettings.title'),
        description: this.translate.instant('setting.dashboard.menu.menuSettings.description'),
        icon: 'e-icons e-menu',
        route: '/portal/admin/settings',
        color: 'bg-yellow-500'
      }
    ];
  }

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













