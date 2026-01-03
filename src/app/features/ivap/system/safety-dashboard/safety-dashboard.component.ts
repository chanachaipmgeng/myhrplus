/**
 * Safety Dashboard Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-safety-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './safety-dashboard.component.html',
  styleUrls: ['./safety-dashboard.component.scss']
})
export class SafetyDashboardComponent implements OnInit {
  ngOnInit(): void {}
}

