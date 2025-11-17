import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaService, TimeEditRequest } from '../services/ta.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-time-edit-request',
  templateUrl: './time-edit-request.component.html',
  styleUrls: ['./time-edit-request.component.scss']
})
export class TimeEditRequestComponent implements OnInit {
  timeEditForm: FormGroup;
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
    this.timeEditForm = this.fb.group({
      date: ['', [Validators.required]],
      originalCheckIn: [''],
      originalCheckOut: [''],
      newCheckIn: ['', [Validators.required]],
      newCheckOut: ['', [Validators.required]],
      reason: ['', [Validators.required, Validators.minLength(10)]],
      attachments: [[]]
    });
  }

  ngOnInit(): void {
    // Load original time if date is selected
    this.timeEditForm.get('date')?.valueChanges.subscribe(date => {
      if (date) {
        this.loadOriginalTime(date);
      }
    });
  }

  loadOriginalTime(date: string): void {
    // This would typically load from API
    // For now, we'll leave it empty or load from attendance records
  }

  onFileSelected(files: File[]): void {
    this.timeEditForm.patchValue({ attachments: files });
  }

  onSubmit(): void {
    if (this.timeEditForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Time Edit Request',
          message: 'Are you sure you want to submit this time edit request?',
          confirmText: 'Submit',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.submitTimeEditRequest();
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields correctly');
    }
  }

  submitTimeEditRequest(): void {
    this.loading = true;
    const formValue = this.timeEditForm.value;
    
    const timeEditRequest: TimeEditRequest = {
      date: formValue.date,
      originalCheckIn: formValue.originalCheckIn || undefined,
      originalCheckOut: formValue.originalCheckOut || undefined,
      newCheckIn: formValue.newCheckIn,
      newCheckOut: formValue.newCheckOut,
      reason: formValue.reason,
      attachments: formValue.attachments || []
    };

    this.taService.requestTimeEdit(timeEditRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Time edit request submitted successfully');
          this.router.navigate(['/ta']);
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit time edit request');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit time edit request');
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/ta']);
  }
}

