import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { StepperComponent, StepperStep } from '@shared/components/stepper/stepper.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-stepper-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, GlassButtonComponent, StepperComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './stepper-demo.component.html',
  styleUrls: ['./stepper-demo.component.scss']
})
export class StepperDemoComponent {
  currentStep: number = 0;
  currentStepVertical: number = 0;

  steps: StepperStep[] = [
    { label: 'ข้อมูลส่วนตัว', description: 'กรอกข้อมูลส่วนตัว', icon: 'person' },
    { label: 'ข้อมูลติดต่อ', description: 'กรอกข้อมูลติดต่อ', icon: 'contact_mail' },
    { label: 'ยืนยันข้อมูล', description: 'ตรวจสอบและยืนยัน', icon: 'check_circle' }
  ];

  stepsWithOptional: StepperStep[] = [
    { label: 'ขั้นตอนที่ 1', description: 'ข้อมูลหลัก', completed: true },
    { label: 'ขั้นตอนที่ 2', description: 'ข้อมูลเพิ่มเติม', optional: true },
    { label: 'ขั้นตอนที่ 3', description: 'ยืนยัน' }
  ];

  props: PropDefinition[] = [
    {
      name: 'steps',
      type: 'StepperStep[]',
      default: '[]',
      description: 'Array of step definitions',
      required: true
    },
    {
      name: 'currentStep',
      type: 'number',
      default: '0',
      description: 'Current active step index',
      required: false
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: 'Stepper orientation',
      required: false
    },
    {
      name: 'linear',
      type: 'boolean',
      default: 'false',
      description: 'Require steps to be completed in order',
      required: false
    },
    {
      name: 'showStepNumbers',
      type: 'boolean',
      default: 'true',
      description: 'Show step numbers',
      required: false
    },
    {
      name: 'showStepIcons',
      type: 'boolean',
      default: 'true',
      description: 'Show step icons',
      required: false
    }
  ];

  outputs: PropDefinition[] = [
    {
      name: 'stepChange',
      type: 'EventEmitter<number>',
      default: '-',
      description: 'Emitted when step changes',
      required: false
    },
    {
      name: 'complete',
      type: 'EventEmitter<void>',
      default: '-',
      description: 'Emitted when stepper is completed',
      required: false
    }
  ];

  basicExample = `<app-stepper
  [steps]="steps"
  [currentStep]="currentStep"
  (stepChange)="currentStep = $event">
</app-stepper>`;

  verticalExample = `<app-stepper
  [steps]="steps"
  [currentStep]="currentStep"
  orientation="vertical">
</app-stepper>`;

  linearExample = `<app-stepper
  [steps]="steps"
  [currentStep]="currentStep"
  [linear]="true">
</app-stepper>`;

  onStepChange(step: number): void {
    this.currentStep = step;
  }

  onNext(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  onPrevious(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
