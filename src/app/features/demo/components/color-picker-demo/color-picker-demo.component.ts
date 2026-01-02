import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-color-picker-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss']
})
export class ColorPickerDemoComponent {
  selectedColor: string = '#07399C';
  paletteColor: string = '#07399C';
  pickerColor: string = '#07399C';
  inlineColor: string = '#07399C';

  mode: 'Picker' | 'Palette' = 'Picker';
  showButtons: boolean = true;
  enableOpacity: boolean = false;
  modeSwitcher: boolean = true;

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'string',
      default: "'#07399C'",
      description: 'Selected color value (hex)',
      required: false
    },
    {
      name: 'mode',
      type: "'Picker' | 'Palette'",
      default: "'Picker'",
      description: 'Color picker mode',
      required: false
    },
    {
      name: 'showButtons',
      type: 'boolean',
      default: 'true',
      description: 'Show apply/cancel buttons',
      required: false
    },
    {
      name: 'enableOpacity',
      type: 'boolean',
      default: 'false',
      description: 'Enable opacity control',
      required: false
    },
    {
      name: 'modeSwitcher',
      type: 'boolean',
      default: 'true',
      description: 'Show mode switcher (Picker/Palette)',
      required: false
    },
    {
      name: 'inline',
      type: 'boolean',
      default: 'false',
      description: 'Display as inline picker',
      required: false
    }
  ];

  basicExample = `<ejs-colorpicker
  [(value)]="selectedColor"
  [mode]="'Picker'"
  [showButtons]="true">
</ejs-colorpicker>`;

  paletteExample = `<ejs-colorpicker
  [(value)]="selectedColor"
  [mode]="'Palette'"
  [showButtons]="true">
</ejs-colorpicker>`;

  inlineExample = `<ejs-colorpicker
  [(value)]="selectedColor"
  [inline]="true"
  [mode]="'Picker'">
</ejs-colorpicker>`;

  onColorChange(args: any): void {
    console.log('Color changed:', args.value);
  }
}

