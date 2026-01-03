/**
 * Vehicle Form Component
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
import { IvapVehicleService, NotificationService } from '@core/services';
import { Vehicle } from '@core/models/ivap';

@Component({
  selector: 'app-vehicle-form',
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
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private vehicleService = inject(IvapVehicleService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);

  form: FormGroup;
  loading = false;

  constructor() {
    this.form = this.fb.group({
      license_plate: ['', Validators.required],
      vehicle_type: ['CAR', Validators.required],
      brand: [''],
      model: [''],
      color: [''],
      member_id: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.vehicleService.create(this.form.value).subscribe({
      next: () => {
        this.notificationService.showSuccess('Vehicle registered successfully');
        this.router.navigate(['/ivap/vehicles']);
      },
      error: () => {
        this.notificationService.showError('Failed to register vehicle');
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/ivap/vehicles']);
  }
}

