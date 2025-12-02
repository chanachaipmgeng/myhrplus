import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

interface ProfileData {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  startDate: string;
  address: string;
}

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent
  ],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  isLoading = false;
  profile: ProfileData | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadProfile();
  }

  private loadProfile(): void {
    // Mock data
    this.profile = {
      employeeId: 'EMP001',
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      email: 'somchai@company.com',
      phone: '081-234-5678',
      department: 'แผนก IT',
      position: 'Senior Developer',
      startDate: '2020-01-15',
      address: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพมหานคร 10110'
    };
  }
}

