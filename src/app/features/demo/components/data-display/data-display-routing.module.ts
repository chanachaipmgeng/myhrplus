import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'statistics-card',
    pathMatch: 'full'
  },
  {
    path: 'statistics-card',
    loadComponent: () => import('../statistics-card-demo/statistics-card-demo.component').then(m => m.StatisticsCardDemoComponent)
  },
  {
    path: 'statistics-grid',
    loadComponent: () => import('../statistics-grid-demo/statistics-grid-demo.component').then(m => m.StatisticsGridDemoComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('../calendar-demo/calendar-demo.component').then(m => m.CalendarDemoComponent)
  },
  {
    path: 'pivot-table',
    loadComponent: () => import('../pivot-table-demo/pivot-table-demo.component').then(m => m.PivotTableDemoComponent)
  },
  {
    path: 'data-grid',
    loadComponent: () => import('../data-grid-demo/data-grid-demo.component').then(m => m.DataGridDemoComponent)
  },
  {
    path: 'tree-grid',
    loadComponent: () => import('../tree-grid-demo/tree-grid-demo.component').then(m => m.TreeGridDemoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDisplayRoutingModule { }

