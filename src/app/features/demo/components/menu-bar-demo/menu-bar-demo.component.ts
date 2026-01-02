import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-menu-bar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './menu-bar-demo.component.html',
  styleUrls: ['./menu-bar-demo.component.scss']
})
export class MenuBarDemoComponent {
  menuItems: any[] = [
    {
      text: 'File',
      items: [
        { text: 'New', iconCss: 'e-icons e-file-new' },
        { text: 'Open', iconCss: 'e-icons e-folder-open' },
        { separator: true },
        { text: 'Save', iconCss: 'e-icons e-save' },
        { text: 'Save As', iconCss: 'e-icons e-save-as' },
        { separator: true },
        { text: 'Exit' }
      ]
    },
    {
      text: 'Edit',
      items: [
        { text: 'Cut', iconCss: 'e-icons e-cut' },
        { text: 'Copy', iconCss: 'e-icons e-copy' },
        { text: 'Paste', iconCss: 'e-icons e-paste' }
      ]
    },
    {
      text: 'View',
      items: [
        { text: 'Zoom In', iconCss: 'e-icons e-zoom-in' },
        { text: 'Zoom Out', iconCss: 'e-icons e-zoom-out' },
        { separator: true },
        { text: 'Full Screen' }
      ]
    },
    {
      text: 'Help',
      items: [
        { text: 'About' }
      ]
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'any[]',
      default: '[]',
      description: 'Menu items with nested structure',
      required: true
    },
    {
      name: 'orientation',
      type: "'Horizontal' | 'Vertical'",
      default: "'Horizontal'",
      description: 'Menu orientation',
      required: false
    },
    {
      name: 'showItemOnClick',
      type: 'boolean',
      default: 'true',
      description: 'Show submenu on click',
      required: false
    }
  ];

  basicExample = `<ejs-menu
  [items]="menuItems"
  (select)="onItemSelect($event)">
</ejs-menu>`;

  onItemSelect(args: any): void {
    console.log('Menu item selected:', args.item.text);
  }
}

