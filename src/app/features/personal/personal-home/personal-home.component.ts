import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/services';

@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {
  currentUser: User | null = null;

  statistics = {
    totalEmployees: 1250,
    activeEmployees: 1180,
    newEmployees: 12,
    onLeave: 5,
    pendingApprovals: 8
  };

  menuItems = [
    {
      title: 'จัดการข้อมูลพนักงาน',
      description: 'จัดการข้อมูลส่วนบุคคลของพนักงาน',
      icon: 'e-icons e-user',
      route: '/personal',
      color: 'bg-blue-500'
    },
    {
      title: 'โครงสร้างองค์กร',
      description: 'จัดการโครงสร้างองค์กร',
      icon: 'e-icons e-briefcase',
      route: '/company',
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
      'e-icons e-user': 'person',
      'e-icons e-briefcase': 'business'
    };
    return iconMap[iconClass] || 'folder';
  }
}













