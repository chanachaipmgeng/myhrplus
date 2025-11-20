import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextualHelpComponent } from '../../../../shared/components/contextual-help/contextual-help.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-contextual-help-demo',
  standalone: true,
  imports: [
    CommonModule,
    ContextualHelpComponent,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './contextual-help-demo.component.html',
  styleUrls: ['./contextual-help-demo.component.scss']
})
export class ContextualHelpDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'text',
      type: 'string',
      default: 'undefined',
      description: 'Help text to display',
      required: false
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Tooltip title text',
      required: false
    },
    {
      name: 'icon',
      type: 'string',
      default: "'help_outline'",
      description: 'Material icon name',
      required: false
    },
    {
      name: 'position',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: "'top'",
      description: 'Tooltip position',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'inline' | 'icon-only'",
      default: "'default'",
      description: 'Display variant',
      required: false
    },
    {
      name: 'showOnHover',
      type: 'boolean',
      default: 'true',
      description: 'Show tooltip on hover',
      required: false
    }
  ];

  basicExample = `<app-contextual-help
  text="Need help?"
  title="This is a helpful tooltip"
  icon="help_outline"
  position="top"
  variant="default">
</app-contextual-help>`;

  inlineExample = `<app-contextual-help
  text="Inline help text"
  title="More information"
  variant="inline">
</app-contextual-help>`;

  iconOnlyExample = `<app-contextual-help
  title="Click for help"
  variant="icon-only"
  [showOnHover]="false">
</app-contextual-help>`;
}

