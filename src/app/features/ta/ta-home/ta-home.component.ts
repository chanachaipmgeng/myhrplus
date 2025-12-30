import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/services';

@Component({
  selector: 'app-ta-home',
  templateUrl: './ta-home.component.html',
  styleUrls: ['./ta-home.component.scss']
})
export class TaHomeComponent implements OnInit {
  currentUser: User | null = null;
  loading = false;

  menuItems = [
    {
      title: 'การลงเวลา',
      description: 'ดูข้อมูลการลงเวลา',
      icon: 'e-icons e-clock',
      route: '/ta',
      color: 'bg-blue-500'
    },
    {
      title: 'คำขอลา',
      description: 'ยื่นคำขอลา',
      icon: 'e-icons e-calendar',
      route: '/ta',
      color: 'bg-green-500'
    },
    {
      title: 'คำขอ OT',
      description: 'ยื่นคำขอทำงานล่วงเวลา',
      icon: 'e-icons e-time',
      route: '/ta',
      color: 'bg-yellow-500'
    },
    {
      title: 'คำขอแก้ไขเวลา',
      description: 'ยื่นคำขอแก้ไขเวลา',
      icon: 'e-icons e-edit',
      route: '/ta',
      color: 'bg-purple-500'
    },
    {
      title: 'คำขอเปลี่ยนกะ',
      description: 'ยื่นคำขอเปลี่ยนกะ',
      icon: 'e-icons e-sync',
      route: '/ta',
      color: 'bg-pink-500'
    },
    {
      title: 'คำขอแลกกะ',
      description: 'ยื่นคำขอแลกกะ',
      icon: 'e-icons e-exchange',
      route: '/ta',
      color: 'bg-indigo-500'
    },
    {
      title: 'อนุมัติ',
      description: 'อนุมัติคำขอต่างๆ',
      icon: 'e-icons e-check',
      route: '/ta',
      color: 'bg-teal-500'
    },
    {
      title: 'รายงาน',
      description: 'ดูรายงานการลงเวลา',
      icon: 'e-icons e-chart',
      route: '/ta',
      color: 'bg-orange-500'
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













