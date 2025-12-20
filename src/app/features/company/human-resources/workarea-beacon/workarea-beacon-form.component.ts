import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { WorkareaBeacon } from '../../models/workarea-beacon.model';
import { WorkareaBeaconService } from '../../services/workarea-beacon.service';

@Component({
  selector: 'app-workarea-beacon-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './workarea-beacon-form.component.html'
})
export class WorkareaBeaconFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: WorkareaBeacon | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(WorkareaBeaconService);
  private translate = inject(TranslateService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      workareaid: ['', [Validators.required, Validators.maxLength(10)]],
      companyid: ['', [Validators.required, Validators.maxLength(5)]],
      line_no: [0, [Validators.required, Validators.min(1)]],
      beacon_uuid: ['', [Validators.required, Validators.maxLength(100)]],
      beacon_address: ['', [Validators.required, Validators.maxLength(100)]],
      beacon_name: ['', [Validators.required, Validators.maxLength(100)]],
      latitude: ['', [Validators.required, Validators.maxLength(30)]],
      longitude: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        this.form.patchValue(this.data);
        this.form.get('workareaid')?.disable(); // FK cannot be changed in edit mode
        this.form.get('companyid')?.disable(); // Company ID is readonly
        this.form.get('line_no')?.disable(); // PK part cannot be changed
      } else {
        this.form.reset({
          line_no: 0
        });
        this.form.get('workareaid')?.enable();
        this.form.get('line_no')?.enable();
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
      ? this.service.update(`${formData.workareaid}_${formData.line_no}`, formData)
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

