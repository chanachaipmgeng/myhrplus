import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { CompanyTypeService } from '../../services/company-type.service';
import { CompanyType } from '../../models/company-type.model';
import { CompanyTypeFormComponent } from './company-type-form.component';

@Component({
  selector: 'app-company-type-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    DataGridComponent,
    CompanyTypeFormComponent
  ],
  templateUrl: './company-type-list.component.html'
})
export class CompanyTypeListComponent implements OnInit {
  public service = inject(CompanyTypeService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: CompanyType | null = null;

  headerActions = [
    {
      label: 'เพิ่มใหม่',
      variant: 'primary' as const,
      onClick: () => this.onCreate()
    }
  ];

  columns = [
    { field: 'codeid', headerText: 'รหัส (Code)', width: '100px' },
    { field: 'tdesc', headerText: 'รายละเอียด (ไทย)', width: '200px' },
    { field: 'edesc', headerText: 'รายละเอียด (อังกฤษ)', width: '200px' },
    { field: 'edit_date', headerText: 'วันที่แก้ไข', type: 'date' as const, width: '120px' }
  ];

  ngOnInit() {
    // Initial data load handled by async pipe
  }

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(args: any) {
    const row = args.data || args;
    this.selectedItem = row;
    this.showModal = true;
  }

  onSaveSuccess() {
    // Refresh data
    this.data$ = this.service.getAll();
    this.showModal = false;
  }
}

