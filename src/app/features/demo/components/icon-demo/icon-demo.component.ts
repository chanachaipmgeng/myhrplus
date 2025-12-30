import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-icon-demo',
  standalone: true,
  imports: [CommonModule, SharedModule, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './icon-demo.component.html',
  styleUrls: ['./icon-demo.component.scss']
})
export class IconDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'name',
      type: 'string',
      default: '-',
      description: 'Material Icon name',
      required: true
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: 'Icon size',
      required: false
    },
    {
      name: 'color',
      type: 'string',
      default: 'undefined',
      description: 'Icon color CSS class',
      required: false
    },
    {
      name: 'ariaLabel',
      type: 'string',
      default: 'undefined',
      description: 'Accessibility label',
      required: false
    }
  ];

  basicExample = `<app-icon name="home"></app-icon>
<app-icon name="settings"></app-icon>
<app-icon name="person"></app-icon>`;

  sizesExample = `<app-icon name="star" size="xs"></app-icon>
<app-icon name="star" size="sm"></app-icon>
<app-icon name="star" size="md"></app-icon>
<app-icon name="star" size="lg"></app-icon>
<app-icon name="star" size="xl"></app-icon>`;

  colorsExample = `<app-icon name="favorite" color="text-red-500"></app-icon>
<app-icon name="check_circle" color="text-green-500"></app-icon>
<app-icon name="warning" color="text-yellow-500"></app-icon>
<app-icon name="info" color="text-blue-500"></app-icon>`;

  commonIcons = [
    'home', 'settings', 'person', 'search', 'notifications',
    'favorite', 'share', 'delete', 'edit', 'add',
    'check_circle', 'cancel', 'arrow_back', 'arrow_forward',
    'menu', 'close', 'more_vert', 'download', 'upload'
  ];
}
