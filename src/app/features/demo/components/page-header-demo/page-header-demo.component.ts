import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-page-header-demo',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    GlassCardComponent,
    GlassButtonComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './page-header-demo.component.html',
  styleUrls: ['./page-header-demo.component.scss']
})
export class PageHeaderDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'title',
      type: 'string',
      default: "''",
      description: 'Page title',
      required: true
    },
    {
      name: 'subtitle',
      type: 'string',
      default: 'undefined',
      description: 'Page subtitle',
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
      name: 'showBreadcrumbs',
      type: 'boolean',
      default: 'true',
      description: 'Show breadcrumbs',
      required: false
    },
    {
      name: 'actions',
      type: 'any[]',
      default: 'undefined',
      description: 'Array of action buttons',
      required: false
    }
  ];

  basicExample = `<app-page-header
  title="Page Title"
  subtitle="Page Subtitle"
  description="This is a page description">
</app-page-header>`;

  withActionsExample = `<app-page-header
  title="Page with Actions"
  [actions]="[
    { label: 'Save', onClick: () => save(), class: 'glass-button' },
    { label: 'Cancel', onClick: () => cancel() }
  ]">
</app-page-header>`;

  actions = [
    {
      label: 'Create',
      onClick: () => this.onCreate(),
      class: 'glass-button'
    },
    {
      label: 'Export',
      onClick: () => this.onExport()
    },
    {
      label: 'Settings',
      onClick: () => this.onSettings(),
      disabled: false
    }
  ];

  onCreate(): void {
    console.log('Create clicked');
  }

  onExport(): void {
    console.log('Export clicked');
  }

  onSettings(): void {
    console.log('Settings clicked');
  }
}

