import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-spinner-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, SpinnerComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './spinner-demo.component.html',
  styleUrls: ['./spinner-demo.component.scss']
})
export class SpinnerDemoComponent {
  props: PropDefinition[] = [
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
      default: "'text-primary-600'",
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

  basicExample = `<app-spinner></app-spinner>`;

  sizesExample = `<app-spinner size="sm"></app-spinner>
<app-spinner size="md"></app-spinner>
<app-spinner size="lg"></app-spinner>`;

  withMessageExample = `<app-spinner message="กำลังโหลดข้อมูล..."></app-spinner>`;

  fullScreenExample = `<app-spinner [fullScreen]="true" message="กำลังโหลด..."></app-spinner>`;

  colorsExample = `<app-spinner color="text-blue-600"></app-spinner>
<app-spinner color="text-green-600"></app-spinner>
<app-spinner color="text-red-600"></app-spinner>`;
}
