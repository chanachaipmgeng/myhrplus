import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { BankCompanyService } from '../../services/bank-company.service';
import { BankCompany } from '../../models/bank-company.model';
import { BankCompanyFormComponent } from './bank-company-form.component';

@Component({
  selector: 'app-bank-company-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PageHeaderComponent,
    DataGridComponent,
    BankCompanyFormComponent
  ],
  templateUrl: './bank-company-list.component.html'
})
export class BankCompanyListComponent implements OnInit {
  public service = inject(BankCompanyService);
  private translate = inject(TranslateService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: BankCompany | null = null;

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
      { field: 'bankid', headerText: this.translate.instant('company.bankCompany.column.bankId'), width: '100px' },
      { field: 'bank_client_thname', headerText: this.translate.instant('company.bankCompany.column.bankClientThName'), width: '200px' },
      { field: 'account', headerText: this.translate.instant('company.bankCompany.column.account'), width: '150px' },
      { field: 'isdefault', headerText: this.translate.instant('company.bankCompany.column.isDefault'), width: '80px', type: 'boolean' as const }
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
    this.data$ = this.service.getAll();
    this.showModal = false;
  }
}

