import { Component, OnInit } from '@angular/core';
import { EmpviewService, EmployeeProfile, LeaveBalance, Payslip } from '../services/empview.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeProfile: EmployeeProfile | null = null;
  leaveBalances: LeaveBalance[] = [];
  recentPayslips: Payslip[] = [];
  loading = false;
  quickLinks = [
    { label: 'Request Leave', icon: 'event', route: '/ta/leave', color: 'primary' },
    { label: 'View Payslip', icon: 'receipt', route: '/payroll/payslip', color: 'accent' },
    { label: 'Time Attendance', icon: 'access_time', route: '/ta', color: 'warn' },
    { label: 'My Profile', icon: 'person', route: '/personal/profile', color: 'primary' }
  ];

  constructor(
    private empviewService: EmpviewService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;
    
    // Load employee profile
    this.empviewService.getEmployeeProfile().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.employeeProfile = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    });

    // Load leave balance
    this.empviewService.getLeaveBalance().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.leaveBalances = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading leave balance:', error);
      }
    });

    // Load recent payslips
    const currentDate = new Date();
    const params = {
      year: currentDate.getFullYear(),
      limit: 3
    };
    this.empviewService.getPayslips(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.recentPayslips = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading payslips:', error);
        this.loading = false;
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  getTotalLeaveBalance(): number {
    return this.leaveBalances.reduce((total, balance) => total + balance.balance, 0);
  }

  downloadPayslip(payslip: Payslip): void {
    this.empviewService.downloadPayslip(payslip.periodMonth, payslip.periodYear)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `payslip_${payslip.periodYear}_${payslip.periodMonth}.pdf`;
          link.click();
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          console.error('Error downloading payslip:', error);
        }
      });
  }
}
