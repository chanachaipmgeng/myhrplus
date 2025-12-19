import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { WorkingArea } from '../../models/working-area.model';
import { WorkingAreaService } from '../../services/working-area.service';

@Component({
  selector: 'app-working-area-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './working-area-form.component.html'
})
export class WorkingAreaFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: WorkingArea | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(WorkingAreaService);
  private translate = inject(TranslateService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      workareaid: ['', [Validators.required, Validators.maxLength(10)]],
      companyid: ['', [Validators.required, Validators.maxLength(5)]],
      tdesc: ['', [Validators.required, Validators.maxLength(100)]],
      edesc: ['', [Validators.required, Validators.maxLength(100)]],
      WEB: ['', [Validators.maxLength(256), Validators.pattern(/^https?:\/\/.+/)]],
      MAIL: ['', [Validators.maxLength(256), Validators.email]],
      DATEST: ['', Validators.required],
      DATEEN: [''],
      OBJECTIVE: ['', Validators.maxLength(4000)],
      REMARKS: ['', Validators.maxLength(4000)],
      CONSOLIDATE: ['', Validators.maxLength(10)],
      BRAND_SUPPORT: ['', Validators.maxLength(10)],
      ZONETYPEID: ['', Validators.maxLength(10)],
      GROUPID: ['', Validators.maxLength(10)]
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        this.form.patchValue(this.data);
        this.form.get('workareaid')?.disable(); // PK cannot be changed
        this.form.get('companyid')?.disable(); // Company ID is readonly
      } else {
        this.form.reset();
        this.form.get('workareaid')?.enable();
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
      ? this.service.update(formData.workareaid, formData)
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
