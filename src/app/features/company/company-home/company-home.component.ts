import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  currentUser: User | null = null;

  menuItems = [
    {
      title: 'ข้อมูลบริษัท',
      description: 'จัดการข้อมูลบริษัท',
      icon: 'e-icons e-briefcase',
      route: '/portal/admin/company',
      color: 'bg-blue-500'
    },
    {
      title: 'โครงสร้างองค์กร',
      description: 'จัดการโครงสร้างองค์กร',
      icon: 'e-icons e-organization',
      route: '/portal/admin/company',
      color: 'bg-green-500'
    },
    {
      title: 'แผนก',
      description: 'จัดการแผนก',
      icon: 'e-icons e-folder',
      route: '/portal/admin/company',
      color: 'bg-purple-500'
    },
    {
      title: 'ตำแหน่งงาน',
      description: 'จัดการตำแหน่งงาน',
      icon: 'e-icons e-user',
      route: '/portal/admin/company',
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

  getGradientForItem(color: string): string {
    const gradientMap: { [key: string]: string } = {
      'bg-blue-500': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      'bg-green-500': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      'bg-purple-500': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      'bg-yellow-500': 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)'
    };
    return gradientMap[color] || 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)';
  }
}













