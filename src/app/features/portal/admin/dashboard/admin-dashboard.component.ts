import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Admin Management" 
      subtitle="ศูนย์กลางจัดการระบบสำหรับผู้ดูแลระบบ">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Employees Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['employees']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">people</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการพนักงาน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลพนักงาน, สิทธิ์ และการเข้าถึงระบบ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Company Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['company']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">business</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการบริษัท</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลบริษัท, สาขา, โครงสร้างองค์กร</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Payroll Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['payroll']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">account_balance_wallet</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการเงินเดือน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการเงินเดือน, โบนัส และสวัสดิการ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Time Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['time']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">schedule</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการเวลา</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการลงเวลา, OT และตารางงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Training Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['training']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">school</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการการฝึกอบรม</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการหลักสูตร, การอบรม และใบรับรอง</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Welfare Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['welfare']">
        <div class="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-pink-600">
          <i class="material-icons text-xl">favorite</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการสวัสดิการ</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการสวัสดิการและสิทธิประโยชน์</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Recruit Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['recruit']">
        <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
          <i class="material-icons text-xl">work</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการการสรรหา</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการตำแหน่งงาน, การสมัครงาน และการสัมภาษณ์</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Appraisal Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['appraisal']">
        <div class="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
          <i class="material-icons text-xl">assessment</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">จัดการการประเมิน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการประเมินผลงานและ KPI</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Settings Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['settings']">
        <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 text-gray-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตั้งค่าระบบ</h3>
        <p class="text-sm text-gray-500 mb-4">ตั้งค่าระบบ, สิทธิ์ และการเข้าถึง</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class AdminDashboardComponent {
}
