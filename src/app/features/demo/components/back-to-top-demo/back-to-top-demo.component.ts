import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-back-to-top-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent, BackToTopComponent],
  templateUrl: './back-to-top-demo.component.html',
  styleUrls: ['./back-to-top-demo.component.scss']
})
export class BackToTopDemoComponent {
  basicExample = `<app-back-to-top></app-back-to-top>`;

  usageNote = `The BackToTopComponent automatically shows when the user scrolls down more than 400px.
It provides a smooth scroll-to-top functionality with glassmorphism styling.`;

  props: PropDefinition[] = [
    {
      name: 'N/A',
      type: 'N/A',
      default: 'N/A',
      description: 'This component has no inputs or outputs. It automatically appears when user scrolls down more than 400px and provides smooth scroll-to-top functionality.',
      required: false
    }
  ];
}

