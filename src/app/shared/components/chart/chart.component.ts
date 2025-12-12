import { Component, ChangeDetectionStrategy, input, output, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule, ChartComponent as SyncfusionChartComponent } from '@syncfusion/ej2-angular-charts';
import {
  ILoadedEventArgs,
  IPointEventArgs,
  IAnimationCompleteEventArgs,
  ITextRenderEventArgs,
  IAxisLabelRenderEventArgs,
  ITooltipRenderEventArgs,
  ILegendRenderEventArgs
} from '@syncfusion/ej2-angular-charts';

export interface ChartSeries {
  type?: string;
  dataSource?: any[];
  xName?: string;
  yName?: string;
  name?: string;
  marker?: any;
  fill?: string;
  width?: number;
  dashArray?: string;
  visible?: boolean;
  [key: string]: any;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  chart = viewChild<SyncfusionChartComponent>('chart');

  // Data Source
  dataSource = input<any[]>([]);

  // Series
  series = input<ChartSeries[]>([]);

  // Axes
  primaryXAxis = input<any>({ valueType: 'Category' });
  primaryYAxis = input<any>({ valueType: 'Double' });

  // Title
  title = input<string>('');
  titleStyle = input<any>({});

  // Legend
  legendSettings = input<any>({ visible: true, position: 'Top' });

  // Tooltip
  tooltip = input<any>({ enable: true });

  // Chart Area
  chartArea = input<any>({ border: { width: 0 } });

  // Margin
  margin = input<any>({});

  // Size
  height = input<string | number>('400px');
  width = input<string | number>('100%');

  // Theme
  theme = input<string>('Material');

  // Features
  enableAnimation = input<boolean>(true);
  enableRtl = input<boolean>(false);
  enableExport = input<boolean>(true);

  // Styling
  customClass = input<string>('');

  // Events
  loaded = output<ILoadedEventArgs>();
  pointClick = output<IPointEventArgs>();
  pointMove = output<IPointEventArgs>();
  animationComplete = output<IAnimationCompleteEventArgs>();
  textRender = output<ITextRenderEventArgs>();
  axisLabelRender = output<IAxisLabelRenderEventArgs>();
  tooltipRender = output<ITooltipRenderEventArgs>();
  legendRender = output<ILegendRenderEventArgs>();

  /**
   * Refresh chart
   */
  refresh(): void {
    this.chart()?.refresh();
  }

  /**
   * Export chart
   */
  export(type: 'PNG' | 'JPEG' | 'SVG' | 'PDF', fileName?: string): void {
    this.chart()?.export(type, fileName || 'chart');
  }

  /**
   * Print chart
   */
  print(): void {
    this.chart()?.print();
  }

  /**
   * Get chart instance
   */
  getChartInstance(): SyncfusionChartComponent | null {
    return this.chart() ?? null;
  }

  /**
   * Update data source
   * @deprecated Use input binding [dataSource] instead
   */
  updateDataSource(data: any[]): void {
    // Direct update to component for backward compatibility
    const chart = this.chart();
    if (chart) {
      chart.dataSource = data;
      chart.refresh();
    }
  }

  /**
   * Update series
   * @deprecated Use input binding [series] instead
   */
  updateSeries(series: ChartSeries[]): void {
    // Direct update to component for backward compatibility
    const chart = this.chart();
    if (chart) {
      chart.series = series as any;
      chart.refresh();
    }
  }

  // Event handlers forwarding
  onLoaded(args: ILoadedEventArgs): void {
    this.loaded.emit(args);
  }

  onPointClick(args: IPointEventArgs): void {
    this.pointClick.emit(args);
  }

  onPointMove(args: IPointEventArgs): void {
    this.pointMove.emit(args);
  }

  onAnimationComplete(args: IAnimationCompleteEventArgs): void {
    this.animationComplete.emit(args);
  }

  onTextRender(args: ITextRenderEventArgs): void {
    this.textRender.emit(args);
  }

  onAxisLabelRender(args: IAxisLabelRenderEventArgs): void {
    this.axisLabelRender.emit(args);
  }

  onTooltipRender(args: ITooltipRenderEventArgs): void {
    this.tooltipRender.emit(args);
  }

  onLegendRender(args: ILegendRenderEventArgs): void {
    this.legendRender.emit(args);
  }
}

