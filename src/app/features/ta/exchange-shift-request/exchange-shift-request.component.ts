import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaService, ExchangeShiftRequest, Shift } from '../services/ta.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-exchange-shift-request',
  templateUrl: './exchange-shift-request.component.html',
  styleUrls: ['./exchange-shift-request.component.scss']
})
export class ExchangeShiftRequestComponent implements OnInit {
  exchangeShiftForm: FormGroup;
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
    this.exchangeShiftForm = this.fb.group({
      myDate: ['', [Validators.required]],
      myShift: ['', [Validators.required]],
      exchangeWithEmployeeId: ['', [Validators.required]],
      exchangeDate: ['', [Validators.required]],
      exchangeShift: ['', [Validators.required]],
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
    this.exchangeShiftForm.patchValue({ attachments: files });
  }

  onSubmit(): void {
    if (this.exchangeShiftForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Exchange Shift Request',
          message: 'Are you sure you want to submit this exchange shift request?',
          confirmText: 'Submit',
          cancelText: 'Cancel'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.submitExchangeShiftRequest();
        }
      });
    } else {
      this.notificationService.showWarning('Please fill in all required fields correctly');
    }
  }

  submitExchangeShiftRequest(): void {
    this.loading = true;
    const formValue = this.exchangeShiftForm.value;
    
    const exchangeShiftRequest: ExchangeShiftRequest = {
      myDate: formValue.myDate,
      myShift: formValue.myShift,
      exchangeWithEmployeeId: formValue.exchangeWithEmployeeId,
      exchangeDate: formValue.exchangeDate,
      exchangeShift: formValue.exchangeShift,
      reason: formValue.reason,
      attachments: formValue.attachments || []
    };

    this.taService.requestExchangeShift(exchangeShiftRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Exchange shift request submitted successfully');
          this.router.navigate(['/ta']);
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to submit exchange shift request');
        }
        this.loading = false;
      },
      error: (error) => {
        this.notificationService.showError('Failed to submit exchange shift request');
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/ta']);
  }
}

