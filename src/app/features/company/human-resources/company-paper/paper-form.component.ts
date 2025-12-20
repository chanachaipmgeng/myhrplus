import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { Paper } from '../../models/paper.model';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-paper-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './paper-form.component.html'
})
export class PaperFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: Paper | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(PaperService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      paperid: ['', [Validators.required, Validators.maxLength(20)]],
      companyid: ['', Validators.required],
      tdesc: ['', [Validators.required, Validators.maxLength(200)]],
      edesc: ['', Validators.maxLength(200)],
      jb_active: ['0'],
      attachfile_active: ['0']
    });
  }

  // Detect input changes to patch form
  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        // Convert boolean strings to form values
        const formData = {
          ...this.data,
          jb_active: this.data.jb_active || '0',
          attachfile_active: this.data.attachfile_active || '0'
        };
        this.form.patchValue(formData);
        this.form.get('paperid')?.disable(); // PK cannot be changed
        this.form.get('companyid')?.disable(); // Company ID is readonly
      } else {
        this.form.reset({
          jb_active: '0',
          attachfile_active: '0'
        });
        this.form.get('paperid')?.enable();
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
      ? this.service.update(formData.paperid, formData)
      : this.service.create(formData);

    request$.subscribe({
      next: () => {
        this.service.loading.set(false);
        this.save.emit(); // Notify parent to refresh list
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


