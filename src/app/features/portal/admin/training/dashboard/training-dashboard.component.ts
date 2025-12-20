import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-training-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './training-dashboard.component.html'
})
export class TrainingDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalCourses: 45,
    activeTrainings: 12,
    completed: 234,
    inProgress: 89,
    certificates: 567
  };

  // Chart Options
  courseCategoryPieChartOption: EChartsOption = {};
  trainingStatusBarChartOption: EChartsOption = {};
  trainingTrendLineChartOption: EChartsOption = {};

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
    const courseLabel = this.translate.instant('training.dashboard.charts.course');
    
    // Course Category Pie Chart
    const categoryData = [
      { name: this.translate.instant('training.dashboard.categories.workSkills'), value: 156 },
      { name: this.translate.instant('training.dashboard.categories.selfDevelopment'), value: 98 },
      { name: this.translate.instant('training.dashboard.categories.management'), value: 78 },
      { name: this.translate.instant('training.dashboard.categories.technical'), value: 134 },
      { name: this.translate.instant('training.dashboard.categories.safety'), value: 67 },
      { name: this.translate.instant('training.dashboard.categories.others'), value: 45 }
    ];

    this.courseCategoryPieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} ${courseLabel} (${params.percent}%)`;
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
        name: this.translate.instant('training.dashboard.charts.courseCategory'),
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
        data: categoryData
      }]
    };

    // Training Status Bar Chart
    const statusData = {
      courses: [
        this.translate.instant('training.dashboard.courses.courseA'),
        this.translate.instant('training.dashboard.courses.courseB'),
        this.translate.instant('training.dashboard.courses.courseC'),
        this.translate.instant('training.dashboard.courses.courseD'),
        this.translate.instant('training.dashboard.courses.courseE'),
        this.translate.instant('training.dashboard.courses.courseF')
      ],
      completed: [234, 189, 156, 134, 98, 67],
      inProgress: [89, 78, 56, 45, 34, 23],
      registered: [123, 98, 87, 76, 65, 54]
    };

    this.trainingStatusBarChartOption = {
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
          this.translate.instant('training.dashboard.status.completed'),
          this.translate.instant('training.dashboard.status.inProgress'),
          this.translate.instant('training.dashboard.status.registered')
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
        data: statusData.courses,
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
        name: this.translate.instant('training.dashboard.charts.participantCount'),
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
          name: this.translate.instant('training.dashboard.status.completed'),
          type: 'bar',
          data: statusData.completed,
          itemStyle: {
            color: '#43e97b'
          }
        },
        {
          name: this.translate.instant('training.dashboard.status.inProgress'),
          type: 'bar',
          data: statusData.inProgress,
          itemStyle: {
            color: '#4facfe'
          }
        },
        {
          name: this.translate.instant('training.dashboard.status.registered'),
          type: 'bar',
          data: statusData.registered,
          itemStyle: {
            color: '#fbbf24'
          }
        }
      ]
    };

    // Training Trend Line Chart
    const trendData = {
      months: [
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
      ],
      participants: [456, 489, 523, 567, 534, 589, 612, 598, 634, 567, 589, 612],
      completions: [234, 256, 278, 289, 267, 298, 312, 301, 323, 289, 298, 312]
    };

    this.trainingTrendLineChartOption = {
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
          this.translate.instant('training.dashboard.charts.participants'),
          this.translate.instant('training.dashboard.charts.completions')
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
        data: trendData.months,
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
        name: this.translate.instant('training.dashboard.charts.personCount'),
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
          name: this.translate.instant('training.dashboard.charts.participants'),
          type: 'line',
          smooth: true,
          data: trendData.participants,
          itemStyle: {
            color: '#4facfe'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(79, 172, 254, 0.3)' },
                { offset: 1, color: 'rgba(79, 172, 254, 0.1)' }
              ]
            }
          }
        },
        {
          name: this.translate.instant('training.dashboard.charts.completions'),
          type: 'line',
          smooth: true,
          data: trendData.completions,
          itemStyle: {
            color: '#43e97b'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(67, 233, 123, 0.3)' },
                { offset: 1, color: 'rgba(67, 233, 123, 0.1)' }
              ]
            }
          }
        }
      ]
    };
  }
}


