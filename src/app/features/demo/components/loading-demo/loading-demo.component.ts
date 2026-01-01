import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
// SkeletonLoaderComponent is imported via SharedModule (not standalone)
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { LoadingService } from '@core/services';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-loading-demo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, // Includes SkeletonLoaderComponent (non-standalone)
    LoadingComponent,
    LoadingSpinnerComponent,
    SpinnerComponent,
    GlassCardComponent,
    GlassButtonComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './loading-demo.component.html',
  styleUrls: ['./loading-demo.component.scss']
})
export class LoadingDemoComponent {
  showLoading: boolean = false;
  showLoadingWithMessage: boolean = false;
  loadingMessage: string = 'กำลังโหลดข้อมูล...';

  // LoadingComponent props
  loadingProps: PropDefinition[] = [
    {
      name: 'show',
      type: 'boolean',
      default: 'true',
      description: 'Control loading visibility',
      required: false
    },
    {
      name: 'message',
      type: 'string',
      default: "''",
      description: 'Loading message text',
      required: false
    },
    {
      name: 'containerClass',
      type: 'string',
      default: "'min-h-[200px]'",
      description: 'Container CSS classes',
      required: false
    }
  ];

  // LoadingSpinnerComponent props
  loadingSpinnerProps: PropDefinition[] = [
    {
      name: 'None',
      type: '-',
      default: '-',
      description: 'Loading Spinner component has no inputs. It uses LoadingService internally.',
      required: false
    }
  ];

  // SpinnerComponent props
  spinnerProps: PropDefinition[] = [
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Spinner size',
      required: false
    },
    {
      name: 'color',
      type: 'string',
      default: "'text-primary'",
      description: 'Spinner color CSS class',
      required: false
    },
    {
      name: 'message',
      type: 'string',
      default: 'undefined',
      description: 'Loading message text',
      required: false
    },
    {
      name: 'fullScreen',
      type: 'boolean',
      default: 'false',
      description: 'Show as full screen overlay',
      required: false
    }
  ];

  // SkeletonLoaderComponent props
  skeletonLoaderProps: PropDefinition[] = [
    {
      name: 'type',
      type: "'text' | 'card' | 'table' | 'list' | 'avatar' | 'custom'",
      default: "'text'",
      description: 'Skeleton type',
      required: false
    },
    {
      name: 'rows',
      type: 'number',
      default: '3',
      description: 'Number of rows (for text/list types)',
      required: false
    },
    {
      name: 'columns',
      type: 'number',
      default: '3',
      description: 'Number of columns (for table type)',
      required: false
    },
    {
      name: 'showAvatar',
      type: 'boolean',
      default: 'false',
      description: 'Show avatar skeleton',
      required: false
    },
    {
      name: 'showTitle',
      type: 'boolean',
      default: 'true',
      description: 'Show title skeleton',
      required: false
    },
    {
      name: 'animation',
      type: "'pulse' | 'wave' | 'none'",
      default: "'pulse'",
      description: 'Animation type',
      required: false
    }
  ];

  // LoadingComponent examples
  loadingBasicExample = `<app-loading [show]="isLoading"></app-loading>`;

  loadingWithMessageExample = `<app-loading
  [show]="isLoading"
  message="กำลังโหลดข้อมูล...">
</app-loading>`;

  loadingConditionalExample = `// In component.ts
isLoading = false;

loadData() {
  this.isLoading = true;
  this.dataService.getData().subscribe({
    next: (data) => {
      this.data = data;
      this.isLoading = false;
    },
    error: () => {
      this.isLoading = false;
    }
  });
}

// In template
<app-loading [show]="isLoading" message="Loading data..."></app-loading>`;

  // LoadingSpinnerComponent examples
  loadingSpinnerBasicExample = `<app-loading-spinner></app-loading-spinner>`;

  loadingSpinnerServiceExample = `// In component.ts
import { LoadingService } from '@core/services';

constructor(private loadingService: LoadingService) {}

showLoading() {
  this.loadingService.show();
}

hideLoading() {
  this.loadingService.hide();
}

// In app.component.html or layout component
<app-loading-spinner></app-loading-spinner>`;

  // SpinnerComponent examples
  spinnerBasicExample = `<app-spinner></app-spinner>`;

  spinnerSizesExample = `<app-spinner size="sm"></app-spinner>
<app-spinner size="md"></app-spinner>
<app-spinner size="lg"></app-spinner>`;

  spinnerWithMessageExample = `<app-spinner message="กำลังโหลดข้อมูล..."></app-spinner>`;

  spinnerFullScreenExample = `<app-spinner [fullScreen]="true" message="กำลังโหลด..."></app-spinner>`;

  // SkeletonLoaderComponent examples
  skeletonLoaderBasicExample = `<app-skeleton-loader></app-skeleton-loader>`;

  skeletonLoaderTypesExample = `<app-skeleton-loader type="text"></app-skeleton-loader>
<app-skeleton-loader type="card"></app-skeleton-loader>
<app-skeleton-loader type="list"></app-skeleton-loader>
<app-skeleton-loader type="table" [rows]="5" [columns]="4"></app-skeleton-loader>`;

  skeletonLoaderUsageExample = `@if (isLoading) {
  <app-skeleton-loader type="table" [rows]="10" [columns]="columns.length"></app-skeleton-loader>
} @else {
  <app-data-grid [dataSource]="data" [columns]="columns"></app-data-grid>
}`;

  constructor(private loadingService: LoadingService) {}

  showLoadingDemo(): void {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }

  showLoadingWithMessageDemo(): void {
    this.showLoadingWithMessage = true;
    setTimeout(() => {
      this.showLoadingWithMessage = false;
    }, 3000);
  }

  showGlobalLoading(): void {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }
}
