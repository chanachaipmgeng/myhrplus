/**
 * Video Analytics & AI Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'video-analytics'
  },
  {
    path: 'video-analytics',
    loadComponent: () => import('./video-analytics/video-analytics.component').then(m => m.VideoAnalyticsComponent)
  },
  {
    path: 'ai-models',
    loadComponent: () => import('./ai-models/ai-models.component').then(m => m.AiModelsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoAiRoutingModule { }

