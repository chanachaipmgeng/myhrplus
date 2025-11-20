import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';
import { ThemeService, ThemeMode, ThemeColor } from '../../../../core/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-switcher-demo',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    GlassCardComponent,
    CodeViewerComponent,
    PropsTableComponent
  ],
  templateUrl: './theme-switcher-demo.component.html',
  styleUrls: ['./theme-switcher-demo.component.scss']
})
export class ThemeSwitcherDemoComponent implements OnInit, OnDestroy {
  props: PropDefinition[] = [
    {
      name: 'N/A',
      type: 'N/A',
      default: 'N/A',
      description: 'This component uses ThemeService directly',
      required: false
    }
  ];

  basicExample = `<app-theme-switcher></app-theme-switcher>`;

  currentTheme: { mode: ThemeMode; color: ThemeColor } = { mode: 'light', color: 'blue' };
  private subscription?: Subscription;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.subscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = { mode: theme.mode, color: theme.color };
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

