import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService, FamilyMember } from '../services/personal.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-family-management',
  templateUrl: './family-management.component.html',
  styleUrls: ['./family-management.component.scss']
})
export class FamilyManagementComponent implements OnInit {
  familyMembers: FamilyMember[] = [];
  loading = false;
  editingMember: FamilyMember | null = null;
  familyForm: FormGroup;
  showForm = false;

  relationships = [
    { value: 'spouse', label: 'Spouse' },
    { value: 'child', label: 'Child' },
    { value: 'parent', label: 'Parent' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'other', label: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private personalService: PersonalService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.familyForm = this.fb.group({
      relationship: ['', [Validators.required]],
      tfullname: ['', [Validators.required]],
      efullname: [''],
      birthDate: [''],
      idCard: [''],
      occupation: [''],
      phone: [''],
      isDependent: [false]
    });
  }

  ngOnInit(): void {
    this.loadFamilyMembers();
  }

  loadFamilyMembers(): void {
    this.loading = true;
    this.personalService.getFamilyMembers().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.familyMembers = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading family members:', error);
        this.loading = false;
      }
    });
  }

  openAddForm(): void {
    this.editingMember = null;
    this.familyForm.reset();
    this.showForm = true;
  }

  openEditForm(member: FamilyMember): void {
    this.editingMember = member;
    this.familyForm.patchValue(member);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingMember = null;
    this.familyForm.reset();
  }

  saveFamilyMember(): void {
    if (this.familyForm.valid) {
      const memberData: FamilyMember = this.familyForm.value;
      
      if (this.editingMember && this.editingMember.familyId) {
        this.personalService.updateFamilyMember(this.editingMember.familyId, memberData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Family member updated successfully');
              this.loadFamilyMembers();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update family member');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update family member');
          }
        });
      } else {
        this.personalService.addFamilyMember(memberData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Family member added successfully');
              this.loadFamilyMembers();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to add family member');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to add family member');
          }
        });
      }
    }
  }

  deleteFamilyMember(member: FamilyMember): void {
    if (!member.familyId) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Family Member',
        message: `Are you sure you want to delete ${member.tfullname}?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personalService.deleteFamilyMember(member.familyId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Family member deleted successfully');
              this.loadFamilyMembers();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to delete family member');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to delete family member');
          }
        });
      }
    });
  }

  getRelationshipLabel(relationship: string): string {
    const rel = this.relationships.find(r => r.value === relationship);
    return rel ? rel.label : relationship;
  }
}
