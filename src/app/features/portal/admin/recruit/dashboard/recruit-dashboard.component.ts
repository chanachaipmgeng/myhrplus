import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-recruit-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './recruit-dashboard.component.html'
})
export class RecruitDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalPositions: 23,
    activeApplications: 456,
    interviews: 89,
    offers: 34,
    hired: 12
  };

  // Chart Options
  positionStatusPieChartOption: EChartsOption = {};
  applicationStatusBarChartOption: EChartsOption = {};
  recruitmentFunnelChartOption: EChartsOption = {};

  ngOnInit(): void {
    this.checkDarkMode();
    this.initializeCharts();
    this.setupThemeObserver();
    
    // Re-initialize charts when language changes
    this.translate.onLangChange.subscribe(() => {
      this.initializeCharts();
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupThemeObserver(): void {
    const html = document.documentElement;
    this.observer = new MutationObserver(() => {
      const wasDarkMode = this.isDarkMode;
      this.checkDarkMode();
      if (wasDarkMode !== this.isDarkMode) {
        this.initializeCharts();
      }
    });
    this.observer.observe(html, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
  }

  private checkDarkMode(): void {
    const html = document.documentElement;
    this.isDarkMode = html.getAttribute('data-theme') === 'dark' || 
                      html.classList.contains('dark') ||
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private getChartTextColor(): string {
    return this.isDarkMode ? '#e2e8f0' : '#1e293b';
  }

  private getChartBackgroundColor(): string {
    return this.isDarkMode ? 'transparent' : '#ffffff';
  }

  private getAxisLineColor(): string {
    return this.isDarkMode ? '#475569' : '#e2e8f0';
  }

  private getSplitLineColor(): string {
    return this.isDarkMode ? '#334155' : '#f1f5f9';
  }

  private initializeCharts(): void {
    const positionLabel = this.translate.instant('recruit.dashboard.charts.position');
    const personLabel = this.translate.instant('common.person');
    
    // Position Status Pie Chart
    const statusData = [
      { name: this.translate.instant('recruit.dashboard.status.open'), value: 12 },
      { name: this.translate.instant('recruit.dashboard.status.closed'), value: 8 },
      { name: this.translate.instant('recruit.dashboard.status.pending'), value: 3 }
    ];

    this.positionStatusPieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} ${positionLabel} (${params.percent}%)`;
        },
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
        textStyle: {
          fontSize: 12,
          color: this.getChartTextColor()
        }
      },
      series: [{
        name: this.translate.instant('recruit.dashboard.charts.positionStatus'),
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: this.isDarkMode ? '#1e293b' : '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: (params: any) => {
            return `${params.name}\n${params.value}`;
          },
          color: this.getChartTextColor()
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        data: statusData
      }]
    };

    // Application Status Bar Chart
    const applicationData = {
      positions: [
        this.translate.instant('recruit.dashboard.positions.positionA'),
        this.translate.instant('recruit.dashboard.positions.positionB'),
        this.translate.instant('recruit.dashboard.positions.positionC'),
        this.translate.instant('recruit.dashboard.positions.positionD'),
        this.translate.instant('recruit.dashboard.positions.positionE')
      ],
      applied: [234, 189, 156, 134, 98],
      interviewed: [89, 78, 56, 45, 34],
      offered: [34, 28, 23, 18, 12],
      hired: [12, 10, 8, 6, 4]
    };

    this.applicationStatusBarChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        data: [
          this.translate.instant('recruit.dashboard.charts.applied'),
          this.translate.instant('recruit.dashboard.charts.interviewed'),
          this.translate.instant('recruit.dashboard.charts.offered'),
          this.translate.instant('recruit.dashboard.charts.hired')
        ],
        textStyle: {
          color: this.getChartTextColor()
        },
        top: 10
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: applicationData.positions,
        axisLabel: {
          rotate: 45,
          interval: 0,
          fontSize: 11,
          color: this.getChartTextColor()
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        },
        axisTick: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        }
      },
      yAxis: {
        type: 'value',
        name: this.translate.instant('recruit.dashboard.charts.personCount'),
        nameTextStyle: {
          color: this.getChartTextColor()
        },
        axisLabel: {
          color: this.getChartTextColor()
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        },
        splitLine: {
          lineStyle: {
            color: this.getSplitLineColor()
          }
        }
      },
      series: [
        {
          name: this.translate.instant('recruit.dashboard.charts.applied'),
          type: 'bar',
          data: applicationData.applied,
          itemStyle: {
            color: '#4facfe'
          }
        },
        {
          name: this.translate.instant('recruit.dashboard.charts.interviewed'),
          type: 'bar',
          data: applicationData.interviewed,
          itemStyle: {
            color: '#fbbf24'
          }
        },
        {
          name: this.translate.instant('recruit.dashboard.charts.offered'),
          type: 'bar',
          data: applicationData.offered,
          itemStyle: {
            color: '#f093fb'
          }
        },
        {
          name: this.translate.instant('recruit.dashboard.charts.hired'),
          type: 'bar',
          data: applicationData.hired,
          itemStyle: {
            color: '#43e97b'
          }
        }
      ]
    };

    // Recruitment Funnel Chart
    const funnelData = {
      stages: [
        this.translate.instant('recruit.dashboard.charts.applied'),
        this.translate.instant('recruit.dashboard.charts.selected'),
        this.translate.instant('recruit.dashboard.charts.interviewed'),
        this.translate.instant('recruit.dashboard.charts.offered'),
        this.translate.instant('recruit.dashboard.charts.hired')
      ],
      values: [456, 234, 89, 34, 12]
    };

    this.recruitmentFunnelChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} ${personLabel}`;
        },
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      series: [{
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 456,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}: {c}',
          color: this.getChartTextColor()
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: this.getAxisLineColor()
          }
        },
        itemStyle: {
          borderColor: this.isDarkMode ? '#1e293b' : '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 16
          }
        },
        data: [
          { value: 456, name: this.translate.instant('recruit.dashboard.charts.applied') },
          { value: 234, name: this.translate.instant('recruit.dashboard.charts.selected') },
          { value: 89, name: this.translate.instant('recruit.dashboard.charts.interviewed') },
          { value: 34, name: this.translate.instant('recruit.dashboard.charts.offered') },
          { value: 12, name: this.translate.instant('recruit.dashboard.charts.hired') }
        ]
      }]
    };
  }
}


