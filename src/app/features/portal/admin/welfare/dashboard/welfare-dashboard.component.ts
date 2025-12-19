import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-welfare-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './welfare-dashboard.component.html'
})
export class WelfareDashboardComponent implements OnInit, OnDestroy {
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalBenefits: 12,
    activeRequisitions: 234,
    totalBudget: 5000000,
    usedBudget: 3200000,
    beneficiaries: 3456
  };

  // Chart Options
  benefitTypePieChartOption: EChartsOption = {};
  requisitionStatusBarChartOption: EChartsOption = {};
  budgetUsageLineChartOption: EChartsOption = {};

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
    // Benefit Type Pie Chart
    const benefitData = [
      { name: 'สวัสดิการสุขภาพ', value: 156 },
      { name: 'สวัสดิการการศึกษา', value: 98 },
      { name: 'สวัสดิการกีฬา', value: 78 },
      { name: 'สวัสดิการท่องเที่ยว', value: 134 },
      { name: 'สวัสดิการอื่นๆ', value: 67 }
    ];

    this.benefitTypePieChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} รายการ ({d}%)',
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
        name: 'ประเภทสวัสดิการ',
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
        data: benefitData
      }]
    };

    // Requisition Status Bar Chart
    const statusData = {
      benefits: ['สุขภาพ', 'การศึกษา', 'กีฬา', 'ท่องเที่ยว', 'อื่นๆ'],
      approved: [234, 189, 156, 134, 98],
      pending: [89, 78, 56, 45, 34],
      rejected: [12, 8, 5, 4, 3]
    };

    this.requisitionStatusBarChartOption = {
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
        data: ['อนุมัติ', 'รออนุมัติ', 'ปฏิเสธ'],
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
        data: statusData.benefits,
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
        name: 'จำนวนรายการ',
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
          name: 'อนุมัติ',
          type: 'bar',
          data: statusData.approved,
          itemStyle: {
            color: '#43e97b'
          }
        },
        {
          name: 'รออนุมัติ',
          type: 'bar',
          data: statusData.pending,
          itemStyle: {
            color: '#fbbf24'
          }
        },
        {
          name: 'ปฏิเสธ',
          type: 'bar',
          data: statusData.rejected,
          itemStyle: {
            color: '#f87171'
          }
        }
      ]
    };

    // Budget Usage Line Chart
    const budgetData = {
      months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      used: [250000, 280000, 300000, 320000, 310000, 330000, 350000, 340000, 360000, 340000, 350000, 320000],
      remaining: [4750000, 4470000, 4170000, 3850000, 3540000, 3210000, 2860000, 2520000, 2160000, 1820000, 1470000, 1150000]
    };

    this.budgetUsageLineChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let result = params[0].name + '<br/>';
          params.forEach((param: any) => {
            result += `${param.seriesName}: ฿${(param.value / 1000).toFixed(0)}K<br/>`;
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
        data: ['ใช้งบประมาณ', 'งบประมาณคงเหลือ'],
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
        data: budgetData.months,
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
        name: 'จำนวนเงิน (บาท)',
        nameTextStyle: {
          color: this.getChartTextColor()
        },
        axisLabel: {
          color: this.getChartTextColor(),
          formatter: (value: number) => {
            return (value / 1000).toFixed(0) + 'K';
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
          name: 'ใช้งบประมาณ',
          type: 'line',
          smooth: true,
          data: budgetData.used,
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
          name: 'งบประมาณคงเหลือ',
          type: 'line',
          smooth: true,
          data: budgetData.remaining,
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

