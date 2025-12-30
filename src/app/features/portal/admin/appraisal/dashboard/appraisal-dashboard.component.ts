import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-appraisal-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    GlassCardComponent,
    IconComponent,
    StaggerDirective,
    NgxEchartsModule
  ],
  templateUrl: './appraisal-dashboard.component.html'
})
export class AppraisalDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalAppraisals: 3456,
    completed: 3124,
    inProgress: 234,
    pending: 98,
    averageScore: 4.2
  };

  // Chart Options
  appraisalGradePieChartOption: EChartsOption = {};
  performanceDistributionBarChartOption: EChartsOption = {};
  appraisalTrendLineChartOption: EChartsOption = {};

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
    const personLabel = this.translate.instant('common.person');
    
    // Appraisal Grade Pie Chart
    const gradeData = [
      { name: this.translate.instant('appraisal.dashboard.grades.excellent'), value: 456 },
      { name: this.translate.instant('appraisal.dashboard.grades.veryGood'), value: 1234 },
      { name: this.translate.instant('appraisal.dashboard.grades.good'), value: 987 },
      { name: this.translate.instant('appraisal.dashboard.grades.fair'), value: 567 },
      { name: this.translate.instant('appraisal.dashboard.grades.needsImprovement'), value: 212 }
    ];

    this.appraisalGradePieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>${params.name}: ${params.value} ${personLabel} (${params.percent}%)`;
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
        name: this.translate.instant('appraisal.dashboard.charts.appraisalGrade'),
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
            return `${params.name}\n${params.value} ${personLabel}`;
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
        data: gradeData
      }]
    };

    // Performance Distribution Bar Chart
    const performanceData = {
      departments: [
        this.translate.instant('appraisal.dashboard.departments.sales'),
        this.translate.instant('appraisal.dashboard.departments.marketing'),
        this.translate.instant('appraisal.dashboard.departments.accounting'),
        this.translate.instant('appraisal.dashboard.departments.hr'),
        this.translate.instant('appraisal.dashboard.departments.it'),
        this.translate.instant('appraisal.dashboard.departments.production')
      ],
      average: [4.5, 4.3, 4.2, 4.1, 4.4, 4.0]
    };

    this.performanceDistributionBarChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params: any) => {
          return `${params[0].name}<br/>${params[0].seriesName}: ${params[0].value}`;
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
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: performanceData.departments,
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
        name: this.translate.instant('appraisal.dashboard.charts.averageScore'),
        min: 0,
        max: 5,
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
        name: this.translate.instant('appraisal.dashboard.charts.averageScore'),
        type: 'bar',
        data: performanceData.average,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#f093fb' },
              { offset: 0.5, color: '#f5576c' },
              { offset: 1, color: '#f5576c' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}'
        }
      }]
    };

    // Appraisal Trend Line Chart
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
      completed: [234, 256, 278, 289, 267, 298, 312, 301, 323, 289, 298, 312],
      averageScore: [4.1, 4.2, 4.15, 4.25, 4.2, 4.3, 4.25, 4.3, 4.2, 4.25, 4.3, 4.2]
    };

    this.appraisalTrendLineChartOption = {
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
          this.translate.instant('appraisal.dashboard.charts.completed'),
          this.translate.instant('appraisal.dashboard.charts.averageScore')
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
      yAxis: [
        {
          type: 'value',
          name: this.translate.instant('appraisal.dashboard.charts.appraisalCount'),
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
        {
          type: 'value',
          name: this.translate.instant('appraisal.dashboard.charts.averageScore'),
          min: 3.5,
          max: 5,
          nameTextStyle: {
            color: this.getChartTextColor()
          },
          axisLabel: {
            color: this.getChartTextColor(),
            formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              color: this.getAxisLineColor()
            }
          }
        }
      ],
      series: [
        {
          name: this.translate.instant('appraisal.dashboard.charts.completed'),
          type: 'line',
          smooth: true,
          data: trendData.completed,
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
          name: this.translate.instant('appraisal.dashboard.charts.averageScore'),
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          data: trendData.averageScore,
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


