import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-numeric-textbox-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './numeric-textbox-demo.component.html',
  styleUrls: ['./numeric-textbox-demo.component.scss']
})
export class NumericTextboxDemoComponent {
  basicValue: number | null = null;
  minMaxValue: number | null = null;
  stepValue: number | null = null;
  formatValue: number | null = null;
  currencyValue: number | null = null;
  percentageValue: number | null = null;

  min: number = 0;
  max: number = 100;
  step: number = 1;
  format: string = 'n2';
  decimals: number = 2;

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'number | null',
      default: 'null',
      description: 'Numeric value',
      required: false
    },
    {
      name: 'min',
      type: 'number',
      default: 'null',
      description: 'Minimum value',
      required: false
    },
    {
      name: 'max',
      type: 'number',
      default: 'null',
      description: 'Maximum value',
      required: false
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: 'Step increment/decrement',
      required: false
    },
    {
      name: 'format',
      type: 'string',
      default: "'n2'",
      description: 'Number format (n, n2, c, c2, p, p2)',
      required: false
    },
    {
      name: 'decimals',
      type: 'number',
      default: '2',
      description: 'Number of decimal places',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Enter number'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'enabled',
      type: 'boolean',
      default: 'true',
      description: 'Enable/disable the component',
      required: false
    },
    {
      name: 'readonly',
      type: 'boolean',
      default: 'false',
      description: 'Make the component readonly',
      required: false
    }
  ];

  basicExample = `<ejs-numerictextbox
  [(value)]="value"
  [placeholder]="'Enter number'">
</ejs-numerictextbox>`;

  minMaxExample = `<ejs-numerictextbox
  [(value)]="value"
  [min]="0"
  [max]="100"
  [placeholder]="'Enter number (0-100)'">
</ejs-numerictextbox>`;

  stepExample = `<ejs-numerictextbox
  [(value)]="value"
  [step]="5"
  [placeholder]="'Enter number (step: 5)'">
</ejs-numerictextbox>`;

  formatExample = `<ejs-numerictextbox
  [(value)]="value"
  [format]="'c2'"
  [placeholder]="'Enter currency'">
</ejs-numerictextbox>`;
}

