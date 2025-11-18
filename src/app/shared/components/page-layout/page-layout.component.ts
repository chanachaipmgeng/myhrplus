import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen">
      <!-- Header -->
      <div *ngIf="showHeader" class="glass-nav mb-6 p-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 *ngIf="title" class="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {{ title }}
            </h1>
            <p *ngIf="subtitle" class="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {{ subtitle }}
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <ng-content select="[header-actions]"></ng-content>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div [class]="contentClass">
        <ng-content></ng-content>
      </div>

      <!-- Footer -->
      <div *ngIf="showFooter" class="glass-nav mt-6 p-4 text-center text-sm text-slate-600 dark:text-slate-400">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class PageLayoutComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() contentClass: string = 'container mx-auto px-4 py-6';
}

