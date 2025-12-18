import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../../../../shared/components/glass-button/glass-button.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

interface Payslip {
  id: string;
  month: string;
  year: number;
  netSalary: number;
  grossSalary: number;
  deductions: number;
  downloadUrl?: string;
}

@Component({
  selector: 'app-payslip-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    LoadingComponent
  ],
  templateUrl: './payslip-view.component.html',
  styleUrls: ['./payslip-view.component.scss']
})
export class PayslipViewComponent implements OnInit {
  isLoading = false;
  payslips: Payslip[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadPayslips();
  }

  private loadPayslips(): void {
    // Mock data
    const currentDate = new Date();
    this.payslips = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      this.payslips.push({
        id: `payslip-${i}`,
        month: date.toLocaleDateString('th-TH', { month: 'long' }),
        year: date.getFullYear(),
        netSalary: 35000 + Math.random() * 5000,
        grossSalary: 45000 + Math.random() * 5000,
        deductions: 10000 + Math.random() * 2000,
        downloadUrl: '#'
      });
    }
  }

  downloadPayslip(payslip: Payslip): void {
    if (payslip.downloadUrl) {
      console.log('Downloading payslip:', payslip);
    }
  }
}

