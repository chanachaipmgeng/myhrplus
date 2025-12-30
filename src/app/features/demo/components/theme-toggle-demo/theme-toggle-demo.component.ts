import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '@shared/components/theme-toggle/theme-toggle.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-theme-toggle-demo',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './theme-toggle-demo.component.html',
  styleUrls: ['./theme-toggle-demo.component.scss']
})
export class ThemeToggleDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'None',
      type: '-',
      default: '-',
      description: 'Theme Toggle component has no inputs. It uses ThemeService internally.',
      required: false
    }
  ];

  basicExample = `<app-theme-toggle></app-theme-toggle>`;

  usageExample = `// The component automatically handles theme switching
// It provides two dropdowns:
// 1. Theme Mode: Light, Dark, Auto
// 2. Theme Color: Blue, Indigo, Purple, Green, Orange, Red, Teal, Pink

<app-theme-toggle></app-theme-toggle>`;

  serviceExample = `// You can also use ThemeService directly
import { ThemeService } from '@core/services';

constructor(private themeService: ThemeService) {}

setTheme(mode: 'light' | 'dark' | 'auto', color: ThemeColor) {
  this.themeService.setMode(mode);
  this.themeService.setColor(color);
}`;
}
