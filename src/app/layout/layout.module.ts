import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SyncfusionModule } from '../shared/syncfusion/syncfusion.module';
import { ThemeToggleComponent } from '../shared/components/theme-toggle/theme-toggle.component';
// Import standalone components
import { GlassButtonComponent } from '../shared/components/glass-button/glass-button.component';
import { GlassCardComponent } from '../shared/components/glass-card/glass-card.component';
import { ContextSwitcherComponent } from '../shared/components/context-switcher/context-switcher.component';
import { IconComponent } from '../shared/components/icon/icon.component';
import { OmniSearchComponent } from '../shared/components/omni-search/omni-search.component';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // For ngModel in search input
    SharedModule,
    SyncfusionModule, // Syncfusion UI-KIT components
    ThemeToggleComponent, // Standalone component
    GlassButtonComponent, // Standalone component
    GlassCardComponent, // Standalone component
    ContextSwitcherComponent, // Standalone component
    IconComponent, // Standalone component
    OmniSearchComponent // Standalone component
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
