import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { StatusBadgeComponent } from '../../../../../shared/components/status-badge/status-badge.component';

interface TimeWarning {
  id: string;
  date: string;
  type: 'late' | 'early' | 'missing';
  message: string;
  status: 'pending' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-time-warning',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    EmptyStateComponent,
    StatusBadgeComponent
  ],
  templateUrl: './time-warning.component.html',
  styleUrls: ['./time-warning.component.scss']
})
export class TimeWarningComponent implements OnInit {
  isLoading = false;
  warnings: TimeWarning[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadWarnings();
  }

  private loadWarnings(): void {
    // Mock data
    this.warnings = [
      {
        id: '1',
        date: '2024-12-18',
        type: 'late',
        message: 'มาสาย 15 นาที',
        status: 'pending'
      },
      {
        id: '2',
        date: '2024-12-17',
        type: 'missing',
        message: 'ขาดการลงเวลาเข้า',
        status: 'approved'
      }
    ];
  }

  getTypeClass(type: string): string {
    const classes: { [key: string]: string } = {
      late: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
      early: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
      missing: 'bg-red-500/20 text-red-700 dark:text-red-400'
    };
    return classes[type] || '';
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      pending: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
      approved: 'bg-green-500/20 text-green-700 dark:text-green-400',
      rejected: 'bg-red-500/20 text-red-700 dark:text-red-400'
    };
    return classes[status] || '';
  }

  getTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      late: 'มาสาย',
      early: 'ออกก่อน',
      missing: 'ขาดการลงเวลา'
    };
    return labels[type] || type;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      pending: 'รออนุมัติ',
      approved: 'อนุมัติแล้ว',
      rejected: 'ไม่อนุมัติ'
    };
    return labels[status] || status;
  }
}

