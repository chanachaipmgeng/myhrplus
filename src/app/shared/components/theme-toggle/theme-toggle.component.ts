import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService, ThemeMode, ThemeColor } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule],
  template: `
    <div class="flex items-center gap-2">
      <!-- Theme Mode Toggle -->
      <button
        mat-icon-button
        [matMenuTriggerFor]="modeMenu"
        class="!text-slate-700 dark:!text-slate-200 hover:!bg-white/30 dark:hover:!bg-slate-700/30 transition-all duration-200"
        matTooltip="เปลี่ยนธีม">
        <mat-icon>{{ currentModeIcon }}</mat-icon>
      </button>

      <mat-menu #modeMenu="matMenu" class="glass-card !bg-white/30 dark:!bg-slate-900/30 !backdrop-blur-lg">
        <button
          mat-menu-item
          (click)="setMode('light')"
          [class.active]="currentMode === 'light'"
          class="!text-slate-700 dark:!text-slate-200 hover:!bg-white/40 dark:hover:!bg-slate-700/40">
          <mat-icon>light_mode</mat-icon>
          <span class="thai-text ml-2">โหมดสว่าง</span>
        </button>
        <button
          mat-menu-item
          (click)="setMode('dark')"
          [class.active]="currentMode === 'dark'"
          class="!text-slate-700 dark:!text-slate-200 hover:!bg-white/40 dark:hover:!bg-slate-700/40">
          <mat-icon>dark_mode</mat-icon>
          <span class="thai-text ml-2">โหมดมืด</span>
        </button>
        <button
          mat-menu-item
          (click)="setMode('auto')"
          [class.active]="currentMode === 'auto'"
          class="!text-slate-700 dark:!text-slate-200 hover:!bg-white/40 dark:hover:!bg-slate-700/40">
          <mat-icon>brightness_auto</mat-icon>
          <span class="thai-text ml-2">อัตโนมัติ</span>
        </button>
      </mat-menu>

      <!-- Theme Color Picker -->
      <button
        mat-icon-button
        [matMenuTriggerFor]="colorMenu"
        class="!text-slate-700 dark:!text-slate-200 hover:!bg-white/30 dark:hover:!bg-slate-700/30 transition-all duration-200"
        matTooltip="เปลี่ยนสีธีม">
        <mat-icon>palette</mat-icon>
      </button>

      <mat-menu #colorMenu="matMenu" class="glass-card !bg-white/30 dark:!bg-slate-900/30 !backdrop-blur-lg !p-2">
        <div class="grid grid-cols-4 gap-2 p-2">
          <button
            *ngFor="let color of themeColors"
            (click)="setColor(color.value)"
            [class.active]="currentColor === color.value"
            class="w-10 h-10 rounded-lg border-2 transition-all duration-200 hover:scale-110 hover:shadow-lg"
            [style.background]="color.gradient"
            [class.border-primary-500]="currentColor === color.value"
            [class.border-slate-300]="currentColor !== color.value"
            [class.dark:border-slate-600]="currentColor !== color.value"
            [matTooltip]="color.name">
          </button>
        </div>
      </mat-menu>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .active {
      background: rgba(var(--primary-rgb), 0.1) !important;
      color: rgb(var(--primary-rgb)) !important;
    }

    .dark .active {
      background: rgba(var(--primary-rgb), 0.2) !important;
    }

    ::ng-deep .mat-mdc-menu-panel {
      min-width: 200px !important;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  currentMode: ThemeMode = 'light';
  currentColor: ThemeColor = 'blue';
  currentModeIcon = 'light_mode';

  themeColors = [
    { value: 'blue' as ThemeColor, name: 'น้ำเงิน', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    { value: 'indigo' as ThemeColor, name: 'คราม', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
    { value: 'purple' as ThemeColor, name: 'ม่วง', gradient: 'linear-gradient(135deg, #a855f7, #9333ea)' },
    { value: 'green' as ThemeColor, name: 'เขียว', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
    { value: 'orange' as ThemeColor, name: 'ส้ม', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
    { value: 'red' as ThemeColor, name: 'แดง', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
    { value: 'teal' as ThemeColor, name: 'เทาเขียว', gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)' },
    { value: 'pink' as ThemeColor, name: 'ชมพู', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' }
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentMode = theme.mode;
      this.currentColor = theme.color;
      this.updateModeIcon();
    });
  }

  setMode(mode: ThemeMode): void {
    this.themeService.setMode(mode);
    this.updateModeIcon();
  }

  setColor(color: ThemeColor): void {
    this.themeService.setColor(color);
  }

  private updateModeIcon(): void {
    switch (this.currentMode) {
      case 'light':
        this.currentModeIcon = 'light_mode';
        break;
      case 'dark':
        this.currentModeIcon = 'dark_mode';
        break;
      case 'auto':
        this.currentModeIcon = 'brightness_auto';
        break;
    }
  }
}
