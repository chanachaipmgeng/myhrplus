import { Component, ChangeDetectionStrategy, input, model, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

export interface StepperStep {
  label: string;
  description?: string;
  icon?: string;
  completed?: boolean;
  optional?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('stepAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class StepperComponent {
  steps = input.required<StepperStep[]>();
  currentStep = model<number>(0);
  orientation = input<'horizontal' | 'vertical'>('horizontal');
  linear = input<boolean>(false);
  showStepNumbers = input<boolean>(true);
  showStepIcons = input<boolean>(true);

  complete = output<void>();

  constructor() {
    // Validate current step bounds effect
    effect(() => {
      const current = this.currentStep();
      const total = this.steps().length;
      if (total > 0) {
        if (current < 0) {
          this.currentStep.set(0);
        } else if (current >= total) {
          this.currentStep.set(total - 1);
        }
      }
    }, { allowSignalWrites: true });
  }

  onStepClick(index: number): void {
    if (this.canNavigateToStep(index)) {
      this.currentStep.set(index);
    }
  }

  onNext(): void {
    if (this.canNavigateToStep(this.currentStep() + 1)) {
      this.currentStep.update(v => v + 1);
    }
  }

  onPrevious(): void {
    if (this.currentStep() > 0) {
      this.currentStep.update(v => v - 1);
    }
  }

  onComplete(): void {
    this.complete.emit();
  }

  canNavigateToStep(index: number): boolean {
    const steps = this.steps();
    if (index < 0 || index >= steps.length) {
      return false;
    }

    if (steps[index].disabled) {
      return false;
    }

    if (this.linear()) {
      // In linear mode, can only navigate to completed steps or next step
      for (let i = 0; i < index; i++) {
        if (!steps[i].completed && !steps[i].optional) {
          return false;
        }
      }
    }

    return true;
  }

  isStepCompleted(index: number): boolean {
    return this.steps()[index]?.completed || false;
  }

  isStepActive(index: number): boolean {
    return index === this.currentStep();
  }

  isStepOptional(index: number): boolean {
    return this.steps()[index]?.optional || false;
  }

  getStepStatus(index: number): 'completed' | 'active' | 'pending' {
    if (this.isStepCompleted(index)) {
      return 'completed';
    } else if (this.isStepActive(index)) {
      return 'active';
    } else {
      return 'pending';
    }
  }

  canGoNext(): boolean {
    return this.canNavigateToStep(this.currentStep() + 1);
  }

  canGoPrevious(): boolean {
    return this.currentStep() > 0;
  }

  isLastStep(): boolean {
    return this.currentStep() === this.steps().length - 1;
  }
}


