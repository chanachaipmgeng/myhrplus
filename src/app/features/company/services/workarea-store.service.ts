import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { WorkareaStore } from '../models/workarea-store.model';

@Injectable({
  providedIn: 'root'
})
export class WorkareaStoreService extends BaseApiService<WorkareaStore> {
  protected baseUrl = 'hr/company/workarea-stores';

  // State
  loading = signal<boolean>(false);
}

