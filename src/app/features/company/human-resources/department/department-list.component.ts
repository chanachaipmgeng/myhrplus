import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
import { DepartmentFormComponent } from './department-form.component';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    PageHeaderComponent,
    DataGridComponent,
    DepartmentFormComponent
  ],
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit {
  public service = inject(DepartmentService);
  private translate = inject(TranslateService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: Department | null = null;

  headerActions: any[] = [];
  columns: any[] = [];

  ngOnInit() {
    // Wait for translations to load, then initialize
    this.translate.get('common.addNew').subscribe(() => {
      this.initializeTranslations();
    });
  }

  private initializeTranslations() {
    this.headerActions = [
      {
        label: this.translate.instant('common.addNew'),
        variant: 'primary' as const,
        onClick: () => this.onCreate()
      }
    ];

    this.columns = [
      { field: 'bu2id', headerText: this.translate.instant('company.department.column.bu2Id'), width: '120px' },
      { field: 'parent', headerText: this.translate.instant('company.department.column.parent'), width: '120px' },
      { field: 'tdesc', headerText: this.translate.instant('company.department.column.tdesc'), width: '200px' },
      { field: 'edesc', headerText: this.translate.instant('company.department.column.edesc'), width: '200px' },
      { field: 'short_name', headerText: this.translate.instant('company.department.column.shortName'), width: '100px' },
      { 
        field: 'active', 
        headerText: this.translate.instant('company.department.column.active'), 
        width: '100px',
        type: 'boolean' as const,
        formatter: (value: string) => {
          return value === '1' 
            ? this.translate.instant('common.active')
            : this.translate.instant('common.inactive');
        }
      },
      { field: 'build_date', headerText: this.translate.instant('company.department.column.buildDate'), type: 'date' as const, width: '120px' },
      { field: 'expire_date', headerText: this.translate.instant('company.department.column.expireDate'), type: 'date' as const, width: '120px' },
      { field: 'edit_date', headerText: this.translate.instant('company.department.column.editDate'), type: 'date' as const, width: '120px' }
    ];
  }

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(item: Department) {
    this.selectedItem = item;
    this.showModal = true;
  }

  onSaveSuccess() {
    this.data$ = this.service.getAll(); // Refresh data
  }
}

