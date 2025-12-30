import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressiveDisclosureComponent } from '@shared/components/progressive-disclosure/progressive-disclosure.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-progressive-disclosure-demo',
  standalone: true,
  imports: [
    CommonModule,
    ProgressiveDisclosureComponent,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './progressive-disclosure-demo.component.html',
  styleUrls: ['./progressive-disclosure-demo.component.scss']
})
export class ProgressiveDisclosureDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'title',
      type: 'string',
      default: "''",
      description: 'Title text',
      required: false
    },
    {
      name: 'defaultExpanded',
      type: 'boolean',
      default: 'false',
      description: 'Initially expanded state',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'accordion' | 'card'",
      default: "'default'",
      description: 'Display variant',
      required: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show expand/collapse icon',
      required: false
    },
    {
      name: 'icon',
      type: 'string',
      default: "'expand_more'",
      description: 'Collapsed state icon',
      required: false
    },
    {
      name: 'iconExpanded',
      type: 'string',
      default: "'expand_less'",
      description: 'Expanded state icon',
      required: false
    }
  ];

  basicExample = `<app-progressive-disclosure
  title="Click to expand"
  [defaultExpanded]="false">
  <p>This is the hidden content that appears when expanded.</p>
</app-progressive-disclosure>`;

  accordionExample = `<app-progressive-disclosure
  title="Accordion Style"
  variant="accordion"
  [defaultExpanded]="true">
  <p>Accordion variant content.</p>
</app-progressive-disclosure>`;

  cardExample = `<app-progressive-disclosure
  title="Card Style"
  variant="card">
  <p>Card variant content.</p>
</app-progressive-disclosure>`;
}

