import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { TaService, LeaveRequest, LeaveType } from '../services/ta.service';
import { EmpviewService } from '../../empview/services/empview.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {
  leaveForm: FormGroup;
  leaveTypes: LeaveType[] = [];
  leaveBalances: any[] = [];
  loading = false;
  minDate = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  constructor(
    private fb: FormBuilder,
    private taService: TaService,
    private empviewService: EmpviewService,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.leaveForm = this.fb.group({
      leaveType: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: [''],
      endTime: [''],
      days: [0, [Validators.required, Validators.min(0.5)]],
      hours: [0],
      reason: ['', [Validators.required, Validators.minLength(10)]],
      attachments: [[]]
    }, { validators: this.dateRangeValidator });
  }

  ngOnInit(): void {
    this.loadLeaveTypes();
    this.loadLeaveBalances();
    
    // Watch for date changes to calculate days
    this.leaveForm.get('startDate')?.valueChanges.subscribe(() => this.calculateDays());
    this.leaveForm.get('endDate')?.valueChanges.subscribe(() => this.calculateDays());
    this.leaveForm.get('startTime')?.valueChanges.subscribe(() => this.calculateDays());
    this.leaveForm.get('endTime')?.valueChanges.subscribe(() => this.calculateDays());
  }

  loadLeaveTypes(): void {
    this.taService.getLeaveTypes().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.leaveTypes = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading leave types:', error);
      }
    });
  }

  loadLeaveBalances(): void {
    this.empviewService.getLeaveBalance().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.leaveBalances = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading leave balances:', error);
      }
    });
  }

  calculateDays(): void {
    const startDate = this.leaveForm.get('startDate')?.value;
    const endDate = this.leaveForm.get('endDate')?.value;
    const startTime = this.leaveForm.get('startTime')?.value;
    const endTime = this.leaveForm.get('endTime')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (end >= start) {
        let days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        
        // If times are specified, calculate partial days
        if (startTime && endTime && startDate === endDate) {
          const startTimeParts = startTime.split(':');
          const endTimeParts = endTime.split(':');
          const startHour = parseInt(startTimeParts[0]) + parseInt(startTimeParts[1]) / 60;
          const endHour = parseInt(endTimeParts[0]) + parseInt(endTimeParts[1]) / 60;
          const hours = endHour - startHour;
          days = hours / 8; // Assuming 8 hours per day
          this.leaveForm.patchValue({ hours: hours });
        }
        
        this.leaveForm.patchValue({ days: days });
      }
    }
  }

  dateRangeValidator(control: AbstractControl): ValidationErrors | null {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (end < start) {
        return { dateRange: true };
      }
    }

    return null;
  }

  getSelectedLeaveType(): LeaveType | null {
    const leaveTypeId = this.leaveForm.get('leaveType')?.value;
    return this.leaveTypes.find(lt => lt.leaveTypeId === leaveTypeId) || null;
  }

  getAvailableBalance(): number {
    const selectedType = this.getSelectedLeaveType();
    if (selectedType) {
      const balance = this.leaveBalances.find(b => b.leaveType === selectedType.leaveTypeId);
      return balance ? balance.balance : 0;
    }
    return 0;
  }

  onFileSelected(files: File[]): void {
    this.leaveForm.patchValue({ attachments: files });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const requestedDays = this.leaveForm.get('days')?.value;
      const availableBalance = this.getAvailableBalance();

      if (requestedDays > availableBalance) {
        this.notificationService.showError(
          `Insufficient leave balance. Available: ${availableBalance} days, Requested: ${requestedDays} days`
        );
        return;
      }

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Leave Request',
          message: `Are you sure you want to submit this leave request for ${requestedDays} days?`,
          confirmText: 'Submit',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.submitLeaveRequest();
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields correctly');
      this.markFormGroupTouched(this.leaveForm);
    }
  }

  submitLeaveRequest(): void {
    this.loading = true;
    const formValue = this.leaveForm.value;
    
    const leaveRequest: LeaveRequest = {
      leaveType: formValue.leaveType,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      startTime: formValue.startTime || undefined,
      endTime: formValue.endTime || undefined,
      days: formValue.days,
      hours: formValue.hours || undefined,
      reason: formValue.reason,
      attachments: formValue.attachments || []
    };

    this.taService.requestLeave(leaveRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Leave request submitted successfully');
          this.router.navigate(['/ta/leave-history']);
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit leave request');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit leave request');
        this.loading = false;
      }
    });
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/ta']);
  }
}

