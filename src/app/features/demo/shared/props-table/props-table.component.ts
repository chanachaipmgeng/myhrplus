import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

@Component({
  selector: 'app-props-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="my-6">
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 theme-myhr:bg-gradient-to-r theme-myhr:from-primary theme-myhr:via-primary theme-myhr:to-primary theme-myhr:bg-clip-text theme-myhr:text-transparent">{{ title }}</h3>
      <div class="overflow-x-auto glass dark:glass-dark theme-myhr:glass-myhr rounded-lg p-2 shadow-glass">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-white/50 dark:bg-gray-800/50 theme-myhr:bg-primary/10">
              <th class="px-3 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 theme-myhr:bg-gradient-to-r theme-myhr:from-primary theme-myhr:via-primary theme-myhr:to-primary theme-myhr:bg-clip-text theme-myhr:text-transparent border-b-2 border-gray-200 dark:border-gray-700 theme-myhr:border-primary/30">Property</th>
              <th class="px-3 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 theme-myhr:bg-gradient-to-r theme-myhr:from-primary theme-myhr:via-primary theme-myhr:to-primary theme-myhr:bg-clip-text theme-myhr:text-transparent border-b-2 border-gray-200 dark:border-gray-700 theme-myhr:border-primary/30">Type</th>
              <th class="px-3 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 theme-myhr:bg-gradient-to-r theme-myhr:from-primary theme-myhr:via-primary theme-myhr:to-primary theme-myhr:bg-clip-text theme-myhr:text-transparent border-b-2 border-gray-200 dark:border-gray-700 theme-myhr:border-primary/30">Default</th>
              <th class="px-3 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 theme-myhr:bg-gradient-to-r theme-myhr:from-primary theme-myhr:via-primary theme-myhr:to-primary theme-myhr:bg-clip-text theme-myhr:text-transparent border-b-2 border-gray-200 dark:border-gray-700 theme-myhr:border-primary/30">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let prop of props" class="border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-800/30 theme-myhr:hover:bg-primary/5 transition-smooth">
              <td class="px-3 py-3">
                <code class="font-mono text-sm text-primary-600 dark:text-primary-400 theme-myhr:text-primary bg-primary-500/10 dark:bg-primary-500/20 theme-myhr:bg-primary/20 px-1.5 py-0.5 rounded">{{ prop.name }}</code>
                <span *ngIf="prop.required" class="inline-block ml-2 px-1.5 py-0.5 text-xs bg-red-100 dark:bg-red-500/30 theme-myhr:bg-red-500/20 text-red-700 dark:text-red-400 theme-myhr:text-red-400 rounded font-medium">required</span>
              </td>
              <td class="px-3 py-3"><code class="font-mono text-sm text-warning-600 dark:text-warning-400 bg-warning-500/10 dark:bg-warning-500/20 px-1.5 py-0.5 rounded">{{ prop.type }}</code></td>
              <td class="px-3 py-3">
                <code *ngIf="prop.default" class="font-mono text-sm text-success-600 dark:text-success-400 bg-success-500/10 dark:bg-success-500/20 px-1.5 py-0.5 rounded">{{ prop.default }}</code>
                <span *ngIf="!prop.default" class="text-gray-400 dark:text-gray-500 italic">-</span>
              </td>
              <td class="px-3 py-3 text-gray-600 dark:text-gray-400">{{ prop.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./props-table.component.scss']
})
export class PropsTableComponent {
  @Input() props: PropDefinition[] = [];
  @Input() title: string = 'Properties';
}


