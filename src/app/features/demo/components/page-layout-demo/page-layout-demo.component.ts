import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent, BreadcrumbItem, PageAction } from '../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-page-layout-demo',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './page-layout-demo.component.html',
  styleUrls: ['./page-layout-demo.component.scss']
})
export class PageLayoutDemoComponent {
  breadcrumb: BreadcrumbItem[] = [
    { label: 'หน้าแรก', link: '/' },
    { label: 'Demo', link: '/demo' },
    { label: 'Page Layout' }
  ];

  actions: PageAction[] = [
    {
      label: 'เพิ่มข้อมูล',
      icon: 'add',
      variant: 'primary',
      onClick: () => alert('Add clicked')
    },
    {
      label: 'ส่งออก',
      icon: 'download',
      variant: 'secondary',
      onClick: () => alert('Export clicked')
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'title',
      type: 'string',
      default: "''",
      description: 'Page title',
      required: false
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Page description',
      required: false
    },
    {
      name: 'icon',
      type: 'string',
      default: 'undefined',
      description: 'Page icon',
      required: false
    },
    {
      name: 'breadcrumb',
      type: 'BreadcrumbItem[]',
      default: 'undefined',
      description: 'Breadcrumb items',
      required: false
    },
    {
      name: 'actions',
      type: 'PageAction[]',
      default: 'undefined',
      description: 'Page action buttons',
      required: false
    },
    {
      name: 'showFooter',
      type: 'boolean',
      default: 'false',
      description: 'Show page footer',
      required: false
    }
  ];

  basicExample = `<app-page-layout
  title="Page Title"
  description="Page description">
  <p>Page content goes here</p>
</app-page-layout>`;

  withBreadcrumbExample = `<app-page-layout
  title="Page Title"
  [breadcrumb]="breadcrumb">
  <p>Content</p>
</app-page-layout>

// breadcrumb array
breadcrumb = [
  { label: 'Home', link: '/' },
  { label: 'Page' }
];`;

  withActionsExample = `<app-page-layout
  title="Page Title"
  [actions]="actions">
  <p>Content</p>
</app-page-layout>

// actions array
actions = [
  {
    label: 'Add',
    icon: 'add',
    variant: 'primary',
    onClick: () => {}
  }
];`;

  fullExample = `<app-page-layout
  title="Page Title"
  description="Page description"
  icon="dashboard"
  [breadcrumb]="breadcrumb"
  [actions]="actions"
  [showFooter]="true">
  <p>Page content</p>
</app-page-layout>`;
}
