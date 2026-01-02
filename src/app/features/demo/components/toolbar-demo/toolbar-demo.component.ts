import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-toolbar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './toolbar-demo.component.html',
  styleUrls: ['./toolbar-demo.component.scss']
})
export class ToolbarDemoComponent {
  toolbarItems: any[] = [
    { text: 'Bold', tooltipText: 'Bold', prefixIcon: 'e-bold-icon' },
    { text: 'Italic', tooltipText: 'Italic', prefixIcon: 'e-italic-icon' },
    { text: 'Underline', tooltipText: 'Underline', prefixIcon: 'e-underline-icon' },
    { type: 'Separator' },
    { text: 'Align Left', tooltipText: 'Align Left', prefixIcon: 'e-align-left-icon' },
    { text: 'Align Center', tooltipText: 'Align Center', prefixIcon: 'e-align-center-icon' },
    { text: 'Align Right', tooltipText: 'Align Right', prefixIcon: 'e-align-right-icon' }
  ];

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'any[]',
      default: '[]',
      description: 'Toolbar items (buttons, separators, etc.)',
      required: true
    },
    {
      name: 'width',
      type: 'string',
      default: "'100%'",
      description: 'Toolbar width',
      required: false
    },
    {
      name: 'height',
      type: 'string',
      default: "'auto'",
      description: 'Toolbar height',
      required: false
    }
  ];

  basicExample = `<ejs-toolbar
  [items]="toolbarItems"
  (clicked)="onItemClick($event)">
</ejs-toolbar>`;

  onItemClick(args: any): void {
    console.log('Toolbar item clicked:', args.item.text);
  }
}

