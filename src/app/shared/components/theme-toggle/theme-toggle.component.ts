import { Component, HostListener, ElementRef, ChangeDetectionStrategy, signal, computed, inject, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService, ThemeMode, ThemeColor } from '../../../core/services/theme.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(-10px)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0, transform: 'scale(0.95) translateY(-10px)' }))
      ])
    ])
  ]
})
export class ThemeToggleComponent {
  public themeService = inject(ThemeService);

  theme = toSignal(this.themeService.theme$, {
    initialValue: { mode: 'light' as ThemeMode, color: 'blue' as ThemeColor, primaryColor: '59, 130, 246' }
  });

  mode = computed(() => this.theme().mode);
  color = computed(() => this.theme().color);

  modeIcon = computed(() => {
    switch (this.mode()) {
      case 'light': return 'light_mode';
      case 'dark': return 'dark_mode';
      case 'auto': return 'brightness_auto';
      default: return 'light_mode';
    }
  });

  showModeMenu = signal(false);
  showColorMenu = signal(false);

  // View queries
  modeButton = viewChild<ElementRef<HTMLButtonElement>>('modeButton');
  colorButton = viewChild<ElementRef<HTMLButtonElement>>('colorButton');

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

  toggleModeMenu(): void {
    this.showModeMenu.update(v => !v);
    this.showColorMenu.set(false);
  }

  toggleColorMenu(): void {
    this.showColorMenu.update(v => !v);
    this.showModeMenu.set(false);
  }

  setMode(mode: ThemeMode): void {
    this.themeService.setMode(mode);
    this.showModeMenu.set(false);
  }

  setColor(color: ThemeColor): void {
    this.themeService.setColor(color);
    this.showColorMenu.set(false);
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-toggle-container')) {
      this.showModeMenu.set(false);
      this.showColorMenu.set(false);
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.showModeMenu.set(false);
      this.showColorMenu.set(false);
    }
  }
}
