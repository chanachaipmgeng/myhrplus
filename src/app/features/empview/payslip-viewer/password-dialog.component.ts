import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-dialog',
  template: `
    <h2 mat-dialog-title>Enter Password</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Password</mat-label>
        <input matInput type="password" [(ngModel)]="data.password" (keyup.enter)="onSubmit()">
      </mat-form-field>
      <div *ngIf="data.msg" class="error-message">
        <p>{{ data.msg }}</p>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSubmit()">Login</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .full-width {
      width: 100%;
    }
    .error-message {
      color: red;
      margin-top: 10px;
    }
  `]
})
export class PasswordDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { password: string; msg: string }
  ) {}

  onSubmit(): void {
    if (this.data.password) {
      this.dialogRef.close(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

