import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { SyncfusionModule } from '@shared/syncfusion/syncfusion.module';
import { ThemeToggleComponent } from '@shared/components/theme-toggle/theme-toggle.component';
// Import standalone components
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { OmniSearchComponent } from '@shared/components/omni-search/omni-search.component';
import { NestedMenuAccordionComponent } from '@shared/components/nested-menu-accordion/nested-menu-accordion.component';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { EmptyStateComponent } from '@shared/components/empty-state/empty-state.component';
import { SwipeDirective } from '@shared/directives/swipe.directive';

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
    TranslateModule, // For i18n translation
    SharedModule, // For SkeletonLoaderComponent, AvatarComponent (non-standalone)
    SyncfusionModule, // Syncfusion UI-KIT components
    ThemeToggleComponent, // Standalone component
    GlassButtonComponent, // Standalone component
    GlassCardComponent, // Standalone component
    GlassInputComponent, // Standalone component
    IconComponent, // Standalone component
    OmniSearchComponent, // Standalone component
    NestedMenuAccordionComponent, // Standalone component
    BreadcrumbsComponent, // Standalone component
    EmptyStateComponent, // Standalone component
    SwipeDirective // Standalone directive
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
