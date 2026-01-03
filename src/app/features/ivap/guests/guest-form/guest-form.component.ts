/**
 * Guest Form Component
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
import { IvapGuestService, NotificationService } from '@core/services';
import { Guest } from '@core/models/ivap';

@Component({
  selector: 'app-guest-form',
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
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private guestService = inject(IvapGuestService);
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
      event_id: [''],
      registration_type: ['PRE_REGISTERED', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.guestService.create(this.form.value).subscribe({
      next: () => {
        this.notificationService.showSuccess('Guest registered successfully');
        this.router.navigate(['/ivap/guests']);
      },
      error: () => {
        this.notificationService.showError('Failed to register guest');
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/ivap/guests']);
  }
}

