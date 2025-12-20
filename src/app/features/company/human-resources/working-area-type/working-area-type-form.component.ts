import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { WorkingAreaType } from '../../models/working-area-type.model';
import { WorkingAreaTypeService } from '../../services/working-area-type.service';

@Component({
  selector: 'app-working-area-type-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './working-area-type-form.component.html'
})
export class WorkingAreaTypeFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: WorkingAreaType | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(WorkingAreaTypeService);
  private translate = inject(TranslateService);

  form: FormGroup;
  isEditMode = false;

  get workStatusOptions() {
    return [
      { value: '1', label: this.translate.instant('common.active') },
      { value: '0', label: this.translate.instant('common.inactive') }
    ];
  }

  constructor() {
    this.form = this.fb.group({
      worktypeid: ['', [Validators.required, Validators.maxLength(10)]],
      companyid: ['', [Validators.required, Validators.maxLength(5)]],
      tdesc: ['', [Validators.required, Validators.maxLength(200)]],
      edesc: ['', [Validators.required, Validators.maxLength(200)]],
      work_status: ['1', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        const formData = {
          ...this.data,
          work_status: this.data.work_status || '1'
        };
        this.form.patchValue(formData);
        this.form.get('worktypeid')?.disable(); // PK cannot be changed
        this.form.get('companyid')?.disable(); // Company ID is readonly
      } else {
        this.form.reset({
          work_status: '1'
        });
        this.form.get('worktypeid')?.enable();
        // TODO: Set companyid from current user context
        this.form.get('companyid')?.setValue('001'); // Default or from service
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = this.form.getRawValue();
    this.service.loading.set(true);

    const request$ = this.isEditMode
      ? this.service.update(formData.worktypeid, formData)
      : this.service.create(formData);

    request$.subscribe({
      next: () => {
        this.service.loading.set(false);
        this.save.emit();
        this.onClose();
      },
      error: (err: unknown) => {
        console.error(err);
        this.service.loading.set(false);
        // TODO: Show toast error
      }
    });
  }
}

