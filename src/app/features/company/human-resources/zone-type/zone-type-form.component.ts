import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { ZoneType } from '../../models/zone-type.model';
import { ZoneTypeService } from '../../services/zone-type.service';
import { BrandStoreService } from '../../services/brand-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zone-type-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './zone-type-form.component.html'
})
export class ZoneTypeFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: ZoneType | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(ZoneTypeService);
  private brandStoreService = inject(BrandStoreService);
  private translate = inject(TranslateService);

  form: FormGroup;
  isEditMode = false;
  brandStores$: Observable<any[]> = this.brandStoreService.getAll();

  constructor() {
    this.form = this.fb.group({
      zonetypeid: ['', [Validators.required, Validators.maxLength(10)]],
      companyid: ['', [Validators.required, Validators.maxLength(5)]],
      tdesc: ['', [Validators.required, Validators.maxLength(100)]],
      edesc: ['', [Validators.required, Validators.maxLength(100)]],
      brand_support: ['']
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        this.form.patchValue(this.data);
        this.form.get('zonetypeid')?.disable(); // PK cannot be changed
        this.form.get('companyid')?.disable(); // Company ID is readonly
      } else {
        this.form.reset();
        this.form.get('zonetypeid')?.enable();
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
      ? this.service.update(formData.zonetypeid, formData)
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
