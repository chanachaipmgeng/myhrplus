import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-context-menu-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './context-menu-demo.component.html',
  styleUrls: ['./context-menu-demo.component.scss']
})
export class ContextMenuDemoComponent {
  menuItems: any[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' },
    { separator: true },
    { text: 'Delete', iconCss: 'e-icons e-delete' },
    { text: 'Rename', iconCss: 'e-icons e-rename' }
  ];

  target: string = '#context-target';

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'any[]',
      default: '[]',
      description: 'Context menu items',
      required: true
    },
    {
      name: 'target',
      type: 'string',
      default: "''",
      description: 'Target element selector',
      required: false
    },
    {
      name: 'showOn',
      type: 'string',
      default: "'contextmenu'",
      description: 'Event to show menu (contextmenu, click, etc.)',
      required: false
    }
  ];

  basicExample = `<ejs-contextmenu
  [items]="menuItems"
  [target]="'#context-target'">
</ejs-contextmenu>

<div id="context-target" class="p-4 border">
  Right-click here to show context menu
</div>`;

  onItemClick(args: any): void {
    console.log('Menu item clicked:', args.item.text);
  }
}

