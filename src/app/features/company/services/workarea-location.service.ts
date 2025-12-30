import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { WorkareaLocation } from '../models/workarea-location.model';

@Injectable({
  providedIn: 'root'
})
export class WorkareaLocationService extends BaseApiService<WorkareaLocation> {
  protected baseUrl = 'hr/company/workarea-locations';

  // State
  loading = signal<boolean>(false);
}

