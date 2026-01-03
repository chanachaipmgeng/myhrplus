/**
 * Verification Sessions Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-verification-sessions',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './verification-sessions.component.html',
  styleUrls: ['./verification-sessions.component.scss']
})
export class VerificationSessionsComponent implements OnInit {
  ngOnInit(): void {}
}

