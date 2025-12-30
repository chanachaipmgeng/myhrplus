import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/services';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  currentUser: User | null = null;

  statistics = {
    branches: 12,
    divisions: 8,
    departments: 24,
    positions: 156,
    locations: 18
  };

  menuItems = [
    {
      title: 'ข้อมูลบริษัท',
      description: 'จัดการข้อมูลบริษัท',
      icon: 'e-icons e-briefcase',
      route: '/company',
      color: 'bg-blue-500'
    },
    {
      title: 'โครงสร้างองค์กร',
      description: 'จัดการโครงสร้างองค์กร',
      icon: 'e-icons e-organization',
      route: '/company',
      color: 'bg-green-500'
    },
    {
      title: 'แผนก',
      description: 'จัดการแผนก',
      icon: 'e-icons e-folder',
      route: '/company',
      color: 'bg-purple-500'
    },
    {
      title: 'ตำแหน่งงาน',
      description: 'จัดการตำแหน่งงาน',
      icon: 'e-icons e-user',
      route: '/company',
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

  /**
   * Navigate to route (for keyboard navigation)
   */
  navigateToRoute(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  getIconName(iconClass: string): string {
    // Convert e-icons class to icon name
    const iconMap: { [key: string]: string } = {
      'e-icons e-briefcase': 'business',
      'e-icons e-organization': 'account_tree',
      'e-icons e-folder': 'folder',
      'e-icons e-user': 'person'
    };
    return iconMap[iconClass] || 'folder';
  }
}













