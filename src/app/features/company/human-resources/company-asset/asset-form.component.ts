import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../services/asset.service';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-asset-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './asset-form.component.html'
})
export class AssetFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: Asset | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(AssetService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      companyid: ['C001', Validators.required], // TODO: Get actual company
      assetid: ['', Validators.required],
      tdesc: ['', Validators.required],
      edesc: [''],
      astype: ['', Validators.required],
      fine: ['0.00'],
      owner: [''],
      status: ['1'],
      remarks: [''],
      reservation: [false]
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        const patchData = {
            ...this.data,
            reservation: this.data.reservation === '1'
        };
        this.form.patchValue(patchData);
        this.form.get('assetid')?.disable();
      } else {
        this.form.reset({
            companyid: 'C001',
            status: '1',
            fine: '0.00',
            reservation: false
        });
        this.form.get('assetid')?.enable();
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

    const rawData = this.form.getRawValue();
    const formData = {
        ...rawData,
        reservation: rawData.reservation ? '1' : '0'
    };

    this.service.loading.set(true);

    const request$ = this.isEditMode
      ? this.service.update(formData.assetid, formData)
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
      }
    });
  }
}


