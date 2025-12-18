import { Injectable, inject, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Asset } from '../models/asset.model';
import { AssetTypeService } from './asset-type.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService extends BaseApiService<Asset> {
  protected baseUrl = 'hr/company/asset';
  private assetTypeService = inject(AssetTypeService);

  loading = signal<boolean>(false);

  // Helper for Asset Type Dropdown using the dedicated service
  getAssetTypeOptions() {
    return this.assetTypeService.getAll();
  }
}
