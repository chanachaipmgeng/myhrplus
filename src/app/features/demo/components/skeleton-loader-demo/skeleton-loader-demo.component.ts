import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-skeleton-loader-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './skeleton-loader-demo.component.html',
  styleUrls: ['./skeleton-loader-demo.component.scss']
})
export class SkeletonLoaderDemoComponent {
  props: PropDefinition[] = [
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
    },
    {
      name: 'width',
      type: 'string',
      default: "'100%'",
      description: 'Skeleton width',
      required: false
    },
    {
      name: 'height',
      type: 'string',
      default: "''",
      description: 'Skeleton height',
      required: false
    }
  ];

  basicExample = `<app-skeleton-loader></app-skeleton-loader>`;

  typesExample = `<app-skeleton-loader type="text"></app-skeleton-loader>
<app-skeleton-loader type="card"></app-skeleton-loader>
<app-skeleton-loader type="list"></app-skeleton-loader>`;

  customExample = `<app-skeleton-loader
  type="text"
  [rows]="5"
  [showAvatar]="true"
  animation="wave">
</app-skeleton-loader>`;
}
