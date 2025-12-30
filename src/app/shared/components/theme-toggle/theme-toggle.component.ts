import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode, ThemeColor } from '@core/services';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  currentMode: ThemeMode = 'light';
  currentColor: ThemeColor = 'blue';
  currentModeIcon = 'light_mode';
  showModeMenu = false;
  showColorMenu = false;

  @ViewChild('modeButton') modeButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('colorButton') colorButton?: ElementRef<HTMLButtonElement>;

  themeColors = [
    { value: 'blue' as ThemeColor, name: 'น้ำเงิน', gradient: 'var(--theme-gradient-blue)' },
    { value: 'indigo' as ThemeColor, name: 'คราม', gradient: 'var(--theme-gradient-indigo)' },
    { value: 'purple' as ThemeColor, name: 'ม่วง', gradient: 'var(--theme-gradient-purple)' },
    { value: 'green' as ThemeColor, name: 'เขียว', gradient: 'var(--theme-gradient-green)' },
    { value: 'orange' as ThemeColor, name: 'ส้ม', gradient: 'var(--theme-gradient-orange)' },
    { value: 'red' as ThemeColor, name: 'แดง', gradient: 'var(--theme-gradient-red)' },
    { value: 'teal' as ThemeColor, name: 'เทาเขียว', gradient: 'var(--theme-gradient-teal)' },
    { value: 'pink' as ThemeColor, name: 'ชมพู', gradient: 'var(--theme-gradient-pink)' }
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentMode = theme.mode;
      this.currentColor = theme.color;
      this.updateModeIcon();
    });
  }

  toggleModeMenu(): void {
    this.showModeMenu = !this.showModeMenu;
    this.showColorMenu = false;
  }

  toggleColorMenu(): void {
    this.showColorMenu = !this.showColorMenu;
    this.showModeMenu = false;
  }

  setMode(mode: ThemeMode): void {
    this.themeService.setMode(mode);
    this.updateModeIcon();
    this.showModeMenu = false;
  }

  setColor(color: ThemeColor): void {
    this.themeService.setColor(color);
    this.showColorMenu = false;
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

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-toggle-container')) {
      this.showModeMenu = false;
      this.showColorMenu = false;
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.showModeMenu = false;
      this.showColorMenu = false;
    }
  }
}
