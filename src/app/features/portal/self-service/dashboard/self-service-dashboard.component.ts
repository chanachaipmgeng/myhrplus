import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-self-service-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './self-service-dashboard.component.html'
})
export class SelfServiceDashboardComponent implements OnInit, OnDestroy {
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    myRequests: 12,
    pendingApproval: 5,
    approved: 23,
    rejected: 2,
    myDocuments: 8
  };

  // Chart Options
  requestTypePieChartOption: EChartsOption = {};
  requestStatusBarChartOption: EChartsOption = {};
  activityTimelineLineChartOption: EChartsOption = {};

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
    // Request Type Pie Chart
    const requestData = [
      { name: 'ลาพักผ่อน', value: 5 },
      { name: 'ลาป่วย', value: 3 },
      { name: 'ขอเอกสาร', value: 2 },
      { name: 'แก้ไขเวลา', value: 2 }
    ];

    this.requestTypePieChartOption = {
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
        name: 'ประเภทคำขอ',
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
        data: requestData
      }]
    };

    // Request Status Bar Chart
    const statusData = {
      types: ['ลาพักผ่อน', 'ลาป่วย', 'ขอเอกสาร', 'แก้ไขเวลา', 'อื่นๆ'],
      pending: [2, 1, 1, 1, 0],
      approved: [3, 2, 1, 1, 0],
      rejected: [0, 0, 0, 0, 2]
    };

    this.requestStatusBarChartOption = {
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
        data: ['รออนุมัติ', 'อนุมัติ', 'ปฏิเสธ'],
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
        data: statusData.types,
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
          name: 'รออนุมัติ',
          type: 'bar',
          data: statusData.pending,
          itemStyle: {
            color: '#fbbf24'
          }
        },
        {
          name: 'อนุมัติ',
          type: 'bar',
          data: statusData.approved,
          itemStyle: {
            color: '#43e97b'
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

    // Activity Timeline Line Chart
    const activityData = {
      months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      requests: [5, 8, 6, 10, 7, 9, 12, 8, 10, 7, 9, 12],
      approvals: [4, 7, 5, 9, 6, 8, 11, 7, 9, 6, 8, 11]
    };

    this.activityTimelineLineChartOption = {
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
        data: ['คำขอ', 'อนุมัติ'],
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
        data: activityData.months,
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
          name: 'คำขอ',
          type: 'line',
          smooth: true,
          data: activityData.requests,
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
          name: 'อนุมัติ',
          type: 'line',
          smooth: true,
          data: activityData.approvals,
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


