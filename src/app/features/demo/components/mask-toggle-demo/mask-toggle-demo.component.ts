import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskToggleComponent } from '@shared/components/mask-toggle/mask-toggle.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-mask-toggle-demo',
  standalone: true,
  imports: [
    CommonModule,
    MaskToggleComponent,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './mask-toggle-demo.component.html',
  styleUrls: ['./mask-toggle-demo.component.scss']
})
export class MaskToggleDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'string | null | undefined',
      default: "''",
      description: 'Value to mask/unmask',
      required: true
    },
    {
      name: 'fieldName',
      type: 'string',
      default: "''",
      description: 'Field name for masking rules',
      required: true
    }
  ];

  basicExample = `<app-mask-toggle
  [value]="'0812345678'"
  [fieldName]="'mobile'">
</app-mask-toggle>`;

  // Sample data
  mobile = '0812345678';
  email = 'user@example.com';
  idCard = '1234567890123';
  bankAccount = '1234567890';
}

