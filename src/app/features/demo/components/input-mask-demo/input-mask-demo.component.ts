import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-input-mask-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './input-mask-demo.component.html',
  styleUrls: ['./input-mask-demo.component.scss']
})
export class InputMaskDemoComponent {
  phoneValue: string = '';
  dateValue: string = '';
  creditCardValue: string = '';
  emailValue: string = '';
  customValue: string = '';

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'string',
      default: "''",
      description: 'Input value',
      required: false
    },
    {
      name: 'mask',
      type: 'string',
      default: "''",
      description: 'Mask pattern (e.g., "000-000-0000" for phone)',
      required: true
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Enter value'",
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'promptChar',
      type: 'string',
      default: "'_'",
      description: 'Character to show for empty positions',
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

  basicExample = `<ejs-maskedtextbox
  [(value)]="phoneValue"
  [mask]="'000-000-0000'"
  [placeholder]="'Enter phone number'"
  [promptChar]="'_'">
</ejs-maskedtextbox>`;

  dateExample = `<ejs-maskedtextbox
  [(value)]="dateValue"
  [mask]="'00/00/0000'"
  [placeholder]="'Enter date (DD/MM/YYYY)'">
</ejs-maskedtextbox>`;

  creditCardExample = `<ejs-maskedtextbox
  [(value)]="creditCardValue"
  [mask]="'0000-0000-0000-0000'"
  [placeholder]="'Enter credit card number'">
</ejs-maskedtextbox>`;
}

