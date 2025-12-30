import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { LoadingService } from '@core/services';

@Component({
  selector: 'app-loading-spinner-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, GlassButtonComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './loading-spinner-demo.component.html',
  styleUrls: ['./loading-spinner-demo.component.scss']
})
export class LoadingSpinnerDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'None',
      type: '-',
      default: '-',
      description: 'Loading Spinner component has no inputs. It uses LoadingService internally.',
      required: false
    }
  ];

  basicExample = `<app-loading-spinner></app-loading-spinner>`;

  serviceExample = `// In component.ts
import { LoadingService } from '@core/services';

constructor(private loadingService: LoadingService) {}

showLoading() {
  this.loadingService.show();
}

hideLoading() {
  this.loadingService.hide();
}`;

  constructor(private loadingService: LoadingService) {}

  showLoading(): void {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }
}
