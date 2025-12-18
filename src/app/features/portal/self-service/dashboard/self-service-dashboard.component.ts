import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-self-service-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Employee Self Service" 
      subtitle="ศูนย์กลางบริการตนเองสำหรับพนักงาน">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Time Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['time']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">access_time</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ลงเวลา</h3>
        <p class="text-sm text-gray-500 mb-4">ลงเวลาเข้า-ออก และตรวจสอบแจ้งเตือนเวลา</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Documents Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['documents']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">description</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ขอเอกสาร</h3>
        <p class="text-sm text-gray-500 mb-4">ขอเอกสาร PND91, TWI50 และเอกสารอื่นๆ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Payslip Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['payslip']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">receipt</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">สลิปเงินเดือน</h3>
        <p class="text-sm text-gray-500 mb-4">ดูสลิปเงินเดือนและประวัติการจ่ายเงินเดือน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Profile Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['profile']">
        <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
          <i class="material-icons text-xl">person</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตรวจสอบข้อมูลตัวเอง</h3>
        <p class="text-sm text-gray-500 mb-4">ดูและแก้ไขข้อมูลส่วนตัว</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Subordinates Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['subordinates']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">people</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ลูกน้อง</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลลูกน้องและทีมงาน</p>
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
        <h3 class="text-lg font-semibold text-gray-800 mb-2">สวัสดิการ</h3>
        <p class="text-sm text-gray-500 mb-4">ดูสวัสดิการและสิทธิประโยชน์</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Leave Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['leave']">
        <div class="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
          <i class="material-icons text-xl">event</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ลาพักผ่อน</h3>
        <p class="text-sm text-gray-500 mb-4">ยื่นคำขอลาและตรวจสอบสถานะการลา</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Attendance Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['attendance']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">access_time</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การลงเวลา</h3>
        <p class="text-sm text-gray-500 mb-4">ตรวจสอบประวัติการลงเวลา</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Statistics Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['statistics']">
        <div class="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4 text-cyan-600">
          <i class="material-icons text-xl">bar_chart</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">สถิติ</h3>
        <p class="text-sm text-gray-500 mb-4">ดูสถิติการลา, OT และแก้ไขเวลา</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class SelfServiceDashboardComponent {
}
