import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-splitter-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SyncfusionModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './splitter-demo.component.html',
  styleUrls: ['./splitter-demo.component.scss']
})
export class SplitterDemoComponent {
  height: string = '400px';
  width: string = '100%';
  orientation: 'Horizontal' | 'Vertical' = 'Horizontal';
  separatorSize: number = 4;

  props: PropDefinition[] = [
    {
      name: 'height',
      type: 'string',
      default: "'400px'",
      description: 'Height of the splitter',
      required: false
    },
    {
      name: 'width',
      type: 'string',
      default: "'100%'",
      description: 'Width of the splitter',
      required: false
    },
    {
      name: 'orientation',
      type: "'Horizontal' | 'Vertical'",
      default: "'Horizontal'",
      description: 'Splitter orientation',
      required: false
    },
    {
      name: 'separatorSize',
      type: 'number',
      default: '4',
      description: 'Size of the separator in pixels',
      required: false
    }
  ];

  basicExample = `<ejs-splitter
  [height]="'400px'"
  [width]="'100%'"
  [orientation]="'Horizontal'">
  <e-panes>
    <e-pane [size]="'30%'">
      <ng-template #content>
        <div>Left Pane</div>
      </ng-template>
    </e-pane>
    <e-pane [size]="'70%'">
      <ng-template #content>
        <div>Right Pane</div>
      </ng-template>
    </e-pane>
  </e-panes>
</ejs-splitter>`;

  verticalExample = `<ejs-splitter
  [height]="'400px'"
  [width]="'100%'"
  [orientation]="'Vertical'">
  <e-panes>
    <e-pane [size]="'30%'">
      <ng-template #content>
        <div>Top Pane</div>
      </ng-template>
    </e-pane>
    <e-pane [size]="'70%'">
      <ng-template #content>
        <div>Bottom Pane</div>
      </ng-template>
    </e-pane>
  </e-panes>
</ejs-splitter>`;
}

