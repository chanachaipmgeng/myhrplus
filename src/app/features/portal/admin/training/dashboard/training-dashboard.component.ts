import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-training-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Training Management" 
      subtitle="ศูนย์กลางจัดการการฝึกอบรมและพัฒนาพนักงาน">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Setup Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['setup']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตั้งค่า</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการหลักสูตร, ประเภทการอบรม และข้อมูลพื้นฐาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Evaluation Process Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['evaluation-process']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">assessment</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">กระบวนการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการประเมินผลการอบรม</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Transaction Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['transaction']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">swap_horiz</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">รายการ</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการรายการการอบรมและการลงทะเบียน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- History Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['history']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">history</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ประวัติ</h3>
        <p class="text-sm text-gray-500 mb-4">ดูประวัติการอบรมและใบรับรอง</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class TrainingDashboardComponent {
}
