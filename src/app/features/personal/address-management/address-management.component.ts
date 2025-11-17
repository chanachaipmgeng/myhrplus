import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService, Address } from '../services/personal.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.scss']
})
export class AddressManagementComponent implements OnInit {
  addresses: Address[] = [];
  loading = false;
  editingAddress: Address | null = null;
  addressForm: FormGroup;
  showForm = false;

  addressTypes = [
    { value: 'current', label: 'Current Address' },
    { value: 'permanent', label: 'Permanent Address' },
    { value: 'emergency', label: 'Emergency Contact Address' }
  ];

  constructor(
    private fb: FormBuilder,
    private personalService: PersonalService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.addressForm = this.fb.group({
      addressType: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      district: [''],
      province: [''],
      postalCode: [''],
      country: [''],
      isCurrent: [false]
    });
  }

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses(): void {
    this.loading = true;
    this.personalService.getAddresses().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.addresses = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading addresses:', error);
        this.loading = false;
      }
    });
  }

  openAddForm(): void {
    this.editingAddress = null;
    this.addressForm.reset();
    this.showForm = true;
  }

  openEditForm(address: Address): void {
    this.editingAddress = address;
    this.addressForm.patchValue(address);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingAddress = null;
    this.addressForm.reset();
  }

  saveAddress(): void {
    if (this.addressForm.valid) {
      const addressData: Address = this.addressForm.value;
      
      if (this.editingAddress && this.editingAddress.addressId) {
        // Update existing address
        this.personalService.updateAddress(this.editingAddress.addressId, addressData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Address updated successfully');
              this.loadAddresses();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update address');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update address');
          }
        });
      } else {
        // Add new address
        this.personalService.addAddress(addressData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Address added successfully');
              this.loadAddresses();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to add address');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to add address');
          }
        });
      }
    }
  }

  deleteAddress(address: Address): void {
    if (!address.addressId) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Address',
        message: 'Are you sure you want to delete this address?',
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personalService.deleteAddress(address.addressId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Address deleted successfully');
              this.loadAddresses();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to delete address');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to delete address');
          }
        });
      }
    });
  }

  getAddressTypeLabel(type: string): string {
    const addressType = this.addressTypes.find(t => t.value === type);
    return addressType ? addressType.label : type;
  }
}
