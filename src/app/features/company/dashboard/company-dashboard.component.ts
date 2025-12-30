import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { GlassSwitchComponent } from '@shared/components/glass-switch/glass-switch.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SharedModule } from '@shared/shared.module';
import { StaggerDirective } from '@shared/directives/stagger.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CompanyService } from '../services/company.service';
import { AuthService, User, LayoutService, BreadcrumbItem, DashboardPreferencesService } from '@core/services';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    PageHeaderComponent,
    GlassCardComponent,
    GlassButtonComponent,
    GlassSwitchComponent,
    IconComponent,
    SharedModule,
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
  private dashboardPreferences = inject(DashboardPreferencesService);
  private router = inject(Router);
  private observer?: MutationObserver;

  isDarkMode = false;
  currentUser: User | null = null;
  readonly DASHBOARD_ID = 'company-dashboard';

  // Dashboard Customization
  showCustomizationMenu = false;
  dashboardSections = [
    { id: 'statistics', label: 'company.dashboard.sections.statistics', visible: true },
    { id: 'quickActions', label: 'company.dashboard.sections.quickActions', visible: true },
    { id: 'charts', label: 'company.dashboard.sections.charts', visible: true },
    { id: 'recentActivities', label: 'company.dashboard.sections.recentActivities', visible: true },
    { id: 'pendingTasks', label: 'company.dashboard.sections.pendingTasks', visible: true }
  ];

  // Statistics with trend data
  statistics = {
    branches: {
      value: 12,
      change: 2,
      route: '/company/human-resources/branch'
    },
    divisions: {
      value: 8,
      change: 1,
      route: '/company/human-resources/division'
    },
    departments: {
      value: 24,
      change: 3,
      route: '/company/human-resources/department'
    },
    positions: {
      value: 156,
      change: 15,
      route: '/company/human-resources'
    },
    locations: {
      value: 18,
      change: 2,
      route: '/company/human-resources/working-area'
    }
  };

  isLoading = false;

  // Date Range for Charts
  dateRange = {
    start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    end: new Date()
  };

  // Comparison Mode
  comparisonMode = false;
  comparisonPeriod: 'previous' | 'year-over-year' = 'previous';

  // Previous Period Data for Comparison
  previousPeriodStatistics = {
    branches: 10,
    divisions: 7,
    departments: 21,
    positions: 141,
    locations: 16
  };

  // Quick Actions
  quickActions = [
    {
      label: 'company.dashboard.quickActions.addBranch',
      icon: 'add_business',
      route: '/company/human-resources/branch',
      color: 'indigo'
    },
    {
      label: 'company.dashboard.quickActions.addDepartment',
      icon: 'add',
      route: '/company/human-resources/department',
      color: 'blue'
    },
    {
      label: 'company.dashboard.quickActions.viewReports',
      icon: 'assessment',
      route: '/company/reports',
      color: 'green'
    },
    {
      label: 'company.dashboard.quickActions.exportData',
      icon: 'download',
      action: 'export',
      color: 'purple'
    }
  ];

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
    this.loadDashboardPreferences();
    this.initializeCharts();
    this.loadDashboardData();
    this.setupThemeObserver();

    // Re-initialize charts and breadcrumbs when language changes
    this.translate.onLangChange.subscribe(() => {
      this.setBreadcrumbs();
      this.initializeCharts();
    });
  }

  /**
   * Load dashboard preferences from storage
   */
  private loadDashboardPreferences(): void {
    this.dashboardSections.forEach(section => {
      const isVisible = this.dashboardPreferences.isSectionVisible(this.DASHBOARD_ID, section.id);
      section.visible = isVisible;
    });
  }

  /**
   * Toggle section visibility
   */
  toggleSection(sectionId: string): void {
    const section = this.dashboardSections.find(s => s.id === sectionId);
    if (section) {
      const newVisibility = this.dashboardPreferences.toggleSection(this.DASHBOARD_ID, sectionId);
      section.visible = newVisibility;
    }
  }

  /**
   * Reset dashboard to default layout
   */
  resetDashboardLayout(): void {
    this.dashboardPreferences.resetPreferences(this.DASHBOARD_ID);
    this.dashboardSections.forEach(section => {
      section.visible = true;
    });
  }

  /**
   * Check if section is visible
   */
  isSectionVisible(sectionId: string): boolean {
    const section = this.dashboardSections.find(s => s.id === sectionId);
    return section ? section.visible : true;
  }

  /**
   * Toggle comparison mode
   */
  toggleComparisonMode(): void {
    this.comparisonMode = !this.comparisonMode;
    if (this.comparisonMode) {
      this.loadComparisonData();
      this.initializeCharts();
    }
  }

  /**
   * Load comparison data for previous period
   */
  loadComparisonData(): void {
    // In a real app, this would fetch data from API
    // For now, using mock data
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    if (this.comparisonPeriod === 'previous') {
      // Previous month data (mock)
      this.previousPeriodStatistics = {
        branches: this.statistics.branches.value - this.statistics.branches.change,
        divisions: this.statistics.divisions.value - this.statistics.divisions.change,
        departments: this.statistics.departments.value - this.statistics.departments.change,
        positions: this.statistics.positions.value - this.statistics.positions.change,
        locations: this.statistics.locations.value - this.statistics.locations.change
      };
    } else {
      // Year-over-year data (mock)
      this.previousPeriodStatistics = {
        branches: Math.round(this.statistics.branches.value * 0.85),
        divisions: Math.round(this.statistics.divisions.value * 0.88),
        departments: Math.round(this.statistics.departments.value * 0.90),
        positions: Math.round(this.statistics.positions.value * 0.92),
        locations: Math.round(this.statistics.locations.value * 0.89)
      };
    }
  }

  /**
   * Get comparison percentage
   */
  getComparisonPercentage(current: number, previous: number): number {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  }

  /**
   * Get comparison change indicator
   */
  getComparisonChange(current: number, previous: number): { value: number; isPositive: boolean } {
    const change = current - previous;
    return {
      value: Math.abs(change),
      isPositive: change >= 0
    };
  }

  /**
   * Navigate to route (for keyboard navigation)
   */
  navigateToRoute(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
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

  onDateRangeChange(range: {start: Date | null, end: Date | null}): void {
    if (range.start && range.end) {
      this.dateRange.start = range.start;
      this.dateRange.end = range.end;
      // Reload charts with new date range
      this.loadDashboardData();
    }
  }

  exportDashboard(): void {
    // Export dashboard data
    console.log('Exporting dashboard...');
    // TODO: Implement export functionality
  }

  exportCharts(format: 'pdf' | 'excel'): void {
    // Export charts
    console.log(`Exporting charts as ${format}...`);
    // TODO: Implement chart export functionality
  }

  exportChart(chartType: string, format: 'pdf' | 'excel'): void {
    // Export individual chart
    console.log(`Exporting ${chartType} chart as ${format}...`);
    // TODO: Implement individual chart export
  }

  /**
   * Filter activities
   */
  filterActivities(): void {
    // TODO: Implement filter functionality
    console.log('Filtering activities...');
  }

  /**
   * View all activities
   */
  viewAllActivities(): void {
    // TODO: Navigate to activities page
    console.log('Viewing all activities...');
  }

  /**
   * Filter approvals
   */
  filterApprovals(): void {
    // TODO: Implement filter functionality
    console.log('Filtering approvals...');
  }

  /**
   * View all approvals
   */
  viewAllApprovals(): void {
    // TODO: Navigate to approvals page
    console.log('Viewing all approvals...');
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

  initializeCharts(): void {
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
      values: [456, 234, 189, 156, 134, 78, 0, 0],
      previousValues: this.comparisonMode ? [420, 220, 175, 145, 125, 70, 0, 0] : undefined
    };

    this.branchBarChartOption = {
      backgroundColor: this.getChartBackgroundColor(),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
      series: this.comparisonMode && branchData.previousValues ? [
        {
          name: this.translate.instant('company.dashboard.comparison.current'),
          type: 'bar',
          data: branchData.values,
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
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
            position: 'top',
            color: this.getChartTextColor()
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(24, 141, 240, 0.5)'
            }
          }
        },
        {
          name: this.translate.instant('company.dashboard.comparison.previous'),
          type: 'bar',
          data: branchData.previousValues,
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#94a3b8' },
                { offset: 0.5, color: '#64748b' },
                { offset: 1, color: '#64748b' }
              ]
            },
            opacity: 0.7
          },
          label: {
            show: true,
            position: 'top',
            color: this.getChartTextColor()
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(148, 163, 184, 0.5)'
            }
          }
        }
      ] : [{
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
      }],
      legend: this.comparisonMode && branchData.previousValues ? {
        data: [
          this.translate.instant('company.dashboard.comparison.current'),
          this.translate.instant('company.dashboard.comparison.previous')
        ],
        top: 'top',
        textStyle: {
          color: this.getChartTextColor()
        }
      } : undefined
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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
        backgroundColor: this.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: this.isDarkMode ? '#475569' : '#e2e8f0',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: {
          color: this.getChartTextColor(),
          fontSize: 13
        },
        extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
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


