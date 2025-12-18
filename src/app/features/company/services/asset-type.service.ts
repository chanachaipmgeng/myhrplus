import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { AssetType } from '../models/asset-type.model';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService extends BaseApiService<AssetType> {
  protected baseUrl = 'hr/master/asset-type';
}
