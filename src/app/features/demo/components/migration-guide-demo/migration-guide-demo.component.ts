import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SkeletonLoaderComponent } from '@shared/components/skeleton-loader/skeleton-loader.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';

@Component({
  selector: 'app-migration-guide-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    GlassCardComponent,
    GlassInputComponent,
    GlassButtonComponent,
    IconComponent,
    SkeletonLoaderComponent,
    CodeViewerComponent
  ],
  templateUrl: './migration-guide-demo.component.html',
  styleUrls: ['./migration-guide-demo.component.scss']
})
export class MigrationGuideDemoComponent {
  demoValue = '';

  inputCode = `<!-- Angular Glass Input -->
<app-glass-input
  label="Employee Name"
  placeholder="Enter name"
  [icon]="'person'"
  [(ngModel)]="name">
</app-glass-input>`;

  buttonCode = `<!-- Angular Glass Buttons -->
<div class="flex gap-3">
  <app-glass-button variant="primary" icon="save">
    Save Changes
  </app-glass-button>
  
  <app-glass-button variant="secondary" icon="close">
    Cancel
  </app-glass-button>
</div>`;

  cardCode = `<!-- Glass Card Container -->
<app-glass-card padding="p-6" [animate]="true">
  <div class="relative z-10">
    <!-- Your content here -->
    <h4 class="font-bold mb-2">Glass Card</h4>
    <p>Content adapts to glass theme...</p>
  </div>
</app-glass-card>`;

  loadingCode = `<!-- Skeleton Loader -->
<!-- Shows skeleton while loading is true -->
<div *ngIf="loading; else content">
  <app-skeleton-loader type="text" [rows]="3"></app-skeleton-loader>
</div>

<ng-template #content>
  <!-- Actual content -->
</ng-template>`;
}

