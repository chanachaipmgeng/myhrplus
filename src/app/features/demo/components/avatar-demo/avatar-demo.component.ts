import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-avatar-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './avatar-demo.component.html',
  styleUrls: ['./avatar-demo.component.scss']
})
export class AvatarDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'src',
      type: 'string',
      default: "''",
      description: 'Image source URL',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      default: "''",
      description: 'Name for initials fallback',
      required: false
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: 'Avatar size',
      required: false
    },
    {
      name: 'status',
      type: "'online' | 'offline' | 'away' | 'busy' | ''",
      default: "''",
      description: 'Status indicator',
      required: false
    },
    {
      name: 'badge',
      type: 'number | string',
      default: 'undefined',
      description: 'Badge value or "dot"',
      required: false
    },
    {
      name: 'showStatus',
      type: 'boolean',
      default: 'true',
      description: 'Show status indicator',
      required: false
    },
    {
      name: 'showBadge',
      type: 'boolean',
      default: 'true',
      description: 'Show badge',
      required: false
    },
    {
      name: 'shape',
      type: "'circle' | 'square' | 'rounded'",
      default: "'circle'",
      description: 'Avatar shape',
      required: false
    }
  ];

  basicExample = `<app-avatar name="John Doe"></app-avatar>
<app-avatar name="Jane Smith"></app-avatar>`;

  sizesExample = `<app-avatar name="User" size="xs"></app-avatar>
<app-avatar name="User" size="sm"></app-avatar>
<app-avatar name="User" size="md"></app-avatar>
<app-avatar name="User" size="lg"></app-avatar>
<app-avatar name="User" size="xl"></app-avatar>`;

  statusExample = `<app-avatar name="User" status="online"></app-avatar>
<app-avatar name="User" status="offline"></app-avatar>
<app-avatar name="User" status="away"></app-avatar>
<app-avatar name="User" status="busy"></app-avatar>`;

  badgeExample = `<app-avatar name="User" [badge]="5"></app-avatar>
<app-avatar name="User" badge="dot"></app-avatar>
<app-avatar name="User" [badge]="99"></app-avatar>`;

  shapesExample = `<app-avatar name="User" shape="circle"></app-avatar>
<app-avatar name="User" shape="rounded"></app-avatar>
<app-avatar name="User" shape="square"></app-avatar>`;
}
