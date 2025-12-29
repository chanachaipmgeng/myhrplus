export interface NestedMenuItem {
  text: string;
  id: string;
  iconCss?: string;
  route?: string;
  badge?: string;
  badgeColor?: string;
  child?: NestedMenuItem[];
}

export interface MainModule {
  id: string;
  name: string;
  iconCss: string;
  menuItems: NestedMenuItem[];
}

export const PREDEFINED_MODULES: MainModule[] = [
  {
    id: 'home',
    name: 'Home',
    iconCss: 'e-icons e-home',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'home-dashboard',
        iconCss: 'e-icons e-home',
        route: '/home'
      }
    ]
  },
  {
    id: 'company',
    name: 'Company Management',
    iconCss: 'e-icons e-briefcase',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'company-home',
        iconCss: 'e-icons e-home',
        route: '/company/home'
      }
    ]
  },
  {
    id: 'personal',
    name: 'Personal Management',
    iconCss: 'e-icons e-user',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'personal-home',
        iconCss: 'e-icons e-home',
        route: '/personal/home'
      }
    ]
  },
  {
    id: 'ta',
    name: 'Time Management',
    iconCss: 'e-icons e-clock',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'ta-home',
        iconCss: 'e-icons e-home',
        route: '/ta/home'
      }
    ]
  },
  {
    id: 'payroll',
    name: 'Payroll Management',
    iconCss: 'e-icons e-money',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'payroll-home',
        iconCss: 'e-icons e-home',
        route: '/payroll/home'
      }
    ]
  },
  {
    id: 'welfare',
    name: 'Welfare Management',
    iconCss: 'e-icons e-favorite',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'welfare-home',
        iconCss: 'e-icons e-home',
        route: '/welfare/home'
      }
    ]
  },
  {
    id: 'training',
    name: 'Training Management',
    iconCss: 'e-icons e-book',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'training-home',
        iconCss: 'e-icons e-home',
        route: '/training/home'
      }
    ]
  },
  {
    id: 'recruit',
    name: 'Recruit Management',
    iconCss: 'e-icons e-people',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'recruit-home',
        iconCss: 'e-icons e-home',
        route: '/recruit/home'
      }
    ]
  },
  {
    id: 'appraisal',
    name: 'Appraisal Management',
    iconCss: 'e-icons e-chart',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'appraisal-home',
        iconCss: 'e-icons e-home',
        route: '/appraisal/home'
      }
    ]
  },
  {
    id: 'setting',
    name: 'Setting Management',
    iconCss: 'e-icons e-settings',
    menuItems: [
      {
        text: 'หน้าแรก',
        id: 'setting-home',
        iconCss: 'e-icons e-home',
        route: '/setting/home'
      }
    ]
  }
];

export const MODULE_ROUTE_MAP: { [key: string]: string } = {
  'home': 'home',
  'workflow': 'workflow',
  'company': 'company',
  'personal': 'personal',
  'ta': 'ta',
  'time': 'ta',
  'payroll': 'payroll',
  'welfare': 'welfare',
  'training': 'training',
  'recruit': 'recruit',
  'appraisal': 'appraisal',
  'setting': 'setting',
  'settings': 'setting'
};

