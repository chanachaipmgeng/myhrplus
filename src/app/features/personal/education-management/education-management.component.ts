import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService, Education } from '../services/personal.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-education-management',
  templateUrl: './education-management.component.html',
  styleUrls: ['./education-management.component.scss']
})
export class EducationManagementComponent implements OnInit {
  educationHistory: Education[] = [];
  loading = false;
  editingEducation: Education | null = null;
  educationForm: FormGroup;
  showForm = false;

  educationLevels = [
    { value: 'high_school', label: 'High School' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'doctorate', label: 'Doctorate' },
    { value: 'other', label: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private personalService: PersonalService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.educationForm = this.fb.group({
      educationLevel: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      major: [''],
      startDate: [''],
      endDate: [''],
      graduationDate: [''],
      gpa: [0, [Validators.min(0), Validators.max(4)]],
      degree: ['']
    });
  }

  ngOnInit(): void {
    this.loadEducationHistory();
  }

  loadEducationHistory(): void {
    this.loading = true;
    this.personalService.getEducationHistory().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.educationHistory = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading education history:', error);
        this.loading = false;
      }
    });
  }

  openAddForm(): void {
    this.editingEducation = null;
    this.educationForm.reset();
    this.showForm = true;
  }

  openEditForm(education: Education): void {
    this.editingEducation = education;
    this.educationForm.patchValue(education);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingEducation = null;
    this.educationForm.reset();
  }

  saveEducation(): void {
    if (this.educationForm.valid) {
      const educationData: Education = this.educationForm.value;
      
      if (this.editingEducation && this.editingEducation.educationId) {
        this.personalService.updateEducation(this.editingEducation.educationId, educationData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Education updated successfully');
              this.loadEducationHistory();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update education');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update education');
          }
        });
      } else {
        this.personalService.addEducation(educationData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Education added successfully');
              this.loadEducationHistory();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to add education');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to add education');
          }
        });
      }
    }
  }

  deleteEducation(education: Education): void {
    if (!education.educationId) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Education',
        message: `Are you sure you want to delete this education record?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personalService.deleteEducation(education.educationId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Education deleted successfully');
              this.loadEducationHistory();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to delete education');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to delete education');
          }
        });
      }
    });
  }

  getEducationLevelLabel(level: string): string {
    const eduLevel = this.educationLevels.find(l => l.value === level);
    return eduLevel ? eduLevel.label : level;
  }
}
