import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedMenuAccordionComponent } from '@shared/components/nested-menu-accordion/nested-menu-accordion.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { NavigationChild } from '@core/constants';

@Component({
  selector: 'app-nested-menu-accordion-demo',
  standalone: true,
  imports: [CommonModule, NestedMenuAccordionComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './nested-menu-accordion-demo.component.html',
  styleUrls: ['./nested-menu-accordion-demo.component.scss']
})
export class NestedMenuAccordionDemoComponent {
  sampleMenuItems: NavigationChild[] = [
    {
      label: 'Dashboard',
      route: '/home',
      icon: 'dashboard',
      children: []
    },
    {
      label: 'Employee Management',
      icon: 'people',
      children: [
        {
          label: 'Employee List',
          route: '/employee/list',
          icon: 'list',
          children: []
        },
        {
          label: 'Employee Profile',
          route: '/employee/profile',
          icon: 'person',
          children: []
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'settings',
      children: [
        {
          label: 'General',
          route: '/settings/general',
          icon: 'tune',
          children: []
        },
        {
          label: 'Security',
          route: '/settings/security',
          icon: 'lock',
          children: []
        }
      ]
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'NavigationChild[]',
      default: '[]',
      description: 'Array of navigation items with nested children',
      required: true
    },
    {
      name: 'level',
      type: 'number',
      default: '1',
      description: 'Current nesting level (for styling)',
      required: false
    },
    {
      name: 'activeRoute',
      type: 'string',
      default: "''",
      description: 'Currently active route path',
      required: false
    }
  ];

  basicExample = `<app-nested-menu-accordion
  [items]="menuItems"
  [activeRoute]="currentRoute">
</app-nested-menu-accordion>`;

  dataExample = `// menuItems structure
const menuItems: NavigationChild[] = [
  {
    label: 'Dashboard',
    route: '/home',
    icon: 'dashboard',
    children: []
  },
  {
    label: 'Employee Management',
    icon: 'people',
    children: [
      {
        label: 'Employee List',
        route: '/employee/list',
        icon: 'list',
        children: []
      }
    ]
  }
];`;
}

