import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    NgxEchartsModule
  ],
  templateUrl: './company-dashboard.component.html'
})
export class CompanyDashboardComponent implements OnInit, OnDestroy {
  private service = inject(CompanyService);
  private observer?: MutationObserver;
  
  isDarkMode = false;

  // Statistics
  statistics = {
    branches: 12,
    divisions: 8,
    departments: 24,
    positions: 156,
    locations: 18
  };

  // Chart Options
  divisionPieChartOption: EChartsOption = {};
  branchBarChartOption: EChartsOption = {};
  departmentBarChartOption: EChartsOption = {};
  positionBarChartOption: EChartsOption = {};
  orgTreeMapChartOption: EChartsOption = {};
  locationBarChartOption: EChartsOption = {};
  sankeyChartOption: EChartsOption = {};

  ngOnInit(): void {
    this.checkDarkMode();
    this.initializeCharts();
    this.loadDashboardData();
    this.setupThemeObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupThemeObserver(): void {
    // Watch for theme changes
    const html = document.documentElement;
    this.observer = new MutationObserver(() => {
      const wasDarkMode = this.isDarkMode;
      this.checkDarkMode();
      if (wasDarkMode !== this.isDarkMode) {
        // Theme changed, reinitialize charts
        this.initializeCharts();
      }
    });

    this.observer.observe(html, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
  }

  @HostListener('window:resize', [])
  private checkDarkMode(): void {
    // Check if dark mode is active via data-theme attribute or class
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
    // Division Pie Chart
    const divisionData = [
      { name: 'ฝ่ายขาย', value: 342 },
      { name: 'ฝ่ายการตลาด', value: 198 },
      { name: 'ฝ่ายบัญชี', value: 156 },
      { name: 'ฝ่ายทรัพยากรบุคคล', value: 89 },
      { name: 'ฝ่ายไอที', value: 124 },
      { name: 'ฝ่ายผลิต', value: 278 },
      { name: 'ฝ่ายบริหาร', value: 60 }
    ];

    this.divisionPieChartOption = {
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
        name: 'จำนวนพนักงาน',
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
        data: divisionData
      }]
    };

    // Branch Bar Chart
    const branchData = {
      names: ['สำนักงานใหญ่', 'สาขากรุงเทพ', 'สาขาเชียงใหม่', 'สาขาขอนแก่น', 'สาขาหาดใหญ่', 'สาขาเชียงราย', 'สาขานครราชสีมา', 'สาขาอุบลราชธานี'],
      values: [456, 234, 189, 156, 134, 78, 0, 0]
    };

    this.branchBarChartOption = {
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
        data: branchData.names,
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
      series: [{
        name: 'จำนวนพนักงาน',
        type: 'bar',
        data: branchData.values,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top'
        }
      }]
    };

    // Department Bar Chart
    const departmentData = {
      names: ['แผนกขาย', 'แผนกการตลาด', 'แผนกบัญชี', 'แผนก HR', 'แผนก IT', 'แผนกผลิต', 'แผนกจัดซื้อ', 'แผนกคลังสินค้า'],
      values: [156, 98, 78, 45, 62, 139, 34, 28]
    };

    this.departmentBarChartOption = {
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
      series: [{
        name: 'จำนวนพนักงาน',
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

    // Position Bar Chart
    const positionData = {
      names: ['C-Level', 'ผู้จัดการ', 'รองผู้จัดการ', 'หัวหน้าแผนก', 'หัวหน้างาน', 'พนักงาน'],
      values: [5, 45, 78, 156, 234, 678]
    };

    this.positionBarChartOption = {
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
        data: positionData.names,
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
        name: 'จำนวนตำแหน่ง',
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
        name: 'จำนวนตำแหน่ง',
        type: 'bar',
        data: positionData.values,
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

    // Organization Tree Map
    const orgTreeMapData = [
      {
        name: 'องค์กร',
        children: [
          {
            name: 'ฝ่ายขาย',
            children: [
              { name: 'แผนกขายในประเทศ', value: 156 },
              { name: 'แผนกขายต่างประเทศ', value: 98 },
              { name: 'แผนกบริการลูกค้า', value: 88 }
            ]
          },
          {
            name: 'ฝ่ายการตลาด',
            children: [
              { name: 'แผนกการตลาด', value: 98 },
              { name: 'แผนกประชาสัมพันธ์', value: 56 },
              { name: 'แผนกวิจัยตลาด', value: 44 }
            ]
          },
          {
            name: 'ฝ่ายบัญชี',
            value: 156
          },
          {
            name: 'ฝ่ายทรัพยากรบุคคล',
            value: 89
          },
          {
            name: 'ฝ่ายไอที',
            value: 124
          },
          {
            name: 'ฝ่ายผลิต',
            value: 278
          },
          {
            name: 'ฝ่ายบริหาร',
            value: 60
          }
        ]
      }
    ];

    this.orgTreeMapChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      series: [{
        type: 'treemap',
        data: orgTreeMapData,
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: true,
          itemStyle: {
            color: this.isDarkMode ? '#334155' : '#e2e8f0',
            textStyle: {
              color: this.getChartTextColor()
            }
          }
        },
        label: {
          show: true,
          formatter: '{b}\n{c} คน',
          color: this.getChartTextColor()
        },
        upperLabel: {
          show: true,
          height: 30,
          color: this.getChartTextColor()
        },
        itemStyle: {
          borderColor: this.isDarkMode ? '#1e293b' : '#fff',
          borderWidth: 2,
          gapWidth: 2
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: this.isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    // Location Bar Chart
    const locationData = {
      names: ['สำนักงานใหญ่', 'โรงงาน A', 'โรงงาน B', 'คลังสินค้า', 'สาขา 1', 'สาขา 2', 'สาขา 3'],
      values: [456, 234, 189, 156, 134, 78, 0]
    };

    this.locationBarChartOption = {
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
        data: locationData.names,
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
      series: [{
        name: 'จำนวนพนักงาน',
        type: 'bar',
        data: locationData.values,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#43e97b' },
              { offset: 0.5, color: '#38f9d7' },
              { offset: 1, color: '#38f9d7' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top'
        }
      }]
    };

    // Sankey Diagram - Organization Flow
    this.sankeyChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        textStyle: {
          color: this.getChartTextColor()
        }
      },
      series: [{
        type: 'sankey',
        data: [
          { name: 'CEO' },
          { name: 'COO' },
          { name: 'CFO' },
          { name: 'CTO' },
          { name: 'ฝ่ายขาย' },
          { name: 'ฝ่ายการตลาด' },
          { name: 'ฝ่ายบัญชี' },
          { name: 'ฝ่ายทรัพยากรบุคคล' },
          { name: 'ฝ่ายไอที' },
          { name: 'ฝ่ายผลิต' },
          { name: 'แผนกขาย' },
          { name: 'แผนกการตลาด' },
          { name: 'แผนกบัญชี' },
          { name: 'แผนก HR' },
          { name: 'แผนก IT' },
          { name: 'แผนกผลิต' }
        ],
        links: [
          { source: 'CEO', target: 'COO', value: 10 },
          { source: 'CEO', target: 'CFO', value: 8 },
          { source: 'CEO', target: 'CTO', value: 6 },
          { source: 'COO', target: 'ฝ่ายขาย', value: 5 },
          { source: 'COO', target: 'ฝ่ายการตลาด', value: 3 },
          { source: 'COO', target: 'ฝ่ายผลิต', value: 2 },
          { source: 'CFO', target: 'ฝ่ายบัญชี', value: 4 },
          { source: 'CTO', target: 'ฝ่ายไอที', value: 3 },
          { source: 'CTO', target: 'ฝ่ายทรัพยากรบุคคล', value: 2 },
          { source: 'ฝ่ายขาย', target: 'แผนกขาย', value: 5 },
          { source: 'ฝ่ายการตลาด', target: 'แผนกการตลาด', value: 3 },
          { source: 'ฝ่ายบัญชี', target: 'แผนกบัญชี', value: 4 },
          { source: 'ฝ่ายทรัพยากรบุคคล', target: 'แผนก HR', value: 2 },
          { source: 'ฝ่ายไอที', target: 'แผนก IT', value: 3 },
          { source: 'ฝ่ายผลิต', target: 'แผนกผลิต', value: 2 }
        ],
        emphasis: {
          focus: 'adjacency'
        },
        lineStyle: {
          color: 'gradient'
        }
      }]
    };
  }

  private loadDashboardData(): void {
    // TODO: Load real data from API
    // this.service.getDashboardStatistics().subscribe(data => {
    //   this.statistics = data;
    //   this.updateChartsWithRealData(data);
    // });
  }
}
