import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppraisalService, AppraisalGoal } from '../services/appraisal.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {
  goalsForm: FormGroup;
  goals: AppraisalGoal[] = [];
  loading = false;
  appraisalId: string | null = null;
  selectedYear = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private appraisalService: AppraisalService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.goalsForm = this.fb.group({
      goals: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['appraisalId']) {
        this.appraisalId = params['appraisalId'];
        this.loadGoals(params['appraisalId']);
      } else {
        // If no appraisal ID, create goals for current year
        this.loadAppraisalsForYear();
      }
    });
  }

  loadAppraisalsForYear(): void {
    this.loading = true;
    this.appraisalService.getAppraisals({ year: this.selectedYear }).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          const appraisal = response.data[0];
          this.appraisalId = appraisal.appraisalId;
          this.loadGoals(appraisal.appraisalId);
        } else {
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Error loading appraisals:', error);
        this.loading = false;
      }
    });
  }

  loadGoals(appraisalId: string): void {
    this.loading = true;
    this.appraisalService.getGoals(appraisalId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.goals = response.data;
          this.populateGoalsForm();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading goals:', error);
        this.loading = false;
      }
    });
  }

  populateGoalsForm(): void {
    const goalsArray = this.goalsForm.get('goals') as FormArray;
    goalsArray.clear();
    this.goals.forEach(goal => {
      goalsArray.push(this.createGoalFormGroup(goal));
    });
  }

  createGoalFormGroup(goal?: AppraisalGoal): FormGroup {
    return this.fb.group({
      goalId: [goal?.goalId || ''],
      goalTitle: [goal?.goalTitle || '', [Validators.required]],
      goalDescription: [goal?.goalDescription || '', [Validators.required]],
      targetValue: [goal?.targetValue || ''],
      actualValue: [goal?.actualValue || ''],
      weight: [goal?.weight || 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      score: [goal?.score || ''],
      category: [goal?.category || ''],
      dueDate: [goal?.dueDate || '']
    });
  }

  get goalsArray(): FormArray {
    return this.goalsForm.get('goals') as FormArray;
  }

  addGoal(): void {
    const goalsArray = this.goalsForm.get('goals') as FormArray;
    goalsArray.push(this.createGoalFormGroup());
  }

  removeGoal(index: number): void {
    const goalsArray = this.goalsForm.get('goals') as FormArray;
    const goal = goalsArray.at(index).value;
    
    if (goal.goalId) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Delete Goal',
          message: 'Are you sure you want to delete this goal?'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result && this.appraisalId) {
          this.appraisalService.deleteGoal(this.appraisalId, goal.goalId).subscribe({
            next: (response) => {
              if (response.success) {
                goalsArray.removeAt(index);
                this.notificationService.showSuccess('Goal deleted successfully');
              }
            },
            error: (error) => {
              this.notificationService.showError('Failed to delete goal');
            }
          });
        }
      });
    } else {
      goalsArray.removeAt(index);
    }
  }

  saveGoals(): void {
    if (!this.appraisalId) {
      this.notificationService.showWarning('Please select an appraisal first');
      return;
    }

    if (this.goalsForm.invalid) {
      this.goalsForm.markAllAsTouched();
      this.notificationService.showWarning('Please fill in all required fields');
      return;
    }

    this.loading = true;
    const goalsArray = this.goalsForm.get('goals') as FormArray;
    const goalsToSave = goalsArray.value;
    let savedCount = 0;
    const totalGoals = goalsToSave.length;

    if (totalGoals === 0) {
      this.notificationService.showWarning('Please add at least one goal');
      this.loading = false;
      return;
    }

    goalsToSave.forEach((goal: any, index: number) => {
      const goalData: AppraisalGoal = {
        appraisalId: this.appraisalId!,
        goalTitle: goal.goalTitle,
        goalDescription: goal.goalDescription,
        targetValue: goal.targetValue,
        actualValue: goal.actualValue,
        weight: goal.weight,
        score: goal.score,
        category: goal.category,
        dueDate: goal.dueDate,
        status: 'active'
      };

      if (goal.goalId) {
        this.appraisalService.updateGoal(this.appraisalId!, goal.goalId, goalData).subscribe({
          next: (response) => {
            savedCount++;
            if (savedCount === totalGoals) {
              this.notificationService.showSuccess('Goals saved successfully');
              this.loadGoals(this.appraisalId!);
              this.loading = false;
            }
          },
          error: (error) => {
            savedCount++;
            if (savedCount === totalGoals) {
              this.loading = false;
            }
          }
        });
      } else {
        this.appraisalService.createGoal(this.appraisalId!, goalData).subscribe({
          next: (response) => {
            savedCount++;
            if (savedCount === totalGoals) {
              this.notificationService.showSuccess('Goals saved successfully');
              this.loadGoals(this.appraisalId!);
              this.loading = false;
            }
          },
          error: (error) => {
            savedCount++;
            if (savedCount === totalGoals) {
              this.loading = false;
            }
          }
        });
      }
    });
  }

  calculateTotalWeight(): number {
    const goalsArray = this.goalsForm.get('goals') as FormArray;
    let total = 0;
    goalsArray.controls.forEach(control => {
      const weight = control.get('weight')?.value || 0;
      total += parseFloat(weight) || 0;
    });
    return total;
  }

  calculateProgress(goal: any): number {
    if (!goal.targetValue || !goal.actualValue) return 0;
    const target = parseFloat(goal.targetValue) || 0;
    const actual = parseFloat(goal.actualValue) || 0;
    if (target === 0) return 0;
    return Math.min((actual / target) * 100, 100);
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 3; i--) {
      years.push(i);
    }
    return years;
  }
}

