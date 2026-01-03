/**
 * Event Form Component
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
import { IvapEventService, NotificationService } from '@core/services';
import { Event } from '@core/models/ivap';

@Component({
  selector: 'app-event-form',
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
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private eventService = inject(IvapEventService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);

  form: FormGroup;
  loading = false;

  constructor() {
    this.form = this.fb.group({
      event_name: ['', Validators.required],
      event_description: [''],
      event_type: ['MEETING', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      location: [''],
      max_attendees: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.eventService.create(this.form.value).subscribe({
      next: () => {
        this.notificationService.showSuccess('Event created successfully');
        this.router.navigate(['/ivap/events']);
      },
      error: () => {
        this.notificationService.showError('Failed to create event');
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/ivap/events']);
  }
}

