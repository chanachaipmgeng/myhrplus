import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-settings-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './settings-dashboard.component.html'
})
export class SettingsDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalUsers: 1250,
    activeUsers: 892,
    systemAccess: 45,
    emailReminders: 12,
    systemHealth: 98
  };

  // Chart Options
  userDistributionPieChartOption: EChartsOption = {};
  systemAccessBarChartOption: EChartsOption = {};
  userActivityLineChartOption: EChartsOption = {};

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
    // User Distribution Pie Chart
    const userData = [
      { name: this.translate.instant('settings.dashboard.userTypes.regular'), value: 850 },
      { name: this.translate.instant('settings.dashboard.userTypes.admin'), value: 45 },
      { name: this.translate.instant('settings.dashboard.userTypes.senior'), value: 120 },
      { name: this.translate.instant('settings.dashboard.userTypes.middle'), value: 235 }
    ];

    this.userDistributionPieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} (${params.percent}%)`;
        },
        backgroundColor: this.isDarkMode ? '#1e293b' : '#ffffff',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      series: [
        {
          name: this.translate.instant('settings.dashboard.charts.userDistribution'),
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: this.isDarkMode ? '#0f172a' : '#ffffff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: (params: any) => {
              return `${params.name}: ${params.value}`;
            },
            color: this.getChartTextColor()
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
              color: this.getChartTextColor()
            }
          },
          data: userData
        }
      ]
    };

    // System Access Bar Chart
    const accessCategories = [
      this.translate.instant('settings.dashboard.categories.userManagement'),
      this.translate.instant('settings.dashboard.categories.systemAccess'),
      this.translate.instant('settings.dashboard.categories.emailReminder'),
      this.translate.instant('settings.dashboard.categories.options'),
      this.translate.instant('settings.dashboard.categories.excelReport'),
      this.translate.instant('settings.dashboard.categories.masterData')
    ];
    const accessData = [20, 15, 12, 8, 5, 3];

    this.systemAccessBarChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: this.isDarkMode ? '#1e293b' : '#ffffff',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: accessCategories,
        axisLabel: {
          color: this.getChartTextColor(),
          rotate: 15
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        }
      },
      yAxis: {
        type: 'value',
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
          name: this.translate.instant('settings.dashboard.charts.screenCount'),
          type: 'bar',
          data: accessData,
          itemStyle: {
            color: new (window as any).echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#6366f1' },
              { offset: 1, color: '#8b5cf6' }
            ])
          },
          label: {
            show: true,
            position: 'top',
            color: this.getChartTextColor()
          }
        }
      ]
    };

    // User Activity Line Chart
    const months = [
      this.translate.instant('common.months.jan'),
      this.translate.instant('common.months.feb'),
      this.translate.instant('common.months.mar'),
      this.translate.instant('common.months.apr'),
      this.translate.instant('common.months.may'),
      this.translate.instant('common.months.jun'),
      this.translate.instant('common.months.jul'),
      this.translate.instant('common.months.aug'),
      this.translate.instant('common.months.sep'),
      this.translate.instant('common.months.oct'),
      this.translate.instant('common.months.nov'),
      this.translate.instant('common.months.dec')
    ];
    const activeUsers = [750, 820, 780, 890, 920, 880, 950, 920, 890, 910, 892, 900];
    const newUsers = [45, 52, 38, 55, 48, 42, 60, 45, 50, 48, 52, 48];

    this.userActivityLineChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        backgroundColor: this.isDarkMode ? '#1e293b' : '#ffffff',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        data: [
          this.translate.instant('settings.dashboard.charts.activeUsers'),
          this.translate.instant('settings.dashboard.charts.newUsers')
        ],
        textStyle: {
          color: this.getChartTextColor()
        },
        top: 10
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: months,
        axisLabel: {
          color: this.getChartTextColor()
        },
        axisLine: {
          lineStyle: {
            color: this.getAxisLineColor()
          }
        }
      },
      yAxis: {
        type: 'value',
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
          name: this.translate.instant('settings.dashboard.charts.activeUsers'),
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: activeUsers,
          itemStyle: {
            color: '#6366f1'
          },
          areaStyle: {
            color: new (window as any).echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(99, 102, 241, 0.3)' },
              { offset: 1, color: 'rgba(99, 102, 241, 0.1)' }
            ])
          }
        },
        {
          name: this.translate.instant('settings.dashboard.charts.newUsers'),
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: newUsers,
          itemStyle: {
            color: '#8b5cf6'
          },
          areaStyle: {
            color: new (window as any).echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(139, 92, 246, 0.3)' },
              { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
            ])
          }
        }
      ]
    };
  }
}


