import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalModules: 9,
    activeUsers: 1247,
    totalEmployees: 3456,
    pendingTasks: 23,
    systemHealth: 98
  };

  // Chart Options
  moduleDistributionPieChartOption: EChartsOption = {};
  activityOverviewBarChartOption: EChartsOption = {};
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
    const itemsLabel = this.translate.instant('admin.dashboard.charts.items');
    
    // Module Distribution Pie Chart
    const moduleData = [
      { name: this.translate.instant('admin.dashboard.modules.employees'), value: 1247 },
      { name: this.translate.instant('admin.dashboard.modules.payroll'), value: 892 },
      { name: this.translate.instant('admin.dashboard.modules.time'), value: 1567 },
      { name: this.translate.instant('admin.dashboard.modules.training'), value: 456 },
      { name: this.translate.instant('admin.dashboard.modules.welfare'), value: 678 },
      { name: this.translate.instant('admin.dashboard.modules.recruit'), value: 234 },
      { name: this.translate.instant('admin.dashboard.modules.appraisal'), value: 567 },
      { name: this.translate.instant('admin.dashboard.modules.company'), value: 345 },
      { name: this.translate.instant('admin.dashboard.modules.settings'), value: 123 }
    ];

    this.moduleDistributionPieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} ${itemsLabel} (${params.percent}%)`;
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
        name: this.translate.instant('admin.dashboard.charts.moduleUsage'),
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
          formatter: '{b}\n{c}',
          color: this.getChartTextColor()
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        data: moduleData
      }]
    };

    // Activity Overview Bar Chart
    const activityData = {
      names: [
        this.translate.instant('admin.dashboard.modules.employees'),
        this.translate.instant('admin.dashboard.modules.payroll'),
        this.translate.instant('admin.dashboard.modules.time'),
        this.translate.instant('admin.dashboard.modules.training'),
        this.translate.instant('admin.dashboard.modules.welfare'),
        this.translate.instant('admin.dashboard.modules.recruit'),
        this.translate.instant('admin.dashboard.modules.appraisal'),
        this.translate.instant('admin.dashboard.modules.company'),
        this.translate.instant('admin.dashboard.modules.settings')
      ],
      values: [1247, 892, 1567, 456, 678, 234, 567, 345, 123]
    };

    this.activityOverviewBarChartOption = {
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
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: activityData.names,
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
        name: this.translate.instant('admin.dashboard.charts.itemCount'),
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
      series: [{
        name: this.translate.instant('admin.dashboard.charts.itemCount'),
        type: 'bar',
        data: activityData.values,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#667eea' },
              { offset: 0.5, color: '#764ba2' },
              { offset: 1, color: '#764ba2' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top'
        }
      }]
    };

    // User Activity Line Chart
    const userActivityData = {
      dates: [
        this.translate.instant('admin.dashboard.days.monday'),
        this.translate.instant('admin.dashboard.days.tuesday'),
        this.translate.instant('admin.dashboard.days.wednesday'),
        this.translate.instant('admin.dashboard.days.thursday'),
        this.translate.instant('admin.dashboard.days.friday'),
        this.translate.instant('admin.dashboard.days.saturday'),
        this.translate.instant('admin.dashboard.days.sunday')
      ],
      activeUsers: [1247, 1356, 1289, 1423, 1389, 987, 756],
      newUsers: [23, 45, 34, 56, 43, 12, 8]
    };

    this.userActivityLineChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        data: [
          this.translate.instant('admin.dashboard.charts.activeUsers'),
          this.translate.instant('admin.dashboard.charts.newUsers')
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
        data: userActivityData.dates,
        axisLabel: {
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
        name: this.translate.instant('admin.dashboard.charts.userCount'),
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
          name: this.translate.instant('admin.dashboard.charts.activeUsers'),
          type: 'line',
          smooth: true,
          data: userActivityData.activeUsers,
          itemStyle: {
            color: '#667eea'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(102, 126, 234, 0.3)' },
                { offset: 1, color: 'rgba(102, 126, 234, 0.1)' }
              ]
            }
          }
        },
        {
          name: this.translate.instant('admin.dashboard.charts.newUsers'),
          type: 'line',
          smooth: true,
          data: userActivityData.newUsers,
          itemStyle: {
            color: '#f093fb'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(240, 147, 251, 0.3)' },
                { offset: 1, color: 'rgba(240, 147, 251, 0.1)' }
              ]
            }
          }
        }
      ]
    };
  }
}

