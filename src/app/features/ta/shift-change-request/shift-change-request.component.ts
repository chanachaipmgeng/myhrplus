import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaService, ShiftChangeRequest, Shift } from '../services/ta.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-shift-change-request',
  templateUrl: './shift-change-request.component.html',
  styleUrls: ['./shift-change-request.component.scss']
})
export class ShiftChangeRequestComponent implements OnInit {
  shiftChangeForm: FormGroup;
  shifts: Shift[] = [];
  loading = false;
  minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private taService: TaService,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.shiftChangeForm = this.fb.group({
      originalDate: ['', [Validators.required]],
      originalShift: ['', [Validators.required]],
      newDate: ['', [Validators.required]],
      newShift: ['', [Validators.required]],
      reason: ['', [Validators.required, Validators.minLength(10)]],
      attachments: [[]]
    });
  }

  ngOnInit(): void {
    this.loadShifts();
  }

  loadShifts(): void {
    this.taService.getShifts().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.shifts = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading shifts:', error);
      }
    });
  }

  onFileSelected(files: File[]): void {
    this.shiftChangeForm.patchValue({ attachments: files });
  }

  onSubmit(): void {
    if (this.shiftChangeForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Shift Change Request',
          message: 'Are you sure you want to submit this shift change request?',
          confirmText: 'Submit',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.submitShiftChangeRequest();
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields correctly');
    }
  }

  submitShiftChangeRequest(): void {
    this.loading = true;
    const formValue = this.shiftChangeForm.value;
    
    const shiftChangeRequest: ShiftChangeRequest = {
      originalDate: formValue.originalDate,
      originalShift: formValue.originalShift,
      newDate: formValue.newDate,
      newShift: formValue.newShift,
      reason: formValue.reason,
      attachments: formValue.attachments || []
    };

    this.taService.requestShiftChange(shiftChangeRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Shift change request submitted successfully');
          this.router.navigate(['/ta']);
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit shift change request');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit shift change request');
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/ta']);
  }
}

