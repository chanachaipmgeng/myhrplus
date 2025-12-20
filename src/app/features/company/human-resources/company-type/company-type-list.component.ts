import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
    TranslateModule,
    PageHeaderComponent,
    DataGridComponent,
    CompanyTypeFormComponent
  ],
  templateUrl: './company-type-list.component.html'
})
export class CompanyTypeListComponent implements OnInit {
  public service = inject(CompanyTypeService);
  private translate = inject(TranslateService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: CompanyType | null = null;

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
      { field: 'codeid', headerText: this.translate.instant('company.companyType.column.codeId'), width: '100px' },
      { field: 'tdesc', headerText: this.translate.instant('company.companyType.column.tdesc'), width: '200px' },
      { field: 'edesc', headerText: this.translate.instant('company.companyType.column.edesc'), width: '200px' },
      { field: 'edit_date', headerText: this.translate.instant('company.companyType.column.editDate'), type: 'date' as const, width: '120px' }
    ];
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


