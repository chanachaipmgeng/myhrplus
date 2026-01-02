import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss']
})
export class SliderDemoComponent {
  basicValue: number = 30;
  minMaxValue: number = 30;
  stepValue: number = 30;
  rangeValue: number[] = [30, 70];
  verticalValue: number = 30;

  min: number = 0;
  max: number = 100;
  step: number = 1;
  showButtons: boolean = false;
  orientation: 'Horizontal' | 'Vertical' = 'Horizontal';

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'number | number[]',
      default: '30',
      description: 'Slider value (single or range)',
      required: false
    },
    {
      name: 'min',
      type: 'number',
      default: '0',
      description: 'Minimum value',
      required: false
    },
    {
      name: 'max',
      type: 'number',
      default: '100',
      description: 'Maximum value',
      required: false
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: 'Step increment',
      required: false
    },
    {
      name: 'showButtons',
      type: 'boolean',
      default: 'false',
      description: 'Show increment/decrement buttons',
      required: false
    },
    {
      name: 'orientation',
      type: "'Horizontal' | 'Vertical'",
      default: "'Horizontal'",
      description: 'Slider orientation',
      required: false
    },
    {
      name: 'type',
      type: "'Default' | 'MinRange' | 'Range'",
      default: "'Default'",
      description: 'Slider type',
      required: false
    },
    {
      name: 'ticks',
      type: 'object',
      default: 'null',
      description: 'Tick marks configuration',
      required: false
    }
  ];

  basicExample = `<ejs-slider
  [(value)]="value"
  [min]="0"
  [max]="100"
  [step]="1">
</ejs-slider>`;

  minMaxExample = `<ejs-slider
  [(value)]="value"
  [min]="0"
  [max]="100"
  [step]="1">
</ejs-slider>`;

  stepExample = `<ejs-slider
  [(value)]="value"
  [min]="0"
  [max]="100"
  [step]="10">
</ejs-slider>`;

  rangeExample = `<ejs-slider
  [(value)]="rangeValue"
  [type]="'Range'"
  [min]="0"
  [max]="100">
</ejs-slider>`;

  onValueChange(args: any): void {
    console.log('Value changed:', args.value);
  }
}

