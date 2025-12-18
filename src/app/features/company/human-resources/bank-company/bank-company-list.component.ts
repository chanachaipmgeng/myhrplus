import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    PageHeaderComponent,
    DataGridComponent,
    BankCompanyFormComponent
  ],
  templateUrl: './bank-company-list.component.html'
})
export class BankCompanyListComponent implements OnInit {
  public service = inject(BankCompanyService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: BankCompany | null = null;

  headerActions = [
    {
      label: 'เพิ่มใหม่',
      variant: 'primary' as const,
      onClick: () => this.onCreate()
    }
  ];

  columns = [
    { field: 'bankid', headerText: 'Bank Code', width: '100px' },
    { field: 'bank_client_thname', headerText: 'Account Name (TH)', width: '200px' },
    { field: 'account', headerText: 'Account No.', width: '150px' },
    { field: 'isdefault', headerText: 'Default', width: '80px', type: 'boolean' as const }
  ];

  ngOnInit() {}

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
