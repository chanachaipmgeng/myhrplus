import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-dashboard-layout-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './dashboard-layout-demo.component.html',
  styleUrls: ['./dashboard-layout-demo.component.scss']
})
export class DashboardLayoutDemoComponent {
  panels: any[] = [
    {
      id: 'panel0',
      sizeX: 1,
      sizeY: 1,
      row: 0,
      col: 0,
      header: '<div>Card 1</div>',
      content: '<div class="content">Content Area</div>'
    },
    {
      id: 'panel1',
      sizeX: 1,
      sizeY: 1,
      row: 0,
      col: 1,
      header: '<div>Card 2</div>',
      content: '<div class="content">Content Area</div>'
    },
    {
      id: 'panel2',
      sizeX: 1,
      sizeY: 1,
      row: 0,
      col: 2,
      header: '<div>Card 3</div>',
      content: '<div class="content">Content Area</div>'
    },
    {
      id: 'panel3',
      sizeX: 2,
      sizeY: 1,
      row: 1,
      col: 0,
      header: '<div>Card 4</div>',
      content: '<div class="content">Content Area</div>'
    },
    {
      id: 'panel4',
      sizeX: 1,
      sizeY: 1,
      row: 1,
      col: 2,
      header: '<div>Card 5</div>',
      content: '<div class="content">Content Area</div>'
    }
  ];

  cellSpacing: number[] = [10, 10];
  allowResizing: boolean = true;
  allowFloating: boolean = true;
  allowDragging: boolean = true;

  props: PropDefinition[] = [
    {
      name: 'panels',
      type: 'any[]',
      default: '[]',
      description: 'Dashboard panels configuration',
      required: true
    },
    {
      name: 'cellSpacing',
      type: 'number[]',
      default: '[10, 10]',
      description: 'Cell spacing [horizontal, vertical]',
      required: false
    },
    {
      name: 'allowResizing',
      type: 'boolean',
      default: 'true',
      description: 'Allow panel resizing',
      required: false
    },
    {
      name: 'allowFloating',
      type: 'boolean',
      default: 'true',
      description: 'Allow panel floating',
      required: false
    },
    {
      name: 'allowDragging',
      type: 'boolean',
      default: 'true',
      description: 'Allow panel dragging',
      required: false
    }
  ];

  basicExample = `<ejs-dashboardlayout
  [panels]="panels"
  [cellSpacing]="[10, 10]"
  [allowResizing]="true"
  [allowFloating]="true"
  [allowDragging]="true">
</ejs-dashboardlayout>`;

  panelConfigExample = `panels: any[] = [
  {
    id: 'panel0',
    sizeX: 1,
    sizeY: 1,
    row: 0,
    col: 0,
    header: '<div>Card 1</div>',
    content: '<div class="content">Content Area</div>'
  },
  {
    id: 'panel1',
    sizeX: 2,
    sizeY: 1,
    row: 0,
    col: 1,
    header: '<div>Card 2</div>',
    content: '<div class="content">Content Area</div>'
  }
];`;

  dragDropExample = `<ejs-dashboardlayout
  [panels]="panels"
  [allowDragging]="true"
  (drag)="onDrag($event)">
</ejs-dashboardlayout>`;

  resizeFloatingExample = `<ejs-dashboardlayout
  [panels]="panels"
  [allowResizing]="true"
  [allowFloating]="true"
  (resize)="onResize($event)">
</ejs-dashboardlayout>`;

  responsiveExample = `<div class="w-full overflow-x-auto">
  <div class="min-w-[600px]">
    <div class="h-[400px] md:h-[500px]">
      <ejs-dashboardlayout
        [panels]="panels"
        [allowResizing]="true"
        [allowDragging]="true">
      </ejs-dashboardlayout>
    </div>
  </div>
</div>`;

  onResize(args: any): void {
    console.log('Panel resized:', args);
  }
}

