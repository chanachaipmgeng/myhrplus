import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-employees-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Personal Management" 
      subtitle="ศูนย์กลางจัดการข้อมูลพนักงาน">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Personal Information Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['personal-info']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">person</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลส่วนตัว</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลส่วนตัว, เงินเดือน, และข้อมูลการทำงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Staff Movement Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['staff-movement']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">swap_horiz</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การย้ายพนักงาน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการย้ายตำแหน่ง, การลาออก และการเลื่อนตำแหน่ง</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Process Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['process']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">กระบวนการ</h3>
        <p class="text-sm text-gray-500 mb-4">ประมวลผลการย้ายพนักงาน และโครงสร้างองค์กร</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Import Data Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['import-data']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">upload</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">นำเข้าข้อมูล</h3>
        <p class="text-sm text-gray-500 mb-4">นำเข้าข้อมูลพนักงานและข้อมูลการย้าย</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Setup Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['setup']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตั้งค่า</h3>
        <p class="text-sm text-gray-500 mb-4">ตั้งค่าตารางข้อมูลพื้นฐานสำหรับพนักงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Legal Execution Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['legal-execution']">
        <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-red-600">
          <i class="material-icons text-xl">gavel</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การบังคับคดี</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการบังคับคดีและการหักเงินเดือน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class EmployeesDashboardComponent {
}
