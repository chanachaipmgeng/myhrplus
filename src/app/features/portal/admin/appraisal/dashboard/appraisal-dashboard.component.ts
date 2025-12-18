import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-appraisal-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './appraisal-dashboard.component.html'
})
export class AppraisalDashboardComponent implements OnInit, OnDestroy {
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
    // Appraisal Grade Pie Chart
    const gradeData = [
      { name: 'ดีเยี่ยม (5)', value: 456 },
      { name: 'ดีมาก (4)', value: 1234 },
      { name: 'ดี (3)', value: 987 },
      { name: 'พอใช้ (2)', value: 567 },
      { name: 'ต้องปรับปรุง (1)', value: 212 }
    ];

    this.appraisalGradePieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} คน ({d}%)',
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
        name: 'ระดับการประเมิน',
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
          formatter: '{b}\n{c} คน',
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
      departments: ['แผนกขาย', 'แผนกการตลาด', 'แผนกบัญชี', 'แผนก HR', 'แผนก IT', 'แผนกผลิต'],
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
        name: 'คะแนนเฉลี่ย',
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
        name: 'คะแนนเฉลี่ย',
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
      months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
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
        data: ['ประเมินเสร็จ', 'คะแนนเฉลี่ย'],
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
          name: 'จำนวนการประเมิน',
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
          name: 'คะแนนเฉลี่ย',
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
          name: 'ประเมินเสร็จ',
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
          name: 'คะแนนเฉลี่ย',
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
