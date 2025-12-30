import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { BrandStore } from '../models/brand-store.model';

@Injectable({
  providedIn: 'root'
})
export class BrandStoreService extends BaseApiService<BrandStore> {
  protected baseUrl = 'hr/company/brand-stores';

  // State
  loading = signal<boolean>(false);
}

