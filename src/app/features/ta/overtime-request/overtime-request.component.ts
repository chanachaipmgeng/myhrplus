import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaService, OvertimeRequest, OvertimeDate } from '../services/ta.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-overtime-request',
  templateUrl: './overtime-request.component.html',
  styleUrls: ['./overtime-request.component.scss']
})
export class OvertimeRequestComponent implements OnInit {
  overtimeForm: FormGroup;
  loading = false;
  minDate = new Date();
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));

  constructor(
    private fb: FormBuilder,
    private taService: TaService,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.overtimeForm = this.fb.group({
      dates: this.fb.array([this.createOvertimeDateFormGroup()]),
      reason: ['', [Validators.required, Validators.minLength(10)]],
      attachments: [[]]
    });
  }

  ngOnInit(): void {
  }

  get datesFormArray(): FormArray {
    return this.overtimeForm.get('dates') as FormArray;
  }

  createOvertimeDateFormGroup(): FormGroup {
    return this.fb.group({
      date: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      hours: [0, [Validators.required, Validators.min(0.5)]],
      type: ['normal']
    });
  }

  addOvertimeDate(): void {
    this.datesFormArray.push(this.createOvertimeDateFormGroup());
  }

  removeOvertimeDate(index: number): void {
    if (this.datesFormArray.length > 1) {
      this.datesFormArray.removeAt(index);
    } else {
      this.notificationService.showWarning('At least one overtime date is required');
    }
  }

  calculateHours(index: number): void {
    const dateGroup = this.datesFormArray.at(index);
    const startTime = dateGroup.get('startTime')?.value;
    const endTime = dateGroup.get('endTime')?.value;

    if (startTime && endTime) {
      const startParts = startTime.split(':');
      const endParts = endTime.split(':');
      const startHour = parseInt(startParts[0]) + parseInt(startParts[1]) / 60;
      const endHour = parseInt(endParts[0]) + parseInt(endParts[1]) / 60;
      let hours = endHour - startHour;

      if (hours < 0) {
        hours += 24; // Handle overnight overtime
      }

      dateGroup.patchValue({ hours: hours.toFixed(2) });
    }
  }

  onFileSelected(files: File[]): void {
    this.overtimeForm.patchValue({ attachments: files });
  }

  getTotalHours(): number {
    return this.datesFormArray.controls.reduce((total, control) => {
      return total + (parseFloat(control.get('hours')?.value) || 0);
    }, 0);
  }

  onSubmit(): void {
    if (this.overtimeForm.valid) {
      const totalHours = this.getTotalHours();
      
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Overtime Request',
          message: `Are you sure you want to submit this overtime request for ${totalHours} hours?`,
          confirmText: 'Submit',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.submitOvertimeRequest();
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields correctly');
    }
  }

  submitOvertimeRequest(): void {
    this.loading = true;
    const formValue = this.overtimeForm.value;
    
    const dates: OvertimeDate[] = formValue.dates.map((d: any) => ({
      date: d.date,
      startTime: d.startTime,
      endTime: d.endTime,
      hours: parseFloat(d.hours),
      type: d.type
    }));

    const overtimeRequest: OvertimeRequest = {
      dates: dates,
      reason: formValue.reason,
      attachments: formValue.attachments || []
    };

    this.taService.requestOvertime(overtimeRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Overtime request submitted successfully');
          this.router.navigate(['/ta']);
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit overtime request');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit overtime request');
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/ta']);
  }
}

