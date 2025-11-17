import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService, WorkExperience } from '../services/personal.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: WorkExperience[] = [];
  loading = false;
  editingExperience: WorkExperience | null = null;
  experienceForm: FormGroup;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private personalService: PersonalService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.experienceForm = this.fb.group({
      companyName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: [''],
      description: [''],
      salary: [0, [Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadWorkExperience();
  }

  loadWorkExperience(): void {
    this.loading = true;
    this.personalService.getWorkExperience().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.workExperiences = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading work experience:', error);
        this.loading = false;
      }
    });
  }

  openAddForm(): void {
    this.editingExperience = null;
    this.experienceForm.reset();
    this.showForm = true;
  }

  openEditForm(experience: WorkExperience): void {
    this.editingExperience = experience;
    this.experienceForm.patchValue(experience);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingExperience = null;
    this.experienceForm.reset();
  }

  saveExperience(): void {
    if (this.experienceForm.valid) {
      const experienceData: WorkExperience = this.experienceForm.value;
      
      if (this.editingExperience && this.editingExperience.experienceId) {
        this.personalService.updateWorkExperience(this.editingExperience.experienceId, experienceData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Work experience updated successfully');
              this.loadWorkExperience();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to update work experience');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to update work experience');
          }
        });
      } else {
        this.personalService.addWorkExperience(experienceData).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Work experience added successfully');
              this.loadWorkExperience();
              this.cancelForm();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to add work experience');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to add work experience');
          }
        });
      }
    }
  }

  deleteExperience(experience: WorkExperience): void {
    if (!experience.experienceId) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Work Experience',
        message: `Are you sure you want to delete this work experience?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personalService.deleteWorkExperience(experience.experienceId!).subscribe({
          next: (response) => {
            if (response.success) {
              this.notificationService.showSuccess('Work experience deleted successfully');
              this.loadWorkExperience();
            } else {
              this.notificationService.showError(response.error?.message || 'Failed to delete work experience');
            }
          },
          error: (error) => {
            this.notificationService.showError('Failed to delete work experience');
          }
        });
      }
    });
  }
}

