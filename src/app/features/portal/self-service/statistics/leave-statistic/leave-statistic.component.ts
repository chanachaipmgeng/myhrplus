import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface LeaveStatistic {
  type: string;
  used: number;
  remaining: number;
  total: number;
}

@Component({
  selector: 'app-leave-statistic',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    StatisticsGridComponent
  ],
  templateUrl: './leave-statistic.component.html',
  styleUrls: ['./leave-statistic.component.scss']
})
export class LeaveStatisticComponent implements OnInit {
  isLoading = false;
  statistics: LeaveStatistic[] = [];
  
  statisticsCards = [
    {
      icon: '📅',
      label: 'วันลารวมทั้งหมด',
      value: 30,
      suffix: ' วัน',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      icon: '✅',
      label: 'ใช้ไปแล้ว',
      value: 15,
      suffix: ' วัน',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    },
    {
      icon: '💚',
      label: 'คงเหลือ',
      value: 15,
      suffix: ' วัน',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadStatistics();
  }

  private loadStatistics(): void {
    // Mock data
    this.statistics = [
      { type: 'ลาพักผ่อน', used: 10, remaining: 10, total: 20 },
      { type: 'ลาป่วย', used: 3, remaining: 7, total: 10 },
      { type: 'ลากิจ', used: 2, remaining: 3, total: 5 }
    ];
  }

  getPercentage(used: number, total: number): number {
    return total > 0 ? Math.round((used / total) * 100) : 0;
  }
}

