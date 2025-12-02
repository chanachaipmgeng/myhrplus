import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface EditTimeRecord {
  id: string;
  date: string;
  originalTime: string;
  editedTime: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-edit-time-statistic',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    StatisticsGridComponent
  ],
  templateUrl: './edit-time-statistic.component.html',
  styleUrls: ['./edit-time-statistic.component.scss']
})
export class EditTimeStatisticComponent implements OnInit {
  isLoading = false;
  editTimeRecords: EditTimeRecord[] = [];
  
  statisticsCards = [
    {
      icon: '✏️',
      label: 'แก้ไขเวลา (เดือนนี้)',
      value: 5,
      suffix: ' ครั้ง',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      icon: '✅',
      label: 'อนุมัติแล้ว',
      value: 4,
      suffix: ' ครั้ง',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: '⏳',
      label: 'รออนุมัติ',
      value: 1,
      suffix: ' ครั้ง',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadEditTimeRecords();
  }

  private loadEditTimeRecords(): void {
    // Mock data
    this.editTimeRecords = [
      {
        id: '1',
        date: '2024-12-18',
        originalTime: '08:30',
        editedTime: '08:00',
        reason: 'ลืมลงเวลา',
        status: 'approved'
      },
      {
        id: '2',
        date: '2024-12-15',
        originalTime: '17:00',
        editedTime: '18:00',
        reason: 'ทำงานล่วงเวลา',
        status: 'approved'
      },
      {
        id: '3',
        date: '2024-12-20',
        originalTime: '08:45',
        editedTime: '08:00',
        reason: 'มาสาย',
        status: 'pending'
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
}

