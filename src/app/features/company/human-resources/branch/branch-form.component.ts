import { Component, EventEmitter, Input, Output, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { Branch } from '../../models/branch.model';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branch-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalComponent,
    GlassInputComponent
  ],
  templateUrl: './branch-form.component.html'
})
export class BranchFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() data: Branch | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private service = inject(BranchService);
  private translate = inject(TranslateService);

  form: FormGroup;
  isEditMode = false;

  constructor() {
    this.form = this.fb.group({
      branchid: ['', [Validators.required, Validators.maxLength(10)]],
      companyid: ['', [Validators.required, Validators.maxLength(5)]],
      headcompany: ['', [Validators.required, Validators.maxLength(10)]], // Required for branch
      tdesc: ['', [Validators.required, Validators.maxLength(200)]],
      edesc: ['', [Validators.required, Validators.maxLength(200)]],
      com_type: ['', Validators.maxLength(3)],
      branch_no: ['', Validators.maxLength(10)],
      soc_branchid: ['', Validators.maxLength(10)],
      tax_branchid: ['', Validators.maxLength(10)],
      taxid: ['', Validators.maxLength(13)],
      taxid2: ['', Validators.maxLength(13)],
      // Address Thai
      taddr: ['', Validators.maxLength(20)],
      tvillage: ['', Validators.maxLength(50)],
      troom_no: ['', Validators.maxLength(20)],
      tfloor: ['', Validators.maxLength(10)],
      tsoi: ['', Validators.maxLength(50)],
      tmoo: ['', Validators.maxLength(10)],
      troad: ['', Validators.maxLength(50)],
      tsubdistrict: ['', Validators.maxLength(50)],
      // Address English
      eaddr: ['', Validators.maxLength(20)],
      evillage: ['', Validators.maxLength(50)],
      eroom_no: ['', Validators.maxLength(20)],
      efloor: ['', Validators.maxLength(10)],
      esoi: ['', Validators.maxLength(50)],
      emoo: ['', Validators.maxLength(10)],
      eroad: ['', Validators.maxLength(50)],
      esubdistrict: ['', Validators.maxLength(50)],
      // Location
      zipcode: ['', Validators.maxLength(5)],
      districtid: ['', Validators.maxLength(10)],
      // Contact
      tel: ['', Validators.maxLength(30)],
      fax: ['', Validators.maxLength(30)],
      website: ['', Validators.maxLength(100)],
      // Social Security
      social_code: ['', Validators.maxLength(20)],
      soc_sign_name: ['', Validators.maxLength(100)],
      soc_sign_pos: ['', Validators.maxLength(50)],
      // Tax
      tax_sign_name: ['', Validators.maxLength(100)],
      tax_sign_pos: ['', Validators.maxLength(50)],
      // Other
      brand_tdesc: ['', Validators.maxLength(200)],
      brand_edesc: ['', Validators.maxLength(200)],
      consolidate: ['', Validators.maxLength(10)],
      branch_tax: ['', Validators.maxLength(10)],
      // Required fields
      iscompany: [''], // Empty for branch
      isbranch: ['1', Validators.required] // '1' for branch
    });
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.isEditMode = !!this.data;
      if (this.data) {
        const formData = {
          ...this.data,
          iscompany: this.data.iscompany || '',
          isbranch: this.data.isbranch || '1'
        };
        this.form.patchValue(formData);
        this.form.get('branchid')?.disable(); // PK cannot be changed
        this.form.get('companyid')?.disable(); // Company ID is readonly
      } else {
        this.form.reset({
          iscompany: '',
          isbranch: '1'
        });
        this.form.get('branchid')?.enable();
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
      ? this.service.update(formData.branchid, formData)
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

