import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { StatisticsGridComponent } from '../../../../../shared/components/statistics-grid/statistics-grid.component';

interface OtRecord {
  date: string;
  hours: number;
  rate: number;
  amount: number;
}

@Component({
  selector: 'app-ot-statistic',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent,
    StatisticsGridComponent
  ],
  templateUrl: './ot-statistic.component.html',
  styleUrls: ['./ot-statistic.component.scss']
})
export class OtStatisticComponent implements OnInit {
  isLoading = false;
  otRecords: OtRecord[] = [];
  
  statisticsCards = [
    {
      icon: '⏰',
      label: 'OT รวม (เดือนนี้)',
      value: 20,
      suffix: ' ชั่วโมง',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      icon: '💰',
      label: 'รายได้ OT',
      value: 8000,
      suffix: ' บาท',
      iconBgClass: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: '📊',
      label: 'ค่าเฉลี่ย/วัน',
      value: 2.5,
      suffix: ' ชั่วโมง',
      iconBgClass: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadOtRecords();
  }

  private loadOtRecords(): void {
    // Mock data
    const today = new Date();
    this.otRecords = [];
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      this.otRecords.push({
        date: date.toISOString().split('T')[0],
        hours: 2 + Math.random() * 2,
        rate: 200,
        amount: (2 + Math.random() * 2) * 200
      });
    }
  }

  get totalHours(): number {
    return this.otRecords.reduce((sum, record) => sum + record.hours, 0);
  }

  get totalAmount(): number {
    return this.otRecords.reduce((sum, record) => sum + record.amount, 0);
  }
}

