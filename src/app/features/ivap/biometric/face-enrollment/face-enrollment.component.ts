/**
 * Face Enrollment Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-face-enrollment',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './face-enrollment.component.html',
  styleUrls: ['./face-enrollment.component.scss']
})
export class FaceEnrollmentComponent implements OnInit {
  ngOnInit(): void {}
}

