import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeMode, ThemeColor } from '@core/services';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  currentMode: ThemeMode = 'light';
  currentColor: ThemeColor = 'blue';
  currentModeIcon = 'light_mode';
  showModeMenu = false;
  showColorMenu = false;
  showColorPicker = false;
  customPrimaryColor = '#3b82f6'; // Default blue
  hexColorInput = '#3b82f6';

  @ViewChild('modeButton') modeButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('colorButton') colorButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('colorPickerContainer') colorPickerContainer?: ElementRef<HTMLDivElement>;

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
      // Update custom color from theme
      this.customPrimaryColor = this.rgbToHex(theme.primaryColor);
      this.hexColorInput = this.customPrimaryColor;
    });
  }

  toggleModeMenu(): void {
    this.showModeMenu = !this.showModeMenu;
    this.showColorMenu = false;
    this.showColorPicker = false;
  }

  toggleColorMenu(): void {
    this.showColorMenu = !this.showColorMenu;
    this.showModeMenu = false;
    this.showColorPicker = false;
  }

  toggleColorPicker(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.showColorPicker = !this.showColorPicker;
    // Keep color menu open if closing picker, otherwise close it
    if (!this.showColorPicker) {
      this.showColorMenu = true;
    } else {
      this.showColorMenu = false;
    }
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

  onColorPickerChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const hexColor = input.value;
    this.onCustomColorChange(hexColor);
  }

  onHexInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let hexColor = input.value.trim();

    // Ensure hex color starts with #
    if (!hexColor.startsWith('#')) {
      hexColor = '#' + hexColor;
    }

    this.hexColorInput = hexColor;

    // Validate and apply
    if (/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
      this.onCustomColorChange(hexColor);
    }
  }

  private onCustomColorChange(hexColor: string): void {
    this.customPrimaryColor = hexColor;
    this.hexColorInput = hexColor;
    const rgb = this.hexToRgb(hexColor);
    if (rgb) {
      this.themeService.setPrimaryColor(rgb);
    }
  }

  resetTheme(): void {
    this.themeService.resetTheme();
    this.showColorPicker = false;
    this.showColorMenu = false;
    this.showModeMenu = false;
  }

  private hexToRgb(hex: string): string | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `${r}, ${g}, ${b}`;
    }
    return null;
  }

  private rgbToHex(rgb: string): string {
    const parts = rgb.split(',').map(p => parseInt(p.trim(), 10));
    if (parts.length === 3) {
      const r = parts[0].toString(16).padStart(2, '0');
      const g = parts[1].toString(16).padStart(2, '0');
      const b = parts[2].toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }
    return '#3b82f6'; // Default blue
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
      // Small delay to allow button click to register
      setTimeout(() => {
        this.showModeMenu = false;
        this.showColorMenu = false;
        this.showColorPicker = false;
      }, 100);
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.showModeMenu = false;
      this.showColorMenu = false;
      this.showColorPicker = false;
    }
  }
}
