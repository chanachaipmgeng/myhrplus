import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../../../../shared/components/glass-button/glass-button.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface LeaveRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    LoadingComponent,
    StatisticsGridComponent
  ],
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {
  isLoading = false;
  leaveRequests: LeaveRequest[] = [];
  
  statisticsCards = [
    {
      icon: '📅',
      label: 'วันลาคงเหลือ',
      value: 15,
      suffix: ' วัน',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: '⏳',
      label: 'รออนุมัติ',
      value: 2,
      suffix: ' รายการ',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    },
    {
      icon: '✅',
      label: 'อนุมัติแล้ว',
      value: 5,
      suffix: ' รายการ',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  private loadLeaveRequests(): void {
    // Mock data
    this.leaveRequests = [
      {
        id: '1',
        type: 'ลาป่วย',
        startDate: '2024-12-20',
        endDate: '2024-12-20',
        days: 1,
        reason: 'ไม่สบาย',
        status: 'pending'
      },
      {
        id: '2',
        type: 'ลาพักผ่อน',
        startDate: '2024-12-25',
        endDate: '2024-12-27',
        days: 3,
        reason: 'พักผ่อน',
        status: 'approved'
      },
      {
        id: '3',
        type: 'ลากิจ',
        startDate: '2024-12-18',
        endDate: '2024-12-18',
        days: 1,
        reason: 'ธุระส่วนตัว',
        status: 'rejected'
      }
    ];
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      pending: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
      approved: 'bg-green-500/20 text-green-700 dark:text-green-400',
      rejected: 'bg-red-500/20 text-red-700 dark:text-red-400'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      pending: 'รออนุมัติ',
      approved: 'อนุมัติแล้ว',
      rejected: 'ไม่อนุมัติ'
    };
    return labels[status] || status;
  }

  createLeaveRequest(): void {
    console.log('Create new leave request');
  }

  get pageActions() {
    return [
      {
        label: 'ขอลาใหม่',
        icon: '➕',
        variant: 'primary' as const,
        onClick: () => this.createLeaveRequest()
      }
    ];
  }
}

