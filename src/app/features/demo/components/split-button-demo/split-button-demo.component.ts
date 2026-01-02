import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-split-button-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './split-button-demo.component.html',
  styleUrls: ['./split-button-demo.component.scss']
})
export class SplitButtonDemoComponent {
  items: any[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
  ];

  props: PropDefinition[] = [
    {
      name: 'content',
      type: 'string',
      default: "''",
      description: 'Button text',
      required: false
    },
    {
      name: 'iconCss',
      type: 'string',
      default: "''",
      description: 'Icon CSS class',
      required: false
    },
    {
      name: 'items',
      type: 'any[]',
      default: '[]',
      description: 'Dropdown menu items',
      required: false
    },
    {
      name: 'enabled',
      type: 'boolean',
      default: 'true',
      description: 'Enable/disable the component',
      required: false
    }
  ];

  basicExample = `<ejs-splitbutton
  content="Split Button"
  [items]="items"
  (click)="onClick($event)">
</ejs-splitbutton>`;

  withIconExample = `<ejs-splitbutton
  content="Save"
  iconCss="e-icons e-save"
  [items]="items">
</ejs-splitbutton>`;

  onClick(args: any): void {
    console.log('Button clicked:', args);
  }

  onItemClick(args: any): void {
    console.log('Item clicked:', args.item.text);
  }
}

