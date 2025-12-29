import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-divider-demo',
  standalone: true,
  imports: [CommonModule, DividerComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './divider-demo.component.html',
  styleUrls: ['./divider-demo.component.scss']
})
export class DividerDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: 'Divider orientation',
      required: false
    },
    {
      name: 'text',
      type: 'string',
      default: "''",
      description: 'Optional text label (horizontal only)',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'strong' | 'weak'",
      default: "'default'",
      description: 'Divider variant',
      required: false
    }
  ];

  basicExample = `<app-divider></app-divider>`;

  variantsExample = `<app-divider variant="weak"></app-divider>
<app-divider variant="default"></app-divider>
<app-divider variant="strong"></app-divider>`;

  textExample = `<app-divider text="OR"></app-divider>
<app-divider text="Section Title"></app-divider>`;

  verticalExample = `<div class="flex items-center">
  <span>Left</span>
  <app-divider orientation="vertical"></app-divider>
  <span>Right</span>
</div>`;

  usageExample = `<!-- Horizontal divider -->
<app-divider></app-divider>

<!-- With text -->
<app-divider text="OR"></app-divider>

<!-- Vertical divider -->
<div class="flex">
  <span>Left</span>
  <app-divider orientation="vertical"></app-divider>
  <span>Right</span>
</div>`;
}

