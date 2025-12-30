import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { StaggerDirective } from '@shared/directives/stagger.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CompanyService } from '../services/company.service';
import { AuthService, User, LayoutService, BreadcrumbItem } from '@core/services';

@Component({
  selector: 'app-company-dashboard',
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
  templateUrl: './company-dashboard.component.html'
})
export class CompanyDashboardComponent implements OnInit, OnDestroy {
  private service = inject(CompanyService);
  private translate = inject(TranslateService);
  private authService = inject(AuthService);
  private layoutService = inject(LayoutService);
  private observer?: MutationObserver;

  isDarkMode = false;
  currentUser: User | null = null;

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

  // Recent Activities
  recentActivities = [
    {
      title: 'อัพเดทข้อมูลสาขา: สำนักงานใหญ่',
      time: '1 ชั่วโมงที่แล้ว',
      icon: 'business'
    },
    {
      title: 'เพิ่มแผนกใหม่: แผนกการตลาด',
      time: '3 ชั่วโมงที่แล้ว',
      icon: 'add_business'
    },
    {
      title: 'อัพเดทตำแหน่งงาน: 15 ตำแหน่ง',
      time: '1 วันที่แล้ว',
      icon: 'work'
    },
    {
      title: 'เพิ่มสถานที่ทำงาน: โรงงาน A',
      time: '2 วันที่แล้ว',
      icon: 'location_on'
    }
  ];

  // Pending Tasks
  pendingTasks = [
    {
      title: 'รออนุมัติการเพิ่มแผนก',
      count: 3,
      icon: 'pending',
      route: '/company/human-resources'
    },
    {
      title: 'รออัพเดทข้อมูลสาขา',
      count: 5,
      icon: 'update',
      route: '/company/human-resources'
    },
    {
      title: 'รอตรวจสอบโครงสร้างองค์กร',
      count: 2,
      icon: 'verified',
      route: '/company/human-resources'
    }
  ];

  ngOnInit(): void {
    // Set breadcrumb items via LayoutService
    this.setBreadcrumbs();

    this.currentUser = this.authService.getCurrentUser();
    this.checkDarkMode();
    this.initializeCharts();
    this.loadDashboardData();
    this.setupThemeObserver();

    // Re-initialize charts and breadcrumbs when language changes
    this.translate.onLangChange.subscribe(() => {
      this.setBreadcrumbs();
      this.initializeCharts();
    });
  }

  private setBreadcrumbs(): void {
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: this.translate.instant('company.dashboard.breadcrumb.home'),
        route: '/home',
        icon: 'home'
      },
      {
        label: this.translate.instant('company.dashboard.breadcrumb.company'),
        route: '/company',
        icon: 'business'
      },
      {
        label: this.translate.instant('company.dashboard.breadcrumb.dashboard'),
        icon: 'dashboard'
      }
    ];
    this.layoutService.setBreadcrumbs(breadcrumbs);
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
    const currentLang = this.translate.currentLang || 'th';
    const isThai = currentLang === 'th';
    const personLabel = this.translate.instant('company.dashboard.charts.person');

    // Division Pie Chart
    const divisionData = [
      { name: this.translate.instant('company.dashboard.charts.division.sales'), value: 342 },
      { name: this.translate.instant('company.dashboard.charts.division.marketing'), value: 198 },
      { name: this.translate.instant('company.dashboard.charts.division.accounting'), value: 156 },
      { name: this.translate.instant('company.dashboard.charts.division.hr'), value: 89 },
      { name: this.translate.instant('company.dashboard.charts.division.it'), value: 124 },
      { name: this.translate.instant('company.dashboard.charts.division.production'), value: 278 },
      { name: this.translate.instant('company.dashboard.charts.division.management'), value: 60 }
    ];

    this.divisionPieChartOption = {
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
        data: divisionData
      }]
    };

    // Branch Bar Chart
    const branchData = {
      names: [
        this.translate.instant('company.dashboard.charts.branch.headOffice'),
        this.translate.instant('company.dashboard.charts.branch.bangkok'),
        this.translate.instant('company.dashboard.charts.branch.chiangMai'),
        this.translate.instant('company.dashboard.charts.branch.khonKaen'),
        this.translate.instant('company.dashboard.charts.branch.hatYai'),
        this.translate.instant('company.dashboard.charts.branch.chiangRai'),
        this.translate.instant('company.dashboard.charts.branch.nakhonRatchasima'),
        this.translate.instant('company.dashboard.charts.branch.ubonRatchathani')
      ],
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
      names: [
        this.translate.instant('company.dashboard.charts.department.sales'),
        this.translate.instant('company.dashboard.charts.department.marketing'),
        this.translate.instant('company.dashboard.charts.department.accounting'),
        this.translate.instant('company.dashboard.charts.department.hr'),
        this.translate.instant('company.dashboard.charts.department.it'),
        this.translate.instant('company.dashboard.charts.department.production'),
        this.translate.instant('company.dashboard.charts.department.procurement'),
        this.translate.instant('company.dashboard.charts.department.warehouse')
      ],
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
      names: [
        this.translate.instant('company.dashboard.charts.position.cLevel'),
        this.translate.instant('company.dashboard.charts.position.manager'),
        this.translate.instant('company.dashboard.charts.position.assistantManager'),
        this.translate.instant('company.dashboard.charts.position.departmentHead'),
        this.translate.instant('company.dashboard.charts.position.supervisor'),
        this.translate.instant('company.dashboard.charts.position.employee')
      ],
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
        name: this.translate.instant('company.dashboard.charts.positionCount'),
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
        name: this.translate.instant('company.dashboard.charts.positionCount'),
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
        name: this.translate.instant('company.dashboard.charts.organization'),
        children: [
          {
            name: this.translate.instant('company.dashboard.charts.division.sales'),
            children: [
              { name: this.translate.instant('company.dashboard.charts.department.domesticSales'), value: 156 },
              { name: this.translate.instant('company.dashboard.charts.department.internationalSales'), value: 98 },
              { name: this.translate.instant('company.dashboard.charts.department.customerService'), value: 88 }
            ]
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.marketing'),
            children: [
              { name: this.translate.instant('company.dashboard.charts.department.marketing'), value: 98 },
              { name: this.translate.instant('company.dashboard.charts.department.publicRelations'), value: 56 },
              { name: this.translate.instant('company.dashboard.charts.department.marketResearch'), value: 44 }
            ]
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.accounting'),
            value: 156
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.hr'),
            value: 89
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.it'),
            value: 124
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.production'),
            value: 278
          },
          {
            name: this.translate.instant('company.dashboard.charts.division.management'),
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
          formatter: (params: any) => {
            return `${params.name}\n${params.value} ${personLabel}`;
          },
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
      names: [
        this.translate.instant('company.dashboard.charts.location.headOffice'),
        this.translate.instant('company.dashboard.charts.location.factoryA'),
        this.translate.instant('company.dashboard.charts.location.factoryB'),
        this.translate.instant('company.dashboard.charts.location.warehouse'),
        this.translate.instant('company.dashboard.charts.location.branch1'),
        this.translate.instant('company.dashboard.charts.location.branch2'),
        this.translate.instant('company.dashboard.charts.location.branch3')
      ],
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
        name: this.translate.instant('company.dashboard.charts.employeeCount'),
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
    const salesDiv = this.translate.instant('company.dashboard.charts.division.sales');
    const marketingDiv = this.translate.instant('company.dashboard.charts.division.marketing');
    const accountingDiv = this.translate.instant('company.dashboard.charts.division.accounting');
    const hrDiv = this.translate.instant('company.dashboard.charts.division.hr');
    const itDiv = this.translate.instant('company.dashboard.charts.division.it');
    const productionDiv = this.translate.instant('company.dashboard.charts.division.production');
    const salesDept = this.translate.instant('company.dashboard.charts.department.sales');
    const marketingDept = this.translate.instant('company.dashboard.charts.department.marketing');
    const accountingDept = this.translate.instant('company.dashboard.charts.department.accounting');
    const hrDept = this.translate.instant('company.dashboard.charts.department.hr');
    const itDept = this.translate.instant('company.dashboard.charts.department.it');
    const productionDept = this.translate.instant('company.dashboard.charts.department.production');

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
          { name: salesDiv },
          { name: marketingDiv },
          { name: accountingDiv },
          { name: hrDiv },
          { name: itDiv },
          { name: productionDiv },
          { name: salesDept },
          { name: marketingDept },
          { name: accountingDept },
          { name: hrDept },
          { name: itDept },
          { name: productionDept }
        ],
        links: [
          { source: 'CEO', target: 'COO', value: 10 },
          { source: 'CEO', target: 'CFO', value: 8 },
          { source: 'CEO', target: 'CTO', value: 6 },
          { source: 'COO', target: salesDiv, value: 5 },
          { source: 'COO', target: marketingDiv, value: 3 },
          { source: 'COO', target: productionDiv, value: 2 },
          { source: 'CFO', target: accountingDiv, value: 4 },
          { source: 'CTO', target: itDiv, value: 3 },
          { source: 'CTO', target: hrDiv, value: 2 },
          { source: salesDiv, target: salesDept, value: 5 },
          { source: marketingDiv, target: marketingDept, value: 3 },
          { source: accountingDiv, target: accountingDept, value: 4 },
          { source: hrDiv, target: hrDept, value: 2 },
          { source: itDiv, target: itDept, value: 3 },
          { source: productionDiv, target: productionDept, value: 2 }
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


