import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-employees-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './employees-dashboard.component.html'
})
export class EmployeesDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalEmployees: 3456,
    newHires: 45,
    terminations: 12,
    promotions: 23,
    transfers: 18
  };

  // Chart Options
  employeeStatusPieChartOption: EChartsOption = {};
  departmentDistributionBarChartOption: EChartsOption = {};
  employeeGrowthLineChartOption: EChartsOption = {};

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
    
    // Employee Status Pie Chart
    const statusData = [
      { name: this.translate.instant('employees.dashboard.status.active'), value: 3124 },
      { name: this.translate.instant('employees.dashboard.status.onLeave'), value: 156 },
      { name: this.translate.instant('employees.dashboard.status.sickLeave'), value: 89 },
      { name: this.translate.instant('employees.dashboard.status.resigned'), value: 12 },
      { name: this.translate.instant('employees.dashboard.status.suspended'), value: 75 }
    ];

    this.employeeStatusPieChartOption = {
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
        name: this.translate.instant('employees.dashboard.charts.employeeStatus'),
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
        data: statusData
      }]
    };

    // Department Distribution Bar Chart
    const departmentData = {
      names: [
        this.translate.instant('employees.dashboard.departments.sales'),
        this.translate.instant('employees.dashboard.departments.marketing'),
        this.translate.instant('employees.dashboard.departments.accounting'),
        this.translate.instant('employees.dashboard.departments.hr'),
        this.translate.instant('employees.dashboard.departments.it'),
        this.translate.instant('employees.dashboard.departments.production'),
        this.translate.instant('employees.dashboard.departments.procurement'),
        this.translate.instant('employees.dashboard.departments.warehouse')
      ],
      values: [456, 234, 189, 156, 134, 678, 98, 87]
    };

    this.departmentDistributionBarChartOption = {
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
        data: departmentData.names,
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
        name: this.translate.instant('employees.dashboard.charts.employeeCount'),
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
        name: this.translate.instant('employees.dashboard.charts.employeeCount'),
        type: 'bar',
        data: departmentData.values,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#4facfe' },
              { offset: 0.5, color: '#00f2fe' },
              { offset: 1, color: '#00f2fe' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top'
        }
      }]
    };

    // Employee Growth Line Chart
    const growthData = {
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
      employees: [3200, 3250, 3280, 3320, 3360, 3400, 3420, 3440, 3450, 3456, 3460, 3456],
      newHires: [45, 50, 30, 40, 40, 40, 20, 20, 10, 6, 4, 0]
    };

    this.employeeGrowthLineChartOption = {
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
          this.translate.instant('employees.dashboard.charts.totalEmployees'),
          this.translate.instant('employees.dashboard.charts.newHires')
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
        data: growthData.months,
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
          name: this.translate.instant('employees.dashboard.charts.employeeCount'),
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
          name: this.translate.instant('employees.dashboard.charts.newHires'),
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
          }
        }
      ],
      series: [
        {
          name: this.translate.instant('employees.dashboard.charts.totalEmployees'),
          type: 'line',
          smooth: true,
          data: growthData.employees,
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
          name: this.translate.instant('employees.dashboard.charts.newHires'),
          type: 'bar',
          yAxisIndex: 1,
          data: growthData.newHires,
          itemStyle: {
            color: '#43e97b'
          }
        }
      ]
    };
  }
}


