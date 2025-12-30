import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { TimelineComponent, TimelineItem } from '@shared/components/timeline/timeline.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-timeline-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, TimelineComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './timeline-demo.component.html',
  styleUrls: ['./timeline-demo.component.scss']
})
export class TimelineDemoComponent {
  timelineItems: TimelineItem[] = [
    {
      title: 'สร้างบัญชี',
      description: 'บัญชีถูกสร้างเรียบร้อยแล้ว',
      date: new Date('2024-01-15'),
      icon: 'account_circle',
      status: 'success'
    },
    {
      title: 'ยืนยันอีเมล',
      description: 'อีเมลได้รับการยืนยันแล้ว',
      date: new Date('2024-01-16'),
      icon: 'email',
      status: 'success'
    },
    {
      title: 'อัปเดตโปรไฟล์',
      description: 'กำลังรอการอัปเดต',
      date: new Date('2024-01-17'),
      icon: 'edit',
      status: 'warning'
    },
    {
      title: 'เสร็จสมบูรณ์',
      description: 'กระบวนการเสร็จสมบูรณ์',
      date: new Date('2024-01-18'),
      icon: 'check_circle',
      status: 'success'
    }
  ];

  props: PropDefinition[] = [
    {
      name: 'items',
      type: 'TimelineItem[]',
      default: '[]',
      description: 'Array of timeline items',
      required: true
    },
    {
      name: 'orientation',
      type: "'vertical' | 'horizontal'",
      default: "'vertical'",
      description: 'Timeline orientation',
      required: false
    },
    {
      name: 'showDates',
      type: 'boolean',
      default: 'true',
      description: 'Show dates',
      required: false
    },
    {
      name: 'showIcons',
      type: 'boolean',
      default: 'true',
      description: 'Show icons',
      required: false
    },
    {
      name: 'alternate',
      type: 'boolean',
      default: 'false',
      description: 'Alternate item positions',
      required: false
    }
  ];

  basicExample = `<app-timeline [items]="timelineItems"></app-timeline>`;

  horizontalExample = `<app-timeline
  [items]="timelineItems"
  orientation="horizontal">
</app-timeline>`;

  itemsExample = `timelineItems: TimelineItem[] = [
  {
    title: 'Event 1',
    description: 'Description',
    date: new Date('2024-01-15'),
    icon: 'event',
    status: 'success'
  }
];`;
}
