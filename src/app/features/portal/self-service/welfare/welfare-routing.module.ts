import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelfareViewComponent } from './welfare-view/welfare-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: WelfareViewComponent,
    data: {
      title: 'สวัสดิการ',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'สวัสดิการ', route: '/portal/self-service/welfare' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelfareRoutingModule { }

