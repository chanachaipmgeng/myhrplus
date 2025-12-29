import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { DivisionService } from '../../services/division.service';
import { Division } from '../../models/division.model';
import { DivisionFormComponent } from './division-form.component';

@Component({
  selector: 'app-division-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    PageHeaderComponent,
    DataGridComponent,
    DivisionFormComponent
  ],
  templateUrl: './division-list.component.html'
})
export class DivisionListComponent implements OnInit {
  public service = inject(DivisionService);
  private translate = inject(TranslateService);

  data$ = this.service.getAll();
  showModal = false;
  selectedItem: Division | null = null;

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
      { field: 'bu1id', headerText: this.translate.instant('company.division.column.bu1Id'), width: '120px' },
      { field: 'tdesc', headerText: this.translate.instant('company.division.column.tdesc'), width: '200px' },
      { field: 'edesc', headerText: this.translate.instant('company.division.column.edesc'), width: '200px' },
      { field: 'short_name', headerText: this.translate.instant('company.division.column.shortName'), width: '100px' },
      {
        field: 'active',
        headerText: this.translate.instant('company.division.column.active'),
        width: '100px',
        type: 'boolean' as const,
        formatter: (value: string) => {
          return value === '1'
            ? this.translate.instant('common.active')
            : this.translate.instant('common.inactive');
        }
      },
      { field: 'build_date', headerText: this.translate.instant('company.division.column.buildDate'), type: 'date' as const, width: '120px' },
      { field: 'expire_date', headerText: this.translate.instant('company.division.column.expireDate'), type: 'date' as const, width: '120px' },
      { field: 'edit_date', headerText: this.translate.instant('company.division.column.editDate'), type: 'date' as const, width: '120px' }
    ];
  }

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(item: Division) {
    this.selectedItem = item;
    this.showModal = true;
  }

  onSaveSuccess() {
    this.data$ = this.service.getAll(); // Refresh data
  }
}


