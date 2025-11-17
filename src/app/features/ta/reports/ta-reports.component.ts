import { Component, OnInit } from '@angular/core';
import { TaService } from '../services/ta.service';

@Component({
  selector: 'app-ta-reports',
  templateUrl: './ta-reports.component.html',
  styleUrls: ['./ta-reports.component.scss']
})
export class TaReportsComponent implements OnInit {
  activeTab = 0;
  loading = false;
  
  // Leave Report
  leaveReportData: any[] = [];
  leaveReportParams = {
    startDate: '',
    endDate: '',
    employeeId: '',
    leaveType: ''
  };

  // Overtime Report
  overtimeReportData: any[] = [];
  overtimeReportParams = {
    startDate: '',
    endDate: '',
    employeeId: ''
  };

  // Attendance Report
  attendanceReportData: any[] = [];
  attendanceReportParams = {
    startDate: '',
    endDate: '',
    employeeId: '',
    department: ''
  };

  constructor(private taService: TaService) {}

  ngOnInit(): void {
  }

  loadLeaveReport(): void {
    this.loading = true;
    this.taService.getLeaveReport(this.leaveReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.leaveReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading leave report:', error);
        this.loading = false;
      }
    });
  }

  loadOvertimeReport(): void {
    this.loading = true;
    this.taService.getOvertimeReport(this.overtimeReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.overtimeReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading overtime report:', error);
        this.loading = false;
      }
    });
  }

  loadAttendanceReport(): void {
    this.loading = true;
    this.taService.getAttendanceReport(this.attendanceReportParams).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.attendanceReportData = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading attendance report:', error);
        this.loading = false;
      }
    });
  }

  exportReport(reportType: string): void {
    // Implementation for exporting reports
    console.log(`Exporting ${reportType} report`);
  }

  leaveReportColumns = [
    { key: 'employeeId', label: 'Employee ID' },
    { key: 'employeeName', label: 'Employee Name' },
    { key: 'leaveType', label: 'Leave Type' },
    { key: 'startDate', label: 'Start Date', type: 'date' as const },
    { key: 'endDate', label: 'End Date', type: 'date' as const },
    { key: 'days', label: 'Days' },
    { key: 'status', label: 'Status' }
  ];

  overtimeReportColumns = [
    { key: 'employeeId', label: 'Employee ID' },
    { key: 'employeeName', label: 'Employee Name' },
    { key: 'date', label: 'Date', type: 'date' as const },
    { key: 'startTime', label: 'Start Time' },
    { key: 'endTime', label: 'End Time' },
    { key: 'hours', label: 'Hours' },
    { key: 'type', label: 'Type' }
  ];

  attendanceReportColumns = [
    { key: 'employeeId', label: 'Employee ID' },
    { key: 'employeeName', label: 'Employee Name' },
    { key: 'date', label: 'Date', type: 'date' as const },
    { key: 'checkIn', label: 'Check In' },
    { key: 'checkOut', label: 'Check Out' },
    { key: 'workingHours', label: 'Working Hours' },
    { key: 'status', label: 'Status' }
  ];
}

