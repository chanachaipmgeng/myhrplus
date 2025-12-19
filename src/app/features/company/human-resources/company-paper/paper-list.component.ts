import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { PaperService } from '../../services/paper.service';
import { Paper } from '../../models/paper.model';
import { PaperFormComponent } from './paper-form.component';

@Component({
  selector: 'app-paper-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    DataGridComponent,
    PaperFormComponent
  ],
  templateUrl: './paper-list.component.html'
})
export class PaperListComponent implements OnInit {
  public service = inject(PaperService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: Paper | null = null;

  headerActions = [
    {
      label: 'เพิ่มใหม่',
      variant: 'primary' as const,
      onClick: () => this.onCreate()
    }
  ];

  columns = [
    { field: 'paperid', headerText: 'รหัสเอกสาร (Code)', width: '150px' },
    { field: 'tdesc', headerText: 'รายละเอียด (ไทย)', width: '250px' },
    { field: 'edesc', headerText: 'รายละเอียด (อังกฤษ)', width: '250px' },
    { 
      field: 'jb_active', 
      headerText: 'Active in Jobboard', 
      width: '150px',
      type: 'boolean' as const,
      formatter: (value: string) => value === '1' ? 'ใช่' : 'ไม่'
    },
    { 
      field: 'attachfile_active', 
      headerText: 'แสดงเอกสารแนบ', 
      width: '150px',
      type: 'boolean' as const,
      formatter: (value: string) => value === '1' ? 'ใช่' : 'ไม่'
    },
    { field: 'edit_date', headerText: 'วันที่แก้ไข', type: 'date' as const, width: '120px' }
  ];

  ngOnInit() {
    // Initial data load handled by async pipe
  }

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(item: Paper) {
    this.selectedItem = item;
    this.showModal = true;
  }

  onSaveSuccess() {
    this.data$ = this.service.getAll(); // Refresh data
  }
}
