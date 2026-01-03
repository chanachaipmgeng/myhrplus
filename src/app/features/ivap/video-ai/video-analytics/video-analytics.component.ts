/**
 * Video Analytics Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-video-analytics',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './video-analytics.component.html',
  styleUrls: ['./video-analytics.component.scss']
})
export class VideoAnalyticsComponent implements OnInit {
  ngOnInit(): void {}
}

