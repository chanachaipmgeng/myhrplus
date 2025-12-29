import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-stagger-demo',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    GlassCardComponent,
    PageHeaderComponent,
    IconComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './stagger-demo.component.html',
  styleUrls: ['./stagger-demo.component.scss']
})
export class StaggerDemoComponent {
  // Sample data for demo
  items = [
    { id: 1, title: 'Item 1', description: 'Description for item 1', color: 'blue' },
    { id: 2, title: 'Item 2', description: 'Description for item 2', color: 'green' },
    { id: 3, title: 'Item 3', description: 'Description for item 3', color: 'purple' },
    { id: 4, title: 'Item 4', description: 'Description for item 4', color: 'orange' },
    { id: 5, title: 'Item 5', description: 'Description for item 5', color: 'pink' },
    { id: 6, title: 'Item 6', description: 'Description for item 6', color: 'teal' }
  ];

  // Props definition
  props: PropDefinition[] = [
    {
      name: 'appStagger',
      type: 'number',
      default: '0',
      description: 'Index of the item in the list (required). Pass the index from *ngFor or @for loop.',
      required: true
    },
    {
      name: 'staggerDelay',
      type: 'number',
      default: '0.1',
      description: 'Delay interval between items in seconds (default: 0.1s)',
      required: false
    },
    {
      name: 'staggerClass',
      type: 'string',
      default: "'animate-fade-in-up'",
      description: 'Animation class to apply (default: animate-fade-in-up)',
      required: false
    }
  ];

  // Code examples
  manualExample = `<!-- Manual way (without directive) -->
@for (item of items; track item.id; let i = $index) {
  <div 
    class="animate-fade-in-up"
    [style.animation-delay]="(i * 0.1) + 's'">
    <!-- content -->
  </div>
}`;

  basicExample = `<!-- With @for (Angular 17+) -->
@for (item of items; track item.id; let i = $index) {
  <div [appStagger]="i" [staggerDelay]="0.1">
    <!-- content -->
  </div>
}

<!-- With *ngFor -->
<div *ngFor="let item of items; let i = index" [appStagger]="i" [staggerDelay]="0.1">
  <!-- content -->
</div>`;

  customDelayExample = `<!-- Custom delay interval -->
@for (item of items; track item.id; let i = $index) {
  <app-glass-card [appStagger]="i" [staggerDelay]="0.05">
    <!-- content -->
  </app-glass-card>
}`;

  customClassExample = `<!-- Custom animation class -->
<div [appStagger]="i" [staggerDelay]="0.1" [staggerClass]="'custom-animation'">
  <!-- content -->
</div>`;

  fullExample = `<!-- Complete example with Glass Card -->
@for (item of items; track item.id; let i = $index) {
  <app-glass-card [appStagger]="i" [staggerDelay]="0.1">
    <div class="p-6">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </app-glass-card>
}`;

  // Helper methods for color classes
  getColorClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500/20',
      green: 'bg-green-500/20',
      purple: 'bg-purple-500/20',
      orange: 'bg-orange-500/20',
      pink: 'bg-pink-500/20',
      teal: 'bg-teal-500/20'
    };
    return colorMap[color] || 'bg-gray-500/20';
  }

  getTextColorClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      orange: 'text-orange-600 dark:text-orange-400',
      pink: 'text-pink-600 dark:text-pink-400',
      teal: 'text-teal-600 dark:text-teal-400'
    };
    return colorMap[color] || 'text-gray-600 dark:text-gray-400';
  }
}

