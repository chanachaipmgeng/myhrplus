import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubordinatesListComponent } from './subordinates-list/subordinates-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: SubordinatesListComponent,
    data: {
      title: 'ลูกน้อง',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ลูกน้อง', route: '/portal/self-service/subordinates' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubordinatesRoutingModule { }

