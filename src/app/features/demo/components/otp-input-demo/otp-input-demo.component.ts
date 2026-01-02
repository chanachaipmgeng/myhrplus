import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-otp-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './otp-input-demo.component.html',
  styleUrls: ['./otp-input-demo.component.scss']
})
export class OtpInputDemoComponent {
  otpValue: string = '';
  otp4Value: string = '';
  otp6Value: string = '';
  otp8Value: string = '';

  length: number = 6;
  separator: string = '-';
  showClearButton: boolean = true;
  enabled: boolean = true;
  readonly: boolean = false;

  props: PropDefinition[] = [
    {
      name: 'value',
      type: 'string',
      default: "''",
      description: 'OTP value',
      required: false
    },
    {
      name: 'length',
      type: 'number',
      default: '6',
      description: 'Number of OTP digits',
      required: false
    },
    {
      name: 'separator',
      type: 'string',
      default: "'-'",
      description: 'Separator between digits',
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

  basicExample = `<div
  ejs-otpinput
  [(value)]="otpValue"
  [length]="6"
  [separator]="'-'"
  (valueChange)="onOtpChange($event)">
</div>`;

  lengthExample = `<div
  ejs-otpinput
  [(value)]="otpValue"
  [length]="4"
  [separator]="''"
  (valueChange)="onOtpChange($event)">
</div>`;

  length8Example = `<div
  ejs-otpinput
  [(value)]="otpValue"
  [length]="8"
  [separator]="'-'"
  (valueChange)="onOtpChange($event)">
</div>`;

  onOtpChange(args: any): void {
    console.log('OTP changed:', args.value);
  }
}

