import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-status-badge-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './status-badge-demo.component.html',
  styleUrls: ['./status-badge-demo.component.scss']
})
export class StatusBadgeDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'status',
      type: 'StatusType',
      default: "'pending'",
      description: 'Status type',
      required: false
    },
    {
      name: 'label',
      type: 'string',
      default: "''",
      description: 'Custom label text',
      required: false
    },
    {
      name: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Show status icon',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Badge size',
      required: false
    },
    {
      name: 'variant',
      type: "'filled' | 'outlined' | 'soft'",
      default: "'filled'",
      description: 'Badge variant style',
      required: false
    }
  ];

  basicExample = `<app-status-badge status="pending"></app-status-badge>
<app-status-badge status="approved"></app-status-badge>
<app-status-badge status="rejected"></app-status-badge>`;

  variantsExample = `<app-status-badge status="pending" variant="filled"></app-status-badge>
<app-status-badge status="pending" variant="outlined"></app-status-badge>
<app-status-badge status="pending" variant="soft"></app-status-badge>`;

  sizesExample = `<app-status-badge status="approved" size="sm"></app-status-badge>
<app-status-badge status="approved" size="md"></app-status-badge>
<app-status-badge status="approved" size="lg"></app-status-badge>`;

  customLabelExample = `<app-status-badge status="pending" label="รออนุมัติ"></app-status-badge>`;

  statusTypes = [
    'pending', 'approved', 'rejected', 'cancelled',
    'draft', 'submitted', 'reviewed', 'completed',
    'active', 'inactive', 'suspended',
    'success', 'error', 'warning', 'info'
  ] as const;
}
