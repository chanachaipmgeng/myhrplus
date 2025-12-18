import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-welfare-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Welfare Management" 
      subtitle="ศูนย์กลางจัดการสวัสดิการและสิทธิประโยชน์">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Master Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['master']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">folder</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลหลัก</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลหลักสวัสดิการ, งบประมาณ และสถานที่</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Requisition Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['requisition']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">shopping_cart</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การเบิกจ่าย</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการเบิกจ่ายสวัสดิการ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- History Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['history']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">history</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ประวัติ</h3>
        <p class="text-sm text-gray-500 mb-4">ดูประวัติการเบิกจ่ายสวัสดิการ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Process Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['process']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">settings</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">กระบวนการ</h3>
        <p class="text-sm text-gray-500 mb-4">ประมวลผลการเบิกจ่ายสวัสดิการ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Webboard Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['webboard']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">forum</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">เว็บบอร์ด</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการเว็บบอร์ดสวัสดิการ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Employee Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['employee']">
        <div class="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-pink-600">
          <i class="material-icons text-xl">person</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">พนักงาน</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลสวัสดิการของพนักงาน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class WelfareDashboardComponent {
}
