import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-human-resources-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent],
  template: `
    <app-page-header 
      title="Human Resources" 
      subtitle="จัดการข้อมูลบริษัทและโครงสร้างองค์กร"
      [breadcrumbs]="breadcrumbs">
    </app-page-header>
    
    <div class="p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Company Information</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Company Type (CS008) -->
        <a [routerLink]="['company-type']" 
           class="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">CO01A0102</span>
            <i class="fas fa-building text-gray-400 group-hover:text-blue-500"></i>
          </div>
          <h4 class="font-medium text-gray-800 group-hover:text-blue-600">ประเภทบริษัท</h4>
          <p class="text-xs text-gray-500 mt-1">Company Type (CS008)</p>
        </a>

        <!-- Company Group (CS001) -->
        <a [routerLink]="['company-group']" 
           class="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">CO04A10</span>
            <i class="fas fa-layer-group text-gray-400 group-hover:text-blue-500"></i>
          </div>
          <h4 class="font-medium text-gray-800 group-hover:text-blue-600">กลุ่มบริษัท</h4>
          <p class="text-xs text-gray-500 mt-1">Company Group (CS001)</p>
        </a>

        <!-- Bank's Company Info (CS006) -->
        <a [routerLink]="['bank-company']" 
           class="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">CO01A0110</span>
            <i class="fas fa-university text-gray-400 group-hover:text-blue-500"></i>
          </div>
          <h4 class="font-medium text-gray-800 group-hover:text-blue-600">ข้อมูลธนาคาร</h4>
          <p class="text-xs text-gray-500 mt-1">Bank Info (CS006)</p>
        </a>

        <!-- Company Assets (CS043) -->
        <a [routerLink]="['company-asset']" 
           class="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">CO01A0116</span>
            <i class="fas fa-laptop text-gray-400 group-hover:text-blue-500"></i>
          </div>
          <h4 class="font-medium text-gray-800 group-hover:text-blue-600">ทะเบียนทรัพย์สิน</h4>
          <p class="text-xs text-gray-500 mt-1">Company Assets (CS043)</p>
        </a>
      </div>
    </div>
  `
})
export class HumanResourcesListComponent {
  breadcrumbs = [
    { label: 'Company', url: '/portal/company' },
    { label: 'Human Resources', active: true }
  ];
}
