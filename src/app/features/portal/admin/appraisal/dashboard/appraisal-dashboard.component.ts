import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-appraisal-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Appraisal Management" 
      subtitle="ศูนย์กลางจัดการการประเมินผลงานและ KPI">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Appraisal Type Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal-type']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">category</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ประเภทการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการประเภทและรูปแบบการประเมิน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Appraisal Grade Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal-grade']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">star</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ระดับการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการระดับคะแนนและเกณฑ์การประเมิน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Appraisal Topic Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal-topic']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">topic</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">หัวข้อการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการหัวข้อและ KPI สำหรับการประเมิน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Appraisal Form Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal-form']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">description</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">แบบฟอร์มการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการแบบฟอร์มและโครงสร้างการประเมิน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Appraisal Period Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal-period']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">calendar_today</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">รอบการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการรอบและช่วงเวลาการประเมิน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- OKR Appraisal Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['okr-appraisal']">
        <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
          <i class="material-icons text-xl">track_changes</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">OKR Appraisal</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการประเมินแบบ OKR</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class AppraisalDashboardComponent {
}
