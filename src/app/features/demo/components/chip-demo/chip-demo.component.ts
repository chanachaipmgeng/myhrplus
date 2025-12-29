import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-chip-demo',
  standalone: true,
  imports: [CommonModule, ChipComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './chip-demo.component.html',
  styleUrls: ['./chip-demo.component.scss']
})
export class ChipDemoComponent {
  chips: string[] = ['Angular', 'TypeScript', 'Tailwind CSS'];
  removableChips: string[] = ['React', 'Vue', 'Svelte'];

  props: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Chip label text',
      required: true
    },
    {
      name: 'variant',
      type: 'ChipVariant',
      default: "'default'",
      description: 'Chip variant (default, primary, success, warning, danger, info)',
      required: false
    },
    {
      name: 'size',
      type: 'ChipSize',
      default: "'md'",
      description: 'Chip size (sm, md, lg)',
      required: false
    },
    {
      name: 'removable',
      type: 'boolean',
      default: 'false',
      description: 'Show remove button',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable chip interaction',
      required: false
    },
    {
      name: 'icon',
      type: 'string',
      default: "''",
      description: 'Icon name to display',
      required: false
    },
    {
      name: 'avatar',
      type: 'string',
      default: "''",
      description: 'Avatar image URL',
      required: false
    }
  ];

  basicExample = `<app-chip label="Angular"></app-chip>
<app-chip label="TypeScript" variant="primary"></app-chip>
<app-chip label="Success" variant="success"></app-chip>`;

  variantsExample = `<app-chip label="Default" variant="default"></app-chip>
<app-chip label="Primary" variant="primary"></app-chip>
<app-chip label="Success" variant="success"></app-chip>
<app-chip label="Warning" variant="warning"></app-chip>
<app-chip label="Danger" variant="danger"></app-chip>
<app-chip label="Info" variant="info"></app-chip>`;

  sizesExample = `<app-chip label="Small" size="sm"></app-chip>
<app-chip label="Medium" size="md"></app-chip>
<app-chip label="Large" size="lg"></app-chip>`;

  removableExample = `<app-chip
  label="Removable"
  [removable]="true"
  (removed)="onRemove($event)">
</app-chip>`;

  usageExample = `// In component.ts
chips: string[] = ['Angular', 'TypeScript'];

onRemove(chip: string): void {
  this.chips = this.chips.filter(c => c !== chip);
}`;

  onRemove(chip: string): void {
    this.removableChips = this.removableChips.filter(c => c !== chip);
  }
}

