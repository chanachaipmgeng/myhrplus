import { Component, OnInit } from '@angular/core';
import { EmpviewService, TimeAttendance } from '../services/empview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-attendance-view',
  templateUrl: './time-attendance-view.component.html',
  styleUrls: ['./time-attendance-view.component.scss']
})
export class TimeAttendanceViewComponent implements OnInit {
  timeAttendance: TimeAttendance[] = [];
  shiftSchedule: any[] = [];
  loading = false;
  activeTab = 0;
  selectedDate = new Date();
  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();

  constructor(
    private empviewService: EmpviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTimeAttendance();
    this.loadShiftSchedule();
  }

  loadTimeAttendance(): void {
    this.loading = true;
    const params = {
      year: this.selectedYear,
      month: this.selectedMonth
    };

    this.empviewService.getTimeAttendance(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.timeAttendance = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading time attendance:', error);
        this.loading = false;
      }
    });
  }

  loadShiftSchedule(): void {
    const params = {
      year: this.selectedYear,
      month: this.selectedMonth
    };

    this.empviewService.getShiftSchedule(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.shiftSchedule = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading shift schedule:', error);
      }
    });
  }

  onMonthYearChange(): void {
    this.loadTimeAttendance();
    this.loadShiftSchedule();
  }

  requestTimeEdit(): void {
    this.router.navigate(['/ta/time-edit']);
  }

  getStatusColor(status: string): string {
    const statusColors: { [key: string]: string } = {
      'present': 'primary',
      'absent': 'warn',
      'late': 'accent',
      'leave': ''
    };
    return statusColors[status.toLowerCase()] || '';
  }

  getMonthOptions(): number[] {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 2; i--) {
      years.push(i);
    }
    return years;
  }

  attendanceColumns = [
    { key: 'date', label: 'Date', type: 'date' as const },
    { key: 'checkIn', label: 'Check In' },
    { key: 'checkOut', label: 'Check Out' },
    { key: 'workingHours', label: 'Working Hours' },
    { key: 'status', label: 'Status' },
    { key: 'shift', label: 'Shift' }
  ];
}

