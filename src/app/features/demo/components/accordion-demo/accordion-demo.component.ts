import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, AccordionPanel } from '@shared/components/accordion/accordion.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [CommonModule, AccordionComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.scss']
})
export class AccordionDemoComponent {
  singlePanels: AccordionPanel[] = [
    {
      title: 'What is Angular?',
      content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      icon: 'help'
    },
    {
      title: 'What is TypeScript?',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      icon: 'code'
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
      icon: 'palette'
    }
  ];

  multiplePanels: AccordionPanel[] = [
    {
      title: 'Panel 1',
      content: 'Content for panel 1. Multiple panels can be expanded at the same time.',
      expanded: true
    },
    {
      title: 'Panel 2',
      content: 'Content for panel 2. This panel can be expanded along with other panels.',
      expanded: false
    },
    {
      title: 'Panel 3',
      content: 'Content for panel 3. All panels can be expanded simultaneously.',
      expanded: false
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'panels',
      type: 'AccordionPanel[]',
      default: '[]',
      description: 'Array of accordion panels',
      required: true
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Allow multiple panels to be expanded at once',
      required: false
    },
    {
      name: 'showIcons',
      type: 'boolean',
      default: 'true',
      description: 'Show icons in panel headers',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'bordered'",
      default: "'default'",
      description: 'Accordion variant',
      required: false
    }
  ];

  basicExample = `<app-accordion [panels]="panels"></app-accordion>`;

  dataExample = `// In component.ts
panels: AccordionPanel[] = [
  {
    title: 'Panel 1',
    content: 'Content for panel 1',
    icon: 'info',
    expanded: false
  },
  {
    title: 'Panel 2',
    content: 'Content for panel 2',
    expanded: true
  }
];`;

  multipleExample = `<app-accordion
  [panels]="panels"
  [multiple]="true">
</app-accordion>`;

  usageExample = `// In component.ts
panels: AccordionPanel[] = [
  {
    title: 'FAQ Item',
    content: 'Answer to the question',
    icon: 'help',
    expanded: false
  }
];

onPanelChange(event: { index: number; expanded: boolean }): void {
  console.log('Panel', event.index, 'is', event.expanded ? 'expanded' : 'collapsed');
}`;

  onPanelChange(event: { index: number; expanded: boolean }): void {
    console.log('Panel', event.index, 'is', event.expanded ? 'expanded' : 'collapsed');
  }
}

