import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { BankCompany } from '../../models/bank-company.model';
import { BankCompanyService } from '../../services/bank-company.service';

@Component({
  selector: 'app-bank-company-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './bank-company-form.component.html'
})
export class BankCompanyFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: BankCompany | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(BankCompanyService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      line_no: [''], // Hidden Key
      companyid: ['', Validators.required],
      bankid: ['', Validators.required],
      branch: [''],
      bank_branch: [''],
      account: ['', Validators.required],
      bank_client_thname: [''],
      bank_client_engname: [''],
      contact_person: [''],
      tel: [''],
      trans_ats: [false],
      isdefault: [false]
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        // Convert '1'/'0' string to boolean for checkboxes if needed
        const patchData = {
            ...this.data,
            trans_ats: this.data.trans_ats === '1',
            isdefault: this.data.isdefault === '1'
        };
        this.form.patchValue(patchData);
      } else {
        this.form.reset({
            companyid: 'C001', // TODO: Get current company ID
            isdefault: false,
            trans_ats: false
        });
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
    // Convert boolean back to '1'/'0'
    const formData = {
        ...rawData,
        trans_ats: rawData.trans_ats ? '1' : '0',
        isdefault: rawData.isdefault ? '1' : '0'
    };

    this.service.loading.set(true);

    const request$ = this.isEditMode
      ? this.service.update(formData.line_no, formData) // Use line_no as key
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


