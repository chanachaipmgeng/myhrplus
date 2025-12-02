import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ProfileRoutingModule,
    SharedModule,
    // Standalone components
    ProfileViewComponent
  ]
})
export class ProfileModule { }

