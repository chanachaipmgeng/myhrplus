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

  breadcrumbs = [
    { label: 'Company', url: '/portal/company' },
    { label: 'Human Resources', url: '/portal/company/human-resources' },
    { label: 'Bank Info', active: true }
  ];

  columns = [
    { field: 'bankid', header: 'Bank Code', width: '100px' },
    { field: 'bank_client_thname', header: 'Account Name (TH)', width: '200px' },
    { field: 'account', header: 'Account No.', width: '150px' },
    { field: 'isdefault', header: 'Default', width: '80px', type: 'boolean' }
  ];

  ngOnInit() {}

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(row: BankCompany) {
    this.selectedItem = row;
    this.showModal = true;
  }

  onSaveSuccess() {
    this.data$ = this.service.getAll();
    this.showModal = false;
  }
}
