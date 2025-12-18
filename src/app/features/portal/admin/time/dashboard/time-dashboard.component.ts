import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-time-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './time-dashboard.component.html'
})
export class TimeDashboardComponent implements OnInit, OnDestroy {
  private observer?: MutationObserver;
  isDarkMode = false;

  // Statistics
  statistics = {
    totalAttendance: 3456,
    onTime: 3124,
    late: 234,
    absent: 98,
    overtime: 567
  };

  // Chart Options
  attendanceStatusPieChartOption: EChartsOption = {};
  dailyAttendanceBarChartOption: EChartsOption = {};
  attendanceTrendLineChartOption: EChartsOption = {};

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
    // Attendance Status Pie Chart
    const statusData = [
      { name: 'มาทันเวลา', value: 3124 },
      { name: 'มาสาย', value: 234 },
      { name: 'ขาดงาน', value: 98 }
    ];

    this.attendanceStatusPieChartOption = {
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
        name: 'สถานะการลงเวลา',
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
        data: statusData
      }]
    };

    // Daily Attendance Bar Chart
    const dailyData = {
      days: ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
      attendance: [3456, 3423, 3489, 3456, 3434, 1234, 567],
      onTime: [3124, 3100, 3156, 3124, 3110, 1100, 500],
      late: [234, 234, 245, 234, 234, 98, 45],
      absent: [98, 89, 88, 98, 90, 36, 22]
    };

    this.dailyAttendanceBarChartOption = {
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
        data: ['มาทันเวลา', 'มาสาย', 'ขาดงาน'],
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
        data: dailyData.days,
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
        name: 'จำนวนพนักงาน',
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
          name: 'มาทันเวลา',
          type: 'bar',
          stack: 'attendance',
          data: dailyData.onTime,
          itemStyle: {
            color: '#43e97b'
          }
        },
        {
          name: 'มาสาย',
          type: 'bar',
          stack: 'attendance',
          data: dailyData.late,
          itemStyle: {
            color: '#fbbf24'
          }
        },
        {
          name: 'ขาดงาน',
          type: 'bar',
          stack: 'attendance',
          data: dailyData.absent,
          itemStyle: {
            color: '#f87171'
          }
        }
      ]
    };

    // Attendance Trend Line Chart
    const trendData = {
      months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      attendanceRate: [95.2, 96.1, 95.8, 96.5, 96.2, 95.9, 96.8, 97.1, 96.5, 96.3, 96.7, 96.4],
      onTimeRate: [90.3, 91.2, 90.8, 91.5, 91.2, 90.9, 91.8, 92.1, 91.5, 91.3, 91.7, 91.4]
    };

    this.attendanceTrendLineChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let result = params[0].name + '<br/>';
          params.forEach((param: any) => {
            result += `${param.seriesName}: ${param.value}%<br/>`;
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
        data: ['อัตราการลงเวลา', 'อัตรามาทันเวลา'],
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
        name: 'อัตรา (%)',
        min: 85,
        max: 100,
        nameTextStyle: {
          color: this.getChartTextColor()
        },
        axisLabel: {
          color: this.getChartTextColor(),
          formatter: '{value}%'
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
          name: 'อัตราการลงเวลา',
          type: 'line',
          smooth: true,
          data: trendData.attendanceRate,
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
          name: 'อัตรามาทันเวลา',
          type: 'line',
          smooth: true,
          data: trendData.onTimeRate,
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
