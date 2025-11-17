import { Component, OnInit } from '@angular/core';
import { TaService } from '../services/ta.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

export interface PendingApproval {
  requestId: string;
  requestType: string;
  employeeId: string;
  employeeName: string;
  requestDate: string;
  details: any;
  status: string;
  submittedDate: string;
}

@Component({
  selector: 'app-manager-approvals',
  templateUrl: './manager-approvals.component.html',
  styleUrls: ['./manager-approvals.component.scss']
})
export class ManagerApprovalsComponent implements OnInit {
  pendingApprovals: PendingApproval[] = [];
  loading = false;
  activeTab = 0;
  selectedRequest: PendingApproval | null = null;
  approvalComment = '';

  constructor(
    private taService: TaService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPendingApprovals();
  }

  loadPendingApprovals(): void {
    this.loading = true;
    this.taService.getPendingApprovals().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.pendingApprovals = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading pending approvals:', error);
        this.loading = false;
      }
    });
  }

  viewRequest(request: PendingApproval): void {
    this.selectedRequest = request;
  }

  approveRequest(request: PendingApproval): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Approve Request',
        message: `Are you sure you want to approve this ${request.requestType} request from ${request.employeeName}?`,
        confirmText: 'Approve',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitApproval(request.requestId, 'approve');
      }
    });
  }

  rejectRequest(request: PendingApproval): void {
    if (!this.approvalComment.trim()) {
      this.notificationService.showWarning('Please provide a reason for rejection');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Reject Request',
        message: `Are you sure you want to reject this ${request.requestType} request from ${request.employeeName}?`,
        confirmText: 'Reject',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitRejection(request.requestId);
      }
    });
  }

  returnRequest(request: PendingApproval): void {
    if (!this.approvalComment.trim()) {
      this.notificationService.showWarning('Please provide a reason for returning');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Return Request',
        message: `Are you sure you want to return this ${request.requestType} request to ${request.employeeName}?`,
        confirmText: 'Return',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitReturn(request.requestId);
      }
    });
  }

  submitApproval(requestId: string, action: string): void {
    this.taService.approveRequest(requestId, this.approvalComment).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Request approved successfully');
          this.loadPendingApprovals();
          this.selectedRequest = null;
          this.approvalComment = '';
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to approve request');
        }
      },
      error: (error) => {
        this.notificationService.showError('Failed to approve request');
      }
    });
  }

  submitRejection(requestId: string): void {
    this.taService.rejectRequest(requestId, this.approvalComment).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Request rejected successfully');
          this.loadPendingApprovals();
          this.selectedRequest = null;
          this.approvalComment = '';
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to reject request');
        }
      },
      error: (error) => {
        this.notificationService.showError('Failed to reject request');
      }
    });
  }

  submitReturn(requestId: string): void {
    this.taService.returnRequest(requestId, this.approvalComment).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.showSuccess('Request returned successfully');
          this.loadPendingApprovals();
          this.selectedRequest = null;
          this.approvalComment = '';
        } else {
          this.notificationService.showError(response.error?.message || 'Failed to return request');
        }
      },
      error: (error) => {
        this.notificationService.showError('Failed to return request');
      }
    });
  }

  closeRequestView(): void {
    this.selectedRequest = null;
    this.approvalComment = '';
  }

  getRequestTypeLabel(type: string): string {
    const typeLabels: { [key: string]: string } = {
      'leave': 'Leave Request',
      'time_edit': 'Time Edit Request',
      'shift_change': 'Shift Change Request',
      'exchange_shift': 'Exchange Shift Request',
      'overtime': 'Overtime Request'
    };
    return typeLabels[type] || type;
  }

  onActionClick(event: {action: string, row: PendingApproval}): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.viewRequest(event.row);
    }
  }

  approvalColumns = [
    { key: 'employeeName', label: 'Employee' },
    { key: 'requestType', label: 'Request Type' },
    { key: 'requestDate', label: 'Request Date', type: 'date' as const },
    { key: 'submittedDate', label: 'Submitted Date', type: 'date' as const },
    { key: 'status', label: 'Status' }
  ];
}

