import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-settings-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent
  ],
  template: `
    <app-page-header 
      title="Settings Management" 
      subtitle="ศูนย์กลางตั้งค่าระบบและสิทธิ์การเข้าถึง">
    </app-page-header>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- User Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['user']">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
          <i class="material-icons text-xl">person</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ผู้ใช้</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการผู้ใช้, Email Reminder และการแจ้งเตือน</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- System Access Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['system-access']">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
          <i class="material-icons text-xl">security</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">การเข้าถึงระบบ</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการสิทธิ์การเข้าถึงระบบและหน้าจอ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- User Level Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['user-level']">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
          <i class="material-icons text-xl">trending_up</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ระดับผู้ใช้</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการระดับผู้ใช้และสิทธิ์</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Personal Data Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['personal-data']">
        <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-600">
          <i class="material-icons text-xl">lock</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลส่วนบุคคล</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการปกป้องข้อมูลส่วนบุคคล (PDPA)</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Options Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['options']">
        <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
          <i class="material-icons text-xl">tune</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตัวเลือก</h3>
        <p class="text-sm text-gray-500 mb-4">ตั้งค่าตัวเลือกและค่าคอนฟิกของระบบ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Excel Report Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['excel-report']">
        <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
          <i class="material-icons text-xl">description</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">รายงาน Excel</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการรายงาน Excel และเทมเพลต</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Main Master Data Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['main-master-data']">
        <div class="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-pink-600">
          <i class="material-icons text-xl">folder</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ข้อมูลหลัก</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการข้อมูลหลักของระบบ</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Workflow Screen Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['workflow-screen']">
        <div class="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
          <i class="material-icons text-xl">account_tree</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">หน้าจอ Workflow</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการหน้าจอและกระบวนการ Workflow</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>

      <!-- Routing Config Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
           [routerLink]="['routing-config']">
        <div class="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4 text-cyan-600">
          <i class="material-icons text-xl">route</i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ตั้งค่า Routing</h3>
        <p class="text-sm text-gray-500 mb-4">จัดการการกำหนดเส้นทางและ routing</p>
        <div class="flex items-center text-blue-600 text-sm font-medium">
          เข้าสู่เมนู <i class="material-icons text-sm ml-2">arrow_forward</i>
        </div>
      </div>
    </div>
  `
})
export class SettingsDashboardComponent {
}
