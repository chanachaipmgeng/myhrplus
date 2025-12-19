import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-payroll-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './payroll-dashboard.component.html'
})
export class PayrollDashboardComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalPayroll: 125000000,
    averageSalary: 36000,
    processed: 3456,
    pending: 23,
    bonuses: 15000000
  };

  // Chart Options
  payrollDistributionPieChartOption: EChartsOption = {};
  salaryRangeBarChartOption: EChartsOption = {};
  payrollTrendLineChartOption: EChartsOption = {};

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
    // Payroll Distribution Pie Chart
    const payrollData = [
      { name: this.translate.instant('payroll.dashboard.types.salary'), value: 110000000 },
      { name: this.translate.instant('payroll.dashboard.types.bonus'), value: 15000000 },
      { name: this.translate.instant('payroll.dashboard.types.overtime'), value: 8000000 },
      { name: this.translate.instant('payroll.dashboard.types.welfare'), value: 2000000 }
    ];

    this.payrollDistributionPieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const currencySymbol = this.translate.instant('common.currency');
          return `${params.seriesName}<br/>${params.name}: ${currencySymbol}${params.value.toLocaleString()} (${params.percent}%)`;
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
        name: this.translate.instant('payroll.dashboard.charts.payrollDistribution'),
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
          formatter: '{b}\n{d}%',
          color: this.getChartTextColor()
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        data: payrollData
      }]
    };

    // Salary Range Bar Chart
    const salaryData = {
      names: ['15,000-25,000', '25,001-35,000', '35,001-45,000', '45,001-55,000', '55,001-65,000', '65,001-75,000', '75,001+'],
      values: [456, 789, 1234, 567, 234, 123, 53]
    };

    this.salaryRangeBarChartOption = {
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
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: salaryData.names,
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
        name: this.translate.instant('payroll.dashboard.charts.employeeCount'),
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
        name: this.translate.instant('payroll.dashboard.charts.employeeCount'),
        type: 'bar',
        data: salaryData.values,
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
          position: 'top'
        }
      }]
    };

    // Payroll Trend Line Chart
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
      payroll: [118000000, 120000000, 122000000, 121000000, 123000000, 124000000, 125000000, 125500000, 125200000, 125000000, 125800000, 125000000],
      bonuses: [10000000, 12000000, 15000000, 14000000, 16000000, 15000000, 15000000, 18000000, 15000000, 15000000, 20000000, 15000000]
    };

    this.payrollTrendLineChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const currencySymbol = this.translate.instant('common.currency');
          let result = params[0].name + '<br/>';
          params.forEach((param: any) => {
            result += `${param.seriesName}: ${currencySymbol}${param.value.toLocaleString()}<br/>`;
          });
          return result;
        },
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      legend: {
        data: [
          this.translate.instant('payroll.dashboard.charts.totalPayroll'),
          this.translate.instant('payroll.dashboard.charts.bonus')
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
        name: this.translate.instant('payroll.dashboard.charts.amount'),
        nameTextStyle: {
          color: this.getChartTextColor()
        },
        axisLabel: {
          color: this.getChartTextColor(),
          formatter: (value: number) => {
            return (value / 1000000).toFixed(0) + 'M';
          }
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
          name: this.translate.instant('payroll.dashboard.charts.totalPayroll'),
          type: 'line',
          smooth: true,
          data: trendData.payroll,
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
        },
        {
          name: this.translate.instant('payroll.dashboard.charts.bonus'),
          type: 'line',
          smooth: true,
          data: trendData.bonuses,
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

