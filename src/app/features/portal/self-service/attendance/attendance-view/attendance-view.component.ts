import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string | null;
  workingHours: number;
  status: 'present' | 'late' | 'absent' | 'leave';
}

@Component({
  selector: 'app-attendance-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    StatisticsGridComponent
  ],
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss']
})
export class AttendanceViewComponent implements OnInit {
  isLoading = false;
  attendanceRecords: AttendanceRecord[] = [];
  
  statisticsCards = [
    {
      icon: '✅',
      label: 'เข้างาน',
      value: 20,
      suffix: ' วัน',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: '⏰',
      label: 'มาสาย',
      value: 2,
      suffix: ' วัน',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    },
    {
      icon: '📅',
      label: 'ลางาน',
      value: 3,
      suffix: ' วัน',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadAttendanceRecords();
  }

  private loadAttendanceRecords(): void {
    // Mock data
    const today = new Date();
    this.attendanceRecords = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      this.attendanceRecords.push({
        date: date.toISOString().split('T')[0],
        checkIn: i === 0 ? '08:30' : '08:00',
        checkOut: i === 0 ? null : '17:00',
        workingHours: i === 0 ? 0 : 8.5,
        status: i === 1 ? 'late' : i === 2 ? 'leave' : 'present'
      });
    }
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      present: 'bg-green-500/20 text-green-700 dark:text-green-400',
      late: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
      absent: 'bg-red-500/20 text-red-700 dark:text-red-400',
      leave: 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      present: 'เข้างาน',
      late: 'มาสาย',
      absent: 'ขาดงาน',
      leave: 'ลางาน'
    };
    return labels[status] || status;
  }
}

