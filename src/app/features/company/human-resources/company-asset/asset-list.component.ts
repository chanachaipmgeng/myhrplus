import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { AssetService } from '../../services/asset.service';
import { Asset } from '../../models/asset.model';
import { AssetFormComponent } from './asset-form.component';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    DataGridComponent,
    AssetFormComponent
  ],
  templateUrl: './asset-list.component.html'
})
export class AssetListComponent implements OnInit {
  public service = inject(AssetService);
  
  data$ = this.service.getAll();
  showModal = false;
  selectedItem: Asset | null = null;

  breadcrumbs = [
    { label: 'Company', url: '/portal/company' },
    { label: 'Human Resources', url: '/portal/company/human-resources' },
    { label: 'Company Assets', active: true }
  ];

  columns = [
    { field: 'assetid', header: 'Asset Code', width: '100px' },
    { field: 'tdesc', header: 'Asset Name (TH)', width: '200px' },
    { field: 'astype', header: 'Type', width: '100px' },
    { field: 'status', header: 'Status', width: '80px' },
    { field: 'owner', header: 'Owner', width: '120px' }
  ];

  ngOnInit() {}

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(row: Asset) {
    this.selectedItem = row;
    this.showModal = true;
  }

  onSaveSuccess() {
    this.data$ = this.service.getAll();
    this.showModal = false;
  }
}
