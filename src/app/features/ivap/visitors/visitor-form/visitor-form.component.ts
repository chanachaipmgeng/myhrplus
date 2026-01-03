/**
 * Visitor Form Component
 * Component สำหรับลงทะเบียน/แก้ไข Visitor
 */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { IvapVisitorService } from '@core/services';
import { Visitor } from '@core/models/ivap';
import { NotificationService } from '@core/services';

@Component({
  selector: 'app-visitor-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlassCardComponent,
    GlassInputComponent,
    GlassButtonComponent,
    PageHeaderComponent,
    IconComponent
  ],
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private visitorService = inject(IvapVisitorService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);

  form: FormGroup;
  loading = false;

  constructor() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone_number: [''],
      company_name: [''],
      purpose: ['', Validators.required],
      host_employee_id: ['']
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formData = this.form.value;

    this.visitorService.create(formData).subscribe({
      next: (visitor) => {
        this.notificationService.showSuccess('Visitor registered successfully');
        this.router.navigate(['/ivap/visitors']);
      },
      error: (error) => {
        this.notificationService.showError('Failed to register visitor');
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/ivap/visitors']);
  }
}

