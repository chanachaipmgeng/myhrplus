import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalHomeComponent } from './portal-home/portal-home.component';

const routes: Routes = [
  {
    path: '',
    component: PortalHomeComponent,
    data: {
      title: 'Portal',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' }
      ]
    }
  },
  {
    path: 'self-service',
    loadChildren: () => import('./self-service/self-service.module').then(m => m.SelfServiceModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

