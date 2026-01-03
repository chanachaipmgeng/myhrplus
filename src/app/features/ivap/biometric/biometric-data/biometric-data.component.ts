/**
 * Biometric Data Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-biometric-data',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './biometric-data.component.html',
  styleUrls: ['./biometric-data.component.scss']
})
export class BiometricDataComponent implements OnInit {
  ngOnInit(): void {}
}

