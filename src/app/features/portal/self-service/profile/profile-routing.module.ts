import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: ProfileViewComponent,
    data: {
      title: 'ตรวจสอบข้อมูลตัวเอง',
      breadcrumbs: [
        { label: 'Portal', route: '/portal' },
        { label: 'Self Service', route: '/portal/self-service' },
        { label: 'ตรวจสอบข้อมูลตัวเอง', route: '/portal/self-service/profile' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

