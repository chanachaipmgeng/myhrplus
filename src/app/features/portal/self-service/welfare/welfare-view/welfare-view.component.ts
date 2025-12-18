import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsCardComponent } from '../../../../../shared/components/statistics-card/statistics-card.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface WelfareItem {
  id: string;
  title: string;
  description: string;
  amount: number;
  date: string;
  status: 'active' | 'expired' | 'pending';
}

@Component({
  selector: 'app-welfare-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    StatisticsCardComponent,
    StatisticsGridComponent
  ],
  templateUrl: './welfare-view.component.html',
  styleUrls: ['./welfare-view.component.scss']
})
export class WelfareViewComponent implements OnInit {
  isLoading = false;
  welfareItems: WelfareItem[] = [];
  
  statisticsCards = [
    {
      icon: '💰',
      label: 'สวัสดิการที่ใช้ได้',
      value: 5,
      suffix: ' รายการ',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: '📅',
      label: 'หมดอายุในเดือนนี้',
      value: 2,
      suffix: ' รายการ',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadWelfareItems();
  }

  private loadWelfareItems(): void {
    // Mock data
    this.welfareItems = [
      {
        id: '1',
        title: 'เบิกค่ารักษาพยาบาล',
        description: 'เบิกได้สูงสุด 10,000 บาท/ปี',
        amount: 10000,
        date: '2024-12-31',
        status: 'active'
      },
      {
        id: '2',
        title: 'เบิกค่าการศึกษา',
        description: 'เบิกได้สูงสุด 5,000 บาท/ปี',
        amount: 5000,
        date: '2024-12-31',
        status: 'active'
      },
      {
        id: '3',
        title: 'เบิกค่าออกกำลังกาย',
        description: 'เบิกได้สูงสุด 3,000 บาท/ปี',
        amount: 3000,
        date: '2024-12-15',
        status: 'expired'
      }
    ];
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      active: 'bg-green-500/20 text-green-700 dark:text-green-400',
      expired: 'bg-gray-500/20 text-gray-700 dark:text-gray-400',
      pending: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      active: 'ใช้งานได้',
      expired: 'หมดอายุ',
      pending: 'รออนุมัติ'
    };
    return labels[status] || status;
  }
}

