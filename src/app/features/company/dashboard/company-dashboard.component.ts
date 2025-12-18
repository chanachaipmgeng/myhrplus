import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Company Management" 
      subtitle="ศูนย์กลางจัดการข้อมูลบริษัทและโครงสร้างองค์กร">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Human Resources Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['human-resources']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="fas fa-building text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Human Resources</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลบริษัท, สาขา, โครงสร้างองค์กร และ JD</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="fas fa-arrow-right ml-2"></i>
        </div>
      </div>

      <!-- Approve Setup Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['approve']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="fas fa-check-circle text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Approve Setup</h3>
        <p class="text-sm text-gray-500 mb-4">ตั้งค่าสายการอนุมัติ และสิทธิ์การตรวจสอบต่างๆ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="fas fa-arrow-right ml-2"></i>
        </div>
      </div>

      <!-- ESS Setup Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['ess-setup']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="fas fa-mobile-alt text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ESS Setup</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข่าว, กิจกรรม, Banner และเนื้อหาบน ESS</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="fas fa-arrow-right ml-2"></i>
        </div>
      </div>

      <!-- Reports Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['reports']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="fas fa-chart-line text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Reports</h3>
        <p class="text-sm text-gray-500 mb-4">รายงานสรุปข้อมูลบริษัทและอัตรากำลัง</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="fas fa-arrow-right ml-2"></i>
        </div>
      </div>
    </div>
  `
})
export class CompanyDashboardComponent {
  private service = inject(CompanyService);
}
