import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'glass-card',
    pathMatch: 'full'
  },
  {
    path: 'glass-card',
    loadComponent: () => import('../glass-card-demo/glass-card-demo.component').then(m => m.GlassCardDemoComponent)
  },
  {
    path: 'glass-button',
    loadComponent: () => import('../glass-button-demo/glass-button-demo.component').then(m => m.GlassButtonDemoComponent)
  },
  {
    path: 'modal',
    loadComponent: () => import('../modal-demo/modal-demo.component').then(m => m.ModalDemoComponent)
  },
  {
    path: 'tabs',
    loadComponent: () => import('../tabs-demo/tabs-demo.component').then(m => m.TabsDemoComponent)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('../progress-bar-demo/progress-bar-demo.component').then(m => m.ProgressBarDemoComponent)
  },
  {
    path: 'rating',
    loadComponent: () => import('../rating-demo/rating-demo.component').then(m => m.RatingDemoComponent)
  },
  {
    path: 'loading',
    loadComponent: () => import('../loading-demo/loading-demo.component').then(m => m.LoadingDemoComponent)
  },
  {
    path: 'empty-state',
    loadComponent: () => import('../empty-state-demo/empty-state-demo.component').then(m => m.EmptyStateDemoComponent)
  },
  {
    path: 'notification',
    loadComponent: () => import('../notification-demo/notification-demo.component').then(m => m.NotificationDemoComponent)
  },
  {
    path: 'tooltip',
    loadComponent: () => import('../tooltip-demo/tooltip-demo.component').then(m => m.TooltipDemoComponent)
  },
  {
    path: 'spinner',
    loadComponent: () => import('../spinner-demo/spinner-demo.component').then(m => m.SpinnerDemoComponent)
  },
  {
    path: 'theme-toggle',
    loadComponent: () => import('../theme-toggle-demo/theme-toggle-demo.component').then(m => m.ThemeToggleDemoComponent)
  },
  {
    path: 'avatar',
    loadComponent: () => import('../avatar-demo/avatar-demo.component').then(m => m.AvatarDemoComponent)
  },
  {
    path: 'status-badge',
    loadComponent: () => import('../status-badge-demo/status-badge-demo.component').then(m => m.StatusBadgeDemoComponent)
  },
  {
    path: 'error-state',
    loadComponent: () => import('../error-state-demo/error-state-demo.component').then(m => m.ErrorStateDemoComponent)
  },
  {
    path: 'confirm-dialog',
    loadComponent: () => import('../confirm-dialog-demo/confirm-dialog-demo.component').then(m => m.ConfirmDialogDemoComponent)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('../breadcrumbs-demo/breadcrumbs-demo.component').then(m => m.BreadcrumbsDemoComponent)
  },
  {
    path: 'stepper',
    loadComponent: () => import('../stepper-demo/stepper-demo.component').then(m => m.StepperDemoComponent)
  },
  {
    path: 'timeline',
    loadComponent: () => import('../timeline-demo/timeline-demo.component').then(m => m.TimelineDemoComponent)
  },
  {
    path: 'search-filter',
    loadComponent: () => import('../search-filter-demo/search-filter-demo.component').then(m => m.SearchFilterDemoComponent)
  },
  {
    path: 'date-range-picker',
    loadComponent: () => import('../date-range-picker-demo/date-range-picker-demo.component').then(m => m.DateRangePickerDemoComponent)
  },
  {
    path: 'skeleton-loader',
    loadComponent: () => import('../skeleton-loader-demo/skeleton-loader-demo.component').then(m => m.SkeletonLoaderDemoComponent)
  },
  {
    path: 'page-header',
    loadComponent: () => import('../page-header-demo/page-header-demo.component').then(m => m.PageHeaderDemoComponent)
  },
  {
    path: 'page-layout',
    loadComponent: () => import('../page-layout-demo/page-layout-demo.component').then(m => m.PageLayoutDemoComponent)
  },
  {
    path: 'icon',
    loadComponent: () => import('../icon-demo/icon-demo.component').then(m => m.IconDemoComponent)
  },
  {
    path: 'mask-toggle',
    loadComponent: () => import('../mask-toggle-demo/mask-toggle-demo.component').then(m => m.MaskToggleDemoComponent)
  },
  {
    path: 'back-to-top',
    loadComponent: () => import('../back-to-top-demo/back-to-top-demo.component').then(m => m.BackToTopDemoComponent)
  },
  {
    path: 'pagination',
    loadComponent: () => import('../pagination-demo/pagination-demo.component').then(m => m.PaginationDemoComponent)
  },
  {
    path: 'chip',
    loadComponent: () => import('../chip-demo/chip-demo.component').then(m => m.ChipDemoComponent)
  },
  {
    path: 'alert',
    loadComponent: () => import('../alert-demo/alert-demo.component').then(m => m.AlertDemoComponent)
  },
  {
    path: 'accordion',
    loadComponent: () => import('../accordion-demo/accordion-demo.component').then(m => m.AccordionDemoComponent)
  },
  {
    path: 'divider',
    loadComponent: () => import('../divider-demo/divider-demo.component').then(m => m.DividerDemoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }

