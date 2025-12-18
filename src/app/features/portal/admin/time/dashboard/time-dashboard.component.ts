import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-time-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Time Management" 
      subtitle="ศูนย์กลางจัดการการลงเวลาและตารางงาน">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Daily Attendance Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['daily-attendance']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">calendar_today</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การลงเวลาประจำวัน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการลงเวลาเข้า-ออกประจำวัน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Transaction Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['transaction']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">swap_horiz</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">รายการ</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการคำขอแก้ไขเวลาและชั่วโมงทำงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Data Before Processing Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['data-before-processing']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">play_circle_outline</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลก่อนประมวลผล</h3>
        <p class="text-sm text-gray-500 mb-4">ตรวจสอบข้อมูลก่อนประมวลผล</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- On Process Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['on-process']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">play_circle</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">กำลังประมวลผล</h3>
        <p class="text-sm text-gray-500 mb-4">ตรวจสอบสถานะการประมวลผล</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Data After Processing Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['data-after-processing']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">check_circle</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลหลังประมวลผล</h3>
        <p class="text-sm text-gray-500 mb-4">ตรวจสอบผลลัพธ์หลังประมวลผล</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- History Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['history']">
        <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
          <i class="material-icons text-xl">history</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ประวัติ</h3>
        <p class="text-sm text-gray-500 mb-4">ดูประวัติการลงเวลาและการแก้ไข</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Roster Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['roster']">
        <div class="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-pink-600">
          <i class="material-icons text-xl">calendar_month</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตารางงาน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการตารางงานและกะการทำงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Setup Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['setup']">
        <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 text-gray-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตั้งค่า</h3>
        <p class="text-sm text-gray-500 mb-4">ตั้งค่าระบบการลงเวลา</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class TimeDashboardComponent {
}
