import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { CompanyGroupService } from '../../services/company-group.service';
import { CompanyGroup } from '../../models/company-group.model';
import { CompanyGroupFormComponent } from './company-group-form.component';

@Component({
  selector: 'app-company-group-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    DataGridComponent,
    CompanyGroupFormComponent
  ],
  templateUrl: './company-group-list.component.html'
})
export class CompanyGroupListComponent implements OnInit {
  public service = inject(CompanyGroupService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: CompanyGroup | null = null;

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
    this.data$ = this.service.getAll();
    this.showModal = false;
  }
}
