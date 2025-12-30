import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-breadcrumbs-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, BreadcrumbsComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './breadcrumbs-demo.component.html',
  styleUrls: ['./breadcrumbs-demo.component.scss']
})
export class BreadcrumbsDemoComponent {
  breadcrumbItems = [
    { label: 'หน้าแรก', route: '/', icon: 'home' },
    { label: 'Demo', route: '/demo' },
    { label: 'Breadcrumbs' }
  ];

  breadcrumbWithIcons = [
    { label: 'หน้าแรก', route: '/', icon: 'home' },
    { label: 'ผู้ใช้', route: '/users', icon: 'people' },
    { label: 'รายละเอียด', route: '/users/123', icon: 'person' },
    { label: 'แก้ไข' }
  ];

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'BreadcrumbItem[]',
      default: '[]',
      description: 'Breadcrumb items array',
      required: false
    },
    {
      name: 'separator',
      type: 'string',
      default: "'/'",
      description: 'Breadcrumb separator',
      required: false
    },
    {
      name: 'showHome',
      type: 'boolean',
      default: 'true',
      description: 'Show home icon',
      required: false
    },
    {
      name: 'homeIcon',
      type: 'string',
      default: "'home'",
      description: 'Home icon name',
      required: false
    },
    {
      name: 'autoGenerate',
      type: 'boolean',
      default: 'false',
      description: 'Auto-generate from route',
      required: false
    },
    {
      name: 'maxItems',
      type: 'number',
      default: '5',
      description: 'Maximum breadcrumb items',
      required: false
    }
  ];

  basicExample = `<app-breadcrumbs [items]="breadcrumbItems"></app-breadcrumbs>`;

  withIconsExample = `<app-breadcrumbs [items]="breadcrumbWithIcons"></app-breadcrumbs>`;

  customSeparatorExample = `<app-breadcrumbs 
  [items]="breadcrumbItems"
  separator="›">
</app-breadcrumbs>`;

  autoGenerateExample = `<app-breadcrumbs [autoGenerate]="true"></app-breadcrumbs>`;
}
